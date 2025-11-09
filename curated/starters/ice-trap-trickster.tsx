import type { CuratedProps } from './index'
import React from 'react'
import { GuideSection } from '@/components/visual/GuideSection'
import { MediaCard } from '@/components/visual/MediaCard'
import { IconBadge } from '@/components/visual/IconBadge'
import { StatCallout } from '@/components/visual/StatCallout'
import { Gallery } from '@/components/visual/Gallery'

export default function IceTrapTrickster({ meta }: CuratedProps) {
  return (
    <div>
      <GuideSection title="Why This Starter Works" desc="Curated for day‑1 mapping: reliable defences, clear upgrade path.">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <StatCallout title="Defense" text="Layered mitigation and recovery keep you safe while learning maps." />
          <StatCallout title="Damage" text="Scales cleanly from campaign into early reds with modest gear." />
          <StatCallout title="Budget" text="No mandatory uniques; invest first into the weapon slot." />
        </div>
      </GuideSection>

      <GuideSection title="Leveling Route">
        <div className="space-y-8">
          <MediaCard
            image="/images/keepers-encounter.jpg"
            heading="Acts 1–3"
            body={
              <ul className="list-disc pl-5">
                <li>Use your league‑start skill as soon as available.</li>
                <li>Path early life/mobility; pick a 3‑link for bosses.</li>
                <li>Keep flasks updated every Act.</li>
              </ul>
            }
          />

          <MediaCard
            image="/images/keepers-async.jpg"
            heading="Acts 4–6"
            reverse
            body={
              <ul className="list-disc pl-5">
                <li>Add supports as sockets appear; pick up guard skills.</li>
                <li>Upgrade weapon base every 2–3 Acts.</li>
                <li>Cap resistances before Kitava.</li>
              </ul>
            }
          />

          <MediaCard
            image="/images/keepers-hive.jpg"
            heading="Acts 7–10"
            body={
              <ul className="list-disc pl-5">
                <li>Target a basic 4–5 link and a movement skill.</li>
                <li>Allocate key defensive notables before mapping.</li>
                <li>Finish labs along the way.</li>
              </ul>
            }
          />

        </div>
      </GuideSection>

      <GuideSection title="Ascendancy">
        <div className="grid gap-4 md:grid-cols-4">
          <IconBadge label="1. Core node" />
          <IconBadge label="2. Mobility/defense" />
          <IconBadge label="3. Damage" />
          <IconBadge label="4. Flex" />
        </div>
      </GuideSection>

      <GuideSection title="Early Gear Priorities">
        <div className="grid gap-4 md:grid-cols-2">
          <StatCallout title="Resistances" text="Hit 75% all res ASAP in maps." />
          <StatCallout title="Weapon First" text="Upgrade damage on the main skill gem setup before luxuries." />
          <StatCallout title="Life & Mitigation" text="Life on every slot; pick armour/evasion/ES bases appropriate to the build." />
          <StatCallout title="Flasks" text="One movement, one life, two defensive; roll bleed/freeze immunity." />
        </div>
      </GuideSection>

      <GuideSection title="PoB">
        <p>Latest tree and gems: <a href={meta.pob} target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-2">Open PoB</a></p>
      </GuideSection>

      <GuideSection title="In‑Action Gallery">
        <Gallery images={[]} />
      </GuideSection>
    </div>
  )
}
