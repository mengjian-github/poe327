import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

const heroMetrics = [
  { label: 'Sync cadence', value: 'Nightly poe 3.27 loot filter commits · 6:00 PM PST' },
  { label: 'Filter variants', value: '6 poe 3.27 loot filter profiles · Campaign to Uber bosses' },
  { label: 'Sound cues', value: '21 poe 3.27 loot filter audio hooks keyed to tier 0-3' },
]

const setupPillars = [
  'Download the baseline poe 3.27 loot filter package, unzip it into My Games\\Path of Exile\\ and mirror the files into your Steam Sync folder before league start.',
  'Log into FilterBlade, import the poe 3.27 loot filter bundle, and switch the Refresh button to Manual so you can control when Genesis Tree currency rules are pushed live.',
  'Map your champion archetype to the right poe 3.27 loot filter variant: Tight Strict for Breach speed farmers, Semi Strict for atlas explorers, and Racing for campaign alts.',
]

const tierHighlights = [
  {
    title: 'Tier 0 Spotlight',
    description:
      'Reserve tier 0 for mirror-tier bases, six-links, and raw Divine drops that should always bully the audio mix. The poe 3.27 loot filter soundstage uses a brass fanfare plus red beam to prevent Genesis Tree Delirium chokes from hiding premium loot.',
    footer: 'Add a second "Filter ID" label so trade partners see the poe 3.27 loot filter version in chat logs.',
  },
  {
    title: 'Tier 1 Influence Grid',
    description:
      'Cluster the Breach ring bases, Atlas-influenced armours, and gold-stacked Expedition artifacts under tier 1. Coloring them teal in the poe 3.27 loot filter palette separates them from Foulborn rares and keeps async trade scouts responsive.',
    footer: 'Blend the poe 3.27 loot filter teal with 65% opacity to avoid glare on white sand tilesets.',
  },
  {
    title: 'Tier 2 Sustain Loop',
    description:
      'Tier 2 handles rolling map sustain, essence catchalls, and Genesis Tree graft catalysts. The poe 3.27 loot filter attaches mid-weight bells so you hear them while clearing bomber packs at a sprint.',
    footer: 'Flag corrupted essences and four-socket bases to glow purple inside the poe 3.27 loot filter for Ailith Hive prep runs.',
  },
]

const colorRules = [
  'Assign warm orange text to scarabs, Expedition logbooks, and Elder/Shaper fragments so the poe 3.27 loot filter keeps your breach stash tidy at a glance.',
  'Give cold blue backgrounds to Delirium orbs, Maven writs, and five-way simulacrum splinters; this poe 3.27 loot filter trick makes blighted maps pop against volcanic tilesets.',
  'Reserve white-blue hybrid beams for jewels and cluster jewel bases to telegraph poe 3.27 loot filter upgrades for Bloodline ascendancies.',
]

const mappingUpgrades = [
  {
    title: 'Genesis Tree Targets',
    points: [
      'Tag Graftblood currency and Living Grafts with a premium overlay so the poe 3.27 loot filter distinguishes them from regular breach shards.',
      'Stack map tier separators every three levels; this poe 3.27 loot filter rhythm keeps Atlas progression on-script during Scarab rotations.',
      'Throw in custom minimap icons for Hive Defense objectives; aligning icons with poe 3.27 loot filter colors stops party members from skipping Ailith escorts.',
    ],
    image: '/images/poe-3-27-loot-filter-tiers.svg',
    alt: 'Custom tier bars illustrating poe 3.27 loot filter color priorities',
  },
  {
    title: 'Automation & Versioning',
    points: [
      'Schedule a nightly Git pull on the NeverSink branch, merge it into your poe 3.27 loot filter fork, and resolve strictness conflicts before peak play hours.',
      'Push the output to FilterBlade and FilterBlast after verifying the poe 3.27 loot filter pack compiles without missing sound files.',
      'Archive every milestone in a changelog markdown so teammates can diff poe 3.27 loot filter tweaks between hotfixes 6 and 7.',
    ],
    image: '/images/poe-3-27-loot-filter-automation.svg',
    alt: 'Automation checklist showing poe 3.27 loot filter sync steps',
  },
]

const faqItems = [
  {
    title: 'How strict should I go on day one?',
    description:
      'Start Semi Strict unless your team races; the poe 3.27 loot filter in Campaign Strict can hide early four-links you still need. Bump to Tight Strict once you enter yellow maps and the Genesis Tree starts spitting currency clusters.',
  },
  {
    title: 'Where do I store league-specific rules?',
    description:
      'Create a dedicated block in the JSON export labeled Keepers of the Flame so your poe 3.27 loot filter tracks hive hands, Dreamer’s Flame catalysts, and async trade favors separately.',
  },
  {
    title: 'Do I still need FilterBlade if I edit by hand?',
    description:
      'Yes. FilterBlade’s diff viewer highlights what the poe 3.27 loot filter changed between NeverSink pushes, making it faster to catch broken beams or typos introduced by manual edits.',
  },
]

export const metadata: Metadata = {
  title: 'PoE 3.27 Loot Filter Command Center',
  description:
    'Build, sync, and test every poe 3.27 loot filter variant for Keepers of the Flame with tier breakdowns, color logic, automation scripts, and FAQ support.',
  alternates: {
    canonical: 'https://poe327.net/poe-3-27-loot-filter',
  },
  openGraph: {
    title: 'PoE 3.27 Loot Filter Command Center',
    description:
      'Step-by-step poe 3.27 loot filter guidance covering setup, tier tuning, automation, and live league updates.',
    url: 'https://poe327.net/poe-3-27-loot-filter',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/poe-3-27-loot-filter-hero.svg',
        width: 1200,
        height: 630,
        alt: 'PoE 3.27 loot filter hero artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE 3.27 Loot Filter Command Center',
    description:
      'Upgrade the poe 3.27 loot filter for Keepers of the Flame with campaign-to-uber boss rulesets.',
    images: ['/images/poe-3-27-loot-filter-hero.svg'],
  },
}

export default function LootFilterPage() {
  return (
    <>
      <PageHero
        title="PoE 3.27 Loot Filter Command Center"
        description="This poe 3.27 loot filter inner page walks you through setup, tier curation, automation, and party-ready sharing so the Keepers of the Flame grind stays efficient from the beach to Uber bosses."
        image="/images/poe-3-27-loot-filter-hero.svg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — league sources, FilterBlade exports, and Genesis Tree testing labs" />
      </div>

      <Section
        id="setup"
        title="League Launch Setup"
        desc="Frame your poe 3.27 loot filter architecture before the servers unlock so your party can sprint through acts without rummaging through junk drops."
        kicker="poe 3.27 loot filter briefing"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Use a versioned folder naming scheme—something like PoE327\\Filters\\Strict—to stop overlapping archives from corrupting the poe 3.27 loot filter core files. This poe 3.27 loot filter master archive keeps your repository tidy even when multiple teammates push edits. Keep back-ups of the default filter just in case Hotfix 7 introduces a new base that the parser does not recognize on day one.
            </p>
            <p>
              Once the files land, open the in-game UI, hit the reload button, and cycle each poe 3.27 loot filter variant. This test proves the sound packs load correctly and ensures your Delirium five-stacks ring out when a Mirror shows up during the launch rush.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {setupPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/poe-3-27-loot-filter-tiers.svg"
              alt="Visualising tier priorities inside the poe 3.27 loot filter"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="tiers"
        title="Tier Priorities and Audio"
        desc="Dial in the beams, backgrounds, and alert sounds so the poe 3.27 loot filter shouts when it matters and fades when it does not."
        kicker="poe 3.27 loot filter tiers"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {tierHighlights.map((card) => (
            <Card key={card.title} title={card.title} footer={card.footer}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">
          The poe 3.27 loot filter priority grid keeps mirror-tier drops loud every session.
        </p>
      </Section>

      <Section
        id="colors"
        title="Color Philosophy"
        desc="Recolor the baseline palette so your poe 3.27 loot filter mirrors Keepers of the Flame economics without hiding legacy chase items."
        kicker="poe 3.27 loot filter colors"
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Color psychology matters because the poe 3.27 loot filter should feel familiar even when you spike strictness. Warm hues shout value, cool hues calm stray rares, and neutral beams handle quick glances while you escort Ailith through Hive sieges.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {colorRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <p className="text-sm text-white/70">
              Keep a screenshot of your palette in the repo so the poe 3.27 loot filter refresh stays faithful when you hand editing duty to another officer.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/poe-3-27-loot-filter-automation.svg"
              alt="Automation overlay demonstrating poe 3.27 loot filter scripting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="mapping"
        title="Mapping & Automation"
        desc="Upkeep your mapping roster by rotating strictness, logging edits, and syncing with teammates so every poe 3.27 loot filter run stays predictable."
        kicker="poe 3.27 loot filter upkeep"
      >
        <div className="space-y-10">
          {mappingUpgrades.map((block) => (
            <div key={block.title} className="grid gap-6 lg:grid-cols-[3fr_2fr]">
              <div className="space-y-4 text-white/80">
                <h3 className="text-xl font-semibold text-white">{block.title}</h3>
                <ul className="list-disc space-y-3 pl-5">
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          ))}
          <p className="text-white/70">
            Close each play session by exporting the changelog and pinging your squad so the poe 3.27 loot filter stack stays synchronized across every launcher and private league.
          </p>
        </div>
      </Section>

      <Section
        id="faq"
        title="FAQs and Best Practices"
        desc="Answer the common pain points so the poe 3.27 loot filter stays aligned across your roster and community."
        kicker="poe 3.27 loot filter FAQ"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {faqItems.map((faq) => (
            <Card key={faq.title} title={faq.title}>
              <p>{faq.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
