import type { Metadata } from 'next'
import Image from 'next/image'

import { Card, LastUpdated, Section } from '@/components/ui'

// Beginner-friendly, image-led tutorial layout, distinct from the homepage hero.

export const metadata: Metadata = {
  title: 'PoE Trade Beginner Tutorial (3.27)',
  description:
    'Beginner-friendly poe trade guide: open the official site, set filters, enable Live Search, whisper sellers, and list items in bulk to trade faster and safer.',
  alternates: { canonical: 'https://poe327.net/trade/official' },
  openGraph: {
    title: 'PoE Trade Beginner Tutorial (3.27)',
    description:
      'Master poe trade in six steps: search, save, live alerts, whisper, bulk listing, and safety tips—optimized for new players.',
    url: 'https://poe327.net/trade/official',
    siteName: 'poe327',
    type: 'article',
    images: [{ url: '/images/keepers-async.jpg', width: 1200, height: 630, alt: 'poe trade tutorial cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE Trade Beginner Tutorial (3.27)',
    description: 'Learn poe trade with a practical, step-by-step guide for new players.',
    images: ['/images/keepers-async.jpg'],
  },
}

const steps = [
  {
    id: 'step-1',
    title: 'Open the official poe trade and set the basics',
    body: (
      <>
        <p>
          Visit the official trading site and sign in. Pick the correct league in the top-right. For convenience, save bookmarks for your most-used poe trade searches
          so you can open them quickly next session.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Double-check the league (e.g., Keepers of the Flame) to avoid cross-league price confusion.</li>
          <li>Keep one browser window dedicated to poe trade to prevent accidental resets while alt-tabbing.</li>
          <li>
            Link:{' '}
            <a className="text-brand underline" href="https://www.pathofexile.com/trade" target="_blank" rel="noopener noreferrer">
              Official poe trade
            </a>
          </li>
        </ul>
      </>
    ),
    image: { src: '/images/keepers-async.jpg', alt: 'poe trade landing and league selection' },
  },
  {
    id: 'step-2',
    title: 'Fast searching: item type → basic modifiers',
    body: (
      <>
        <p>
          In poe trade, start with the item category (bow, ring, helmet), then add a few core filters. Begin broad to get enough results, then tighten thresholds.
          Do not overconstrain—aim for a realistic range first.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Pick fundamentals first (item level, influence), then add mod thresholds (e.g., life &gt; 70, resists &gt; 30).</li>
          <li>Use a price ceiling (Chaos/Divine) so poe trade sorts results within budget.</li>
          <li>If nothing shows, relax 1–2 constraints to discover the real market band, then narrow again.</li>
        </ul>
      </>
    ),
    image: { src: '/images/genesis-tree.jpg', alt: 'poe trade filters and basic thresholds' },
  },
  {
    id: 'step-3',
    title: 'Save searches and enable Live Search',
    body: (
      <>
        <p>
          Once your filter is dialed in, save it and name it for reuse. Enable Live Search so poe trade refreshes in the background and notifies you when new matches
          appear. This keeps you responsive while mapping.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Keep three poe trade live searches: core upgrade, consumables restock, and a speculative watch.</li>
          <li>Note a budget and quick comments per saved search to speed up decisions.</li>
          <li>Pause Live Search before long idle sessions to reduce browser load.</li>
        </ul>
      </>
    ),
    image: { src: '/images/keepers-encounter.jpg', alt: 'poe trade Live Search and saved searches' },
  },
  {
    id: 'step-4',
    title: 'Whisper sellers and complete the trade',
    body: (
      <>
        <p>
          On a result card, click to copy the Whisper, paste it in-game, and send. If there is no response in 60–90 seconds, return to poe trade and try the next seller.
          Be polite, state the exact price, and offer to trade at their hideout to speed things up.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>If you need multiple items, combine them in one poe trade whisper with a clear total.</li>
          <li>If AFK/offline, move on quickly to avoid wasting portals.</li>
          <li>Do not edit the poe trade whisper text—avoid mismatched price or stash coordinates.</li>
        </ul>
      </>
    ),
    image: { src: '/images/screenshots/poe-trade-ingame.png', alt: 'In-game trade window while using poe trade whispers' },
  },
  {
    id: 'step-5',
    title: 'List items and sell in bulk (seller view)',
    body: (
      <>
        <p>
          Before selling, check comparable listings on poe trade to price realistically. For consumables and currency, prefer bulk listings with clear quantity and unit
          price—this reduces back-and-forth haggling. When demand spikes, small undercuts beat huge drops that crash your margin.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Group similar items so poe trade results look clean and buyers can bundle easily.</li>
          <li>Mention standout mods and your pricing rationale to cut “cheaper?” whispers.</li>
          <li>Clean up outdated listings to avoid “zombie” results lingering in poe trade.</li>
        </ul>
      </>
    ),
    // Real listing UI screenshot (stored locally)
    image: { src: '/images/screenshots/poe-trade-listing-exact-price.jpg', alt: 'poe trade set Exact Price and list items' },
  },
  {
    id: 'step-6',
    title: 'Safety and common issues',
    body: (
      <>
        <p>
          While using poe trade, protect your account and trade safely. Good etiquette and clear communication make deals faster and more reliable. A few quick tips:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Beware links and scripts; never share credentials. Change password and enable 2FA when in doubt.</li>
          <li>When prices swing, watch 5–10 minutes before buying—poe trade updates quickly.</li>
          <li>If a seller changes price or swaps items, cancel immediately and keep a screenshot.</li>
        </ul>
      </>
    ),
    image: { src: '/images/keepers-supporter.jpg', alt: 'poe trade safety checklist' },
  },
]

export default function PoeTradePage() {
  return (
    <>
      {/* Intro: simple split layout (not using PageHero) to keep variety vs. homepage */}
      <section className="container pt-10 md:pt-14">
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] items-center">
          <div className="space-y-4">
            <div className="kicker">Beginner-friendly · PoE 3.27</div>
            <h1 className="h2 text-white">PoE Trade Beginner Tutorial</h1>
            <p className="subtle text-white/80">
              A practical poe trade guide in six steps: search, save, live alerts, whisper, bulk listing, and safety. Learn the essential workflows that make
              trading faster and smoother.
            </p>
            <LastUpdated date="November 4, 2025 — curated from official sources and community guides" />
          </div>
          <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-flame-hero.jpg"
              alt="poe trade tutorial cover"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps: alternating cards with images for quick scanning */}
      <Section title="Get started with poe trade in 6 steps" kicker="Tutorial" desc="Follow these steps to set up searches, enable live alerts, whisper sellers, and list items in bulk.">
        <div className="space-y-10">
          {steps.map((step, idx) => (
            <div key={step.id} id={step.id} className="grid gap-6 lg:grid-cols-2 items-start">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}>
                <Card title={`${idx + 1}. ${step.title}`}>
                  <div className="space-y-3 text-white/80">{step.body}</div>
                </Card>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}>
                <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl border border-white/10">
                  <Image src={step.image.src} alt={step.image.alt} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cheat sheet: in-page guidance only, no external links */}
      <Section
        title="Cheat sheet for new buyers"
        kicker="Practical tips"
        desc="Keep this list next to your poe trade window to move faster with fewer mistakes."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Buyer workflow">
            <ul className="list-disc pl-5 space-y-2">
              <li>Open poe trade, set league, choose item type, add two core mods, then set a budget cap.</li>
              <li>Use Live Search on your best filter. Keep it open while mapping to catch fresh listings.</li>
              <li>Whisper the cheapest online seller first. If no reply in 60–90 seconds, try the next.</li>
              <li>Trade at the seller's hideout when possible. It speeds up delivery and reduces town lag.</li>
            </ul>
          </Card>
          <Card title="Seller workflow">
            <ul className="list-disc pl-5 space-y-2">
              <li>Scan poe trade for comparable items. Price just under the median for quick turnover.</li>
              <li>Use clear notes like "bulk 10x" or "fixed price" to reduce haggling.</li>
              <li>Group similar items into one tab. Buyers can whisper once and clear multiple lines.</li>
              <li>Refresh or remove stale listings so poe trade results show accurate stock.</li>
            </ul>
          </Card>
          <Card title="Quick filter recipes">
            <ul className="list-disc pl-5 space-y-2">
              <li>Bases: item level 84+, influence set, open suffix ≥ 1.</li>
              <li>Life gear: total life ≥ 90, resists ≥ 100 combined, open prefix ≥ 1.</li>
              <li>Weapons: explicit phys DPS or spell damage, attack speed or cast speed, crit chance.</li>
              <li>Currency and fragments: bulk count filters plus max price per unit on poe trade.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Common mistakes to avoid" kicker="Troubleshooting">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Overconstraining filters">
            <p>
              New players often add too many strict conditions and get zero results. Start broad in poe trade, confirm the market band, then narrow until you balance
              quality and price. Use ranges instead of perfect rolls.
            </p>
          </Card>
          <Card title="Ignoring online status">
            <p>
              Always filter for online in poe trade unless you are leaving long requests. Online sellers reply faster and help you clear maps without downtime.
            </p>
          </Card>
          <Card title="Not setting a ceiling">
            <p>
              Without a chaos or divine ceiling, poe trade may surface bait-tier items first. Cap your budget and sort by price ascending to avoid tunnel vision.
            </p>
          </Card>
          <Card title="Editing the whisper">
            <p>
              Do not edit the poe trade whisper text. Changing price or stash coordinates causes confusion and failed trades. If the terms changed, copy a fresh whisper.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Mini glossary for poe trade" kicker="Know the terms" className="pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Live Search">
            <p>
              A poe trade feature that refreshes results and notifies you when new matches appear. Great for day-one upgrades and volatile markets.
            </p>
          </Card>
          <Card title="Online only">
            <p>
              A poe trade status filter that limits results to players currently available. Use it when you want quick deliveries.
            </p>
          </Card>
          <Card title="Price per unit">
            <p>
              When shopping bulk currency or fragments, compare price per unit in poe trade rather than the headline total.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}
