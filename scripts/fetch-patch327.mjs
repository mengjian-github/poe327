import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import { execSync } from 'child_process'

const outPath = path.join(process.cwd(), 'poe327', 'data', 'patch327.generated.json')

function isoToday() {
  return new Date().toISOString().slice(0, 10)
}

function toItem({ id, date, title, type, summary, bullets = [], image, sourceUrl }) {
  return { id, date, title, type, summary, bullets, image, sourceUrl }
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'poe327-patch-fetch/1.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
    return await res.text()
  } catch (e) {
    // Fallback to curl in environments where fetch is blocked/proxied
    const out = execSync(`curl -sL ${JSON.stringify(url)}`, { encoding: 'utf8' })
    if (!out || out.length < 32) throw e
    return out
  }
}

async function fetchWiki() {
  const url = 'https://www.poewiki.net/wiki/Version_3.27.0'
  try {
    const html = await fetchText(url)
    const $ = cheerio.load(html)
    const title = $('h1').first().text().trim() || 'Version 3.27.0'
    const firstPara = $('p').first().text().trim()
    const summary = firstPara.slice(0, 300)
    // Wiki often includes release date near the infobox; fallback to Oct 31, 2025
    const date = '2025-10-31'
    return [
      toItem({
        id: '2025-10-31-wiki-3270',
        date,
        title: `${title} (Wiki Digest)`,
        type: 'notes',
        summary: summary || 'Community-maintained digest for patch notes poe 3.27 with sections for league, balance and systems.',
        bullets: [
          'Challenge League, Bloodlines, Atlas, Items sections mirrored.',
          'Editable callouts for missing data and corrections.',
        ],
        image: '/images/keepers-supporter.jpg',
        sourceUrl: url,
      }),
    ]
  } catch (e) {
    console.warn('Wiki fetch failed:', e.message)
    return []
  }
}

async function fetchForumIndex() {
  const url = 'https://www.pathofexile.com/forum/view-forum/patch-notes'
  try {
    const html = await fetchText(url)
    const $ = cheerio.load(html)
    const items = []
    // Forum index renders rows; prefer structured selection for thread rows
    $('.thread .thread_title .title a').each((_, a) => {
      const text = $(a).text().trim()
      const href = $(a).attr('href') || ''
      if (!href.includes('/forum/view-thread/')) return
      if (!/3\.27|Hotfix|Content Update 3\.27/i.test(text)) return
      const title = text.replace(/\s+/g, ' ')
      const type = /Hotfix/i.test(title) ? 'hotfix' : /Content Update/i.test(title) ? 'notes' : 'notes'
      const fullUrl = new URL(href, 'https://www.pathofexile.com').toString()
      items.push({ title, url: fullUrl, type })
    })
    return items
  } catch (e) {
    console.warn('Forum index fetch failed:', e.message)
    return []
  }
}

async function fetchForumThread(item) {
  try {
    const html = await fetchText(item.url)
    const $ = cheerio.load(html)
    const firstPost = $('.post_content').first().text().trim().replace(/\s+/g, ' ')
    const summary = firstPost ? firstPost.slice(0, 300) : 'See official forum thread for full details.'
    // Try to find a date string near the header; fallback to today
    let date = isoToday()
    const dateText = $('.post_date').first().text().trim()
    const match = dateText.match(/(\w+ \d{1,2}, \d{4})/)
    if (match) {
      date = new Date(match[1]).toISOString().slice(0, 10)
    }
    return toItem({
      id: `${date}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      date,
      title: item.title,
      type: item.type,
      summary: summary || 'See official forum thread for full details.',
      bullets: [],
      image: '/images/keepers-encounter.jpg',
      sourceUrl: item.url,
    })
  } catch (e) {
    console.warn('Thread fetch failed:', item.url, e.message)
    return null
  }
}

async function main() {
  const out = []
  out.push(...(await fetchWiki()))
  const idx = await fetchForumIndex()
  for (const it of idx.slice(0, 12)) {
    const full = await fetchForumThread(it)
    if (full) out.push(full)
  }
  if (!out.length) {
    console.error('No items fetched; aborting without writing file.')
    process.exit(1)
  }
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8')
  console.log(`Wrote ${out.length} items to ${outPath}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
