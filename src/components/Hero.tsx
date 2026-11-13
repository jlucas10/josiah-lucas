import { links, profile } from '../data'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons'
import TerminalCard from './TerminalCard'

const iconLink =
  'inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-bg relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-14 lg:pt-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{profile.role}</p>
          <h1 id="hero-title" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">{profile.pitch}</p>
          <p className="mt-4 flex items-center gap-1.5 font-mono text-xs text-muted">
            <PinIcon />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.resume}
              download="Josiah_Lucas_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              <DownloadIcon />
              Download resume
            </a>
            <a
              href="#projects"
              className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View projects
            </a>
            <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
            <a href={links.github} className={iconLink} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href={links.linkedin} className={iconLink} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${links.email}`} className={iconLink} aria-label={`Email ${links.email}`}>
              <MailIcon />
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  )
}
