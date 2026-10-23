import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

// Renders nothing until at least one entry is verified; shows only the fields provided.
export default function Experience() {
  const visible = experience.filter((e) => e.verified && e.title)
  if (visible.length === 0) return null

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Practical exposure" title="Experience." id="experience-title" />
        <ul className="space-y-4">
          {visible.map((e) => (
            <li key={e.id} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-lg font-extrabold">{e.title}</h3>
              {(e.organization || e.period) && (
                <p className="mt-1 text-sm text-muted">{[e.organization, e.period].filter(Boolean).join(' · ')}</p>
              )}
              {e.responsibilities.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                  {e.responsibilities.map((r) => <li key={r}>{r}</li>)}
                </ul>
              )}
              {e.link && <a href={e.link} className="mt-4 inline-block text-sm font-bold text-lime hover:underline">View details</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
