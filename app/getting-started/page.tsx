import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Path of Exile 3.27 Getting Started — Beginner Roadmap',
  description:
    'Step into PoE 3.27 with leveling routes, loot filters, trading tips, flask setups, atlas priorities, and mapping checkpoints for smooth league starts.',
  alternates: { canonical: 'https://poe327.net/getting-started' },
  openGraph: {
    title: 'PoE 3.27 Getting Started — Beginner Roadmap',
    description:
      'Step-by-step onboarding for new Path of Exile players in 3.27: leveling, currency, loot filters, Awakened Trade, defenses, gems, flasks, and atlas planning.',
    url: 'https://poe327.net/getting-started',
    type: 'article',
    images: [{ url: '/images/hero-keepers.jpg', width: 1200, height: 630, alt: 'PoE 3.27 beginner guide hero' }],
  },
}

const heroMetrics = [
  { label: 'Target player', value: 'New / Returning' },
  { label: 'Time to act maps', value: '2–6 hours (practice)' },
  { label: 'Must‑know systems', value: 'Loot Filters · Trade · Gems/Links · Flasks · Resists' },
]

const checklist = [
  'Pick a beginner‑friendly starter (see Starters); don’t chase complex combos day 1.',
  'Install a loot filter before entering maps; test sounds and beams in town.',
  'Cap elemental resistances (75%) before Act 6; re‑cap after Kitava (Act 10).',
  'Bind flasks on comfortable keys; keep Quicksilver up while leveling.',
  'Learn 4‑link → 5‑link → 6‑link progression and support gems that scale your main skill.',
]

const basics = [
  {
    title: 'Leveling Flow',
    body:
      'Use movement skills and a Quicksilver Flask to keep momentum. Replace weapons every 5–10 levels; a good 4‑link beats a bad 5‑link. If you stall, craft “+elemental damage to attacks/spells” on a vendor wand/sceptre or buy a cheap leveling weapon.',
    image: '/images/keepers-kineticrain.jpg',
    alt: 'Campaign momentum with movement skills and flasks',
  },
  {
    title: 'Resistances & Life',
    body:
      'By Act 6 you need 75% Fire, Cold, and Lightning resistance. After Act 10, penalties increase (−60%). Prioritize life on gear; a fresh mapper should aim for 3–4k life and 75% resists.',
    image: '/images/keepers-async.jpg',
    alt: 'Elemental resistance and life priorities',
  },
  {
    title: 'Gems & Links',
    body:
      'Your main skill scales through supports. Early goals: reliable 4‑link → 5‑link from a vendor recipe or cheap trade purchase. Keep gem levels updated and quality later when maps feel stable.',
    image: '/images/graft-equipment.jpg',
    alt: 'Skill gem links and upgrades',
  },
]

const mapping = [
  {
    title: 'Loot Filters',
    body:
      'Install a filter before you reach maps. Start with Campaign/Semi, then move to Strict once your screen clutters. Our NeverSink page covers install, strictness, and updates.',
    image: '/images/rpgstash-poe-loot-filter-32.jpg',
    alt: 'Loot filter hero',
    href: '/filters/neversink',
  },
  {
    title: 'Trading Basics',
    body:
      'Install Awakened PoE Trade for fast price checks and clean whispers. Learn bulk selling for currency/fragment tabs and use templates for common searches.',
    image: '/images/screenshots/trade-home.png',
    alt: 'Trading overlay and site',
    href: '/trade/awakened',
  },
  {
    title: 'Atlas & Sustain',
    body:
      'Unlock your Atlas quickly: allocate early sustain notables, run your highest map, and favor mechanics that fit your build. Keep a small stash of scarabs to stabilize your map pool.',
    image: '/images/keepers-uberboss.jpg',
    alt: 'Atlas progress and bossing',
    href: '/patch-notes',
  },
]

const defenses = [
  {
    title: 'Flasks',
    body:
      'Use a Quicksilver and a defensive flask early (Granite/Basalt/Jade). Roll “of Heat” (freeze) and “of Staunching” (bleed) until you have proper ailment mitigation on gear.',
  },
  {
    title: 'Ailments',
    body:
      'Freeze, shock, ignite, bleed, poison, and corrupted blood are deadly when under‑geared. Prioritize at least one reliable answer for each (flasks, pantheon, or gear).',
  },
  {
    title: 'Armor/Evasion/Spell Suppression',
    body:
      'Armor reduces hit physical damage; Evasion avoids attacks; Spell Suppression halves spell damage when capped. Pick the layers that match your starter and invest consistently.',
  },
]

const mistakes = [
  'Skipping resistances and life while chasing DPS; getting one‑shot in yellow maps.',
  'Ignoring links and supports; a good 4‑link outperforms a random 6‑socket.',
  'No loot filter until red maps; time wasted sorting junk.',
  'Not learning basic trade flow (price check, bulk sell, clean whispers).',
]

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        title="PoE 3.27 Getting Started — Beginner Roadmap"
        description="Everything you need to get comfortable fast: leveling flow, resistances, gem links, flasks, loot filters, trading, and first atlas steps."
        image="/images/hero-keepers.jpg"
        kicker="New Player Guide"
        metrics={heroMetrics}
        actions={
          <div className="flex gap-3">
            <Link href="/starters" className="btn btn-primary">See Starters</Link>
            <Link href="/filters/neversink" className="btn btn-ghost">Loot Filters</Link>
          </div>
        }
      />

      <div className="container">
        <LastUpdated date="November 2025 — Beginner onboarding refresh" />
      </div>

      <Section id="checklist" title="New Player Checklist" desc="Five quick wins that make the biggest difference on a fresh character.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {checklist.map((tip) => (
            <Card key={tip}>
              <p>{tip}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="basics" title="Leveling Basics" desc="Stay moving, keep resistances capped, and scale your main skill through links.">
        <div className="grid gap-6 md:grid-cols-3">
          {basics.map((b) => (
            <article key={b.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-6 text-white/85 shadow-xl">
              <Image src={b.image} alt={b.alt} width={640} height={420} className="mb-4 h-48 w-full rounded-2xl object-cover" />
              <h3 className="text-xl font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{b.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="mapping" title="Early Mapping" desc="Filters, trading, and atlas habits that accelerate your first week.">
        <div className="grid gap-6 md:grid-cols-3">
          {mapping.map((m) => (
            <article key={m.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-6 text-white/85 shadow-xl">
              <Image src={m.image} alt={m.alt} width={640} height={420} className="mb-4 h-48 w-full rounded-2xl object-cover" />
              <h3 className="text-xl font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{m.body}</p>
              {m.href && (
                <Link href={m.href} className="mt-3 inline-flex text-brand transition hover:text-white">Open guide →</Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="defense" title="Defenses & Flask Setup" desc="Simple survivability layers you can set up in minutes.">
        <div className="grid gap-4 md:grid-cols-3">
          {defenses.map((d) => (
            <Card key={d.title} title={d.title}>
              <p>{d.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="mistakes" title="Common Mistakes" desc="Quick reminders that prevent the most deaths and wasted time.">
        <ul className="grid gap-3 md:grid-cols-2">
          {mistakes.map((m) => (
            <li key={m} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">{m}</li>
          ))}
        </ul>
      </Section>

      <Section id="gallery" title="Quick Gallery" desc="A few captures to set the vibe for your first mapping sessions.">
        <div className="grid gap-4 md:grid-cols-3">
          <Image src="/images/keepers-uberboss.jpg" alt="Boss fight" width={640} height={420} className="h-48 w-full rounded-2xl object-cover" />
          <Image src="/images/foulborn-loot.jpg" alt="Loot explosion" width={640} height={420} className="h-48 w-full rounded-2xl object-cover" />
          <Image src="/images/screenshots/trade-home.png" alt="Official trade site" width={640} height={420} className="h-48 w-full rounded-2xl object-cover" />
        </div>
      </Section>
    </>
  )
}
