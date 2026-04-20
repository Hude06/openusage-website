import { cn } from '@/lib/utils'

interface TerminalCardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function TerminalCard({ title, children, className }: TerminalCardProps) {
  return (
    <div className={cn('terminal', className)}>
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        {title && (
          <span className="ml-3 label-sm truncate">{title}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
