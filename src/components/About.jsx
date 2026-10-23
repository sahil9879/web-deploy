import { GraduationCap, Languages, Target } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import TiltCard from './TiltCard'


const facts = [
  { icon: GraduationCap, label: 'Studying', value: 'BS Mass Communication' },
  { icon: Languages, label: 'Languages', value: 'Punjabi, Urdu, English' },
  { icon: Target, label: 'Looking for', value: 'My first professional opportunity' },
]

const chips = [
  { label: 'Quick learner', pos: 'left-0 top-3', delay: '0s' },
  { label: 'Team player', pos: 'right-0 top-24', delay: '1.5s' },
  { label: 'Open to feedback', pos: 'bottom-1 left-3', delay: '3s' },
]

// Lime highlight for the key phrases inside the biography text.
const KEY_WORDS = /(graphic design|digital marketing|quick learner|BS Mass Communication)/gi

function Highlighted({ text }) {
  return text.split(KEY_WORDS).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-lime">{part}</span>
    ) : (
      part
    ),
  )
}

function FactCard({ icon: Icon, label, value }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-lime/50"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(201,243,106,0.18), transparent 70%)' }}
      />
      <span className="relative mb-4 grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
        <Icon size={20} aria-hidden="true" />
      </span>
      <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="relative mt-1 font-bold leading-snug">{value}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -left-24 top-1/3 h-72 w-72 animate-float rounded-full bg-lime/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-10 h-72 w-72 animate-float rounded-full bg-sky/10 blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              About
            </p>
          </Reveal>

          <Reveal from="left" delay={150}>
            <h2 id="about-title" className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              A little{' '}
              <span
                className="animate-shimmer bg-linear-to-r from-lime via-sky to-lime bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                about me.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <span aria-hidden="true" className="mt-6 block h-1 w-24 rounded-full bg-linear-to-r from-lime to-sky" />
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {profile.aboutParagraphs.map((p, i) => (
                <Reveal key={p} from="left" delay={150 + i * 200}>
                  <p><Highlighted text={p} /></p>
                </Reveal>
              ))}
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <li key={fact.label}>
                  <Reveal from="zoom" delay={500 + i * 160} className="h-full">
                    <FactCard {...fact} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal from="right" delay={300}>
            <TiltCard className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
              <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative mx-auto h-60 w-full max-w-xs">
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-slow absolute -inset-3 rounded-full border border-dashed border-white/15" />
                  <div className="animate-orbit absolute inset-4 rounded-full border border-lime/30">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_14px_3px_rgba(201,243,106,0.6)]" />
                  </div>
                  <div className="animate-orbit-rev absolute inset-11 rounded-full border border-sky/30">
                    <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky shadow-[0_0_12px_3px_rgba(103,198,255,0.6)]" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="absolute h-20 w-20 animate-pulse rounded-full bg-lime/25 blur-xl" />
                    <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-lime text-xl font-extrabold text-ink">{profile.monogram}</span>
                  </div>
                </div>

                {chips.map((c) => (
                  <span
                    key={c.label}
                    style={{ animationDelay: c.delay }}
                    className={`absolute ${c.pos} animate-float rounded-full border border-white/15 bg-ink/80 px-3 py-1.5 text-xs font-bold backdrop-blur`}
                  >
                    <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime" />{c.label}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-2xl font-extrabold leading-snug">{profile.aboutStatement}</p>
              <p className="mt-2 text-sm text-muted">Currently pursuing BS Mass Communication.</p>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}