import { Code, FileText, Megaphone, Palette } from 'lucide-react'
import Reveal from './Reveal'


const coreSkills = [
  { icon: Megaphone, title: 'Digital Marketing', text: 'Learning how ideas reach the right audience online.' },
  { icon: Palette, title: 'Graphic Design', text: 'Learning to turn messages into clear, eye-catching visuals.' },
  { icon: Code, title: 'Web Development', text: 'Learning to build clean, responsive websites.' },
  { icon: FileText, title: 'MS Office', text: 'Everyday documents, spreadsheets and presentations.' },
]

const strengths = [
  'Quick Learner',
  'Communication',
  'Teamwork',
  'Critical Thinking',
  'Management',
  'Hardworking',
  'Responsible',
  'Open to Feedback',
  'Takes on Challenges',
]

function SkillCard({ icon: Icon, title, text, index }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-lime/50"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(201,243,106,0.18), transparent 70%)' }}
      />
     
      <span className="relative mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-lime/10 text-lime transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h4 className="relative text-lg font-extrabold">{title}</h4>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{text}</p>
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-lime to-sky transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

function Chip({ label }) {
  return (
    <li className="mr-4 flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-bold backdrop-blur transition-colors duration-300 hover:border-lime/60 hover:text-lime">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime" />
      {label}
    </li>
  )
}

// Two copies of the list sit side by side; the track slides left by exactly one copy, then loops.
function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap`}
      >
        <ul className="flex motion-reduce:flex-wrap motion-reduce:gap-y-3">
          {items.map((s) => <Chip key={s} label={s} />)}
        </ul>
        <ul aria-hidden="true" className="flex motion-reduce:hidden">
          {items.map((s) => <Chip key={s} label={s} />)}
        </ul>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -right-24 top-20 h-72 w-72 animate-float rounded-full bg-sky/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-24 bottom-20 h-72 w-72 animate-float rounded-full bg-lime/10 blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
           <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              Skills
            </p>
          </Reveal>

          <Reveal from="left" delay={150}>
            <h2 id="skills-title" className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Skills <span className="text-muted">and</span>{' '}
              <span
                className="animate-shimmer bg-linear-to-r from-lime via-sky to-lime bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                strengths.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <span aria-hidden="true" className="mt-6 block h-1 w-24 rounded-full bg-linear-to-r from-lime to-sky" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              The skills I am building and the strengths I bring to a team.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-sky">Core skills</h3>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreSkills.map((s, i) => (
            <li key={s.title}>
              <Reveal from="zoom" delay={i * 150} className="h-full">
                <SkillCard {...s} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <h3 className="mb-6 mt-16 text-sm font-bold uppercase tracking-[0.16em] text-sky">Professional strengths</h3>
        </Reveal>
        <Reveal from="zoom" className="space-y-4">
          <MarqueeRow items={strengths} />
          <MarqueeRow items={[...strengths].reverse()} reverse />
        </Reveal>
      </div>
    </section>
  )
}