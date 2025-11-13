export type ChallengeEntry = {
  id: number
  title: string
  description?: string
  objectives: string[]
  requirement: string
}

export const challengeEntries: ChallengeEntry[] = [
  {
    "id": 1,
    "title": "Beginner's Basics",
    "objectives": [
      "Use a Scroll of Wisdom",
      "Equip a Magic Flask",
      "Have Equipment in every slot",
      "Defeat an Act Boss"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 2,
    "title": "Otherworldly Obstacles",
    "objectives": [
      "Equip a Graft",
      "Complete a Hiveborn Encounter",
      "Visit the Monastery of the Keepers"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 3,
    "title": "Peddler's Produce I",
    "objectives": [
      "Armourer's Scrap: Vendor any armor with 20% quality, or pieces totaling 40% quality.",
      "Blacksmith's Whetstone: Vendor any weapon with 20% quality, or weapons totaling 40%.",
      "Glassblower's Bauble: Vendor any normal flask with 20% quality, or flasks totaling 40%.",
      "Gemcutter's Prism: Vendor any gem with 20% quality, or gems totaling 40%."
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 4,
    "title": "Act Adversaries I",
    "objectives": [
      "Act 1: Merveil, the Twisted",
      "Act 2: Vaal Oversoul",
      "Act 3: Dominus, Ascendant",
      "Act 4: Malachai, The Nightmare",
      "Act 5: Kitava, the Insatiable"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 5,
    "title": "Regretful Requests",
    "objectives": [
      "A Dirty Job (Act 1: Clear The Fetid Pool)",
      "Fallen from Grace (Act 6: Clear Twilight Strand)",
      "Fastis Fortuna (Act 9: Kill Boulderback in Foothills)",
      "No Love for Old Ghosts (Act 10: Get Elixir of Allure in Ossuary)"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 6,
    "title": "Insidious Invaders",
    "objectives": [
      "Defeat Rare Hiveborn Monsters 50 times",
      "Complete Hive Encounters 10 times",
      "Complete Unstable Breach Encounters 5 times"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 7,
    "title": "Act Adversaries II",
    "objectives": [
      "Act 6: Tsoagoth, The Brine King",
      "Act 7: Arakaali, Spinner of Shadows",
      "Act 8: Lunaris and Solaris",
      "Act 9: The Depraved Trinity",
      "Act 10: Kitava, the Insatiable"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 8,
    "title": "Helpful Hideaways",
    "objectives": [
      "Aspirants' Plaza (from Act 3, ascendancy area)",
      "Menagerie (Einhar, Act 2)",
      "Mine Encampment (Niko, Act 4)",
      "Forbidden Sanctum (Divinia, Act 10)",
      "Kingsmarch (Johan, Epilogue)",
      "Rogue Harbour (use a Rogue's Marker after Act 6)"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 9,
    "title": "Additional Assets",
    "objectives": [
      "Defeat Monsters with Essence (30x)",
      "Open Strongboxes (30x)",
      "Activate Shrines (30x)",
      "Defeat Harbingers (30x)",
      "Defeat Possessed Monsters (30x)",
      "Defeat Rogue Exiles (30x)",
      "Defeat Rare Beyond Monsters (30x)"
    ],
    "description": "",
    "requirement": "At least 3"
  },
  {
    "id": 10,
    "title": "Core Campaigns",
    "objectives": [
      "Complete Abysses (30x)",
      "Complete Expeditions (30x)",
      "Harvest Plots (100x)",
      "Complete Legion Encounters (30x)",
      "Open Smuggler's Caches (30x)",
      "Pass through Mirrors of Delirium (30x)",
      "Complete Ultimatum Waves (200x)",
      "Complete Blights (30x)",
      "Complete Rituals (100x)",
      "Complete Ore Deposit Encounters (30x)"
    ],
    "description": "",
    "requirement": "At least 5"
  },
  {
    "id": 11,
    "title": "Mighty Missions",
    "objectives": [
      "Complete Niko Missions (30x)",
      "Complete Einhar Missions (30x)",
      "Complete Jun Missions (30x)",
      "Complete Alva Missions (30x)"
    ],
    "description": "",
    "requirement": "At least 2"
  },
  {
    "id": 12,
    "title": "Generous Gifts",
    "objectives": [
      "Grow Ancient Wombgift (10x)",
      "Grow Growing Wombgift (10x)",
      "Grow Lavish Wombgift (10x)",
      "Grow Provisioning Wombgift (10x)",
      "Grow Mysterious Wombgift (10x)"
    ],
    "description": "",
    "requirement": "All Items must be level 78+ to count"
  },
  {
    "id": 13,
    "title": "Parallel Pathing",
    "description": "Unlock all three Atlas Passive Trees.",
    "objectives": [
      "Unlock the left Atlas Passive Tree",
      "Unlock the center Atlas Passive Tree",
      "Unlock the right Atlas Passive Tree"
    ],
    "requirement": "3 required"
  },
  {
    "id": 14,
    "title": "Cunning Crafts",
    "objectives": [
      "Use Orb of Transmutation",
      "Use Orb of Augmentation",
      "Use Orb of Alteration",
      "Use Orb of Chance",
      "Use Orb of Alchemy",
      "Use Orb of Scouring",
      "Use Orb of Fusing",
      "Use Jeweller's Orb",
      "Use Chromatic Orb",
      "Use Orb of Annulment",
      "Use Regal Orb",
      "Use Chaos Orb",
      "Use Exalted Orb",
      "Use Blessed Orb",
      "Use Divine Orb"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 15,
    "title": "Potent Pantheons",
    "objectives": [],
    "description": "Fully upgrade one Major and three Minor Pantheon powers.",
    "requirement": "All"
  },
  {
    "id": 16,
    "title": "Legendary Leagues",
    "objectives": [
      "Abyssal Depths (5x)",
      "Logbooks with 10+ Remnants (5x)",
      "Tier 4 Harvest Seeds (5x)",
      "Domains of Timeless Conflict with 25+ rewards (3x)",
      "Blueprints with 4 revealed wings (5x)",
      "Simulacrum Waves (60x)",
      "Fully Completed Ultimatums (10x)",
      "Blighted or Blight Ravaged Maps (5x)",
      "All Rituals in Maps with Blood-filled Vessel (20x)",
      "Claim rewards from Rare Maps completed by Atlas Runners (30x)"
    ],
    "description": "",
    "requirement": "At least 4 Objectives must be done in level 81+ Areas"
  },
  {
    "id": 17,
    "title": "Revolting Roots",
    "objectives": [
      "Gifts for the Genesis Tree",
      "Fertilising the Genesis Tree"
    ],
    "description": "Fully upgrade the Genesis Tree by completing:",
    "requirement": "All"
  },
  {
    "id": 18,
    "title": "Achieve Ascension",
    "objectives": [],
    "description": "Use the Ascendancy Device in Normal, Cruel, Merciless, and Eternal LabyrinthsGain a Bloodline Class",
    "requirement": "All"
  },
  {
    "id": 19,
    "title": "Telling Tarot",
    "objectives": [
      "Open Diviners Strongboxes (3x)",
      "Complete Red or Purple Tier Rare Maps with Divination Card Scarabs (20x)",
      "Turn in sets of Divination Cards that reward Currency (30x)",
      "Scry a Map"
    ],
    "description": "",
    "requirement": "At least 3"
  },
  {
    "id": 20,
    "title": "Peddler's Produce II",
    "objectives": [
      "Cartographer's Chisel (20% quality map OR maps totaling 40% quality OR 20% quality Gavel + any map)",
      "Chaos Orb (full set of rare gear, ilvl 60–74)",
      "Regal Orb (three rare items with same name at 20% quality OR full rare set, ilvl 75+)",
      "Exalted Shard (full rare set with matching influence)"
    ],
    "description": "Complete vendor recipes to receive:",
    "requirement": "All"
  },
  {
    "id": 21,
    "title": "Aggravating Antagonists",
    "objectives": [
      "Defeat Uber Atziri",
      "Defeat Izaro (special Offering)",
      "Defeat Abyssal Lich",
      "Defeat Omnitect",
      "Defeat Vox Twins",
      "Defeat K'tash, Ghorr, or Beidat",
      "Defeat Medved, Vorana, or Uhtred",
      "Defeat The Black Knight, Admiral",
      "Valerius, or Sasan"
    ],
    "description": "",
    "requirement": "At least Six Defeat any of the bosses at level 80+"
  },
  {
    "id": 22,
    "title": "Grotesque Gains",
    "objectives": [
      "Use Augmentation Implant (4x)",
      "Use Regal Implant (3x)",
      "Use Exalted Implant (2x)",
      "Use Unstable Implant (1x)",
      "Use Foulborn Orb of Augmentation (3x)",
      "Use Foulborn Regal Orb (2x)",
      "Use Foulborn Exalted Orb (1x)"
    ],
    "description": "",
    "requirement": "At least Five"
  },
  {
    "id": 23,
    "title": "Remarkable Realms",
    "objectives": [],
    "description": "Complete Full list of 20+ unique maps, including Vaults of Atziri, Poorjoy’s Asylum, Doryani’s Machinarium, etc.",
    "requirement": "All"
  },
  {
    "id": 24,
    "title": "Bijou Beetles",
    "objectives": [
      "One Scarab (50x)",
      "Two Scarabs (40x)",
      "Three Scarabs (30x)",
      "Four Scarabs (20x)",
      "Five Scarabs (10x)"
    ],
    "description": "Complete Red or Purple Tier Rare Maps at 70%+ Item Quantity with:",
    "requirement": "All"
  },
  {
    "id": 25,
    "title": "Trusted Thaumaturgy",
    "objectives": [
      "Have at least 25 Gems socketed in your equipped gear",
      "Turn in a card set that rewards a Level 21 or 23% Quality Gem",
      "Apply six or more Support Gem effects to a socketed Skill Gem at once",
      "Level an Awakened Gem to level 5"
    ],
    "description": "",
    "requirement": "At least 3"
  },
  {
    "id": 26,
    "title": "Cross Contamination",
    "objectives": [
      "Open a Smuggler's Cache while affected by a Shrine",
      "Defeat a Rogue Exile that is Possessed three times",
      "Defeat a Beyond Boss while Delirious",
      "Complete an Ore Deposit while affected by a Tempest",
      "Capture a Beast holding an Essence",
      "Defeat a Unique Map Boss that is Possessed while in a Ritual"
    ],
    "description": "",
    "requirement": "At least 4"
  },
  {
    "id": 27,
    "title": "Gruesome Grafts",
    "objectives": [],
    "description": "Equip any 12 of the Grafts (ilvl 78+, 4 mods)",
    "requirement": "At least 12"
  },
  {
    "id": 28,
    "title": "Bloodline Boons",
    "objectives": [
      "Defeat The Trialmaster",
      "Defeat The King in the Mists",
      "Defeat Oshabi",
      "Defeat Catarina",
      "Defeat Aul",
      "Defeat Olroth",
      "Defeat Lycia",
      "Defeat Farrul",
      "Defeat Simulacrum (all 15 waves)",
      "Defeat It That Was Tul and It That Was Esh"
    ],
    "description": "",
    "requirement": "At least 7"
  },
  {
    "id": 29,
    "title": "Atlas Awe",
    "objectives": [
      "Tier 16+ map",
      "Elder Guardian",
      "Shaper Guardian",
      "Conqueror of the Atlas",
      "Sirus, Awakener of Worlds",
      "Cortex",
      "The Shaper",
      "Uber Elder",
      "The Maven",
      "The Eater of Worlds",
      "Maven Invitation: The Feared"
    ],
    "description": "Defeat specific bosses or complete objectives to unlock each Favoured Map Slot from the following:",
    "requirement": "12 required"
  },
  {
    "id": 30,
    "title": "Quantity Quandary",
    "objectives": [],
    "description": "Complete Maps with a total of 50,000% Item Quantity from all modifiers (excluding party bonuses)",
    "requirement": "All"
  },
  {
    "id": 31,
    "title": "Originator's Oath",
    "objectives": [],
    "description": "Complete rare Originator-influenced maps with a total of 200 explicit modifiers.",
    "requirement": "All"
  },
  {
    "id": 32,
    "title": "Sinew Swarms",
    "objectives": [
      "Hive Encounter (60x)",
      "Unstable Breach Encounter (60x)",
      "Hive Fortress or Hive Colony Encounter (10x)"
    ],
    "description": "",
    "requirement": "Complete in level 81+ areas"
  },
  {
    "id": 33,
    "title": "Keystone Keepers",
    "objectives": [
      "Complete Searing Exarch Altars with Wrath of the Cosmos (100x)",
      "Complete Eater of Worlds Altars with Eldritch Gaze (100x)",
      "Complete Witnessed Map Bosses with Destructive Play (150x)"
    ],
    "description": "",
    "requirement": "All"
  },
  {
    "id": 34,
    "title": "Expensive Extravagance",
    "objectives": [
      "Awakener's Orb",
      "Blight Oil (10x)",
      "Catalyst (40x)",
      "Corrupted Essence (4x)",
      "Eldritch Exalted, Annulment or Chaos Orb",
      "Exceptional Eldritch Ichor or Ember",
      "Fracturing Orb",
      "Hinekora's Lock",
      "Influenced Exalted Orb",
      "Mirror of Kalandra",
      "Orb of Dominance",
      "Orb of Remembrance, Unravelling or Intention",
      "Reflecting Mist",
      "Runegraft",
      "Sacred Crystallised Lifeforce",
      "Sacred Orb",
      "Tainted Currency (10x)",
      "Tattoo",
      "Tempering or Tailoring Orb",
      "Veiled Exalted or Chaos Orb"
    ],
    "description": "Use any 15 of the following types of crafting Currency the specified number of times.",
    "requirement": "At least 15"
  },
  {
    "id": 35,
    "title": "Cruel Challenges",
    "objectives": [
      "Screaming",
      "Incandescent",
      "The Elderslayers",
      "The Feared",
      "The Forgotten",
      "The Formed",
      "The Remembered",
      "The Twisted"
    ],
    "description": "",
    "requirement": "Complete with at least 70% Item Quantity"
  },
  {
    "id": 36,
    "title": "Inconceivable Incarnations",
    "objectives": [
      "Defeat Incarnation of Dread",
      "Defeat Incarnation of Fear",
      "Defeat Incarnation of Neglect"
    ],
    "description": "",
    "requirement": "At least 2 at level 85 areas"
  },
  {
    "id": 37,
    "title": "Bolstered Breachlords",
    "objectives": [
      "Without being affected by Boiling Blood",
      "Without being hit by any Breachlord Orb Explosions",
      "Without being hit by Rolling Lightning Nova",
      "Without being hit by Tentacle Barrage"
    ],
    "description": "Defeat Hiveborn Bosses in any three of these ways:",
    "requirement": "At least 3"
  },
  {
    "id": 38,
    "title": "Juiced Jamboree",
    "objectives": [
      "Abomination Map",
      "Citadel Map",
      "Fortress Map",
      "Sanctuary Map",
      "Ziggurat Map",
      "Courtyard of Wasting",
      "Chambers of Impurity",
      "Theatre of Lies"
    ],
    "description": "",
    "requirement": "At least 6 with at least 175% Item Quantity and 5 Scarabs applied"
  },
  {
    "id": 39,
    "title": "Oppressive Opponents",
    "objectives": [
      "Sirus, Awakener of Worlds in Eye of the Storm",
      "The Elder in The Shaper's Realm",
      "The Maven in Absence of Mercy and Empathy",
      "The Searing Exarch in Absence of Patience and Wisdom",
      "The Eater of Worlds in Absence of Symmetry and Harmony",
      "High Templar Venarius in Cortex",
      "The Shaper in The Shaper's Realm"
    ],
    "description": "",
    "requirement": "At least 4 at level 85 areas"
  },
  {
    "id": 40,
    "title": "Grueling Game Grinds",
    "objectives": [
      "Reach Level 100",
      "Defeat Argus in Endgame Labyrinth (100x)",
      "Defeat Pinnacle Bosses (75x)",
      "Complete 1,000 explicit modifiers in Tier 14+ maps",
      "Complete 100 invitation explicit modifiers",
      "Grow Wombgifts (ilvl 81+, 100x)"
    ],
    "description": "",
    "requirement": "At least 4"
  }
]

export type ChallengeRewardTrack = {
  mode: 'League' | 'Ruthless'
  summary: string
  steps: {
    threshold: number
    reward: string
    note: string
  }[]
}

export const challengeRewardTracks: ChallengeRewardTrack[] = [
  {
    mode: 'League',
    summary: 'Standard Keepers ladder – expect the helmet by the mid-30s after red-map Atlas routing.',
    steps: [
      { threshold: 12, reward: 'Keeper of the Flame Boots', note: 'Finish the Acts + starter Hive quests.' },
      { threshold: 20, reward: 'Keeper of the Flame Gloves', note: 'Finish early Atlas unlocks before yellow maps.' },
      { threshold: 28, reward: 'Keeper of the Flame Body Armour', note: 'Complete Atlas sustain and graft buckets.' },
      { threshold: 36, reward: 'Keeper of the Flame Helmet', note: 'Full cosmetic set without farming the last four.' },
    ],
  },
  {
    mode: 'Ruthless',
    summary: 'Ruthless trims the challenge requirements; full set arrives after eight completions.',
    steps: [
      { threshold: 2, reward: 'Keeper of the Flame Boots', note: 'Intro Hive quests and early missions.' },
      { threshold: 4, reward: 'Keeper of the Flame Gloves', note: 'Basic Atlas or crafting objectives.' },
      { threshold: 6, reward: 'Keeper of the Flame Body Armour', note: 'Maps with a few targeted mechanics.' },
      { threshold: 8, reward: 'Keeper of the Flame Helmet', note: 'Requires the same pinnacle bosses but far fewer clears.' },
    ],
  },
]

export type ChallengeBucket = {
  id: string
  title: string
  description: string
  focus: string[]
  payoff: string
  challengeIds: number[]
}

export const challengeBuckets: ChallengeBucket[] = [
  {
    id: 'campaign',
    title: 'Campaign & Hive Onboarding',
    description: 'Acts 1–10, early Hive encounters, vendor recipes, and league mechanic unlocks that can be banked on the first day.',
    focus: ['Acts 1-10 bosses', 'Vendor recipes', 'Hive introductions'],
    payoff: 'Completing this bucket unlocks the boots + gloves milestones for most squads.',
    challengeIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: 'atlas-unlock',
    title: 'Atlas Unlocks & Core Systems',
    description: 'Introduce Atlas passive trees, pantheons, ascendancy finals, tarot cards, and higher-tier vendor crafts.',
    focus: ['Atlas passive gates', 'Ascendancy lab', 'Genesis tree quests'],
    payoff: 'Carries you through 20+ completions before yellow maps run out of juice.',
    challengeIds: [13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    id: 'atlas-specialists',
    title: 'Atlas Specialists & Side Content',
    description: 'Targeted Atlas missions, logbooks, synth maps, breach/beetle stacks, and cross-mechanic combos.',
    focus: ['Kirac/Atlas missions', 'Map device combos', 'Breach & Heist content'],
    payoff: 'Pushes completions into the high 20s while diversifying mapping content.',
    challengeIds: [21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 'atlas-sustain',
    title: 'Atlas Sustain & Hive Pressure',
    description: 'Bloodline ascendancies, Atlas slot unlocks, item-quantity pushes, Originator modifiers, and heavy Hive requirements.',
    focus: ['Bloodline ascendancies', 'Map quantity stacking', 'Hive fortresses'],
    payoff: 'Delivers the body armour + helmet thresholds with consistent red-map play.',
    challengeIds: [28, 29, 30, 31, 32, 33, 34],
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle Boss & Grind Gauntlet',
    description: 'Aspirational invitations, juiced breachlords, uber bosses, and level 100 / 1,000-modifiers grinds.',
    focus: ['Uber invitations', 'Pinnacle bosses', 'Endgame lab + XP pushes'],
    payoff: 'Optional closer: clean up remaining challenges for 40/40 bragging rights.',
    challengeIds: [35, 36, 37, 38, 39, 40],
  },
]

export const hiveCentricChallengeIds = [2, 6, 12, 17, 27, 28, 32] as const
