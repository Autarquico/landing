import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { getArticle } from '../../content/journal'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../../seo/routes'

interface Props {
  locale: Locale
  slug?: string
}

export function JournalArticle({ locale, slug: propSlug }: Props) {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const slug = propSlug || paramSlug
  const { i18n } = useTranslation()
  const article = slug ? getArticle(slug) : undefined

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  if (!article) {
    return null
  }

  const prefix = locale === 'en' ? '/en' : ''
  const dateFormatted = new Date(article.date).toLocaleDateString(
    locale === 'en' ? 'en-US' : 'es-ES',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <div className="min-h-screen bg-paper dark:bg-ink">
      <Navigation lightBackground />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl">
          <header className="mb-12 md:mb-16 text-center">
            <a
              href={`${prefix}/journal`}
              className="inline-block text-xs font-medium tracking-[0.22em] uppercase text-muted hover:text-ink dark:hover:text-white transition-colors mb-8"
            >
              {locale === 'en' ? '← Journal' : '← Journal'}
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
                {paragraph}
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
