import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { ContactForm } from '../components/ContactForm'
import { Eyebrow } from '../components/Eyebrow'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'

export const FirmPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
  useLocale(locale)
  const { t } = useTranslation()

  const capabilities = ['build', 'adapt', 'connect', 'automate'] as const
  const engagement = ['explore', 'build', 'operate'] as const

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId="firm" locale={locale} />
      <Navigation />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8 max-w-[18ch]">
              {t('firm.h1')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-300 leading-relaxed">
              {t('firm.intro')}
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 border-t border-gray-100 dark:border-neutral-800">
          <Eyebrow className="mb-10">{t('firm.capabilities.eyebrow')}</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {capabilities.map((c) => (
              <div key={c}>
                <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-3">{t(`firm.${c}.title`)}</h2>
                <p className="text-gray-600 dark:text-neutral-300 leading-relaxed max-w-[40ch]">
                  {t(`firm.${c}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Buy or build? */}
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 border-t border-gray-100 dark:border-neutral-800">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight mb-8 max-w-[16ch]">
              {t('firm.buyOrBuild.heading')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-300 leading-relaxed">
              {t('firm.buyOrBuild.body')}
            </p>
          </div>
        </section>

        {/* Engagement */}
        <section className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 border-t border-gray-100 dark:border-neutral-800">
          <Eyebrow className="mb-10">{t('firm.engagement.eyebrow')}</Eyebrow>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {engagement.map((e, i) => (
              <li key={e}>
                <span className="text-sm font-medium tracking-[0.2em] text-gray-400 dark:text-neutral-500">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl tracking-tight mt-3 mb-3">{t(`firm.engagement.${e}.title`)}</h3>
                <p className="text-gray-600 dark:text-neutral-300 leading-relaxed max-w-[34ch]">
                  {t(`firm.engagement.${e}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contacto */}
        <section
          id="contacto"
          className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 border-t border-gray-100 dark:border-neutral-800 flex flex-col items-center text-center gap-8"
        >
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-[20ch]">
            {t('firm.contact.heading')}
          </h2>
          <ContactForm source="firm" />
        </section>
      </main>

      <Footer />
    </div>
  )
}
