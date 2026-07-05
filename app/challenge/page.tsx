import type { Metadata } from 'next'
import Script from 'next/script'

import { ArticleTOC } from '@/components/article-toc'
import { PageHero } from '@/components/page-hero'
import { TrackedLink } from '@/components/tracked-link'
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
const siteUrl = 'https://poe327.net'

const nextStepCards = [
  {
    id: 'route_checklist',
    title: 'Plan the 36/40 route',
    href: '#route',
    body: 'Start with bucket goals so your first evening is not spent scanning all 40 cards.',
  },
  {
    id: 'pick_starter',
    title: 'Pick a challenge-safe starter',
    href: '/starters#persona-top3',
    body: 'Open a forgiving starter before committing to Hive, Atlas, or pinnacle-heavy objectives.',
  },
  {
    id: 'patch_recheck',
    title: 'Recheck hotfix impact',
    href: '/patch-notes#hotfix-digest',
    body: 'Verify the latest hotfix before spending currency on a challenge-specific setup.',
  },
]

const faqItems = [
  {
    question: 'What is the fastest PoE 3.27 challenge route for most players?',
    answer:
      'Most players should clear campaign and easy mapping challenges first, then batch Atlas sustain, Hive objectives, and pinnacle attempts after their starter is stable. Use the route buckets instead of reading all 40 objectives in one pass.',
  },
  {
    question: 'When should I start pushing Hive-focused challenges?',
    answer:
      'Start Hive-focused objectives after your build has capped resistances, a stable damage link, and a loot filter strict enough to keep Graftblood sessions clean. Do not force Hive objectives if early hotfixes change encounter difficulty.',
  },
  {
    question: 'Should new players chase 36/40 in PoE 3.27?',
    answer:
      'New players can use 36/40 as a long-term target, but the safer first milestone is the early reward ladder. Pick a durable starter, complete low-friction objectives, then decide whether the Atlas and pinnacle grind is worth the time.',
  },
]

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
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PoE 3.27 Launch Runbook', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'PoE 3.27 Challenge Guide', item: `${siteUrl}/challenge` },
    ],
  }

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan PoE 3.27 challenges',
    description: metadata.description,
    totalTime: 'PT10M',
    step: nextStepCards.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
      url: `${siteUrl}/challenge${step.href.startsWith('#') ? step.href : ''}`,
    })),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <Script id="challenge-breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="challenge-howto-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(howToJsonLd)}
      </Script>
      <Script id="challenge-faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <PageHero
        title="PoE 3.27 Challenge Guide"
        description="The PoE 3.27 Challenge Guide routes all 40 Keeper of the Flame challenges through a reward ladder, Atlas/Hive buckets, and per-objective cheat cards you can scan mid-league. Keep this PoE 3.27 Challenge Guide pinned when your squad calls plays."
        image="/images/keepers-supporter.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
        actions={
          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href="#route"
              eventName="challenge_route_click"
              eventProps={{ source_section: 'challenge_hero', cta_text: 'Plan route', target_url: '#route', cta_rank: 1 }}
              className="btn btn-primary"
            >
              Plan route
            </TrackedLink>
            <TrackedLink
              href="#library"
              eventName="challenge_route_click"
              eventProps={{ source_section: 'challenge_hero', cta_text: 'Browse all 40', target_url: '#library', cta_rank: 2 }}
              className="btn btn-ghost"
            >
              Browse all 40
            </TrackedLink>
          </div>
        }
      />

      <div className="container">
        <LastUpdated date="November 13, 2025 — PoE 3.27 Challenge Guide compiled from reveal notes, dev posts, and challenge trackers" />
      </div>

      <Section
        id="challenge-next-steps"
        title="Choose the next action before browsing all 40 challenges"
        desc="Clarity showed shallow sessions and dead-click risk, so this page now gives visitors three explicit routes before the long library. Each card is tracked separately from raw pageviews."
        kicker="Challenge route selector"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {nextStepCards.map((step, index) => (
            <TrackedLink
              key={step.id}
              href={step.href}
              eventName="challenge_next_step_click"
              eventProps={{ source_section: 'challenge_next_steps', step_id: step.id, cta_text: step.title, target_url: step.href, cta_rank: index + 1 }}
              className="group flex min-h-44 flex-col justify-between rounded-3xl border border-brand/20 bg-brand/10 p-6 text-white/80 transition hover:border-brand/60 hover:bg-brand/15 hover:text-white"
            >
              <span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Step {index + 1}</span>
                <span className="mt-3 block text-2xl font-bold text-white">{step.title}</span>
                <span className="mt-3 block text-sm leading-relaxed text-white/70">{step.body}</span>
              </span>
              <span className="mt-5 text-sm font-bold text-brand transition group-hover:text-white">Open next step →</span>
            </TrackedLink>
          ))}
        </div>
      </Section>

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

      <Section
        id="faq"
        title="PoE 3.27 challenge planning FAQ"
        desc="Short answers for search visitors who need the route before they need every objective."
        kicker="FAQ"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{faq.answer}</p>
            </article>
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
