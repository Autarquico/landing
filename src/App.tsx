import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { RevealSection } from './components/RevealSection'
import { ScrollToTop } from './components/ScrollToTop'
import { ContactForm } from './components/ContactForm'
import { Hero } from './sections/Hero'
import { Thesis } from './sections/Thesis'
import { WorkShowcase } from './sections/WorkShowcase'
import { JournalTeaser } from './sections/JournalTeaser'
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
    // La home es un continuo: scroll natural (sin snap), suave para las anclas
    // de la barra de navegación, con offset para que el ancla no quede bajo la nav fija.
    const html = document.documentElement
    const prevBehavior = html.style.scrollBehavior
    const prevPaddingTop = html.style.scrollPaddingTop
    html.style.scrollBehavior = 'smooth'
    html.style.scrollPaddingTop = '5rem'
    return () => {
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
        <Hero />
        <Thesis />
        <WorkShowcase />
        <JournalTeaser />

        <RevealSection
          id="contacto"
          className="border-t border-gray-100 dark:border-neutral-800 py-20 md:py-28 scroll-mt-24"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col items-center text-center gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                {t('home.contact.heading')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
                {t('home.contact.body')}
              </p>
            </div>
            <ContactForm source="home" />
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  )
}

export default App
