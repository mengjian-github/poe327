import { cache } from 'react'

export type AwakenedRelease = {
  version: string
  tag: string
}

const DEFAULT_RELEASE: AwakenedRelease = {
  version: '3.27.104',
  tag: 'v3.27.104',
}

const RELEASE_ENDPOINT = 'https://api.github.com/repos/SnosMe/awakened-poe-trade/releases/latest'

type GithubReleaseResponse = {
  tag_name?: string | null
  name?: string | null
}

async function fetchLatestRelease(): Promise<AwakenedRelease> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'poe327-site',
  }

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(RELEASE_ENDPOINT, {
    headers,
    next: { revalidate: 60 * 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch release: ${res.status} ${res.statusText}`)
  }

  const data = (await res.json()) as GithubReleaseResponse
  const tagName = data.tag_name?.trim()
  const versionFromTag = tagName?.replace(/^v/i, '')
  const fallbackVersion = data.name?.trim()?.replace(/^v/i, '')
  const version = versionFromTag || fallbackVersion

  if (!version) {
    return DEFAULT_RELEASE
  }

  return {
    version,
    tag: tagName || `v${version}`,
  }
}

export const getAwakenedRelease = cache(async () => {
  try {
    return await fetchLatestRelease()
  } catch {
    return DEFAULT_RELEASE
  }
})
