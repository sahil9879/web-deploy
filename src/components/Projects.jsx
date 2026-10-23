import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

const filters = ['All', ...new Set(projects.map((p) => p.skill))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.skill === filter)

  return (
    <section id="work" aria-labelledby="work-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -left-24 top-24 h-72 w-72 animate-float rounded-full bg-lime/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-24 h-72 w-72 animate-float rounded-full bg-sky/10 blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              Selected work
            </p>
          </Reveal>

          <Reveal from="left" delay={150}>
            <h2 id="work-title" className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Practice{' '}
              <span
                className="animate-shimmer bg-linear-to-r from-lime via-sky to-lime bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                concepts.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <span aria-hidden="true" className="mt-6 block h-1 w-24 rounded-full bg-linear-to-r from-lime to-sky" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              These are practice exercises and sample concepts, not client projects. Each one matches a skill I am building.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div role="group" aria-label="Filter by skill" className="mb-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition duration-300 ${
                  filter === f ? 'border-lime bg-lime text-ink' : 'border-white/15 text-muted hover:border-lime/60 hover:text-fg'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <li key={`${filter}-${p.id}`}>
              <Reveal from="zoom" delay={i * 150} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}