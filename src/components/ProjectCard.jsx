function MarketingPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-linear-to-br from-[#1b2b4a] via-[#162238] to-[#0f1a2e]">
      <div className="absolute -right-8 -top-8 h-40 w-40 animate-float rounded-full bg-lime/30 blur-2xl" />
      <div className="absolute left-1/2 top-7 w-48 -translate-x-1/2 -rotate-3 rounded-2xl border border-white/15 bg-ink/80 p-3 shadow-xl transition duration-500 group-hover:-translate-y-1 group-hover:rotate-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-lime" />
          <span className="h-1.5 w-16 rounded bg-white/30" />
        </div>
        <div className="rounded-lg bg-lime p-3 text-ink">
          <p className="text-sm font-extrabold leading-tight">Your message, made clear.</p>
          <span className="mt-2 inline-block rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-lime">Learn more</span>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
        </div>
      </div>
      <span className="absolute right-6 top-12 animate-float rounded-full border border-white/20 bg-ink/80 px-2.5 py-1 text-[10px] font-bold">Reach</span>
      <span style={{ animationDelay: '1.5s' }} className="absolute bottom-8 left-6 animate-float rounded-full border border-white/20 bg-ink/80 px-2.5 py-1 text-[10px] font-bold">Engage</span>
    </div>
  )
}

function DesignPreview() {
  const swatches = ['bg-ink', 'bg-lime', 'bg-sky', 'bg-fg']
  return (
    <div className="grid h-full grid-cols-3 gap-3 bg-[#162238] p-4">
      <div className="relative col-span-2 grid place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <div className="animate-orbit relative h-24 w-24 transition duration-500 group-hover:scale-110">
          <span className="absolute inset-3 rotate-45 rounded-2xl bg-lime" />
          <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky" />
        </div>
        <p className="absolute bottom-2 left-3 text-xs font-extrabold">Aa <span className="font-medium text-muted">Manrope</span></p>
      </div>
      <div className="grid grid-rows-4 gap-2">
        {swatches.map((s) => (
          <span key={s} className={`${s} rounded-lg border border-white/10 transition duration-300 group-hover:translate-x-1`} />
        ))}
      </div>
    </div>
  )
}

function WebPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#162238] p-5">
      <div className="h-full overflow-hidden rounded-xl border border-white/15 bg-ink/80 shadow-xl transition duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-3 h-3.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="space-y-2.5 p-4">
          <span className="block h-3 w-3/5 rounded bg-lime" />
          <span className="block h-2 w-full animate-pulse rounded bg-white/20" />
          <span className="block h-2 w-4/5 animate-pulse rounded bg-white/20" />
          <span className="mt-3 inline-block h-6 w-20 rounded-full bg-sky" />
        </div>
      </div>
      <div className="absolute -bottom-4 right-7 h-28 w-16 animate-float rounded-xl border border-white/20 bg-ink p-2 shadow-xl">
        <span className="mb-2 block h-2 w-8 rounded bg-lime" />
        <span className="mb-1.5 block h-1.5 w-full rounded bg-white/20" />
        <span className="block h-1.5 w-3/4 rounded bg-white/20" />
      </div>
      <span className="absolute right-6 top-4 text-sm font-extrabold text-lime">{'</>'}</span>
    </div>
  )
}

function OfficePreview() {
  const bars = ['h-6 bg-sky', 'h-10 bg-lime', 'h-8 bg-sky', 'h-14 bg-lime']
  return (
    <div className="relative h-full overflow-hidden bg-[#162238] p-5">
      <div className="absolute left-5 top-5 w-44 -rotate-3 rounded-lg bg-white p-3 text-ink shadow-xl transition duration-500 group-hover:-translate-y-1 group-hover:rotate-0">
        <span className="block h-2 w-20 rounded bg-ink" />
        <div className="mt-3 flex h-14 items-end gap-1.5">
          {bars.map((b) => (
            <span key={b} className={`${b} w-full origin-bottom rounded-sm transition duration-500 group-hover:scale-y-110`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 right-5 grid w-40 grid-cols-4 gap-1 rounded-lg border border-white/15 bg-ink/80 p-2 shadow-xl transition duration-500 group-hover:translate-x-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className={`h-3 rounded-sm ${i < 4 ? 'bg-lime/60' : 'bg-white/10'}`} />
        ))}
      </div>
    </div>
  )
}

const previews = { marketing: MarketingPreview, design: DesignPreview, web: WebPreview, office: OfficePreview }

export default function ProjectCard({ project }) {
  const Preview = previews[project.preview]
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-lime/50 hover:shadow-2xl hover:shadow-lime/10">
      <div role="img" aria-label={project.alt} className="relative h-60 overflow-hidden border-b border-white/10">
        <div className="h-full transition duration-700 group-hover:scale-105">
          <Preview />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/10 opacity-0 transition duration-1000 group-hover:translate-x-[450%] group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky">{project.skill}</span>
          <span className="rounded-full border border-lime/40 px-3 py-1 text-xs font-bold text-lime">{project.label}</span>
        </div>
        <h3 className="text-xl font-extrabold">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
        <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed">
          <span className="font-bold text-sky">Demonstrates: </span>{project.demonstrates}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold text-muted">{t}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}