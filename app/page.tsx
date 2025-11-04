import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, Flame, ArrowRight } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'
import { LastUpdated, Section } from '@/components/ui'
import { leagueFeatures } from '@/data/league'

type HeroHighlight = {
  title: string
  description: string
  href: string
  linkLabel: string
}

const heroHighlights: HeroHighlight[] = [
  {
    title: 'Launch control center',
    description:
      'Follow the poe league 3.27 release timeline with timezone conversions for the October 31, 2025 Americas launch and the November 1 ANZ rollout, then pin the reveal livestream, realm status pings, and supporter pack countdowns so your crew stays locked in.',
    href: '/starter',
    linkLabel: 'Open the poe league 3.27 starter planner',
  },
  {
    title: 'Information architecture guide',
    description:
      'Use the navigation to hop from this hub to the Starter Planner, Build Tier List, and Loot Filter Lab while the poe league 3.27 subpages surface role-specific checklists, curated art, and linked patch sources for quick verification.',
    href: '/starters',
    linkLabel: 'Review poe league 3.27 build tiers',
  },
  {
    title: 'Live service radar',
    description:
      'Monitor hotfixes, server alerts, and official posts inside the poe league 3.27 newsroom module so you can escalate assignments, call for reruns, or swap atlas strategies before the next reset.',
    href: '/patch-notes-poe-3-27',
    linkLabel: 'Check poe league 3.27 patch notes',
  },
]

type MasteryBeat = {
  title: string
  body: string
  image: string
}

const masteryBeats: MasteryBeat[] = [
  {
    title: 'Campaign tempo',
    body: `Set your poe league 3.27 campaign tempo by rehearsing the first twelve hours: pre-farm movement flasks, script escort rotations for Ailith, call out Hive Defense spawn waves, and flag which teammates stay in town to socket support gems. Use the Starter Planner to assign class roles, then cross-check the Build Tier List to decide who rushes maps and who returns to farm Graftblood before Act 10. Document hotfix impacts so you can pivot routes without stalling the roster.`,
    image: '/images/keepers-encounter.jpg',
  },
  {
    title: 'Atlas progression',
    body: `Shape your poe league 3.27 atlas around milestone unlocks—slot early stones for yellow-map sustain, then invest into the Genesis Tree once the first Living Grafts drop. Coordinate Trialmaster, Oshabi, and Catarina encounters using the Syndicate cheat sheet page so the same characters feed Bloodline ascendancies without wasting portals. Track map rotations, altars, and scarab spend in a shared sheet to keep Tier 17 attempts meaningful.`,
    image: '/images/genesis-tree.jpg',
  },
  {
    title: 'Sustainable profit',
    body: `Treat your poe league 3.27 economy as a nightly review: cross-check Foulborn drops against Awakened PoE Trade listings, separate bulk tabs for the official Trade board, and tag any Living Graft gambles you plan to run after hotfixes. Keep Delve, Expedition, and Hive pivots on standby so you can rotate strategies the moment prices plateau.`,
    image: '/images/foulborn-loot.jpg',
  },
]

type HubCard = {
  title: string
  href: string
  description: string
  meta: string
}

const hubCards: HubCard[] = [
  {
    title: 'Starter Operations',
    href: '/starter',
    description:
      'Lock in poe league 3.27 leveling splits, Breach escort assignments, and launch-night consumable checklists with the interactive starter dashboard.',
    meta: 'Includes poe league 3.27 downloadable timelines and Ailith escort drills.',
  },
  {
    title: 'Build Tier List',
    href: '/starters',
    description:
      'Compare poe league 3.27 starter archetypes by clear speed, boss pressure, and Genesis Tree synergy so the roster spreads roles with intent.',
    meta: 'poe league 3.27 filters for softcore, ruthless, SSF, and controller.',
  },
  {
    title: 'Loot Filter Lab',
    href: '/poe-3-27-loot-filter',
    description:
      'Tune poe league 3.27 loot filters with side-by-side previews, audio swaps, and strictness ladders, then export presets ready for opening night.',
    meta: 'Powered by the poe league 3.27 filter sandbox for instant downloads.',
  },
  {
    title: 'Trade Toolkit',
    href: '/awakened-poe-trade-3-27',
    description:
      'Deploy poe league 3.27 trade overlays, price macros, and stash automations to accelerate currency flips before async APIs return.',
    meta: 'Includes poe league 3.27 Awakened Trade macro library.',
  },
  {
    title: 'Official Trade Board',
    href: '/poe-trade',
    description:
      'Review poe league 3.27 official trade etiquette, bulk search templates, and 1-click whisper strings for currency and Breach relics.',
    meta: 'Live-search watchlists for poe league 3.27 Living Grafts.',
  },
  {
    title: 'Syndicate Cheat Sheet',
    href: '/poe-betrayal-cheat-sheet-3-27#canvas',
    description:
      'Keep poe league 3.27 Betrayal target priorities, safehouse loot tables, and board snapshots in one scrollable reference.',
    meta: 'Updated for poe league 3.27 Bloodline ascendancy rewards.',
  },
  {
    title: 'Patch Notes Library',
    href: '/patch-notes-poe-3-27',
    description:
      'Track every poe league 3.27 patch, hotfix, and manifesto excerpt with embedded timelines to coordinate respecs and rerolls.',
    meta: 'poe league 3.27 Hotfix 1–7 digest and future alert feed.',
  },
  {
    title: 'Neversink Filter Presets',
    href: '/neversink-3-27',
    description:
      'Browse poe league 3.27 Neversink presets, strictness paths, and color schemes tailored to Keepers loot goals.',
    meta: 'Side-by-side art plus poe league 3.27 smart download buttons.',
  },
]

type VisualSection = {
  id: string
  title: string
  desc: string
  lead: string
  links: { href: string; label: string; description: string }[]
  image: string
  kicker?: string
}

const visualSections: VisualSection[] = [
  {
    id: 'overview',
    title: 'Launch Overview & Roadmap',
    desc: 'Lock in the timeline and cross-page itinerary before diving deeper into role assignments.',
    kicker: 'Launch briefing',
    lead:
      'The overview module anchors your timeline with release times, reveal coverage, and the priority list for each squad role. It ties the poe league 3.27 countdown to the dedicated Starter Planner and Loot Filter Lab, then links forward to trade and patch hubs so nothing slips between tabs. With this poe league 3.27 roadmap up top, your guild can brief new members in minutes.',
    links: [
      {
        href: '/starter',
        label: 'Starter planner timeline',
        description: 'Add the October 23, 2025 reveal livestream markers and launch-day rehearsals straight from the poe league 3.27 planner.',
      },
      {
        href: '/starters',
        label: 'Build tier quick swap',
        description: 'Confirm who is on Breach escort duty versus Atlas rushers with the poe league 3.27 tier filters.',
      },
      {
        href: '/patch-notes-poe-3-27',
        label: 'Patch digest tracker',
        description: 'Embed the Hotfix 1–7 digest into your prep doc so daylight-saving shifts and bug fixes are in sync.',
      },
    ],
    image: '/images/keepers-async.jpg',
  },
  {
    id: 'leveling',
    title: 'Leveling & Onboarding',
    desc: 'Align campaign pacing, gear checkpoints, and learning resources for new entrants.',
    kicker: 'Leveling lab',
    lead:
      'Leveling guidance combines the Starter Planner with notes pulled from the builds page so your poe league 3.27 openers stay disciplined while the rest of the roster preps mapping gear. Crosslink callouts direct speed runners to route overlays and highlight when to switch to Hive Defense practice.',
    links: [
      {
        href: '/starter',
        label: 'Route PDF & checklists',
        description: 'Download poe league 3.27 escort rotations, vendor recipes, and gem timings in one bundle ready for poe league 3.27 launch night.',
      },
      {
        href: '/starters',
        label: 'Tier list filters',
        description: 'Highlight caster, melee, and minion archetypes with tags tuned for Keepers of the Flame.',
      },
      {
        href: '/starter#videos',
        label: 'Hive Defense drills',
        description: 'Practice Ailith shielding and Dreamer’s Flame wall positioning before private leagues open.',
      },
    ],
    image: '/images/keepers-kineticrain.jpg',
  },
  {
    id: 'economy',
    title: 'Economy & Trade Desk',
    desc: 'Coordinate currency plans, price checks, and ledger habits for the guild treasury.',
    kicker: 'Economy desk',
    lead:
      'The economy dashboard brings together Awakened PoE Trade intel, official trade board watchlists, and nightly ledger templates so the poe league 3.27 market stays transparent for your guild treasurer. Reference the same panel when adjusting valuations after manifestos or when the poe league 3.27 hotfix feed nudges drop rates.',
    links: [
      {
        href: '/awakened-poe-trade-3-27',
        label: 'Awakened overlay guide',
        description: 'Tag high-demand bases and Living Graft gambles with the poe league 3.27 vault checklist and poe league 3.27 overlay presets.',
      },
      {
        href: '/poe-trade',
        label: 'Official trade macros',
        description: 'Clone bulk-buy templates and chaos ratios ready for async trade rebuilds.',
      },
      {
        href: '/awakened-poe-trade-3-27#ledger',
        label: 'Guild profit sheets',
        description: 'Log nightly chaos-per-hour reports so pivots trigger before prices slide.',
      },
    ],
    image: '/images/keepers-oshabi.jpg',
  },
  {
    id: 'endgame',
    title: 'Endgame & Atlas Operations',
    desc: 'Sequence boss goals, graft experiments, and map sustain paths.',
    kicker: 'Atlas ops',
    lead:
      'Endgame prep outlines atlas trees, boss sequencing, and graft experiments so the poe league 3.27 atlas goals stay in sync with your roster’s gear curve. Lean on the Syndicate cheat sheet to assign safehouse roles and rotate through Expedition or Delve pivots whenever Breach loot slows.',
    links: [
      {
        href: '/poe-betrayal-cheat-sheet-3-27#canvas',
        label: 'Syndicate board tracker',
        description: 'Assign safehouse rewards and Betrayal targets before mapping blocks begin inside the poe league 3.27 cheat sheet.',
      },
      {
        href: '/starter#atlas',
        label: 'Atlas tree templates',
        description: 'Rotate Breach, Expedition, and Delve passives using downloadable poe league 3.27 snapshots.',
      },
      {
        href: '/patch-notes-poe-3-27#bossing',
        label: 'Boss timer log',
        description: 'Bookmark Trialmaster, Oshabi, and Catarina schedule updates after each hotfix.',
      },
    ],
    image: '/images/keepers-uberboss.jpg',
  },
  {
    id: 'community',
    title: 'Community & Coordination',
    desc: 'Keep guild comms, event calendars, and shared resources aligned.',
    kicker: 'Community playbook',
    lead:
      'Community coordination channels news posts, creator callouts, and event bulletins so poe league 3.27 operations stay aligned with official updates while leaving room for custom Discord macro tips. The section also lists content creator spotlights for players chasing advanced mechanical breakdowns.',
    links: [
      {
        href: '/starter#comms',
        label: 'Guild ops toolkit',
        description: 'Publish announcements with ready-made Markdown templates and rota charts for poe league 3.27 crews.',
      },
      {
        href: '/patch-notes-poe-3-27#newsroom',
        label: 'RSS relay setup',
        description: 'Embed official forum posts and poe league 3.27 hotfix alerts directly into Discord.',
      },
      {
        href: '/starters#coaching',
        label: 'Coaching schedule',
        description: 'Pair voice comm checklists with role-by-role build refreshers.',
      },
    ],
    image: '/images/keepers-hive.jpg',
  },
  {
    id: 'quickfacts',
    title: 'Quick Facts & Checklist',
    desc: 'Glanceable cards for critical times, rewards, and unlocks.',
    lead:
      'Quick facts condense server times, challenge thresholds, and gear breakpoints into an easy scroll so poe league 3.27 reference checks take seconds during voice comms. Pair the checklist with the navigation links to jump straight into the deeper guide once someone needs more context.',
    links: [
      {
        href: '/starter#countdown',
        label: 'Launch countdown card',
        description: 'Pin the October 31, 2025 server unlocks and ANZ rollover minutes before the poe league 3.27 go time.',
      },
      {
        href: '/starters#bloodline',
        label: 'Bloodline thresholds',
        description: 'Review ascendancy unlock requirements per class for poe league 3.27 parties.',
      },
      {
        href: '/patch-notes-poe-3-27#supporter',
        label: 'Supporter pack FAQ',
        description: 'Answer cosmetics questions without digging through the full notes.',
      },
    ],
    image: '/images/poe327-hero.webp',
    kicker: 'Quick hits',
  },
  {
    id: 'updates',
    title: 'Patch Notes & Hotfix Radar',
    desc: 'Stay on top of balance changes, bug fixes, and developer posts.',
    kicker: 'Patch feed',
    lead:
      'The updates log combines patch notes, developer posts, and build adjustments to keep the poe league 3.27 change feed concise while preserving every context link you might need later.',
    links: [
      {
        href: '/patch-notes-poe-3-27',
        label: 'Hotfix timeline',
        description: 'Track Hotfixes 1–7 with timestamps, download links, and community mirrors for poe league 3.27 squads.',
      },
      {
        href: '/patch-notes-poe-3-27#manifesto',
        label: 'Manifesto breakouts',
        description: 'Compare balance excerpts to build tier shifts before respeccing.',
      },
      {
        href: '/awakened-poe-trade-3-27#alerts',
        label: 'Economy ping setup',
        description: 'Pipe loot conversion changes into the trade desk alert channel.',
      },
    ],
    image: '/images/keepers-supporter.jpg',
  },
]
export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] w-full items-center overflow-hidden bg-black">
        <Image
          src="/images/keepers-flame-hero.jpg"
          alt="Official Keepers of the Flame reveal art with molten breaches"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#040509]/90 via-[#040509]/75 to-[#150a1f]/60" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#05060a] to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="container relative z-10 flex flex-col gap-10 py-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="pill bg-brand/20 text-brand">poe league 3.27 launch HQ</span>
            <h1 className="h1 text-balance leading-tight">poe league 3.27 Keepers of the Flame Launch Center</h1>
            <p className="text-base text-white/80 md:text-lg">
              Keepers of the Flame kicks off on October 31, 2025 at 12:00 PM PDT in the Americas (rolling to ANZ on November 1). This hub compresses
              the essentials—timeline, navigation, and priority callouts—so you can map every Breach escort and Living Graft test without skimming a
              full patch note. It is the first stop for poe league 3.27 captains spinning up watch parties and private league scrims.
            </p>
            <p className="text-base text-white/75 md:text-lg">
              Jump straight into the{' '}
              <Link href="/starter" className="text-brand underline-offset-4 transition hover:text-white hover:underline">
                poe league 3.27 starter planner
              </Link>
              ,{' '}
              <Link href="/starters" className="text-brand underline-offset-4 transition hover:text-white hover:underline">
                build tier list
              </Link>
              ,{' '}
              <Link href="/poe-3-27-loot-filter" className="text-brand underline-offset-4 transition hover:text-white hover:underline">
                loot filter lab
              </Link>
              , and{' '}
              <Link href="/awakened-poe-trade-3-27" className="text-brand underline-offset-4 transition hover:text-white hover:underline">
                trade toolkit
              </Link>
              , then loop back for hotfix coverage and the quick facts grid whenever strategies shift mid-session.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://www.ign.com/videos/path-of-exile-keepers-of-the-flame-official-trailer"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full justify-center sm:w-auto"
            >
              <PlayCircle size={18} />
              Watch the official trailer
            </a>
            <a href="#features" className="btn btn-ghost w-full justify-center sm:w-auto">
              <Flame size={18} />
              Enter the poe league 3.27 feature hub
            </a>
            <LastUpdated date="2025-11-02" className="mx-auto sm:ml-auto sm:mr-0" />
          </div>
          <ul className="grid gap-4 text-white/80 md:grid-cols-3">
            {heroHighlights.map((item) => (
              <li
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-brand/60 hover:bg-brand/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60 opacity-80 transition group-hover:opacity-100" />
                <div className="relative z-10 space-y-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-brand">{item.title}</span>
                  <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-white"
                  >
                    {item.linkLabel}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <p className="max-w-4xl text-sm text-white/70 md:text-base">
            This poe league 3.27 knowledge base cross-links official posts, manifesto excerpts, and developer notes so squads can cite sources while
            planning builds, and every archived callout stays searchable when new adjustments land.
          </p>
        </div>
      </section>

      <Section
        id="directory"
        kicker="poe league 3.27 sitemap"
        title="Navigate the Keepers hub"
        desc="Jump into the poe league 3.27 subpages that feed this homepage—each card links to a dedicated toolkit so squads can prep builds, filters, trade routes, and Betrayal boards without guesswork."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hubCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0b0d15]/80 p-6 text-white/80 transition hover:border-brand/40 hover:bg-brand/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="pill bg-brand/15 text-brand text-xs uppercase tracking-wide">poe league 3.27</span>
                <ArrowRight size={16} className="text-white/40 transition group-hover:translate-x-1 group-hover:text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{card.description}</p>
              <p className="text-xs text-white/60">{card.meta}</p>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-white"
              >
                Open {card.title}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
      id="features"
      kicker="Signature systems"
      title="Keepers of the Flame Arsenal"
      desc="Explore poe league 3.27 league-defining mechanics with high-impact art, encounter breakdowns, and clutch talking points for your crew so every briefing stays focused. Scroll through for quick refreshers covering Dreamer’s Flame walls, Marshal Vruun tactics, and Foulborn loot paths."
        className="relative"
      >
        <div className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leagueFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Section>

      <Section
      id="mastery"
      kicker="Week-one mastery"
      title="Pillars for the First Week"
      desc="Anchor your poe league 3.27 rituals with three foundational beats covering campaign flow, atlas planning, and profit checkpoints so squads align their first resets."
        className="relative"
      >
        <div className="relative grid gap-4 md:grid-cols-3">
          {masteryBeats.map((beat) => (
            <article
              key={beat.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-6 text-white/85 shadow-xl shadow-black/40 transition hover:border-brand/40 hover:shadow-brand/30"
            >
              <Image
                src={beat.image}
                alt={beat.title}
                fill
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#060709]/95 via-[#060709]/75 to-transparent" />
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{beat.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{beat.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {visualSections.map((section, index) => {
        const primaryLink = section.links[0]
        return (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            desc={section.desc}
            kicker={section.kicker}
            actions={
              primaryLink ? (
                <Link href={primaryLink.href} className="btn btn-ghost">
                  Visit {section.title}
                </Link>
              ) : undefined
            }
            className="relative"
          >
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white/80">{section.lead}</p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {section.links.map((link) => (
                    <li
                      key={link.label}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow-inner shadow-black/30 transition hover:border-brand/50 hover:bg-brand/15"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60 opacity-80" />
                      <div className="relative z-10 flex flex-col gap-1">
                        <Link href={link.href} className="font-semibold text-brand transition hover:text-white">
                          {link.label}
                        </Link>
                        <span className="text-xs leading-relaxed text-white/70">{link.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/40 ${
                  index % 2 === 0 ? 'lg:order-last' : ''
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={960}
                  height={640}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                  In-game capture
                </span>
              </div>
            </div>
          </Section>
        )
      })}
    </>
  )
}
