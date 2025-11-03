import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'

const heroMetrics = [
  { label: 'Launch window', value: 'Oct 31 · 12:00 PM PDT · 7:00 PM GMT' },
  { label: 'Latest hotfix', value: 'Hotfix 7 · Nov 2, 2025 4:32 PM PST · patch notes poe 3.27 stable' },
  { label: 'Bloodline unlocks', value: '10 new secondary ascendancies' },
]

const releaseHighlights = [
  'Hotfix 7 for patch notes poe 3.27 fixes Incursion Breach rooms, Delve reward mismatches, Essence descriptions, PvP joins, and market crashes that surfaced during launch day three.',
  'Hotfix 6 for patch notes poe 3.27 slows early Unstable Breach collapses, guarantees Vruun’s breach ring, restores async market filters, and corrects Nebulis void sceptre rolls.',
  'Seven patch notes poe 3.27 hotfix threads sit across official forums via Stacey_GGG and Kieren_GGG, keeping each escalation bundled with community replies and timestamped follow-ups.',
]

const leagueLoop = [
  'Ailith’s Hive defenses anchor the patch notes poe 3.27 loop: protect her Dreamer’s Flame, collapse Breach Hives, and stabilise Unstable Breaches before they overwhelm the map.',
  'The Genesis Tree inside the Monastery grows custom loot for patch notes poe 3.27 league runners, including Currency clusters, twisted Equipment, and Breach-grown Grafts that graft onto your exile.',
  'Grafts fuse Breach hands to your character, deliver preset active skills, and scale through Augmentation, Regal, Exalted, and Unstable Implants earned from the patch notes poe 3.27 league.',
]

const lootSystems = [
  'New Dexterity gems in patch notes poe 3.27—Conflagration and Thunderstorm—layer aerial arrow barrages with explosions, Thunderburst detonations, and blind fields.',
  'Intelligence wands in patch notes poe 3.27 gain Somatic Shell, Kinetic Fusillade, and Kinetic Rain, pairing with fresh wand bases like Blasting, Kinetic, and Somatic models.',
  'Six Breach ring bases (Cryonic, Enthalpic, Formless, Fugitive, Organic, Synaptic) land alongside twenty uniques and five Divination Cards flagged in the patch notes poe 3.27 launch coverage.',
]

const systemsUpgrades = [
  'Asynchronous trade in patch notes poe 3.27 unlocks via Faustus after Act 6, linking Merchant’s Tabs, the in-game market browser, and Merchant Tab upgrades for Premium stash owners.',
  'Town vendors now identify full inventories without Scrolls of Wisdom, so patch notes poe 3.27 characters see scroll drops shrink sharply once they leave Act 1 shoreline camps.',
  'Spectres roll into floating Orbs on death, Remnants of Corruption become Vaal Orbs for Essences, and stash affinities plus Atlas/passive full refund toggles now accept gold inside patch notes poe 3.27.',
]

const balanceChanges = [
  'Spell Suppression now mitigates 40% of suppressed hit damage in patch notes poe 3.27, while minions inherently hit so legacy Minion Accuracy rolls became flavour-only stats.',
  'Cyclone, Boneshatter, Hexblast, Pyroclast Mine, and Exsanguinate all receive straight numerical buffs in patch notes poe 3.27, whereas Blink/Mirror Arrow clones lose uptime after five-second timers.',
  'Ascendancy reworks target Hierophant, Necromancer, Pathfinder, and Warden, plus ten Bloodline classes that bolt onto existing ascendancies once bosses fall within patch notes poe 3.27.',
]

const resourceCards = [
  {
    title: 'Official GGG Patch Hub',
    description:
      'The Content Update 3.27.0 post threads every system change, from Hive defenses to Ruthless rewards, and remains the canonical ledger for patch notes poe 3.27 followers.',
    footer: 'Pinned Oct 23, 2025 by Stacey_GGG · 531 replies and counting · patch notes poe 3.27 source of record',
  },
  {
    title: 'Launch Day Live Log',
    description:
      'The Keepers of the Flame launch feed chronologically charts patch notes poe 3.27 hotfix deployments, latency investigations, and private league stability reports.',
    footer: 'Runs from Oct 31 12:00 PM PDT go-live through Nov 2 4:32 PM PST Hotfix 7 · patch notes poe 3.27 play-by-play',
  },
  {
    title: 'Community Wiki Digest',
    description:
      'The version 3.27.0 wiki page mirrors the sectioned patch notes poe 3.27 outline—Challenge League, Bloodlines, Atlas Tree, Item changes—with editable callouts for missing data.',
    footer: 'Version history: 3.27.0 shipped Oct 31, 2025 · linked to 3.26.0k prior build · patch notes poe 3.27 cross-check',
  },
]

export const metadata: Metadata = {
  title: 'Patch Notes PoE 3.27 Launch Companion',
  description:
    'Deep Keepers of the Flame coverage with release windows, league mechanics, asynchronous trade upgrades, Bloodline ascendancies, and hotfix trackers.',
  alternates: {
    canonical: 'https://poe327.net/patch-notes-poe-3-27',
  },
  openGraph: {
    title: 'Patch Notes PoE 3.27 Launch Companion',
    description:
      'Keepers of the Flame hub covering release times, Genesis Tree loot, asynchronous trade, bloodline ascendancies, and live hotfix cadence.',
    url: 'https://poe327.net/patch-notes-poe-3-27',
    siteName: 'poe327',
    type: 'article',
    images: [
      {
        url: '/images/keepers-supporter.jpg',
        width: 1200,
        height: 630,
        alt: 'Patch notes poe 3.27 Keepers of the Flame hero art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patch Notes PoE 3.27 Launch Companion',
    description:
      'Stay current on Keepers of the Flame systems—from Hive sieges to asynchronous trading and Bloodline ascendancies—in one compact field guide.',
    images: ['/images/keepers-supporter.jpg'],
  },
}

export default function PatchNotesPage() {
  return (
    <>
      <PageHero
        title="Patch Notes PoE 3.27 Launch Companion"
        description="This patch notes poe 3.27 inner page distills Keepers of the Flame league mechanics, asynchronous trade rollouts, bloodline ascendancy unlocks, and the live hotfix cadence that the official feeds continue to expand, keeping your patch notes poe 3.27 briefings anchored in one place."
        image="/images/keepers-supporter.jpg"
        kicker="Keepers of the Flame"
        metrics={heroMetrics}
      />

      <div className="container flex justify-center">
        <LastUpdated date="November 3, 2025 — sourced from GGG forums, wiki, and launch briefs on patch notes poe 3.27 coverage" />
      </div>

      <Section
        id="release"
        title="Release Windows & Hotfix Cadence"
        desc="The Express launch brief locked in the UK’s 7:00 PM GMT start, while GGG’s live log and forum threads timestamp every patch notes poe 3.27 hotfix from the Oct 31 go-live through the Nov 2 stabilisation wave."
        kicker="Patch notes poe 3.27 timeline"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              With the primary patch notes poe 3.27 deployment hitting October 31 at 12:00 PM PDT on PC and 7:00 PM GMT for UK exiles, teams can pre-stage
              weekend pushes knowing the exact regional cutover. The Express release recap highlighted the same payload of new skill gems, twenty uniques,
              and wand base trios ahead of the servers spinning up. That advance notice gives guild shotcallers room to schedule lab runs, reroll lobbies,
              and backup download mirrors before the login surge stretches gateways. This patch notes poe 3.27 timetable makes it easier to sync console
              migrations and faction start lines without scrambling at launch.
            </p>
            <p>
              GGG’s launch-day live blog keeps the patch notes poe 3.27 audience informed on outages, patcher snags for Windows 7/8 users, and recommended
              workarounds like ctrl+click instance resets. Once the Keepers supporter packs went on sale, the feed tied every server notice back to the patch
              notes poe 3.27 update sprint so squads could pivot their grind windows.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {releaseHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-encounter.jpg"
              alt="Ailith defending the Dreamer’s Flame from Breach hordes"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="league"
        title="Keepers League Loop"
        desc="Maxroll’s breakdown pairs with the official patch ledger to explain how Ailith, the Monastery, and the Genesis Tree reshape the patch notes poe 3.27 gameplay loop."
        kicker="Patch notes poe 3.27 league"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Breachlords invade Mud Flats the moment the patch notes poe 3.27 campaign starts, forcing players to guard Ailith’s channelled Dreamer’s Flame
              while Breach hands tear through the zone. Holding the line long enough triggers cleansing flame detonations that punctuate every early-map hive
              encounter referenced inside the patch notes poe 3.27 dossier, giving squads a predictable rhythm for defensive cooldowns.
            </p>
            <p>
              Progress through the league funnels exiles into the Monastery of the Keepers, where the Genesis Tree mutates loot clusters into currency harvests,
              unique nodes, and graft slots. The patch notes poe 3.27 guide emphasises how repeated Genesis Tree upgrades unlock deeper reward rows while linking league story beats
              to Breachlord counteroffensives, especially once the Genesis Tree branches populate with Breachlord-aligned grafts.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {leagueLoop.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/genesis-tree.jpg"
              alt="Genesis Tree interface in Keepers of the Flame"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="loot"
        title="Loot, Skills & Implants"
        desc="New gems, wand bases, Breach rings, and Foulborn currency make the loot chase in patch notes poe 3.27 as novel as its Hive sieges."
        kicker="Patch notes poe 3.27 rewards"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Four marquee skills headline the patch notes poe 3.27 gem slate: Conflagration and Thunderstorm for bow casters, plus Somatic Shell and Kinetic
              Fusillade for wand specialists. Kinetic Rain joins them as a cascading wand AoE, and the update layers Kinetic, Somatic, and Blasting wand bases
              so gear progression matches the ability surge highlighted in the patch notes poe 3.27 changelog.
            </p>
            <p>
              Foulborn Orbs and Implants extend the crafting pillar, letting patch notes poe 3.27 characters juice both magical gear and graft sockets with higher-level modifier
              odds. League overview sheets call out how each implant tier mirrors classic currency (Augmentation, Regal, Exalted) while giving Graft-specific
              versions to sculpt breach-grown appendages, which keeps the patch notes poe 3.27 loot loop feeling bespoke.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {lootSystems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/graft-equipment.jpg"
              alt="Breach graft equipment rewards"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="systems"
        title="Systems & QoL Upgrades"
        desc="The official 3.27.0 ledger reads like a manifesto of convenience changes, and this patch notes poe 3.27 digest bundles the standouts for fast reference."
        kicker="Patch notes poe 3.27 systems"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Faustus now manages Merchant’s Tabs so patch notes poe 3.27 traders can list items asynchronously, cross-link PoE1 and PoE2 purchases, and leverage
              the native market browser with working socket/link filters. This patch notes poe 3.27 shake-up folds trading and stash upgrades into the same
              interface exile teams already monitor. Atlas and character respecs spend gold instead of regrets when you trigger the new one-click refund buttons
              introduced in this cycle, letting the patch notes poe 3.27 overhaul double as a currency sink rebalancing.
            </p>
            <p>
              Identification services in every town remove Scroll dependency, Spectres persist as invulnerable Orbs between zones, and Vaal Orbs inherit the
              Remnant of Corruption job for Essences. The document also confirms native Apple Silicon support, new stash affinities, and Atlas passive tweaks
              that pivot map rarity and pack-size scaling. Kirac’s daily rotation now leans on gold costs for rerolls, encouraging squads to budget their atlas
              rebuild plans before committing. Meanwhile, Harvest reforges that respect mod locks make high-end crafts less punishing when you chase specific
              influence or slot-tag outcomes, grounding the broader patch notes poe 3.27 quality-of-life push.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {systemsUpgrades.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-async.jpg"
              alt="Async trade interface demonstration"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="balance"
        title="Balance & Build Shifts"
        desc="Cyclone buffs, spell suppression tuning, Bloodline ascendancies, and new Uber fragments headline the balance stack inside the patch notes poe 3.27 packet."
        kicker="Patch notes poe 3.27 balance"
      >
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Bloodline classes, the 10 new secondary ascendancies spotlighted in the patch notes poe 3.27 breakdown, unlock from endgame boss victories and let
              exiles split their ascendancy points between original and Bloodline nodes. Hierophant to Warden passives see individual tune-ups, and Pathfinders
              juggle beefed-up Master Distiller bonuses for each consumed flask category across patch notes poe 3.27 encounters.
            </p>
            <p>
              Endgame rotations lean on Lonely, Reverent, and Traumatic fragments for Uber Invitations, while Tier 17 map modifiers realign pack size, rarity,
              and corruption rules. Spell Suppression’s shift to 40% mitigation, minions auto-hitting, and damage buffs to Hexblast, Pyroclast Mine, and
              Boneshatter all appear in the patch notes poe 3.27 balance grid to signal meta nudges, reinforcing the patch notes poe 3.27 push toward smoother
              defensive scaling.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              {balanceChanges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/keepers-uberboss.jpg"
              alt="Uber boss invitation fight in Tier 17 map"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="resources"
        title="Ongoing Resources"
        desc="Bookmark these official and community feeds so your patch notes poe 3.27 intel stays current through every hotfix and manifesto."
        kicker="Patch notes poe 3.27 links"
      >
        <div className="space-y-5 text-white/80">
          <p>
            Keep a rolling bookmark list so every patch notes poe 3.27 bulletin, manifesto, and hotfix drops straight into your prep flow. Mixing official
            announcements with trusted community mirrors prevents downtime from blinding your squad to urgent patch notes poe 3.27 reversions or stealth changes.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {resourceCards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                className="border border-white/10 bg-white/[0.03]"
              >
                <p>{card.description}</p>
                <p className="text-xs text-white/60">{card.footer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
