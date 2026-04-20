import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono, Doto } from 'next/font/google'
import './globals.css'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

const display = Doto({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opentokenusage.com'),
  title: 'Open Usage — AI Token Monitor',
  description: 'Real-time Claude and Codex usage tracking for macOS. Know your limits before you hit them.',
  openGraph: {
    title: 'Open Usage — AI Token Monitor',
    description: 'Real-time Claude and Codex usage tracking for macOS.',
    siteName: 'Open Usage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Usage — AI Token Monitor',
    description: 'Real-time Claude and Codex usage tracking for macOS.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${grotesk.variable} ${mono.variable} ${display.variable} noise min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
