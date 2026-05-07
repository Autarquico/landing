import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const SITE_URL = 'https://autarqui.co'

const routes = [
  { id: 'home',    paths: { es: '/',                 en: '/en' } },
  { id: 'sigma',   paths: { es: '/sigma',            en: '/en/sigma' } },
  { id: 'delta',   paths: { es: '/delta',            en: '/en/delta' } },
  { id: 'terms',   paths: { es: '/legal/terminos' } },
  { id: 'privacy', paths: { es: '/legal/privacidad' } },
  { id: 'gdpr',    paths: { es: '/legal/gdpr' } },
]

const today = new Date().toISOString().slice(0, 10)

function urlEntry(loc, esPath, enPath) {
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
    <lastmod>${today}</lastmod>
  </url>`
}

const entries = []
for (const r of routes) {
  entries.push(urlEntry(r.paths.es, r.paths.es, r.paths.en))
  if (r.paths.en) {
    entries.push(urlEntry(r.paths.en, r.paths.es, r.paths.en))
  }
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
console.log('[sitemap] wrote public/sitemap.xml and public/robots.txt')
