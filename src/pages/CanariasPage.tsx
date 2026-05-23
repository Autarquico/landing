import { useEffect } from 'react'
import { Check, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { RevealSection } from '../components/RevealSection'
import { ScrollToTop } from '../components/ScrollToTop'
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../seo/SEO'
import { useLocale } from '../seo/useLocale'
import type { Locale } from '../seo/routes'

const DeltaMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 501 499" xmlns="http://www.w3.org/2000/svg" aria-label="delta" className={className}>
    <g transform="translate(0,499) scale(0.1,-0.1)" fill="currentColor">
      <path d="M2293 4970 c-574 -56 -1093 -292 -1499 -683 -395 -380 -641 -841 -734 -1377 -134 -768 109 -1556 654 -2119 354 -366 783 -609 1258 -715 202 -45 318 -58 533 -58 226 0 396 20 604 73 345 86 691 265 981 505 82 68 270 258 341 344 234 284 407 636 488 993 52 230 65 343 65 562 0 220 -14 347 -64 564 -97 423 -314 825 -615 1139 -256 267 -513 446 -833 582 -210 88 -408 143 -636 175 -129 18 -424 26 -543 15z m467 -231 c668 -80 1249 -436 1621 -993 190 -283 314 -614 364 -970 19 -132 19 -431 0 -564 -51 -356 -170 -673 -358 -955 -108 -161 -190 -259 -322 -386 -460 -439 -1089 -673 -1694 -631 -258 18 -519 82 -751 182 -676 294 -1179 909 -1324 1618 -37 182 -46 274 -46 460 1 331 64 625 198 919 213 467 531 807 1002 1073 65 37 262 121 355 151 293 96 653 133 955 96z" />
      <path d="M2389 3990 c-170 -20 -310 -81 -397 -174 -120 -127 -139 -285 -56 -456 29 -58 58 -96 128 -166 75 -74 296 -250 385 -306 29 -18 26 -25 -11 -33 -80 -17 -202 -61 -303 -109 -298 -143 -493 -381 -536 -658 -16 -103 -6 -304 20 -393 71 -243 254 -442 486 -530 341 -128 750 -57 1008 177 127 114 220 256 273 418 28 82 29 92 28 290 0 204 0 206 -32 300 -95 285 -292 488 -688 710 -381 213 -478 278 -549 364 -18 23 -39 55 -45 71 -17 43 -15 126 3 160 43 83 153 144 275 152 100 7 173 -9 274 -59 67 -34 99 -59 197 -158 123 -124 155 -147 223 -156 124 -17 228 74 228 197 0 103 -76 198 -211 263 -169 81 -472 122 -700 96z m325 -1350 c129 -136 207 -273 254 -450 33 -127 38 -384 8 -495 -46 -177 -135 -299 -264 -362 -75 -37 -78 -38 -191 -38 -108 0 -120 2 -176 29 -89 44 -184 144 -233 248 -58 122 -73 191 -79 363 -6 164 8 263 52 382 51 135 160 263 275 321 54 27 226 80 266 82 6 0 46 -36 88 -80z" />
    </g>
  </svg>
)

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-6 text-center">
    <p className="font-display text-3xl md:text-4xl text-emerald-500 mb-1">{value}</p>
    <p className="text-sm text-gray-500 dark:text-neutral-400">{label}</p>
  </div>
)

const ProjectCard: React.FC<{ title: string; highlight?: boolean }> = ({ title, highlight }) => (
  <div
    className={`rounded-xl px-4 py-3 text-center text-sm font-medium ${
      highlight
        ? 'bg-emerald-500 text-white'
        : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300'
    }`}
  >
    {title}
  </div>
)

const RequirementItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
)

export const CanariasPage: React.FC<{ locale?: Locale }> = ({ locale = 'es' }) => {
  useLocale(locale)
  const { t } = useTranslation()
  const k = (key: string) => `canarias.${key}`

  useEffect(() => {
    const html = document.documentElement
    const prevSnap = html.style.scrollSnapType
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollSnapType = 'y proximity'
    html.style.scrollBehavior = 'smooth'
    return () => {
      html.style.scrollSnapType = prevSnap
      html.style.scrollBehavior = prevBehavior
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-neutral-100">
      <ScrollToTop />
      <SEO routeId="canarias" locale={locale} />
      <Navigation lightBackground />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <RevealSection className="snap-start min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-emerald-500 mb-4">
              {t(k('hero.eyebrow'))}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-[20ch] mx-auto">
              {t(k('hero.title'))}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-neutral-400 max-w-[44ch] mx-auto mb-8">
              {t(k('hero.subtitle'))}
            </p>
            <p className="inline-block bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm">
              {t(k('hero.nextCall'))}
            </p>
          </div>
        </RevealSection>

        {/* Stats */}
        <RevealSection className="snap-start py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <StatCard value="100%" label={t(k('stats.subsidy'))} />
              <StatCard value="25.000€" label={t(k('stats.max'))} />
              <StatCard value="18" label={t(k('stats.months'))} />
              <StatCard value={t(k('stats.advanceValue'))} label={t(k('stats.advance'))} />
            </div>
          </div>
        </RevealSection>

        {/* Projects */}
        <RevealSection className="snap-start py-16 md:py-24 bg-gray-50 dark:bg-neutral-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl mb-8">{t(k('projects.title'))}</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              <ProjectCard title="ERP" />
              <ProjectCard title="CRM" />
              <ProjectCard title="Business Intelligence" highlight />
              <ProjectCard title={t(k('projects.processes'))} highlight />
              <ProjectCard title={t(k('projects.cyber'))} />
              <ProjectCard title={t(k('projects.ai'))} highlight />
            </div>
          </div>
        </RevealSection>

        {/* Requirements */}
        <RevealSection className="snap-start py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-2xl">
            <h2 className="font-display text-2xl md:text-4xl text-center mb-8">
              {t(k('requirements.title'))}
            </h2>
            <ul className="space-y-4 text-lg">
              <RequirementItem>{t(k('requirements.years'))}</RequirementItem>
              <RequirementItem>{t(k('requirements.location'))}</RequirementItem>
              <RequirementItem>{t(k('requirements.employees'))}</RequirementItem>
              <RequirementItem>{t(k('requirements.taxes'))}</RequirementItem>
            </ul>
          </div>
        </RevealSection>

        {/* Solutions */}
        <RevealSection className="snap-start py-16 md:py-24 bg-gray-50 dark:bg-neutral-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl mb-4">{t(k('solutions.title'))}</h2>
            <p className="text-gray-500 dark:text-neutral-400 mb-10 max-w-[44ch] mx-auto">
              {t(k('solutions.subtitle'))}
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href={locale === 'en' ? '/en/delta' : '/delta'}
                className="group flex flex-col items-center bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-gray-100 dark:border-neutral-700 hover:border-emerald-500 transition-colors"
              >
                <DeltaMark className="w-16 h-16 mb-4 text-black dark:text-white" />
                <span className="text-xs font-medium tracking-[0.42em] mb-2">D&nbsp;E&nbsp;L&nbsp;T&nbsp;A</span>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Business Intelligence</p>
              </a>
              <a
                href={locale === 'en' ? '/en/sigma' : '/sigma'}
                className="group flex flex-col items-center bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-gray-100 dark:border-neutral-700 hover:border-emerald-500 transition-colors"
              >
                <img src="/sigma-logo.svg" alt="sigma" className="w-16 h-16 mb-4 dark:invert" />
                <span className="text-xs font-medium tracking-[0.42em] mb-2">S&nbsp;I&nbsp;G&nbsp;M&nbsp;A</span>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{t(k('solutions.sigma'))}</p>
              </a>
            </div>
          </div>
        </RevealSection>

        {/* Contact */}
        <RevealSection id="contacto" className="snap-start py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl mb-4">{t(k('contact.title'))}</h2>
            <p className="text-gray-500 dark:text-neutral-400 mb-10 max-w-[44ch] mx-auto">
              {t(k('contact.subtitle'))}
            </p>
            <ContactForm source="canarias" />
          </div>
        </RevealSection>

        {/* Resources */}
        <RevealSection className="snap-start py-16 md:py-24 bg-gray-50 dark:bg-neutral-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <h2 className="font-display text-xl md:text-2xl mb-6">{t(k('resources.title'))}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://sede.gobiernodecanarias.org/sede/tramites/10206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400 hover:text-emerald-500 transition-colors"
              >
                {t(k('resources.sede'))}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.gobiernodecanarias.org/boc/2026/064/1074.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400 hover:text-emerald-500 transition-colors"
              >
                {t(k('resources.boc'))}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}
