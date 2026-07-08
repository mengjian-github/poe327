'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { trackEvent } from '@/components/tracked-link'

type ChecklistStep = {
  id: string
  label: string
  href: string
  detail?: string
}

type LaunchChecklistProps = {
  steps: ChecklistStep[]
  sourceSection: string
  compact?: boolean
}

export function LaunchChecklist({ steps, sourceSection, compact = false }: LaunchChecklistProps) {
  return (
    <div className={compact ? 'grid gap-2' : 'grid gap-4 md:grid-cols-5'}>
      {steps.map((step, index) => (
        <label
          key={step.id}
          className={
            compact
              ? 'group flex min-w-0 items-start gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-white/85 transition hover:border-brand/50 hover:bg-brand/15'
              : 'group flex min-h-32 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white/80 transition hover:border-brand/50 hover:bg-brand/10 hover:text-white'
          }
        >
          <input
            type="checkbox"
            className="peer mt-1 h-5 w-5 shrink-0 accent-[#f97316]"
            aria-label={`Complete ${step.label}`}
            onChange={(event) => {
              if (!event.currentTarget.checked) return
              trackEvent('checklist_step_complete', {
                source_section: sourceSection,
                step_id: step.id,
                step_index: index + 1,
                step_label: step.label,
                target_url: step.href,
              })
            }}
          />
          <span className={compact ? 'min-w-0 flex-1' : 'flex flex-1 flex-col'}>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <CheckCircle2 size={compact ? 14 : 16} aria-hidden /> Step {index + 1}
            </span>
            <span className={compact ? 'mt-1 block text-sm font-bold leading-tight text-white' : 'mt-4 block text-lg font-bold leading-tight text-white'}>
              {step.label}
            </span>
            {step.detail && (
              <span className="mt-1 block text-xs leading-snug text-white/65">{step.detail}</span>
            )}
            <Link
              href={step.href}
              className={compact ? 'mt-2 inline-flex text-xs font-semibold text-brand hover:text-white' : 'mt-4 inline-flex text-sm font-semibold text-brand hover:text-white'}
              onClick={() => {
                trackEvent('checklist_step_click', {
                  source_section: sourceSection,
                  step_id: step.id,
                  step_index: index + 1,
                  step_label: step.label,
                  target_url: step.href,
                })
                trackEvent('next_step_click', {
                  source_section: sourceSection,
                  step_id: step.id,
                  step_index: index + 1,
                  step_label: step.label,
                  target_url: step.href,
                })
              }}
            >
              Open step →
            </Link>
          </span>
        </label>
      ))}
    </div>
  )
}
