import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  label: string
  title: string
  /** `panel` gives the section a slightly lighter background band. */
  tone?: 'base' | 'panel'
  children?: ReactNode
}

export default function Section({ id, label, title, tone = 'base', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-14 py-10 sm:py-14 ${tone === 'panel' ? 'border-y border-border bg-panel' : ''}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {label}
        </p>
        <h2 id={`${id}-title`} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
