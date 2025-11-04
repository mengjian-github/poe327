'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Copy, Link as LinkIcon, RefreshCcw, Save } from 'lucide-react'

import { Card } from '@/components/ui'

type Division = 'Research' | 'Fortification' | 'Intervention' | 'Transportation'

type DivisionPlan = {
  leader: string
  members: string[] // 2 non-leader members
  note?: string
}

type BoardState = Record<Division, DivisionPlan>

const divisionOrder: Division[] = ['Research', 'Fortification', 'Intervention', 'Transportation']

const MEMBERS = [
  'Aisling (Leader)',
  'Aisling',
  'Janus (Leader)',
  'Janus',
  'It That Fled',
  'Hillock (Leader)',
  'Hillock',
  'Guff',
  'Leo',
  'Vorici',
  'Vagan (Leader)',
  'Vagan',
  'Korell',
  'Cameria (Leader)',
  'Cameria',
  'Riker',
  'Jorgin',
  'Elreon',
  'Gravicius (Leader)',
  'Gravicius',
  'Rin (Leader)',
  'Rin',
  'Tora',
  'Haku',
]

// Minimal reward hints used in the table footers
const rewardHints: Record<string, string> = {
  Aisling: 'Veiled chaos + bench resets',
  Janus: 'Stacked decks + divination cards',
  'It That Fled': 'Expedition/breach/harbinger splinters',
  Hillock: '28% quality crafts',
  Guff: 'Crafting session (currency options)',
  Leo: 'Breach/legion map value',
  Vorici: 'White sockets bench',
  Vagan: 'Exalt slam bench',
  Korell: 'Expedition currency/logbooks',
  Cameria: 'Gilded/winged scarabs + incubators',
  Riker: 'Double reward options',
  Jorgin: 'Talismans + beast-crafted amulets',
  Elreon: 'Relic keys, map/fragment scarabs',
  Gravicius: 'Strongbox supply for bosses',
  Rin: 'Cartography/map returns',
  Tora: 'Sulphite/expedition synergy',
  Haku: 'Map fragments & crafting bases',
}

type Preset = {
  name: string
  focus: string
  description: (keyPhrase: string) => string
  board: BoardState
}

const presets: Preset[] = [
  {
    name: 'Veiled Chaos Engine',
    focus: 'Currency + Veil benches',
    description: (k) => `Start this ${k} preset when you want nonstop veiled chaos before the economy stabilises.`,
    board: {
      Research: { leader: 'Aisling', members: ['It That Fled', 'Janus'], note: 'Keep Aisling Trusted with Janus.' },
      Fortification: { leader: 'Hillock', members: ['Guff', 'Leo'], note: 'Rush 28% flask quality early.' },
      Intervention: { leader: 'Cameria', members: ['Riker', 'Jorgin'], note: 'Double loot via Riker when juiced.' },
      Transportation: { leader: 'Gravicius', members: ['Rin', 'Tora'], note: 'Swap Rin to Intervention if needed.' },
    },
  },
  {
    name: 'Scarabs & Invitations',
    focus: 'Map sustain + Influenced drops',
    description: (k) => `Pick this ${k} board for Awakener/Maven rotations with scarabs + invitations.`,
    board: {
      Research: { leader: 'Janus', members: ['It That Fled', 'Haku'], note: 'Rival Janus with Cameria.' },
      Fortification: { leader: 'Hillock', members: ['Guff', 'Vorici'], note: 'White-socket uniques with Vorici.' },
      Intervention: { leader: 'Cameria', members: ['Hillock', 'Elreon'], note: 'Elder/Shaper scarabs uptime.' },
      Transportation: { leader: 'Rin', members: ['Tora', 'Korell'], note: 'Cartography + Expedition pairing.' },
    },
  },
  {
    name: 'Boss Rush & Crafting',
    focus: 'Bench tech + boss fragments',
    description: (k) => `Use this ${k} once atlas is juiced and you want fragments without losing benches.`,
    board: {
      Research: { leader: 'Vagan', members: ['Aisling', 'It That Fled'], note: 'Rotate Vagan for exalt slam.' },
      Fortification: { leader: 'Hillock', members: ['Guff', 'Korell'], note: '28% crafts + Expedition.' },
      Intervention: { leader: 'Cameria', members: ['Janus', 'Jorgin'], note: 'Scarabs + incubators for bossing.' },
      Transportation: { leader: 'Gravicius', members: ['Elreon', 'Tora'], note: 'Reliquary + basic currency.' },
    },
  },
]

function encodeState(state: BoardState): string {
  const json = JSON.stringify(state)
  // Base64 without external deps; not compressed to keep things simple.
  if (typeof window === 'undefined') return ''
  return btoa(unescape(encodeURIComponent(json)))
}

function decodeState(s: string): BoardState | null {
  try {
    const json = decodeURIComponent(escape(atob(s)))
    const obj = JSON.parse(json)
    return obj
  } catch {
    return null
  }
}

function memberBaseName(name: string) {
  return name.replace(' (Leader)', '')
}

export function SyndicateCheatSheetBuilder({ keyPhrase }: { keyPhrase: string }) {
  const [presetIndex, setPresetIndex] = useState(0)
  const [board, setBoard] = useState<BoardState>(presets[0].board)
  const preset = presets[presetIndex]

  // Load sharable state from URL ?s=
  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    const s = url.searchParams.get('s')
    if (s) {
      const decoded = decodeState(s)
      if (decoded) setBoard(decoded)
    }
  }, [])

  const usedMembers = useMemo(() => {
    const set = new Set<string>()
    divisionOrder.forEach((d) => {
      set.add(board[d].leader)
      board[d].members.forEach((m) => set.add(m))
    })
    return set
  }, [board])

  const pickable = (current?: string) =>
    MEMBERS.filter((m) => m === current || !usedMembers.has(m))

  const applyPreset = (i: number) => {
    setPresetIndex(i)
    setBoard(presets[i].board)
  }

  const prev = () => applyPreset((presetIndex - 1 + presets.length) % presets.length)
  const next = () => applyPreset((presetIndex + 1) % presets.length)

  const reset = () => applyPreset(0)

  const copyJSON = async () => {
    const json = JSON.stringify(board, null, 2)
    await navigator.clipboard.writeText(json)
  }

  const copyLink = async () => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('s', encodeState(board))
    await navigator.clipboard.writeText(url.toString())
  }

  return (
    <div className="card space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <span className="pill w-fit bg-brand/20 text-brand">
            <span>{preset.focus}</span>
          </span>
          <h3 className="text-2xl font-semibold text-white">Custom Cheatsheet Builder</h3>
          <p className="text-sm text-white/70">{preset.description(keyPhrase)}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn btn-ghost" type="button" onClick={prev} aria-label="Previous preset">
            <ArrowLeft size={18} />
            <span>Prev</span>
          </button>
          <div className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/60">
            Preset {presetIndex + 1} / {presets.length}
          </div>
          <button className="btn btn-ghost" type="button" onClick={next} aria-label="Next preset">
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-ghost" type="button" onClick={reset} aria-label="Reset to default">
            <RefreshCcw size={16} />
            <span>Reset</span>
          </button>
          <button className="btn btn-ghost" type="button" onClick={copyJSON} aria-label="Copy JSON">
            <Copy size={16} />
            <span>Copy JSON</span>
          </button>
          <button className="btn btn-ghost" type="button" onClick={copyLink} aria-label="Copy share link">
            <LinkIcon size={16} />
            <span>Share Link</span>
          </button>
        </div>
      </header>

      <div id="cheatsheet-grid" className="grid gap-5 md:grid-cols-2">
        {divisionOrder.map((division) => {
          const plan = board[division]
          const updateLeader = (val: string) =>
            setBoard((b) => ({ ...b, [division]: { ...b[division], leader: val } }))
          const updateMember = (i: number, val: string) =>
            setBoard((b) => {
              const nextMembers = [...b[division].members]
              nextMembers[i] = val
              return { ...b, [division]: { ...b[division], members: nextMembers } }
            })
          const updateNote = (val: string) => setBoard((b) => ({ ...b, [division]: { ...b[division], note: val } }))

          const leaderOptions = pickable(plan.leader)
          const m0Options = pickable(plan.members[0])
          const m1Options = pickable(plan.members[1])

          // Derive a compact reward hint based on selected members
          const hintMembers = [plan.leader, ...plan.members].map(memberBaseName)
          const hints = hintMembers
            .map((m) => rewardHints[m] ? `${m}: ${rewardHints[m]}` : null)
            .filter(Boolean)
            .join(' · ')

          return (
            <Card
              key={division}
              title={`${division} Safehouse`}
              eyebrow={<span className="text-xs font-semibold text-brand">Editable slots</span>}
              footer={<span className="text-xs text-white/70">{hints || 'Select members to see reward hints.'}</span>}
            >
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wide text-white/60">Leader</label>
                <select
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  value={plan.leader}
                  onChange={(e) => updateLeader(e.target.value)}
                >
                  {leaderOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>

                <label className="block text-xs uppercase tracking-wide text-white/60">Member</label>
                <select
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  value={plan.members[0]}
                  onChange={(e) => updateMember(0, e.target.value)}
                >
                  {m0Options.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>

                <label className="block text-xs uppercase tracking-wide text-white/60">Member</label>
                <select
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  value={plan.members[1]}
                  onChange={(e) => updateMember(1, e.target.value)}
                >
                  {m1Options.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>

                <label className="block text-xs uppercase tracking-wide text-white/60">Note</label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  placeholder="Trusted links, swap timing, etc."
                  value={plan.note || ''}
                  onChange={(e) => updateNote(e.target.value)}
                />
              </div>
            </Card>
          )
        })}
      </div>

      <footer className="flex flex-wrap items-center gap-2">
        <button className="btn" type="button" onClick={copyJSON}>
          <Save size={16} />
          <span>Copy as JSON</span>
        </button>
        <button className="btn" type="button" onClick={copyLink}>
          <LinkIcon size={16} />
          <span>Copy Share Link</span>
        </button>
        <span className="text-xs text-white/50">
          Tip: The share link encodes your {keyPhrase} selections so teammates can load the same board.
        </span>
      </footer>
    </div>
  )
}
