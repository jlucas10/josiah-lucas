import { experience } from '../data'

export default function Experience() {
  return (
    <ol className="ml-1.5 border-l border-border">
      {experience.map((e) => (
        <li key={`${e.org}-${e.title}`} className="relative pb-8 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-panel"
          />
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
            <span className="uppercase tracking-widest text-accent">{e.kind}</span>
            <span className="text-muted">{e.dates}</span>
          </p>
          <h3 className="mt-1 text-lg font-semibold">
            {e.title} <span className="font-normal text-muted">· {e.org}</span>
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">{e.summary}</p>
          {e.link && (
            <a
              href={e.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              {e.link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </li>
      ))}
    </ol>
  )
}
