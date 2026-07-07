'use client'

import { useEffect } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'] as const
const STORAGE_KEY = 'poe327_utm_contract'

function pageNameFromPath(pathname: string) {
  return pathname === '/' ? 'home' : pathname.replace(/^\//, '').replaceAll('/', '_')
}

function classifyInternalIntent(pathname: string) {
  if (pathname.startsWith('/starters/')) return { eventName: 'starter_card_open', intent: 'starter_detail' }
  if (pathname === '/starters') return { eventName: 'starter_hub_open', intent: 'starter_hub' }
  if (pathname.startsWith('/filters')) return { eventName: 'filter_path_open', intent: 'loot_filter' }
  if (pathname.startsWith('/trade')) return { eventName: 'trade_path_open', intent: 'trade_setup' }
  if (pathname === '/patch-notes') return { eventName: 'patch_notes_click', intent: 'patch_notes' }
  if (pathname === '/getting-started') return { eventName: 'getting_started_open', intent: 'onboarding' }
  if (pathname === '/betrayal-cheatsheet') return { eventName: 'cheatsheet_open', intent: 'betrayal_cheatsheet' }
  if (pathname === '/pricing') return { eventName: 'pricing_status_open', intent: 'roadmap_pricing_status' }
  return { eventName: 'internal_link_click', intent: 'navigation' }
}

function classifyExternalIntent(url: URL) {
  const hostname = url.hostname.replace(/^www\./, '')
  if (hostname === 'filterblade.xyz') return { eventName: 'external_tool_click', external_tool: 'filterblade' }
  if (hostname === 'pathofexile.com') return { eventName: 'official_source_click', external_tool: 'pathofexile_official' }
  if (hostname === 'poewiki.net') return { eventName: 'official_source_click', external_tool: 'poe_wiki' }
  if (hostname === 'github.com') return { eventName: 'external_tool_click', external_tool: 'github_tool' }
  return { eventName: 'outbound_click', external_tool: hostname }
}

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
  const currentPath = window.location.pathname || '/'
  const payload = {
    event_category: 'poe327_paid_tracking_contract',
    page: pageNameFromPath(currentPath),
    path: currentPath,
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

    emitEvent('page_view', {
      event_category: 'poe327_launch_runbook',
      event_label: document.title,
      location: 'analytics_contract',
      target_url: window.location.href,
      referrer: document.referrer || 'direct',
    })

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const url = new URL(anchor.href, window.location.href)
      const utm = analyticsWindow.__poe327_getUtm?.() ?? {}

      if (url.origin === window.location.origin) {
        const retained = appendUtmToInternalUrl(anchor.getAttribute('href') ?? anchor.href, utm)
        anchor.setAttribute('href', retained)
        const classification = classifyInternalIntent(url.pathname)
        const payload = {
          href: retained,
          target_url: `${url.pathname}${url.search}${url.hash}`,
          event_label: anchor.textContent?.trim().slice(0, 80) || url.pathname,
          location: 'document_capture',
          nav_intent: classification.intent,
        }
        emitEvent('internal_link_click', payload)
        if (classification.eventName !== 'internal_link_click') emitEvent(classification.eventName, payload)
        return
      }

      const classification = classifyExternalIntent(url)
      const payload = {
        href: url.href,
        event_label: anchor.textContent?.trim().slice(0, 80) || url.hostname,
        location: 'document_capture',
        external_tool: classification.external_tool,
      }
      emitEvent('outbound_click', payload)
      if (classification.eventName !== 'outbound_click') emitEvent(classification.eventName, payload)
    }

    const depthMarks = [25, 50, 75, 90]
    const seenDepthMarks = new Set<number>()
    const handleScrollDepth = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        document.body.scrollHeight - window.innerHeight,
        1,
      )
      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100))
      for (const mark of depthMarks) {
        if (percent >= mark && !seenDepthMarks.has(mark)) {
          seenDepthMarks.add(mark)
          emitEvent('page_scroll_depth', {
            event_category: 'poe327_launch_runbook',
            scroll_depth_percent: mark,
            location: 'analytics_contract',
          })
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    window.addEventListener('scroll', handleScrollDepth, { passive: true })
    handleScrollDepth()
    return () => {
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('scroll', handleScrollDepth)
    }
  }, [])

  return null
}
