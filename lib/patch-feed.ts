import fs from 'fs'
import path from 'path'
import { patch327Feed as seed } from '@/data/patch327'

export type PatchFeedItem = {
  id: string
  date: string
  title: string
  type: 'reveal' | 'notes' | 'release' | 'hotfix' | 'manifesto' | 'reminder'
  summary: string
  bullets?: string[]
  image?: string
  sourceUrl?: string
}

function parseDate(d: string): number {
  // Expect YYYY-MM-DD; fallback to Date.parse
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) {
    const [y, m, day] = d.split('-').map((x) => parseInt(x, 10))
    return Date.UTC(y, m - 1, day)
  }
  const t = Date.parse(d)
  return isNaN(t) ? 0 : t
}

function getHotfixNumber(title: string): number {
  const m = /hotfix\s*(\d+)/i.exec(title)
  return m ? parseInt(m[1], 10) : -1
}

function dedupe(items: PatchFeedItem[]): PatchFeedItem[] {
  const seen = new Set<string>()
  const out: PatchFeedItem[] = []
  for (const it of items) {
    const key = `${it.date}|${it.title}`.toLowerCase()
    if (!seen.has(key)) {
      seen.add(key)
      out.push(it)
    }
  }
  return out
}

export async function getPatch327Feed(order: 'desc' | 'asc' = 'desc'): Promise<PatchFeedItem[]> {
  let generated: PatchFeedItem[] = []
  try {
    const p = path.join(process.cwd(), 'data', 'patch327.generated.json')
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8')
      generated = JSON.parse(raw)
    }
  } catch {
    // ignore read/parse errors; fall back to seed only
  }
  const merged = dedupe([...(generated || []), ...seed])
  // Sort by date asc then apply a tie-breaker by hotfix number
  merged.sort((a, b) => {
    const da = parseDate(a.date)
    const db = parseDate(b.date)
    if (da !== db) return da - db
    // Same day: place higher hotfix number first (desc), others keep stable order
    const ha = getHotfixNumber(a.title)
    const hb = getHotfixNumber(b.title)
    if (ha !== hb) return ha - hb // ascending for now; we'll reverse later if needed
    return a.title.localeCompare(b.title)
  })
  if (order === 'desc') merged.reverse()
  return merged
}
