import React from 'react'

type GalleryImage = string | { src: string; alt?: string }

export function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image, i) => {
        const entry = typeof image === 'string' ? { src: image } : image
        const alt = entry.alt ?? buildAltFromSrc(entry.src, i)

        return (
          <img
            key={entry.src}
            src={entry.src}
            alt={alt}
            className="rounded-2xl border border-white/10 hover:scale-[1.01] transition"
          />
        )
      })}
    </div>
  )
}

function buildAltFromSrc(src: string, index: number) {
  const fileName = src.split('/').pop()?.split('.')[0] ?? ''
  const cleaned = fileName.replace(/[-_]+/g, ' ').replace(/\d+$/, '').trim()
  if (!cleaned) {
    return `Gallery screenshot ${index + 1}`
  }

  const titleCased = cleaned
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bPoe\b/g, 'PoE')
    .trim()

  return `${titleCased} screenshot`
}
