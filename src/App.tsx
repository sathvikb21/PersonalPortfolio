import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="grain relative">
      {/* Ambient mesh-gradient orbs — fixed so they never repaint on scroll */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-teal-400/30 blur-[140px] dark:bg-cyan-500/15" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-[140px] dark:bg-indigo-500/10" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-[140px] dark:bg-teal-500/10" />
      </div>

      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
