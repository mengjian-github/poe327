import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'poe 3.27 Keepers of the Flame Launch HQ | poe327.net',
  description:
    'poe 3.27 launch prep with release timing, async trading notes, Genesis Tree planning, and atlas strategies built for Keepers of the Flame squads.',
  alternates: {
    canonical: 'https://poe327.net/',
  },
  openGraph: {
    title: 'poe 3.27 Keepers of the Flame Launch HQ',
    description:
      'Release timeline, Genesis Tree guides, Bloodline ascendancy prep, and async trading context for poe 3.27 Keepers of the Flame.',
    url: 'https://poe327.net',
    siteName: 'poe327',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'PoE 3.27 Keepers of the Flame Meta Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'poe 3.27 Keepers HQ',
    description: 'Keepers of the Flame launch prep with async trade, Genesis Tree, and Bloodline quick hits.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
        <footer className="mt-16 border-t border-white/5 bg-[color:var(--overlay)]/60">
          <div className="container flex flex-col gap-4 py-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} poe327.net — Unofficial Keepers of the Flame resource.</span>
            <span className="opacity-75">
              Need something extra? Email <a href="mailto:support@poe327.net" className="underline hover:text-white">support@poe327.net</a> for poe 3.27 feedback and collaboration.
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
