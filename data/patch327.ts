export type PatchFeedItem = {
  id: string
  date: string // ISO date
  title: string
  type: 'reveal' | 'notes' | 'release' | 'hotfix' | 'manifesto' | 'reminder'
  summary: string
  bullets?: string[]
  image?: string
  sourceUrl?: string
}

// Chronological feed for patch notes poe 3.27
export const patch327Feed: PatchFeedItem[] = [
  {
    id: '2025-10-23-reveal',
    date: '2025-10-23',
    title: 'Reveal Livestream',
    type: 'reveal',
    summary:
      'Official Keepers of the Flame reveal sets expectations for patch notes poe 3.27: Hive defense league, Genesis Tree loot, Bloodline ascendancies, and supporter packs.',
    bullets: [
      "First gameplay of Hive sieges and Dreamer's Flame escort loops.",
      'Genesis Tree hub preview with branch unlocks and graft sockets.',
      'Ten Bloodline ascendancies teased with mixed-tree allocation.',
    ],
    image: '/images/keepers-encounter.jpg',
    sourceUrl: 'https://www.youtube.com/',
  },
  {
    id: '2025-10-28-notes-preview',
    date: '2025-10-28',
    title: 'Patch Notes Preview',
    type: 'notes',
    summary:
      'Pre-launch notes outline patch notes poe 3.27 headliners: spell suppression at 40%, wand gem suite, Breach rings, and early trade plans.',
    bullets: [
      'Suppression mitigation at 40% and minions auto-hit baseline.',
      'Somatic Shell, Kinetic Fusillade, and Kinetic Rain join wand builds.',
      'Breach ring bases and Foulborn implants set new crafting paths.',
    ],
    image: '/images/keepers-kineticrain.jpg',
    sourceUrl: 'https://www.poewiki.net/wiki/Version_3.27.0',
  },
  {
    id: '2025-10-31-launch',
    date: '2025-10-31',
    title: 'League Launch (NA/EU)',
    type: 'release',
    summary:
      'Patch notes poe 3.27 goes live on PC for Americas and Europe. Queue advisories, download mirrors, and first-night stability notes posted to the live blog.',
    bullets: [
      'Windows patcher fixes and instance reset tips (ctrl+click).',
      'Supporter packs available; post-update hotfix window announced.',
    ],
    image: '/images/keepers-supporter.jpg',
    sourceUrl: 'https://www.pathofexile.com/',
  },
  {
    id: '2025-11-01-oce',
    date: '2025-11-01',
    title: 'League Launch (OCE/Asia)',
    type: 'release',
    summary:
      'Regional rollouts continue. patch notes poe 3.27 private leagues and race events open following the first reset for local realms.',
    bullets: ['Console parity ETA reiterated in forum posts.'],
    image: '/images/keepers-async.jpg',
    sourceUrl: 'https://www.pathofexile.com/',
  },
  {
    id: '2025-11-01-hotfix-6',
    date: '2025-11-01',
    title: 'Hotfix 6',
    type: 'hotfix',
    summary:
      "Hotfix 6 for patch notes poe 3.27 extends Unstable Breach timers, guarantees Vruun's ring, and corrects Nebulis rolls. Trade filter stability improved.",
    bullets: [
      'Unstable Breach collapse delayed to 40% progress.',
      "Vruun's breach ring drops on first clean Hive clear.",
      'Nebulis min/max rolls match pre-launch preview.',
    ],
    image: '/images/graft-equipment.jpg',
    sourceUrl: 'https://www.pathofexile.com/forum',
  },
  {
    id: '2025-11-02-hotfix-7',
    date: '2025-11-02',
    title: 'Hotfix 7',
    type: 'hotfix',
    summary:
      'Hotfix 7 for patch notes poe 3.27 clears Incursion Breach soft-locks, rebalances Delve reward seeds, and restores async trade filters.',
    bullets: [
      'Incursion Breach rooms no longer block logbook rewards.',
      'Delve side-areas align currency bundles with depth.',
      'Market socket/link filters stable for wand bases.',
    ],
    image: '/images/keepers-uberboss.jpg',
    sourceUrl: 'https://www.pathofexile.com/forum',
  },
]

