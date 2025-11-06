import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

// Simpler, beginner‑friendly metrics for fast scanning (English site)
const heroMetrics = [
  { label: 'Setup time', value: '5 minutes · copy, enable, test' },
  { label: 'Profiles included', value: 'Campaign / Semi Strict / Tight Strict' },
  { label: 'Updates', value: 'Automatic poe 3.27 loot filter refresh or manual copy' },
]

// Step‑by‑step, written for beginners in English
const setupSteps = [
  {
    title: 'Step 1 · Download and place files',
    body:
      'Download the poe 3.27 loot filter zip and extract it into My Games\\Path of Exile\\ (Windows, incl. Steam). On macOS (Steam), use ~/Library/Application Support/Path of Exile/. If the game is open, you will reload it in the next step.',
    image: '/images/hero-keepers.jpg',
    alt: 'Copying the loot filter files into the Path of Exile folder',
  },
  {
    title: 'Step 2 · Enable in game',
    body:
      'In game: press Escape → Options → Game → Item Filter, then select your newly copied poe 3.27 loot filter. Save and run a small map to confirm the sounds trigger.',
    image: '/images/keepers-async.jpg',
    alt: 'Selecting the item filter in the options menu',
  },
  {
    title: 'Step 3 · Pick a strictness',
    body:
      'Use Campaign or Semi Strict while leveling. If your screen gets cluttered in maps, switch to a tighter poe 3.27 loot filter (compare options below).',
    image: '/images/keepers-encounter.jpg',
    alt: 'Strictness presets comparison',
  },
  {
    title: 'Step 4 · Keep it updated',
    body:
      'Fast path: FilterBlade one‑click update. Full control: manually download the latest poe 3.27 loot filter and overwrite the old file when needed.',
    image: '/images/genesis-tree.jpg',
    alt: 'Update via automation or manual download',
  },
  {
    title: 'Step 5 · Learn the cues',
    body:
      'High value drops have louder sounds and bright beams. Once you learn your poe 3.27 loot filter sound cues, mapping speed improves a lot.',
    image: '/images/foulborn-loot.jpg',
    alt: 'Examples of high‑value colors and beams',
  },
]

// Friendly explanations for what colors / beams / sounds mean
const tierHighlights = [
  {
    title: 'Tier 0 · Always stop and loot',
    description:
      'Mirror‑tier bases, six‑links, and raw Divines use the loudest sound and prominent beams. The poe 3.27 loot filter makes these stand out from all background noise.',
    footer: 'Add a visible version tag so party members can reference your filter in chat.',
  },
  {
    title: 'Tier 1 · Valuable and league pieces',
    description:
      'Influenced armours, Breach ring bases, Expedition artifacts, etc. use bright colors and borders. Even at speed you will notice what the poe 3.27 loot filter wants you to pick up.',
    footer: 'Lower border opacity slightly to avoid glare on bright tilesets.',
  },
  {
    title: 'Tier 2 · Mapping sustain',
    description:
      'Maps, essences, and common fragments keep your engine running. The poe 3.27 loot filter assigns medium‑weight cues so they don’t drown out top tier drops.',
    footer: 'Optional: add purple glow for corrupted essences and 4‑socket bases for early crafting.',
  },
]

const colorRules = [
  'Warm colors (orange/gold) + clear border + strong sound for high value so you can lock on instantly.',
  'Utility items (Simulacrum splinters, Breach, invitations) use cool backgrounds: readable but not distracting.',
  'Jewels and cluster jewels share a consistent beam color so “color → category” becomes muscle memory.',
]

const mappingUpgrades = [
  {
    title: 'Small mapping upgrades',
    points: [
      'Thicker borders and clearer name colors for common Atlas currency so upgrades feel visible in your poe 3.27 loot filter.',
      'Add a subtle map tier divider every 3 tiers to decide when to increase strictness.',
      'Standardize key colors/icons in your party so nobody misses objectives.',
    ],
    image: '/images/keepers-hive.jpg',
    alt: 'Color and divider examples for mapping drops',
  },
  {
    title: 'Auto‑update and changelog',
    points: [
      'Automatic: log into FilterBlade and one‑click refresh to the latest poe 3.27 loot filter.',
      'Manual: download and overwrite periodically; test with “Reload Filter” in town to catch errors.',
      'Write a one‑line changelog per tweak so you can compare and roll back easily.',
    ],
    image: '/images/graft-equipment.jpg',
    alt: 'Update flow using automation or manual download',
  },
]

const faqItems = [
  {
    title: 'Which strictness for day one?',
    description:
      'Most players start with Semi Strict; brand‑new players or those stuck while leveling can use Campaign. In yellow maps, switch to a tighter poe 3.27 loot filter.',
  },
  {
    title: 'Do I need FilterBlade?',
    description:
      'Recommended. One‑click updates, diff preview, and fewer manual edit mistakes. Even if you hand‑edit, FilterBlade keeps your poe 3.27 loot filter maintenance safer.',
  },
  {
    title: 'Don’t like a color or sound?',
    description:
      'Test in town first, then adjust a little at a time. Swap to familiar sounds/colors while keeping top‑value items loud in your poe 3.27 loot filter.',
  },
  {
    title: 'Why you need a loot filter',
    description:
      'Removes clutter for performance and clarity. Lets you lock onto value with colors, beams, and sounds instead of reading every item name at speed.',
  },
  {
    title: 'When should I update?',
    description:
      'Before league start, multiple times during week one, and after big hotfixes. Updating keeps value tiers and new league items correct.',
  },
  {
    title: 'Console or color‑blind tips',
    description:
      'Use higher contrast borders, thicker beams, and louder cues. Prefer stricter presets earlier to keep screens readable from distance.',
  },
]

// Strictness quick comparison cards
const strictnessCards = [
  {
    title: 'Campaign',
    desc:
      'For leveling and very fresh characters. Shows more rares, 4‑links, and useful bases. Safest start for a brand‑new poe 3.27 loot filter user.',
    pros: ['Easiest to gear early', 'Good for story acts', 'Low risk of hiding needed items'],
    cons: ['Cluttered once you reach early maps'],
  },
  {
    title: 'Semi Strict',
    desc:
      'Default for most players on early maps. Hides obvious junk while preserving currency, maps, and valuable bases in your poe 3.27 loot filter.',
    pros: ['Cleaner screen', 'Good for early mapping', 'Easy to learn cues'],
    cons: ['May still show some mid‑tier clutter'],
  },
  {
    title: 'Tight Strict',
    desc:
      'When your atlas and gear stabilize. Cuts more mid‑tier drops so highlights are obvious. A popular poe 3.27 loot filter choice for sustained mapping.',
    pros: ['Fast mapping', 'High signal‑to‑noise', 'Great for speed farming'],
    cons: ['Occasional “I wish I saw that” moments if over‑strict for your build'],
  },
  {
    title: 'Very Strict',
    desc:
      'Use for high‑end farming or party play with dedicated looters. The poe 3.27 loot filter keeps almost only premium drops.',
    pros: ['Minimal clutter', 'Easy to track premium drops'],
    cons: ['Can hide useful crafting bases if you are under‑geared'],
  },
]

export const metadata: Metadata = {
  title: 'PoE 3.27 Loot Filter Beginner Guide',
  description:
    'A no‑frills poe 3.27 loot filter guide: download, enable, pick strictness, stay updated, and avoid common mistakes for smoother mapping from campaign to maps.',
  alternates: {
    canonical: 'https://poe327.net/filters',
  },
  openGraph: {
    title: 'PoE 3.27 Loot Filter Beginner Guide',
    description:
      'Step‑by‑step poe 3.27 loot filter setup and updates from campaign to maps with clear cues and safe defaults.',
    url: 'https://poe327.net/filters',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/poe-3-27-loot-filter-hero.svg',
        width: 1200,
        height: 630,
        alt: 'PoE 3.27 loot filter guide artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoE 3.27 Loot Filter Beginner Guide',
    description:
      'Beginner‑friendly poe 3.27 loot filter walkthrough. Install in 5 minutes and verify cues before mapping.',
    images: ['/images/poe-3-27-loot-filter-hero.svg'],
  },
}

export default function LootFilterPage() {
  return (
    <>
      <PageHero
        title="PoE 3.27 Loot Filter Beginner Guide"
        description="What a filter is, how to install and enable it, how to choose strictness, and how to keep it updated. Follow along and get your poe 3.27 loot filter working in minutes. This poe 3.27 loot filter guide stays up to date every league."
        image="/images/poe-3-27-loot-filter-hero.svg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
        actions={
          <>
            <a
              href="https://www.filterblade.xyz/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Open FilterBlade
            </a>
            <a
              href="/filters/neversink"
              className="btn btn-ghost"
            >
              NeverSink 3.27 Guide
            </a>
          </>
        }
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 4, 2025 — Updated from FilterBlade and community testing" />
      </div>

      <div className="container mt-4 text-white/80">
        <p>
          This poe 3.27 loot filter is tuned for beginners: clear sounds and beams, sensible defaults, and simple upgrades.
          The poe 3.27 loot filter ships with Campaign, Semi Strict, and Tight Strict presets.
          Updating your poe 3.27 loot filter is one‑click with FilterBlade or a fast manual copy.
        </p>
      </div>

      <Section
        id="basics"
        title="Loot Filter Basics"
        desc="What a loot filter is and why it helps performance and clarity."
        kicker="Start Here"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="What it does">
            <p>A loot filter hides junk and highlights valuable drops with readable colors, beams, and sounds. You spend less time reading every line and more time mapping.</p>
          </Card>
          <Card title="Why you need it">
            <p>Clutter hurts performance and decision making. With a filter, screens stay readable and you react to clear cues instead of scanning dozens of item names.</p>
          </Card>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
            <Image src="/images/rpgstash-poe-loot-filter-1.jpg" alt="Without loot filter: cluttered screen" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
            <Image src="/images/rpgstash-poe-loot-filter-2.jpg" alt="With loot filter: clean highlights" fill className="object-cover" />
          </div>
        </div>
      </Section>

      <Section
        id="setup"
        title="Install and Verify in 5 Steps"
        desc="Follow these steps to install and confirm your poe 3.27 loot filter works."
        kicker="Quick Start"
      >
        <div className="space-y-8">
          {setupSteps.map((s) => (
            <div key={s.title} className="grid gap-6 lg:grid-cols-[2fr_3fr] items-start">
              <div className="relative h-60 overflow-hidden rounded-2xl border border-white/10">
                <Image src={s.image} alt={s.alt} fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/80">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">If you play multiple characters, keep separate copies of your poe 3.27 loot filter for each strictness.</p>
      </Section>

      <Section
        id="strictness"
        title="Strictness Quick Comparison"
        desc="Pick the preset that fits your character and content. You can switch your poe 3.27 loot filter any time without restarting. You can also pin multiple poe 3.27 loot filter files and swap quickly."
        kicker="Choose Wisely"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strictnessCards.map((s) => (
            <Card key={s.title} title={s.title}>
              <p>{s.desc}</p>
              <ul className="list-disc pl-5 text-white/75 space-y-1 mt-2">
                {s.pros && (
                  <li><strong>Pros:</strong> {s.pros.join(', ')}</li>
                )}
                {s.cons && (
                  <li><strong>Cons:</strong> {s.cons.join(', ')}</li>
                )}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">You can swap your poe 3.27 loot filter preset anytime via Options → Game → Item Filter.</p>
      </Section>

      <Section
        id="tiers"
        title="How to Read Colors, Beams, and Sounds"
        desc="Plain‑English explanations so you can quickly understand your poe 3.27 loot filter cues."
        kicker="Visuals and Audio"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {tierHighlights.map((card) => (
            <Card key={card.title} title={card.title} footer={card.footer}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">Once these rules click, it is easier to decide when to stop or sprint — these cues are built into the poe 3.27 loot filter.</p>
      </Section>

      <Section
        id="colors"
        title="Color Tips for Beginners"
        desc="Readable, quiet defaults that scale as you get stricter. The poe 3.27 loot filter follows this approach."
        kicker="Color and Readability"
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-4 text-white/80">
            <p>Color psychology matters: warm = high value, cool = functional cues, neutral = quick recognition without noise.</p>
            <ul className="list-disc space-y-3 pl-5">
              {colorRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <p className="text-sm text-white/70">Screenshot your palette and keep it in the repo so updates stay consistent. The poe 3.27 loot filter palette aims for readability first.</p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-kineticrain.jpg"
              alt="Turning color and sound rules into a maintainable template"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="mapping"
        title="Updates and Maintenance"
        desc="Do three things: increase strictness as needed, update regularly, and keep brief notes. Your poe 3.27 loot filter stays reliable."
        kicker="Routine Care"
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
          <p className="text-white/70">End each session with a short note of what changed; you will thank yourself later. Keep a backup copy of your poe 3.27 loot filter before bigger edits.</p>
        </div>
      </Section>

      <Section
        id="downloads"
        title="Downloads and Tools"
        desc="Grab the latest files and editors so your poe 3.27 loot filter stays current and easy to maintain."
        kicker="Stay Updated"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="FilterBlade (Editor)">
            <p>Safest way to manage and update your poe 3.27 loot filter with one‑click refresh and visual diffs.</p>
            <a className="btn btn-primary mt-3 inline-flex" href="https://www.filterblade.xyz/" target="_blank" rel="noreferrer">Open FilterBlade</a>
          </Card>
          <Card title="NeverSink Guide & Downloads">
            <p>Download the latest packaged poe 3.27 loot filter zips if you prefer manual updates and local backups.</p>
            <a className="btn btn-ghost mt-3 inline-flex" href="/filters/neversink">Open Guide</a>
          </Card>
        </div>
      </Section>

      <Section
        id="faq"
        title="FAQ"
        desc="Clear answers to common beginner questions so your poe 3.27 loot filter helps, not hinders. Keep this poe 3.27 loot filter page bookmarked for updates."
        kicker="FAQ"
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
