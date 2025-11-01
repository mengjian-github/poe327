export type LeagueFeature = {
  title: string
  subtitle: string
  description: string
  points: string[]
  image: string
}

export const leagueFeatures: LeagueFeature[] = [
  {
    title: 'Escort Ailith & Stabilise Breaches',
    subtitle: 'Keepers of the Flame core loop',
    description:
      'poe 3.27 encounters remix classic Breach gameplay with escort objectives. Protect Ailith while she channels the Flame and dismantles Breach structures, then stabilise resurgent Breach Hands before Hiveborn elites overwhelm you.',
    points: [
      'Escort phases spawn rolling monster waves that scale rewards as the channel completes.',
      'Classic Breach Hands return with faster open/close cadence and clearer progress UI.',
      'Clearing chains of encounters unlocks Hive gates that lead to Breachlord domains.',
    ],
    image: '/images/keepers-encounter.jpg',
  },
  {
    title: 'Breach Hives & Marshal Vruun',
    subtitle: 'New raid-style arena fights',
    description:
      'Dive into poe 3.27 Hive instances seeded across maps. Each thread escalates difficulty, culminating in Hiveborn bosses with bespoke loot tables and the chance to confront Marshal Vruun for league-exclusive rewards.',
    points: [
      'Enter Hives through shimmering gateways that appear after fully stabilising breaches.',
      'Hives stack map modifiers and inject dense Hiveborn packs with lethal combos.',
      'Marshal Vruun introduces rotating phases and debuff projectiles tuned for group play.',
    ],
    image: '/images/keepers-hive.jpg',
  },
  {
    title: 'The Genesis Tree',
    subtitle: 'Organic crafting lattice',
    description:
      'In poe 3.27 Ailith grants access to the Genesis Tree at the monastery hub. Grow nodes using Graftblood to specialise the tree toward currency, gear, or Graft sockets, then respec freely as your needs change.',
    points: [
      'Specialise branches to “grow” targeted bases, currency clusters, or Foulborn uniques.',
      'Swap node allocations at any time without cost to pivot towards new chase items.',
      'Tree growth tracks your account, encouraging experimentation across characters.',
    ],
    image: '/images/genesis-tree.jpg',
  },
  {
    title: 'Foulborn Currency & Uniques',
    subtitle: 'Mutated loot drops',
    description:
      'The poe 3.27 Genesis Tree yields corrupted takes on familiar rewards. Foul currency tightens mod weighting, while Foulborn uniques replace signature lines with wild new modifiers that enable off-meta builds.',
    points: [
      'Foul currency rolls higher-tier affixes by filtering out low-level outcomes.',
      'Foulborn uniques swap one or more base modifiers for bespoke alternatives.',
      'Harvest-style growth cycles let you favour specific base categories over time.',
    ],
    image: '/images/foulborn-loot.jpg',
  },
  {
    title: 'Living Graft Equipment',
    subtitle: 'Socketable combat mutations',
    description:
      'poe 3.27 grafts are biomechanical hand-slot augments that grant passive stats and powerful reactive skills like Heart of Flame novas or defensive wards. Two grafts can be equipped and tuned with graft-only currency.',
    points: [
      'Unlock 16 graft archetypes ranging from damage pulses to guard effects.',
      'Graft-only currency modifies cooldowns, trigger conditions, and stat packages.',
      'Pair grafts with Bloodline ascendancies to fill defensive or utility gaps.',
    ],
    image: '/images/graft-equipment.jpg',
  },
]
