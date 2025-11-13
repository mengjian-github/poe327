import type { Metadata } from 'next'
import Link from 'next/link'

import { ArticleTOC } from '@/components/article-toc'
import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { StatCallout } from '@/components/visual/StatCallout'
import type { ChallengeEntry } from '@/data/challenges'
import { challengeBuckets, challengeEntries, challengeRewardTracks, hiveCentricChallengeIds } from '@/data/challenges'

const totalChallenges = challengeEntries.length
const atlasChallengeCount = challengeBuckets
  .filter((bucket) => bucket.id !== 'campaign')
  .reduce((acc, bucket) => acc + bucket.challengeIds.length, 0)
const hiveChallengeCount = hiveCentricChallengeIds.length

const heroMetrics = [
  { label: 'Full set requirement', value: '36 / 40 challenges' },
  { label: 'Atlas-weighted tasks', value: `${atlasChallengeCount} challenges` },
  { label: 'Hive-focused tasks', value: `${hiveChallengeCount} challenges` },
]

const statCallouts = [
  {
    title: 'Front-loaded cosmetics',
    text: 'The PoE 3.27 Challenge Guide hands you boots at 12 completions and gloves at 20, so you can finish the first two rewards while you are still cleaning up Acts and early Hive missions.',
  },
  {
    title: 'Atlas is 70% of the grind',
    text: `The PoE 3.27 Challenge Guide shows ${atlasChallengeCount} of ${totalChallenges} challenges sitting on the Atlas, so stockpile scarabs, Horizon Orbs, and Kirac missions before pushing red maps.`,
  },
  {
    title: 'Hive double-dips',
    text: `The PoE 3.27 Challenge Guide highlights ${hiveChallengeCount} Hive objectives (Otherworldly Obstacles through Sinew Swarms) demanding Graftblood, Wombgifts, or Hive fortresses—schedule dedicated Hive sessions so you do not stall Atlas Awe.`,
  },
]

const tocItems: { id: string; text: string; level: 2 | 3 }[] = [
  { id: 'rewards', text: 'PoE 3.27 Challenge Guide rewards ladder', level: 2 },
  { id: 'route', text: 'PoE 3.27 Challenge Guide route buckets', level: 2 },
  { id: 'library', text: 'PoE 3.27 Challenge Guide library', level: 2 },
]

const entriesById = new Map<number, ChallengeEntry>(challengeEntries.map((entry) => [entry.id, entry]))
const pageTitle = 'PoE 3.27 Challenge Guide – Rewards & Route'

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Structured checklist for all 40 PoE 3.27 Keeper of the Flame challenges: reward ladder, Atlas buckets, Hive priorities, and per-challenge objectives.',
  alternates: { canonical: 'https://poe327.net/challenge' },
  openGraph: {
    title: pageTitle,
    description:
      'Visual ladder for the Keeper of the Flame challenge rewards plus a bucketed route that splits campaign, Atlas sustain, Hive, and pinnacle grinds.',
    url: 'https://poe327.net/challenge',
    type: 'article',
    images: [{ url: '/images/keepers-supporter.jpg', width: 1200, height: 630, alt: 'Keeper of the Flame challenge rewards' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'All 40 challenges organized into visual buckets with requirement summaries and Hive/Atlas callouts.',
    images: ['/images/keepers-supporter.jpg'],
  },
}

export default function ChallengePage() {
  return (
    <>
      <PageHero
        title="PoE 3.27 Challenge Guide"
        description="The PoE 3.27 Challenge Guide routes all 40 Keeper of the Flame challenges through a reward ladder, Atlas/Hive buckets, and per-objective cheat cards you can scan mid-league. Keep this PoE 3.27 Challenge Guide pinned when your squad calls plays."
        image="/images/keepers-supporter.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="#route" className="btn btn-primary">
              Plan route
            </Link>
            <Link href="#library" className="btn btn-ghost">
              Browse all 40
            </Link>
          </div>
        }
      />

      <div className="container">
        <LastUpdated date="November 13, 2025 — PoE 3.27 Challenge Guide compiled from reveal notes, dev posts, and challenge trackers" />
      </div>

      <section className="container grid gap-10 py-16 lg:grid-cols-[3fr,1fr]" id="rewards">
        <div className="space-y-10">
          <div>
            <div className="kicker">PoE 3.27</div>
            <h2 className="h2 text-white">PoE 3.27 Challenge Guide Rewards Ladder</h2>
            <p className="subtle text-base md:text-lg">
              Compare League vs. Ruthless payouts directly inside the PoE 3.27 Challenge Guide and track which milestones you can realistically clear each phase. Hover the notes to remind the team what kind of content unlocks each reward.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
              <table className="w-full text-left text-sm text-white/80">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-white/50">
                    <th className="px-5 py-3">Mode</th>
                    <th className="px-5 py-3">Threshold</th>
                    <th className="px-5 py-3">Reward</th>
                    <th className="px-5 py-3">Route note</th>
                  </tr>
                </thead>
                <tbody>
                  {challengeRewardTracks.flatMap((track) =>
                    track.steps.map((step) => (
                      <tr key={`${track.mode}-${step.threshold}`} className="border-t border-white/5">
                        <td className="px-5 py-4 text-white/60">{track.mode}</td>
                        <td className="px-5 py-4 text-white">{step.threshold} challenges</td>
                        <td className="px-5 py-4 font-semibold text-white">{step.reward}</td>
                        <td className="px-5 py-4 text-white/70">{step.note}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {statCallouts.map((stat) => (
              <StatCallout key={stat.title} title={stat.title} text={stat.text} />
            ))}
          </div>
        </div>
        <ArticleTOC items={tocItems} />
      </section>

      <Section
        id="route"
        title="PoE 3.27 Challenge Guide Route Buckets"
        desc="Each bucket represents a clean slice of the PoE 3.27 Challenge Guide. Use them as sprint goals for your squad so you never wonder where to send players next."
      >
        <div className="space-y-8">
          {challengeBuckets.map((bucket) => {
            const bucketChallenges = bucket.challengeIds
              .map((id) => entriesById.get(id))
              .filter((entry): entry is ChallengeEntry => Boolean(entry))
            return (
              <Card
                key={bucket.id}
                title={`${bucket.title} (${bucket.challengeIds.length} challenges)`}
                eyebrow={<span className="pill bg-brand/15 text-brand">{bucket.payoff}</span>}
              >
                <p className="text-white/75">{bucket.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bucket.focus.map((focus) => (
                    <span key={focus} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                      {focus}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 md:grid-cols-2">
                  {bucketChallenges.map((challenge) => (
                    <li key={challenge!.id} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="text-xs text-white/50">#{challenge!.id}</span>
                      <span>{challenge!.title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </Section>

      <Section
        id="library"
        title="PoE 3.27 Challenge Guide Library"
        desc="Detailed objectives for every challenge live inside the PoE 3.27 Challenge Guide. Use it as a worksheet or pair it with your planner/spreadsheet to track squad progress."
      >
        <div className="space-y-12">
          {challengeBuckets.map((bucket) => (
            <div key={`bucket-${bucket.id}`} id={`bucket-${bucket.id}`} className="space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand">Bucket</div>
                <h3 className="text-2xl font-bold text-white">{bucket.title}</h3>
                <p className="text-sm text-white/70">
                  {bucket.payoff} This PoE 3.27 Challenge Guide bucket keeps squads aligned.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {bucket.challengeIds.map((id) => {
                  const entry = entriesById.get(id)
                  if (!entry) return null
                  return <ChallengeCard key={entry.id} entry={entry} />
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function ChallengeCard({ entry }: { entry: ChallengeEntry }) {
  const hasDescription = entry.description && entry.description.trim().length > 0
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-inner shadow-black/30">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
        <span>Challenge #{entry.id}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/70">{entry.requirement}</span>
      </div>
      <h4 className="mt-3 text-xl font-semibold text-white">{entry.title}</h4>
      {hasDescription && <p className="mt-2 text-sm text-white/70">{entry.description}</p>}
      {entry.objectives.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {entry.objectives.map((objective, index) => (
            <li key={`${entry.id}-${index}`} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand/70" />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
