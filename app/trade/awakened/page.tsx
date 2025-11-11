import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

const heroMetrics = [
  { label: 'Install time', value: 'Awakened PoE Trade 3.27 install · 6 minutes · zero scripts' },
  { label: 'Keybinds', value: 'Awakened PoE Trade 3.27 keybinds · Price check · Overlay · Hideout' },
  { label: 'Sources', value: '3 community video guides for Awakened PoE Trade 3.27' },
]

const installSteps = [
  {
    name: 'Grab the installer',
    text: 'Download the newest Windows installer or portable zip from the official Awakened PoE Trade 3.27 GitHub releases page.',
  },
  {
    name: 'Launch Path of Exile',
    text: 'Run PoE in windowed fullscreen with Windows display scale at 100% before starting Awakened PoE Trade 3.27.',
  },
  {
    name: 'Run the setup wizard',
    text: 'On first launch the wizard calibrates OCR, asks for your preferred price check key, and confirms screen bounds.',
  },
  {
    name: 'Verify permissions',
    text: 'If whispers do not copy, restart Awakened PoE Trade 3.27 as Administrator so clipboard hooks work reliably.',
  },
]

const howToSteps = [
  {
    name: 'Download & install',
    text: 'Install Awakened PoE Trade 3.27, then launch Path of Exile in windowed fullscreen.',
  },
  {
    name: 'Run the setup wizard',
    text: 'Use the first‑time wizard in Awakened PoE Trade 3.27 to calibrate OCR and choose hotkeys.',
  },
  {
    name: 'Price check faster',
    text: 'Hover an item, press your price‑check key, and review the Awakened PoE Trade 3.27 overlay.',
  },
  {
    name: 'Send clean whispers',
    text: 'Copy the best whisper from Awakened PoE Trade 3.27 and paste it in‑game to contact sellers.',
  },
  {
    name: 'Enable bulk selling',
    text: 'Turn on bulk selling, scan a stash tab, and post the generated listings with Awakened PoE Trade 3.27.',
  },
]

const quickStart = howToSteps.map(({ text }) => text)

const beginnerWins = [
  {
    title: 'Day-one checklist',
    body:
      'Awakened PoE Trade 3.27 walks you through screenshot calibration so your very first price check lands within realistic Chaos ranges.',
  },
  {
    title: 'Know the value fast',
    body:
      'Keep the overlay pinned while mapping; Awakened PoE Trade 3.27 highlights currency ratios so you instantly know if a drop funds your next upgrade.',
  },
  {
    title: 'Organize the stash',
    body:
      'Turn on the stash scanner and Awakened PoE Trade 3.27 groups tabs into sell-ready piles, which keeps fresh exiles from drowning in loot.',
  },
  {
    title: 'Copy clean whispers',
    body:
      'Use the whisper cleaner inside Awakened PoE Trade 3.27 to send polite, copy-paste messages without ever memorizing trade macros.',
  },
  {
    title: 'Safe practice loop',
    body:
      'Practice on low-cost rares until Awakened PoE Trade 3.27 consistently matches the listings you see on the official trade site, then move to pricey uniques.',
  },
]

const hotkeys = [
  {
    feature: 'Price check overlay',
    combo: 'Ctrl + D',
    detail: 'Hover an item and press Ctrl + D in Awakened PoE Trade 3.27 to fetch live listings without alt‑tabbing. Works on rares, uniques, currency, and maps.',
    source: 'Video 1 – 00:00:18',
  },
  {
    feature: 'Overlay toggle',
    combo: 'Shift + Space',
    detail: 'Open the Awakened PoE Trade 3.27 helper overlay for cheat sheets, dump sorting, and quick tools.',
    source: 'Video 2 – 00:04:50',
  },
  {
    feature: 'Map mod check',
    combo: 'Ctrl + W (customizable)',
    detail: 'Highlight deadly map modifiers with icons you configure inside Awakened PoE Trade 3.27 (skull, warning, safe).',
    source: 'Video 1 – 00:01:21',
  },
  {
    feature: 'Hideout recall',
    combo: 'F5',
    detail: 'Instantly return to your hideout through Awakened PoE Trade 3.27 when mapping or in town.',
    source: 'Video 3 – 00:02:02',
  },
]

const settingTips = [
  'Select the correct current league (not Standard or Hardcore) inside Awakened PoE Trade 3.27 before pricing so listings match your economy.',
  'Set Fill stat values to Exact value inside Awakened PoE Trade 3.27 to avoid 10% stat ranges that undervalue perfect rolls.',
  'Leave the Chaos ↔ Divine toggle in Awakened PoE Trade 3.27 on the currency you list with most; the opposite value updates automatically.',
  'Enable bright lighting or move to a well-lit hideout before calibrating so Awakened PoE Trade 3.27 OCR reads contrasty backgrounds.',
]

const priceFlow = [
  {
    title: 'Basic price check',
    body: 'Hover the item, press Ctrl + D, let the Awakened PoE Trade 3.27 overlay surface the median price at the top, then scan the listings list for realistic buyouts instead of trusting extremes.',
  },
  {
    title: 'Refining rare or unique items',
    body: 'Tick only the premium affixes (life, resists, damage tiers, corruptions) and hit Search after each selection so Awakened PoE Trade 3.27 filters down to the closest comps, revealing when a ten chaos base is secretly worth multiple Divines.',
  },
  {
    title: 'Currency and Divine ratios',
    body: 'Use Ctrl + D on any currency stack to see both Chaos and Divine values generated by Awakened PoE Trade 3.27. The numeric badge (e.g., 115) equals 1 Divine in Chaos; click it to open the mini converter for odd quantities like 0.4 Divine.',
  },
]

const advancedFeatures = [
  {
    title: 'Overlay cheat sheets',
    detail:
      'Shift + Space opens Awakened PoE Trade 3.27 reference cards for Immortal Syndicate, Temple of Atzoatl, Delve biomes, and more so you can keep farming while checking rewards.',
  },
  {
    title: 'Dump sorting',
    detail:
      'Within the overlay, run stash searches through Awakened PoE Trade 3.27 that isolate currency, divination cards, or bases in a non-currency tab—perfect when clearing league-start loot explosions.',
  },
  {
    title: 'Delve grid helper',
    detail:
      'Ctrl + G in the Delve map uses Awakened PoE Trade 3.27 to draw a lightweight 3×3 grid that points toward hidden side rooms and fractured walls.',
  },
  {
    title: 'Chat macros',
    detail:
      'Bind F-keys to prewritten invites, thank-yous, hideout requests, and /kick commands through Awakened PoE Trade 3.27 so every trade reply lands in one tap.',
  },
]

const troubleshooting = [
  'Overlay offset: set Windows display scale to 100%, then rerun the capture wizard so Awakened PoE Trade 3.27 re-detects the PoE client.',
  'No whispers copied: close Path of Exile, restart Awakened PoE Trade 3.27 as Administrator, and test again on a basic item.',
  'OCR misreads: switch to a brighter hideout background, disable dynamic contrast in your GPU driver, and rerun calibration inside Awakened PoE Trade 3.27.',
]

const videos = [
  {
    id: 'Vf4unpUU25I',
    title: 'Full install & overlay tour',
    duration: '12:37',
    summary: 'Covers the initial Awakened PoE Trade 3.27 GitHub download, Windows installer prompts, and showcasing the Shift + Space overlay tools.',
  },
  {
    id: '2sGfpPJaQAc',
    title: 'Map mods & stash workflows',
    duration: '09:41',
    summary: 'Demonstrates map mod filtering, dump sorting, and rare item price refinement using exact Awakened PoE Trade 3.27 stat filters.',
  },
  {
    id: 'dkF23lEy2as',
    title: 'Currency ratios & chat macros',
    duration: '08:55',
    summary: 'Explains Chaos ↔ Divine conversions, bulk selling, and setting up fast Awakened PoE Trade 3.27 whisper/chat macro keys.',
  },
]

const screenshots = [
  {
    src: '/images/screenshots/trade-results.png',
    alt: 'Awakened PoE Trade 3.27 price check overlay with search results',
    caption: 'Awakened PoE Trade 3.27 overlay showing Chaos and Divine values for a helmet with highlighted affixes.',
  },
  {
    src: '/images/screenshots/poe-trade-ingame.png',
    alt: 'In-game trade window with Awakened PoE Trade 3.27 panel',
    caption: 'Awakened PoE Trade 3.27 price panel pinned beside Path of Exile so you never leave fullscreen.',
  },
  {
    src: '/images/screenshots/poe-trade-listing-exact-price.jpg',
    alt: 'Awakened PoE Trade 3.27 exact price listing comparison',
    caption: 'Exact value filtering in Awakened PoE Trade 3.27 narrows comparable listings to serious buyers.',
  },
  {
    src: '/images/screenshots/poe-trade-premium-tab.jpg',
    alt: 'Awakened PoE Trade 3.27 bulk listing from a premium tab',
    caption: 'Awakened PoE Trade 3.27 bulk selling scan building consistent prices from a currency tab.',
  },
]

const faqItems = [
  {
    question: 'Is Awakened PoE Trade 3.27 allowed?',
    answer:
      'Awakened PoE Trade 3.27 reads item text from your screen and formats whispers. Avoid auto-clickers and you remain within Grinding Gear Games policy.',
  },
  {
    question: 'Which leagues are supported?',
    answer:
      'All live trade leagues work if you select the matching league in the Awakened PoE Trade 3.27 price check window. Standard, Hardcore, SSF, and temporary challenge leagues are available.',
  },
  {
    question: 'Best settings for speed?',
    answer:
      'Use windowed fullscreen at 1080p–1440p, disable GPU scaling, and keep display scale at 100% so Awakened PoE Trade 3.27 captures cleanly.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://poe327.net/' },
        { '@type': 'ListItem', position: 2, name: 'Awakened Trade', item: 'https://poe327.net/trade/awakened' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'Set up Awakened PoE Trade 3.27',
      description: '5‑minute setup checklist: install, calibrate OCR, map hotkeys, copy whispers, and enable bulk selling.',
      totalTime: 'PT8M',
      supply: [{ '@type': 'HowToSupply', name: 'Path of Exile account' }],
      tool: [{ '@type': 'HowToTool', name: 'Awakened PoE Trade 3.27 overlay' }],
      step: howToSteps.map(({ name, text }, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name,
        text,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
} as const

export const metadata: Metadata = {
  title: 'Awakened PoE Trade 3.27 Download — Safe Overlay & 5‑Min Setup',
  description:
    'Grab the official Awakened PoE Trade 3.27 overlay, follow the 5‑minute install, learn price checks, bulk selling, troubleshooting, and FAQs for PoE 3.27.',
  keywords: ['Awakened PoE Trade 3.27', 'awakened trade download', 'poe trade overlay'],
  alternates: { canonical: 'https://poe327.net/trade/awakened' },
  openGraph: {
    title: 'Awakened PoE Trade 3.27 Download — Safe Overlay & Shortcuts',
    description:
      'Download Awakened PoE Trade 3.27, calibrate OCR, master keybinds, bulk sell, and fix issues with beginner‑friendly steps.',
    url: 'https://poe327.net/trade/awakened',
    images: [
      { url: '/images/poe327-hero.webp', width: 1200, height: 630, alt: 'Awakened PoE Trade overlay demo' },
    ],
    type: 'article',
  },
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        title="Awakened PoE Trade 3.27 — Beginner Guide & Download"
        description="Follow a friendly checklist to install Awakened PoE Trade 3.27, lock in hotkeys, learn precise price checks, and watch three curated video tutorials without leaving this page."
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
            <a href="#install" className="btn btn-ghost">Installation</a>
          </div>
        }
      />
      <div className="container">
        <LastUpdated date="Nov 2025" />
      </div>

      <Section
        id="overview"
        title="Why Awakened PoE Trade 3.27?"
        desc="Awakened PoE Trade 3.27 is a lightweight overlay that price checks in place, formats whispers, bulk lists stash tabs, and keeps helpful cheat sheets a single hotkey away."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Instant valuations">
            <p>
              Press Ctrl + D inside Awakened PoE Trade 3.27 on any hovered item to open the overlay with live listings, currency conversions, and a copy-ready whisper.
            </p>
          </Card>
          <Card title="Beginner-friendly wizard">
            <p>
              The first-run wizard in Awakened PoE Trade 3.27 walks you through OCR calibration, display scaling checks, and hotkey mapping so every capture is pixel-perfect.
            </p>
          </Card>
          <Card title="Tools for every system">
            <p>
              Works natively on Windows and runs smoothly through Wine on Linux. Keep the display scale at 100% for the cleanest Awakened PoE Trade 3.27 scans.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="beginner"
        title="New Player Roadmap"
        desc="Ease into trading with friendly checkpoints so Awakened PoE Trade 3.27 never feels overwhelming."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {beginnerWins.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="install"
        title="Installation Checklist"
        desc="Use the official GitHub release, prep your game client, then follow the first-time wizard in Awakened PoE Trade 3.27 before jumping into price checks."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="4 essential steps">
            <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
              {installSteps.map(({ name, text }) => (
                <li key={name}>
                  <p className="font-semibold text-white">{name}</p>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <a
              className="text-brand underline"
              href="https://github.com/SnosMe/awakened-poe-trade/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases →
            </a>
          </Card>
          <Card title="Quick start recap">
            <ol className="list-decimal space-y-2 pl-5 text-sm text-white/80">
              {quickStart.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <Section
        id="hotkeys"
        title="Core Hotkeys & Settings"
        desc="Memorize these default mappings and tweak two settings to keep every Awakened PoE Trade 3.27 scan accurate."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="text-white">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Default</th>
                  <th className="px-4 py-3">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {hotkeys.map(({ feature, combo, detail, source }) => (
                  <tr key={feature} className="border-t border-white/5">
                    <td className="px-4 py-3 font-semibold text-white">{feature}</td>
                    <td className="px-4 py-3 text-white/70">{combo}</td>
                    <td className="px-4 py-3">
                      {detail}
                      <span className="block text-xs text-white/50">{source}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card title="Before your first price check">
            <ul className="space-y-3 text-sm text-white/80">
              {settingTips.map((tip) => (
                <li key={tip} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="price-check"
        title="Price Check Workflow"
        desc="Use one loop for the scan, tighten filters for rares and uniques, then leverage the Awakened PoE Trade 3.27 currency converter for quick Chaos ↔ Divine math."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {priceFlow.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="advanced-tools"
        title="Overlay Helpers & Quality-of-Life Extras"
        desc="Shift + Space inside Awakened PoE Trade 3.27 opens an ever-growing toolbox. These four panels are the biggest time-savers for new traders."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {advancedFeatures.map(({ title, detail }) => (
            <Card key={title} title={title}>
              <p>{detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="videos"
        title="Video Lessons"
        desc="Watch the most useful Awakened PoE Trade 3.27 tutorials right here, complete with timestamps cited in this guide."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </Section>

      <Section
        id="gallery"
        title="Screenshot Walkthrough"
        desc="See what each Awakened PoE Trade 3.27 panel looks like before you boot the overlay."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {screenshots.map(({ src, alt, caption }) => (
            <Card key={src} title={caption}>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting" desc="Fix common Awakened PoE Trade 3.27 overlay and OCR issues in seconds.">
        <div className="grid gap-4 md:grid-cols-3">
          {troubleshooting.map((t) => (
            <Card key={t}>
              <p>{t}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" title="FAQ" desc="Quick Awakened PoE Trade 3.27 answers for new users">
        <div className="grid gap-4 md:grid-cols-3">
          {faqItems.map(({ question, answer }) => (
            <Card key={question} title={question}>
              <p>{answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  )
}

function VideoCard({
  id,
  title,
  summary,
  duration,
}: {
  id: string
  title: string
  summary: string
  duration: string
}) {
  return (
    <Card title={title} footer={`Duration: ${duration}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10" data-video>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <p>{summary}</p>
    </Card>
  )
}
