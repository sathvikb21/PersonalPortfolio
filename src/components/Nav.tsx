import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data'
import { Moon, Sun } from './icons'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  // Lock scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <nav className="mt-5 flex w-max items-center gap-1 rounded-full border border-line bg-card p-1.5 shadow-[0_12px_32px_-16px_rgba(11,43,49,0.3)] backdrop-blur-2xl dark:bg-shell dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          <a
            href="#top"
            className="rounded-full px-4 py-2 font-display text-sm font-semibold tracking-wide text-fg transition-colors duration-500 ease-spring hover:bg-fg/5"
          >
            {profile.name.toLowerCase()}
            <span className="text-accent">.dev</span>
          </a>

          <div className="hidden md:flex md:items-center md:gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-fg-muted transition-all duration-500 ease-spring hover:bg-fg/5 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition-all duration-500 ease-spring hover:bg-fg/5 hover:text-fg active:scale-[0.94]"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-btn px-4 py-2 text-sm font-medium text-btn-fg transition-transform duration-500 ease-spring hover:scale-[1.03] active:scale-[0.98] md:block"
          >
            Say hi
          </a>

          {/* Hamburger that morphs into an X */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-500 ease-spring hover:bg-fg/5 md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-spring ${
                open ? 'rotate-45' : '-translate-y-[3.5px]'
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-spring ${
                open ? '-rotate-45' : 'translate-y-[3.5px]'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay with staggered link reveal */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink/85 backdrop-blur-3xl transition-opacity duration-700 ease-spring md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            className={`font-display text-4xl font-medium text-fg transition-all duration-700 ease-spring ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          onClick={() => setOpen(false)}
          style={{ transitionDelay: open ? `${100 + navLinks.length * 60}ms` : '0ms' }}
          className={`mt-6 rounded-full bg-btn px-8 py-3 font-medium text-btn-fg transition-all duration-700 ease-spring ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Say hi
        </a>
      </div>
    </>
  )
}
