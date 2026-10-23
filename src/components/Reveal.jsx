import { useEffect, useRef, useState } from 'react'

const hidden = {
  up: 'translate-y-8 opacity-0 blur-sm',
  left: '-translate-x-10 opacity-0 blur-sm',
  right: 'translate-x-10 opacity-0 blur-sm',
  zoom: 'scale-90 opacity-0 blur-sm',
}

// Fades, slides and un-blurs its children the first time they scroll into view.
// from: 'up' (default) | 'left' | 'right' | 'zoom'
export default function Reveal({ children, delay = 0, from = 'up', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-1000 ease-out ${shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-0' : hidden[from]} ${className}`}
    >
      {children}
    </div>
  )
}