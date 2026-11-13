interface TagProps {
  children: string
  variant?: 'muted' | 'accent'
}

export default function Tag({ children, variant = 'muted' }: TagProps) {
  const styles =
    variant === 'accent'
      ? 'border-accent/50 bg-accent/10 text-accent'
      : 'border-border bg-bg text-muted'
  return <li className={`rounded border px-2 py-1 font-mono text-xs ${styles}`}>{children}</li>
}
