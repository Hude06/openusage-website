import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Open Usage — AI Token Monitor',
  description: 'Real-time Claude and Codex usage tracking for macOS. Know your limits before you hit them.',
  openGraph: {
    title: 'Open Usage — AI Token Monitor',
    description: 'Real-time Claude and Codex usage tracking for macOS.',
    siteName: 'Open Usage',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${syne.variable} ${dmMono.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  )
}
