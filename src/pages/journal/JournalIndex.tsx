import { useEffect } from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { getArticlesByLocale } from '../../content/journal'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../../seo/routes'

interface Props {
  locale: Locale
}

export function JournalIndex({ locale }: Props) {
  const { i18n } = useTranslation()
  const articles = getArticlesByLocale(locale)
  const prefix = locale === 'en' ? '/en' : ''

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  return (
    <div className="min-h-screen bg-paper dark:bg-ink">
      <Navigation lightBackground />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink dark:text-white mb-4">
              Journal
            </h1>
            <p className="text-muted text-lg">
              {locale === 'en'
                ? 'Essays on software, AI, and the future of work'
                : 'Ensayos sobre software, IA y el futuro del trabajo'}
            </p>
          </header>

          <div className="space-y-12">
            {articles.map((article) => {
              const dateFormatted = new Date(article.date).toLocaleDateString(
                locale === 'en' ? 'en-US' : 'es-ES',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )

              return (
                <article key={article.slug} className="group">
                  <a href={`${prefix}/journal/${article.slug}`} className="block">
                    <time
                      dateTime={article.date}
                      className="text-xs font-medium tracking-[0.12em] uppercase text-muted mb-2 block"
                    >
                      {dateFormatted}
                    </time>

                    <h2 className="font-display text-xl md:text-2xl leading-tight text-ink dark:text-white group-hover:text-muted dark:group-hover:text-white/70 transition-colors mb-2">
                      {article.title}
                    </h2>

                    <p className="text-muted text-base leading-relaxed mb-2">
                      {article.excerpt}
                    </p>

                    <span className="text-sm text-muted/70">
                      {article.readingTime} {locale === 'en' ? 'min read' : 'min lectura'}
                    </span>
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
