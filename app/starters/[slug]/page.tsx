import type { Metadata } from 'next'
import fs from 'node:fs/promises'
import path from 'node:path'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { PageHero } from '@/components/page-hero'
import { LastUpdated, Card } from '@/components/ui'
import { transformStarterHtml, extractHeadings } from '@/lib/ref-html'
import { curatedStarters } from '@/curated/starters'
import { ArticleTOC } from '@/components/article-toc'
import { CuratedTOC } from '@/components/curated-toc'
import { starterGuides, type StarterGuideMeta } from '@/data/starter-guides'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return starterGuides.map((s) => ({ slug: s.slug }))
}

function buildSeoTitle(title: string) {
  const trimmed = title.replace(/\s+League Starter$/, '')
  return `${trimmed} | PoE 3.27`
}

function getRelatedStarters(current: StarterGuideMeta, max = 4) {
  const sameAscendancy = starterGuides.filter(
    (guide) => guide.slug !== current.slug && guide.ascendancy === current.ascendancy,
  )
  const sameRole = starterGuides.filter(
    (guide) =>
      guide.slug !== current.slug && guide.role === current.role && guide.ascendancy !== current.ascendancy,
  )
  const everyoneElse = starterGuides.filter(
    (guide) =>
      guide.slug !== current.slug && guide.ascendancy !== current.ascendancy && guide.role !== current.role,
  )

  const ordered = [...sameAscendancy, ...sameRole, ...everyoneElse]
  const unique = ordered.filter((guide, index, arr) => arr.findIndex((g) => g.slug === guide.slug) === index)
  return unique.slice(0, max)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = starterGuides.find((s) => s.slug === slug)
  if (!meta) return { title: 'Starter Not Found' }
  const seoTitle = buildSeoTitle(meta.title)
  return {
    title: seoTitle,
    description: meta.summary,
    alternates: { canonical: `https://poe327.net/starters/${meta.slug}` },
    openGraph: {
      title: seoTitle,
      description: meta.summary,
      type: 'article',
      url: `https://poe327.net/starters/${meta.slug}`,
      images: [{ url: '/images/poe327-hero.webp', width: 1200, height: 630 }],
    },
  }
}

function heroFor(role: string) {
  if (role === 'Melee') return '/images/keepers-encounter.jpg'
  if (role === 'Ranged') return '/images/keepers-kineticrain.jpg'
  if (role === 'Caster') return '/images/keepers-async.jpg'
  if (role === 'Summoner') return '/images/keepers-hive.jpg'
  return '/images/keepers-supporter.jpg'
}

export default async function StarterPage({ params }: Props) {
  const { slug } = await params
  const meta = starterGuides.find((s) => s.slug === slug)
  if (!meta) notFound()
  const relatedStarters = getRelatedStarters(meta)

  // Prefer curated content when available, fallback to transformed reference HTML.
  const Curated = curatedStarters[slug]
  const useCurated = Boolean(Curated)
  let clean = ''
  let toc: { id: string; text: string; level: 2 | 3 }[] = []
  if (!useCurated) {
    const filePath = path.join(process.cwd(), 'ref-pages', 'starters', meta.file)
    let html = ''
    try {
      html = await fs.readFile(filePath, 'utf8')
    } catch {
      html = `
        <h2>Guide Under Construction</h2>
        <p>We are preparing the full write-up for <strong>${meta.title}</strong>. In the meantime, follow the Getting Started guide for gearing and mapping basics.</p>
        <ul>
          <li>Role: ${meta.role} — Attribute: ${meta.attribute} — Ascendancy: ${meta.ascendancy}</li>
          <li>Core skill: ${meta.skill}</li>
        </ul>
      `
    }
    clean = transformStarterHtml(html)
    toc = extractHeadings(clean)
  }

  return (
    <main>
      <PageHero
        title={meta.title}
        description={meta.summary}
        image={heroFor(meta.role)}
        kicker="League Starters"
      />
      <div className="container flex justify-center">
        <LastUpdated date={meta.lastUpdated ?? 'Updated recently'} />
      </div>
      {/* The reference content ships as static HTML and is transformed into site-styled rich content. */}
      <div className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card title="Role"><p>{meta.role}</p></Card>
            <Card title="Ascendancy"><p>{meta.ascendancy}</p></Card>
            <Card title="Core Skill"><p>{meta.skill}</p></Card>
          </div>

          <article className="starter-content">
            {useCurated ? <Curated meta={meta} /> : <div dangerouslySetInnerHTML={{ __html: clean }} />}
          </article>

          {relatedStarters.length > 0 && (
            <section>
              <h3>Related League Starters</h3>
              <p className="text-white/80">
                Jump to another proven 3.27 build if you want a different role or ascendancy but the same level of
                polish.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {relatedStarters.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/starters/${guide.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/40"
                  >
                    <p className="text-sm text-white/60">
                      {guide.ascendancy} • {guide.role}
                    </p>
                    <p className="font-semibold text-white group-hover:text-amber-200">
                      {guide.title.replace(/\s+League Starter$/, '')}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3>In‑Action Gallery</h3>
            <p className="text-white/80">Quick captures to give you a feel for the vibe while mapping and bossing.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <img src="/images/keepers-uberboss.jpg" alt="Bossing" className="rounded-2xl" />
              <img src="/images/foulborn-loot.jpg" alt="Loot pile" className="rounded-2xl" />
              <img src="/images/genesis-tree.jpg" alt="Atlas planning" className="rounded-2xl" />
            </div>
          </section>
        </div>
        <div className="hidden lg:block">
          {useCurated ? <CuratedTOC /> : <ArticleTOC items={toc} />}
        </div>
      </div>
    </main>
  )
}
