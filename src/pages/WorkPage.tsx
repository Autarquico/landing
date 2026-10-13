import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'
import { products } from '../content/products'

export const WorkPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
  useLocale(locale)
  const { t } = useTranslation()
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId="work" locale={locale} />
      <Navigation />

      <main className="pt-24 md:pt-28">
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
              {t('work.h1')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-300 leading-relaxed">
              {t('work.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => {
              const content = (
                <>
                  <div className="flex flex-col gap-1 mb-6">
                    <span className="text-[0.7rem] font-medium tracking-[0.2em] text-gray-400 dark:text-neutral-500">
                      {t(p.typeKey)}
                    </span>
                    <span className="text-[0.7rem] font-medium tracking-[0.2em] text-gray-400 dark:text-neutral-500">
                      {t(p.domainKey)}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl tracking-tight mb-3">{p.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">{t(p.descKey)}</p>
                </>
              )
              const className =
                'group flex flex-col border border-gray-200 dark:border-neutral-800 rounded-lg p-8 hover:border-black dark:hover:border-neutral-100 transition-colors'
              return p.external ? (
                <a key={p.id} href={p.href(prefix)} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <Link key={p.id} to={p.href(prefix)} className={className}>
                  {content}
                </Link>
              )
            })}
          </div>

          <div className="mt-14">
            <Link
              to={`${prefix}/firm`}
              className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              {t('work.cta')} →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
