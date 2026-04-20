import { cn } from '@/lib/utils'

interface SegmentedBarProps {
  percent: number
  segments?: number
  className?: string
  tone?: 'default' | 'warn' | 'danger'
}

export function SegmentedBar({
  percent,
  segments = 24,
  className,
  tone = 'default',
}: SegmentedBarProps) {
  const filled = Math.max(0, Math.min(segments, Math.round((percent / 100) * segments)))
  const toneClass = tone === 'warn' ? 'warn' : tone === 'danger' ? 'danger' : 'on'
  return (
    <div className={cn('seg-bar', className)}>
      {Array.from({ length: segments }).map((_, i) => (
        <span key={i} className={i < filled ? toneClass : ''} />
      ))}
    </div>
  )
}
