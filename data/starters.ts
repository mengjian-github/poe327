export type Starter = {
  title: string
  ascendancy: string
  tier: 'S'|'A'|'B'
  pob?: string
  notes?: string
}

export const lastUpdated = '2025-11-01'

export const starters: Starter[] = [
  { title: 'Toxic Rain Pathfinder', ascendancy: 'Ranger → Pathfinder', tier: 'S', pob: 'https://pobb.in/example1', notes: 'Fast mapper, cheap gear, scalable.' },
  { title: 'Boneshatter Juggernaut', ascendancy: 'Marauder → Juggernaut', tier: 'S', pob: 'https://pobb.in/example2', notes: 'Tanky, SSF-friendly, great league start.' },
  { title: 'RF Inquisitor', ascendancy: 'Templar → Inquisitor', tier: 'A', pob: 'https://pobb.in/example3', notes: 'Comfort clear, requires regen management.' },
  { title: 'EK Ignite Elementalist', ascendancy: 'Witch → Elementalist', tier: 'A', pob: 'https://pobb.in/example4', notes: 'Good bosses, moderate gear needs.' },
]
