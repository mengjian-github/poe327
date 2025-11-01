import { XMLParser } from 'fast-xml-parser'

export type RssItem = {
  title: string
  link: string
  pubDate: string
  description: string
}

const parser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: true,
  attributeNamePrefix: '',
  textNodeName: 'text',
})

function stripHtml(input: string) {
  return input.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

export async function fetchNews(limit = 5): Promise<RssItem[]> {
  try {
    const response = await fetch('https://www.pathofexile.com/news/rss', {
      headers: {
        Accept: 'application/rss+xml, application/xml',
      },
      next: {
        revalidate: 60 * 60, // hourly
      },
    })

    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`)
    }

    const xml = await response.text()
    const parsed = parser.parse(xml)
    const items = parsed?.rss?.channel?.item

    if (!items) {
      return []
    }

    const itemsArray: Record<string, unknown>[] = Array.isArray(items) ? items : [items]

    return itemsArray.slice(0, limit).map((item) => {
      const title = typeof item.title === 'string' ? item.title : 'Untitled'
      const link = typeof item.link === 'string' ? item.link : '#'
      const pubDate = typeof item.pubDate === 'string' ? item.pubDate : ''
      const description =
        typeof item.description === 'string' ? stripHtml(item.description).slice(0, 220) : ''

      return {
        title,
        link,
        pubDate,
        description,
      }
    })
  } catch (error) {
    console.error('Failed to fetch PoE RSS feed', error)
    return []
  }
}
