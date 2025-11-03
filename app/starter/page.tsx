import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Flame, Ghost, Sparkles, Swords, Target } from 'lucide-react'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import { listStarterGuides, roleArtwork } from '@/lib/starter-loader'
import type { StarterGuideMeta } from '@/data/starter-guides'

const KEY_PHRASE = 'League Starter PoE 3.27'

const roleMeta = {
  Melee: {
    title: 'Frontline Assault',
    description: `These ${KEY_PHRASE} melee starters lean on armour stacking, trauma scaling, and retaliate bleeds so Keepers squads can escort Ailith without losing pace.`,
    icon: <Swords size={22} />,
    artwork: roleArtwork.Melee,
  },
  Ranged: {
    title: 'Precision Barrage',
    description: `Ranged ${KEY_PHRASE} openers front-load projectiles, ignites, and tempo ballistas to police Hive objectives from safe angles while async trade wakes up.`,
    icon: <Target size={22} />,
    artwork: roleArtwork.Ranged,
  },
  Caster: {
    title: 'Spell Engines',
    description: `Caster-focused ${KEY_PHRASE} picks layer traps, mines, and channelled bursts to delete bosses once Genesis grafts unlock, keeping momentum through atlas pivots.`,
    icon: <Sparkles size={22} />,
    artwork: roleArtwork.Caster,
  },
  Summoner: {
    title: 'Command & Control',
    description: `Summoner ${KEY_PHRASE} builds weaponise minions and poisons so your party controls breach density while the league economy matures.`,
    icon: <Ghost size={22} />,
    artwork: roleArtwork.Summoner,
  },
} as const

const guides = listStarterGuides()

const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const latestUpdate = guides
  .map((guide) => (guide.lastUpdated ? new Date(guide.lastUpdated) : null))
  .filter((value): value is Date => Boolean(value))
  .sort((a, b) => b.getTime() - a.getTime())[0]

const heroMetrics = [
  { label: 'Build dossiers', value: `${guides.length} starters` },
  { label: 'Role coverage', value: 'Melee · Ranged · Caster · Summoner' },
  { label: 'Latest refresh', value: latestUpdate ? formatter.format(latestUpdate) : 'October 2025' },
]

const roleBuckets = guides.reduce<Record<string, StarterGuideMeta[]>>((acc, guide) => {
  if (!acc[guide.role]) {
    acc[guide.role] = []
  }
  acc[guide.role]!.push(guide)
  return acc
}, {})

const META_DESCRIPTION =
  'Explore role-sorted League Starter PoE 3.27 builds with PoB links, leveling routes, and Keepers launch pivots so your squad hits maps fast on October 31.'

function truncate(text: string, limit = 220) {
  if (text.length <= limit) return text
  return `${text.slice(0, limit - 1).trimEnd()}…`
}

export const metadata: Metadata = {
  title: 'League Starter PoE 3.27 Build Library',
  description: META_DESCRIPTION,
  alternates: {
    canonical: 'https://poe327.net/starter',
  },
  openGraph: {
    title: 'League Starter PoE 3.27 Build Library',
    description: META_DESCRIPTION,
    url: 'https://poe327.net/starter',
    siteName: 'poe327',
    type: 'website',
    images: [
      {
        url: '/images/keepers-flame-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'League Starter PoE 3.27 library interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'League Starter PoE 3.27 Build Library',
    description: META_DESCRIPTION,
    images: ['/images/keepers-flame-hero.jpg'],
  },
}

export default function StarterLibrary() {
  return (
    <>
      <PageHero
        title="League Starter PoE 3.27 Build Library"
        description={`Every ${KEY_PHRASE} route you need sits here: curated Keepers openers, playback-ready PoB anchors, and night-one economy notes. Review the ${KEY_PHRASE} meta by role, lock the plan that fits your crew, and script pivots before Genesis missions spawn so the ${KEY_PHRASE} rush never stalls.`}
        image="/images/keepers-flame-hero.jpg"
        kicker="Keepers launch prep"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated
          date={`${latestUpdate ? formatter.format(latestUpdate) : 'October 2025'} — Library synced for ${KEY_PHRASE}`}
        />
      </div>

      <Section
        title="Draft Your Opening Path"
        desc={`Start by picking the ${KEY_PHRASE} archetype that matches your party role, then dive into the detail pages for PoB links, leveling cues, and Atlas pivots. Each dossier packages the same ${KEY_PHRASE} field intel—campaign splits, gear ladders, and boss contingencies—so you can swap strategies without rebuilding notes.`}
        kicker="Launch checklist"
      >
        <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          <Card title="How to use this library" icon={<Flame size={22} />}>
            <ul className="list-disc space-y-2 pl-4 text-white/75">
              <li>
                Lock a role, skim the summary, then open the detailed {KEY_PHRASE} page for exact gem links and Atlas swaps.
              </li>
              <li>
                Compare PoB or planner links to your party’s stash state; every {KEY_PHRASE} file flags low, moderate, or high budget paths.
              </li>
              <li>
                Pin two alternates per role so you can flip instantly if manifesto nerfs land before the {KEY_PHRASE} reveal.
              </li>
            </ul>
          </Card>
          <Card title="Signals worth tracking">
            <p>
              Keepers of the Flame adds Living Grafts, Marshal Vruun hunts, and async trade delays. The library tags which {KEY_PHRASE} picks exploit those mechanics so your guild rotates efficiently from
              Hive escort to red-map rush.
            </p>
            <p className="text-white/70">
              When hotfixes ship, this page reorders standout guides—watch the Last Updated pill and rescan your shortlist before locking SSF or trade league ladders.
            </p>
          </Card>
        </div>
      </Section>

      {Object.entries(roleMeta).map(([role, meta]) => {
        const builds = roleBuckets[role] ?? []
        if (builds.length === 0) {
          return null
        }

        return (
          <Section
            key={role}
            id={role.toLowerCase()}
            title={`${meta.title}`}
            desc={meta.description}
            kicker={`${role} dossiers`}
            actions={
              <Link href={`#${role.toLowerCase()}`} className="pill bg-white/10 text-white/70">
                {meta.icon}
                <span>{role}</span>
              </Link>
            }
          >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {builds.map((guide, idx) => (
                <Card
                  key={guide.slug}
                  eyebrow={<span className="text-xs font-semibold text-brand">{guide.ascendancy}</span>}
                  title={guide.skill}
                  icon={<ArrowRight size={18} />}
                  footer={
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>{guide.lastUpdated ?? 'October 2025'}</span>
                      <Link href={`/starters/${guide.slug}`} className="inline-flex items-center gap-1 text-brand hover:text-brand-dark">
                        View playbook
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  }
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={meta.artwork.image}
                        alt={meta.artwork.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 40vw, 90vw"
                        priority={role === 'Melee' && idx === 0}
                      />
                    </div>
                  </div>
                  <p>{truncate(guide.summary, 220)}</p>
                  {guide.pob && (
                    <a href={guide.pob} className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-brand" target="_blank" rel="noopener noreferrer">
                      <ArrowRight size={14} />
                      Open PoB / planner
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </Section>
        )
      })}
    </>
  )
}
