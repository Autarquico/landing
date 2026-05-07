import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ProblemHero } from './sections/ProblemHero'
import { SolutionHero } from './sections/SolutionHero'
import { FinalCTASection } from './sections/FinalCTASection'
import { SEO } from './seo/SEO'
import { useLocale } from './seo/useLocale'
import type { Locale } from './seo/routes'

interface AppProps {
  locale?: Locale
}

function App({ locale = 'es' }: AppProps) {
  useLocale(locale)
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <SEO routeId="home" locale={locale} />
      <Navigation />

      <main>
        <ProblemHero />
        <SolutionHero />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
