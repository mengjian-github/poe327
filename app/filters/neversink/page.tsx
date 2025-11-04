import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

// English page with real in‑game screenshots. Main keyword: "neversink 3.27" (target ~3–5%).

const heroMetrics = [
  { label: 'Install time', value: '≈3–5 min · copy & enable' },
  { label: 'Presets', value: 'Campaign · Semi · Strict · Uber' },
  { label: 'Sources', value: 'Ladder · FilterBlade · GitHub' },
]

const steps = [
  {
    title: 'Step 1 · Follow on the Ladder',
    body:
      'For beginners, follow NeverSink on the PoE Item Filter Ladder for hands‑free updates. Alternatively, use FilterBlade one‑click or download the latest zip from GitHub releases.',
    image: '/images/hero-keepers.jpg',
    alt: 'Follow the neversink 3.27 filter on the official ladder',
  },
  {
    title: 'Step 2 · Place into the right folder (manual path)',
    body:
      'If you downloaded a .filter: copy it into Documents/My Games/Path of Exile/ (same path for Steam).',
    image: '/images/keepers-encounter.jpg',
    alt: 'Place the filter into the Path of Exile folder',
  },
  {
    title: 'Step 3 · Enable in‑game',
    body:
      'In‑game: Escape → Options → Game → Item Filter, then select your neversink 3.27. Use Reload Filter in town to confirm it is active.',
    image: '/images/keepers-async.jpg',
    alt: 'Enable neversink 3.27 in the options menu',
  },
  {
    title: 'Step 4 · Pick a strictness',
    body:
      'Use Campaign or Semi while leveling. If your screen gets busy in maps, switch to Strict. Very Strict/Uber fit fast farming or high‑end content.',
    image: '/images/keepers-kineticrain.jpg',
    alt: 'Choose the right strictness for your stage',
  },
  {
    title: 'Step 5 · Learn the cues & keep updated',
    body:
      'High‑value drops use louder sounds and clear beams. As you learn the neversink 3.27 cues, mapping becomes faster. Update via Ladder, FilterBlade or GitHub.',
    image: '/images/foulborn-loot.jpg',
    alt: 'Visual and audio cues for valuable loot',
  },
]

const ladders = [
  {
    title: 'Campaign (leveling/new)',
    description:
      'Shows more rares, 4‑links, and useful bases so new characters progress smoothly. A safe neversink 3.27 starting point.',
    footer: 'Consider Semi/Strict once you reach yellows.',
  },
  {
    title: 'Semi Strict (default)',
    description:
      'Hides obvious junk while keeping currency, maps, and common bases. A popular day‑to‑day neversink 3.27 choice.',
    footer: 'If clutter returns, step up to Strict.',
  },
  {
    title: 'Strict / Very Strict',
    description:
      'For established atlases or speed‑mapping. Strong filtering keeps valuable drops obvious in neversink 3.27.',
    footer: 'If you miss useful bases, drop one step.',
  },
  {
    title: 'Uber Strict (elite)',
    description:
      'For high‑end farming or dedicated party looters; keeps only curated targets. Ultra‑clean for neversink 3.27 speed runs.',
    footer: 'Not recommended for brand‑new characters.',
  },
]

const automation = [
  'Ladder: follow NeverSink; restart the game to pull updates automatically.',
  'FilterBlade: refresh to the latest neversink 3.27 and restart the game to load it.',
  'Manual: watch GitHub releases, download, overwrite the old file, then Reload Filter in town.',
]

const faq = [
  {
    title: 'Which strictness should I use day‑to‑day?',
    description:
      'Leveling: Campaign/Semi. Yellow maps: Strict. Fast farming or pinnacle content: Very Strict or Uber. Keep neversink 3.27 readable without hiding needed items.',
  },
  {
    title: 'Do I need FilterBlade?',
    description:
      'Recommended, not required. FilterBlade makes neversink 3.27 updates safer and visual. Manual users can rely on GitHub releases.',
  },
  {
    title: 'How do I avoid missing drops?',
    description:
      'Test sounds and beams in town; when unsure, step down a level. As you learn neversink 3.27 cues, speed naturally improves.',
  },
]

export const metadata: Metadata = {
  title: 'NeverSink 3.27 Download & Beginner Guide',
  description:
    'Beginner‑friendly neversink 3.27 guide with official ladder follow, install/enable steps, strictness picking, update workflow, and practical tips.',
  alternates: { canonical: 'https://poe327.net/filters/neversink' },
  openGraph: {
    title: 'NeverSink 3.27 Download & Beginner Guide',
    description:
      'Follow on the PoE Item Filter Ladder, enable in‑game, pick strictness, learn cues, and stay updated via Ladder/FilterBlade/GitHub.',
    url: 'https://poe327.net/filters/neversink',
    siteName: 'poe327',
    type: 'article',
    images: [
      { url: '/images/keepers-flame-hero.jpg', width: 1200, height: 630, alt: 'neversink 3.27 hero screenshot' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeverSink 3.27 Download & Beginner Guide',
    description: 'Set up neversink 3.27 fast: Ladder follow, enable, strictness, updates, and tips.',
    images: ['/images/keepers-flame-hero.jpg'],
  },
}

export default function NeverSinkPage() {
  return (
    <>
      <PageHero
        title="NeverSink 3.27 Download & Beginner Guide"
        description="Clear, non‑templated walkthrough for first‑time users: follow on the PoE Item Filter Ladder, install/enable, strictness choices, update flow, and FAQs."
        image="/images/keepers-flame-hero.jpg"
        kicker="PoE 3.27"
        metrics={heroMetrics}
        actions={
          <>
            <a
              href="https://www.pathofexile.com/item-filter/ladder"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Follow on Item Filter Ladder
            </a>
            <a
              href="https://www.filterblade.xyz/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Open FilterBlade
            </a>
            <a
              href="https://github.com/NeverSinkDev/NeverSink-Filter/releases"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub Releases
            </a>
          </>
        }
      />

      <Section
        title="Official Options (Recommended First)"
        desc="Three official paths: follow on the PoE Item Filter Ladder (auto‑updates), edit/refresh via FilterBlade, or download zips from GitHub Releases. Prefer the Ladder for beginners."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="PoE Item Filter Ladder (recommended)" footer="Auto‑updates on game restart; no file management.">
            <ul className="list-disc pl-5">
              <li>Log in at pathofexile.com, search \"NeverSink\" and click Follow</li>
              <li>Select it in Options → Game → Item Filter</li>
            </ul>
            <a href="https://www.pathofexile.com/item-filter/ladder" target="_blank" rel="noreferrer" className="btn btn-primary mt-3">Open Ladder</a>
          </Card>
          <Card title="FilterBlade (editor)" footer="One‑click refresh to the latest neversink 3.27. Best for everyday use.">
            <ul className="list-disc pl-5">
              <li>Import/save your colors and strictness as presets</li>
              <li>Safer updates with visual diff</li>
            </ul>
            <a
              href="https://www.filterblade.xyz/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-3"
            >
              Open FilterBlade
            </a>
          </Card>
          <Card title="GitHub Releases" footer="Manual download/overwrite. Useful offline or for rollbacks.">
            <ul className="list-disc pl-5">
              <li>Official neversink 3.27 archives from the repository</li>
              <li>Pick historical versions for comparisons</li>
            </ul>
            <a
              href="https://github.com/NeverSinkDev/NeverSink-Filter/releases"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary mt-3"
            >
              Go to Releases
            </a>
          </Card>
        </div>
        <LastUpdated date="Nov 4, 2025" />
      </Section>

      <Section
        title="3‑Minute Setup"
        desc="Follow these pictures to follow on the Ladder (or download), place if needed, enable, and verify neversink 3.27, then pick the right strictness."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <Card key={s.title} title={s.title}>
              <p>{s.body}</p>
              <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image src={s.image} alt={s.alt} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Picking Strictness"
        kicker="Strictness"
        desc="Aim for clear signals without hiding useful items. The neversink 3.27 ladder covers every stage—match your current needs."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ladders.map((c) => (
            <Card key={c.title} title={c.title} footer={c.footer}>
              <p>{c.description}</p>
            </Card>
          ))}
        </div>
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image src="/images/keepers-hive.jpg" alt="Strictness guidance in practice" fill className="object-cover" />
        </div>
      </Section>

      <Section
        title="Stay Updated"
        kicker="Automation"
        desc="Early‑league prices shift quickly. Keep neversink 3.27 current to avoid mis‑valuing drops. Two simple paths:"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Ladder / FilterBlade refresh">
            <ul className="list-disc pl-5">
              {automation.slice(0, 2).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>
          <Card title="GitHub manual overwrite">
            <ul className="list-disc pl-5">
              {automation.slice(2).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image src="/images/keepers-oshabi.jpg" alt="Keeping your filter updated" fill className="object-cover" />
        </div>
      </Section>

      <Section
        title="Notes From The GitHub Repo"
        desc="What to know from https://github.com/NeverSinkDev/NeverSink-Filter before hand‑editing."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Release cadence">
            <p>Updates land before league start and multiple times during week one as prices settle. Expect hotfix bursts.</p>
          </Card>
          <Card title="Variants & strictness">
            <p>Regular → Semi → Strict → Very → Uber cover most use‑cases. Start lenient, tighten as clutter returns.</p>
          </Card>
          <Card title="Custom changes">
            <p>Prefer FilterBlade for visual diffs and safer merges. If editing .filter directly, keep backups and test with Reload Filter.</p>
          </Card>
        </div>
      </Section>

      <Section title="FAQ" desc="Quick answers so your neversink 3.27 stays comfortable and reliable.">
        <div className="grid gap-4 md:grid-cols-3">
          {faq.map((q) => (
            <Card key={q.title} title={q.title}>
              <p>{q.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
