import { useRef } from 'react'

export default function TiltCard({ children, className = '', max = 12 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale3d(1.03, 1.03, 1.03)`
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }

  const onLeave = () => {
    ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: 'radial-gradient(circle at var(--gx, 50%) var(--gy, 0%), rgba(255,255,255,0.18), transparent 55%)' }}
      />
    </div>
  )
}