import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)'
export const REVEAL_MS = 1500

// Letters shuffle randomly and settle into `target` from left to right.
function scrambleTo(target, duration, setText) {
  const start = performance.now()
  const id = setInterval(() => {
    const p = Math.min((performance.now() - start) / duration, 1)
    setText(
      target
        .split('')
        .map((ch, i) => (ch === ' ' ? ' ' : i < p * target.length ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join(''),
    )
    if (p >= 1) clearInterval(id)
  }, 40)
  return id
}

// steps: 0 dot, 1 line, 2 text, 4 subtitle, 5 line shrinks back to a dot, 6 site opens from the dot
export default function Intro({ onReveal, onDone }) {
  const [step, setStep] = useState(0)
  const [text, setText] = useState('')
  const [gone, setGone] = useState(false)
  const timers = useRef([])
  const started = useRef(false)
  const revealRef = useRef(onReveal)
  const doneRef = useRef(onDone)
  revealRef.current = onReveal
  doneRef.current = onDone

  const clearAll = () => {
    timers.current.forEach((t) => {
      clearTimeout(t)
      clearInterval(t)
    })
    timers.current = []
  }

  const exit = () => {
    if (started.current) return
    started.current = true
    clearAll()
    setStep(5)
    setTimeout(() => {
      setStep(6)
      revealRef.current()
    }, 550)
    setTimeout(() => {
      setGone(true)
      doneRef.current()
    }, 550 + REVEAL_MS + 100)
  }

  useEffect(() => {
    if (started.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      started.current = true
      revealRef.current()
      doneRef.current()
      setGone(true)
      return
    }
    const at = (ms, fn) => timers.current.push(setTimeout(fn, ms))
    at(700, () => setStep(1))
    at(1500, () => {
      setStep(2)
      timers.current.push(scrambleTo(profile.name.toUpperCase(), 1100, setText))
    })
    at(3100, () => timers.current.push(scrambleTo('PORTFOLIO', 900, setText)))
    at(4200, () => setStep(4))
    at(5400, exit)
    return clearAll
  }, [])

  useEffect(() => {
    if (gone) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [gone])

  if (gone) return null

  const closing = step >= 5
  const opening = step >= 6

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${opening ? 'pointer-events-none' : ''}`}
    >
      <div
        aria-hidden="true"
        className="absolute h-72 w-72 rounded-full bg-white/10 blur-3xl transition-opacity duration-700"
        style={{ opacity: closing ? 0 : 1 }}
      />

      {/* glowing ring that travels outward together with the opening site */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60"
        style={{
          width: opening ? '300vmax' : 0,
          height: opening ? '300vmax' : 0,
          opacity: opening ? 0 : 1,
          boxShadow: '0 0 40px 8px rgba(201,243,106,0.35)',
          transition: `width ${REVEAL_MS}ms ${EASE}, height ${REVEAL_MS}ms ${EASE}, opacity ${REVEAL_MS}ms ease-in`,
        }}
      />

      <div className="relative">
        <div
          aria-hidden="true"
          className="mx-auto rounded-full bg-white transition-all duration-500 ease-out"
          style={{
            width: step >= 1 && !closing ? 'min(70vw, 480px)' : 8,
            height: step >= 1 && !closing ? 2 : 8,
            opacity: opening ? 0 : 1,
            boxShadow: '0 0 24px 4px rgba(255,255,255,0.6)',
            transitionDuration: opening ? '400ms' : undefined,
          }}
        />
        <p
          aria-hidden="true"
          className={`absolute bottom-full left-1/2 mb-6 -translate-x-1/2 whitespace-nowrap bg-linear-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-[clamp(2.2rem,9vw,6rem)] font-extrabold leading-none tracking-tight text-transparent transition-all duration-500 ${
            closing ? 'translate-y-6 scale-90 opacity-0' : step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {text || '\u00A0'}
        </p>
        <p
          aria-hidden="true"
          className={`absolute left-1/2 top-full mt-6 -translate-x-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.25em] text-lime transition-opacity duration-500 sm:text-sm ${
            step >= 4 && !closing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {profile.eyebrow}
        </p>
      </div>

      {!closing && (
        <button
          type="button"
          onClick={exit}
          className="absolute bottom-6 right-6 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:text-white"
        >
          Skip intro
        </button>
      )}
    </div>
  )
}