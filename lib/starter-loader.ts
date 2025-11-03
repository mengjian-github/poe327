import { promises as fs } from 'fs'
import path from 'path'

import { load } from 'cheerio'
import sanitizeHtml from 'sanitize-html'

import type { StarterGuideMeta, StarterRole } from '@/data/starter-guides'
import { starterGuides } from '@/data/starter-guides'

export type StarterMetric = {
  label: string
  value: string
}

export type StarterHeading = {
  id: string
  text: string
  level: number
}

export type StarterGuide = StarterGuideMeta & {
  body: string
  headings: StarterHeading[]
  metrics: StarterMetric[]
}

const REF_ROOT = path.join(process.cwd(), 'ref-pages', 'starters')

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags: [
    'h2',
    'h3',
    'h4',
    'p',
    'ul',
    'ol',
    'li',
    'strong',
    'em',
    'a',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'blockquote',
    'code',
    'pre',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    img: ['src', 'alt'],
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    '*': ['colspan', 'rowspan'],
  },
  transformTags: {
    img: (tagName, attribs) => {
      if (!attribs.src) return { tagName: 'span', text: '' }
      return {
        tagName: 'img',
        attribs: {
          src: attribs.src,
          alt: attribs.alt ?? '',
        },
      }
    },
  },
  textFilter(text) {
    return text.replace(/\u00a0/g, ' ')
  },
}

const headingId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const roleOrder: Record<StarterRole, number> = {
  Melee: 0,
  Ranged: 1,
  Caster: 2,
  Summoner: 3,
}

export const roleArtwork: Record<StarterRole, { image: string; alt: string }> = {
  Melee: {
    image: '/images/starters/melee.svg',
    alt: 'Crimson-hued melee League Starter PoE 3.27 artwork with crossing blades.',
  },
  Ranged: {
    image: '/images/starters/ranged.svg',
    alt: 'Blue arc of arrows and targeting reticles for ranged League Starter PoE 3.27 builds.',
  },
  Caster: {
    image: '/images/starters/caster.svg',
    alt: 'Violet spell sigils representing caster League Starter PoE 3.27 archetypes.',
  },
  Summoner: {
    image: '/images/starters/summoner.svg',
    alt: 'Emerald silhouettes of summoned allies for summoner League Starter PoE 3.27 strategies.',
  },
}

export function listStarterGuides() {
  return [...starterGuides].sort((a, b) => {
    if (a.role === b.role) return a.title.localeCompare(b.title)
    return roleOrder[a.role] - roleOrder[b.role]
  })
}

export function findStarterMeta(slug: string) {
  return starterGuides.find((item) => item.slug === slug)
}

export async function getStarterGuide(slug: string): Promise<StarterGuide> {
  const meta = findStarterMeta(slug)
  if (!meta) {
    throw new Error(`Starter guide not found for slug "${slug}"`)
  }

  const filePath = path.join(REF_ROOT, meta.file)
  const raw = await fs.readFile(filePath, 'utf8')
  const $ = load(raw)

  const main = $('main').first()
  const article = main.children('article').first()
  if (!article.length) {
    throw new Error(`No article content found for starter "${meta.title}"`)
  }

  const metrics: StarterMetric[] = []
  article.find('.poe-difficulty-bar-item').each((_, el) => {
    const label = $(el).find('.poe-title').first().text().trim()
    const value = $(el).find('.poe-subtitle').first().text().trim()

    if (label && value) {
      metrics.push({
        label,
        value,
      })
    }
  })

  const working = article.clone()

  working.find('figure.embed, .poe-embed, script, style, iframe, noscript, video, source').remove()

  working.find('h2').each((_, el) => {
    const heading = $(el).text().trim().toLowerCase()
    if (heading === 'build tool' || heading === 'related posts') {
      const $el = $(el)
      const next = $el.next()
      if (next && next.is('ul')) {
        next.remove()
      }
      $el.remove()
    }
  })

  working.find('[style], [class], [id], [data-pogo]').each((_, el) => {
    const $el = $(el)
    $el.removeAttr('style')
    $el.removeAttr('class')
    $el.removeAttr('id')
    $el.removeAttr('data-pogo')
  })

  working.find('.poe-item').each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim()
    $(el).replaceWith(text)
  })

  working.find('button').each((_, el) => {
    const text = $(el).text().trim()
    $(el).replaceWith(text)
  })

  working.find('span').each((_, el) => {
    const $el = $(el)
    if ($el.find('img').length > 0) return
    const text = $el.text()
    $el.replaceWith(text)
  })

  working.find('a').each((_, el) => {
    const $el = $(el)
    const href = $el.attr('href')
    if (!href) {
      $el.replaceWith($el.text())
      return
    }

    let resolved = href
    if (href.startsWith('javascript')) {
      $el.replaceWith($el.text())
      return
    }
    if (href.startsWith('/@')) {
      resolved = `https://pobb.in${href}`
    } else if (href.startsWith('/')) {
      resolved = `https://maxroll.gg${href}`
    } else if (href.startsWith('https://https://')) {
      resolved = href.replace('https://https://', 'https://')
    }
    $el.attr('href', resolved)
    $el.attr('target', '_blank')
    $el.attr('rel', 'noopener noreferrer')
  })

  working.find('div').each((_, el) => {
    const $el = $(el)
    if (!$el.text().trim() && !$el.children().length) {
      $el.remove()
    }
  })

  const headings: StarterHeading[] = []
  working.find('h2, h3, h4').each((_, el) => {
    const $el = $(el)
    const text = $el.text().trim()
    if (!text) {
      $el.remove()
      return
    }
    const id = headingId(text)
    $el.attr('id', id)
    const level = Number(el.tagName.replace('h', '')) || 2
    headings.push({ id, text, level })
  })

  const sanitized = sanitizeHtml(working.html() ?? '', sanitizeOptions)

  return {
    ...meta,
    body: sanitized,
    headings,
    metrics,
  }
}
