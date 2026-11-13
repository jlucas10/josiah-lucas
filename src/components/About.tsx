import { profile } from '../data'

export default function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
      <div className="max-w-2xl space-y-4">
        {profile.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <dl className="space-y-6 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-widest text-muted">Education</dt>
          <dd className="mt-2">{profile.education}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-widest text-muted">Coursework</dt>
          <dd className="mt-2">{profile.coursework.join(' · ')}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-widest text-muted">Location</dt>
          <dd className="mt-2">{profile.location}</dd>
        </div>
      </dl>
    </div>
  )
}
