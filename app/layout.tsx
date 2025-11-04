import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import './globals.css'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'poe league 3.27 Keepers of the Flame Launch HQ | poe327.net',
  description:
    'poe league 3.27 launch hub covering release timing, async trading prep, Genesis Tree planning, Bloodline ascendancies, and live hotfix updates for squads.',
  alternates: {
    canonical: 'https://poe327.net/',
  },
  openGraph: {
    title: 'poe league 3.27 Keepers of the Flame Launch HQ',
    description:
      'Release timeline, Genesis Tree guides, Bloodline ascendancy prep, and async trading context for poe league 3.27 Keepers of the Flame.',
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
    title: 'poe league 3.27 Keepers HQ',
    description: 'Keepers of the Flame launch prep with async trade, Genesis Tree, Bloodline quick hits, and live hotfix coverage.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D8GENWGNMS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-D8GENWGNMS');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "tzbwxao7j5");`}
        </Script>
        <SiteHeader />
        <main>{children}</main>
        <footer className="mt-20 border-t border-white/10 bg-gradient-to-b from-black/45 via-black/70 to-black/90 text-sm text-white/70">
          <div className="container grid gap-12 py-12 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">About</span>
              <p className="max-w-lg leading-relaxed text-white/80">
                © {new Date().getFullYear()} poe327.net — an unofficial Keepers of the Flame launch companion. We collect timeline callouts,
                starter prep, and economy intel so poe league 3.27 squads can make fast decisions.
              </p>
              <p className="leading-relaxed text-white/60">
                Need something tailored for your roster? Email{' '}
                <a href="mailto:support@poe327.net" className="underline hover:text-white">
                  support@poe327.net
                </a>{' '}
                with “poe league 3.27” in the subject line and we’ll route it to the right desk.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">On-site guides</span>
                <ul className="space-y-3">
                  <li>
                    <Link href="/filters" className="transition hover:text-white">
                      Loot Filter Lab
                    </Link>
                  </li>
                  <li>
                    <Link href="/trade/awakened" className="transition hover:text-white">
                      Trade Toolkit
                    </Link>
                  </li>
                  <li>
                    <Link href="/betrayal-cheatsheet#canvas" className="transition hover:text-white">
                      Syndicate Cheat Sheet
                    </Link>
                  </li>
                  <li>
                    <Link href="/patch-notes" className="transition hover:text-white">
                      Patch Notes Library
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Trusted resources</span>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.pathofexile.com/" target="_blank" rel="noreferrer" className="transition hover:text-white">
                      Path of Exile (official)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.poewiki.net/wiki/Path_of_Exile_Wiki"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      PoE Community Wiki
                    </a>
                  </li>
                  <li>
                    <a href="https://www.filterblade.xyz/" target="_blank" rel="noreferrer" className="transition hover:text-white">
                      FilterBlade Loot Filters
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/SnosMe/awakened-poe-trade"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      Awakened PoE Trade (GitHub)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Stay connected</span>
              <p className="leading-relaxed text-white/60">
                Follow our daily resets, hotfix alerts, and build notes in the Keepers newsroom. Join the newsletter to keep poe league 3.27 updates
                in your inbox.
              </p>
              <a href="mailto:support@poe327.net?subject=poe%20league%203.27%20newsletter" className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-white">
                Request newsletter access
              </a>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="container flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <span>Made by players, for players. Keepers of the Flame forever.</span>
              <span>Stay kind to your party — log out safe.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
