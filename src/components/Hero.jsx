import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import Button from './Button'
import PuzzleImage from './PuzzleImage'
import TiltCard from './TiltCard'

const floaters = [
  // left side
  { label: 'Graphic Designing', pos: 'left-0 top-[14%] sm:-left-10', delay: '0s' },
  { label: 'Web Developer', pos: 'left-2 bottom-[14%] sm:-left-8', delay: '2s' },
  // right side
  { label: 'Digital Marketing', pos: 'right-0 top-[24%] sm:-right-10', delay: '1s' },
  { label: 'Always Learning', pos: 'right-2 bottom-[8%] sm:-right-8', delay: '3s' },
]

export default function Hero({ ready }) {
  // Text lines rise into place one after another once the site opens.
  const rise = ready ? 'animate-rise' : 'opacity-0'
  const d = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      <div aria-hidden="true" className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-lime/25 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-[10%] right-[6%] h-80 w-80 rounded-full bg-sky/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <p style={d(500)} className={`mb-5 text-xs font-bold uppercase tracking-[0.2em] text-lime ${rise}`}>{profile.eyebrow}</p>
          <h1 id="hero-title" style={d(650)} className={`text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${rise}`}>
            <span className="text-lime">Hi, I'm Sahil</span> <span className="text-sky"> <br /> Web</span> Developer
          </h1>
          <p style={d(800)} className={`mt-6 max-w-xl text-lg leading-relaxed text-muted ${rise}`}>{profile.heroIntro}</p>
          <div style={d(950)} className={`mt-9 flex flex-col gap-3 sm:flex-row ${rise}`}>
            <Button href="#work">Explore My Work <ArrowRight size={18} aria-hidden="true" /></Button>
            <Button href="#contact" variant="ghost">Contact Me</Button>
          </div>
          <p style={d(1100)} className={`mt-6 text-sm text-muted ${rise}`}>{profile.heroNote}</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-lime/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full border border-lime/30" />
          <div aria-hidden="true" className="absolute -right-4 bottom-10 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => <span key={i} className="h-1 w-1 rounded-full bg-sky/60" />)}
          </div>

          <TiltCard className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2">
            <PuzzleImage src={profile.photo} alt={profile.photoAlt} start={ready} />
          </TiltCard>

          {floaters.map((f) => (
            <span
              key={f.label}
              style={{ animationDelay: f.delay, transitionDelay: ready ? '3200ms' : '0ms' }}
              className={`absolute ${f.pos} animate-float rounded-full border border-line bg-ink/90 px-3 py-1.5 text-xs font-bold backdrop-blur transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
            >
              <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime" />{f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}