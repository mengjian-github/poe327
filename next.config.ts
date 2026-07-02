import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Cloudflare Pages direct upload is static-only; avoid /_next/image optimization routes.
  images: { unoptimized: true },
  // Ensure Next selects this folder as the workspace root when multiple lockfiles exist.
  // This silences the build warning and makes route discovery reliable in CI.
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  turbopack: { root: __dirname },
}

export default nextConfig
