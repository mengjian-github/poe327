import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { PageHero } from '@/components/page-hero'
import { LastUpdated, Section } from '@/components/ui'
import { starterGuides } from '@/data/starter-guides'
import { StartersFilter } from '@/components/starters-filter'

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

      <Section id="grid" title="Browse Starters" desc="Filter by role/attribute or search by skill & ascendancy.">
        <StartersFilter items={starterGuides} />
      </Section>
    </>
  )
}
