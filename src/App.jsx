import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import FeatureSpotlights from './components/FeatureSpotlights'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ValueProps />
        <HowItWorks />
        <FeatureSpotlights />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-blue-600" />
            <span className="text-slate-700 font-semibold">ClaimTime</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} ClaimTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
