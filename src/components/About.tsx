import { about, profile } from '../data'

const dt = 'font-mono text-xs uppercase tracking-widest text-muted'

export default function About() {
  const { lead, paragraphs, quote } = about
  return (
    <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
      <div>
        <p className="max-w-2xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          {lead.before}
          <span className="text-accent">{lead.accent}</span>
          {lead.after}
        </p>

        <div className="mt-6 max-w-[65ch] space-y-4 text-muted">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <blockquote className="mt-8 max-w-[65ch] border-l-2 border-accent pl-4 text-sm italic text-muted">
          <p>&ldquo;{quote.text}&rdquo;</p>
          <footer className="mt-2 not-italic">
            &mdash; {quote.author}, <cite>{quote.source}</cite>
          </footer>
        </blockquote>
      </div>

      <dl className="space-y-6 self-start text-sm md:border-l md:border-border md:pl-8">
        <div>
          <dt className={dt}>Education</dt>
          <dd className="mt-2">{profile.education}</dd>
        </div>
        <div>
          <dt className={dt}>Coursework</dt>
          <dd className="mt-2">{profile.coursework.join(' · ')}</dd>
        </div>
        <div>
          <dt className={dt}>Location</dt>
          <dd className="mt-2">{profile.location}</dd>
        </div>
      </dl>
    </div>
  )
}
