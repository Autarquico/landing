import { useEffect } from 'react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { RevealSection } from '../components/RevealSection'
import { ScrollToTop } from '../components/ScrollToTop'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'
import type { Audience } from '../components/AudienceTabs'

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-xs font-medium tracking-[0.22em] uppercase text-gray-500 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
)

interface SigmaPageProps {
  locale?: Locale
  audience: Audience
}

export const SigmaPage: React.FC<SigmaPageProps> = ({ locale = 'es', audience }) => {
  useLocale(locale)
  const { t } = useTranslation()
  const routeId = audience === 'businesses' ? 'sigma-negocios' : 'sigma-asesorias'
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

  const k = (suffix: string) => `sigma.${audience}.${suffix}`

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId={routeId} locale={locale} />
      <Navigation lightBackground />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
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
            <p className="text-sm text-gray-500 dark:text-neutral-400 text-center max-w-[24ch]">
              {t(k('hero.tagline'))}
            </p>
          </div>

          <div className="max-w-[44ch] text-center mx-auto lg:text-left lg:mx-0">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
              {t(k('hero.h1.line1'))}<br />
              {t(k('hero.h1.line2'))}
            </h1>
            <p className="font-display italic text-emerald-500 text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight mb-8">
              {t(k('hero.h1.line3'))}
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[44ch] mx-auto lg:mx-0">
              {t(k('hero.sub'))}
            </p>
          </div>
        </section>

        {/* Dolores */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t(k('painPoints.eyebrow'))}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-12">
              {t(k('painPoints.heading.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('painPoints.heading.kw'))}</span>
              {t(k('painPoints.heading.after'))}
            </h2>
            <ul className="w-full max-w-3xl divide-y divide-gray-100 dark:divide-neutral-800 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="py-6">
                  <p className="font-medium text-base md:text-lg text-black dark:text-neutral-100 mb-1">
                    — {t(k(`painPoints.item${i}.q`))}
                  </p>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {t(k(`painPoints.item${i}.a`))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Propuesta */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t(k('proposal.eyebrow'))}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[26ch] mb-10">
              {t(k('proposal.heading.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('proposal.heading.kw'))}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-3 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="italic text-gray-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
                  {t(k(`proposal.example${i}`))}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Lo que sigma asume */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-14">
              <Eyebrow className="mb-10">{t(k('assumes.eyebrow'))}</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch]">
                {t(k('assumes.heading.before'))}{' '}
                <span className="italic text-emerald-500">{t(k('assumes.heading.kw'))}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <article key={i} className="text-left">
                  <h3 className="font-body font-semibold text-lg md:text-xl tracking-tight mb-2">
                    {t(k(`assumes.item${i}.title`))}
                  </h3>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                    {t(k(`assumes.item${i}.body`))}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Cumplimiento normativo */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t(k('compliance.eyebrow'))}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-10">
              {t(k('compliance.heading.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('compliance.heading.kw'))}</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[52ch] mb-10">
              {t(k('compliance.body'))}
            </p>
            <ul className="w-full max-w-2xl space-y-4 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" strokeWidth={2.5} />
                  <span className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                    {t(k(`compliance.bullet${i}`))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Confianza */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t(k('trust.eyebrow'))}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-10">
              {t(k('trust.heading.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('trust.heading.kw'))}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-4 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" strokeWidth={2.5} />
                  <span className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                    {t(k(`trust.bullet${i}`))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Resultados */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-6 md:mb-10">{t(k('results.eyebrow'))}</Eyebrow>
            <h2 className="font-display text-2xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-8 md:mb-14">
              {t(k('results.heading.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('results.heading.kw'))}</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mb-8 md:mb-14">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-t border-gray-100 dark:border-neutral-800 pt-3 md:pt-6 text-left">
                  <div className="font-display italic text-3xl md:text-6xl lg:text-7xl leading-none mb-2 md:mb-4">
                    {t(k(`results.stat${i}.value`))}
                  </div>
                  <p className="text-[11px] leading-snug md:text-base md:leading-relaxed text-gray-500 dark:text-neutral-400 max-w-[28ch]">
                    {t(k(`results.stat${i}.label`))}
                  </p>
                </div>
              ))}
            </div>
            <figure className="max-w-2xl border-l-2 border-black dark:border-neutral-100 pl-4 md:pl-6 text-left">
              <blockquote className="font-display text-sm md:text-xl italic leading-snug mb-2 md:mb-3">
                "{t(k('results.quote'))}"
              </blockquote>
              <figcaption className="text-[10px] md:text-xs text-gray-500 dark:text-neutral-400 not-italic tracking-[0.12em] uppercase">
                {t(k('results.author'))}
              </figcaption>
            </figure>
          </div>
        </RevealSection>

        {/* Cierre — compartido: video + pregunta + signup */}
        <RevealSection id="contacto" className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center gap-8">
            <video
              src="/sigma-screencast.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-3xl lg:max-w-6xl rounded-lg border border-gray-100 dark:border-neutral-800"
            />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch]">
              {t(k('cta.before'))}{' '}
              <span className="italic text-emerald-500">{t(k('cta.kw'))}</span>
              {t(k('cta.after'))}
            </h2>
            <a
              href="https://sigma.autarqui.co/signup"
              target="_blank"
              rel="noopener"
              className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              {t(k('cta.link'))}
            </a>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}
