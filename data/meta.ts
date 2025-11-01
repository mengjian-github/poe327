export type MetaBuild = {
  title: string
  ascendancy: string
  role: 'Mapper'|'Boss'|'All-Round'
  tier: 'S'|'A'|'B'
  guide?: string
}

export const lastUpdated = '2025-11-01'

export const meta: MetaBuild[] = [
  { title: 'Explosive Trap Saboteur', ascendancy:'Shadow → Saboteur', role:'Boss', tier:'S', guide:'https://example.com/guide1' },
  { title: 'Toxic Rain Pathfinder', ascendancy:'Ranger → Pathfinder', role:'All-Round', tier:'S', guide:'https://example.com/guide2' },
  { title: 'RF Juggernaut', ascendancy:'Marauder → Juggernaut', role:'Mapper', tier:'A', guide:'https://example.com/guide3' },
  { title: 'Detonate Dead Necromancer', ascendancy:'Witch → Necromancer', role:'Boss', tier:'A', guide:'https://example.com/guide4' },
]
