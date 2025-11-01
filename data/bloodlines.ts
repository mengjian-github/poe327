export type Bloodline = {
  name: string
  unlock: string
  focus: string
  status: 'Confirmed' | 'Unconfirmed'
  highlight: string
}

export const bloodlines: Bloodline[] = [
  {
    name: 'Nameless Bloodline',
    unlock: 'Defeat The King in the Mists (Crux of Nothingness)',
    focus: 'Chaos power at a price — trade an amulet, belt, or utility flasks for a third ring and potent curse synergies.',
    status: 'Confirmed',
    highlight: 'Leverages extreme slot trade-offs for raw chaos scaling.',
  },
  {
    name: 'Oshabi Bloodline',
    unlock: 'Defeat Oshabi, Avatar of the Grove (Sacred Grove)',
    focus: 'Empowers Primal beasts: Rage, Elusive, and Unleash themes tie into Ultimatum-style burst windows.',
    status: 'Confirmed',
    highlight: 'Perfect pairing for Wild Bear slam or Wild Thorn hybrid builds.',
  },
  {
    name: 'Chaos Bloodline',
    unlock: 'Survive The Trialmaster (Ultimatum encounter)',
    focus: 'Stacks corrupted gear bonuses, Vaal skill uptime, and defers soul costs for sustained burst.',
    status: 'Confirmed',
    highlight: 'Unlocks “corrupted set” payoffs for SSF Ultimatum farmers.',
  },
  {
    name: 'Aul Bloodline',
    unlock: 'Defeat Aul, the Crystal King (T16 Rare Map)',
    focus: 'Rumoured focus on crystalline defences and Delve synergy; awaiting full reveal.',
    status: 'Unconfirmed',
    highlight: 'Speculated deep-delving option with mine aura scaling.',
  },
  {
    name: 'Lycia Bloodline',
    unlock: 'Defeat Lycia, Herald of the Scourge (Simulacrum T3)',
    focus: 'Likely Scourge/Herald interaction; anticipated to juice damage-over-time builds.',
    status: 'Unconfirmed',
    highlight: 'Watch for herald stacking or corruption retaliation nodes.',
  },
  {
    name: 'Delirium Bloodline',
    unlock: 'Complete the Simulacrum map',
    focus: 'Expected delirium-lens defensive layers with delirium reward scaling.',
    status: 'Unconfirmed',
    highlight: 'Could be the go-to for melee mapping in fog-heavy content.',
  },
  {
    name: 'Olroth Bloodline',
    unlock: 'Defeat Olroth, Origin of the Fall (Kalguur Expedition)',
    focus: 'Expedition currency and runic gating; details pending GGG reveal.',
    status: 'Unconfirmed',
    highlight: 'Potential synergy with logbook economy loops.',
  },
  {
    name: 'Catarina Bloodline',
    unlock: 'Defeat Catarina, Master of Undeath (Tier 17 boss)',
    focus: 'Syndicate-flavoured minion and veiled craft bonuses; official nodes TBA.',
    status: 'Unconfirmed',
    highlight: 'Expect poison or critical scaling for minion commanders.',
  },
  {
    name: 'Chayula Bloodline',
    unlock: 'Defeat Chayula, Who Dreamt (Breachstone domain)',
    focus: 'Breach portal control, stun avoidance, and chaos/temporal power spikes.',
    status: 'Unconfirmed',
    highlight: 'Likely best-in-slot for Breach-focused mapping plans.',
  },
  {
    name: '??? Bloodline',
    unlock: 'TBD endgame boss (rumoured Maven/Elder involvement)',
    focus: 'Final Bloodline unannounced — keep an eye on the reveal stream.',
    status: 'Unconfirmed',
    highlight: 'Prepare to pivot ascendancy points after manifesto drops.',
  },
]
