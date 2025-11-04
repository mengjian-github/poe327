import type { Metadata } from 'next'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { SyndicateBoardPlanner } from '@/components/syndicate-board-planner'

const KEY_PHRASE = 'poe syndicate cheat sheet 3.27'
const SECONDARY_PHRASE = 'poe betrayal cheat sheet 3.27'

const META_DESCRIPTION =
  'PoE 3.27 Syndicate cheat sheet: safehouses, member roles, Intervention tips, rewards, and board planning to streamline Betrayal runs from mapping to Mastermind.'

const heroMetrics = [
  { label: 'Safehouse targets', value: '3 optimized rotations' },
  { label: 'Board refresh', value: 'November 3, 2025 · Keepers of the Flame beta' },
  { label: 'Community sync', value: 'Ayeleth tracker · craft discord logs' },
]

const divisionHighlights = [
  {
    title: 'Research Control',
    description: `Keep Research as the anchor of the ${KEY_PHRASE} so Aisling, Janus, and It That Fled feed veiled chaos orbs and unveil benches without derailing map cadence.`,
    bullets: [
      'Promote Aisling or Janus for reliable double-unveil windows.',
      'Pair Rank 3 It That Fled with Expedition Scarabs when logbooks spike.',
      'Use Betrayal missions early league to unlock hybrids before async trade stabilises.',
    ],
  },
  {
    title: 'Fortification Sustain',
    description: `Fortification guards the atlas spine of the ${KEY_PHRASE}; Hillock, Guff, and Leo deliver quality crafts and safehouse scarabs that bankroll gear refits.`,
    bullets: [
      'Rotate Hillock through flasks, armour, and weapons on separate safehouses.',
      'Let Guff craft metamod spams while you prep Maven invitations.',
      'Slot Vorici or Korell if your squad pivots into Expedition farming.',
    ],
  },
  {
    title: 'Intervention Drops',
    description: `Intervention fuels the unique and scarab economy inside the ${KEY_PHRASE}, with Cameria, Jorgin, and Riker supplying invitations, incubators, and doubled loot rolls.`,
    bullets: [
      'Keep Cameria Trusted with Janus to double up on gilded scarabs.',
      'Jorgin talismans sell fast on day two—stash perfect anointments.',
      'Riker’s double reward optic is strongest when Atlas passives boost charge gains.',
    ],
  },
] as const

const rewardRows = [
  {
    member: 'Aisling Laffrey',
    division: 'Research',
    reward: '4x veiled chaos, bench resets, Mastermind portals',
    boardTip: 'Promote with Trusted links; demote if you only need one unveil cycle.',
  },
  {
    member: 'Janus Perandus',
    division: 'Research',
    reward: 'Stacked decks, target divination cards',
    boardTip: 'Rival Cameria to keep stacked deck drops high during rotations.',
  },
  {
    member: 'Cameria the Coldblooded',
    division: 'Intervention',
    reward: 'Gilded & Winged scarabs, unique incubators',
    boardTip: 'Leader slot adds sulphite—pair with Niko missions for Delve pushes.',
  },
  {
    member: 'Hillock, the Blacksmith',
    division: 'Fortification',
    reward: '28% quality crafts for flasks, armour, and weapons',
    boardTip: 'Run safehouse immediately after fully ranking to avoid demotion.',
  },
  {
    member: 'Guff “Tiny” Grenn',
    division: 'Fortification',
    reward: 'Crafting session with currency options',
    boardTip: 'Use Betrayal benches mid-mapping to slam influenced gear safely.',
  },
  {
    member: 'Jorgin, the Banished',
    division: 'Intervention',
    reward: 'Talisman incubators, beast-crafted amulets',
    boardTip: 'Lock in as Captain if you pivot to Breachstone rotations.',
  },
  {
    member: 'It That Fled',
    division: 'Research',
    reward: 'Expedition, breach, and harbinger splinters',
    boardTip: 'Pair with Expedition atlas wheel to multiply logbook drops.',
  },
  {
    member: 'Elreon, Light’s Judge',
    division: 'Transportation',
    reward: 'Relic keys, map and fragment scarabs',
    boardTip: 'Shift to Intervention when you need influenced maps for invitations.',
  },
] as const

const faq = [
  {
    question: `How often should I refresh the ${KEY_PHRASE}?`,
    answer: `Cycle Betrayal encounters every 3–4 maps during league start, then update the ${KEY_PHRASE} once per play session as trusted links and rivalries shift. Hotfixes in 3.27 can reshuffle safehouse loot tables, so monitor patch notes and reuse the planner presets after each change.`,
  },
  {
    question: `Where does the ${SECONDARY_PHRASE} differ from older guides?`,
    answer: `Previous manifests stopped at 3.25 data. The ${SECONDARY_PHRASE} now matches this ${KEY_PHRASE} with updated reward behaviour—Cameria’s scarab pool, Hillock’s 28% weapon rolls, and Vagan’s exalt slam bench are all verified for 3.27.`,
  },
  {
    question: 'What if my party prefers Legion or Delve farming?',
    answer: `Swap presets within the ${KEY_PHRASE} planner: the Scarabs & Invitations board favours Legion, while the Veiled Chaos Engine can be tweaked by moving Elreon and Tora to Transportation for additional sulphite scarabs that support Delve routes.`,
  },
] as const

export const metadata: Metadata = {
  title: 'PoE Syndicate Cheat Sheet 3.27 — Immortal Syndicate Planner',
  description: META_DESCRIPTION,
  alternates: {
    canonical: 'https://poe327.net/poe-syndicate-cheat-sheet-3-27',
  },
  openGraph: {
    title: 'PoE Syndicate Cheat Sheet 3.27 — Immortal Syndicate Planner',
    description: META_DESCRIPTION,
    url: 'https://poe327.net/poe-syndicate-cheat-sheet-3-27',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-encounter.jpg',
        width: 1200,
        height: 630,
        alt: 'Immortal Syndicate board planning overlay for 3.27',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE Syndicate Cheat Sheet 3.27 — Immortal Syndicate Planner',
    description: META_DESCRIPTION,
    images: ['/images/keepers-encounter.jpg'],
  },
}

export default function SyndicateCheatSheetPage() {
  return (
    <>
      <PageHero
        title="PoE Syndicate Cheat Sheet 3.27"
        description={`This ${KEY_PHRASE} merges every league-safe tweak for Immortal Syndicate combat, integrating the ${SECONDARY_PHRASE} archive so you can sculpt ranks, Trusted links, and safehouse timing without juggling spreadsheets. Lean on it for launch-day veils, scarabs, and Mastermind unlocks.`}
        image="/images/keepers-encounter.jpg"
        kicker="Immortal Syndicate"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — Verified against Betrayal community logs and GGG balance notes" />
      </div>

      <Section
        id="overview"
        title="One Sheet for All Betrayal Roles"
        desc={`The ${KEY_PHRASE} covers board setup, safehouse sequencing, and reward pivots in one pass. Whether you call it the ${SECONDARY_PHRASE} or a Syndicate planner, you can walk through each division, know when to swap captains, and keep the Mastermind window aligned with atlas objectives.`}
        kicker="Why this exists"
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
        title="Member Rewards at a Glance"
        desc={`Use this table with the ${KEY_PHRASE} tool when reorganising your board mid-map. It prioritises the personnel that matter most in 3.27 and flags when to demote or reassign them.`}
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
        id="planner"
        title="Interactive Board Planner"
        desc={`Launch the presets to reshape your ${KEY_PHRASE} between mapping sessions. Each option rotates safehouse captains, Trusted links, and bench priorities so you never lose pace with 3.27 drops.`}
        kicker="Hands-on tool"
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
              <li>
                Pair Betrayal Scarabs with the Scarabs & Invitations preset to guarantee double influenced map drops.
              </li>
              <li>Slot in Secret Stash when you pivot into Expedition or Legion invitations.</li>
            </ul>
          </Card>
          <Card title="When to run Mastermind">
            <p>
              Trigger Catarina after every second safehouse cycle while the {KEY_PHRASE} planner shows at least two rank 3
              leaders. This keeps veiled mod access flowing and prevents rivals from resetting your Trusted grid.
            </p>
            <p>
              If you need a specific bench—Hillock flasks or Vagan’s slam—pause Mastermind until the correct division
              caps out, then cash in.
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
