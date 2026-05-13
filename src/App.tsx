import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const SigmaMark: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/sigma-logo.svg" alt="" className={`${className} dark:invert`} />
)

const DeltaMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 501 499" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <g transform="translate(0,499) scale(0.1,-0.1)" fill="currentColor">
      <path d="M2293 4970 c-574 -56 -1093 -292 -1499 -683 -395 -380 -641 -841 -734 -1377 -134 -768 109 -1556 654 -2119 354 -366 783 -609 1258 -715 202 -45 318 -58 533 -58 226 0 396 20 604 73 345 86 691 265 981 505 82 68 270 258 341 344 234 284 407 636 488 993 52 230 65 343 65 562 0 220 -14 347 -64 564 -97 423 -314 825 -615 1139 -256 267 -513 446 -833 582 -210 88 -408 143 -636 175 -129 18 -424 26 -543 15z m467 -231 c668 -80 1249 -436 1621 -993 190 -283 314 -614 364 -970 19 -132 19 -431 0 -564 -51 -356 -170 -673 -358 -955 -108 -161 -190 -259 -322 -386 -460 -439 -1089 -673 -1694 -631 -258 18 -519 82 -751 182 -676 294 -1179 909 -1324 1618 -37 182 -46 274 -46 460 1 331 64 625 198 919 213 467 531 807 1002 1073 65 37 262 121 355 151 293 96 653 133 955 96z" />
      <path d="M2389 3990 c-170 -20 -310 -81 -397 -174 -120 -127 -139 -285 -56 -456 29 -58 58 -96 128 -166 75 -74 296 -250 385 -306 29 -18 26 -25 -11 -33 -80 -17 -202 -61 -303 -109 -298 -143 -493 -381 -536 -658 -16 -103 -6 -304 20 -393 71 -243 254 -442 486 -530 341 -128 750 -57 1008 177 127 114 220 256 273 418 28 82 29 92 28 290 0 204 0 206 -32 300 -95 285 -292 488 -688 710 -381 213 -478 278 -549 364 -18 23 -39 55 -45 71 -17 43 -15 126 3 160 43 83 153 144 275 152 100 7 173 -9 274 -59 67 -34 99 -59 197 -158 123 -124 155 -147 223 -156 124 -17 228 74 228 197 0 103 -76 198 -211 263 -169 81 -472 122 -700 96z m325 -1350 c129 -136 207 -273 254 -450 33 -127 38 -384 8 -495 -46 -177 -135 -299 -264 -362 -75 -37 -78 -38 -191 -38 -108 0 -120 2 -176 29 -89 44 -184 144 -233 248 -58 122 -73 191 -79 363 -6 164 8 263 52 382 51 135 160 263 275 321 54 27 226 80 266 82 6 0 46 -36 88 -80z" />
    </g>
  </svg>
)

interface AppProps {
  locale?: Locale
}

function App({ locale = 'es' }: AppProps) {
  useLocale(locale)
  const { t } = useTranslation()
  const prefix = locale === 'en' ? '/en' : ''
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

        {/* Productos */}
        <RevealSection id="productos" className="snap-start min-h-screen flex flex-col justify-center border-t border-gray-100 dark:border-neutral-800 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-14">
              <Eyebrow>{t('home.products.eyebrow')}</Eyebrow>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { id: 'sigma', path: `${prefix}/sigma`, Mark: SigmaMark },
                { id: 'delta', path: `${prefix}/delta`, Mark: DeltaMark },
              ].map(({ id, path, Mark }) => (
                <Link
                  key={id}
                  to={path}
                  className="group flex flex-col items-center text-center gap-5 border border-gray-100 dark:border-neutral-800 rounded-lg p-10 hover:border-gray-300 dark:hover:border-neutral-600 transition-colors"
                >
                  <Mark className="w-20 h-20 text-black dark:text-neutral-100" />
                  <h3 className="font-display italic text-3xl md:text-4xl tracking-tight">
                    {t(`home.products.${id}.name`)}
                  </h3>
                  <p className="text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[28ch]">
                    {t(`home.products.${id}.desc`)}
                  </p>
                  <span className="text-sm font-medium border-b border-black dark:border-neutral-100 pb-1 group-hover:opacity-60 transition-opacity">
                    {t(`home.products.${id}.cta`)}
                  </span>
                </Link>
              ))}
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
