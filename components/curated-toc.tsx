"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export function CuratedTOC() {
  const [items, setItems] = useState<{ id: string; text: string; level: 2 | 3 }[]>([])

  useEffect(() => {
    const headers = Array.from(document.querySelectorAll('.starter-content h2, .starter-content h3')) as HTMLElement[]
    const mapped = headers.map((el) => {
      let id = el.id
      if (!id) {
        id = el.innerText.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')
        el.id = id
      }
      const level = el.tagName.toLowerCase() === 'h3' ? 3 : 2
      return { id, text: el.innerText, level: level as 2 | 3 }
    })
    setItems(mapped)
  }, [])

  if (!items.length) return null
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 sticky top-24">
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-white/60">On this page</div>
      <nav className="space-y-1">
        {items.map((i) => (
          <div key={i.id} className={i.level === 3 ? 'ml-3' : ''}>
            <Link href={`#${i.id}`} className="block rounded px-2 py-1 hover:bg-white/10 hover:text-white">
              {i.text}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  )
}
