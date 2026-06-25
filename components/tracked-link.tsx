'use client'

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
  dataLayer?: unknown[]
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
    ...eventProps,
  }

  analyticsWindow.gtag?.('event', eventName, payload)
  analyticsWindow.plausible?.(eventName, { props: payload })

  // Keep a local runtime proof hook for smoke tests and GA4 DebugView sessions.
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
  analyticsWindow.dataLayer.push({ event: eventName, ...payload })
}

export function trackNavClick(label: string, location: string = 'site_header') {
  trackEvent('nav_click', {
    event_category: 'navigation',
    event_label: label,
    location,
  })
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
