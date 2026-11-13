import { experience } from '../data'

export default function Experience() {
  return (
    <ol className="space-y-8">
      {experience.map((e) => (
        <li key={`${e.org}-${e.dates}`} className="border-l-2 border-border pl-6">
          <p className="font-mono text-xs text-accent">{e.dates}</p>
          <h3 className="mt-1 text-lg font-semibold">
            {e.role} <span className="font-normal text-muted">· {e.org}</span>
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">{e.summary}</p>
        </li>
      ))}
    </ol>
  )
}
