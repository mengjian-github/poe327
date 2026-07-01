import type { Metadata } from 'next'
import Script from 'next/script'

import { PageHero } from '@/components/page-hero'
import { TrackedLink } from '@/components/tracked-link'
import { Card, LastUpdated, Section } from '@/components/ui'

const siteUrl = 'https://poe327.net/pricing'

export const metadata: Metadata = {
  title: 'poe327 Pricing Status — Free PoE 3.27 Launch Tools',
  description:
    'poe327 is free right now. This roadmap page explains what is available, what is not sold, and how to use the PoE 3.27 launch tools without hitting a dead pricing link.',
  robots: { index: false, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'poe327 Pricing Status — Free PoE 3.27 Launch Tools',
    description:
      'No paid plan is active. Use the free PoE 3.27 launch checklist, starters, filters, trade guide, and patch notes hub.',
    url: siteUrl,
    siteName: 'poe327',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'poe327 free tools and roadmap' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'poe327 Pricing Status',
    description: 'poe327 is currently free; paid plans are not active.',
    images: ['/og-image.svg'],
  },
}

const roadmapJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'poe327 Pricing Status',
  url: siteUrl,
  description: 'No paid plan is active. The current poe327 launch runbook and PoE 3.27 tools are free to use.',
  isPartOf: { '@type': 'WebSite', name: 'poe327', url: 'https://poe327.net' },
}

const freeTools = [
  {
    title: 'Launch checklist',
    body: 'Confirm patch context, starter direction, loot filter setup, trade tools, and hotfix checks from the homepage checklist.',
    href: '/#launch-checklist',
  },
  {
    title: 'Starter hub',
    body: 'Filter beginner-friendly builds and open dedicated starter pages with POB/source links where available.',
    href: '/starters',
  },
  {
    title: 'Loot filter lab',
    body: 'Pick a strictness path before handing off to FilterBlade or the NeverSink guide.',
    href: '/filters',
  },
  {
    title: 'Trade setup',
    body: 'Learn official trade search, live search, whisper flow, and safer day-one trading habits.',
    href: '/trade/official',
  },
]

export default function PricingStatusPage() {
  return (
    <>
      <Script id="pricing-status-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(roadmapJsonLd)}
      </Script>

      <PageHero
        title="poe327 is free right now"
        description="There is no Pro plan, subscription, paid download, account gate, or ad-spend funnel active on poe327. This page exists to prevent pricing dead ends and to keep expectations clear while the PoE 3.27 launch runbook is still being validated."
        image="/images/poe327-hero.webp"
        kicker="Pricing status · no active paid plan"
        metrics={[
          { label: 'Current price', value: '$0 · free access' },
          { label: 'Paid plan', value: 'Not launched' },
          { label: 'Primary conversion', value: 'Use a tool path, not purchase' },
        ]}
        actions={
          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href="/#launch-checklist"
              eventName="pricing_cta_click"
              eventProps={{ source_section: 'pricing_hero', cta_text: 'Start free checklist', target_url: '/#launch-checklist', cta_rank: 1 }}
              className="btn btn-primary"
            >
              Start free checklist
            </TrackedLink>
            <TrackedLink
              href="/starters"
              eventName="pricing_cta_click"
              eventProps={{ source_section: 'pricing_hero', cta_text: 'Browse starter tools', target_url: '/starters', cta_rank: 2 }}
              className="btn btn-ghost"
            >
              Browse starter tools
            </TrackedLink>
          </div>
        }
      />

      <div className="container">
        <LastUpdated date="July 1, 2026 — pricing kept noindex until a real paid offer exists" />
      </div>

      <Section
        id="available-free"
        kicker="Free surfaces"
        title="What is available without paying"
        desc="Use these paths as the real conversion events for the current review cycle. They are stronger than a fake pricing plan because they match what visitors can actually do today."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {freeTools.map((tool, index) => (
            <Card key={tool.href} title={tool.title}>
              <p>{tool.body}</p>
              <TrackedLink
                href={tool.href}
                eventName="pricing_cta_click"
                eventProps={{ source_section: 'pricing_free_tools', cta_text: tool.title, target_url: tool.href, cta_rank: index + 1 }}
                className="btn btn-primary mt-4 inline-flex"
              >
                Open {tool.title}
              </TrackedLink>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="not-selling"
        kicker="Expectation control"
        title="What poe327 is not selling yet"
        desc="This page intentionally avoids checkout buttons, paid promises, and community publishing claims until there is enough data and an approved commercial goal."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="No subscription">
            <p>There is no monthly plan, Pro tier, account dashboard, or payment checkout attached to poe327 today.</p>
          </Card>
          <Card title="No paid automation">
            <p>The site links to official or community tools, but it does not sell private trade bots, scraping, automation, or account-risk workflows.</p>
          </Card>
          <Card title="No external publication promise">
            <p>Community submissions, directory listings, ads, and paid traffic remain owner-gated and are not triggered by this page.</p>
          </Card>
        </div>
      </Section>

      <Section
        id="roadmap"
        kicker="Future signal"
        title="When a paid page would make sense"
        desc="A real pricing page should wait until the site has a measurable primary conversion and enough usage evidence to justify a paid product. Until then, this noindex status page absorbs pricing curiosity without polluting the sitemap."
      >
        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6 text-white/80">
          <h2 className="text-2xl font-bold text-white">Roadmap gate</h2>
          <p className="mt-3 leading-relaxed">
            Consider pricing only after checklist completion, external tool handoff, starter detail opens, and returning-visitor behavior are stable for multiple review windows. If paid features are added later, replace this status page with a fully indexed pricing route, real plan copy, and compliant checkout disclosure.
          </p>
        </div>
      </Section>
    </>
  )
}
