import type { Project } from '../data'
import ArchitectureDiagram from './ArchitectureDiagram'
import Tag from './Tag'

function BrowserFrame({ project }: { project: Project }) {
  const shot = project.screenshot!
  const demo = project.links.find((l) => l.kind === 'demo')
  const host = demo ? new URL(demo.href).host : ''
  return (
    <div className="shadow-frame mt-8 overflow-hidden rounded-xl border border-border bg-panel">
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        {host && (
          <span className="min-w-0 flex-1 truncate rounded bg-bg px-3 py-1 text-center font-mono text-xs text-muted">
            {host}
          </span>
        )}
      </div>
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        loading="lazy"
        decoding="async"
        className="screenshot-img block h-auto w-full"
      />
    </div>
  )
}

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/60 sm:p-10"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Featured · {project.dates}
      </p>
      <h3 id={`${project.id}-title`} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-1 text-muted">{project.subtitle}</p>
      <p className="mt-5 max-w-3xl">{project.summary}</p>

      {project.screenshot && <BrowserFrame project={project} />}

      {project.keyNumbers && (
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border border-t-accent bg-border sm:grid-cols-3 lg:grid-cols-5">
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
                ? 'rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90'
                : 'rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent'
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
