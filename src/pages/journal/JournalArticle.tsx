import { useParams } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { getArticle } from '../../content/journal'
import { useLocale } from '../../seo/useLocale'
import { articleJsonLd, breadcrumbJsonLd } from '../../seo/jsonLd'
import type { Locale } from '../../seo/routes'

const SITE_URL = 'https://autarqui.co'

function parseLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-emerald-500 transition-colors"
      >
        {match[1]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

interface Props {
  locale: Locale
  slug?: string
}

export function JournalArticle({ locale, slug: propSlug }: Props) {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const slug = propSlug || paramSlug
  useLocale(locale)
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return null
  }

  const prefix = locale === 'en' ? '/en' : ''
  const dateFormatted = new Date(article.date).toLocaleDateString(
    locale === 'en' ? 'en-US' : 'es-ES',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  const title = `${article.title[locale]} · autarqui.co`
  const description = article.excerpt[locale]
  const url = `${SITE_URL}${prefix}/journal/${slug}`
  const esUrl = `${SITE_URL}/journal/${slug}`
  const enUrl = `${SITE_URL}/en/journal/${slug}`

  const jsonLd = articleJsonLd({
    title: article.title[locale],
    description,
    slug: slug!,
    date: article.date,
    author: article.author,
    locale,
  })

  const breadcrumb = breadcrumbJsonLd([
    { name: locale === 'en' ? 'Home' : 'Inicio', url: `${SITE_URL}${prefix}/` },
    { name: 'Journal', url: `${SITE_URL}${prefix}/journal` },
    { name: article.title[locale], url },
  ])

  return (
    <div className="min-h-screen bg-paper dark:bg-ink">
      <Head>
        <html lang={locale} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="software a medida, inteligencia artificial, automatización empresarial, IA, desarrollo software personalizado, transformación digital" />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="es" href={esUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="x-default" href={esUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="autarqui.co" />
        <meta property="og:title" content={article.title[locale]} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
        <meta property="og:locale:alternate" content={locale === 'es' ? 'en_US' : 'es_ES'} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title[locale]} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Head>

      <Navigation lightBackground />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl">
          <header className="mb-12 md:mb-16 text-center">
            <a
              href={`${prefix}/journal`}
              className="inline-block text-xs font-medium tracking-[0.22em] uppercase text-muted hover:text-ink dark:hover:text-white transition-colors mb-8"
            >
              ← Journal
            </a>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink dark:text-white mb-4">
              {article.title[locale]}
            </h1>

            <p className="font-display text-lg md:text-xl text-muted italic mb-8">
              {article.subtitle[locale]}
            </p>

            <div className="flex items-center justify-center gap-3 text-sm text-muted">
              <span>{article.author}</span>
              <span>·</span>
              <time dateTime={article.date}>{dateFormatted}</time>
              <span>·</span>
              <span>
                {article.readingTime} {locale === 'en' ? 'min read' : 'min lectura'}
              </span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.body[locale].map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed text-ink/80 dark:text-white/80 mb-6 text-justify"
              >
                {parseLinks(paragraph)}
              </p>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-hairline dark:border-white/10 text-center">
            <p className="text-sm text-muted">
              {locale === 'en' ? 'Written by' : 'Escrito por'}{' '}
              <span className="text-ink dark:text-white">{article.author}</span>
              {' · '}
              <a
                href={`${prefix}/journal`}
                className="hover:text-ink dark:hover:text-white transition-colors"
              >
                {locale === 'en' ? 'More essays' : 'Más ensayos'}
              </a>
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  )
}
