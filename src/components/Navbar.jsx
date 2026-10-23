import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${active === id ? 'text-lime' : 'text-muted hover:text-fg'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime text-sm font-extrabold text-ink">{profile.monogram}</span>
          <span className="text-sm font-bold tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>{label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 pb-4 pt-2 md:hidden">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base font-semibold ${active === id ? 'text-lime' : 'text-fg'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
