import { coreStack, skillGroups } from '../data'
import Tag from './Tag'

export default function Skills() {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Core stack</h3>
      <ul aria-label="Core stack" className="mt-3 flex flex-wrap gap-2">
        {coreStack.map((i) => (
          <Tag key={i} variant="accent">
            {i}
          </Tag>
        ))}
      </ul>

      <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{g.label}</h3>
            <ul aria-label={`${g.label} skills`} className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
