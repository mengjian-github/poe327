import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import './globals.css'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://poe327.net'
const siteDescription =
  'Keepers of the Flame launch hub packs release timers, starter planner, loot filters, trade macros, and live hotfix radar so poe 3.27 squads pivot fast.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'poe 3.27 Launch Hub – Timers, Builds & Trade | poe327',
  description: siteDescription,
  keywords: [
    'poe 3.27',
    'keepers of the flame',
    'path of exile build planner',
    'poe loot filter',
    'poe trade toolkit',
    'poe hotfix tracker',
  ],
  category: 'Gaming',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'poe league 3.27 Launch Toolkit | Keepers of the Flame HQ',
    description:
      'Countdown timers, Bloodline ascendancy guides, Genesis Tree prep, trade overlays, and hotfix radar for poe league 3.27 captains.',
    url: siteUrl,
    siteName: 'poe327',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'PoE 3.27 Keepers of the Flame Meta Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'poe league 3.27 Launch Toolkit',
    description: 'Top-click prep: release timers, builds, loot filters, trade intel, and live patch notes for Keepers squads.',
    images: [`${siteUrl}/og-image.svg`],
  },
}

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'poe league 3.27 Launch Toolkit',
  url: siteUrl,
  description: siteDescription,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'poe327.net',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.svg`,
    },
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
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(siteJsonLd)}
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
        <footer className="mt-32 border-t border-white/10 bg-gradient-to-b from-black/45 via-black/70 to-black/90 text-base text-white/70">
          <div className="container grid gap-16 py-16 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">About</span>
              <p className="max-w-lg text-lg leading-relaxed text-white/85">
                © {new Date().getFullYear()} poe327.net — an unofficial Keepers of the Flame launch companion. We collect timeline callouts,
                starter prep, and economy intel so poe league 3.27 squads can make fast decisions.
              </p>
              <p className="leading-relaxed text-white/70">
                Need something tailored for your roster? Email{' '}
                <a href="mailto:support@poe327.net" className="font-semibold underline hover:text-white">
                  support@poe327.net
                </a>{' '}
                with "poe league 3.27" in the subject line and we'll route it to the right desk.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">On-site guides</span>
                <ul className="space-y-4">
                  <li>
                    <Link href="/filters" className="text-white/75 transition hover:text-white">
                      Loot Filter Lab
                    </Link>
                  </li>
                  <li>
                    <Link href="/trade/awakened" className="text-white/75 transition hover:text-white">
                      Trade Toolkit
                    </Link>
                  </li>
                  <li>
                    <Link href="/betrayal-cheatsheet#canvas" className="text-white/75 transition hover:text-white">
                      Syndicate Cheat Sheet
                    </Link>
                  </li>
                  <li>
                    <Link href="/patch-notes" className="text-white/75 transition hover:text-white">
                      Patch Notes Library
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">Trusted resources</span>
                <ul className="space-y-4">
                  <li>
                    <a href="https://www.pathofexile.com/" target="_blank" rel="noreferrer" className="text-white/75 transition hover:text-white">
                      Path of Exile (official)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.poewiki.net/wiki/Path_of_Exile_Wiki"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/75 transition hover:text-white"
                    >
                      PoE Community Wiki
                    </a>
                  </li>
                  <li>
                    <a href="https://www.filterblade.xyz/" target="_blank" rel="noreferrer" className="text-white/75 transition hover:text-white">
                      FilterBlade Loot Filters
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/SnosMe/awakened-poe-trade"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/75 transition hover:text-white"
                    >
                      Awakened PoE Trade (GitHub)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">Stay connected</span>
              <p className="leading-relaxed text-white/70">
                Follow our daily resets, hotfix alerts, and build notes in the Keepers newsroom. Join the newsletter to keep poe league 3.27 updates
                in your inbox.
              </p>
              <a href="mailto:support@poe327.net?subject=poe%20league%203.27%20newsletter" className="inline-flex items-center gap-2 text-base font-bold text-brand transition hover:text-white">
                Request newsletter access
              </a>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="container flex flex-col gap-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <span>Made by players, for players. Keepers of the Flame forever.</span>
              <span>Stay kind to your party — log out safe.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
