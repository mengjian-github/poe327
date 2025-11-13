import type { MetadataRoute } from 'next'

import { starterGuides } from '@/data/starter-guides'

const siteUrl = 'https://poe327.net'

type StaticRoute = {
  path: string
  changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']
  priority?: number
  lastModified?: string | Date
}

const staticRoutes: StaticRoute[] = [
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/filters', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/filters/neversink', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/trade/awakened', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/trade/official', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/betrayal-cheatsheet', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/patch-notes', changeFrequency: 'daily', priority: 0.8 },
  { path: '/getting-started', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/starters', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/challenge', changeFrequency: 'weekly', priority: 0.8 },
]

function parseLastUpdated(value?: string) {
  if (!value) return new Date()
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return new Date()
  return parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const starterRoutes: MetadataRoute.Sitemap = starterGuides.map((starter) => ({
    url: `${siteUrl}/starters/${starter.slug}`,
    lastModified: parseLastUpdated(starter.lastUpdated),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const mainRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified ? new Date(route.lastModified) : new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [...mainRoutes, ...starterRoutes]
}
