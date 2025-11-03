import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, Map, Shield, Target } from 'lucide-react'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { starters, lastUpdated as startersUpdated } from '@/data/starters'

export const metadata: Metadata = {
  title: 'League Starter PoE 3.27 Survival Playbook',
  description:
    'Deep league starter poe 3.27 action plan with curated day-one builds, atlas pivots, gearing ladders, and async trade triage to keep Keepers squads ahead.',
  alternates: {
    canonical: 'https://poe327.net/starter',
  },
  openGraph: {
    title: 'League Starter PoE 3.27 Survival Playbook',
    description:
      'Deep league starter poe 3.27 action plan with curated builds, atlas pivots, and economy guardrails for the Keepers of the Flame rush.',
    url: 'https://poe327.net/starter',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-flame-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'League Starter PoE 3.27 hero banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'League Starter PoE 3.27 Survival Playbook',
    description:
      'Deep league starter poe 3.27 action plan with curated builds, atlas pivots, and economy guardrails for the Keepers of the Flame rush.',
    images: ['/images/keepers-flame-hero.jpg'],
  },
}

const heroMetrics = [
  { label: 'Launch windows', value: 'Oct 31 12:00 PM PDT · Nov 1 ANZ' },
  { label: 'PoB snapshots', value: '4 ready-to-import builds' },
  { label: 'Update cadence', value: 'Daily refresh 08:00 PDT' },
]

const launchChecklist = [
  'Lock league starter poe 3.27 preload by October 30 at 18:00 PDT so the client decrypts before the Keepers reveal surge.',
  'Stage league starter poe 3.27 stash tabs—currency, leveling, Atlas, Breach parts—so you never stop to micro-sort during Act 2 Hive Defense.',
  'Print league starter poe 3.27 lab notes covering Cruel and Merciless layouts plus key Trials so your Lab carries route teammates efficiently.',
  'Bookmark league starter poe 3.27 forum hotfix tracker to mirror Grinding Gear updates before you slam Atlas passives or Genesis Tree Grafts.',
]

const atlasRoutes = [
  'Anchor league starter poe 3.27 Atlas stones on Breach and Expedition until Genesis bloodlines unlock Marshal Vruun for red-map rotation.',
  'Chart league starter poe 3.27 Guardian attempts with single-influence maps first to stabilise fragments before chasing Uber Elder invitations.',
  'Sync league starter poe 3.27 Grand Design swaps with your party so Delve, Heist, and Warbands pivot packs stay profitable without breaking juice.',
]

const economyReminders = [
  'Keep league starter poe 3.27 trade spreadsheets updated with manual whisper macros until async Merchant Tabs open wider than high-value hubs.',
  'Clip league starter poe 3.27 vendor recipes—Chromatic, 20% quality masks, six-socket armor—so every act town run compounds currency.',
  'Pin league starter poe 3.27 support targets: Supporter Pack timing, daily Kirac refresh, and Sextant swaps to maximise your week-one bankroll.',
]

const faqEntries = [
  {
    question: 'How do I pivot if my campaign pacing slips?',
    answer:
      'Map a league starter poe 3.27 recovery block: run Blood Aqueducts for Humility cards, reset flask tiers, and respec a handful of passives toward movement speed so you rejoin the party by Act 9.',
  },
  {
    question: 'When should I respec into my endgame links?',
    answer:
      'Swap once your league starter poe 3.27 stash holds a six-link or Dialla, because delaying keeps mana costs and resist gaps manageable while you farm red-tier memories.',
  },
  {
    question: 'What’s the plan for Private Leagues?',
    answer:
      'Spin a second league starter poe 3.27 profile dedicated to Private League modifiers so you test breach density, reward scaling, and async trade lag without risking the main roster.',
  },
]

export default function StarterPage() {
  return (
    <>
      <PageHero
        title="League Starter PoE 3.27 Survival Playbook"
        description="This league starter poe 3.27 field guide fuses the Keepers of the Flame reveal beats, curated PoBs, and atlas pivots so every league starter poe 3.27 roster flows from Act 1 to red maps without panic."
        image="/images/keepers-flame-hero.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date={`November 2, 2025 — Starters data ${startersUpdated}`} className="sm:flex" />
      </div>

      <Section
        id="launch"
        title="Launch Systems Check"
        desc="Prep the league starter poe 3.27 runway before servers unlock. This launch pad keeps the downloader patched, labs rehearsed, and communication boards synced so every league starter poe 3.27 sprint opens clean."
        kicker="League starter poe 3.27 prep"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-5 text-white/80">
            <p>
              Treat league starter poe 3.27 day zero as a scrimmage: confirm drivers, update loot filters, and capture reveal stream notes inside a shared
              Notion so your squad prioritises gems, resist benches, and Graftblood drops. This prevents wasted portals when Hive Defense objectives spike.
            </p>
            <p>
              Embed voice comm checklists that repeat league starter poe 3.27 supply triggers—alchemy orb reserves, breachstone timers, flask rolls—so any
              substitute player can jump in mid-act and uphold the pace. The fewer surprises, the faster Keepers objectives melt.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {launchChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/hero-keepers.jpg"
              alt="Team briefing before the Keepers launch"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="builds"
        title="Build Bench & PoBs"
        desc="Slot a league starter poe 3.27 lineup that covers clear, bosses, and mitigation. This grid pairs each staple with a recent PoB so the league starter poe 3.27 roster always has redundancy."
        kicker="League starter poe 3.27 builds"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {starters.map((starter) => (
            <Card
              key={starter.title}
              eyebrow={<span className="text-xs font-semibold text-brand">Tier {starter.tier}</span>}
              title={starter.title}
              icon={<Flame size={24} />}
              footer={
                starter.pob && (
                  <Link href={starter.pob} className="text-brand hover:underline">
                    Import PoB
                  </Link>
                )
              }
            >
              <p>
                This league starter poe 3.27 pick leans on the {starter.ascendancy} ascendancy to balance mapping speed and boss insurance while staying
                friendly to scarce currencies.
              </p>
              {starter.notes && <p>{starter.notes}</p>}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="atlas"
        title="Acts, Atlas & Genesis"
        desc="Translate the league starter poe 3.27 manifesto into night-one movement. These rotations keep the campaign brisk, the Genesis Tree fed, and the atlas pushing toward T17 without overspending."
        kicker="League starter poe 3.27 progression"
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-async.jpg"
              alt="Atlas planning board with Genesis Tree routes"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
          </div>
          <div className="space-y-5 text-white/80">
            <p>
              Push league starter poe 3.27 campaign splits in 90-minute blocks: Acts 1-5 before dinner, Acts 6-10 before midnight, Kitava cleanup next
              morning. That cadence sustains focus and keeps breach respawns from overwhelming the squad.
            </p>
            <p>
              Once maps open, rotate league starter poe 3.27 stones through yellow tiers while banking Atlas missions for Breach, Expedition, and Heist.
              Feed excess Graftblood into Genesis Tree branches that amplify gem drops and marshal scouting for Marshal Vruun hunts.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {atlasRoutes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="economy"
        title="Economy & Sustain"
        desc="Safeguard the league starter poe 3.27 bankroll with deliberate trade, crafting, and support touchpoints. This keeps your league starter poe 3.27 venture liquid across the first weekend."
        kicker="League starter poe 3.27 economy"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Async trade triage" icon={<Target size={24} />}>
            <p>
              Create a league starter poe 3.27 whisper macro template that tags price, stat lines, and fallback offers so manual trades resolve quickly
              while Merchant Tabs roll out in waves.
            </p>
            <ul className="list-disc space-y-2 pl-4 text-xs text-white/70">
              <li>Track each successful whisper in a lightweight ledger.</li>
              <li>Rotate trade captains every four hours to prevent burnout.</li>
            </ul>
          </Card>
          <Card title="Defensive plateaus" icon={<Shield size={24} />}>
            <p>
              Budget league starter poe 3.27 defensive upgrades—spell suppression, armour, and flask suffixes—at each act town so boss spikes never catch
              you undercapped.
            </p>
            <p>
              Save Instilling Orbs for automated guard or jade flasks; they stabilise every Breach wave once the Hive starts chaining objectives.
            </p>
          </Card>
          <Card title="Atlas contracts" icon={<Map size={24} />}>
            <p>
              Schedule a league starter poe 3.27 contract rotation: run three Heists, one Expedition, then reset with a Harvest plot so currency, fossils,
              and lifeforce stay diversified.
            </p>
            <p>
              Sync the plan with Kirac missions to stack Scarabs before you spearhead 8-mod corrupted maps.
            </p>
          </Card>
        </div>
        <ul className="mt-6 list-disc space-y-3 pl-5">
          {economyReminders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section
        id="faq"
        title="Contingency FAQ"
        desc="Answer the league starter poe 3.27 what-ifs before they stall the group. Read this aloud during your briefing so every league starter poe 3.27 player knows the fallback."
        kicker="League starter poe 3.27 answers"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {faqEntries.map((entry) => (
            <Card key={entry.question} title={entry.question}>
              <p>{entry.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
