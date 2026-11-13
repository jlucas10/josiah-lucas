import { heroSnippet } from '../data'

// Renders the sample JSON from data.ts with light syntax colouring.
export default function TerminalCard() {
  const { title, note, fields } = heroSnippet
  return (
    <figure className="m-0 overflow-hidden rounded-xl border border-border bg-surface shadow-frame">
      <div className="flex items-center gap-1.5 border-b border-border bg-panel px-4 py-2.5">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
        <figcaption className="ml-3 font-mono text-xs text-muted">{title}</figcaption>
      </div>
      <pre
        aria-label="Sample AlphaTracker account summary as JSON"
        className="m-0 overflow-hidden p-4 font-mono text-[13px] leading-6"
      >
        <code>
          <span className="text-muted">{`// ${note}`}</span>
          {'\n{\n'}
          {fields.map((f, i) => (
            <span key={f.key}>
              {'  '}
              <span className="text-muted">{JSON.stringify(f.key)}</span>
              {': '}
              <span className={typeof f.value === 'number' ? 'text-fg' : 'text-accent'}>
                {JSON.stringify(f.value)}
              </span>
              {i < fields.length - 1 ? ',' : ''}
              {'\n'}
            </span>
          ))}
          {'}'}
        </code>
      </pre>
    </figure>
  )
}
