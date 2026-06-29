'use client'

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
  clarity?: (command: 'event', eventName: string) => void
  dataLayer?: unknown[]
  __poe327_getUtm?: () => Record<string, string>
  __poe327_events?: Array<Record<string, unknown>>
}

type TrackedLinkProps = {
  href: string
  eventName: string
  extraEventNames?: string[]
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  eventProps?: Record<string, unknown>
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function trackEvent(eventName: string, eventProps: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const analyticsWindow = window as AnalyticsWindow
  const payload = {
    event_category: 'poe327_home',
    ...(analyticsWindow.__poe327_getUtm?.() ?? {}),
    ...eventProps,
  }

  analyticsWindow.gtag?.('event', eventName, payload)
  analyticsWindow.plausible?.(eventName, { props: payload })
  analyticsWindow.clarity?.('event', eventName)

  // Keep a local runtime proof hook for smoke tests and GA4 DebugView sessions.
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
  analyticsWindow.dataLayer.push({ event: eventName, ...payload })
  analyticsWindow.__poe327_events = analyticsWindow.__poe327_events || []
  const localProof = { name: eventName, ...payload, ts: Date.now() }
  analyticsWindow.__poe327_events.push(localProof)
  try {
    const stored = JSON.parse(window.sessionStorage.getItem('poe327_event_contract_log') ?? '[]') as Array<Record<string, unknown>>
    stored.push(localProof)
    window.sessionStorage.setItem('poe327_event_contract_log', JSON.stringify(stored.slice(-50)))
  } catch {
    // Session storage proof is best-effort only; analytics dispatch above is still authoritative.
  }
}

export function trackNavClick(label: string, location: string = 'site_header') {
  trackEvent('nav_click', {
    event_category: 'navigation',
    event_label: label,
    location,
  })
}

function withRetainedUtm(href: string) {
  if (typeof window === 'undefined' || href.startsWith('http') || href.startsWith('#')) return href
  const analyticsWindow = window as AnalyticsWindow
  const utm = analyticsWindow.__poe327_getUtm?.() ?? {}
  if (!Object.keys(utm).length) return href

  const url = new URL(href, window.location.href)
  Object.entries(utm).forEach(([key, value]) => {
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value)
  })
  return `${url.pathname}${url.search}${url.hash}`
}

export function TrackedLink({
  href,
  eventName,
  extraEventNames = [],
  eventProps,
  children,
  className,
  target,
  rel,
  onClick,
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const payload = { href, label: typeof children === 'string' ? children : undefined, ...eventProps }
    trackEvent(eventName, payload)
    extraEventNames.forEach((extraEventName) => trackEvent(extraEventName, payload))
    onClick?.(event)
    const retainedHref = withRetainedUtm(href)
    if (retainedHref !== href) {
      event.preventDefault()
      window.location.assign(retainedHref)
    }
  }

  const isExternal = href.startsWith('http')
  const safeRel = rel ?? (target === '_blank' || isExternal ? 'noreferrer' : undefined)

  if (isExternal) {
    return (
      <a href={href} target={target ?? '_blank'} rel={safeRel} className={className} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
