import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 font-mono text-xs text-muted sm:px-6">
        &copy; {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}
