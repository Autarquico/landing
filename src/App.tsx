import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Eyebrow } from './components/Eyebrow'
import { RevealSection } from './components/RevealSection'
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

        {/* Diferenciación */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-14">
              <Eyebrow className="mb-10">{t('home.diff.eyebrow')}</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch]">
                {t('home.diff.heading.before')}{' '}
                <span className="italic text-emerald-500">{t('home.diff.heading.kw')}</span>
              </h2>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block max-w-4xl mx-auto">
              <div className="grid grid-cols-[1fr_2fr_2fr] gap-x-8 text-sm uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500 pb-4 border-b border-gray-200 dark:border-neutral-700">
                <div></div>
                <div>{t('home.diff.col.market')}</div>
                <div>{t('home.diff.col.us')}</div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_2fr_2fr] gap-x-8 py-5 border-b border-gray-100 dark:border-neutral-800 text-base md:text-lg"
                >
                  <div className="font-semibold">{t(`home.diff.row${i}.label`)}</div>
                  <div className="text-gray-500 dark:text-neutral-400">
                    {t(`home.diff.row${i}.market`)}
                  </div>
                  <div className="text-black dark:text-neutral-100">
                    {t(`home.diff.row${i}.us`)}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-6 max-w-md mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-t border-gray-100 dark:border-neutral-800 pt-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500 mb-3">
                    {t(`home.diff.row${i}.label`)}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-500 dark:text-neutral-400">
                      <span className="text-[10px] uppercase tracking-[0.18em] mr-2">
                        {t('home.diff.col.market')}
                      </span>
                      {t(`home.diff.row${i}.market`)}
                    </p>
                    <p className="text-black dark:text-neutral-100">
                      <span className="text-[10px] uppercase tracking-[0.18em] mr-2 text-gray-400 dark:text-neutral-500">
                        {t('home.diff.col.us')}
                      </span>
                      {t(`home.diff.row${i}.us`)}
                    </p>
                  </div>
                </div>
              ))}
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
              href="mailto:hola@autarqui.co?subject=autarqui"
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
