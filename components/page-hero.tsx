import Image from 'next/image'
import React from 'react'

type Metric = {
  label: string
  value: string
}

type PageHeroProps = {
  title: string
  description: string
  image: string
  kicker?: string
  metrics?: Metric[]
  actions?: React.ReactNode
}

export function PageHero({
  title,
  description,
  image,
  kicker = 'PoE 3.27',
  metrics,
  actions,
}: PageHeroProps) {
  return (
    <section className="container pt-12 md:pt-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10121a]/85 p-6 shadow-2xl shadow-black/40 md:p-10">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 object-cover opacity-35"
          sizes="(min-width: 1280px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060709]/95 via-[#060709]/80 to-transparent" />
        <div className="relative z-10 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="pill bg-brand/20 text-brand">{kicker}</span>
            <h1 className="h1">{title}</h1>
            <p className="text-base text-white/70 md:text-lg">{description}</p>
          </div>
          {metrics && metrics.length > 0 && (
            <div className="grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  )
}
