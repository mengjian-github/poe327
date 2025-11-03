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
    subtitle: 'poe league 3.27 core loop',
    description:
      'poe league 3.27 encounters remix classic Breach gameplay with escort objectives. Protect Ailith while she channels the Flame and dismantles Breach structures, then stabilise resurgent Breach Hands before Hiveborn elites overwhelm you.',
    points: [
      'poe league 3.27 escort phases spawn rolling monster waves that scale rewards as the channel completes.',
      'poe league 3.27 Breach Hands return with faster open/close cadence and clearer progress UI.',
      'poe league 3.27 encounter chains unlock Hive gates that lead to Breachlord domains.',
      'Join the Order of the Keepers to wield Dreamer’s Flame walls and repel Breachlords across Wraeclast in poe league 3.27.',
    ],
    image: '/images/keepers-encounter.jpg',
  },
  {
    title: 'Breach Hives & Marshal Vruun',
    subtitle: 'poe league 3.27 raid-style arenas',
    description:
      'Dive into poe league 3.27 Hive instances seeded across maps. Each thread escalates difficulty, culminating in Hiveborn bosses with bespoke loot tables and the chance to confront Marshal Vruun for league-exclusive rewards.',
    points: [
      'Enter poe league 3.27 Hives through shimmering gateways that appear after fully stabilising breaches.',
      'poe league 3.27 Hive threads stack map modifiers and inject dense Hiveborn packs with lethal combos.',
      'Marshal Vruun introduces rotating phases and debuff projectiles tuned for poe league 3.27 group play.',
    ],
    image: '/images/keepers-hive.jpg',
  },
  {
    title: 'The Genesis Tree',
    subtitle: 'poe league 3.27 crafting lattice',
    description:
      'In poe league 3.27 Ailith grants access to the Genesis Tree at the monastery hub. Grow nodes using Graftblood to specialise the tree toward currency, gear, or Graft sockets, then respec freely as your needs change.',
    points: [
      'Specialise poe league 3.27 branches to “grow” targeted bases, currency clusters, or Foulborn uniques.',
      'Swap poe league 3.27 node allocations at any time without cost to pivot towards new chase items.',
      'poe league 3.27 tree growth tracks your account, encouraging experimentation across characters.',
    ],
    image: '/images/genesis-tree.jpg',
  },
  {
    title: 'Foulborn Currency & Uniques',
    subtitle: 'poe league 3.27 mutated loot',
    description:
      'The poe league 3.27 Genesis Tree yields corrupted takes on familiar rewards. Foul currency tightens mod weighting, while Foulborn uniques replace signature lines with wild new modifiers that enable off-meta builds.',
    points: [
      'poe league 3.27 Foul currency rolls higher-tier affixes by filtering out low-level outcomes.',
      'poe league 3.27 Foulborn uniques swap one or more base modifiers for bespoke alternatives.',
      'poe league 3.27 growth cycles let you favour specific base categories over time.',
    ],
    image: '/images/foulborn-loot.jpg',
  },
  {
    title: 'Living Graft Equipment',
    subtitle: 'poe league 3.27 combat mutations',
    description:
      'poe league 3.27 grafts are biomechanical hand-slot augments that grant passive stats and powerful reactive skills like Heart of Flame novas or defensive wards. Two grafts can be equipped and tuned with graft-only currency.',
    points: [
      'Unlock 16 poe league 3.27 graft archetypes ranging from damage pulses to guard effects.',
      'poe league 3.27 graft-only currency modifies cooldowns, trigger conditions, and stat packages.',
      'Pair poe league 3.27 grafts with Bloodline ascendancies to fill defensive or utility gaps.',
    ],
    image: '/images/graft-equipment.jpg',
  },
]
