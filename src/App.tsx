import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ProblemHero } from './sections/ProblemHero'
import { SolutionHero } from './sections/SolutionHero'
import { PricingSection } from './sections/PricingSection'
import { FinalCTASection } from './sections/FinalCTASection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <ProblemHero />
        <SolutionHero />
        <PricingSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
