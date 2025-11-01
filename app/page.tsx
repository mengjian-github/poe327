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
    title: 'Release weekend checklist',
    description:
      'Plot the poe 3.27 Oct 31 (Americas) and Nov 1 (ANZ) launch windows plus the eight-day reveal livestream so your roster locks patches and party roles without scrambling.',
  },
  {
    title: 'Async trade prep queue',
    description:
      'Keep poe 3.27 stash operations clean by planning around Merchant Tabs staying PoE 2-only until GGG flips the async trade switch, and stage bulk buyouts before patch night. This poe 3.27 async trade plan keeps your economy flowing on day one.',
  },
  {
    title: 'Genesis Tree sprint',
    description:
      'Build a poe 3.27 Genesis Tree sprint that earmarks Hive Defense drops, graft slots, and Foul currency branches so your team slots mutations before dawn.',
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
    body: `Kick off poe 3.27 by rehearsing the October 31 release ladder: drill Breach escort routes so Ailith survives Hive Defense objectives, stash movement flasks, and pre-level gems ahead of the reveal manifesto eight days out. Maintain a poe 3.27 notebook that tracks which acts feed Graftblood fastest so the Genesis Tree unlocks before Act 10 falls.`,
    image: '/images/keepers-encounter.jpg',
  },
  {
    title: 'Atlas progression',
    body: `Shape your poe 3.27 atlas around Bloodline unlocks: plan routes for Trialmaster, Oshabi, and Catarina so your main ascendancy can share points with the new Bloodline tree. Anchor early stones on yellow-tier sustain, then pivot into Breach Hives hunting Marshal Vruun once sextants cooperate. Journal poe 3.27 map rotations and boss attempts so Tier 17 pushes land with intent.`,
    image: '/images/genesis-tree.jpg',
  },
  {
    title: 'Sustainable profit',
    body: `Treat poe 3.27 farming as nightly audits: compare Foul Exalted growth from the Genesis Tree to async trade speculation, log Merchant Tab flips separately in case support lands mid-league, and keep Expedition or Delve pivots staged if Hive raids dip. Document poe 3.27 profit swings against manifesto nerfs so you reallocate before the economy cools.`,
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
    desc: 'Lock poe 3.27 release windows and livestream checkpoints before building your night-one itinerary.',
    lead:
      'poe 3.27 Keepers of the Flame lands on October 31, 2025 for the Americas with an ANZ rollover on November 1, and the reveal livestream hits eight days prior. Use this briefing to plot patch preloads, wrap Mercenaries of Trarthus objectives, and script your crew’s watch party while the hype surges.',
    callouts: [
      'Run a poe 3.27 rehearsal the weekend before launch to finish Mercenaries of Trarthus challenges ahead of the late-October shutdown.',
      'Set reminders for the October 23, 2025 poe 3.27 reveal livestream so you pivot builds as soon as the balance manifesto lands.',
      'Coordinate poe 3.27 pre-download windows around the Oct 30 patch deployment to keep every role online when servers unlock.',
    ],
    image: '/images/keepers-async.jpg',
  },
  {
    id: 'leveling',
    title: 'Breach Leveling & Graft Unlocks',
    desc: 'Anchor your poe 3.27 leveling route around Hive Defense beats and early Genesis Tree growth.',
    lead:
      'The reimagined Breach loop pushes you to safeguard Ailith, stabilize breaches, and bank Graftblood even before maps. Folding those beats into your poe 3.27 leveling splits powers the Genesis Tree the moment Act 10 falls and primes Marshal Vruun scouting once you touch red maps.',
    callouts: [
      'Scrimmage poe 3.27 Hive Defense positioning so channel phases survive without burning defensive flasks.',
      'Slot poe 3.27 Graftblood alert cues in your loot filter to spot the currency that feeds the Genesis Tree.',
      'Route optional bosses that unlock new poe 3.27 gems like Wall of Force, Thunderstorm, and Conflagration teased in the reveal.',
    ],
    image: '/images/keepers-kineticrain.jpg',
  },
  {
    id: 'economy',
    title: 'Economy Plays and Trading Rhythm',
    desc: 'Keep your poe 3.27 coffers glowing while async trade policies settle.',
    lead:
      'GGG has Merchant Tabs live in Path of Exile 2 but not yet in poe 3.27, so expect speculation around asynchronous buyouts alongside Genesis Tree crafting booms. Track those shifts nightly to ride demand spikes without overcommitting.',
    callouts: [
      'Keep Merchant Tabs in PoE 2 until support hits poe 3.27 to avoid losing stash access mid-league.',
      'Flip early poe 3.27 Foulborn bases and Foul currency before the wider market understands their weighting.',
      'Log poe 3.27 chaos-per-hour targets versus async trade whispers so you know when to pivot into Expedition or Delve.',
    ],
    image: '/images/keepers-oshabi.jpg',
  },
  {
    id: 'endgame',
    title: 'Endgame Mastery and Bloodline Hunts',
    desc: 'Treat poe 3.27 endgame like a curated rotation of Bloodline unlocks and hive raids.',
    lead:
      'Bloodline ascendancies tie to bosses like Trialmaster, Oshabi, and Catarina, while Hive gates escalate toward Marshal Vruun and the new Tier 17 arenas. Mapping your poe 3.27 playlist keeps the spectacle high and ensures every build taps the latest power spikes.',
    callouts: [
      'Slot poe 3.27 boss-focused nights to unlock Bloodlines such as Chaos (Trialmaster) and Oshabi before diving into Tier 17.',
      'Rotate poe 3.27 Breach Hives, elder guardians, and uber invitations to keep loot tables fresh.',
      'Pair poe 3.27 graft swaps with Bloodline respeccing so every session tests a new synergy.',
    ],
    image: '/images/keepers-uberboss.jpg',
  },
  {
    id: 'community',
    title: 'Community Support and Continuous Updates',
    desc: 'Stay plugged into poe 3.27 intel drops and collaborative hype loops.',
    lead:
      'The poe327 inbox packages poe 3.27 reveal recaps, balance manifestos, and economic alerts so you never miss a shift. Send your own notes to shape the dashboards as the league evolves.',
    callouts: [
      'Send launch feedback to support@poe327.net with “poe 3.27” in the subject for priority triage.',
      'Expect editorial poe 3.27 bundles tying livestream headlines to actionable farming pivots within hours.',
      'Watch for rolling poe 3.27 design refreshes that add interactive pathing charts, Bloodline trackers, and profit snapshots.',
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
            <span className="pill bg-brand/20 text-brand">poe 3.27 Keepers of the Flame HQ</span>
            <h1 className="h1 text-balance leading-tight">
              poe 3.27 Keepers of the Flame launch HQ: release timing, async trade, Genesis Tree mastery.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              Immerse yourself in ember-lit concept art while locking in the exact steps your party will take the moment the poe 3.27 servers
              open.
              Every panel on this page balances spectacle with practical mastery so your first poe 3.27 weekend feels like a highlight reel
              instead of a spreadsheet.
            </p>
            <p className="text-base text-white/75 md:text-lg">
              From atlas pacing to async trading prep, poe327.net stitches official poe 3.27 previews and community intel into one focused
              dashboard.
              Come back daily for refreshed poe 3.27 art drops, farming blueprints, and the cues you need to keep the flame roaring.
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
              Enter the feature hub
            </a>
            <LastUpdated date="2025-11-01" className="mx-auto sm:ml-auto sm:mr-0" />
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
        </div>
      </section>

      <Section
        id="features"
        kicker="Signature systems"
        title="Breathe in the Keepers of the Flame arsenal"
        desc="Explore poe 3.27 league-defining mechanics with high-impact art, encounter breakdowns, and clutch talking points for your crew."
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
        title="Mastery pillars for the first week"
        desc="Anchor your poe 3.27 rituals with three foundational beats covering campaign flow, atlas planning, and profit checkpoints."
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
