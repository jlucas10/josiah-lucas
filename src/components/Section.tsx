import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  label: string
  title: string
  children?: ReactNode
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{label}</p>
      <h2 id={`${id}-title`} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
