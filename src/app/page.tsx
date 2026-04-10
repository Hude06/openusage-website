'use client'

import { motion } from 'framer-motion'
import { Download, Activity, Clock, Layers, Zap } from 'lucide-react'

const GITHUB_URL = 'https://github.com/Hude06/openusage-app'
const DOWNLOAD_URL = 'https://github.com/Hude06/openusage-app/releases/latest/download/OpenUsage.dmg'

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const features = [
  {
    icon: Activity,
    title: 'Live Usage Rings',
    desc: 'Session and weekly limits visualised in real time. See exactly how much runway you have left.',
  },
  {
    icon: Clock,
    title: 'Reset Countdowns',
    desc: 'Precise countdowns to when your 5-hour session and 7-day windows reset.',
  },
  {
    icon: Layers,
    title: 'Claude & Codex',
    desc: 'Tracks both Anthropic Claude and OpenAI Codex subscription limits side-by-side.',
  },
  {
    icon: Zap,
    title: 'Model Breakdown',
    desc: 'Per-model token usage and 30-day cost history so you know where tokens are going.',
  },
]

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
})

const AppMockup = () => (
  <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
    {/* Outer glow halo */}
    <div className="absolute -inset-6 rounded-3xl bg-[var(--primary)]/5 blur-2xl pointer-events-none" />
    <div className="float relative rounded-2xl border border-white/10 bg-[#0c0c12] overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05] bg-[#09090f]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] font-mono text-[var(--muted-foreground)] tracking-[0.2em]">OPEN USAGE</span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        {[
          { label: 'CLAUDE', badge: 'MAX', session: 1, weekly: 8 },
          { label: 'CODEX',  badge: 'PRO', session: 0, weekly: 0 },
        ].map((item) => (
          <div key={item.label} className="bg-[#0e0e16] rounded-xl p-4 border border-white/[0.04]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold text-[var(--foreground)] tracking-wider">{item.label}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[var(--muted-foreground)] border border-white/[0.06]">{item.badge}</span>
              </div>
              {/* Ring */}
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
                  <circle cx="24" cy="24" r="18" fill="none" stroke="var(--primary)" strokeWidth="3.5"
                    strokeDasharray={`${2 * Math.PI * 18 * item.weekly / 100} ${2 * Math.PI * 18}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-mono stat-num text-[var(--foreground)]">{item.weekly}%</span>
                </div>
              </div>
            </div>
            {/* Bars */}
            {[
              { label: 'SESSION', value: item.session, window: '5hr' },
              { label: 'WEEKLY',  value: item.weekly,  window: '7d'  },
            ].map((bar) => (
              <div key={bar.label} className="mb-2 last:mb-0">
                <div className="flex justify-between mb-1">
                  <span className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-widest">{bar.label}</span>
                  <span className="text-[9px] font-mono text-[var(--muted-foreground)]">{bar.window}</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--primary)]"
                    style={{ width: `${Math.max(bar.value, 0.8)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* Credits row */}
        <div className="flex items-center justify-between px-1 pt-1">
          <span className="text-[10px] font-mono text-[var(--muted-foreground)] tracking-widest">CREDITS</span>
          <span className="text-[10px] font-mono text-[var(--primary)] stat-num">$0.00 remaining</span>
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="relative min-h-screen grid-bg overflow-x-hidden">
      {/* Background atmosphere */}
      <div className="hero-glow fixed inset-0 pointer-events-none" />

      {/* ── Nav ── */}
      <header className="relative z-20 w-full">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 max-w-screen-2xl mx-auto">
          <motion.span {...up(0)} className="font-mono text-sm tracking-[0.25em] text-[var(--primary)] uppercase font-medium">
            Open Usage
          </motion.span>
          <motion.div {...up(0.05)} className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon size={15} />
              <span className="hidden sm:inline tracking-wider">GitHub</span>
            </a>
            <a
              href={DOWNLOAD_URL}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/8 text-[var(--primary)] text-xs font-mono tracking-wider hover:bg-[var(--primary)]/15 transition-all"
            >
              <Download size={12} strokeWidth={2.5} />
              Download
            </a>
          </motion.div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 w-full">
        <section className="w-full min-h-[calc(100vh-72px)] flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 max-w-screen-2xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div className="flex flex-col items-start">
              {/* Beta pill */}
              <motion.div {...up(0.08)} className="mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/6 text-[var(--primary)] text-xs font-mono tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] cursor-blink" />
                  Public Beta
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...up(0.15)}
                className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-[var(--foreground)] mb-6"
              >
                Know before
                <br />
                <span className="text-[var(--primary)]">you hit zero.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                {...up(0.25)}
                className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-lg font-mono"
              >
                Open Usage tracks your Claude and Codex subscription limits in real time —
                session windows, weekly caps, model breakdowns, all in one app.
              </motion.p>

              {/* CTA */}
              <motion.div {...up(0.35)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={DOWNLOAD_URL}
                  className="glow-btn relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-base tracking-wide hover:brightness-110 transition-all duration-200"
                >
                  <Download size={18} strokeWidth={2.5} />
                  Download for macOS
                  <span className="absolute -top-2.5 -right-2.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-[var(--background)] border border-[var(--primary)]/40 text-[var(--primary)] tracking-widest">
                    FREE
                  </span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors tracking-wider"
                >
                  <GithubIcon size={14} />
                  View source
                </a>
              </motion.div>

              <motion.p
                {...up(0.42)}
                className="mt-4 text-xs font-mono text-[var(--muted-foreground)]/60 tracking-wider"
              >
                macOS 13+ · Apple Silicon &amp; Intel · Free during beta
              </motion.p>
            </div>

            {/* Right — mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <AppMockup />
            </motion.div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/15 to-transparent" />

        {/* ── Features ── */}
        <section className="w-full py-24 px-6 sm:px-10 lg:px-16 max-w-screen-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.35em] text-[var(--muted-foreground)] uppercase mb-12 text-center lg:text-left"
          >
            What it tracks
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/20 hover:bg-[var(--card)]/80 transition-all duration-300"
              >
                <div className="mb-4 w-10 h-10 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)]/15 transition-colors">
                  <f.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-2 tracking-tight">{f.title}</h3>
                <p className="text-xs font-mono text-[var(--muted-foreground)] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-28 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full rounded-3xl border border-[var(--primary)]/12 bg-[var(--primary)]/4 overflow-hidden px-8 sm:px-16 py-16 text-center"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />

            <h2 className="relative text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
              Stop guessing your limits.
            </h2>
            <p className="relative text-sm font-mono text-[var(--muted-foreground)] mb-8 max-w-md mx-auto leading-relaxed">
              Free during the beta period. No account, no signup, no nonsense.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DOWNLOAD_URL}
                className="glow-btn flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-base tracking-wide hover:brightness-110 transition-all w-full sm:w-auto justify-center"
              >
                <Download size={18} strokeWidth={2.5} />
                Download for macOS
              </a>
              <span className="text-xs font-mono text-[var(--muted-foreground)]/50 tracking-widest">
                macOS 13+ · Free
              </span>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 w-full border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 py-8 max-w-screen-2xl mx-auto">
          <span className="text-xs font-mono text-[var(--muted-foreground)] tracking-widest uppercase">
            Open Usage · opentopenusage.com
          </span>
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon size={12} />
              <span>Source</span>
            </a>
            <span className="text-[var(--muted-foreground)]/30 text-xs">·</span>
            <span className="text-xs font-mono text-[var(--muted-foreground)]">Beta v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
