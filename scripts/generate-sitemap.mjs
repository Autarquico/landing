import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const SITE_URL = 'https://autarqui.co'

const routes = [
  { id: 'home',            paths: { es: '/',                    en: '/en' } },
  { id: 'sigma',           paths: { es: '/sigma',               en: '/en/sigma' } },
  { id: 'sigma-negocios',  paths: { es: '/sigma/negocios',      en: '/en/sigma/businesses' } },
  { id: 'sigma-asesorias', paths: { es: '/sigma/asesorias',     en: '/en/sigma/advisors' } },
  { id: 'delta',           paths: { es: '/delta',               en: '/en/delta' } },
  { id: 'canarias',        paths: { es: '/canarias',            en: '/en/canarias' } },
  { id: 'terms',           paths: { es: '/legal/terminos' } },
  { id: 'privacy',         paths: { es: '/legal/privacidad' } },
  { id: 'gdpr',            paths: { es: '/legal/gdpr' } },
  { id: 'journal',         paths: { es: '/journal',             en: '/en/journal' } },
]

async function getJournalArticles() {
  const journalDir = path.join(ROOT, 'src/content/journal')
  const files = await fs.readdir(journalDir)
  const articles = []
  for (const file of files) {
    if (!file.endsWith('.json')) continue
    const content = JSON.parse(await fs.readFile(path.join(journalDir, file), 'utf-8'))
    if (content.published === false) continue
    articles.push({
      slug: content.slug,
      date: content.date,
      title: content.title,
      excerpt: content.excerpt,
      author: content.author,
    })
  }
  return articles.sort((a, b) => b.date.localeCompare(a.date))
}

const today = new Date().toISOString().slice(0, 10)

function urlEntry(loc, esPath, enPath, lastmod = today) {
  const alts = [
    `    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${esPath}"/>`,
  ]
  if (enPath) {
    alts.push(`    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}"/>`)
  }
  alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${esPath}"/>`)

  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
${alts.join('\n')}
    <lastmod>${lastmod}</lastmod>
  </url>`
}

const entries = []
for (const r of routes) {
  entries.push(urlEntry(r.paths.es, r.paths.es, r.paths.en))
  if (r.paths.en) {
    entries.push(urlEntry(r.paths.en, r.paths.es, r.paths.en))
  }
}

const journalArticles = await getJournalArticles()
for (const article of journalArticles) {
  const esPath = `/journal/${article.slug}`
  const enPath = `/en/journal/${article.slug}`
  entries.push(urlEntry(esPath, esPath, enPath, article.date))
  entries.push(urlEntry(enPath, esPath, enPath, article.date))
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

await fs.writeFile(path.join(ROOT, 'public', 'sitemap.xml'), sitemap)
await fs.writeFile(path.join(ROOT, 'public', 'robots.txt'), robots)

// Generate RSS feed
const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const rssItems = journalArticles.map((a) => `    <item>
      <title>${escapeXml(a.title.es)}</title>
      <link>${SITE_URL}/journal/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/journal/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${escapeXml(a.excerpt.es)}</description>
      <author>info@autarqui.co (${a.author})</author>
    </item>`).join('\n')

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>autarqui.co Journal</title>
    <link>${SITE_URL}/journal</link>
    <description>Ensayos sobre software, IA y autonomía operativa</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>
`

await fs.writeFile(path.join(ROOT, 'public', 'feed.xml'), feed)
console.log('[sitemap] wrote public/sitemap.xml, public/robots.txt, public/feed.xml')
