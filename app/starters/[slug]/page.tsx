import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Flame, MapPin } from 'lucide-react'

import { Card } from '@/components/ui'
import type { StarterGuideMeta } from '@/data/starter-guides'
import { findStarterMeta, getStarterGuide, listStarterGuides, roleArtwork } from '@/lib/starter-loader'

type PageParams = {
  slug: string
}

type PageProps = {
  params: PageParams
}

const KEY_PHRASE = 'League Starter PoE 3.27'

const buildMetaDescription = (meta: StarterGuideMeta) => {
  const base = `${meta.skill} ${KEY_PHRASE} guide for the ${meta.ascendancy} ascendancy covering PoB import, leveling cues, and Keepers launch pivots.`
  const cleanSummary = meta.summary.replace(/\s+/g, ' ').trim()

  let description = base

  if (description.length < 140 && cleanSummary) {
    const remaining = Math.min(cleanSummary.length, 160 - description.length - 1)
    if (remaining > 0) {
      description = `${description} ${cleanSummary.slice(0, remaining).trimEnd()}`
    }
  }

  if (description.length > 160) {
    description = `${description.slice(0, 157).replace(/[\s,;:-]+$/, '')}…`
  } else if (description.length < 140 && cleanSummary) {
    const needed = Math.min(cleanSummary.length, 140 - description.length)
    description = `${description} ${cleanSummary.slice(0, needed).trimEnd()}`
    if (description.length > 160) {
      description = `${description.slice(0, 157).replace(/[\s,;:-]+$/, '')}…`
    }
  }

  if (description.length < 140) {
    description = `${description} ${KEY_PHRASE}`.trim()
    if (description.length > 160) {
      description = `${description.slice(0, 157).replace(/[\s,;:-]+$/, '')}…`
    }
  }

  return description
}

export async function generateStaticParams() {
  return listStarterGuides().map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meta = findStarterMeta(params.slug)
  if (!meta) {
    return {}
  }

  const description = buildMetaDescription(meta)
  const title = `${meta.title} – League Starter PoE 3.27`
  const url = `https://poe327.net/starters/${meta.slug}`
  const artwork = roleArtwork[meta.role]

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'poe327',
      tags: [meta.role, meta.ascendancy, KEY_PHRASE],
      images: [
        {
          url: artwork.image,
          width: 960,
          height: 640,
          alt: artwork.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const roleCopy: Record<string, string> = {
  Melee: 'Frontline bruiser',
  Ranged: 'Projectile specialist',
  Caster: 'Spell engine',
  Summoner: 'Commander of minions',
}

export default async function StarterGuidePage({ params }: PageProps) {
  const guide = await getStarterGuide(params.slug).catch(() => null)

  if (!guide) {
    notFound()
  }

  const related = listStarterGuides()
    .filter((item) => item.slug !== guide.slug && item.role === guide.role)
    .slice(0, 6)
  const artwork = roleArtwork[guide.role]

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-black/60 via-[#151a27]/80 to-black/40 pb-12 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_55%)]" />

        <div className="container relative z-10 flex flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,_3fr)_minmax(260px,_1fr)] items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/70">
                <span className="pill bg-white/10 text-white/80">
                  <Flame size={14} />
                  {guide.ascendancy}
                </span>
                <span className="pill bg-brand/20 text-brand font-semibold">{guide.role}</span>
                <span className="pill bg-white/10 text-white/70">{guide.attribute}</span>
                {guide.lastUpdated && (
                  <span className="pill bg-white/10 text-white/60">
                    Last updated&nbsp;
                    {guide.lastUpdated}
                  </span>
                )}
              </div>

              <h1 className="h1 text-balance text-white">{guide.title}</h1>
              <p className="text-lg text-white/75">{guide.summary}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/starter" className="btn btn-ghost">
                  <ArrowLeft size={16} />
                  Back to League Starter PoE 3.27 index
                </Link>
                {guide.pob && (
                  <a href={guide.pob} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Open PoB or Planner
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <div className="relative aspect-[4/5] md:aspect-[3/4]">
                  <Image
                    src={artwork.image}
                    alt={artwork.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 70vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <Card className="bg-white/5">
                <p className="text-xs uppercase tracking-widest text-white/60">League Starter Role</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{roleCopy[guide.role] ?? 'League specialist'}</h2>
                <p className="text-sm text-white/70">
                  {guide.role === 'Summoner'
                    ? 'Leverages minions and damage-over-time to clear maps while staying off the front line.'
                    : guide.role === 'Melee'
                      ? 'Pushes through Keepers objectives face-first with layered mitigation and reliable stun uptime.'
                      : guide.role === 'Ranged'
                        ? 'Controls lanes with projectiles, ballista deployments, and safe positioning for Ailith escorts.'
                        : 'Stacks spell scaling and damage conversion to rush campaign milestones then pivot into Atlas bossing.'}
                </p>
              </Card>
            </div>
          </div>

          {guide.metrics.length > 0 && (
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {guide.metrics.map((metric) => (
                <div key={metric.label} className="metric bg-white/10">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container mt-12 grid gap-10 lg:grid-cols-[minmax(0,_3fr)_minmax(240px,_1fr)]">
        <div>
          <div className="starter-content" dangerouslySetInnerHTML={{ __html: guide.body }} />
        </div>

        <aside className="flex flex-col gap-8">
          {guide.headings.length > 0 && (
            <Card className="sticky top-24 h-fit space-y-4 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-white/60">Encounter Flow</p>
              <h2 className="text-lg font-semibold text-white">Quick Navigation</h2>
              <nav className="space-y-2 text-sm">
                {guide.headings.map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`} className="block rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">
                    {heading.text}
                  </a>
                ))}
              </nav>
            </Card>
          )}

          {related.length > 0 && (
            <Card className="space-y-4 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-white/60">Same Role Picks</p>
              <h2 className="text-lg font-semibold text-white">Alternate League Starters</h2>
              <ul className="space-y-3 text-sm text-white/70">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/starters/${item.slug}`} className="flex items-center gap-2 text-white/80 hover:text-brand">
                      <MapPin size={14} className="text-brand" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </aside>
      </section>
    </div>
  )
}
