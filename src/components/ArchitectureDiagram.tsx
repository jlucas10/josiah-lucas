// Two inline SVGs that use theme variables: a wide one from md up, and a vertical one for phones.
// Both scale to the container width (no horizontal scrolling).
const box = { fill: 'var(--bg)', stroke: 'var(--border)', strokeWidth: 1.5, rx: 8 }
const label = { fill: 'var(--fg)', fontSize: 14, fontWeight: 600, textAnchor: 'middle' as const }
const sub = { fill: 'var(--muted)', fontSize: 11, textAnchor: 'middle' as const }

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
      </marker>
    </defs>
  )
}

const DESC =
  'A React frontend calls a Spring Boot API. The Spring API reads and writes PostgreSQL and AWS S3. A Python FastAPI agent calls the Spring API through read-only tools and uses the Gemini API for function calling.'

function Wide() {
  const line = { stroke: 'var(--muted)', strokeWidth: 1.5, fill: 'none', markerEnd: 'url(#arrow-w)' }
  return (
    <svg viewBox="0 0 720 300" className="hidden h-auto w-full md:block" role="img" aria-labelledby="arch-w-title arch-w-desc">
      <title id="arch-w-title">AlphaTracker architecture</title>
      <desc id="arch-w-desc">{DESC}</desc>
      <Defs id="arrow-w" />

      <rect x="20" y="40" width="170" height="64" {...box} />
      <text x="105" y="68" {...label}>React</text>
      <text x="105" y="88" {...sub}>TypeScript frontend</text>

      <rect x="275" y="110" width="170" height="64" {...box} stroke="var(--accent)" />
      <text x="360" y="138" {...label}>Spring Boot API</text>
      <text x="360" y="158" {...sub}>JWT auth · P&amp;L · drawdown</text>

      <rect x="530" y="40" width="170" height="64" {...box} />
      <text x="615" y="68" {...label}>PostgreSQL</text>
      <text x="615" y="88" {...sub}>Supabase</text>

      <rect x="530" y="180" width="170" height="64" {...box} />
      <text x="615" y="208" {...label}>AWS S3</text>
      <text x="615" y="228" {...sub}>file storage</text>

      <rect x="275" y="220" width="170" height="64" {...box} />
      <text x="360" y="248" {...label}>FastAPI agent</text>
      <text x="360" y="268" {...sub}>Python · grounding guard</text>

      <rect x="20" y="220" width="170" height="64" {...box} />
      <text x="105" y="248" {...label}>Gemini API</text>
      <text x="105" y="268" {...sub}>function calling</text>

      <path d="M190 72 C 240 72, 230 130, 273 134" {...line} />
      <path d="M445 130 C 490 130, 490 72, 528 72" {...line} />
      <path d="M445 154 C 490 154, 490 212, 528 212" {...line} />
      <path d="M360 220 L360 176" {...line} />
      <path d="M273 252 L192 252" {...line} markerStart="url(#arrow-w)" />

      <text x="228" y="108" {...sub}>REST</text>
      <text x="372" y="204" {...sub} textAnchor="start">read-only tools</text>
    </svg>
  )
}

function Narrow() {
  const line = { stroke: 'var(--muted)', strokeWidth: 1.5, fill: 'none', markerEnd: 'url(#arrow-n)' }
  const s = { ...sub, fontSize: 10 }
  const l = { ...label, fontSize: 13 }
  return (
    <svg viewBox="0 0 340 380" className="block h-auto w-full md:hidden" role="img" aria-labelledby="arch-n-title arch-n-desc">
      <title id="arch-n-title">AlphaTracker architecture</title>
      <desc id="arch-n-desc">{DESC}</desc>
      <Defs id="arrow-n" />

      <rect x="180" y="8" width="150" height="52" {...box} />
      <text x="255" y="32" {...l}>Gemini API</text>
      <text x="255" y="49" {...s}>function calling</text>

      <rect x="10" y="100" width="150" height="56" {...box} />
      <text x="85" y="125" {...l}>React</text>
      <text x="85" y="143" {...s}>TypeScript frontend</text>

      <rect x="180" y="100" width="150" height="56" {...box} />
      <text x="255" y="125" {...l}>FastAPI agent</text>
      <text x="255" y="143" {...s}>Python · grounding guard</text>

      <rect x="60" y="206" width="220" height="60" {...box} stroke="var(--accent)" />
      <text x="170" y="232" {...l}>Spring Boot API</text>
      <text x="170" y="250" {...s}>JWT auth · P&amp;L · drawdown</text>

      <rect x="10" y="312" width="150" height="56" {...box} />
      <text x="85" y="337" {...l}>PostgreSQL</text>
      <text x="85" y="355" {...s}>Supabase</text>

      <rect x="180" y="312" width="150" height="56" {...box} />
      <text x="255" y="337" {...l}>AWS S3</text>
      <text x="255" y="355" {...s}>file storage</text>

      <path d="M255 60 L255 98" {...line} markerStart="url(#arrow-n)" />
      <path d="M85 158 L85 204" {...line} />
      <path d="M255 158 L255 204" {...line} />
      <path d="M110 266 C 110 290, 85 290, 85 310" {...line} />
      <path d="M230 266 C 230 290, 255 290, 255 310" {...line} />

      <text x="93" y="186" {...s} textAnchor="start">REST</text>
      <text x="247" y="186" {...s} textAnchor="end">read-only tools</text>
    </svg>
  )
}

export default function ArchitectureDiagram() {
  return (
    <figure className="m-0">
      <div className="rounded-lg border border-border bg-bg p-4">
        <Wide />
        <Narrow />
      </div>
      <figcaption className="mt-2 font-mono text-xs text-muted">
        React calls the Spring API, which owns Postgres and S3. The FastAPI agent only reaches data
        through read-only, user-scoped tools on that same API.
      </figcaption>
    </figure>
  )
}
