import { TimelineEvent } from '@/data/timeline'
import { cn } from '@/lib/utils'

type TimelineProps = {
  events: TimelineEvent[]
}

const typeAccent: Record<TimelineEvent['type'], string> = {
  reveal: 'from-brand/80 via-brand/50 to-transparent',
  release: 'from-emerald-400/80 via-emerald-400/40 to-transparent',
  patch: 'from-sky-400/80 via-sky-400/40 to-transparent',
  reminder: 'from-white/60 via-white/30 to-transparent',
}

export function Timeline({ events }: TimelineProps) {
  return (
    <ol className="relative pl-6 before:absolute before:left-1 before:top-0 before:h-full before:w-px before:bg-white/10">
      {events.map((event, index) => (
        <li key={event.date + event.label} className="relative mb-10 last:mb-0">
          <div className="absolute -left-[1.35rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-white">
            {index + 1}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill !bg-transparent !text-white/70">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span
                className={cn(
                  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-white',
                  {
                    reveal: 'bg-gradient-to-r ' + typeAccent.reveal,
                    release: 'bg-gradient-to-r ' + typeAccent.release,
                    patch: 'bg-gradient-to-r ' + typeAccent.patch,
                    reminder: 'bg-gradient-to-r ' + typeAccent.reminder,
                  }[event.type],
                )}
              >
                {event.type}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{event.label}</h3>
            <p className="mt-2 text-sm text-white/70">{event.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
