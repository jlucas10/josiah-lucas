import type { Project } from '../data'
import ArchitectureDiagram from './ArchitectureDiagram'
import Tag from './Tag'

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="rounded-xl border border-border bg-surface p-6 sm:p-10"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Featured · {project.dates}
      </p>
      <h3 id={`${project.id}-title`} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-1 text-muted">{project.subtitle}</p>
      <p className="mt-5 max-w-3xl">{project.summary}</p>

      {project.keyNumbers && (
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {project.keyNumbers.map((n) => (
            <div key={n.label} className="bg-bg p-4 last:col-span-2 sm:last:col-span-2 lg:last:col-span-1">
              <dt className="sr-only">{n.label}</dt>
              <dd className="font-mono text-xl font-semibold text-accent">{n.value}</dd>
              <p className="mt-1 text-xs text-muted" aria-hidden="true">
                {n.label}
              </p>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-8">
        <ArchitectureDiagram />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Hard parts</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm marker:text-accent">
            {project.hardParts.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        {project.results && (
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Results</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm marker:text-accent">
              {project.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ul aria-label="Tech stack" className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              l.kind === 'demo'
                ? 'rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg hover:opacity-90'
                : 'rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent'
            }
          >
            {l.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  )
}
