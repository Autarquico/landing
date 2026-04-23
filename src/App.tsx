import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ProblemHero } from './sections/ProblemHero'
import { SolutionHero } from './sections/SolutionHero'
import { FinalCTASection } from './sections/FinalCTASection'

function App() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  }, [t])

  return (
    <div className="min-h-screen bg-white">
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
