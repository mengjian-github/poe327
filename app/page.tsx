import Image from 'next/image'
import { PlayCircle, Flame } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'
import { LastUpdated, Section } from '@/components/ui'
import { leagueFeatures } from '@/data/league'

type HeroHighlight = {
  title: string
  description: string
}

const heroHighlights: HeroHighlight[] = [
  {
    title: 'Launch timeline checklist',
    description:
      'Chart the poe league 3.27 Oct 31 (Americas) and Nov 1 (ANZ) unlocks, the October 23 reveal livestream, and the Private League stability fix that hit at 1:13 PM PDT on launch day so your roster never misses a beat. This poe league 3.27 schedule keeps your alarms, patch preloads, and party roles aligned.',
  },
  {
    title: 'Hotfix radar',
    description:
      'Track poe league 3.27 Hotfix 7 (Nov 02, 2025) alongside the Hotfix 6 Breach tweaks and async market fixes from Nov 01 so your playbook reacts the moment Grinding Gear Games pushes an update. This poe league 3.27 feed tags every forum post and patch note in one glance.',
  },
  {
    title: 'Async trade & Genesis prep',
    description:
      'Stage poe league 3.27 stash tabs, Merchant Tab contingencies, and Genesis Tree graft allocations so Ailith, Hive Hives, and Foulborn loot kick off strong even before the in-game market fully stabilises. This poe league 3.27 prep board keeps your guild economy humming.',
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
    body: `Kick off poe league 3.27 by rehearsing the October 31 release ladder: drill Breach escort routes so Ailith survives Hive Defense objectives, stash movement flasks, and pre-level gems ahead of the reveal manifesto eight days out. Maintain a poe league 3.27 notebook that tracks which acts feed Graftblood fastest so the Genesis Tree unlocks before Act 10 falls, and note Hotfix 6 slowing early Unstable Breaches so you don’t overcommit resources.`,
    image: '/images/keepers-encounter.jpg',
  },
  {
    title: 'Atlas progression',
    body: `Shape your poe league 3.27 atlas around Bloodline unlocks: plan routes for Trialmaster, Oshabi, and Catarina so your main ascendancy can share points with the Genesis Atlas Tree branches. Anchor early stones on yellow-tier sustain, then pivot into Breach Hives hunting Marshal Vruun once sextants cooperate. Journal poe league 3.27 map rotations and boss attempts so Tier 17 pushes land with intent.`,
    image: '/images/genesis-tree.jpg',
  },
  {
    title: 'Sustainable profit',
    body: `Treat poe league 3.27 farming as nightly audits: compare Foulborn currency growth from the Genesis Tree to async trade speculation, log Merchant Tab flips separately in case support lands mid-league, and keep Expedition or Delve pivots staged if Hive raids dip. Document poe league 3.27 profit swings against manifesto nerfs so you reallocate before the economy cools.`,
    image: '/images/foulborn-loot.jpg',
  },
]

type VisualSection = {
  id: string
  title: string
  desc: string
  lead: string
  callouts: string[]
  image: string
  kicker?: string
}

const visualSections: VisualSection[] = [
  {
    id: 'overview',
    title: 'Launch Timeline & Reveal Beats',
    desc: 'Lock poe league 3.27 release windows and livestream checkpoints before building your night-one itinerary. This poe league 3.27 planning brief keeps countdowns and reveals aligned.',
    kicker: 'poe league 3.27 briefing',
    lead:
      'poe league 3.27 Keepers of the Flame lands on October 31, 2025 at 12:00 PM PDT for the Americas with an ANZ rollover on November 1, and the reveal livestream hits eight days prior. Use this briefing to plot patch preloads, wrap Mercenaries of Trarthus objectives, and script your crew’s watch party while the hype surges. This poe league 3.27 timeline keeps every guild aligned on reveal beats, preload locks, and launch-day fixes.',
    callouts: [
      'Run a poe league 3.27 rehearsal the weekend before launch to finish Mercenaries of Trarthus challenges and prep for the Keepers Challenge League objectives.',
      'Set reminders for the October 23, 2025 poe league 3.27 reveal livestream so you pivot builds the moment the manifesto tees up new gems like Wall of Force and Thunderstorm.',
      'Log the October 31, 2025 Private League fix and Hotfix 2 Off-hand slot patch so you know when rerolls and group restarts are safe.',
    ],
    image: '/images/keepers-async.jpg',
  },
  {
    id: 'leveling',
    title: 'Breach Leveling & Graft Unlocks',
    desc: 'Anchor your poe league 3.27 leveling route around Hive Defense beats and early Genesis Tree growth. This poe league 3.27 progression outline keeps your acts and map entry smooth.',
    kicker: 'poe league 3.27 leveling lab',
    lead:
      'The Keepers of the Flame loop pushes you to safeguard Ailith, stabilise breaches, and bank Graftblood even before maps. Folding those beats into your poe league 3.27 leveling splits powers the Genesis Tree the moment Act 10 falls and primes Marshal Vruun scouting once you touch red maps. This poe league 3.27 leveling path keeps the Order in sync from Act 1 to the first red map.',
    callouts: [
      'Scrimmage poe league 3.27 Hive Defense positioning so channel phases survive without burning defensive flasks while Ailith conjures Dreamer’s Flame walls.',
      'Slot poe league 3.27 Graftblood alert cues in your loot filter to spot the currency that feeds the Genesis Tree and Living Graft sockets.',
      'Route Order of the Keepers side content that unlocks new poe league 3.27 gems like Wall of Force, Thunderstorm, and Conflagration teased in the reveal.',
    ],
    image: '/images/keepers-kineticrain.jpg',
  },
  {
    id: 'economy',
    title: 'Economy Plays and Trading Rhythm',
    desc: 'Keep your poe league 3.27 coffers glowing while async trade policies settle. This poe league 3.27 economy primer keeps traders agile.',
    kicker: 'poe league 3.27 economy board',
    lead:
      'GGG has Merchant Tabs live in Path of Exile 2 but not yet in poe league 3.27, so expect speculation around asynchronous buyouts alongside Genesis Tree crafting booms. Track those shifts nightly alongside Hotfix 6 and 7’s market browser fixes to ride demand spikes without overcommitting. This poe league 3.27 economy cadence keeps your stash elastic while Merchant Tabs lag behind.',
    callouts: [
      'Keep Merchant Tabs in PoE 2 until support hits poe league 3.27 to avoid losing stash access mid-league.',
      'Flip early poe league 3.27 Foulborn bases and Foul currency before the wider market understands their weighting.',
      'Log poe league 3.27 chaos-per-hour targets versus async trade whispers so you know when to pivot into Expedition or Delve.',
    ],
    image: '/images/keepers-oshabi.jpg',
  },
  {
    id: 'endgame',
    title: 'Endgame Mastery and Bloodline Hunts',
    desc: 'Treat poe league 3.27 endgame like a curated rotation of Bloodline unlocks and hive raids. This poe league 3.27 endgame digest keeps rotations intentional.',
    kicker: 'poe league 3.27 endgame deck',
    lead:
      'Bloodline ascendancies tie to bosses like Trialmaster, Oshabi, and Catarina, while Hive gates escalate toward Marshal Vruun and the new Tier 17 arenas. Mapping your poe league 3.27 playlist keeps the spectacle high and ensures every build taps the ten new Bloodline classes from the 3.27.0 patch notes. This poe league 3.27 endgame loop makes Bloodline hunting and Hive rotations second nature.',
    callouts: [
      'Slot poe league 3.27 boss-focused nights to unlock Bloodlines such as Chaos (Trialmaster) and Oshabi before diving into Tier 17.',
      'Rotate poe league 3.27 Breach Hives, elder guardians, and uber invitations to keep loot tables fresh.',
      'Pair poe league 3.27 graft swaps with Bloodline respeccing so every session tests a new synergy.',
    ],
    image: '/images/keepers-uberboss.jpg',
  },
  {
    id: 'community',
    title: 'Community Support and Continuous Updates',
    desc: 'Stay plugged into poe league 3.27 intel drops and collaborative hype loops. This poe league 3.27 community channel keeps everyone sharing tech.',
    kicker: 'poe league 3.27 community line',
    lead:
      'The poe327 inbox packages poe league 3.27 reveal recaps, balance manifestos, and economic alerts so you never miss a shift. Send your own notes to shape the dashboards as the league evolves while Supporter Packs and live updates roll out on day one. This poe league 3.27 community hub keeps supporters, groups, and creators synced.',
    callouts: [
      'Send launch feedback to support@poe327.net with “poe league 3.27” in the subject for priority triage.',
      'Expect editorial poe league 3.27 bundles tying livestream headlines to actionable farming pivots within hours.',
      'Watch for rolling poe league 3.27 design refreshes that add interactive pathing charts, Bloodline trackers, and profit snapshots as new hotfix notes land.',
    ],
    image: '/images/keepers-supporter.jpg',
  },
  {
    id: 'quickfacts',
    title: 'Quick Facts & Checklist',
    desc: 'Spin up poe league 3.27 quick references for your party. This poe league 3.27 cheat sheet keeps your crew aligned between deeper dives.',
    lead:
      'Keep these snap notes close so every role tracks the Keepers Challenge League essentials—release times, Genesis Atlas unlocks, async trade caveats, and Supporter Pack timing. This poe league 3.27 fact grid links the core guide, mechanic summary, and launch blog in one breath.',
    callouts: [
      'Log poe league 3.27 release times for Oct 31 (12:00 PM PDT) in the Americas and Nov 1 in ANZ to keep poe league 3.27 resets on schedule.',
      'Note poe league 3.27 adds ten Bloodline ascendancy classes and Living Grafts so your poe league 3.27 build planners stay accurate.',
      'Flag poe league 3.27 asynchronous trade as pending so your poe league 3.27 economy team coordinates manual swaps.',
      'Clip poe league 3.27 Supporter Pack launch info in case your poe league 3.27 roster wants cosmetics at kickoff.',
    ],
    image: '/images/poe327-hero.webp',
    kicker: 'poe league 3.27 quick hits',
  },
  {
    id: 'updates',
    title: 'Patch Notes & Hotfix Radar',
    desc: 'Review every poe league 3.27 change from launch patch notes to live-service fixes. This poe league 3.27 update log keeps your notes current.',
    kicker: 'poe league 3.27 patch feed',
    lead:
      'Version 3.27.0 shipped on October 31, 2025 with the Keepers Challenge League, ten Bloodline ascendancy classes, Living Grafts, and quality-of-life upgrades like map boss scouting reports. Hotfixes 2 through 7 landed across October 31 to November 2 solving off-hand equips, market browser glitches, Private League breaches, and Breach body part drop rates. This poe league 3.27 patch tracker keeps your calendar pinned to live changes.',
    callouts: [
      'Note poe league 3.27 Hotfix 3 (Oct 31, 5:59 PM PDT) addressing Faustus earnings tabs and four client crashes before your guild pushes Delve.',
      'Flag poe league 3.27 Hotfix 6 (Nov 01, 5:12 PM PDT) for slower Unstable Breach collapse rates and guaranteed Marshal Vruun breach rings.',
      'Act when poe league 3.27 Hotfix 7 (Nov 02, 4:32 PM PST) resolves Delve reward mismatches and Incursion Breach room availability ahead of your next mapping block.',
      'Track poe league 3.27 Hotfix 5 (Nov 01, 1:20 AM PDT) so your poe league 3.27 party avoids Dreamer’s Flame bugs mid-encounter.',
      'Bookmark poe league 3.27 forum notices for Hotfix 4 and async trade adjustments to keep poe league 3.27 stash moves clean.',
    ],
    image: '/images/hero-keepers.jpg',
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
            <span className="pill bg-brand/20 text-brand">poe league 3.27 Keepers of the Flame HQ</span>
            <h1 className="h1 text-balance leading-tight">
              poe league 3.27 Keepers of the Flame launch HQ: poe league 3.27 release timing, async trade, Genesis Tree mastery.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              Immerse yourself in ember-lit concept art while locking in the exact steps your party will take the moment the poe league 3.27 servers
              open.
              The Keepers Challenge League layers escort-style Breach runs, Hive bossing, Genesis Atlas Tree choices, and Order of the Keepers lore,
              so every squad member knows when to stabilise breaches, ignite Dreamer’s Flame walls, and cash in new Bloodline ascendancies.
              This poe league 3.27 walkthrough merges official mechanic rundowns, livestream notes, and in-game tooltips into one digest.
            </p>
            <p className="text-base text-white/75 md:text-lg">
              From atlas pacing to async trading prep, poe327.net stitches official poe league 3.27 previews and community intel into one focused
              dashboard with live coverage of Hotfixes 2–7, Private League remedies, Living Grafts, Foulborn fortune, and ten freshly minted Bloodline
              classes.
              Come back daily for refreshed poe league 3.27 art drops, challenge checklists, and the cues you need to keep the flame roaring.
              Every poe league 3.27 update here links back to the launch patch notes and live forum threads for fast verification.
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
                </div>
              </li>
            ))}
          </ul>
          <p className="max-w-4xl text-sm text-white/70 md:text-base">
            This poe league 3.27 knowledge base links every official post, manifesto, and hotfix log we reference so squads can cite sources when
            planning builds, and it archives poe league 3.27 callouts the moment Grinding Gear Games drops a new announcement.
          </p>
        </div>
      </section>

      <Section
      id="features"
      kicker="poe league 3.27 signature systems"
      title="Breathe in the Keepers of the Flame arsenal"
      desc="Explore poe league 3.27 league-defining mechanics with high-impact art, encounter breakdowns, and clutch talking points for your crew. This poe league 3.27 showcase keeps every core system front and centre."
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
      kicker="poe league 3.27 day-one plan"
      title="Mastery pillars for the first week"
      desc="Anchor your poe league 3.27 rituals with three foundational beats covering campaign flow, atlas planning, and profit checkpoints. This poe league 3.27 starter grid helps squads align their first resets."
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

      {visualSections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          desc={section.desc}
          kicker={section.kicker}
          className="relative"
        >
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-white/80">{section.lead}</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {section.callouts.map((callout) => (
                  <li
                    key={callout}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow-inner shadow-black/30 transition hover:border-brand/50 hover:bg-brand/15"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60 opacity-80" />
                    <span className="relative z-10 block leading-relaxed">{callout}</span>
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
      ))}
    </>
  )
}
