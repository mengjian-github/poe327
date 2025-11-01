export type MarketSignal = {
  title: string
  summary: string
  actions: string[]
}

export const marketSignals: MarketSignal[] = [
  {
    title: 'Asynchronous Trade Watch',
    summary:
      'Merchant Tabs and offline buyouts remain PoE2-only. Expect GGG to address PoE1 support post-3.27 launch; prepare alt plans if it slips to 3.28.',
    actions: [
      'Avoid converting Premium Tabs to Merchant Tabs until PoE1 compatibility is confirmed.',
      'Plan for traditional trade whispers during league start; macro scripts remain essential.',
      'Stockpile high-turnover currency (Chaos, Divines) for volatility around trade updates.',
    ],
  },
  {
    title: 'Mercenary System in Core?',
    summary:
      '3.26 Mercenary NPCs were trimmed mid-league; integration into core at full power is unlikely. Expect a toned-down variant or delayed inclusion.',
    actions: [
      'Do not over-invest in Mercenary gear unless manifesto confirms carry-over.',
      'Focus early atlas trees on Breach/Essence synergy instead of Mercenary nodes.',
      'Flip redundant Mercenary uniques before launch to avoid price compression.',
    ],
  },
  {
    title: 'Atlas Reshuffle Signals',
    summary:
      '3.26 Altars, scarab tweaks, and quick-apply currency buttons persist. Jungle Valley, Strand, Beach remain top picks for Breach and Essence loops.',
    actions: [
      'Lock in favoured map compasses before patch day queue spikes prices.',
      'Prepare new atlas trees emphasising Searing Exarch and Bestiary synergy.',
      'Refresh loot filters for Breach Splinters, Foul currency, and graft-only drops.',
    ],
  },
]
