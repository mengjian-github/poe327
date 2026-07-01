import type { Metadata } from 'next'

import Image from 'next/image'
import Script from 'next/script'
import { ArrowRight } from 'lucide-react'
import { TrackedLink } from '@/components/tracked-link'
import { PageHero } from '@/components/page-hero'
import { LastUpdated } from '@/components/ui'
import { getPatch327Feed } from '@/lib/patch-feed'

const siteUrl = 'https://poe327.net'
const officialPatchUrl = 'https://www.pathofexile.com/forum/view-forum/patch-notes'
const officialKeepersUrl = 'https://www.pathofexile.com/'
const wikiVersionUrl = 'https://www.poewiki.net/wiki/Version_3.27.0'

const heroMetrics = [
  { label: 'Launch window', value: 'Oct 31 · 12:00 PM PDT · 7:00 PM GMT' },
  { label: 'Latest hotfix', value: 'Hotfix digest · source-linked' },
  { label: 'Read mode', value: 'Official-source summary + launch actions' },
]

const faqItems = [
  {
    question: 'Where can I read the official PoE 3.27 patch notes?',
    answer:
      'Use the official Path of Exile patch notes as the canonical source. poe327 links to official sources and summarizes the changes into launch actions, but it does not replace official wording for exact mechanics or edge cases.',
  },
  {
    question: 'What is the fastest way to prepare for PoE 3.27 launch?',
    answer:
      'Start with the 3-minute launch checklist: confirm the patch context, pick a starter direction, install or update your loot filter, set up trade tools, and recheck early hotfixes before committing currency or atlas strategy.',
  },
  {
    question: 'Is this page an official Path of Exile source?',
    answer:
      'No. poe327 is an independent player runbook. It cites official and community sources clearly, avoids endorsement language, and sends users to official pages for canonical patch wording.',
  },
  {
    question: 'Should new players read the full patch notes first?',
    answer:
      'Not necessarily. New players should start with the launch path selector, then read the short patch summary and beginner-safe next steps. Full official notes are useful, but dense before you know what affects your first character.',
  },
  {
    question: 'What should returning players check first in 3.27?',
    answer:
      'Returning players should scan mechanic changes, hotfixes, starter viability, filter updates, and trade setup. The goal is to avoid launching with outdated assumptions from a previous league.',
  },
]

const mechanicSections = [
  {
    id: 'breach',
    title: 'Breach',
    summary:
      'Breach is one of the key PoE 3.27 intent anchors. Treat it as a practical launch decision: what changed, which builds or farming plans may care, and what to check before committing currency or atlas time.',
    matters: ['Check whether your starter benefits from Breach density, rewards, or encounter changes.', 'Avoid over-investing before early hotfixes settle.'],
    next: 'Route starter, filter, and trade choices around the farming plan you actually expect to run.',
  },
  {
    id: 'genesis',
    title: 'Genesis',
    summary:
      'Genesis should be read as a progression and rewards system, not lore filler. Confirm whether it affects your first character, later crafting, or only post-campaign planning before changing your launch route.',
    matters: ['Scan whether Genesis affects your first character or later progression.', 'Flag starter builds that depend on Genesis-specific interactions.'],
    next: 'Keep source links visible because system details may shift after hotfixes.',
  },
  {
    id: 'grafts',
    title: 'Grafts',
    summary:
      'Grafts need a concise “what is it / why care / what to check” pass. If the exact player impact is nuanced, verify the official wording and avoid treating poe327 as the canonical mechanics source.',
    matters: ['Check if Grafts affect your build archetype.', 'Watch for post-launch clarification or hotfix notes.'],
    next: 'Link build-specific impact back into starter pages once verified.',
  },
  {
    id: 'bloodlines',
    title: 'Bloodlines',
    summary:
      'Bloodlines should be framed around encounter risk and build readiness. The practical question is whether defensive layers, clear speed, filter strictness, or early farming route should change.',
    matters: ['Flag defensive or clear-speed implications if supported by sources.', 'Route new and returning players toward safer starter recommendations.'],
    next: 'Record any hotfix that changes encounter difficulty or reward expectations.',
  },
  {
    id: 'asynchronous-trade',
    title: 'Asynchronous trade',
    summary:
      'Asynchronous trade is high intent because it changes player workflow, not just patch trivia. Give it a plain-language check, then route users to official trade setup and price-check tool choices.',
    matters: ['Open official trade setup.', 'Compare official trade flow with Awakened PoE Trade workflow.'],
    next: 'Track trade-related clicks separately from patch-note reading.',
  },
]

const afterReadingSteps = [
  { id: 'pick_path', label: 'Pick your launch path', href: '/#launch-paths', copy: 'New, Returning, Build-ready, Filter-only, or Trade setup.' },
  { id: 'choose_starter', label: 'Choose or validate your starter', href: '/starters', copy: 'Check whether 3.27 changes alter damage, defense, or economy assumptions.' },
  { id: 'update_filter', label: 'Update your loot filter', href: '/filters', copy: 'Make strictness and sounds fit your first-day farming plan.' },
  { id: 'prepare_trade', label: 'Prepare trade tools', href: '/trade/official', copy: 'Set up official trade and price-check workflow before you need it mid-map.' },
  { id: 'recheck_hotfixes', label: 'Recheck hotfixes', href: '#hotfix-digest', copy: 'Early launch changes can invalidate a build or farming assumption faster than guides update.' },
]

export const metadata: Metadata = {
  title: 'Path of Exile 3.27 Patch Notes Summary | poe327',
  description:
    'Read a player-focused PoE 3.27 patch notes summary with official sources, Breach, Genesis, Grafts, Bloodlines, async trade, hotfixes, and launch actions.',
  alternates: {
    canonical: `${siteUrl}/patch-notes`,
  },
  openGraph: {
    title: 'Path of Exile 3.27 Patch Notes Summary | poe327',
    description:
      'Official-source links, mechanic summaries, hotfix digest, and launch actions for Keepers of the Flame.',
    url: `${siteUrl}/patch-notes`,
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-supporter.jpg',
        width: 1200,
        height: 630,
        alt: 'Path of Exile 3.27 Patch Notes Summary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Path of Exile 3.27 Patch Notes Summary | poe327',
    description:
      'Player-focused PoE 3.27 patch notes summary with official sources, mechanics, hotfixes, and launch actions.',
    images: ['/images/keepers-supporter.jpg'],
  },
}

export default async function PatchNotesPage() {
  const feed = await getPatch327Feed('desc')
  const notes = feed.filter((i) => i.type === 'notes')
  const hotfixes = feed.filter((i) => i.type === 'hotfix')
  const latestModified = feed[0]?.date ?? '2025-11-04'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Path of Exile 3.27 Patch Notes Summary',
    description: metadata.description,
    datePublished: '2025-10-28',
    dateModified: latestModified,
    inLanguage: 'en-US',
    author: { '@type': 'Organization', name: 'poe327.net' },
    publisher: { '@type': 'Organization', name: 'poe327.net', logo: { '@type': 'ImageObject', url: `${siteUrl}/og-image.svg` } },
    mainEntityOfPage: `${siteUrl}/patch-notes`,
    about: ['Path of Exile 3.27', 'Keepers of the Flame', 'PoE 3.27 patch notes'],
    citation: [officialPatchUrl, officialKeepersUrl, wikiVersionUrl],
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PoE 3.27 Launch Runbook', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Path of Exile 3.27 Patch Notes Summary', item: `${siteUrl}/patch-notes` },
    ],
  }

  return (
    <>
      <Script id="patch-notes-article-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="patch-notes-faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id="patch-notes-breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      <PageHero
        title="Path of Exile 3.27 Patch Notes Summary"
        description="Official-source links, mechanic summaries, hotfix digest, and launch actions for Keepers of the Flame. Read this as a launch checklist, not a copied mirror of official notes."
        image="/images/keepers-supporter.jpg"
        kicker="PoE 3.27 patch notes"
        metrics={heroMetrics}
      />

      <div className="container space-y-16 py-12">
        <LastUpdated date="November 4, 2025 - sources: pathofexile.com forums, dev posts, wiki mirrors" />

        <section id="short-answer" className="rounded-3xl border border-brand/30 bg-brand/10 p-6 md:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand">Short answer</span>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-2xl">
            PoE 3.27 patch notes should be read as a launch checklist, not only a change log. Start with the official update, then review Breach, Genesis, Grafts, Bloodlines, asynchronous trade, and the latest hotfixes before finalizing your starter, loot filter, and trade setup.
          </p>
        </section>

        <section id="official-sources" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="kicker">Official sources first</span>
            <h2 className="h2 text-white">Summarize the sources, then decide what to do next</h2>
            <p className="text-lg leading-relaxed text-white/75">
              This page summarizes PoE 3.27 from official and community source links, then turns the changes into player actions. Use official Path of Exile patch notes as the canonical source for exact wording and edge-case mechanics; use poe327 for the faster “what should I do next?” view.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Open official 3.27 patch notes', url: officialPatchUrl, type: 'official_patch_notes' },
              { label: 'Open official Keepers page', url: officialKeepersUrl, type: 'official_keepers' },
              { label: 'Check community version history', url: wikiVersionUrl, type: 'community_wiki' },
            ].map((source, index) => (
              <TrackedLink
                key={source.type}
                href={source.url}
                eventName="official_source_click"
                eventProps={{ source_section: 'official_sources', source_type: source.type, cta_text: source.label, target_url: source.url, cta_rank: index + 1, is_external: true }}
                className="group flex min-h-32 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white/75 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                target="_blank"
              >
                <span className="text-sm font-bold text-white">{source.label}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">Open source <ArrowRight size={14} /></span>
              </TrackedLink>
            ))}
          </div>
        </section>

        <section id="timeline" className="space-y-6">
          <div>
            <span className="kicker">3.27 launch timeline</span>
            <h2 className="mt-3 text-3xl font-bold text-white">Patch notes and launch phases</h2>
            <p className="mt-2 max-w-3xl text-white/70">Use the timeline to anchor source checks, then jump into hotfixes and action steps below.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {['Reveal / announcement', 'Patch notes published', 'Launch window', 'Hotfix phase'].map((phase, index) => (
              <article key={phase} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand">Phase {index + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{phase}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Confirm what changed, then update starter, filter, trade, or hotfix assumptions before locking the next action.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="mechanics" className="space-y-6">
          <div>
            <span className="kicker">Mechanic summaries</span>
            <h2 className="mt-3 text-3xl font-bold text-white">What changed in PoE 3.27 that affects launch planning</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {mechanicSections.map((section, index) => (
              <article key={section.id} id={section.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                <p className="mt-3 text-white/75">{section.summary}</p>
                <h4 className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-brand">Why it matters at launch</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {section.matters.map((item) => <li key={item}>• {item}</li>)}
                </ul>
                <TrackedLink
                  href={index === 4 ? '/trade/official' : '/starters'}
                  eventName="patch_notes_click"
                  eventProps={{ source_section: 'mechanic_summary', patch_section: section.id, action: 'jump_action', cta_text: section.next, target_url: index === 4 ? '/trade/official' : '/starters', cta_rank: index + 1 }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-white"
                >
                  {section.next} <ArrowRight size={14} />
                </TrackedLink>
              </article>
            ))}
          </div>
        </section>

        <section id="hotfix-digest" className="space-y-6">
          <div>
            <span className="kicker">3.27 hotfix digest</span>
            <h2 className="mt-3 text-3xl font-bold text-white">Latest hotfixes as player actions</h2>
            <p className="mt-2 max-w-3xl text-white/70">The latest source-linked items are shown first. Treat unknown items as pending verification rather than filling gaps with guesses.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {hotfixes.slice(0, 3).map((item, index) => (
              <article key={item.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.summary}</p>
                {item.sourceUrl && (
                  <TrackedLink
                    href={item.sourceUrl}
                    eventName="official_source_click"
                    eventProps={{ source_section: 'hotfix_digest', source_type: 'official_patch_notes', cta_text: item.title, target_url: item.sourceUrl, cta_rank: index + 1, is_external: true }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-white"
                    target="_blank"
                  >
                    Source <ArrowRight size={14} />
                  </TrackedLink>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="after-reading" className="space-y-6">
          <div>
            <span className="kicker">After reading the patch notes</span>
            <h2 className="mt-3 text-3xl font-bold text-white">Do this next</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {afterReadingSteps.map((step, index) => (
              <TrackedLink
                key={step.id}
                href={step.href}
                eventName="checklist_step_click"
                eventProps={{ source_section: 'after_reading_checklist', step_id: step.id, step_index: index + 1, cta_text: step.label, target_url: step.href, cta_rank: index + 1 }}
                className="group flex min-h-40 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white/75 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
              >
                <span className="text-sm font-bold text-white">{step.label}</span>
                <span className="text-sm leading-relaxed text-white/65">{step.copy}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">Open <ArrowRight size={14} /></span>
              </TrackedLink>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <div>
            <span className="kicker">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold text-white">PoE 3.27 patch notes questions</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-white/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sources-last-updated" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-bold text-white">Sources, freshness, and disclosure</h2>
          <p className="mt-3 text-white/75">
            poe327 is an independent player runbook. Path of Exile and related marks belong to Grinding Gear Games. Use official Path of Exile sources for canonical patch wording and final mechanics. Last checked against local source feed: {latestModified}.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <span className="kicker">Full feed</span>
            <h2 className="mt-3 text-3xl font-bold text-white">Source-linked notes and hotfix archive</h2>
          </div>
          <ol className="relative space-y-8 border-l border-white/10 pl-6">
            {[...notes, ...hotfixes].map((item, index) => (
              <li id={`item-${item.id}`} key={item.id} className="relative">
                <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs text-white/80">
                  {index + 1}
                </div>
                <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/60">
                    <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="rounded-full bg-brand/20 px-2 py-0.5 text-brand">{item.type}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-white/60">Path of Exile 3.27 Patch Notes</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.summary}</p>
                  <div className="mt-4 grid gap-4 md:grid-cols-[2fr,1fr]">
                    {item.image && (
                      <div className="relative h-40 w-full overflow-hidden rounded-xl md:h-36">
                        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 480px, 100vw" />
                      </div>
                    )}
                    <div className="flex items-end justify-end">
                      {item.sourceUrl && (
                        <TrackedLink
                          href={item.sourceUrl}
                          eventName="official_source_click"
                          eventProps={{ source_section: 'full_feed', source_type: item.type === 'hotfix' ? 'official_patch_notes' : 'community_wiki', cta_text: item.title, target_url: item.sourceUrl, cta_rank: index + 1, is_external: true }}
                          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/70 transition hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                          target="_blank"
                        >
                          Source
                        </TrackedLink>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  )
}
