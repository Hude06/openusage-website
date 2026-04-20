'use client'

import Link from 'next/link'
import { Download, ArrowRight, Terminal, Activity, Timer, Layers, Zap, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AsciiGrid } from '@/components/ascii-grid'
import { SegmentedBar } from '@/components/segmented-bar'
import { TerminalCard } from '@/components/terminal-card'

const GITHUB_URL = 'https://github.com/Hude06/openusage-app'
const DOWNLOAD_URL = 'https://github.com/Hude06/openusage-app/releases/latest/download/OpenUsage.dmg'

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const FEATURES = [
  {
    icon: Activity,
    title: 'Live Usage Rings',
    desc: 'Session and weekly limits rendered in real time. Remaining percentage, window reset, model breakdown — all at a glance.',
    ascii: '[██████████░░]',
  },
  {
    icon: Timer,
    title: 'Reset Countdowns',
    desc: 'Exact time to your 5-hour session flip and your 7-day weekly reset. No more guessing if you can ship one more prompt.',
    ascii: '04:37:12 ← ←',
  },
  {
    icon: Layers,
    title: 'Claude & Codex',
    desc: 'Anthropic Claude and OpenAI Codex tracked side-by-side. Max, Pro, Team plans — whichever you have.',
    ascii: 'CL/CX · 2 svc',
  },
  {
    icon: Zap,
    title: 'Model Breakdown',
    desc: 'Per-model token counts and 30-day cost history. Opus vs Sonnet vs Haiku — know where the tokens went.',
    ascii: 'opus · snt · hk',
  },
  {
    icon: Terminal,
    title: 'Menu Bar Native',
    desc: 'Lives in your menu bar with a status dot. Green, yellow, red — peripheral awareness without the window.',
    ascii: '● ● ● gray→red',
  },
  {
    icon: Command,
    title: 'Keyboard First',
    desc: 'Cmd+R to refresh, Cmd+, for settings, Cmd+Q to quit. No mouse required. No telemetry either.',
    ascii: '⌘R · ⌘, · ⌘Q',
  },
]

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* ── Full-page dim ASCII grid background ── */}
      <div className="fixed inset-0 pointer-events-none opacity-60 overflow-hidden">
        <AsciiGrid rows={120} cols={180} seed={42} className="p-2" />
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
              className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
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

      {/* ── Hero ── */}
      <main className="relative z-10 w-full">
        <section className="w-full px-6 sm:px-10 lg:px-16 pt-20 pb-24 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
            {/* Left: copy */}
            <div className="flex flex-col items-start fade-in">
              <Badge
                variant="outline"
                className="mb-8 font-mono tracking-[0.25em] uppercase text-[10px] border-border rounded-none px-3 py-1.5 h-auto"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-foreground cursor-blink mr-2 inline-block" />
                v1.0 · macOS
              </Badge>

              <h1 className="display text-[clamp(3rem,7vw,6.5rem)] mb-6 tracking-tight leading-[0.95]">
                <span className="block text-foreground">Know</span>
                <span className="block text-muted-foreground">before you</span>
                <span className="block text-foreground">hit zero.</span>
              </h1>

              <p className="max-w-lg text-base sm:text-lg font-mono text-muted-foreground mb-2 leading-relaxed">
                Real-time Claude &amp; Codex subscription monitoring.
              </p>
              <p className="max-w-lg text-sm font-mono text-muted-foreground/70 mb-10 leading-relaxed">
                Session windows · weekly caps · model breakdown · menu bar resident. OLED black. Zero telemetry.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto mb-6">
                <Button
                  size="lg"
                  className="rounded-md"
                  nativeButton={false}
                  render={
                    <a href={DOWNLOAD_URL}>
                      <Download />
                      <span className="font-mono tracking-wider uppercase text-xs">Download .dmg</span>
                      <ArrowRight />
                    </a>
                  }
                />
                <Button
                  size="lg"
                  variant="ghost"
                  nativeButton={false}
                  render={
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <GithubIcon size={14} />
                      <span className="font-mono tracking-wider uppercase text-xs">View source</span>
                    </a>
                  }
                />
              </div>

              <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground/50">
                macOS 13+ · Apple Silicon &amp; Intel · free during beta
              </p>
            </div>

            {/* Right: live CLI readout + crop marks */}
            <div className="relative fade-in d2">
              <div className="relative crop-mark bg-background/50 backdrop-blur-sm border border-border rounded-md overflow-hidden">
                <div className="terminal-bar">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="ml-3 label-sm truncate">~ · open-usage --watch</span>
                </div>

                <div className="p-6 sm:p-8 space-y-6 font-mono text-sm">
                  <div className="text-muted-foreground">
                    <span className="text-foreground">$</span> open-usage --watch
                    <span className="cursor-blink ml-0.5">▊</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="display text-[5rem] sm:text-[6rem] leading-none">92</span>
                      <span className="text-2xl text-muted-foreground ml-1">%</span>
                    </div>
                    <div className="text-right">
                      <div className="label-sm mb-1">status</div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block" />
                        <span className="font-mono text-xs uppercase tracking-wider">healthy</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="label-sm">session · 5hr</span>
                        <span className="font-mono text-[10px] text-muted-foreground">04:12:38</span>
                      </div>
                      <SegmentedBar percent={8} segments={28} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="label-sm">weekly · 7d</span>
                        <span className="font-mono text-[10px] text-muted-foreground">5d 02h</span>
                      </div>
                      <SegmentedBar percent={22} segments={28} />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60 grid grid-cols-3 gap-4 text-[11px]">
                    <div>
                      <div className="label-sm mb-1">claude</div>
                      <div className="font-mono text-foreground">max · 92%</div>
                    </div>
                    <div>
                      <div className="label-sm mb-1">codex</div>
                      <div className="font-mono text-foreground">pro · 74%</div>
                    </div>
                    <div>
                      <div className="label-sm mb-1">tick</div>
                      <div className="font-mono text-muted-foreground">0.5s</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="label-sm">x: 0 y: 0</span>
                <span className="label-sm">tty · live</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="dot-divider w-full" />
        </div>

        {/* ── App mockup section ── */}
        <section className="w-full px-6 sm:px-10 lg:px-16 py-24 max-w-screen-2xl mx-auto">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <p className="label mb-4">§ 01 · Interface</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
                Instrument-panel UI.
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Nothing Design System. OLED black. Segmented progress bars. Doto hero numerics. Space Mono labels. No shadows. No gradients. No chrome.
              </p>
            </div>
            <span className="label-sm">Fig · 01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TerminalCard title="OPEN USAGE · CLAUDE.MAX">
              <div className="p-6 space-y-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="display text-6xl">87</span>
                    <span className="font-mono text-xl text-muted-foreground ml-1">%</span>
                  </div>
                  <span className="label-sm">remaining</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="label-sm">Session · 5hr</span>
                      <span className="font-mono text-[10px] text-muted-foreground">03:42:18</span>
                    </div>
                    <SegmentedBar percent={13} segments={24} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="label-sm">Weekly · 7d</span>
                      <span className="font-mono text-[10px] text-muted-foreground">4d 11h</span>
                    </div>
                    <SegmentedBar percent={34} segments={24} />
                  </div>
                </div>
                <Separator className="bg-border" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="label-sm mb-1">Opus</div>
                    <SegmentedBar percent={62} segments={16} tone="warn" />
                  </div>
                  <div>
                    <div className="label-sm mb-1">Sonnet</div>
                    <SegmentedBar percent={28} segments={16} />
                  </div>
                </div>
              </div>
            </TerminalCard>

            <TerminalCard title="OPEN USAGE · CODEX.PRO">
              <div className="p-6 space-y-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="display text-6xl">42</span>
                    <span className="font-mono text-xl text-muted-foreground ml-1">%</span>
                  </div>
                  <span className="label-sm">remaining</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="label-sm">Session · 5hr</span>
                      <span className="font-mono text-[10px] text-muted-foreground">01:14:06</span>
                    </div>
                    <SegmentedBar percent={58} segments={24} tone="warn" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="label-sm">Weekly · 7d</span>
                      <span className="font-mono text-[10px] text-muted-foreground">2d 03h</span>
                    </div>
                    <SegmentedBar percent={74} segments={24} tone="danger" />
                  </div>
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <span className="label-sm">Credits</span>
                  <span className="font-mono text-sm text-foreground stat-num">$12.47 left</span>
                </div>
              </div>
            </TerminalCard>
          </div>
        </section>

        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="dot-divider w-full" />
        </div>

        {/* ── Features ── */}
        <section className="w-full px-6 sm:px-10 lg:px-16 py-24 max-w-screen-2xl mx-auto">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <p className="label mb-4">§ 02 · Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What it tracks.</h2>
            </div>
            <span className="label-sm">06 modules</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <Card
                key={f.title}
                className="rounded-md border-border bg-card/60 backdrop-blur-sm hover:bg-card transition-colors group"
              >
                <div className="px-5 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-border flex items-center justify-center text-foreground/80 group-hover:text-foreground transition-colors rounded-sm">
                        <f.icon size={14} strokeWidth={1.5} />
                      </div>
                      <span className="label">§ 02.{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-tight">{f.ascii}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight mb-1.5">{f.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="dot-divider w-full" />
        </div>

        {/* ── Terminal CTA ── */}
        <section className="w-full px-6 sm:px-10 lg:px-16 py-24 max-w-screen-2xl mx-auto">
          <TerminalCard title="~/open-usage · install.sh" className="max-w-3xl mx-auto">
            <div className="p-8 font-mono text-sm space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground/50 select-none">$</span>
                <span className="text-foreground">curl -L -o OpenUsage.dmg \</span>
              </div>
              <div className="pl-6 text-muted-foreground break-all">
                https://github.com/Hude06/openusage-app/releases/latest/download/OpenUsage.dmg
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground/50 select-none">$</span>
                <span className="text-foreground">open OpenUsage.dmg</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground/50 select-none">$</span>
                <span className="text-foreground">
                  drag → /Applications
                  <span className="cursor-blink ml-1 text-foreground">▊</span>
                </span>
              </div>
              <Separator className="bg-border my-4" />
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-muted-foreground">
                  or grab it from <span className="text-foreground">Releases</span> — no account, no signup, no tracking.
                </p>
                <Button
                  size="sm"
                  nativeButton={false}
                  render={
                    <a href={DOWNLOAD_URL}>
                      <Download />
                      <span className="font-mono tracking-wider uppercase text-xs">.dmg</span>
                    </a>
                  }
                />
              </div>
            </div>
          </TerminalCard>
        </section>
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
            <Link href="/leaderboard" className="label hover:text-foreground transition-colors">
              leaderboard
            </Link>
            <span className="label-sm">2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
