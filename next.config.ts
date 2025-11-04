import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy synonym → new short path
      {
        source: '/poe-syndicate-cheat-sheet-3-27',
        destination: '/betrayal-cheatsheet',
        permanent: true,
      },
      {
        source: '/poe-syndicate-cheat-sheet-3-27/',
        destination: '/betrayal-cheatsheet',
        permanent: true,
      },
      // 3.27 suffixed routes → short canonical routes
      { source: '/poe-3-27-loot-filter', destination: '/filters', permanent: true },
      { source: '/neversink-3-27', destination: '/filters/neversink', permanent: true },
      { source: '/awakened-poe-trade-3-27', destination: '/trade/awakened', permanent: true },
      { source: '/poe-trade', destination: '/trade/official', permanent: true },
      { source: '/poe-betrayal-cheat-sheet-3-27', destination: '/betrayal-cheatsheet', permanent: true },
      { source: '/patch-notes-poe-3-27', destination: '/patch-notes', permanent: true },
      // Removed sections → send to filters as main entry for now
      { source: '/starter', destination: '/filters', permanent: true },
      { source: '/starters', destination: '/filters', permanent: true },
      { source: '/starters/:slug', destination: '/filters', permanent: true },
    ]
  },
}

export default nextConfig
