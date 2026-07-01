import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHero } from '@/components/page-hero'
import { LastUpdated, Section } from '@/components/ui'
import { starterGuides } from '@/data/starter-guides'
import { StartersFilter } from '@/components/starters-filter'
import { TrackedLink } from '@/components/tracked-link'

export const metadata: Metadata = {
  title: 'PoE 3.27 Starters — Beginner-Friendly Build Picks',
  description:
    'Curated PoE 3.27 league starters with roles, attributes, summaries, and POB links. Filter by archetype and open a focused detail page per build.',
  alternates: { canonical: 'https://poe327.net/starters' },
  openGraph: {
    title: 'PoE 3.27 Starters — Beginner-Friendly Build Picks',
    description:
      'Curated PoE 3.27 league starters with roles, attributes, summaries, and POB links. Filter by archetype and open a focused detail page per build.',
    url: 'https://poe327.net/starters',
    siteName: 'poe327',
    type: 'website',
    images: [
      {
        url: '/images/poe327-hero.webp',
        width: 1200,
        height: 630,
        alt: 'PoE 3.27 Keepers of the Flame Meta Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE 3.27 Starters — Beginner-Friendly Build Picks',
    description:
      'Filter forgiving PoE 3.27 starter builds by archetype and attributes, then dive into full writeups with POB links.',
    images: ['/images/poe327-hero.webp'],
  },
}

const heroMetrics = [
  { label: 'Archetypes', value: 'Melee · Ranged · Caster · Summoner' },
  { label: 'Attributes', value: 'Str · Dex · Int · Hybrid' },
  { label: 'Detail pages', value: 'One page per starter' },
]

const personaPicks = [
  {
    persona: 'Brand-new / safe mapper',
    slug: 'boneshatter-juggernaut',
    why: 'Durable, simple gearing, and forgiving mistakes while learning PoE 3.27 systems.',
  },
  {
    persona: 'Fast bow league start',
    slug: 'lightning-arrow-deadeye',
    why: 'High-speed clear for players who want campaign tempo and quick atlas progression.',
  },
  {
    persona: 'Low-button summoner',
    slug: 'poison-srs-necromancer',
    why: 'Comfortable bossing and hands-off damage when you want safer first-week progression.',
  },
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

      <Section
        id="persona-top3"
        title="If you are unsure, start with these Top 3 personas"
        desc="This gives undecided visitors a default next step before the full grid. Each open is tracked as starter_card_open for post-optimization rerun evidence."
        kicker="Persona Top3"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {personaPicks.map((pick, index) => {
            const starter = starterGuides.find((guide) => guide.slug === pick.slug)
            if (!starter) return null

            return (
              <article key={pick.slug} className="flex flex-col rounded-3xl border border-brand/25 bg-brand/10 p-6 text-white/85">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{pick.persona}</span>
                <h2 className="mt-3 text-2xl font-bold text-white">{starter.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{pick.why}</p>
                <p className="mt-3 text-xs text-white/55">{starter.role} · {starter.attribute} · {starter.ascendancy}</p>
                <TrackedLink
                  href={`/starters/${starter.slug}`}
                  eventName="starter_card_open"
                  eventProps={{
                    source_section: 'persona_top3',
                    starter_slug: starter.slug,
                    persona: pick.persona,
                    cta_rank: index + 1,
                    target_url: `/starters/${starter.slug}`,
                  }}
                  className="btn btn-primary mt-5 inline-flex justify-center"
                >
                  Open this starter
                </TrackedLink>
              </article>
            )
          })}
        </div>
      </Section>

      <Section id="grid" title="Browse Starters" desc="Filter by role/attribute or search by skill & ascendancy.">
        <StartersFilter items={starterGuides} />
      </Section>
    </>
  )
}
