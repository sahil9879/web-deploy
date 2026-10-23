import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-extrabold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Designed for growth, creativity, and continuous learning.</p>
          <p className="mt-3 text-xs text-muted">&copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
        </div>
        <a href="#home" className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-line px-5 text-sm font-bold transition-colors hover:border-lime hover:text-lime sm:self-auto">
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
