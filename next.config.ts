import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/poe-syndicate-cheat-sheet-3-27',
        destination: '/poe-betrayal-cheat-sheet-3-27',
        permanent: true,
      },
      {
        source: '/poe-syndicate-cheat-sheet-3-27/',
        destination: '/poe-betrayal-cheat-sheet-3-27',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
