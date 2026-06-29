'use client'

import { useEffect } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'] as const
const STORAGE_KEY = 'poe327_utm_contract'

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
  clarity?: (command: 'event', eventName: string) => void
  __poe327_getUtm?: () => Record<string, string>
  __poe327_events?: Array<Record<string, unknown>>
}

function readStoredUtm() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, string>
    return Object.fromEntries(Object.entries(parsed).filter(([, value]) => Boolean(value)))
  } catch {
    return {}
  }
}

function readCurrentUtm() {
  const search = new URLSearchParams(window.location.search)
  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, search.get(key) ?? '']).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>
}

function storeUtm(utm: Record<string, string>) {
  if (!Object.keys(utm).length) return
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm))
}

function appendUtmToInternalUrl(href: string, utm: Record<string, string>) {
  if (!Object.keys(utm).length) return href
  const url = new URL(href, window.location.href)
  if (url.origin !== window.location.origin) return href
  for (const key of UTM_KEYS) {
    const value = utm[key]
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value)
  }
  return `${url.pathname}${url.search}${url.hash}`
}

function emitEvent(eventName: string, props: Record<string, unknown>) {
  const analyticsWindow = window as AnalyticsWindow
  const payload = {
    event_category: 'poe327_paid_tracking_contract',
    ...readStoredUtm(),
    ...readCurrentUtm(),
    ...props,
  }

  analyticsWindow.__poe327_events = analyticsWindow.__poe327_events || []
  analyticsWindow.__poe327_events.push({ name: eventName, ...payload, ts: Date.now() })
  analyticsWindow.gtag?.('event', eventName, payload)
  analyticsWindow.plausible?.(eventName, { props: payload })
  analyticsWindow.clarity?.('event', eventName)
}

export function AnalyticsContract() {
  useEffect(() => {
    const currentUtm = readCurrentUtm()
    if (Object.keys(currentUtm).length) storeUtm({ ...readStoredUtm(), ...currentUtm })

    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow.__poe327_getUtm = () => ({ ...readStoredUtm(), ...readCurrentUtm() })

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const url = new URL(anchor.href, window.location.href)
      const utm = analyticsWindow.__poe327_getUtm?.() ?? {}

      if (url.origin === window.location.origin) {
        const retained = appendUtmToInternalUrl(anchor.getAttribute('href') ?? anchor.href, utm)
        anchor.setAttribute('href', retained)
        return
      }

      emitEvent('outbound_click', {
        href: url.href,
        event_label: anchor.textContent?.trim().slice(0, 80) || url.hostname,
        location: 'document_capture',
      })
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
