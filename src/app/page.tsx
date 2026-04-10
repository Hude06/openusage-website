'use client'

import { motion } from 'framer-motion'
import { Download, Activity, Clock, Layers, Zap } from 'lucide-react'

const GITHUB_URL = 'https://github.com/Hude06/openusage-app'
// Update this URL once a release is published
const DOWNLOAD_URL = 'https://github.com/Hude06/openusage-app/releases/latest/download/OpenUsage.dmg'

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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

export default function Home() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* Radial top glow */}
      <div className="radial-glow absolute inset-0 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full">
        <motion.div {...fadeUp(0)} className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.2em] text-[var(--primary)] uppercase">
            Open Usage
          </span>
        </motion.div>
        <motion.a
          {...fadeUp(0.05)}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono tracking-wider text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-32 max-w-4xl mx-auto">

        {/* Beta badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 text-[var(--primary)] text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] cursor-blink" />
            Beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--foreground)] mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Know before
          <br />
          <span className="text-[var(--primary)]">you hit zero.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed mb-12 font-mono"
        >
          Open Usage tracks your Claude and Codex subscription limits in real time.
          Session windows, weekly caps, model breakdowns — all in one place.
        </motion.p>

        {/* Download CTA */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col items-center gap-4">
          <a
            href={DOWNLOAD_URL}
            className="glow-btn group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-base tracking-wide hover:brightness-110 transition-all duration-200"
          >
            <Download size={18} strokeWidth={2.5} />
            Download for macOS
            <span className="absolute -top-2.5 -right-2.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--background)] border border-[var(--primary)]/40 text-[var(--primary)] tracking-widest">
              FREE
            </span>
          </a>
          <p className="text-xs font-mono text-[var(--muted-foreground)] tracking-wider">
            macOS 13+ · Apple Silicon &amp; Intel · Free during beta
          </p>
        </motion.div>

        {/* App preview mockup */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-20 w-full max-w-md mx-auto"
        >
          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-px overflow-hidden">
            {/* Glow edge */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--primary)]/10 to-transparent pointer-events-none" />
            <div className="rounded-2xl overflow-hidden bg-[#0a0a0c] p-5">
              {/* Titlebar */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] font-mono text-[var(--muted-foreground)] tracking-widest uppercase">OPEN USAGE</span>
              </div>

              {/* Mock usage rings */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'CLAUDE', badge: 'MAX', session: 1, weekly: 8, sessionLabel: '5hr', weeklyLabel: '7d' },
                  { label: 'CODEX', badge: 'PRO', session: 0, weekly: 0, sessionLabel: '5hr', weeklyLabel: '7d' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0e0e11] rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono font-medium text-[var(--foreground)] tracking-wider">{item.label}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[var(--muted-foreground)] border border-white/[0.06]">{item.badge}</span>
                    </div>
                    {/* Ring mockup */}
                    <div className="flex justify-center mb-3">
                      <div className="relative w-14 h-14">
                        <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                          <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                          <circle cx="28" cy="28" r="22" fill="none" stroke="var(--primary)" strokeWidth="4"
                            strokeDasharray={`${2 * Math.PI * 22 * item.weekly / 100} ${2 * Math.PI * 22 * (1 - item.weekly / 100)}`}
                            strokeLinecap="round" className="transition-all duration-700" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[10px] font-mono text-[var(--foreground)] font-medium">{item.weekly}%</span>
                        </div>
                      </div>
                    </div>
                    {/* Bars */}
                    {[
                      { label: 'SESSION', value: item.session, window: item.sessionLabel },
                      { label: 'WEEKLY', value: item.weekly, window: item.weeklyLabel },
                    ].map((bar) => (
                      <div key={bar.label} className="mb-2 last:mb-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[8px] font-mono text-[var(--muted-foreground)] tracking-widest">{bar.label}</span>
                          <span className="text-[8px] font-mono text-[var(--muted-foreground)]">{bar.window}</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[var(--primary)] transition-all duration-700"
                            style={{ width: `${Math.max(bar.value, 0.5)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Features */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[var(--muted-foreground)] uppercase">What it tracks</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="group relative p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/20 transition-colors duration-300"
            >
              <div className="mb-3 w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                <f.icon size={15} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1.5 tracking-tight">{f.title}</h3>
              <p className="text-xs font-mono text-[var(--muted-foreground)] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="relative z-10 px-6 pb-24 max-w-2xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="p-8 rounded-2xl border border-[var(--primary)]/15 bg-[var(--primary)]/5"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
            Stop guessing your limits.
          </h2>
          <p className="text-sm font-mono text-[var(--muted-foreground)] mb-6">
            Free during the beta period. No account required.
          </p>
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-sm tracking-wide hover:brightness-110 transition-all"
          >
            <Download size={15} strokeWidth={2.5} />
            Download for macOS
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--border)] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[var(--muted-foreground)] tracking-widest uppercase">
            Open Usage · opentopenusage.com
          </span>
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source
            </a>
            <span className="text-xs font-mono text-[var(--muted-foreground)]/40">·</span>
            <span className="text-xs font-mono text-[var(--muted-foreground)]">Beta v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
