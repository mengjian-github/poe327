import fs from 'node:fs/promises'
import path from 'node:path'
import { load } from 'cheerio'
import fetch from 'node-fetch'

const ROOT = process.cwd()
const dataPath = path.join(ROOT, 'poe327', 'data', 'starter-guides.ts')
const refDir = path.join(ROOT, 'poe327', 'ref-pages', 'starters')
const curatedDir = path.join(ROOT, 'poe327', 'curated', 'starters')
const publicDir = path.join(ROOT, 'poe327', 'public', 'images', 'starters')

function parseGuides(text) {
  const items = []
  const re = /\{\s*slug:\s*'([^']+)'[^}]*?title:\s*'([^']+)'[^}]*?file:\s*'([^']+)'([^}]*)\}/gms
  let m
  while ((m = re.exec(text))) {
    const slug = m[1]
    const title = m[2]
    const file = m[3]
    const rest = m[4]
    const pobMatch = /pob:\s*'([^']+)'/.exec(rest)
    const pob = pobMatch ? pobMatch[1] : ''
    items.push({ slug, title, file, pob })
  }
  return items
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

function pickImagesFromHtml(html) {
  const $ = load(html)
  const blacklist = /(avatar|author|face|profile|headshot|logo|favicon|icon|arrow|caret|chevron|sprite|pixel|tracker|beacon|banner|header|footer|nav|social|share|tag|badge|emoji|placeholder|spacer|dot|point|divider|comment|user|thumbs?-?up|down|maxroll)/i
  const adlike = /(ads|advert|doubleclick|impressions|analytics)/i
  const badExt = /(\.svg($|\?)|^data:)/i
  const allowExt = /(\.jpe?g($|\?)|\.png($|\?)|\.webp($|\?))/i
  const whitelistHint = /(build|guide|boss|map|atlas|gear|item|skill|gameplay|video|thumbnail|thumb|screenshot|content|poe|league)/i
  const seen = new Set()
  const candidates = []

  $('img[src]').each((_, el) => {
    let src = ($(el).attr('src') || '').trim()
    if (!src) return
    if (badExt.test(src)) return
    if (!allowExt.test(src)) return
    const alt = ($(el).attr('alt') || '').trim()
    const w = parseInt($(el).attr('width') || '0', 10)
    const h = parseInt($(el).attr('height') || '0', 10)
    // absolute URL only
    if (!/^https?:\/\//i.test(src)) return
    // blacklist
    if (blacklist.test(src) || blacklist.test(alt) || adlike.test(src)) return
    // dimension guard when present
    if (w && h) {
      const min = Math.min(w, h)
      const aspect = w && h ? Math.max(w, h) / Math.max(1, Math.min(w, h)) : 1
      if (min < 200) return
      if (aspect > 3.5) return
    }
    // whitelist bias: prefer URLs that look like content imagery
    const score = (whitelistHint.test(src) || whitelistHint.test(alt)) ? 2 : 0
    // de-dup by filename
    try {
      const u = new URL(src)
      const base = (u.pathname.split('/').pop() || '').toLowerCase()
      if (base && seen.has(base)) return
      if (base) seen.add(base)
    } catch {}
    candidates.push({ src, alt, w, h, score })
  })

  candidates.sort((a, b) => (b.score - a.score) || ((b.w*b.h) - (a.w*a.h)))
  return candidates.slice(0, 6)
}

function extFromUrl(u) {
  const p = new URL(u)
  const nm = p.pathname.split('/').pop() || 'img'
  const dot = nm.lastIndexOf('.')
  return dot > -1 ? nm.slice(dot) : '.jpg'
}

async function download(url, outPath) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(res.statusText)
    const buf = await res.arrayBuffer()
    await fs.writeFile(outPath, Buffer.from(buf))
  } catch (e) {
    // ignore failures silently
  }
}

function mediaCard(title, image, items) {
  const lis = items.map((t) => `<li>${t}</li>`).join('\n                ')
  return `          <MediaCard
            image="${image}"
            heading="${title}"
            body={
              <ul className=\"list-disc pl-5\">
                ${lis}
              </ul>
            }
          />\n`
}

function buildComponent(slug, title, images, pob) {
  const hero1 = images[0] || '/images/keepers-encounter.jpg'
  const hero2 = images[1] || '/images/keepers-async.jpg'
  const hero3 = images[2] || '/images/keepers-hive.jpg'
  const gallery = images.slice(0, 6)
  return `import type { CuratedProps } from './index'
import React from 'react'
import { GuideSection } from '@/components/visual/GuideSection'
import { MediaCard } from '@/components/visual/MediaCard'
import { IconBadge } from '@/components/visual/IconBadge'
import { StatCallout } from '@/components/visual/StatCallout'
import { Gallery } from '@/components/visual/Gallery'

export default function ${slug.split('-').map((s)=>s[0].toUpperCase()+s.slice(1)).join('')}({ meta }: CuratedProps) {
  return (
    <div>
      <GuideSection title="Why This Starter Works" desc="Curated for day‑1 mapping: reliable defences, clear upgrade path.">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <StatCallout title="Defense" text="Layered mitigation and recovery keep you safe while learning maps." />
          <StatCallout title="Damage" text="Scales cleanly from campaign into early reds with modest gear." />
          <StatCallout title="Budget" text="No mandatory uniques; invest first into the weapon slot." />
        </div>
      </GuideSection>

      <GuideSection title="Leveling Route">
        <div className="space-y-8">
${mediaCard('Acts 1–3', hero1, ['Use your league‑start skill as soon as available.', 'Path early life/mobility; pick a 3‑link for bosses.', 'Keep flasks updated every Act.'])}
${mediaCard('Acts 4–6', hero2, ['Add supports as sockets appear; pick up guard skills.', 'Upgrade weapon base every 2–3 Acts.', 'Cap resistances before Kitava.']).replace('MediaCard', 'MediaCard').replace('body={', 'reverse\n            body={')}
${mediaCard('Acts 7–10', hero3, ['Target a basic 4–5 link and a movement skill.', 'Allocate key defensive notables before mapping.', 'Finish labs along the way.'])}
        </div>
      </GuideSection>

      <GuideSection title="Ascendancy">
        <div className="grid gap-4 md:grid-cols-4">
          <IconBadge label="1. Core node" />
          <IconBadge label="2. Mobility/defense" />
          <IconBadge label="3. Damage" />
          <IconBadge label="4. Flex" />
        </div>
      </GuideSection>

      <GuideSection title="Early Gear Priorities">
        <div className="grid gap-4 md:grid-cols-2">
          <StatCallout title="Resistances" text="Hit 75% all res ASAP in maps." />
          <StatCallout title="Weapon First" text="Upgrade damage on the main skill gem setup before luxuries." />
          <StatCallout title="Life & Mitigation" text="Life on every slot; pick armour/evasion/ES bases appropriate to the build." />
          <StatCallout title="Flasks" text="One movement, one life, two defensive; roll bleed/freeze immunity." />
        </div>
      </GuideSection>

      ${pob ? `<GuideSection title="PoB">\n        <p>Latest tree and gems: <a href={meta.pob} target=\"_blank\" rel=\"noopener noreferrer\" className=\"btn btn-primary ml-2\">Open PoB</a></p>\n      </GuideSection>` : ''}

      <GuideSection title="In‑Action Gallery">
        <Gallery images={[${gallery.map((g)=>`'${g}'`).join(',')}]} />
      </GuideSection>
    </div>
  )
}
`
}

async function run() {
  const txt = await fs.readFile(dataPath, 'utf8')
  const guides = parseGuides(txt)
  await ensureDir(curatedDir)
  await ensureDir(publicDir)

  // Collect imports for index
  const imports = []
  const mappings = []

  for (const g of guides) {
    const htmlPath = path.join(refDir, g.file)
    let html = ''
    try {
      html = await fs.readFile(htmlPath, 'utf8')
    } catch {}
    const imgs = html ? pickImagesFromHtml(html) : []
    const localImgs = []
    for (let i = 0; i < Math.min(6, imgs.length); i++) {
      const src = imgs[i].src
      if (!/^https?:\/\//i.test(src)) continue
      const ext = extFromUrl(src)
      const outName = `${g.slug}-${i+1}${ext.split('?')[0]}`
      const outPath = path.join(publicDir, outName)
      await download(src, outPath)
      localImgs.push(`/images/starters/${outName}`)
    }
    const compCode = buildComponent(g.slug, g.title, localImgs, g.pob)
    const filePath = path.join(curatedDir, `${g.slug}.tsx`)
    await fs.writeFile(filePath, compCode)
    const compName = g.slug.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
    imports.push(`import ${compName} from './${g.slug}'`)
    mappings.push(`  '${g.slug}': ${compName},`)
  }

  const indexCode = `${imports.join('\n')}\n\nexport type CuratedProps = { meta: any }\n\nexport const curatedStarters: Record<string, (props: CuratedProps) => React.ReactElement> = {\n${mappings.join('\n')}\n}\n`
  await fs.writeFile(path.join(curatedDir, 'index.tsx'), indexCode)
}

run().catch((e) => { console.error(e); process.exit(1) })
