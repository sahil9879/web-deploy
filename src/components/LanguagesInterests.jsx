import { languages, interests } from '../data/profile'
import { getIcon } from './icons'
import Reveal from './Reveal'

function Chip({ children, hint }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-bold backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-lime/60 hover:text-lime">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime" />
      {children}
      {hint && <span className="text-xs font-medium text-muted">· {hint}</span>}
    </span>
  )
}

function Heading({ children, id }) {
  return (
    <h2 id={id} className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky">
      <span aria-hidden="true" className="h-px w-10 bg-sky" />
      {children}
    </h2>
  )
}

export default function LanguagesInterests() {
  return (
    <section aria-labelledby="languages-title" className="pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <Reveal>
            <Heading id="languages-title">Languages</Heading>
          </Reveal>
          <ul className="flex flex-wrap gap-3">
            {languages.map((l, i) => (
              <li key={l.id}>
                <Reveal from="zoom" delay={150 + i * 150}>
                  <Chip hint={l.level}>{l.label}</Chip>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {interests.length > 0 && (
          <div>
            <Reveal>
              <Heading>Beyond Work</Heading>
            </Reveal>
            <ul className="flex flex-wrap gap-3">
              {interests.map((item, i) => {
                const Icon = getIcon(item.icon)
                return (
                  <li key={item.id}>
                    <Reveal from="zoom" delay={150 + i * 150}>
                      <Chip><Icon size={16} aria-hidden="true" />{item.label}</Chip>
                    </Reveal>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}