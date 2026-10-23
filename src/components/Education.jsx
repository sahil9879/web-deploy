import { useEffect, useRef, useState } from 'react'
import { education } from '../data/education'
import { getIcon } from './icons'
import Reveal from './Reveal'

// Oldest first, so the timeline reads left to right and ends on the current course.
const steps = [...education].reverse()

function Card({ item }) {
  const Icon = getIcon(item.icon)
  const current = /present/i.test(item.period)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      onMouseMove={onMove}
      className={`group relative flex-1 overflow-hidden rounded-2xl border bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-lime/50 ${current ? 'border-lime/40' : 'border-white/10'}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(201,243,106,0.18), transparent 70%)' }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime/10 text-lime transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
          <Icon size={24} aria-hidden="true" />
        </span>
        {current && (
          <span className="flex items-center gap-2 rounded-full border border-lime/40 px-3 py-1 text-xs font-bold text-lime">
            <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            Currently studying
          </span>
        )}
      </div>
      <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.16em] text-sky">{item.level}</p>
      <h3 className="relative mt-1 text-xl font-extrabold">{item.title}</h3>
      <p className="relative mt-2 text-muted">{item.institution}</p>
      <p className="relative mt-4 inline-block rounded-full bg-white/[0.07] px-3 py-1 text-sm font-semibold text-lime lg:hidden">{item.period}</p>
    </div>
  )
}

export default function Education() {
  const listRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  // The connecting line draws itself the first time the list scrolls into view.
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(listRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="education" aria-labelledby="education-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -right-24 top-24 h-72 w-72 animate-float rounded-full bg-lime/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-24 bottom-24 h-72 w-72 animate-float rounded-full bg-sky/10 blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              Education
            </p>
          </Reveal>

          <Reveal from="left" delay={150}>
            <h2 id="education-title" className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Where I am{' '}
              <span
                className="animate-shimmer bg-linear-to-r from-lime via-sky to-lime bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                learning.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <span aria-hidden="true" className="mt-6 block h-1 w-24 rounded-full bg-linear-to-r from-lime to-sky" />
          </Reveal>
        </div>

        <div ref={listRef} className="relative">
          {/* desktop: horizontal line */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-white/10 lg:block">
            <span className={`block h-full origin-left bg-linear-to-r from-lime to-sky transition-transform duration-[2000ms] ease-out ${drawn ? 'scale-x-100' : 'scale-x-0'}`} />
          </span>
          {/* mobile: vertical line */}
          <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-white/10 lg:hidden">
            <span className={`block h-full origin-top bg-linear-to-b from-lime to-sky transition-transform duration-[2000ms] ease-out ${drawn ? 'scale-y-100' : 'scale-y-0'}`} />
          </span>

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((item, i) => {
              const current = /present/i.test(item.period)
              return (
                <li key={item.id} className="relative flex flex-col pl-14 lg:pl-0">
                  <div className="absolute left-0 top-6 grid w-10 place-items-center lg:static lg:mb-6 lg:flex lg:h-10 lg:w-auto lg:items-center lg:gap-3">
                    <span className="relative grid h-4 w-4 place-items-center lg:ml-0">
                      {current && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-lime/60" />}
                      <span aria-hidden="true" className="relative block h-4 w-4 rounded-full border-2 border-lime bg-ink" />
                    </span>
                    <span className="hidden rounded-full border border-white/10 bg-ink px-3 py-1 text-sm font-bold text-lime lg:inline-block">{item.period}</span>
                  </div>
                  <Reveal from="up" delay={i * 200} className="flex flex-1 flex-col">
                    <Card item={item} />
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}