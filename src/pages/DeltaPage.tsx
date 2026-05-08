import { useEffect } from 'react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { SectorTabs } from '../components/SectorTabs'
import { RevealSection } from '../components/RevealSection'
import { ScrollToTop } from '../components/ScrollToTop'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'

const DeltaMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 501 499"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="delta"
    className={className}
  >
    <g transform="translate(0,499) scale(0.1,-0.1)" fill="currentColor">
      <path d="M2293 4970 c-574 -56 -1093 -292 -1499 -683 -395 -380 -641 -841 -734 -1377 -134 -768 109 -1556 654 -2119 354 -366 783 -609 1258 -715 202 -45 318 -58 533 -58 226 0 396 20 604 73 345 86 691 265 981 505 82 68 270 258 341 344 234 284 407 636 488 993 52 230 65 343 65 562 0 220 -14 347 -64 564 -97 423 -314 825 -615 1139 -256 267 -513 446 -833 582 -210 88 -408 143 -636 175 -129 18 -424 26 -543 15z m467 -231 c668 -80 1249 -436 1621 -993 190 -283 314 -614 364 -970 19 -132 19 -431 0 -564 -51 -356 -170 -673 -358 -955 -108 -161 -190 -259 -322 -386 -460 -439 -1089 -673 -1694 -631 -258 18 -519 82 -751 182 -676 294 -1179 909 -1324 1618 -37 182 -46 274 -46 460 1 331 64 625 198 919 213 467 531 807 1002 1073 65 37 262 121 355 151 293 96 653 133 955 96z" />
      <path d="M2389 3990 c-170 -20 -310 -81 -397 -174 -120 -127 -139 -285 -56 -456 29 -58 58 -96 128 -166 75 -74 296 -250 385 -306 29 -18 26 -25 -11 -33 -80 -17 -202 -61 -303 -109 -298 -143 -493 -381 -536 -658 -16 -103 -6 -304 20 -393 71 -243 254 -442 486 -530 341 -128 750 -57 1008 177 127 114 220 256 273 418 28 82 29 92 28 290 0 204 0 206 -32 300 -95 285 -292 488 -688 710 -381 213 -478 278 -549 364 -18 23 -39 55 -45 71 -17 43 -15 126 3 160 43 83 153 144 275 152 100 7 173 -9 274 -59 67 -34 99 -59 197 -158 123 -124 155 -147 223 -156 124 -17 228 74 228 197 0 103 -76 198 -211 263 -169 81 -472 122 -700 96z m325 -1350 c129 -136 207 -273 254 -450 33 -127 38 -384 8 -495 -46 -177 -135 -299 -264 -362 -75 -37 -78 -38 -191 -38 -108 0 -120 2 -176 29 -89 44 -184 144 -233 248 -58 122 -73 191 -79 363 -6 164 8 263 52 382 51 135 160 263 275 321 54 27 226 80 266 82 6 0 46 -36 88 -80z" />
    </g>
  </svg>
)

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-xs font-medium tracking-[0.22em] uppercase text-gray-500 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
)

export const DeltaPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId="delta" locale={locale} />
      <Navigation lightBackground />

      <main className="pt-24 md:pt-28">
        <section
          id="producto"
          className="snap-start min-h-screen container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(220px,35%)_1fr] items-center gap-10 lg:gap-24 py-16 md:py-24 lg:py-32"
        >
          <div className="flex flex-col items-center gap-7">
            <DeltaMark className="w-[clamp(140px,22vw,280px)] h-auto text-black dark:text-neutral-100" />
            <span className="text-xs font-medium tracking-[0.42em] text-black dark:text-neutral-100">
              D&nbsp;E&nbsp;L&nbsp;T&nbsp;A
            </span>
          </div>

          <div className="max-w-[44ch] text-center mx-auto lg:text-left lg:mx-0">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
              {t('delta.hero.h1.line1')}<br />
              {t('delta.hero.h1.line2')}
            </h1>
            <p className="font-display italic text-emerald-500 text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight mb-8">
              {t('delta.hero.h1.line3')}
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[44ch] mx-auto lg:mx-0">
              {t('delta.hero.sub')}
            </p>
          </div>
        </section>

        {/* Pain situations — 3 strongest items, no closing paragraph */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('delta.painPoints.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-12">
              {t('delta.painPoints.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('delta.painPoints.heading.kw')}</span>
              {t('delta.painPoints.heading.after')}
            </h2>
            <ul className="w-full max-w-3xl divide-y divide-gray-100 dark:divide-neutral-800 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="py-6">
                  <p className="font-medium text-base md:text-lg text-black dark:text-neutral-100 mb-1">
                    — {t(`delta.painPoints.item${i}.q`)}
                  </p>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {t(`delta.painPoints.item${i}.a`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Propuesta — heading + 3 examples; intro + close trimmed */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('delta.proposal.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-10">
              {t('delta.proposal.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('delta.proposal.heading.kw')}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-3 text-left">
              {[1, 2, 3].map((i) => (
                <li key={i} className="italic text-gray-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
                  {t(`delta.proposal.example${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Confianza — heading + 5 checks; intro paragraph trimmed */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-10">{t('delta.trust.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-10">
              {t('delta.trust.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('delta.trust.heading.kw')}</span>
            </h2>
            <ul className="w-full max-w-2xl space-y-4 text-left">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" strokeWidth={2.5} />
                  <span className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                    {t(`delta.trust.bullet${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Sectoriales */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-12">
              <Eyebrow className="mb-10">{t('delta.sectors.eyebrow')}</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch]">
                {t('delta.sectors.heading.before')}{' '}
                <span className="italic text-emerald-500">{t('delta.sectors.heading.kw')}</span>
              </h2>
            </div>
            <SectorTabs />
          </div>
        </RevealSection>

        {/* Resultados — stats + testimonial; caption + body paragraph trimmed */}
        <RevealSection className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center">
            <Eyebrow className="mb-6 md:mb-10">{t('delta.results.eyebrow')}</Eyebrow>
            <h2 className="font-display text-2xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[24ch] mb-8 md:mb-14">
              {t('delta.results.heading.before')}{' '}
              <span className="italic text-emerald-500">{t('delta.results.heading.kw')}</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mb-8 md:mb-14">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-t border-gray-100 dark:border-neutral-800 pt-3 md:pt-6 text-left">
                  <div className="font-display italic text-3xl md:text-6xl lg:text-7xl leading-none mb-2 md:mb-4">
                    {t(`delta.results.stat${i}.value`)}
                  </div>
                  <p className="text-[11px] leading-snug md:text-base md:leading-relaxed text-gray-500 dark:text-neutral-400 max-w-[28ch]">
                    {t(`delta.results.stat${i}.label`)}
                  </p>
                </div>
              ))}
            </div>
            <figure className="max-w-2xl border-l-2 border-black dark:border-neutral-100 pl-4 md:pl-6 text-left">
              <blockquote className="font-display text-sm md:text-xl italic leading-snug mb-2 md:mb-3">
                "{t('delta.results.quote')}"
              </blockquote>
              <figcaption className="text-[10px] md:text-xs text-gray-500 dark:text-neutral-400 not-italic tracking-[0.12em] uppercase">
                {t('delta.results.author')}
              </figcaption>
            </figure>
          </div>
        </RevealSection>

        <RevealSection id="contacto" className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center gap-8">
            <img
              src="/delta-sample.gif"
              alt=""
              className="w-full max-w-3xl rounded-lg border border-gray-100 dark:border-neutral-800"
            />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch]">
              {t('delta.cta.before')}{' '}
              <span className="italic text-emerald-500">{t('delta.cta.kw')}</span>
              {t('delta.cta.after')}
            </h2>
            <a
              href="mailto:hola@autarqui.co?subject=delta"
              className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              {t('delta.cta.link')}
            </a>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}
