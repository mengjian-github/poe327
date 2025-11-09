import Link from 'next/link'

export function ArticleTOC({
  items,
  title = 'On this page',
}: {
  items: { id: string; text: string; level: 2 | 3 }[]
  title?: string
}) {
  if (!items?.length) return null
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 sticky top-24">
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-white/60">{title}</div>
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

