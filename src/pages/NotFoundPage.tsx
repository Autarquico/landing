import { Head } from 'vite-react-ssg'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { useLocale } from '../seo/useLocale'

export const NotFoundPage: React.FC = () => {
  const { pathname } = useLocation()
  const locale = pathname.startsWith('/en') ? 'en' : 'es'
  useLocale(locale)
  const { t } = useTranslation()
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-neutral-100">
      <ScrollToTop />
      <Head>
        <html lang={locale} />
        <title>{t('notFound.title')}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navigation />

      <main className="pt-24 md:pt-28">
        <section className="container mx-auto px-4 md:px-6 lg:px-12 min-h-[60vh] flex flex-col items-center justify-center text-center py-16 md:py-24">
          <span className="font-display text-6xl md:text-8xl tracking-tight text-gray-300 dark:text-neutral-700 mb-6">
            404
          </span>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight mb-4">
            {t('notFound.heading')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed max-w-md mb-8">
            {t('notFound.body')}
          </p>
          <Link
            to={prefix || '/'}
            className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
          >
            {t('notFound.cta')} →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
