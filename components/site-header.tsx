'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#leveling', label: 'Leveling' },
  { href: '#economy', label: 'Economy' },
  { href: '#endgame', label: 'Endgame' },
  { href: '#community', label: 'Community' },
  { href: '#quickfacts', label: 'Quick Facts' },
  { href: '#updates', label: 'Updates' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[color:var(--overlay)]/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <Image src="/logo.svg" alt="PoE 3.27" width={36} height={36} className="h-9 w-9" />
          <div className="flex flex-col leading-tight">
            <span className="kicker uppercase text-brand">poe league 3.27</span>
            <span className="text-sm font-semibold text-white">poe league 3.27 Keepers of the Flame Hub</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white transition hover:border-brand/40 hover:text-brand md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div
        className={twMerge(
          'md:hidden flex flex-col gap-2 bg-[color:var(--overlay)]/95 px-4 text-sm text-white/80 transition-all duration-200 ease-out overflow-hidden',
          isOpen
            ? 'max-h-96 border-t border-white/5 py-3 opacity-100'
            : 'pointer-events-none max-h-0 border-t-0 py-0 opacity-0',
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
            onClick={close}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="mailto:support@poe327.net"
          className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white"
          onClick={close}
        >
          support@poe327.net
        </a>
      </div>
    </header>
  )
}
