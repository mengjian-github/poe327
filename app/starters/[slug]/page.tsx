import type { Metadata } from 'next'
import fs from 'node:fs/promises'
import path from 'node:path'
import { notFound } from 'next/navigation'

import { PageHero } from '@/components/page-hero'
import { LastUpdated } from '@/components/ui'
import { starterGuides } from '@/data/starter-guides'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return starterGuides.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = starterGuides.find((s) => s.slug === params.slug)
  if (!meta) return { title: 'Starter Not Found' }
  return {
    title: `${meta.title} — PoE 3.27 Starter Guide`,
    description: meta.summary,
    alternates: { canonical: `https://poe327.net/starters/${meta.slug}` },
    openGraph: {
      title: `${meta.title} — PoE 3.27 Starter Guide`,
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
  const meta = starterGuides.find((s) => s.slug === params.slug)
  if (!meta) notFound()

  const filePath = path.join(process.cwd(), 'ref-pages', 'starters', meta.file)
  let html = ''
  try {
    html = await fs.readFile(filePath, 'utf8')
  } catch {
    html = `
      <main class=\"container prose prose-invert\">
        <h2>Guide Under Construction</h2>
        <p>We are preparing the full write‑up for <strong>${meta.title}</strong>. In the meantime, use the PoB link above and the Getting Started guide for gearing and mapping basics.</p>
        <ul>
          <li>Role: ${meta.role} — Attribute: ${meta.attribute} — Ascendancy: ${meta.ascendancy}</li>
          <li>Core skill: ${meta.skill}</li>
        </ul>
      </main>
    `
  }

  return (
    <main>
      <PageHero
        title={meta.title}
        description={meta.summary}
        image={heroFor(meta.role)}
        kicker="League Starters"
        actions={
          meta.pob ? (
            <a href={meta.pob} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open POB
            </a>
          ) : undefined
        }
      />
      <div className="container flex justify-center">
        <LastUpdated date={meta.lastUpdated ?? 'Updated recently'} />
      </div>
      {/* The reference content ships as static HTML in ref-pages. We render it directly here. */}
      <div className="container prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
        <hr />
        <section>
          <h3>In‑Action Gallery</h3>
          <p>Quick captures to give you a feel for the vibe while mapping and bossing.</p>
          <div class=\"grid gap-4 md:grid-cols-3\">
            <img src=\"/images/keepers-uberboss.jpg\" alt=\"Bossing\" class=\"rounded-2xl\" />
            <img src=\"/images/foulborn-loot.jpg\" alt=\"Loot pile\" class=\"rounded-2xl\" />
            <img src=\"/images/genesis-tree.jpg\" alt=\"Atlas planning\" class=\"rounded-2xl\" />
          </div>
        </section>
      </div>
    </main>
  )
}
