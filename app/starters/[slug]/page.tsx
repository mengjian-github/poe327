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

export default async function StarterPage({ params }: Props) {
  const meta = starterGuides.find((s) => s.slug === params.slug)
  if (!meta) notFound()

  const filePath = path.join(process.cwd(), 'ref-pages', 'starters', meta.file)
  let html = ''
  try {
    html = await fs.readFile(filePath, 'utf8')
  } catch {
    notFound()
  }

  return (
    <main>
      <PageHero
        title={meta.title}
        description={meta.summary}
        image="/images/keepers-supporter.jpg"
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
    </main>
  )
}

