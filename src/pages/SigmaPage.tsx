import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { RevealSection } from '../components/RevealSection'
import { ScrollToTop } from '../components/ScrollToTop'
import { AudienceTabs, type Audience } from '../components/AudienceTabs'
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
  const [audience, setAudience] = useState<Audience>('businesses')
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId="sigma" locale={locale} />
      <Navigation lightBackground />

      <main className="pt-24 md:pt-28">
        <section
          id="producto"
          className="snap-start min-h-screen container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(220px,35%)_1fr] items-center gap-10 lg:gap-24 py-16 md:py-24 lg:py-32"
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

          <div className="max-w-[44ch] text-center mx-auto lg:text-left lg:mx-0">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
              {t('sigma.hero.h1.line1')}<br />
              {t('sigma.hero.h1.line2')}
            </h1>
            <p className="font-display italic text-emerald-500 text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight mb-8">
              {t('sigma.hero.h1.line3')}
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[44ch] mx-auto lg:mx-0">
              {t('sigma.hero.sub')}
            </p>
          </div>
        </section>

        {/* Pain situations — audience-aware */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-6">{t('sigma.painPoints.eyebrow')}</Eyebrow>
            <AudienceTabs value={audience} onChange={setAudience} className="mb-10" />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-12">
              {t('sigma.painPoints.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('sigma.painPoints.heading.kw')}</span>
              {t('sigma.painPoints.heading.after')}
            </h2>
            <ul className="w-full max-w-3xl divide-y divide-gray-100 dark:divide-neutral-800 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="py-6">
                  <p className="font-medium text-base md:text-lg text-black dark:text-neutral-100 mb-1">
                    — {t(`sigma.painPoints.${audience}.item${i}.q`)}
                  </p>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {t(`sigma.painPoints.${audience}.item${i}.a`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Propuesta — audience-aware */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-6">{t('sigma.proposal.eyebrow')}</Eyebrow>
            <AudienceTabs value={audience} onChange={setAudience} className="mb-10" />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[26ch] mb-10">
              {t(`sigma.proposal.${audience}.heading.before`)}{' '}
              <span className="italic text-emerald-500">{t(`sigma.proposal.${audience}.heading.kw`)}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-3 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="italic text-gray-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
                  {t(`sigma.proposal.${audience}.example${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Lo que sigma asume */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-14">
              <Eyebrow className="mb-10">{t('sigma.assumes.eyebrow')}</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch]">
                {t('sigma.assumes.heading.before')}{' '}
                <span className="italic text-emerald-500">{t('sigma.assumes.heading.kw')}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <article key={i} className="text-left">
                  <h3 className="font-body font-semibold text-lg md:text-xl tracking-tight mb-2">
                    {t(`sigma.assumes.item${i}.title`)}
                  </h3>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                    {t(`sigma.assumes.item${i}.body`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Confianza */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('sigma.trust.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-10">
              {t('sigma.trust.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('sigma.trust.heading.kw')}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-4 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" strokeWidth={2.5} />
                  <span className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                    {t(`sigma.trust.bullet${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Resultados */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-6 md:mb-10">{t('sigma.results.eyebrow')}</Eyebrow>
            <h2 className="font-display text-2xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-8 md:mb-14">
              {t('sigma.results.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('sigma.results.heading.kw')}</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mb-8 md:mb-14">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-t border-gray-100 dark:border-neutral-800 pt-3 md:pt-6 text-left">
                  <div className="font-display italic text-3xl md:text-6xl lg:text-7xl leading-none mb-2 md:mb-4">
                    {t(`sigma.results.stat${i}.value`)}
                  </div>
                  <p className="text-[11px] leading-snug md:text-base md:leading-relaxed text-gray-500 dark:text-neutral-400 max-w-[28ch]">
                    {t(`sigma.results.stat${i}.label`)}
                  </p>
                </div>
              ))}
            </div>
            <figure className="max-w-2xl border-l-2 border-black dark:border-neutral-100 pl-4 md:pl-6 text-left">
              <blockquote className="font-display text-sm md:text-xl italic leading-snug mb-2 md:mb-3">
                "{t('sigma.results.quote')}"
              </blockquote>
              <figcaption className="text-[10px] md:text-xs text-gray-500 dark:text-neutral-400 not-italic tracking-[0.12em] uppercase">
                {t('sigma.results.author')}
              </figcaption>
            </figure>
          </div>
        </RevealSection>

        <RevealSection id="contacto" className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
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
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}
