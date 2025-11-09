import React from 'react'

export function GuideSection({ title, desc, children }: { title: string; desc?: string; children?: React.ReactNode }) {
  return (
    <section className="my-14">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        {desc && <p className="text-white/75 mt-2 max-w-2xl leading-relaxed">{desc}</p>}
        <div className="h-px mt-4 w-24 bg-gradient-to-r from-brand/80 to-brand/20" />
      </div>
      {children}
    </section>
  )}

