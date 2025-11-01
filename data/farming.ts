export type FarmingStrategy = {
  title: string
  tier: 'Starter' | 'Progression' | 'Endgame'
  investment: 'Low' | 'Average' | 'High'
  profit: 'Solid' | 'High' | 'Explosive'
  focus: string
  mapSetup: string
  tips: string[]
  link: string
}

export const farmingStrategies: FarmingStrategy[] = [
  {
    title: 'Memory Thread Rush',
    tier: 'Progression',
    investment: 'Low',
    profit: 'Solid',
    focus:
      'Chain Eagon’s Memory Threads in Searing Exarch-influenced T16 Jungle Valley to print Grand Eldritch Embers while hunting Incarnation of Dread.',
    mapSetup:
      'T16 Jungle Valley • Searing Exarch • Kirac Heist (3 Smuggler’s Caches) • Sulphite & Domination Scarabs.',
    tips: [
      'Stockpile map juice before starting so you can run 10–15 maps in a row.',
      'Prioritise Grand/Greater Eldritch Ember altar choices over short-term currency.',
      'Defer An Audience With The King from Nameless Rituals, then cash it in batches.',
    ],
    link: '#memory-thread',
  },
  {
    title: 'Corrupted Essence Barrage',
    tier: 'Endgame',
    investment: 'Average',
    profit: 'Explosive',
    focus:
      'Spam T16 Strand or Underground Sea with Essence Scarab of Stability to turn MEDS essences into Corrupted top-tier crafts.',
    mapSetup:
      'T16 Strand/Underground Sea • Kirac Essence (+3) • Essence Scarabs (Calcification/Ascent/Stability) • Optional Searing Exarch.',
    tips: [
      'Use Vaal Orbs on every Misery/Envy/Dread/Scorn crystal after trapping them.',
      'Harvest bench re-rolls squeeze extra value out of Foul Horror/Delirium hits.',
      'Sell rogue markers, ilvl 83+ contracts, and blueprints in bulk via trade listings.',
    ],
    link: '#corrupted-essence',
  },
  {
    title: 'Deafening Essence Ramp',
    tier: 'Starter',
    investment: 'Average',
    profit: 'High',
    focus:
      'City Square and Underground Sea with Crystal Resonance scale Deafening essence drops for early league liquidity.',
    mapSetup:
      'T7 City Square / T10 Underground Sea • Kirac Essence (+3) • Essence Scarabs (Calcification/Ascent/Adaptation) • Scarab of Adversaries.',
    tips: [
      'Kill map bosses last to benefit from Crystal Resonance extra essence stacks.',
      'Skip corrupting essences — Crystal Resonance blocks the upgrade to Corrupted.',
      'Cull beasts if they slow you down; red beasts are optional profit.',
    ],
    link: '#deafening-essence',
  },
  {
    title: 'Red Map Bestiary Route',
    tier: 'Endgame',
    investment: 'Low',
    profit: 'High',
    focus:
      'Tier 14+ strand/beach/dunes loops with Bestiary Scarabs to capture red beasts like Black Mórrigan, Vivid Vulture, and Farric Tiger Alpha.',
    mapSetup:
      'T14+ Strand/Beach/Dunes • Bestiary Scarab of the Herd x2 • Scarab of Duplicating • Optional Kalguuran Scarab, Settlers map device.',
    tips: [
      'Memorise key red beasts in the Menagerie so you can prioritise them fast in-map.',
      'Starfall Crater encounters can drop Svalinn; check when Settlers device is active.',
      'Send surplus ore shipments for tattoo chances while sulphite veins refill supplies.',
    ],
    link: '#red-map-bestiary',
  },
]
