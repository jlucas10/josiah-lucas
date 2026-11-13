import type { Project } from '../data'
import ProjectVisual from './ProjectVisual'
import Tag from './Tag'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-frame motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {project.visual && <ProjectVisual visual={project.visual} />}
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.dates}</p>
      <h3 id={`${project.id}-title`} className="mt-3 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
      <p className="mt-4 text-sm">{project.summary}</p>

      {project.hardParts.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm marker:text-accent">
          {project.hardParts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {l.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  )
}
