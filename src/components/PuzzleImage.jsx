import { useEffect, useMemo, useState } from 'react'

const COLS = 4
const ROWS = 5

// `start` lets the puzzle wait until the intro screen has finished.
export default function PuzzleImage({ src, alt, start = true }) {
  const [done, setDone] = useState(false)

  const pieces = useMemo(() => {
    const list = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        list.push({
          id: `${r}-${c}`,
          r,
          c,
          x: Math.round((Math.random() * 2 - 1) * 180),
          y: Math.round((Math.random() * 2 - 1) * 180),
          rot: Math.round((Math.random() * 2 - 1) * 90),
          delay: (Math.random() * 1.5).toFixed(2),
        })
      }
    }
    return list
  }, [])

  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return
    }
    const t = setTimeout(() => setDone(true), 3700)
    return () => clearTimeout(t)
  }, [start])

  if (!start) return <div className="aspect-[4/5] w-full rounded-[1.5rem]" />

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]"
      role={done ? undefined : 'img'}
      aria-label={done ? undefined : alt}
    >
      {done ? (
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-[50%_20%]" />
      ) : (
        pieces.map((p) => (
          <div
            key={p.id}
            aria-hidden="true"
            className="puzzle-piece absolute overflow-hidden"
            style={{
              left: `${(p.c * 100) / COLS}%`,
              top: `${(p.r * 100) / ROWS}%`,
              width: `${100 / COLS}%`,
              height: `${100 / ROWS}%`,
              '--x': `${p.x}px`,
              '--y': `${p.y}px`,
              '--rot': `${p.rot}deg`,
              '--delay': `${p.delay}s`,
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)',
            }}
          >
            <img
              src={src}
              alt=""
              className="absolute max-w-none object-cover object-[50%_20%]"
              style={{
                width: `${COLS * 100}%`,
                height: `${ROWS * 100}%`,
                left: `${-p.c * 100}%`,
                top: `${-p.r * 100}%`,
              }}
            />
          </div>
        ))
      )}
    </div>
  )
}