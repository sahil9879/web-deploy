import { useState } from 'react'
import Intro, { REVEAL_MS } from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import LanguagesInterests from './components/LanguagesInterests'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // hidden: site is masked out | open: circle expands from the centre dot | done: mask removed
  const [phase, setPhase] = useState('hidden')

  // The whole site is revealed through a circle that grows from the intro's dot.
  const mask =
    phase === 'done'
      ? undefined
      : {
          clipPath: phase === 'open' ? 'circle(150vmax at 50vw 50vh)' : 'circle(0px at 50vw 50vh)',
          transition: `clip-path ${REVEAL_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }

  return (
    <>
      <Intro onReveal={() => setPhase('open')} onDone={() => setPhase('done')} />
      <div style={mask}>
        <Navbar />
        <main>
          <Hero ready={phase !== 'hidden'} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <LanguagesInterests />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}