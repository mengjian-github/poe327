import React from 'react'

export function StatCallout({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-brand/30 bg-brand/10 p-5">
      <div className="text-sm uppercase tracking-wide text-brand font-bold mb-1">{title}</div>
      <div className="text-white/85 leading-7">{text}</div>
    </div>
  )
}

