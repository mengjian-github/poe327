import Image from 'next/image'
import { LeagueFeature } from '@/data/league'

type FeatureCardProps = {
  feature: LeagueFeature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#11131a]/80 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
          sizes="(min-width: 768px) 320px, 100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/60 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="pill bg-brand/20 text-brand">{feature.subtitle}</span>
        </div>
      </div>
      <div className="space-y-3 px-6 pb-6 pt-4">
        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-white/70">{feature.description}</p>
        <ul className="space-y-2 text-sm text-white/65">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
