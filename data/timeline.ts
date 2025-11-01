export type TimelineEvent = {
  date: string
  label: string
  description: string
  type: 'reveal' | 'release' | 'patch' | 'reminder'
}

export const timeline: TimelineEvent[] = [
  {
    date: '2025-10-23',
    label: 'Reveal Livestream',
    description:
      'Official Keepers of the Flame showcase with gameplay deep dive, Bloodline previews, and the full league trailer eight days ahead of launch.',
    type: 'reveal',
  },
  {
    date: '2025-10-28',
    label: 'Patch Notes Preview',
    description:
      'Balance manifesto outlining Bloodline unlocks, Assassin rework, and asynchronous trade status to help league-starters lock plans.',
    type: 'patch',
  },
  {
    date: '2025-10-31',
    label: 'League Launch (NA/EU)',
    description:
      '3.27 Keepers of the Flame launches for Americas &amp; Europe regions. Expect a short pre-launch patch window and queue during peak hours.',
    type: 'release',
  },
  {
    date: '2025-11-01',
    label: 'League Launch (OCE/Asia)',
    description:
      'Oceania and Asia realms roll over to 3.27 during local Saturday reset. Race events and private leagues unlock after first daily reset.',
    type: 'release',
  },
  {
    date: '2025-11-05',
    label: 'Day 5 Hotfix Window',
    description:
      'Historically when GGG deploys stabilisation patches: watch for Genesis Tree balance tweaks, Bloodline bugfixes, and trade QoL updates.',
    type: 'reminder',
  },
]
