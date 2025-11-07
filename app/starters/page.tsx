import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { starterGuides } from '@/data/starter-guides'

export const metadata: Metadata = {
  title: 'PoE 3.27 Starters — Beginner-Friendly Build Picks',
  description:
    'Curated PoE 3.27 league starters with roles, attributes, summaries, and POB links. Filter by archetype and open a focused detail page per build.',
  alternates: { canonical: 'https://poe327.net/starters' },
}

const heroMetrics = [
  { label: 'Archetypes', value: 'Melee · Ranged · Caster · Summoner' },
  { label: 'Attributes', value: 'Str · Dex · Int · Hybrid' },
  { label: 'Detail pages', value: 'One page per starter' },
]

export default function StartersIndexPage() {
  return (
    <>
      <PageHero
        title="PoE 3.27 Starters — Beginner Build Picks"
        description="Pick a forgiving, well‑tested starter with clear upgrades. Each card links to a detailed page and a POB for quick planning."
        image="/images/poe327-hero.webp"
        kicker="Build Hub"
        metrics={heroMetrics}
        actions={<Link href="/getting-started" className="btn btn-ghost">Getting Started</Link>}
      />

      <div className="container">
        <LastUpdated date="Nov 2025 — refreshed summaries and links" />
      </div>

      <Section id="grid" title="Browse Starters" desc="Click a card to open the in‑depth guide or use the POB to preview trees and gear.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {starterGuides.map((g) => (
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
      </Section>
    </>
  )
}

