'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Download, Trophy, Medal, Award, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AsciiGrid } from '@/components/ascii-grid'
import { TerminalCard } from '@/components/terminal-card'

const GITHUB_URL = 'https://github.com/Hude06/openusage-app'
const DOWNLOAD_URL = 'https://github.com/Hude06/openusage-app/releases/latest/download/OpenUsage.dmg'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.opentokenusage.com'

interface LeaderboardEntry {
  rank: number
  githubLogin: string
  avatarUrl: string
  totalTokens: number
  claudeTokens: number
  codexTokens: number
}

interface LeaderboardApiResponse {
  success: boolean
  data?: {
    period: string
    entries: LeaderboardEntry[]
    updatedAt: string
  }
  error?: string
}

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

function formatTokens(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toString()
}

type Period = 'today' | 'alltime'

function buildLeaderboardUrl(period: Period): string {
  const base = API_BASE_URL.replace(/\/+$/, '')
  const apiBase = base.endsWith('/api') ? base : `${base}/api`
  return `${apiBase}/leaderboard?period=${encodeURIComponent(period)}`
}

export default function LeaderboardPage() {
  const [period, setPeriod] = useState<Period>('alltime')
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null)

  const fetchLeaderboard = useCallback(async () => {
    try {
      setError(null)
      const res = await fetch(buildLeaderboardUrl(period))
      if (!res.ok) throw new Error(`Failed to fetch leaderboard`)
      const payload = (await res.json()) as LeaderboardApiResponse | LeaderboardEntry[]

      // Backward-compatibility with older array-only payloads.
      if (Array.isArray(payload)) {
        setEntries(payload)
        setUpdatedAt(new Date())
        return
      }

      if (!payload.success || !payload.data) {
        throw new Error(payload.error || 'Failed to fetch leaderboard')
      }

      setEntries(payload.data.entries)
      setUpdatedAt(new Date(payload.data.updatedAt))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [period])

  useEffect(() => {
    setLoading(true)
    fetchLeaderboard()
    const interval = setInterval(fetchLeaderboard, 60_000)
    return () => clearInterval(interval)
  }, [fetchLeaderboard])

  const rankGlyph = (rank: number) => {
    if (rank === 1) return <Trophy size={14} className="text-foreground" />
    if (rank === 2) return <Medal size={14} className="text-foreground/70" />
    if (rank === 3) return <Award size={14} className="text-foreground/50" />
    return (
      <span className="font-mono text-xs text-muted-foreground stat-num tabular-nums">
        {String(rank).padStart(2, '0')}
      </span>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none opacity-60 overflow-hidden">
        <AsciiGrid rows={120} cols={180} seed={91} className="p-2" />
      </div>
      <div className="fixed inset-0 pointer-events-none grid-bg" />

      {/* ── Nav ── */}
      <header className="relative z-30 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Open Usage"
                width={26}
                height={26}
                className="rounded-[5px]"
              />
              <span className="font-mono text-xs tracking-[0.3em] text-foreground uppercase">
                Open Usage
              </span>
            </Link>
            <Separator orientation="vertical" className="h-4 bg-border" />
            <Link
              href="/leaderboard"
              className="text-xs font-mono tracking-[0.2em] uppercase text-foreground hover:text-foreground transition-colors"
            >
              Leaderboard
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={14} />
                  <span className="hidden sm:inline font-mono tracking-wider uppercase text-xs">Source</span>
                </a>
              }
            />
            <Button
              size="sm"
              nativeButton={false}
              render={
                <a href={DOWNLOAD_URL}>
                  <Download />
                  <span className="font-mono tracking-wider uppercase text-xs">Download</span>
                </a>
              }
            />
          </div>
        </nav>
      </header>

      {/* ── Main ── */}
      <main className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-14 max-w-screen-2xl mx-auto">
        {/* Hero */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10 fade-in">
          <div>
            <p className="label mb-3">§ 03 · Community Leaderboard</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">
              Top burners.
            </h1>
            <p className="font-mono text-sm text-muted-foreground max-w-xl">
              Voluntarily submitted token totals, refreshed every minute. Opt-in from the app settings.
            </p>
          </div>
          <Badge
            variant="outline"
            className="font-mono tracking-[0.25em] uppercase text-[10px] border-border rounded-none px-3 py-1.5 h-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground cursor-blink mr-2 inline-block" />
            live · updated {updatedAt ? updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '—'}
          </Badge>
        </div>

        {/* Period tabs */}
        <div className="flex items-center gap-2 mb-6 fade-in d1">
          {([
            { key: 'today' as Period, label: 'Today' },
            { key: 'alltime' as Period, label: 'All time' },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setPeriod(tab.key)}
              className={`px-4 py-2 rounded-sm text-xs font-mono tracking-[0.2em] uppercase border transition-all ${
                period === tab.key
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-border-strong hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="flex-1" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => { setLoading(true); fetchLeaderboard() }}
          >
            <RefreshCw />
            <span className="font-mono tracking-wider uppercase text-xs">Refresh</span>
          </Button>
        </div>

        {/* Table */}
        <TerminalCard title={`leaderboard.ssv · period=${period}`} className="fade-in d2">
          {/* Header row */}
          <div className="grid grid-cols-[56px_1fr_100px_100px_100px] sm:grid-cols-[80px_1fr_140px_140px_140px] gap-2 px-5 py-3 border-b border-border bg-muted/30">
            {['#', 'User', 'Total', 'Claude', 'Codex'].map((h) => (
              <span key={h} className="label-sm tracking-[0.2em]">
                {h}
              </span>
            ))}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-24">
              <div className="w-5 h-5 border border-border border-t-foreground rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-20 gap-3 px-6 text-center">
              <p className="font-mono text-sm text-muted-foreground">{error}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setLoading(true); fetchLeaderboard() }}
              >
                <RefreshCw />
                <span className="font-mono tracking-wider uppercase text-xs">Retry</span>
              </Button>
            </div>
          )}

          {!loading && !error && entries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 gap-6 px-6 text-center">
              <div className="ascii ascii-dim text-xs">
{`       .-.
      (o o)
    +--\\o/--+
    no data yet`}
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                The leaderboard is empty — be the first.
              </p>
              <Button
                size="sm"
                nativeButton={false}
                render={
                  <a href={DOWNLOAD_URL}>
                    <Download />
                    <span className="font-mono tracking-wider uppercase text-xs">Get Open Usage</span>
                  </a>
                }
              />
            </div>
          )}

          {!loading && !error && entries.length > 0 && (
            <div>
              {entries.map((entry, i) => (
                <div
                  key={entry.githubLogin}
                  className={`grid grid-cols-[56px_1fr_100px_100px_100px] sm:grid-cols-[80px_1fr_140px_140px_140px] gap-2 px-5 py-3 items-center border-b border-border/60 hover:bg-muted/40 transition-colors fade-in ${
                    entry.rank <= 3 ? 'bg-muted/20' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className="flex items-center justify-start w-8 h-8">
                    {rankGlyph(entry.rank)}
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={entry.avatarUrl}
                      alt={entry.githubLogin}
                      width={22}
                      height={22}
                      className="rounded-full flex-shrink-0 border border-border"
                    />
                    <span className="font-mono text-xs text-foreground truncate">
                      @{entry.githubLogin}
                    </span>
                  </div>
                  <span className="font-mono text-sm stat-num text-foreground">
                    {formatTokens(entry.totalTokens)}
                  </span>
                  <span className="font-mono text-sm stat-num text-muted-foreground">
                    {formatTokens(entry.claudeTokens)}
                  </span>
                  <span className="font-mono text-sm stat-num text-muted-foreground">
                    {formatTokens(entry.codexTokens)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </TerminalCard>

        {updatedAt && (
          <p className="mt-6 label-sm text-center">
            snapshot · {updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} · refreshes every 60s
          </p>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 w-full border-t border-border/60 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 py-8 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" width={18} height={18} className="rounded-[4px]" />
            <span className="label tracking-[0.25em]">Open Usage · v1.0 · mit</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 label hover:text-foreground transition-colors"
            >
              <GithubIcon size={12} />
              <span>github</span>
            </a>
            <Link href="/" className="label hover:text-foreground transition-colors">
              home
            </Link>
            <span className="label-sm">2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
