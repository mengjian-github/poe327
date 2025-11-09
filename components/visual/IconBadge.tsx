import React from 'react'

export function IconBadge({ icon, label }: { icon?: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      {icon && <img src={icon} alt="" className="h-8 w-8 rounded" />}
      <span className="text-white font-semibold">{label}</span>
    </div>
  )
}

