import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

const heroMetrics = [
  { label: 'Listing refresh', value: 'poe trade scans · every 25 seconds via saved filters' },
  { label: 'Negotiation macros', value: '6 poe trade whisper templates · crafted for 3.27 economy' },
  { label: 'Market watch', value: '12 poe trade alerts tracking chaos, divines, and scarabs' },
]

const searchPillars = [
  'Save fractured base presets inside poe trade so league-start scouting never stalls during map resets.',
  'Pair influence toggles with minimum roll brackets; poe trade highlights realistic upgrades instead of bait tiers.',
  'Bookmark bulk currency swaps in poe trade and label each with target ratio notes for your guild bank.',
]

const negotiationSignals = [
  {
    title: 'Listing Health Scan',
    description:
      'Open the seller profile directly from poe trade and check how many active listings sit within the same day. High churn often signals a flipper; offer 5% under the chaos floor and mention delivery speed.',
    footer: 'Trust scores from poe trade help decide whether to barter or pay full price.',
  },
  {
    title: 'Response Time Tracker',
    description:
      'Run a simple spreadsheet that logs whisper timestamps. If poe trade whispers go unanswered after 90 seconds, escalate to the second-best listing before your map portal closes.',
    footer: 'Hotkey a /whois macro to cross-check AFK flags instantly.',
  },
  {
    title: 'Bundle Magnet',
    description:
      'Stack related requests—like scarabs plus compasses—inside one poe trade whisper. Sellers often accept a package discount when they can clear multiple tabs in one delivery.',
    footer: 'Remind them you will trade at their hideout to minimise downtime.',
  },
]

const atlasSignals = [
  'Set poe trade live search alerts for divination cards feeding your atlas favorite; chain-run maps the moment price dips below your chaos ceiling.',
  'Mirror your atlas tree in a Notion doc and include poe trade links for every pinnacle drop you still need to unlock voidstones.',
  'Leverage poe trade bulk search to secure scarabs and map device fragments before weekend buyouts spike the graph.',
]

const faqItems = [
  {
    question: 'How many live searches should I run at once?',
    answer:
      'Keep three poe trade live searches active: your core build upgrade, a bulk currency dump, and a speculative flip. More tabs dilute refresh cadence and can soft-lock browser performance.',
  },
  {
    question: 'What is the smartest way to price crafted rares?',
    answer:
      'Price check comparable rares on poe trade, add a 7% premium if yours has unveiled implicits, and include screenshots in the listing to reduce clarification whispers.',
  },
  {
    question: 'Can I automate chaos ratio tracking?',
    answer:
      'Yes. Export poe trade ratios into a Google Sheet with IMPORTXML, then overlay conditional formatting so chaos-to-divine swings trigger alerts in under 60 seconds.',
  },
]

const resourceCards = [
  {
    title: 'Live Market Radar',
    description:
      'Embed three poe trade live searches—fractured bows, eldritch helmets, and awakened gems—directly into your browser start page so launch-week volatility stays visible.',
    footer: 'Refresh cadence: 10s for weapons · 30s for armour · 45s for currency.',
  },
  {
    title: 'Guild Trade Handbook',
    description:
      'Document guild standards for poe trade whispers, preferred payment currency, and collateral policies so newer members never jeopardise reputation.',
    footer: 'Store backups in shared drive and review every league start.',
  },
  {
    title: 'Security Toolkit',
    description:
      'Use session storage blockers, stash tab read-only toggles, and poe trade API keys rotating monthly to guard against macro exploits.',
    footer: 'Pair with two-factor authentication on your main account.',
  },
]

export const metadata: Metadata = {
  title: 'PoE Trade Market Playbook',
  description:
    'Step-by-step poe trade strategy hub covering live searches, negotiation signals, atlas planning, bulk swaps, and security protocols for the 3.27 economy.',
  alternates: {
    canonical: 'https://poe327.net/poe-trade',
  },
  openGraph: {
    title: 'PoE Trade Market Playbook',
    description:
      'Optimize poe trade workflows with tuned filters, negotiation macros, atlas-linked alerts, and security safeguards built for Keepers of the Flame.',
    url: 'https://poe327.net/poe-trade',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-async.jpg',
        width: 1200,
        height: 630,
        alt: 'Exiles trading in a bustling hideout with currency stacks on display',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE Trade Market Playbook',
    description:
      'Master poe trade live searches, whisper templates, and bulk swap tactics for the Keepers of the Flame league.',
    images: ['/images/keepers-async.jpg'],
  },
}

export default function PoeTradePage() {
  return (
    <>
      <PageHero
        title="PoE Trade Market Playbook"
        description="This poe trade blueprint lines up filter presets, negotiation workflows, and atlas-aligned shopping lists so your 3.27 grind stays funded without wasting portal cycles."
        image="/images/keepers-async.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — sourced from live poe trade listings, community macro sheets, and league economy trackers" />
      </div>

      <Section
        id="search"
        title="Faster Search Fundamentals"
        desc="Anchor your poe trade workflow with reusable filter groups, curated watchlists, and a refresh cadence that keeps pace with the 3.27 volatility spikes."
        kicker="poe trade setup"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Start every session by reviewing your starred poe trade filters. Sort them by upgrade urgency, then open the most vital search in a dedicated browser window.
              This locking mechanism prevents stray scrolls from resetting the form mid-fight. Keep the live search dashboard on a second monitor so poe trade alerts fire
              even while you roll maps.
            </p>
            <p>
              When crafting, duplicate any poe trade search before you tweak minimum rolls. That clone acts as a control, letting you compare real market ranges to your
              bench crafted outcomes. It also keeps poe trade notifications aligned with realistic price points instead of dream stats that never drop.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {searchPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/genesis-tree.jpg"
              alt="Marketplace monitor showing layered poe trade filters"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="negotiation"
        title="Negotiation Signals"
        desc="Blend poe trade trust scores with whisper automation so every purchase stays fast, safe, and fairly priced."
        kicker="poe trade execution"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {negotiationSignals.map((card) => (
            <Card key={card.title} title={card.title} footer={card.footer}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="atlas"
        title="Atlas & Supply Sync"
        desc="Translate atlas goals into poe trade automation so map sustain and pinnacle unlocks never fall behind."
        kicker="poe trade planning"
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-encounter.jpg"
              alt="Atlas tree overlay paired with poe trade live searches"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
          <div className="space-y-4 text-white/80">
            <p>
              Sync your atlas objectives with staged poe trade purchases. Lock scarab bundles the night before a farming session so your stash tabs are prepped when party
              members log in. Cross-reference Sextant rotations with poe trade bulk listings and schedule reminders three hours before planned map marathons.
            </p>
            <p>
              Track price swings in a shared spreadsheet with conditionally formatted cells that pull from poe trade exports. Color shifts warn you when divination cards or
              Guardian fragments break out of their usual bands, letting your team pivot before the weekend rush catches up.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {atlasSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="faq"
        title="Operations FAQ"
        desc="Practical answers for the most common poe trade workflow blockers during Keepers of the Flame."
        kicker="poe trade support"
        className="pb-16"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {faqItems.map((item) => (
            <Card key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {resourceCards.map((item) => (
            <Card key={item.title} title={item.title} footer={item.footer}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
