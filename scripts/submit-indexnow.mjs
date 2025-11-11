#!/usr/bin/env node

import { buildIndexNowPayload } from './indexnow-key.mjs'

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const urls = args.filter((arg) => !arg.startsWith('--'))

if (!urls.length) {
  console.error('Usage: node scripts/submit-indexnow.mjs <url> [moreUrls...] [--dry-run]')
  process.exitCode = 1
} else {
  try {
    const payload = buildIndexNowPayload(urls)
    if (dryRun) {
      console.log('IndexNow dry run payload:', payload)
      process.exitCode = 0
    } else {
      const res = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const text = await res.text()
      if (!res.ok) {
        throw new Error(`IndexNow rejected the submission (${res.status}): ${text}`)
      }
      console.log(`IndexNow accepted ${payload.urlList.length} URL(s):`, payload.urlList)
      if (text) console.log('Response:', text)
    }
  } catch (error) {
    console.error(error.message ?? error)
    process.exitCode = 1
  }
}
