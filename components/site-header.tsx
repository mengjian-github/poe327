'use client'

import type { FocusEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

// Navigation for PoE 3.27-only site. Expanded with Getting Started and Starters.
const navItems = [
  { label: 'Getting Started', href: '/getting-started' },
  {
    label: 'Filters',
    href: '/filters',
    children: [
      { href: '/filters', label: 'Loot Filter Lab' },
      { href: '/filters/neversink', label: 'Neversink Filters' },
    ],
  },
  { label: 'Starters', href: '/starters' },
  {
    label: 'Trade',
    href: '/trade/official',
    children: [
      { href: '/trade/awakened', label: 'Awakened Trade' },
      { href: '/trade/official', label: 'Official Trade' },
    ],
  },
  { label: 'Cheat Sheet', href: '/betrayal-cheatsheet#canvas' },
  { label: 'Patch Notes', href: '/patch-notes' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDesktopItem, setActiveDesktopItem] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({})

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)
  const toggleMobileItem = (label: string) =>
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  const handleDesktopBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveDesktopItem(null)
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[color:var(--overlay)]/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-5">
        <Link href="/" className="flex items-center gap-4" onClick={close}>
          <Image src="/logo.svg" alt="PoE 3.27" width={44} height={44} className="h-11 w-11" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">poe league 3.27</span>
            <span className="text-base font-bold text-white">Keepers of the Flame Hub</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
          <ul className="flex items-center gap-3">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDesktopItem(item.label)}
                onMouseLeave={() => setActiveDesktopItem(null)}
                onBlur={handleDesktopBlur}
              >
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2.5 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70"
                  onFocus={() => setActiveDesktopItem(item.label)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div
                    className={twMerge(
                      'pointer-events-none absolute left-0 top-full hidden min-w-[240px] flex-col gap-2 rounded-2xl border border-white/10 bg-black/90 p-4 text-xs uppercase tracking-wide text-white/70 shadow-xl shadow-black/50',
                      activeDesktopItem === item.label && 'pointer-events-auto flex',
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-xl px-4 py-3 text-white/70 transition hover:bg-white/10 hover:text-white"
                        onClick={close}
                        onFocus={() => setActiveDesktopItem(item.label)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white transition hover:border-brand/40 hover:text-brand md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={twMerge(
          'md:hidden flex flex-col gap-3 bg-[color:var(--overlay)]/95 px-6 text-base text-white/80 transition-all duration-200 ease-out overflow-hidden',
          isOpen
            ? 'max-h-[32rem] border-t border-white/5 py-5 opacity-100'
            : 'pointer-events-none max-h-0 border-t-0 py-0 opacity-0',
        )}
      >
        {navItems.map((item) => {
          const expanded = mobileExpanded[item.label] ?? false
          return (
            <div key={item.label} className="rounded-xl border border-white/5 bg-white/5">
              <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                <Link href={item.href} className="flex-1 transition hover:text-white" onClick={close}>
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    className="ml-3 rounded-full px-2 py-1 text-white/60 transition hover:text-white"
                    onClick={() => toggleMobileItem(item.label)}
                    aria-expanded={expanded}
                  >
                    {expanded ? '−' : '+'}
                  </button>
                )}
              </div>
              {item.children && (
                <div className={twMerge('flex flex-col gap-2 px-4 pb-3', expanded ? 'max-h-64' : 'hidden')}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/10 hover:text-white"
                      onClick={close}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        <a
          href="mailto:support@poe327.net"
          className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          onClick={close}
        >
          support@poe327.net
        </a>
      </div>
    </header>
  )
}
