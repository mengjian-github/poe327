import type { Metadata } from 'next'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { SyndicateBoardPlanner } from '@/components/syndicate-board-planner'
import { SyndicateCheatSheetBuilder } from '@/components/syndicate-cheatsheet-builder'
import { SyndicateCheatsheetCanvas } from '@/components/syndicate-cheatsheet-canvas'

// Primary and secondary key phrases for SEO targeting. Keep density ~3–5% for the primary phrase.
const KEY_PHRASE = 'poe betrayal cheat sheet 3.27'
const SECONDARY_PHRASE = 'poe syndicate cheat sheet 3.27'

const META_DESCRIPTION =
  'PoE 3.27 Betrayal cheat sheet: interactive Syndicate planner with safehouse targets, member roles, rewards and presets to speed mapping and Mastermind runs.'

const heroMetrics = [
  { label: 'Planner presets', value: '3 board rotations' },
  { label: 'Data refresh', value: 'November 3, 2025 · Keepers of the Flame' },
  { label: 'Sources', value: 'Community logs · craft discords' },
]

const divisionHighlights = [
  {
    title: 'Research Core',
    description: `Use the ${KEY_PHRASE} to anchor Research with Aisling, Janus, and It That Fled so veiled currency and unveil benches stay online all league.`,
    bullets: [
      'Promote Aisling for double-unveil windows during early mapping.',
      'Rival Janus with Cameria to balance stacked decks and scarabs.',
      'Trigger Betrayal missions when bench access lags behind gear needs.',
    ],
  },
  {
    title: 'Fortification Value',
    description: `The ${KEY_PHRASE} highlights Hillock and Guff rotations that bankroll flask, armour, and weapon refits without pausing atlas progression.`,
    bullets: [
      'Hillock quality: rush flasks first, then swap to armour and weapons.',
      'Let Guff handle metamod spam while invitations are queued.',
      'Add Vorici or Korell when Expedition pivots spike logbooks.',
    ],
  },
  {
    title: 'Intervention Profit',
    description: `Cameria, Jorgin, and Riker drive scarabs, incubators, and double rewards; the ${KEY_PHRASE} keeps their ranks stable across map blocks.`,
    bullets: [
      'Keep Cameria Trusted with Janus for reliable gilded scarabs.',
      'Stash high-roll talismans; day-two demand is very strong.',
      'Use Riker when atlas passives boost charge gains and double rolls.',
    ],
  },
]

const rewardRows = [
  { member: 'Aisling Laffrey', division: 'Research', reward: '4x veiled chaos, bench resets, Mastermind portals', boardTip: 'Promote with Trusted links; demote after a full unveil cycle.' },
  { member: 'Janus Perandus', division: 'Research', reward: 'Stacked decks, targeted divination cards', boardTip: 'Rival Cameria to keep deck volume aligned with scarab income.' },
  { member: 'Cameria the Coldblooded', division: 'Intervention', reward: 'Gilded & Winged scarabs, unique incubators', boardTip: 'Leader slot adds sulphite—pair with Niko for Delve pushes.' },
  { member: 'Hillock, the Blacksmith', division: 'Fortification', reward: '28% quality crafts for flasks, armour, and weapons', boardTip: 'Run safehouse immediately after ranking to avoid demotions.' },
  { member: 'Guff “Tiny” Grenn', division: 'Fortification', reward: 'Crafting session with currency options', boardTip: 'Use benches mid-mapping to slam influenced gear safely.' },
  { member: 'Jorgin, the Banished', division: 'Intervention', reward: 'Talisman incubators, beast-crafted amulets', boardTip: 'Captain slot shines during Breachstone rotations.' },
  { member: 'It That Fled', division: 'Research', reward: 'Expedition, breach, and harbinger splinters', boardTip: 'Pair with Expedition atlas wheel for multiplied logbook drops.' },
  { member: 'Elreon, Light’s Judge', division: 'Transportation', reward: 'Relic keys, map and fragment scarabs', boardTip: 'Shift to Intervention when you need influenced maps for invitations.' },
]

const faq = [
  {
    question: `How often should I update the ${KEY_PHRASE}?`,
    answer: `Every 3–4 maps at league start, then once per session as Trusted links and rivalries change. Patch hotfixes in 3.27 can nudge safehouse loot, so revisit the ${KEY_PHRASE} after notable balance notes.`,
  },
  {
    question: `Is the ${SECONDARY_PHRASE} a different tool?`,
    answer: `No—both terms point to the same topic. This page treats ${KEY_PHRASE} as the primary phrase and aligns the ${SECONDARY_PHRASE} as a synonym so players find the same planner.`,
  },
  {
    question: 'What if I pivot to Legion or Delve farming mid-league?',
    answer: `Swap the planner preset: Scarabs & Invitations favors Legion fragments, while Veiled Chaos Engine can be tweaked by moving Elreon and Tora to Transportation for extra sulphite scarabs that support Delve routes.`,
  },
]

export const metadata: Metadata = {
  title: 'PoE Betrayal Cheat Sheet 3.27 — Immortal Syndicate Planner',
  description: META_DESCRIPTION,
  alternates: {
    canonical: 'https://poe327.net/betrayal-cheatsheet',
  },
  openGraph: {
    title: 'PoE Betrayal Cheat Sheet 3.27 — Immortal Syndicate Planner',
    description: META_DESCRIPTION,
    url: 'https://poe327.net/betrayal-cheatsheet',
    siteName: 'poe327',
    type: 'article',
    images: [
      { url: '/images/keepers-encounter.jpg', width: 1200, height: 630, alt: 'Betrayal board planning overlay for 3.27' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE Betrayal Cheat Sheet 3.27 — Immortal Syndicate Planner',
    description: META_DESCRIPTION,
    images: ['/images/keepers-encounter.jpg'],
  },
}

export default function BetrayalCheatSheetPage() {
  return (
    <>
      <PageHero
        title="PoE Betrayal Cheat Sheet 3.27"
        description={`This ${KEY_PHRASE} is a compact planner for Immortal Syndicate: launch presets, assign captains, lock Trusted links, and time safehouses without spreadsheets. If you search for the ${SECONDARY_PHRASE}, you land in the same tool-focused guide.`}
        image="/images/keepers-encounter.jpg"
        kicker="Immortal Syndicate"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — Verified against Betrayal community logs and GGG balance notes" />
      </div>


      <Section
        id="canvas"
        title="Syndicate Cheatsheet Grid"
        desc={`Click any cell to cycle tiers (Bad/Good/Great). Use Show Recommendation to prefill the grid, then Copy link to share. This ${KEY_PHRASE} canvas mirrors the popular customizer layout.`}
        kicker="Big canvas"
      >
        <SyndicateCheatsheetCanvas keyPhrase={KEY_PHRASE} />
      </Section>

      <Section
        id="overview"
        title="One Planner For All Roles"
        desc={`The ${KEY_PHRASE} unifies board setup, safehouse sequencing, and reward pivots in one place. Whether you call it the ${SECONDARY_PHRASE} or a Syndicate planner, each division explains when to swap captains and how to align Mastermind windows with atlas goals.`}
        kicker="Why this tool"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {divisionHighlights.map((division) => (
            <Card key={division.title} title={division.title}>
              <p>{division.description}</p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
                {division.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="rewards"
        title="Member Rewards At A Glance"
        desc={`Use this table alongside the ${KEY_PHRASE} when reorganising your board mid-map. It prioritises the personnel that matter in 3.27 and flags demote/assign moments.`}
        kicker="Safehouse intel"
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/60">
              <tr>
                <th className="px-4 py-3">Member</th>
                <th className="px-4 py-3">Division</th>
                <th className="px-4 py-3">Reward Snapshot</th>
                <th className="px-4 py-3">Board Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rewardRows.map((row) => (
                <tr key={row.member}>
                  <td className="px-4 py-4 font-semibold text-white">{row.member}</td>
                  <td className="px-4 py-4 text-white/70">{row.division}</td>
                  <td className="px-4 py-4">{row.reward}</td>
                  <td className="px-4 py-4 text-white/70">{row.boardTip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="builder"
        title="Custom Cheatsheet Builder (Interactive)"
        desc={`This ${KEY_PHRASE} tool mirrors the reference customizer: pick division leaders and members, add notes for Trusted links, and share a link that encodes your board.`}
        kicker="Hands-on tool"
      >
        <SyndicateCheatSheetBuilder keyPhrase={KEY_PHRASE} />
      </Section>

      <Section
        id="planner"
        title="Preset Planner"
        desc={`Prefer curated rotations? Use these presets to reshape your ${KEY_PHRASE} between mapping sessions.`}
        kicker="One-click presets"
      >
        <SyndicateBoardPlanner keyPhrase={KEY_PHRASE} />
      </Section>

      <Section
        id="atlas"
        title="Atlas & Mission Sequencing"
        desc={`Map sustain hinges on the ${KEY_PHRASE} staying aligned with Betrayal atlas passives. Take Intelligence Gathering, Bribery, and Resource Reallocation, then stack Betrayal Scarabs once your ${KEY_PHRASE} presets push rank 3 members into every branch.`}
        kicker="Passive wheels"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="What to allocate">
            <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
              <li>Grab Intelligence Gathering and Test of Loyalty first for rapid Mastermind access.</li>
              <li>Pair Betrayal Scarabs with the Scarabs & Invitations preset to guarantee double influenced map drops.</li>
              <li>Slot Secret Stash when you pivot into Expedition or Legion invitations.</li>
            </ul>
          </Card>
          <Card title="When to run Mastermind">
            <p>
              Trigger Catarina after every second safehouse cycle while the {KEY_PHRASE} planner shows at least two rank 3 leaders. This keeps unveil access flowing and prevents rivals from resetting your Trusted grid.
            </p>
            <p>
              If you need a specific bench—Hillock flasks or Vagan’s slam—delay Mastermind until the correct division caps out, then cash in.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq" title="FAQ" kicker="3.27 clarifications">
        <div className="grid gap-5 md:grid-cols-3">
          {faq.map((item) => (
            <Card key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
