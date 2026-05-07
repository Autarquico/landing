import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-xs font-medium tracking-[0.22em] uppercase text-gray-500 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
)

export const SigmaPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
  useLocale(locale)
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100">
      <SEO routeId="sigma" locale={locale} />
      <Navigation lightBackground />

      <main className="pt-24 md:pt-28">
        <section
          id="producto"
          className="container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(220px,35%)_1fr] items-center gap-10 lg:gap-24 py-16 md:py-24 lg:py-32 min-h-[80vh]"
        >
          <div className="flex flex-col items-center gap-7">
            <img
              src="/sigma-logo.svg"
              alt="sigma"
              className="w-[clamp(140px,22vw,280px)] h-auto dark:invert"
            />
            <span className="text-xs font-medium tracking-[0.42em] text-black dark:text-neutral-100">
              S&nbsp;I&nbsp;G&nbsp;M&nbsp;A
            </span>
          </div>

          <div className="max-w-[42ch] text-center mx-auto lg:text-left lg:mx-0">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight mb-7">
              {t('sigma.hero.h1.line1')}<br />
              {t('sigma.hero.h1.line2')}<br />
              <span className="italic text-emerald-500">{t('sigma.hero.h1.line3')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-neutral-400 leading-snug max-w-[38ch] mx-auto lg:mx-0">
              {t('sigma.hero.sub')}
            </p>
          </div>
        </section>

        <section id="como" className="border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('sigma.manifesto.eyebrow')}</Eyebrow>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight max-w-[32ch]">
              {t('sigma.manifesto.before')}{' '}
              <span className="italic text-emerald-500">{t('sigma.manifesto.kw1')}</span>{' '}
              {t('sigma.manifesto.middle')}{' '}
              <span className="italic text-emerald-500">{t('sigma.manifesto.kw2')}</span>{' '}
              {t('sigma.manifesto.between')}{' '}
              <span className="italic text-emerald-500">{t('sigma.manifesto.kw3')}</span>
              {t('sigma.manifesto.after')}
            </p>
          </div>
        </section>

        <section className="border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center lg:text-left">
            <Eyebrow className="mb-10">{t('sigma.how.eyebrow')}</Eyebrow>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              {[1, 2, 3].map((i) => (
                <article key={i} className="text-center lg:text-left">
                  <span className="block text-xs font-medium tracking-[0.22em] text-black dark:text-neutral-100 border-t border-black dark:border-neutral-100 pt-2 w-7 mb-5 mx-auto lg:mx-0">
                    {String(i).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4 italic text-emerald-500">
                    {t(`sigma.pillar${i}.title`)}
                  </h3>
                  <p className="text-gray-500 dark:text-neutral-400 max-w-[32ch] leading-relaxed mx-auto lg:mx-0">
                    {t(`sigma.pillar${i}.body`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center gap-8">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch]">
              {t('sigma.cta.before')}{' '}
              <span className="italic text-emerald-500">{t('sigma.cta.kw')}</span>
              {t('sigma.cta.after')}
            </h2>
            <a
              href="mailto:hola@autarqui.co?subject=sigma"
              className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              {t('sigma.cta.link')}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
