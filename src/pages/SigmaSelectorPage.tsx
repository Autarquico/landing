import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'

export const SigmaSelectorPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
  useLocale(locale)
  const { t } = useTranslation()
  const prefix = locale === 'en' ? '/en' : ''

  const doors = [
    { id: 'businesses', path: `${prefix}/sigma/negocios` },
    { id: 'advisors', path: `${prefix}/sigma/asesorias` },
  ] as const

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100 flex flex-col">
      <ScrollToTop />
      <SEO routeId="sigma" locale={locale} />
      <Navigation lightBackground />

      <main className="flex-1 pt-24 md:pt-28">
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <img
            src="/sigma-logo.svg"
            alt="sigma"
            className="w-[clamp(120px,18vw,220px)] h-auto dark:invert mb-7"
          />
          <span className="text-xs font-medium tracking-[0.42em] mb-4">
            S&nbsp;I&nbsp;G&nbsp;M&nbsp;A
          </span>
          <p className="text-sm text-gray-500 dark:text-neutral-400 max-w-[28ch] mb-10">
            {t('sigma.selector.tagline')}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch] mb-5">
            {t('sigma.selector.heading.before')}{' '}
            <span className="italic text-emerald-500">{t('sigma.selector.heading.kw')}</span>
            {t('sigma.selector.heading.after')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mt-14">
            {doors.map(({ id, path }) => (
              <Link
                key={id}
                to={path}
                className="group flex flex-col items-center text-center gap-4 border border-gray-200 dark:border-neutral-800 rounded-lg p-10 hover:border-black dark:hover:border-neutral-100 transition-colors"
              >
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight">
                  {t(`sigma.selector.${id}.label`)}
                </h2>
                <p className="text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[32ch]">
                  {t(`sigma.selector.${id}.desc`)}
                </p>
                <span className="mt-3 text-sm font-medium border-b border-black dark:border-neutral-100 pb-1 group-hover:opacity-60 transition-opacity">
                  {t(`sigma.selector.${id}.cta`)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
