import HeroSpline from './components/HeroSpline'
import { HeroScrollDemo } from './components/ui/demo'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSpline />

      <main className="relative">
        <HeroScrollDemo />
      </main>

      <footer className="relative z-10 py-10 text-center text-sm text-blue-200/70">
        Built with React, Tailwind, framer-motion, and Spline
      </footer>
    </div>
  )
}

export default App
