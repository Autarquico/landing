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
                className="group flex flex-col items-center bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-gray-100 dark:border-neutral-700 hover:border-delta transition-colors"
              >
                <img src="/delta-logo.svg" alt="delta" className="w-16 h-16 mb-4 dark:hidden" />
                <img src="/delta-logo-dark.svg" alt="delta" className="w-16 h-16 mb-4 hidden dark:block" />
                <span className="text-xs font-medium tracking-[0.42em] mb-2">D&nbsp;E&nbsp;L&nbsp;T&nbsp;A</span>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Business Intelligence</p>
              </a>
              <a
                href={locale === 'en' ? '/en/sigma' : '/sigma'}
                className="group flex flex-col items-center bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-gray-100 dark:border-neutral-700 hover:border-sigma transition-colors"
              >
                <img src="/sigma-logo.svg" alt="sigma" className="w-16 h-16 mb-4 dark:hidden" />
                <img src="/sigma-logo-dark.svg" alt="sigma" className="w-16 h-16 mb-4 hidden dark:block" />
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
