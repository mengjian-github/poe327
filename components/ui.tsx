'use client'
import { twMerge } from 'tailwind-merge'
import {
  ArrowRight,
  CalendarClock,
  Flame,
  LineChart,
  Map,
  Newspaper,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function HeroCTA() {
  const items = [
    {
      href: '/starter',
      title: 'League Starter Tierlist',
      subtitle: 'Day 1 builds that reach maps fast.',
      icon: <Flame size={18} />,
    },
    {
      href: '/meta',
      title: 'Meta Builds & Guides',
      subtitle: 'S-tier mapping and boss killers.',
      icon: <LineChart size={18} />,
    },
    {
      href: '/lab',
      title: "Today's Lab Compass",
      subtitle: 'Ascendancy path & layout notes.',
      icon: <Map size={18} />,
    },
  ]

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="glass group flex flex-col gap-3 p-5 transition hover:border-white/20 hover:bg-white/10"
        >
          <span className="pill w-fit bg-brand/10 text-brand">
            {item.icon}
            <span className="text-xs font-semibold uppercase tracking-wide">PoE 3.27</span>
          </span>
          <div className="text-lg font-semibold text-white flex items-center gap-2">
            {item.title}
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:text-brand"
            />
          </div>
          <p className="text-sm text-white/70">{item.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}

type SectionProps = {
  title: string
  desc?: string
  kicker?: string
  actions?: React.ReactNode
  children?: React.ReactNode
  className?: string
  id?: string
}

export function Section({
  title,
  desc,
  kicker = 'PoE 3.27',
  actions,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={twMerge('container py-16 md:py-24', className)}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="kicker">{kicker}</div>
          <h2 className="h2 text-white">{title}</h2>
          {desc && <p className="subtle text-base md:text-lg leading-relaxed">{desc}</p>}
        </div>
        {actions && <div className="flex gap-3">{actions}</div>}
      </div>
      {children}
    </section>
  )
}

type CardProps = {
  children: React.ReactNode
  className?: string
  eyebrow?: React.ReactNode
  title?: string
  icon?: React.ReactNode
  footer?: React.ReactNode
}

export function Card({ children, className, eyebrow, title, icon, footer }: CardProps) {
  return (
    <div className={twMerge('card flex flex-col gap-6', className)}>
      {(eyebrow || title || icon) && (
        <header className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && <span className="pill mb-3 inline-flex">{eyebrow}</span>}
            {title && <h3 className="text-2xl font-bold text-white">{title}</h3>}
          </div>
          {icon && <div className="shrink-0 text-brand">{icon}</div>}
        </header>
      )}
      <div className="flex-1 space-y-4 text-base text-white/85">{children}</div>
      {footer && <footer className="pt-3 text-sm text-white/65">{footer}</footer>}
    </div>
  )
}

export function LastUpdated({ date, className }: { date: string; className?: string }) {
  return (
    <div
      className={twMerge(
        'mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/70 sm:inline-flex',
        className,
      )}
    >
      <CalendarClock size={14} />
      <span>Last updated: {date}</span>
    </div>
  )
}

export function NewsEmptyState() {
  return (
    <div className="glass flex flex-col items-center gap-3 px-6 py-10 text-center text-white/70">
      <Newspaper size={28} className="text-brand" />
      <p className="text-sm">Pathofexile.com news feed is quiet right now. Check back later for fresh dev posts.</p>
    </div>
  )
}
