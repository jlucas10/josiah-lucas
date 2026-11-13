import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data'
import ThemeToggle from './ThemeToggle'

const linkClass = 'transition-colors hover:text-accent'

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // While the mobile menu is open: Escape closes it (and returns focus to the button),
  // as does clicking elsewhere, tabbing out of the header, or growing to desktop width.
  useEffect(() => {
    if (!open) return
    const inside = (t: EventTarget | null) => t instanceof Node && !!headerRef.current?.contains(t)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointer = (e: MouseEvent) => {
      if (!inside(e.target)) setOpen(false)
    }
    const onFocusIn = (e: FocusEvent) => {
      if (!inside(e.target)) setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => {
      if (mq.matches) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('focusin', onFocusIn)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('focusin', onFocusIn)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <header ref={headerRef} className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="whitespace-nowrap font-mono text-sm font-medium transition-colors hover:text-accent">
          {profile.name}
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex gap-x-5 text-sm text-muted">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Main menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto max-w-5xl px-2 py-2 sm:px-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-3 text-base text-fg transition-colors hover:bg-panel hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
