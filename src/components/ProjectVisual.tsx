import type { ProjectVisual as Visual } from '../data'

function Pipeline({ steps, caption }: { steps: string[]; caption: string }) {
  return (
    <figure className="m-0">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label="Pipeline steps">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span
              className={`rounded border px-2 py-1 font-mono text-[11px] leading-tight ${
                i === steps.length - 1
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border bg-bg text-fg'
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 font-mono text-[11px] text-muted">{caption}</figcaption>
    </figure>
  )
}

// Stylised "before / after" report. Bars are decorative and carry no data.
function Report({ caption }: { caption: string }) {
  return (
    <figure className="m-0">
      <svg viewBox="0 0 360 120" className="block h-auto w-full" role="img" aria-label="Illustration: a plain report on the left and a themed coverage and token-usage report on the right">
        <rect x="2" y="2" width="170" height="116" rx="8" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="14" y="22" fill="var(--muted)" fontSize="10" fontFamily="var(--font-mono)">BEFORE</text>
        {[40, 58, 76, 94].map((y) => (
          <rect key={y} x="14" y={y} width={y % 36 === 4 ? 120 : 146} height="6" rx="3" fill="var(--border)" />
        ))}

        <rect x="188" y="2" width="170" height="116" rx="8" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="200" y="22" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)">AFTER</text>
        <text x="200" y="42" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Coverage</text>
        <rect x="200" y="47" width="146" height="7" rx="3.5" fill="var(--border)" />
        <rect x="200" y="47" width="108" height="7" rx="3.5" fill="var(--accent)" />
        <text x="200" y="72" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Token usage</text>
        <rect x="200" y="77" width="146" height="7" rx="3.5" fill="var(--border)" />
        <rect x="200" y="77" width="82" height="7" rx="3.5" fill="var(--accent)" opacity="0.7" />
        <rect x="200" y="94" width="60" height="6" rx="3" fill="var(--border)" />
        <rect x="266" y="94" width="40" height="6" rx="3" fill="var(--border)" />
      </svg>
      <figcaption className="mt-3 font-mono text-[11px] text-muted">{caption}</figcaption>
    </figure>
  )
}

export default function ProjectVisual({ visual }: { visual: Visual }) {
  return (
    <div className="-mx-6 -mt-6 mb-5 border-b border-border bg-panel p-4">
      {visual.type === 'pipeline' ? (
        <Pipeline steps={visual.steps} caption={visual.caption} />
      ) : (
        <Report caption={visual.caption} />
      )}
    </div>
  )
}
