import React from 'react'

export function MediaCard({
  image,
  heading,
  body,
  action,
  reverse = false,
}: {
  image: string
  heading: string
  body: React.ReactNode
  action?: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className={`grid items-center gap-6 md:grid-cols-2 ${reverse ? 'md:[&>div:first-child]:order-2' : ''}`}>
      <div>
        <img src={image} alt="" className="rounded-2xl border border-white/10 shadow-2xl shadow-black/40" />
      </div>
      <div className="card">
        <h3 className="text-2xl font-bold text-white mb-3">{heading}</h3>
        <div className="text-white/80 leading-8 space-y-3">{body}</div>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  )
}

