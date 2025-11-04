// Capture real screenshots of pathofexile.com/trade using Puppeteer.
// Produces files under public/images/screenshots/.

import fs from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer'
import fetch from 'node-fetch'

const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'screenshots')

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true })
}

async function createSearchId(league = 'Standard') {
  // Basic query: Tabula Rasa (Simple Robe), sort by price asc, online only
  const body = {
    query: {
      status: { option: 'online' },
      name: 'Tabula Rasa',
      type: 'Simple Robe',
      stats: [{ type: 'and', filters: [] }],
    },
    sort: { price: 'asc' },
  }
  const res = await fetch(`https://www.pathofexile.com/api/trade/search/${encodeURIComponent(league)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'poe327-screenshot-bot/1.0 (+https://poe327.net)'
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Search API failed: ${res.status} ${res.statusText}`)
  const json = await res.json()
  if (!json?.id) throw new Error('Search API response missing id')
  return json.id
}

async function dismissConsent(page) {
  // Try to close cookie / consent banners if present
  const selectors = [
    'button[aria-label="Accept all"]',
    'button:has-text("Accept")',
    'button:has-text("I accept")',
    '#onetrust-accept-btn-handler',
  ]
  for (const sel of selectors) {
    try {
      await page.waitForSelector(sel, { timeout: 1500 })
      await page.click(sel)
      break
    } catch (_) {}
  }
}

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function capture() {
  await ensureOutDir()
  const browser = await puppeteer.launch({ headless: 'new', defaultViewport: { width: 1440, height: 900 } })
  const page = await browser.newPage()

  // 1) Home/Search landing
  await page.goto('https://www.pathofexile.com/trade', { waitUntil: 'networkidle2' })
  await dismissConsent(page)
  await wait(1500)
  await page.screenshot({ path: path.join(OUT_DIR, 'trade-home.png') })

  // 2) Results page via API-generated search id
  const id = await createSearchId('Standard')
  await page.goto(`https://www.pathofexile.com/trade/search/Standard/${id}`, { waitUntil: 'networkidle2' })
  await dismissConsent(page)
  // Give the client some time to render results
  await wait(2500)
  await page.screenshot({ path: path.join(OUT_DIR, 'trade-results.png') })

  // Attempt to scroll a bit and capture header (shows Live Search) separately
  await page.evaluate(() => window.scrollTo(0, 0))
  await wait(500)
  try {
    const header = await page.$('header, .search-controls, .search-header')
    if (header) {
      await header.screenshot({ path: path.join(OUT_DIR, 'trade-header.png') })
    }
  } catch (_) {}

  await browser.close()
}

capture().catch((err) => {
  console.error(err)
  process.exit(1)
})
