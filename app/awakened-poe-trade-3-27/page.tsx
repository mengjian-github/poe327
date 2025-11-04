import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

// Page rewrite: beginner‑oriented layout and copy. Keep the exact phrase
// "Awakened PoE Trade 3.27" visible throughout to reach a 3–5% keyword density
// without hurting readability.

const heroMetrics = [
  { label: 'Setup time', value: '5–8 minutes · beginner friendly' },
  { label: 'Keybinds', value: 'Price check · Bulk sell · Whisper copier' },
  { label: 'Platforms', value: 'Windows (native) · Linux (Wine)' },
]

const quickStart = [
  'Install Awakened PoE Trade 3.27, then launch Path of Exile in windowed fullscreen.',
  'Run the first‑time wizard in Awakened PoE Trade 3.27 to calibrate OCR and pick your hotkeys.',
  'Hover an item and press your price‑check key to open the overlay.',
  'Copy the best whisper with Awakened PoE Trade 3.27 and paste it in‑game to contact the seller.',
  'Enable bulk selling, scan a stash tab, and post the generated listings.',
]

const mustKnowShortcuts = [
  { combo: 'Ctrl + D', tip: 'Instant price check overlay via Awakened PoE Trade 3.27.' },
  { combo: 'Alt + W', tip: 'Copy best‑match whisper from Awakened PoE Trade 3.27.' },
  { combo: 'Alt + S', tip: 'Bulk sell: scan current stash tab and build listings.' },
  { combo: 'Ctrl + C', tip: 'Copy item text first if the overlay needs a re‑scan.' },
]

const troubleshooting = [
  'Overlay offset: set Windows display scale to 100% and rerun the calibration in Awakened PoE Trade 3.27.',
  'No whispers copied: close PoE, restart Awakened PoE Trade 3.27 as Administrator, then try again.',
  'OCR misreads: switch to a brighter hideout, increase contrast, and repeat the capture.',
]

export const metadata: Metadata = {
  title: 'Awakened PoE Trade 3.27 — Download, Setup & Beginner Guide',
  description:
    "Beginner-friendly Awakened PoE Trade 3.27 guide. Download, install, price check, bulk sell, and trade faster in PoE 3.27 with safe overlays and clear steps.",
  alternates: { canonical: '/awakened-poe-trade-3-27' },
  openGraph: {
    title: 'Awakened PoE Trade 3.27 — Download & Setup',
    description:
      "Install Awakened PoE Trade 3.27 in minutes with step-by-step setup, keybinds, screenshots, bulk selling, and quick troubleshooting for PoE 3.27.",
    url: '/awakened-poe-trade-3-27',
    images: [
      { url: '/images/poe327-hero.webp', width: 1200, height: 630, alt: 'Awakened PoE Trade overlay demo' },
    ],
    type: 'article',
  },
}

export default function Page() {
  return (
    <main>
      <PageHero
        title="Awakened PoE Trade 3.27 — Beginner Guide & Download"
        description="Everything you need to start trading faster: download Awakened PoE Trade 3.27, calibrate in minutes, learn the price‑check flow, and post bulk listings with clean whispers."
        image="/images/poe327-hero.webp"
        kicker="Trading Tools"
        metrics={heroMetrics}
        actions={
          <div className="flex gap-3">
            <a
              href="https://github.com/SnosMe/awakened-poe-trade/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download
            </a>
            <a href="#quick-start" className="btn btn-ghost">Quick Start</a>
          </div>
        }
      />
      <div className="container">
        <LastUpdated date="Nov 2025" />
      </div>

      <Section
        id="intro"
        title="What Is Awakened PoE Trade 3.27?"
        desc="A lightweight overlay that helps you evaluate items, find fair prices, and send ready‑to‑go whispers without leaving the game. New players benefit most from consistent, fast price checks."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Price Check Overlay">
            <p>
              Hover an item and press your hotkey. Awakened PoE Trade 3.27 opens a compact panel with live results and a
              suggested whisper. No browser juggling required.
            </p>
          </Card>
          <Card title="Bulk Selling">
            <p>
              Scan a stash tab and generate listings in one pass. Awakened PoE Trade 3.27 speeds up currency and fragment
              sales while keeping your pricing consistent.
            </p>
          </Card>
          <Card title="Clean Whispers">
            <p>
              Copy a single best message and paste it in game. Awakened PoE Trade 3.27 reduces typos and saves seconds on
              every trade during peak hours.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="download"
        title="Download & Install"
        desc="Use the official release of Awakened PoE Trade 3.27, keep Windows scaling at 100%, and complete the first‑launch wizard."
        actions={<a href="#quick-start" className="btn btn-primary">Skip to Quick Start</a>}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Official Release">
            <p>
              Get Awakened PoE Trade 3.27 from the official GitHub releases page. Choose the latest Windows installer or
              portable zip.
            </p>
            <a
              className="text-brand underline"
              href="https://github.com/SnosMe/awakened-poe-trade/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases →
            </a>
          </Card>
          <Card title="Linux (Wine)">
            <p>
              Many players use Wine to run Awakened PoE Trade 3.27 on Linux. Set PoE to windowed fullscreen and standard
              DPI, then map your hotkeys.
            </p>
          </Card>
          <Card title="Keep It Updated">
            <p>
              League start brings frequent patches. Restart Awakened PoE Trade 3.27 daily; Awakened PoE Trade 3.27 picks
              up fixes early when you follow GitHub releases.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="quick-start" title="Quick Start" desc="From install to your first successful whisper with Awakened PoE Trade 3.27.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="2‑Minute Setup">
            <ol className="list-decimal pl-4 space-y-2 text-sm text-white/80">
              {quickStart.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </Card>
          <Card title="Overlay Preview">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
              <Image src="/images/screenshots/trade-results.png" alt="Overlay preview" fill className="object-cover" />
            </div>
          </Card>
        </div>
      </Section>

      <Section id="shortcuts" title="Must‑Know Shortcuts" desc="Default mappings you can customize in settings.">
        <div className="grid gap-4 md:grid-cols-4">
          {mustKnowShortcuts.map(({ combo, tip }) => (
            <Card key={combo}>
              <p>
                <strong>{combo}</strong> — {tip}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="how-to" title="Price Check Basics" desc="A simple loop that works for almost every item using Awakened PoE Trade 3.27.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Scan & Filter">
            <p>
              Press your price‑check key. Awakened PoE Trade 3.27 builds a sensible search and highlights outliers so you
              avoid bait listings.
            </p>
          </Card>
          <Card title="Pick A Target">
            <p>
              Choose the mid‑range result when demand is steady. For fast sales, undercut slightly. Awakened PoE Trade 3.27
              shows recent sales to guide your decision.
            </p>
          </Card>
          <Card title="Send The Whisper">
            <p>
              Copy the best message from Awakened PoE Trade 3.27 and paste it in game. If no answer in 60–90 seconds, try
              the next one.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="bulk" title="Bulk Selling" desc="Turn a tab into listings with a single scan in Awakened PoE Trade 3.27.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Stash Scan">
            <p>
              Open a premium tab and run a scan. Awakened PoE Trade 3.27 groups currencies, fragments, and maps, then
              suggests prices you can post immediately.
            </p>
          </Card>
          <Card title="Listing Hygiene">
            <p>
              Keep names short and prices round. If an item sits for 10+ minutes, re‑scan with Awakened PoE Trade 3.27 and
              drop 5–8% to move stock.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting" desc="Fix common overlay and OCR issues in seconds.">
        <div className="grid gap-4 md:grid-cols-3">
          {troubleshooting.map((t) => (
            <Card key={t}>
              <p>{t}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" title="FAQ" desc="Quick answers for new users">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Is it allowed?">
            <p>
              Awakened PoE Trade 3.27 reads the screen and formats whispers. Avoid automated clicks and you remain
              policy‑compliant.
            </p>
          </Card>
          <Card title="Can I share my config?">
            <p>
              Yes. Export your layout JSON and share it with friends or guildmates. Import in Awakened PoE Trade 3.27 to
              mirror the same hotkeys and panels.
            </p>
          </Card>
          <Card title="Best settings for speed?">
            <p>
              Use windowed fullscreen at 1080p–1440p, disable GPU scaling, and keep display scale at 100% so Awakened PoE
              Trade 3.27 captures cleanly.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="new-players" title="For New Players" desc="Simple habits that make trading with Awakened PoE Trade 3.27 feel natural.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="One Key, One Action">
            <p>
              Map a single price‑check key and stick with it. Muscle memory makes Awakened PoE Trade 3.27 effortless in
              maps and boss rooms.
            </p>
          </Card>
          <Card title="Short, Polite Messages">
            <p>
              Use the default whisper from Awakened PoE Trade 3.27 and avoid long intros. Sellers respond faster when the
              ask is clear.
            </p>
          </Card>
          <Card title="Review Before You Paste">
            <p>
              Glance at price, quantity, and league. Awakened PoE Trade 3.27 highlights the key bits so you don’t spam the
              wrong listing.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="safety" title="Safety & Privacy" desc="Staying compliant while using Awakened PoE Trade 3.27">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Input Safety">
            <p>
              Keep auto‑clickers off. Awakened PoE Trade 3.27 focuses on reading and formatting; you control every action.
            </p>
          </Card>
          <Card title="Data Privacy">
            <p>
              Trade searches go to public endpoints. Awakened PoE Trade 3.27 does not need your account password for core
              features.
            </p>
          </Card>
          <Card title="Updates & Trust">
            <p>
              Install from official releases only. Verifying signatures before running Awakened PoE Trade 3.27 keeps your
              system safe.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  )
}
