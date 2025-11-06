import type { Metadata } from 'next'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { LastUpdated } from '@/components/ui'
import { getPatch327Feed } from '@/lib/patch-feed'

const heroMetrics = [
  { label: 'Launch window', value: 'Oct 31 · 12:00 PM PDT · 7:00 PM GMT' },
  { label: 'Latest hotfix', value: 'Hotfix 7 · Nov 2, 2025 · live' },
  { label: 'Bloodline unlocks', value: '10 new secondary ascendancies' },
]

// All previous content removed per request. Timeline-only layout below.

export const metadata: Metadata = {
  title: 'Patch Notes PoE 3.27 Launch Companion',
  description:
    'Keepers of the Flame coverage with live hotfix cadence, league mechanics, loot implants, and Bloodline ascendancy planning for patch notes poe 3.27.',
  alternates: {
    canonical: 'https://poe327.net/patch-notes',
  },
  openGraph: {
    title: 'Patch Notes PoE 3.27 Launch Companion',
    description:
      'Stay current on patch notes poe 3.27 timelines, Hive defence planning, asynchronous trade upgrades, and meta shifts in one dedicated hub.',
    url: 'https://poe327.net/patch-notes',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-supporter.jpg',
        width: 1200,
        height: 630,
        alt: 'Patch notes poe 3.27 Keepers of the Flame hero art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patch Notes PoE 3.27 Launch Companion',
    description:
      'Centralise patch notes poe 3.27 hotfixes, Genesis Tree planning, and Bloodline ascendancies with a field guide built for Keepers squads.',
    images: ['/images/keepers-supporter.jpg'],
  },
}

export default async function PatchNotesPage() {
  const feed = await getPatch327Feed('desc')
  const notes = feed.filter((i) => i.type === 'notes')
  const hotfixes = feed.filter((i) => i.type === 'hotfix')
  return (
    <>
      <PageHero
        title="Patch Notes PoE 3.27 Timeline"
        description="Reverse-chronological feed of patch notes poe 3.27: reveal, notes, launch milestones, and every hotfix, with concise summaries, images, and official source links."
        image="/images/keepers-supporter.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container py-12">
        <LastUpdated date="November 4, 2025 - sources: pathofexile.com forums, dev posts, wiki mirrors" />

        <h2 className="mt-8 text-2xl font-semibold text-white">Pinned Sources</h2>
        <p className="mt-2 text-sm text-white/70">Authoritative links for patch notes poe 3.27. Bookmark these for verification.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {notes.slice(0, 2).map((item) => (
            <article key={`pin-${item.id}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                  >
                    Open
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm text-white/70">{item.summary}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-white">Patch Notes PoE 3.27 – Live Feed</h2>
        <p className="mt-2 text-sm text-white/70">Reverse-chronological updates covering content update posts and every hotfix for patch notes poe 3.27.</p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Hotfix Index</h2>
        <p className="mt-2 text-sm text-white/70">Quick links to individual hotfix entries below.</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {hotfixes.map((h) => (
            <li key={`idx-${h.id}`}>
              <a
                href={`#item-${h.id}`}
                className="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/70 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
              >
                <span>{h.title}</span>
                <span className="text-xs text-white/50">{new Date(h.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </a>
            </li>
          ))}
        </ul>
        <ol className="relative mt-10 space-y-8 border-l border-white/10 pl-6">
          {feed.map((item, index) => (
            <li id={`item-${item.id}`} key={item.id} className="relative">
              <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs text-white/80">
                {index + 1}
              </div>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/60">
                  <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="rounded-full bg-brand/20 px-2 py-0.5 text-brand">{item.type}</span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-white/60">patch notes poe 3.27</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.summary}</p>
                {item.bullets && (
                  <ul className="mt-3 space-y-2 text-sm text-white/65">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 grid gap-4 md:grid-cols-[2fr,1fr]">
                  {item.image && (
                    <div className="relative h-40 w-full overflow-hidden rounded-xl md:h-36">
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 480px, 100vw" />
                    </div>
                  )}
                  <div className="flex items-end justify-end">
                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/70 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
