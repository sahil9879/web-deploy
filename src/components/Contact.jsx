import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    setTimeout(() => setStatus('idle'), 2200)
  }

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const copyLabel = status === 'copied' ? 'Copied!' : status === 'failed' ? 'Copy failed' : 'Copy email'
  const CopyIcon = status === 'copied' ? Check : Copy

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal from="zoom">
          <div
            onMouseMove={onMove}
            className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] px-6 py-16 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-12 sm:py-24"
          >
            {/* decorative background */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(201,243,106,0.12), transparent 70%)' }}
            />
            <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-orbit-slow absolute inset-0 rounded-full border border-dashed border-white/10" />
              <div className="animate-orbit absolute inset-14 rounded-full border border-lime/15">
                <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_14px_3px_rgba(201,243,106,0.6)]" />
              </div>
              <div className="animate-orbit-rev absolute inset-28 rounded-full border border-sky/15">
                <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky shadow-[0_0_12px_3px_rgba(103,198,255,0.6)]" />
              </div>
            </div>
            <div aria-hidden="true" className="absolute -left-16 top-10 h-56 w-56 animate-float rounded-full bg-lime/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -right-16 bottom-10 h-56 w-56 animate-float rounded-full bg-sky/15 blur-3xl" style={{ animationDelay: '2s' }} />

            <div className="relative">
              <Reveal>
                <p className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-lime/40 bg-ink/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime">
                  <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                  </span>
                  Open to opportunities
                </p>
              </Reveal>

              <Reveal delay={150}>
                <h2 id="contact-title" className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  Let&rsquo;s create something{' '}
                  <span
                    className="animate-shimmer bg-linear-to-r from-lime via-sky to-lime bg-clip-text text-transparent"
                    style={{ backgroundSize: '200% auto' }}
                  >
                    meaningful.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={300}>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  Have an opportunity, collaboration, or idea to discuss? Get in touch.
                </p>
              </Reveal>

              <Reveal delay={450}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-lime px-7 text-sm font-bold text-ink transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-lime/30"
                  >
                    <Mail size={18} aria-hidden="true" />
                    {profile.email}
                    <ArrowUpRight size={18} aria-hidden="true" className="transition duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                  >
                    <CopyIcon size={18} aria-hidden="true" />
                    {copyLabel}
                  </button>

                  {profile.showPhone && (
                    <a
                      href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                    >
                      <Phone size={18} aria-hidden="true" />
                      {profile.phone}
                    </a>
                  )}
                </div>
                <p role="status" aria-live="polite" className="sr-only">
                  {status === 'copied' ? 'Email address copied to clipboard' : status === 'failed' ? 'Could not copy the email address' : ''}
                </p>
              </Reveal>

              {profile.socials.length > 0 && (
                <ul className="mt-8 flex justify-center gap-5 text-sm font-semibold">
                  {profile.socials.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="text-muted transition-colors hover:text-lime">{s.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}