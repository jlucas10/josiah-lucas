import { links } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const row =
  'inline-flex items-center gap-3 rounded-md border border-border px-4 py-3 text-sm hover:border-accent hover:text-accent'

export default function Contact() {
  return (
    <div>
      <p className="max-w-xl text-muted">
        I&rsquo;m looking for backend software engineering and applied AI roles. The best way to
        reach me is email.
      </p>
      <a
        href={`mailto:${links.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-accent-fg hover:opacity-90"
      >
        <MailIcon />
        {links.email}
      </a>
      <ul className="mt-6 flex flex-wrap gap-3">
        <li>
          <a href={links.github} className={row} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={links.linkedin} className={row} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
