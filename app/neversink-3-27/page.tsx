import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

const heroMetrics = [
  { label: 'Latest push', value: 'Nov 3, 2025 · neversink 3.27 commit window' },
  { label: 'Strictness tiers', value: '8 neversink 3.27 ladders from Regular to Uber Strict' },
  { label: 'Auto-update ready', value: 'FilterBlade + Patreon updater · neversink 3.27 safe' },
]

const quickStart = [
  'Subscribe on the ladder for a plug-and-play neversink 3.27 baseline that auto-updates by simply restarting Path of Exile.',
  'Jump into FilterBlade to import the neversink 3.27 profile, tweak colors, and save your custom strictness ahead of Keepers launch.',
  'Download the GitHub release as a fallback; stash the neversink 3.27 files inside Documents/My Games/Path of Exile before the servers open.',
]

const strictnessCards = [
  {
    title: 'Semi-Strict Launch',
    description:
      'The neversink 3.27 semi-strict ladder keeps leveling rares, four-links, and league-start sustain items visible until your atlas stabilises.',
    footer: 'Toggle to Regular when teaching new exiles the neversink 3.27 fundamentals.',
  },
  {
    title: 'Strict Mapping',
    description:
      'Switch to the strict profile once yellow maps feel crowded; the neversink 3.27 filters mute low-tier rares while preserving scarabs, essences, and Breach rings.',
    footer: 'Revert temporarily if you pivot into off-meta farming inside neversink 3.27 testing blocks.',
  },
  {
    title: 'Very Strict & Uber',
    description:
      'When farming deli maps or boss rushing, the neversink 3.27 very strict and uber strict tiers hide everything but curated chase drops and currency stacks.',
    footer: 'Pair with custom sounds so neversink 3.27 loot pops over voice comms.',
  },
]

const automationSteps = [
  'Pull upstream changes from the NeverSink repository daily so your neversink 3.27 fork absorbs economy-driven tweaks before peak hours.',
  'Merge local color scripts and styles, then publish the refreshed neversink 3.27 build through FilterBlade’s update button.',
  'Kick off the Patreon auto-updater or your own CLI script to push the neversink 3.27 archive into the ladder and private leagues.',
  'Log every edit in a Markdown changelog so guildmates can diff neversink 3.27 adjustments between Hotfix 6 and 7.',
]

const styleNotes = [
  'Use the neversink 3.27 CustomSounds package if you stream; it swaps every alert tone while keeping the same filtering logic.',
  'Preview the neversink 3.27 style gallery on FilterBlade to pick colorways that match your gamma and monitor setup.',
  'Avoid Krangled or Tabula styles for competitive play; stick to classic or minimalist modes for neversink 3.27 racing squads.',
]

const faq = [
  {
    title: 'When does the filter update for a new league?',
    description:
      'The maintainer pushes the neversink 3.27 branch roughly 4–6 hours before launch, then refreshes multiple times during week one as prices settle.',
  },
  {
    title: 'Can I automate strictness switches?',
    description:
      'Yes. Schedule scripts that swap the neversink 3.27 filter file when your atlas level or map tier triggers a threshold, or use FilterBlade presets you export per activity.',
  },
  {
    title: 'How do I report bugs?',
    description:
      'Post on the FilterBlade Discord or GitHub issues with a Pastebin of your neversink 3.27 filter lines and a screenshot of the hidden drop.',
  },
]

export const metadata: Metadata = {
  title: 'NeverSink 3.27 Filter Field Guide',
  description:
    'Step-by-step neversink 3.27 coverage spanning ladder subscriptions, strictness tuning, automation workflows, style variants, and support channels.',
  alternates: {
    canonical: 'https://poe327.net/neversink-3-27',
  },
  openGraph: {
    title: 'NeverSink 3.27 Filter Field Guide',
    description:
      'Navigate neversink 3.27 strictness tiers, update cadence, FilterBlade customisation, and support resources in one place.',
    url: 'https://poe327.net/neversink-3-27',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/neversink-3-27-hero.svg',
        width: 1200,
        height: 630,
        alt: 'neversink 3.27 hero graphic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeverSink 3.27 Filter Field Guide',
    description:
      'Keep your neversink 3.27 profiles updated with strictness, automation, and style walkthroughs.',
    images: ['/images/neversink-3-27-hero.svg'],
  },
}

export default function NeverSinkPage() {
  return (
    <>
      <PageHero
        title="NeverSink 3.27 Filter Field Guide"
        description="This neversink 3.27 resource walks you through setup, strictness ladders, automation tooling, and stylistic tweaks so Keepers of the Flame starts clean and stays profitable."
        image="/images/neversink-3-27-hero.svg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — NeverSink GitHub README, FilterBlade changelog, ladder snapshots" />
      </div>

      <Section
        id="quick-start"
        title="Quick Start Path"
        desc="Secure a neversink 3.27 baseline before the league countdown hits zero so your stash never floods with junk."
        kicker="neversink 3.27 onboarding"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Ladder subscription is the fastest route because the neversink 3.27 profile auto-updates the moment the maintainer pushes a release. You just restart the client and select the new entry in Options → Game → Loot Filters.
            </p>
            <p>
              If you love custom palettes, import the neversink 3.27 package into FilterBlade, tweak the style, then download your personal archive. Keep a vanilla copy as a failsafe in case manual edits break.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {quickStart.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/neversink-3-27-strictness.svg"
              alt="Strictness ladder chart for neversink 3.27"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="strictness"
        title="Strictness Ladder"
        desc="Apply the right neversink 3.27 strictness for campaign rushes, atlas progression, and bossing windows."
        kicker="neversink 3.27 strictness"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {strictnessCards.map((card) => (
            <Card key={card.title} title={card.title} footer={card.footer}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">
          The neversink 3.27 strictness ladder mirrors the official guidance: start Semi-Strict, escalate as you accelerate, and never fear losing mirror-tier drops.
        </p>
      </Section>

      <Section
        id="automation"
        title="Automation & Update Cadence"
        desc="Keep your team current by scripting neversink 3.27 pulls, merges, and deployments."
        kicker="neversink 3.27 automation"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Treat updates as part of your daily reset. The neversink 3.27 repository usually refreshes every few hours during launch week, reacting to price swings and unexpected drops. Automate that flow so nobody plays on stale filters.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {automationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/neversink-3-27-automation.svg"
              alt="Automation checklist for neversink 3.27"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="styles"
        title="Styles & Sound Packs"
        desc="Personalise the visuals and audio while staying faithful to neversink 3.27 logic."
        kicker="neversink 3.27 styles"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {styleNotes.map((note) => (
            <Card key={note}>
              <p>{note}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">
          Export your presets to version control so every guild member can sync the same neversink 3.27 style pack before raid night.
        </p>
      </Section>

      <Section
        id="faq"
        title="FAQ & Support"
        desc="Answer the hot questions the community keeps asking about neversink 3.27 upkeep."
        kicker="neversink 3.27 FAQ"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {faq.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">
          Keep Discord pings on so you catch surprise neversink 3.27 hotfixes—especially when GGG sneaks in new basetypes or div cards overnight.
        </p>
      </Section>
    </>
  )
}
