'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Guide = {
  slug: string
  title: string
  skill: string
  ascendancy: string
  role: 'Melee' | 'Ranged' | 'Caster' | 'Summoner'
  attribute: 'Strength' | 'Dexterity' | 'Intelligence' | 'Hybrid'
  summary: string
  lastUpdated?: string
  pob?: string
}

const roles = ['All', 'Melee', 'Ranged', 'Caster', 'Summoner'] as const
const attrs = ['All', 'Strength', 'Dexterity', 'Intelligence', 'Hybrid'] as const

export function StartersFilter({ items }: { items: Guide[] }) {
  const [role, setRole] = useState<(typeof roles)[number]>('All')
  const [attr, setAttr] = useState<(typeof attrs)[number]>('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return items.filter((g) => {
      if (role !== 'All' && g.role !== role) return false
      if (attr !== 'All' && g.attribute !== attr) return false
      if (q) {
        const s = q.toLowerCase()
        if (!(`${g.title} ${g.skill} ${g.ascendancy}`.toLowerCase().includes(s))) return false
      }
      return true
    })
  }, [items, role, attr, q])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r}
              className={`pill ${role === r ? 'bg-brand/30 text-brand' : 'bg-white/10 text-white/70'} px-4 py-2`}
              onClick={() => setRole(r)}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {attrs.map((a) => (
            <button
              key={a}
              className={`pill ${attr === a ? 'bg-brand/30 text-brand' : 'bg-white/10 text-white/70'} px-4 py-2`}
              onClick={() => setAttr(a)}
            >
              {a}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search skill, ascendancy, title..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 outline-none placeholder:text-white/40 md:w-80"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((g) => (
          <article key={g.slug} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-6 text-white/85 shadow-xl">
            <Image
              src={
                g.role === 'Melee'
                  ? '/images/starters/melee.svg'
                  : g.role === 'Ranged'
                  ? '/images/starters/ranged.svg'
                  : g.role === 'Caster'
                  ? '/images/starters/caster.svg'
                  : '/images/starters/summoner.svg'
              }
              alt={`${g.title} role art`}
              width={640}
              height={360}
              className="h-36 w-full rounded-2xl object-cover"
            />
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/60">
              <span className="pill bg-white/10 px-3 py-1">{g.role}</span>
              <span className="pill bg-white/10 px-3 py-1">{g.attribute}</span>
              <span className="pill bg-white/10 px-3 py-1">{g.ascendancy}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{g.title}</h3>
            <p className="text-sm leading-relaxed text-white/80">{g.summary}</p>
            <div className="mt-auto flex gap-3">
              <Link href={`/starters/${g.slug}`} className="btn btn-primary btn-sm">Open Guide</Link>
              {g.pob && (
                <a href={g.pob} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  POB
                </a>
              )}
            </div>
            {g.lastUpdated && (
              <p className="text-right text-[11px] text-white/50">Updated {g.lastUpdated}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
