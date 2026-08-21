import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Eyebrow } from './components/Eyebrow'
import { RevealSection } from './components/RevealSection'
import { ScrollToTop } from './components/ScrollToTop'
import { ProblemHero } from './sections/ProblemHero'
import { SEO } from './seo/SEO'
import { useLocale } from './seo/useLocale'
import type { Locale } from './seo/routes'

interface AppProps {
  locale?: Locale
}

function App({ locale = 'es' }: AppProps) {
  useLocale(locale)
  const { t } = useTranslation()
  useEffect(() => {
    const html = document.documentElement
    const prevSnap = html.style.scrollSnapType
    const prevBehavior = html.style.scrollBehavior
    const prevPaddingTop = html.style.scrollPaddingTop
    html.style.scrollSnapType = 'y proximity'
    html.style.scrollBehavior = 'smooth'
    html.style.scrollPaddingTop = '5rem'
    return () => {
      html.style.scrollSnapType = prevSnap
      html.style.scrollBehavior = prevBehavior
      html.style.scrollPaddingTop = prevPaddingTop
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <ScrollToTop />
      <SEO routeId="home" locale={locale} />
      <Navigation />

      <main>
        <ProblemHero />

        {/* Pain — adopción de IA */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('home.pain.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-12">
              {t('home.pain.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('home.pain.heading.kw')}</span>
            </h2>
            <ul className="w-full max-w-3xl divide-y divide-gray-100 dark:divide-neutral-800 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="py-6">
                  <p className="font-medium text-base md:text-lg text-black dark:text-neutral-100 mb-1">
                    — {t(`home.pain.item${i}.q`)}
                  </p>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {t(`home.pain.item${i}.a`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Propuesta — la capa común */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('home.proposal.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[28ch] mb-10">
              {t('home.proposal.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('home.proposal.heading.kw')}</span>
              {t('home.proposal.heading.after')}
            </h2>
            <div className="max-w-2xl space-y-6 text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
              <p>
                {t('home.proposal.body1.before')}{' '}
                <span className="italic text-emerald-500">{t('home.proposal.body1.kw')}</span>
                {t('home.proposal.body1.after')}
              </p>
              <p>{t('home.proposal.body2')}</p>
            </div>
          </div>
        </RevealSection>

        {/* CTA */}
        <RevealSection
          id="contacto"
          className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center gap-8">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch]">
              {t('home.cta.before')}{' '}
              <span className="italic text-emerald-500">{t('home.cta.kw')}</span>
              {t('home.cta.after')}
            </h2>
            <a
              href="mailto:info@autarqui.co?subject=autarqui"
              className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              {t('home.cta.link')}
            </a>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}

export default App
