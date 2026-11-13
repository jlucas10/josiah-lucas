// Inline SVG using theme variables so it works in dark and light.
const box = { fill: 'var(--bg)', stroke: 'var(--border)', strokeWidth: 1.5, rx: 8 }
const label = { fill: 'var(--fg)', fontSize: 14, fontWeight: 600, textAnchor: 'middle' as const }
const sub = { fill: 'var(--muted)', fontSize: 11, textAnchor: 'middle' as const }
const line = { stroke: 'var(--muted)', strokeWidth: 1.5, fill: 'none', markerEnd: 'url(#arrow)' }

export default function ArchitectureDiagram() {
  return (
    <figure className="m-0">
      <div
        className="overflow-x-auto rounded-lg border border-border bg-bg p-4"
        tabIndex={0}
        role="region"
        aria-label="Architecture diagram (scrollable)"
      >
        <svg
          viewBox="0 0 720 300"
          className="min-w-[600px]"
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">AlphaTracker architecture</title>
          <desc id="arch-desc">
            A React frontend calls a Spring Boot API. The Spring API reads and writes PostgreSQL
            and AWS S3. A Python FastAPI agent calls the Spring API through read-only tools and
            uses the Gemini API for function calling.
          </desc>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
            </marker>
          </defs>

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
          <path d="M273 252 L192 252" {...line} markerStart="url(#arrow)" />

          <text x="228" y="108" {...sub}>REST</text>
          <text x="372" y="204" {...sub} textAnchor="start">read-only tools</text>
        </svg>
      </div>
      <figcaption className="mt-2 font-mono text-xs text-muted">
        React calls the Spring API, which owns Postgres and S3. The FastAPI agent only reaches data
        through read-only, user-scoped tools on that same API.
      </figcaption>
    </figure>
  )
}
