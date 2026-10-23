export default function SectionHeading({ eyebrow, title, id, children }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lime">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-relaxed text-muted">{children}</p>}
    </div>
  )
}
