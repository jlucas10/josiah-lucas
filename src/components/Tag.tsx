export default function Tag({ children }: { children: string }) {
  return (
    <li className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  )
}
