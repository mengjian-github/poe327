'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { RefreshCcw, Link as LinkIcon, Sparkles, Download } from 'lucide-react'

type Division = 'Transportation' | 'Fortification' | 'Research' | 'Intervention'
type MemberId =
  | 'Aisling'
  | 'Cameria'
  | 'Elreon'
  | 'Gravicius'
  | 'Guff'
  | 'Haku'
  | 'Hillock'
  | 'It That Fled'
  | 'Janus'
  | 'Jorgin'
  | 'Korell'
  | 'Leo'
  | 'Riker'
  | 'Rin'
  | 'Tora'
  | 'Vagan'

type Tier = 0 | 1 | 2 | 3 // 0 unset, 1 bad, 2 good, 3 great

const members: MemberId[] = [
  'Aisling',
  'Cameria',
  'Elreon',
  'Gravicius',
  'Guff',
  'Haku',
  'Hillock',
  'It That Fled',
  'Janus',
  'Jorgin',
  'Korell',
  'Leo',
  'Riker',
  'Rin',
  'Tora',
  'Vagan',
]

const divisions: Division[] = ['Transportation', 'Fortification', 'Research', 'Intervention']

type GridState = Record<Division, Record<MemberId, Tier>>

function emptyGrid(): GridState {
  const grid: GridState = { Transportation: {} as any, Fortification: {} as any, Research: {} as any, Intervention: {} as any }
  divisions.forEach((d) => {
    grid[d] = {} as any
    members.forEach((m) => (grid[d][m] = 0))
  })
  return grid
}

// Cell icons: derive from slice sheet order.
// Assumption (based on the reference export):
// - There are 64 primary reward slices for 4 rows x 16 members in row-major order.
// - Row order matches `divisions` below (Transportation, Fortification, Research, Intervention).
// - Column order matches `members` below.
// This automatically provides a complete mapping; if a slice is missing, we fallback to text.
function iconFor(d: Division, m: MemberId): string | null {
  const row = divisions.indexOf(d) // 0..3
  const col = members.indexOf(m) // 0..15
  if (row < 0 || col < 0) return null
  const idx = row * members.length + col // 0..63
  const slice = idx + 1 // 1-based
  const pad = String(slice).padStart(2, '0')
  const path = `/cheatsheet/icons/syndicate-cheatsheet-dark-slices_${pad}.png`
  return path
}

// Lightweight community-style recommendation (placeholder values; users can tweak)
const RECOMMENDED: GridState = (() => {
  const g = emptyGrid()
  // Research
  g.Research['Aisling'] = 3
  g.Research['Janus'] = 2
  g.Research['It That Fled'] = 2
  g.Research['Vagan'] = 2
  // Fortification
  g.Fortification['Hillock'] = 3
  g.Fortification['Guff'] = 2
  g.Fortification['Vorici' as any] = 2 // in case we later add Vorici
  // Intervention
  g.Intervention['Cameria'] = 3
  g.Intervention['Jorgin'] = 2
  g.Intervention['Riker'] = 2
  // Transportation
  g.Transportation['Rin'] = 2
  g.Transportation['Gravicius'] = 2
  g.Transportation['Elreon'] = 1
  return g
})()

function encodeState(grid: GridState, theme: 'dark' | 'light') {
  if (typeof window === 'undefined') return ''
  const json = JSON.stringify({ grid, theme })
  return btoa(unescape(encodeURIComponent(json)))
}
function decodeState(s: string): { grid: GridState; theme: 'dark' | 'light' } | null {
  try {
    const json = decodeURIComponent(escape(atob(s)))
    const obj = JSON.parse(json)
    return obj
  } catch {
    return null
  }
}

export function SyndicateCheatsheetCanvas({ keyPhrase }: { keyPhrase: string }) {
  const [grid, setGrid] = useState<GridState>(() => emptyGrid())
  const canvasRef = useRef<HTMLDivElement | null>(null)
  const gridWrapRef = useRef<HTMLDivElement | null>(null)
  const tableRef = useRef<HTMLTableElement | null>(null)
  // Auto scale computed from container width; userScale is manual zoom; fit controls whether we apply auto scale
  const [autoScale, setAutoScale] = useState(1)
  const [userScale, setUserScale] = useState(1)
  const [fit, setFit] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    const hash = url.searchParams.get('g')
    if (hash) {
      const decoded = decodeState(hash)
      if (decoded) {
        setGrid(decoded.grid)
      }
    } else {
      setGrid(RECOMMENDED)
    }
  }, [])

  const setTier = (d: Division, m: MemberId, next?: Tier) => {
    setGrid((g) => {
      const copy: GridState = JSON.parse(JSON.stringify(g))
      const curr = copy[d][m]
      copy[d][m] = (next ?? ((curr + 1) % 4)) as Tier
      return copy
    })
  }

  const applyRecommended = () => setGrid(RECOMMENDED)
  const reset = () => setGrid(emptyGrid())

  const copyLink = async () => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('g', encodeState(grid, 'dark'))
    await navigator.clipboard.writeText(url.toString())
  }

  const saveImage = async () => {
    if (!canvasRef.current) return
    const el = canvasRef.current
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(el, { cacheBust: true, pixelRatio: 2 })
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'poe-betrayal-cheatsheet-3.27.png'
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (e) {
      console.error('save image failed', e)
    }
  }

  const saveGridOnly = async () => {
    if (!tableRef.current) return
    const el = tableRef.current
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(el, { cacheBust: true, pixelRatio: 2 })
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'poe-betrayal-cheatsheet-3.27-grid.png'
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (e) {
      console.error('save grid failed', e)
    }
  }

  // Scale-to-fit: avoid horizontal scrollbar by scaling to container width
  useEffect(() => {
    const recalc = () => {
      if (!gridWrapRef.current || !tableRef.current) return
      const wrap = gridWrapRef.current.clientWidth
      const full = tableRef.current.scrollWidth
      const s = Math.min(1, wrap / Math.max(1, full))
      setAutoScale(Number.isFinite(s) && s > 0 ? s : 1)
    }
    recalc()
    const ro1 = new ResizeObserver(recalc)
    const ro2 = new ResizeObserver(recalc)
    if (gridWrapRef.current) ro1.observe(gridWrapRef.current)
    if (tableRef.current) ro2.observe(tableRef.current)
    window.addEventListener('resize', recalc)
    return () => {
      ro1.disconnect()
      ro2.disconnect()
      window.removeEventListener('resize', recalc)
    }
  }, [])

  const appliedScale = (fit ? autoScale : 1) * userScale

  const legend = (
    <div className="flex items-center gap-2 text-xs">
      <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-4 rounded bg-white/20" />Unset</span>
      <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-4 rounded bg-rose-500" />Bad</span>
      <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-4 rounded bg-amber-400" />Good</span>
      <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-4 rounded bg-emerald-500" />Great</span>
    </div>
  )

  return (
    <div ref={canvasRef} className={`rounded-3xl border bg-white/5 text-white border-white/10 p-4`}> 
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">Generate your Cheatsheet for Syndicate 3.27</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="hidden md:inline-block">{legend}</span>
          <div className="hidden items-center gap-1 md:flex">
            <button className="btn btn-ghost" type="button" onClick={() => setUserScale((v) => Math.max(0.6, Math.round((v - 0.1) * 10) / 10))} aria-label="Zoom out">–</button>
            <div className="rounded-xl border border-white/10 px-2 py-1 text-xs text-white/70 min-w-16 text-center">{Math.round(appliedScale * 100)}%</div>
            <button className="btn btn-ghost" type="button" onClick={() => setUserScale((v) => Math.min(2, Math.round((v + 0.1) * 10) / 10))} aria-label="Zoom in">+</button>
            <button className="btn btn-ghost" type="button" onClick={() => setUserScale(1)} aria-label="Reset zoom">Reset zoom</button>
            <button className="btn btn-ghost" type="button" onClick={() => setFit((x) => !x)} aria-pressed={fit} aria-label="Toggle fit to width">{fit ? 'Fit: On' : 'Fit: Off'}</button>
          </div>
          <button className="btn btn-primary" type="button" onClick={applyRecommended}>
            <Sparkles size={16} />
            <span>Show Recommendation</span>
          </button>
          <button className="btn btn-primary" type="button" onClick={saveImage}>
            <Download size={16} />
            <span>Save as image</span>
          </button>
          <button className="btn btn-primary" type="button" onClick={saveGridOnly}>
            <Download size={16} />
            <span>Save grid only</span>
          </button>
          <button className="btn btn-primary" type="button" onClick={copyLink}>
            <LinkIcon size={16} />
            <span>Copy link</span>
          </button>
          <button className="btn btn-ghost" type="button" onClick={reset}>
            <RefreshCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </header>

      <div className={fit ? 'overflow-x-hidden' : 'overflow-x-auto'} ref={gridWrapRef}>
        <div
          style={{
            transform: `scale(${appliedScale})`,
            transformOrigin: 'top left',
            width: fit ? `${(1 / Math.max(appliedScale, 0.0001)) * 100}%` : 'max-content',
          }}
        >
          <table ref={tableRef} className="min-w-[900px] border-collapse">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-transparent p-2 text-left" />
              {members.map((m) => (
                <th key={m} className="p-2 text-center text-sm font-semibold">
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {divisions.map((d) => (
              <tr key={d}>
                <th className="sticky left-0 z-10 bg-transparent p-2 text-right text-sm font-semibold">{d}</th>
                {members.map((m) => {
                  const t = grid[d][m]
                  const color = t === 0 ? 'bg-white/10' : t === 1 ? 'bg-rose-600' : t === 2 ? 'bg-amber-500' : 'bg-emerald-600'
                  const label = t === 0 ? '' : t === 1 ? 'Bad' : t === 2 ? 'Good' : 'Great'
                  const icon = iconFor(d, m)
                  return (
                    <td key={`${d}-${m}`} className="p-1">
                      <button
                        type="button"
                        onClick={() => setTier(d, m)}
                        className={`flex h-24 w-28 items-center justify-center overflow-hidden rounded-md text-xs ${color} hover:outline hover:outline-1 hover:outline-white/30`}
                        title={`Click to cycle tier for ${m} in ${d}`}
                      >
                        {icon ? (
                          <img src={icon} alt={`${m} ${d} reward`} className="h-full w-full object-contain" />
                        ) : (
                          <span>{label || '—'}</span>
                        )}
                      </button>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 md:hidden">{legend}</div>
    </div>
  )
}
