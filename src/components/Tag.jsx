export default function Tag({ children, hint }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold">
      {children}
      {hint && <span className="text-xs font-medium text-muted">· {hint}</span>}
    </span>
  )
}
