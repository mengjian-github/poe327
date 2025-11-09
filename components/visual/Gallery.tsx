import React from 'react'

export function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" className="rounded-2xl border border-white/10 hover:scale-[1.01] transition" />
      ))}
    </div>
  )
}

