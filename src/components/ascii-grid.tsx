'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=;:./\\|~^?!<>()[]{}'

interface AsciiGridProps {
  rows?: number
  cols?: number
  seed?: number
  className?: string
  responsive?: boolean
}

/**
 * Full-bleed dim ASCII character grid for background texture.
 * Deterministic via seed so SSR/CSR match. When `responsive`, measures
 * its container post-mount and fills with enough chars to cover it.
 */
export function AsciiGrid({
  rows: rowsProp = 60,
  cols: colsProp = 120,
  seed = 42,
  className,
  responsive = true,
}: AsciiGridProps) {
  const ref = useRef<HTMLPreElement>(null)
  const [dims, setDims] = useState<{ rows: number; cols: number }>({
    rows: rowsProp,
    cols: colsProp,
  })

  useEffect(() => {
    if (!responsive || !ref.current) return
    const el = ref.current

    const measure = () => {
      const probe = document.createElement('span')
      probe.textContent = 'M'
      probe.style.visibility = 'hidden'
      probe.style.position = 'absolute'
      el.appendChild(probe)
      const charW = probe.getBoundingClientRect().width || 6
      const lineH = parseFloat(getComputedStyle(el).lineHeight) || 10
      el.removeChild(probe)

      const parent = el.parentElement
      const w = parent?.clientWidth ?? window.innerWidth
      const h = parent?.clientHeight ?? window.innerHeight

      setDims({
        cols: Math.max(colsProp, Math.ceil(w / charW) + 2),
        rows: Math.max(rowsProp, Math.ceil(h / lineH) + 2),
      })
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (el.parentElement) ro.observe(el.parentElement)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [responsive, colsProp, rowsProp])

  const text = useMemo(() => {
    let s = seed
    const rand = () => {
      s = (s * 9301 + 49297) % 233280
      return s / 233280
    }
    const lines: string[] = []
    for (let r = 0; r < dims.rows; r++) {
      let line = ''
      for (let c = 0; c < dims.cols; c++) {
        line += CHARS[Math.floor(rand() * CHARS.length)]
      }
      lines.push(line)
    }
    return lines.join('\n')
  }, [dims.rows, dims.cols, seed])

  return (
    <pre
      ref={ref}
      aria-hidden
      className={cn(
        'ascii ascii-dim pointer-events-none select-none whitespace-pre',
        className,
      )}
    >
      {text}
    </pre>
  )
}
