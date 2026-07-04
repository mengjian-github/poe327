import Image from 'next/image'
import Script from 'next/script'
import { ArrowRight } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'
import { LaunchChecklist } from '@/components/launch-checklist'
import { TrackedLink } from '@/components/tracked-link'
import { LastUpdated, Section } from '@/components/ui'
import { leagueFeatures } from '@/data/league'

type MasteryBeat = {
  title: string
  body: string
  image: string
  href?: string
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

type LaunchFact = {
  label: string
  value: string
  note: string
}

const launchFacts: LaunchFact[] = [
  {
    label: 'Release date',
    value: 'Oct 31, 2025 · 12:00 PM PDT',
    note: 'ANZ rolls into Nov 1; use UTC conversion before party planning.',
  },
  {
    label: 'League name',
    value: 'Keepers of the Flame',
    note: 'PoE 3.27 league with Breach escorts and Living Graft progression.',
  },
  {
    label: 'Official patch notes',
    value: 'Read source first',
    note: 'Check GGG notes before starters, filters, trade macros, or respec calls.',
  },
  {
    label: 'New mechanics / trade changes',
    value: 'Grafts, Hive, economy alerts',
    note: 'Track Bloodline rewards, FilterBlade strictness, and Awakened trade setup.',
  },
]

type LaunchPath = {
  title: string
  pathType: string
  href: string
  description: string
  steps: string[]
}

const launchPaths: LaunchPath[] = [
  { title: 'New to PoE 3.27', pathType: 'new', href: '/getting-started', description: 'Version summary, beginner-safe starter route, and default loot filter install steps.', steps: ['Read the 3.27 quick answer', 'Pick a beginner-safe starter route', 'Install a default loot filter'] },
  { title: 'Returning player', pathType: 'returning', href: '/patch-notes', description: 'Scan Breach, Genesis, Grafts, Bloodlines, trade updates, and hotfixes.', steps: ['Scan the patch-note summary', 'Check mechanic changes', 'Review launch-day hotfixes'] },
  { title: 'Build-ready', pathType: 'build_ready', href: '/starters', description: 'Open starter candidates, filter by playstyle and budget, then save the source link.', steps: ['Open starter candidates', 'Filter by playstyle and budget', 'Save the PoB/source link'] },
  { title: 'Filter-only', pathType: 'filter_only', href: '/filters', description: 'Choose strictness, open FilterBlade, and verify the in-game sound/color checks.', steps: ['Choose strictness level', 'Open FilterBlade', 'Verify in-game filter cues'] },
  { title: 'Trade setup', pathType: 'trade_setup', href: '/trade/official', description: 'Compare official trade and Awakened PoE Trade before launch-day price checks.', steps: ['Open official trade', 'Set up price-check tools', 'Save trade search presets'] },
]

const launchChecklist = [
  { id: 'confirm_patch', label: 'Confirm 3.27 patch context', href: '/patch-notes#official-sources', detail: 'Open official notes first.' },
  { id: 'pick_starter', label: 'Pick starter direction', href: '/starters', detail: 'Use persona Top3 if unsure.' },
  { id: 'install_filter', label: 'Install loot filter', href: '/filters', detail: 'Choose strictness before mapping.' },
  { id: 'setup_trade', label: 'Set up trade tools', href: '/trade/official', detail: 'Save official trade workflow.' },
  { id: 'check_hotfix', label: 'Check hotfix radar', href: '/patch-notes#hotfix-digest', detail: 'Recheck before spending currency.' },
]

type HubCard = {
  title: string
  href: string
  description: string
  meta: string
}

const hubCards: HubCard[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    description:
      'Fast, visual onboarding for brand‑new or returning players: leveling flow, resistances, gems/links, flasks, loot filters, trading, and atlas basics.',
    meta: 'Built for PoE 3.27 with simple checklists and screenshots.',
  },
  {
    title: 'Starters',
    href: '/starters',
    description:
      'Beginner‑friendly league starters with summaries, roles, attributes, and POB links. Open a dedicated page for each build.',
    meta: 'Pulls from our curated PoE 3.27 starter set.',
  },
  {
    title: 'Loot Filter Lab',
    href: '/filters',
    description:
      'Tune poe league 3.27 loot filters with side-by-side previews, audio swaps, and strictness ladders, then export presets ready for opening night.',
    meta: 'Powered by the poe league 3.27 filter sandbox for instant downloads.',
  },
  {
    title: 'Trade Toolkit',
    href: '/trade/awakened',
    description:
      'Deploy poe league 3.27 trade overlays, price macros, and stash automations to accelerate currency flips before async APIs return.',
    meta: 'Includes poe league 3.27 Awakened Trade macro library.',
  },
  {
    title: 'Official Trade Board',
    href: '/trade/official',
    description:
      'Review poe league 3.27 official trade etiquette, bulk search templates, and 1-click whisper strings for currency and Breach relics.',
    meta: 'Live-search watchlists for poe league 3.27 Living Grafts.',
  },
  {
    title: 'Syndicate Cheat Sheet',
    href: '/betrayal-cheatsheet#canvas',
    description:
      'Keep poe league 3.27 Betrayal target priorities, safehouse loot tables, and board snapshots in one scrollable reference.',
    meta: 'Updated for poe league 3.27 Bloodline ascendancy rewards.',
  },
  {
    title: 'Patch Notes Library',
    href: '/patch-notes',
    description:
      'Track every poe league 3.27 patch, hotfix, and manifesto excerpt with embedded timelines to coordinate respecs and rerolls.',
    meta: 'poe league 3.27 Hotfix 1–7 digest and future alert feed.',
  },
  {
    title: 'Neversink Filter Presets',
    href: '/filters/neversink',
    description:
      'Browse poe league 3.27 Neversink presets, strictness paths, and color schemes tailored to Keepers loot goals.',
    meta: 'Side-by-side art plus poe league 3.27 smart download buttons.',
  },
]

type FaqItem = {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'When does poe league 3.27 Keepers of the Flame launch?',
    answer:
      'Keepers of the Flame opens on October 31, 2025 at 12:00 PM PDT (7:00 PM UTC) for the Americas and rolls to ANZ on November 1, so squads can sync their countdowns here before servers unlock.',
  },
  {
    question: 'What will I get by clicking into the poe327.net launch HQ?',
    answer:
      'The homepage bundles the release timeline, starter planner, build tier list, loot filter lab, trade macros, and Betrayal cheat sheets so you grab every linked toolkit from one tab.',
  },
  {
    question: 'How often is the homepage updated once patch notes or hotfixes drop?',
    answer:
      'We refresh the hero highlights, hotfix digest, and Last Updated stamp any time Grinding Gear posts new manifestos, hotfixes, or support pack changes, keeping the SERP answer in sync with live notes.',
  },
  {
    question: 'Can I prep loot filters and trade macros before the league starts?',
    answer:
      'Yes—use the Loot Filter Lab for side-by-side previews and the Trade Toolkit for Awakened PoE Trade overlays so your presets and whisper templates are exported before the first reset.',
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
        href: '/patch-notes',
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
    // Starter section pending – no deep-link actions available right now.
    links: [],
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
        href: '/trade/awakened',
        label: 'Awakened overlay guide',
        description: 'Tag high-demand bases and Living Graft gambles with the poe league 3.27 vault checklist and poe league 3.27 overlay presets.',
      },
      {
        href: '/trade/official',
        label: 'Official trade macros',
        description: 'Clone bulk-buy templates and chaos ratios ready for async trade rebuilds.',
      },
      {
        href: '/trade/awakened',
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
        href: '/betrayal-cheatsheet#canvas',
        label: 'Syndicate board tracker',
        description: 'Assign safehouse rewards and Betrayal targets before mapping blocks begin inside the poe league 3.27 cheat sheet.',
      },
      {
        href: '/patch-notes',
        label: 'Patch notes feed',
        description: 'Bookmark hotfix timeline and schedule updates after each release.',
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
        href: '/patch-notes',
        label: 'RSS relay setup',
        description: 'Embed official forum posts and poe league 3.27 hotfix alerts directly into Discord.',
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
        href: '/patch-notes',
        label: 'Patch notes feed',
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
        href: '/patch-notes',
        label: 'Hotfix timeline',
        description: 'Track Hotfixes 1–7 with timestamps, download links, and community mirrors for poe league 3.27 squads.',
      },
      {
        href: '/patch-notes',
        label: 'Patch digest tracker',
        description: 'Embed the Hotfix 1–7 digest into your prep doc so daylight-saving shifts and bug fixes are in sync.',
      },
      {
        href: '/trade/awakened',
        label: 'Economy ping setup',
        description: 'Pipe loot conversion changes into the trade desk alert channel.',
      },
    ],
    image: '/images/keepers-supporter.jpg',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}
export default function Home() {
  return (
    <>
      <Script id="homepage-faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <section className="relative isolate flex w-full overflow-hidden bg-black">
        <Image
          src="/images/keepers-flame-hero.jpg"
          alt="Official Keepers of the Flame reveal art with molten breaches"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#040509]/95 via-[#040509]/82 to-[#150a1f]/65" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060a] to-transparent" />
        <div className="container relative z-10 grid min-h-[calc(100svh-65px)] gap-4 py-4 text-white md:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] md:items-center md:gap-8 md:py-16">
          <div className="min-w-0 space-y-3 md:space-y-5">
            <span className="pill w-fit bg-brand/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em]">
              PoE 3.27 · Keepers of the Flame · Patch notes, starters, filters, trade setup, hotfix radar
            </span>
            <div className="space-y-3">
              <h1 className="max-w-5xl break-words text-4xl font-black leading-[1.02] tracking-tight text-pretty sm:text-5xl lg:text-7xl">
                PoE 3.27 Launch Runbook
              </h1>
              <p className="max-w-4xl text-sm leading-relaxed text-white/85 sm:text-lg md:text-xl">
                Use one checklist to confirm the official patch context, pick your next starter step, install the right loot filter, set up trade tools, and keep up with 3.27 hotfixes without digging through ten tabs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-3 text-sm leading-relaxed text-white/80 md:p-4 md:text-base">
              PoE 3.27 players need more than raw patch notes. Start by checking the official update, then choose a starter path, install a current loot filter, set up trade tools, and watch early hotfixes before you lock your league plan.
            </div>
            <div className="rounded-3xl border border-brand/30 bg-brand/10 p-3 shadow-2xl shadow-black/25 md:hidden">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">Quick answer checklist</div>
              <LaunchChecklist steps={launchChecklist.slice(0, 3)} sourceSection="mobile_hero_quick_answer" compact />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <TrackedLink
                href="#launch-checklist"
                eventName="checklist_step_click"
                eventProps={{ source_section: 'hero', step_id: 'start_checklist', step_index: 0, cta_text: 'Start 3-Min Launch Checklist', target_url: '#launch-checklist', cta_rank: 1 }}
                className="btn btn-primary min-h-11 justify-center rounded-2xl px-4 py-3 text-sm sm:text-base"
              >
                Start 3-Min Launch Checklist
              </TrackedLink>
              <TrackedLink
                href="/patch-notes#official-sources"
                eventName="patch_notes_click"
                eventProps={{ source_section: 'hero', patch_section: 'official_sources', action: 'open_page', cta_text: 'Read Official Patch Notes', target_url: '/patch-notes#official-sources', cta_rank: 2 }}
                className="btn btn-ghost min-h-11 justify-center rounded-2xl px-4 py-3 text-sm sm:text-base"
              >
                Read Official Patch Notes
              </TrackedLink>
            </div>
            <div id="launch-paths" className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5">
              {launchPaths.map((path, index) => (
                <TrackedLink
                  key={path.pathType}
                  href={path.href}
                  eventName="launch_path_select"
                  eventProps={{ source_section: 'launch_path_selector', path_type: path.pathType, cta_text: path.title, target_url: path.href, cta_rank: index + 1, position: index + 1 }}
                  className="group flex min-h-12 min-w-0 items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white shadow-xl shadow-black/20 backdrop-blur transition hover:border-brand/60 hover:bg-brand/20 hover:text-white sm:min-h-14 md:flex-col md:items-start md:justify-start"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-bold sm:text-sm">{path.title}</span>
                    <span className="mt-1 hidden text-xs leading-snug text-white/70 md:block">{path.description}</span>
                  </span>
                  <ArrowRight size={16} className="shrink-0 transition group-hover:translate-x-1" />
                </TrackedLink>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/75">
              <TrackedLink
                href="https://www.pathofexile.com/forum/view-forum/patch-notes"
                eventName="official_source_click"
                eventProps={{ source_section: 'hero', source_type: 'official_patch_notes', cta_text: 'Official patch notes source', target_url: 'https://www.pathofexile.com/forum/view-forum/patch-notes', is_external: true, cta_rank: 3 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 font-semibold text-brand hover:text-white"
                target="_blank"
              >
                Official patch notes source <ArrowRight size={14} />
              </TrackedLink>
              <LastUpdated date="2025-11-02" />
            </div>
          </div>

          <aside className="hidden min-w-0 rounded-[28px] border border-white/12 bg-black/40 p-4 shadow-2xl shadow-black/30 backdrop-blur md:block md:p-5">
            <div className="mb-3 flex items-center gap-3 text-white/70">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Quick Facts</span>
              <div className="h-px flex-1 bg-white/15" aria-hidden />
            </div>
            <dl className="grid gap-3">
              {launchFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand">{fact.label}</dt>
                  <dd className="mt-1 text-base font-bold leading-tight text-white md:text-lg">{fact.value}</dd>
                  <dd className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">{fact.note}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <Section
        id="launch-checklist"
        kicker="3-minute launch checklist"
        title="Start here before you lock your PoE 3.27 plan"
        desc="Work through five launch actions in order. Each click is tracked separately from raw pageviews so we can see whether visitors actually move into a task."
      >
        <LaunchChecklist steps={launchChecklist} sourceSection="launch_checklist" />
      </Section>

      <Section
        id="directory"
        kicker="poe league 3.27 sitemap"
        title="Navigate the Keepers hub"
        desc="Jump into the poe league 3.27 subpages that feed this homepage—each card links to a dedicated toolkit so squads can prep builds, filters, trade routes, and Betrayal boards without guesswork."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hubCards.map((card) => (
            <TrackedLink
              key={card.title}
              href={card.href}
              eventName="hub_card_open"
              eventProps={{ source_section: 'homepage_directory', hub_card: card.title, target_url: card.href }}
              className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#0b0d15]/80 p-8 text-white/80 transition hover:border-brand/40 hover:bg-brand/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="pill bg-brand/15 text-brand text-sm uppercase tracking-wide font-semibold">poe league 3.27</span>
                <ArrowRight size={18} className="text-white/40 transition group-hover:translate-x-1 group-hover:text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <p className="text-base leading-relaxed text-white/80">{card.description}</p>
              <p className="text-sm text-white/65">{card.meta}</p>
              <span className="inline-flex items-center gap-2 text-base font-semibold text-brand transition hover:text-white">
                Open {card.title}
                <ArrowRight size={16} />
              </span>
            </TrackedLink>
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
            <div
              key={beat.title}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-10 text-white/85 shadow-xl shadow-black/40 transition hover:border-brand/40 hover:shadow-brand/30"
            >
              <Image
                src={beat.image}
                alt={beat.title}
                fill
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:opacity-45"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#060709]/95 via-[#060709]/75 to-transparent" />
              <div className="relative z-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-white">{beat.title}</h3>
                <p className="text-base leading-relaxed text-white/85">{beat.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="tools"
        kicker="Quick tools"
        title="Launch Toolkit"
        desc="Jump directly into the most-used tools and references for PoE 3.27."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <TrackedLink
            href="/filters"
            eventName="filterblade_click"
            eventProps={{ location: 'home_tools_grid', label: 'Loot Filter Lab' }}
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50 hover:bg-brand/10"
          >
            <span className="text-sm font-bold text-brand">Loot Filter Lab</span>
            <span className="text-sm text-white/70">Copy-ready presets and setup steps.</span>
          </TrackedLink>
          <TrackedLink
            href="/patch-notes"
            eventName="patch_notes_click"
            eventProps={{ location: 'home_tools_grid', label: 'Patch Notes Radar' }}
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50 hover:bg-brand/10"
          >
            <span className="text-sm font-bold text-brand">Patch Notes Radar</span>
            <span className="text-sm text-white/70">Hotfix timelines and manifestos.</span>
          </TrackedLink>
          <TrackedLink
            href="/trade/awakened"
            eventName="trade_tool_click"
            eventProps={{ location: 'home_tools_grid', label: 'Trade Toolkit' }}
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50 hover:bg-brand/10"
          >
            <span className="text-sm font-bold text-brand">Trade Toolkit</span>
            <span className="text-sm text-white/70">Overlay configs and price macros.</span>
          </TrackedLink>
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
                <TrackedLink
                  href={primaryLink.href}
                  eventName="section_next_step_click"
                  eventProps={{ source_section: `visual_${section.id}`, cta_text: `Visit ${section.title}`, target_url: primaryLink.href }}
                  className="btn btn-ghost"
                >
                  Visit {section.title}
                </TrackedLink>
              ) : undefined
            }
            className="relative"
          >
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-white/85">{section.lead}</p>
                <ul className="grid gap-6 sm:grid-cols-2">
                  {section.links.map((link) => (
                    <li
                      key={link.label}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-inner shadow-black/30 transition hover:border-brand/50 hover:bg-brand/15"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60 opacity-80" />
                      <div className="relative z-10 flex flex-col gap-2">
                        <TrackedLink
                          href={link.href}
                          eventName="section_deep_link_click"
                          eventProps={{ source_section: `visual_${section.id}`, cta_text: link.label, target_url: link.href }}
                          className="font-bold text-base text-brand transition hover:text-white"
                        >
                          {link.label}
                        </TrackedLink>
                        <span className="text-sm leading-relaxed text-white/75">{link.description}</span>
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

      <Section
        id="faq"
        kicker="SERP quick answers"
        title="Keepers of the Flame launch FAQ"
        desc="Answer the most-clicked search prompts right on the homepage so Google can surface expanded snippets that point directly to the hub."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {faqItems.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0b0d15]/85 p-8 text-white/80 transition hover:border-brand/50 hover:bg-brand/10"
            >
              <h3 className="text-xl font-bold text-white">{faq.question}</h3>
              <p className="text-base leading-relaxed text-white/85">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
