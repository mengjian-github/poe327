'use client'

import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Card } from '@/components/ui'

type Division = 'Research' | 'Fortification' | 'Intervention' | 'Transportation'

type DivisionPlan = {
  members: string[]
  safehouse: string
  tip: string
}

type BoardPreset = {
  name: string
  focus: string
  description: (keyPhrase: string) => string
  divisions: Record<Division, DivisionPlan>
}

const divisionOrder: Division[] = ['Research', 'Fortification', 'Intervention', 'Transportation']

const boardPresets: BoardPreset[] = [
  {
    name: 'Veiled Chaos Engine',
    focus: 'Currency + Veil benches',
    description: (keyPhrase) =>
      `Spin up this ${keyPhrase} preset when you want nonstop veiled chaos orbs before the economy stabilises.`,
    divisions: {
      Research: {
        members: ['Aisling (Leader)', 'It That Fled', 'Janus'],
        safehouse: '4 veiled chaos orbs + crafting bench unlocks',
        tip: 'Keep Aisling Trusted with Janus so she cycles back if demoted.',
      },
      Fortification: {
        members: ['Hillock', 'Guff', 'Leo'],
        safehouse: 'Quality boosts + Betrayal Scarabs',
        tip: 'Run Hillock for 28% flask quality before flushing the safehouse.',
      },
      Intervention: {
        members: ['Cameria', 'Riker', 'Jorgin'],
        safehouse: 'Divination + Harbinger Scarabs',
        tip: 'Riker’s double loot option accelerates scarab density.',
      },
      Transportation: {
        members: ['Gravicius', 'Rin', 'Tora'],
        safehouse: 'Fossils + Cartography Scarabs',
        tip: 'If maps overflow, swap Rin into Intervention for fragment rerolls.',
      },
    },
  },
  {
    name: 'Scarabs & Invitations',
    focus: 'Map sustain + Influenced drops',
    description: (keyPhrase) =>
      `Pick this ${keyPhrase} board when you pivot into Awakener and Maven rotations and need scarabs plus invitations.`,
    divisions: {
      Research: {
        members: ['Janus (Leader)', 'It That Fled', 'Haku'],
        safehouse: 'Stacked decks + breach & legion splinters',
        tip: 'Rival Janus with Cameria so div cards don’t fall off.',
      },
      Fortification: {
        members: ['Guff', 'Vagan', 'Vorici'],
        safehouse: 'Weapon/armour quality + double scarabs',
        tip: 'Vorici bench lets you white-socket uniques between invitations.',
      },
      Intervention: {
        members: ['Cameria', 'Hillock', 'Elreon'],
        safehouse: 'Elder/Shaper scarabs + uniques',
        tip: 'Elreon at rank 3 feeds Graceful gambit watchstones to resell.',
      },
      Transportation: {
        members: ['Rin (Leader)', 'Tora', 'Korell'],
        safehouse: 'Cartography + Expedition logbooks',
        tip: 'Keep Rin Trusted with Vorici for extra map crafted mods.',
      },
    },
  },
  {
    name: 'Boss Rush & Crafting',
    focus: 'Bench tech + boss fragments',
    description: (keyPhrase) =>
      `Use this ${keyPhrase} setup once your atlas is juiced and you want boss fragments without losing bench value.`,
    divisions: {
      Research: {
        members: ['Aisling', 'Vagan (Leader)', 'It That Fled'],
        safehouse: 'Veiled augments + pure breachstones',
        tip: 'Rotate Vagan to leader for the guaranteed exalt slam bench.',
      },
      Fortification: {
        members: ['Hillock (Leader)', 'Guff', 'Korell'],
        safehouse: '28% quality crafts + Expedition currency',
        tip: 'Demote Korell if Expedition patches slow down logbook drops.',
      },
      Intervention: {
        members: ['Cameria (Leader)', 'Janus', 'Jorgin'],
        safehouse: 'Breach & Legion scarabs + unique incubators',
        tip: 'Cameria leader yields Mastermind sulphite; run fast if Delve-focused.',
      },
      Transportation: {
        members: ['Elreon', 'Gravicius (Leader)', 'Tora'],
        safehouse: 'Reliquary scarabs + basic currency',
        tip: 'Gravicius leader keeps Betrayal strongboxes stocked for bosses.',
      },
    },
  },
]

export function SyndicateBoardPlanner({ keyPhrase }: { keyPhrase: string }) {
  const [presetIndex, setPresetIndex] = useState(0)

  const preset = boardPresets[presetIndex]
  const total = boardPresets.length

  const memoizedDivisions = useMemo(
    () =>
      divisionOrder.map((division) => ({
        division,
        plan: preset.divisions[division],
      })),
    [preset],
  )

  const nextPreset = () => {
    setPresetIndex((prev) => (prev + 1) % total)
  }

  const prevPreset = () => {
    setPresetIndex((prev) => (prev - 1 + total) % total)
  }

  return (
    <div className="card space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <span className="pill w-fit bg-brand/20 text-brand">
            <Sparkles size={16} />
            <span>{preset.focus}</span>
          </span>
          <h3 className="text-2xl font-semibold text-white">{preset.name}</h3>
          <p className="text-sm text-white/70">{preset.description(keyPhrase)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost" type="button" onClick={prevPreset} aria-label="Previous board preset">
            <ArrowLeft size={18} />
            <span>Prev</span>
          </button>
          <div className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/60">
            Preset {presetIndex + 1} / {total}
          </div>
          <button className="btn btn-ghost" type="button" onClick={nextPreset} aria-label="Next board preset">
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {memoizedDivisions.map(({ division, plan }) => (
          <Card
            key={division}
            title={`${division} Safehouse`}
            eyebrow={<span className="text-xs font-semibold text-brand">{plan.safehouse}</span>}
            footer={<span>{plan.tip}</span>}
          >
            <p className="text-xs uppercase tracking-wide text-white/60">Members</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
              {plan.members.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
