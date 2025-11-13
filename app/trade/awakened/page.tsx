import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/page-hero'
import { Card, LastUpdated, Section } from '@/components/ui'
import type { AwakenedRelease } from '@/lib/awakened-release'
import { getAwakenedRelease } from '@/lib/awakened-release'

const GITHUB_RELEASE_BASE = 'https://github.com/SnosMe/awakened-poe-trade/releases/download'

const buildHeroMetrics = (version: string) => [
  { label: 'Latest version', value: `Awakened PoE Trade v${version}` },
  { label: 'Platforms', value: 'Windows installer & portable · Linux AppImage · macOS dmg' },
  { label: 'Docs mirrored', value: 'Download · Quick Start · Chat commands · OCR guide · FAQ' },
]

const buildDownloadMatrix = ({ version, tag }: AwakenedRelease) => [
  {
    label: 'Windows 10+ (installer)',
    url: `${GITHUB_RELEASE_BASE}/${tag}/Awakened-PoE-Trade-Setup-${version}.exe`,
    autoUpdate: '✔',
    startup: 'Fast',
    note: 'Installs the auto-updater and matches the official "Download" table. Use this unless you need a portable exe.',
  },
  {
    label: 'Windows 10+ (portable)',
    url: `${GITHUB_RELEASE_BASE}/${tag}/Awakened-PoE-Trade-${version}.exe`,
    autoUpdate: '❌',
    startup: 'Slower cold boot',
    note: 'Keep the folder wherever you want. Updates require re-downloading a newer portable build.',
  },
  {
    label: 'Linux (AppImage)',
    url: `${GITHUB_RELEASE_BASE}/${tag}/Awakened-PoE-Trade-${version}.AppImage`,
    autoUpdate: '✔',
    startup: 'n/a',
    note: 'Mark as executable (chmod +x) and run. No Wine shim needed for OCR calibration.',
  },
  {
    label: 'macOS (universal dmg)',
    url: `${GITHUB_RELEASE_BASE}/${tag}/Awakened-PoE-Trade-${version}-universal.dmg`,
    autoUpdate: '❌',
    startup: 'n/a',
    note: 'Unsigned build: allow it through System Settings → Privacy & Security → Open Anyway.',
  },
]

const requirementCards = [
  {
    title: 'Display mode requirements',
    supported: ['Windowed Fullscreen', 'Windowed'],
    blocked: ['Fullscreen'],
    detail: 'Stick to borderless/windowed so the capture wizard can map your PoE client 1:1.',
  },
  {
    title: 'Supported client languages',
    supported: ['English', 'Russian'],
    blocked: ['Portuguese', 'Thai', 'French', 'German', 'Spanish', 'Korean'],
    detail: 'Only English + Russian copies the correct item text to clipboard. Other languages break OCR and parsing.',
  },
  {
    title: 'Permissions & environments',
    detail:
      'Awakened PoE Trade does not need Admin rights, but it must match PoE if you launch the game as Admin. Cloud gaming solutions such as GeForce Now block clipboard access and are not supported.',
  },
]

const setupChecklist = [
  {
    name: 'Download from the official GitHub release',
    text: 'Grab the installer, portable exe, AppImage, or dmg directly from the release table above. Any other mirror is unverified by the developer.',
  },
  {
    name: 'Prep your Path of Exile client',
    text: 'Switch to Windowed Fullscreen or Windowed, keep display scale at 100%, and launch the game before opening Awakened PoE Trade.',
  },
  {
    name: 'Complete the first-time wizard',
    text: 'The wizard calibrates OCR, confirms your monitor bounds, and lets you pick the price-check hotkey before the overlay loads.',
  },
  {
    name: 'Match privileges & clipboard access',
    text: 'If whispers fail to copy, relaunch the tool as Administrator (only when PoE also runs as Admin) so clipboard hooks stay reliable.',
  },
]

const quickStartPrinciples = [
  'Every action begins with Ctrl + C. PoE copies the hovered item text to your clipboard, which Awakened PoE Trade formats for you.',
  'The overlay does not magically know the right price—tick the stats that actually matter for your build, including pseudo stats that group similar mods.',
  'Use the auto-filled min/max ranges as a baseline, then tighten them for perfect rolls or broaden them for cheaper comps.',
  'Hold CTRL if you want the price window to stay open; once your cursor is inside the overlay you can release the key and continue editing filters.',
]

const quickStartInsights = [
  {
    title: 'Understand the clipboard loop',
    body:
      'Pressing Ctrl + C over an item copies its raw text. Awakened PoE Trade simply parses that text and renders a nicer UI so you stay in fullscreen.',
  },
  {
    title: 'Pseudo stats keep things tidy',
    body:
      'Multiple similar modifiers are grouped into a single pseudo stat (e.g., spell damage on a wand). Pick the pseudo stat when it represents what buyers care about most.',
  },
  {
    title: 'Range suggestions are just a start',
    body:
      'Each checkbox shows a suggested min–max range that is slightly below your actual roll. Dial it back up when selling perfectly rolled T1 mods.',
  },
  {
    title: 'Knowledge still matters',
    body:
      'Choosing the right stats comes from playing different archetypes. The app highlights data, but you decide which affixes make the listing valuable.',
  },
]

const defaultHotkeys = [
  {
    feature: 'Instant price check (auto-hide)',
    combo: 'Ctrl + D',
    detail: 'Opens the pricing window, then hides it when the cursor leaves—unless you keep holding Ctrl.',
    source: 'Official Quick Start',
  },
  {
    feature: 'Pinned price check window',
    combo: 'Ctrl + Alt + D',
    detail: 'Keeps the pricing window visible until you dismiss it, ideal for editing multiple filters.',
    source: 'Official Quick Start',
  },
  {
    feature: 'Open PoE Wiki',
    combo: 'Alt + W',
    detail: 'Launches the selected item on the official wiki for deeper context.',
    source: 'Official Quick Start',
  },
  {
    feature: 'Overlay widgets + settings',
    combo: 'Shift + Space',
    detail: 'Shows the widget dock and the gear icon where you change leagues, logs, OCR, and more.',
    source: 'Official Quick Start',
  },
  {
    feature: 'Hideout recall',
    combo: 'F5',
    detail: 'Sends the /hideout command immediately via the built-in chat macro.',
    source: 'Official Chat Commands',
  },
  {
    feature: 'Return to character select',
    combo: 'F9',
    detail: 'Executes /exit so you can swap characters without alt-tabbing.',
    source: 'Official Chat Commands',
  },
  {
    feature: 'Scroll stash tabs',
    combo: 'Ctrl + Mouse Wheel',
    detail: 'Cycle through stash tabs after disabling "Mousewheel Zoom" in PoE’s UI options.',
    source: 'Official Quick Start',
  },
]

const settingTips = [
  'Open the overlay (Shift + Space) and click the cog icon to swap leagues, adjust hotkeys, or see every widget in one place.',
  'Settings → Debug exposes live logs so you can copy errors verbatim when troubleshooting.',
  'Turn off Mousewheel Zoom under Options → UI if you want Ctrl + Mouse Wheel to focus on stash tabs instead of your character.',
  'If the overlay is offset, confirm Windows display scale is 100% and rerun the capture wizard from the tray icon.',
]

const priceInsights = [
  {
    title: 'Price window anatomy',
    body:
      'Hover the item screenshot and you see the right-side pricing window. Each affix checkbox mirrors what the official trade site expects.',
  },
  {
    title: 'Manual filter responsibility',
    body:
      'Tiers, corruptions, and implicits must be toggled on by you. Select the stats that synergize with the build you are targeting.',
  },
  {
    title: 'Pseudo stats & numeric ladders',
    body:
      'Grouped stats keep the UI shorter. Use the numeric sliders shown beside each filter to tighten or loosen the comparable listings.',
  },
]

const priceFlow = [
  {
    title: 'Basic price check',
    body:
      'Copy the item (Ctrl + C), press Ctrl + D, and read the median price at the top of the window. Compare listings instead of trusting outliers.',
  },
  {
    title: 'Refine rares & uniques',
    body:
      'Toggle only the premium affixes, click Search after each edit, and watch how the comparable pool shrinks to the closest matches.',
  },
  {
    title: 'Currency ratios & whispers',
    body:
      'Use the currency converter embedded in the window, then copy the cleanest whisper to contact sellers without leaving fullscreen.',
  },
]

const advancedFeatures = [
  {
    title: 'Overlay cheat sheets',
    detail:
      'Shift + Space opens reference cards for Syndicate, Temple rooms, Delve biomes, and more—perfect for league mechanics mid-map.',
  },
  {
    title: 'Dump sorting',
    detail:
      'Run stash searches that isolate currency, bases, or divination cards, then drag results into organized sale tabs.',
  },
  {
    title: 'Delve grid helper',
    detail:
      'Ctrl + G adds a 3×3 overlay grid to Delve, nudging you toward fractured walls and side rooms.',
  },
  {
    title: 'Chat macros',
    detail:
      'Bind F-keys to polite invites, thank-yous, or /kick commands so every response is a single tap.',
  },
]

const chatAutomations = [
  {
    title: '@last as a prefix',
    body:
      'Start a message with @last to whisper the most recent trade partner automatically. Example: "@last Good luck!" becomes "@UltraSkillPlayer Good luck!"',
  },
  {
    title: '@last as a suffix',
    body:
      'Finish a command with @last and it substitutes the last name. Example: "/invite @last" sends "/invite UltraSkillPlayer".',
  },
]

const chatFaq = [
  {
    question: 'How do I see the text that was actually sent?',
    answer: 'Press Enter to open chat, then tap Arrow Up twice to review the last macro output.',
  },
  {
    question: 'How do I leave my own party?',
    answer: 'Use /kick MyCharacterName and remember to update the name whenever you reroll.',
  },
  {
    question: 'Can I chain multiple chat commands on one hotkey?',
    answer: 'No. Chaining commands is against the Path of Exile Terms of Service; keep it one server action per key press.',
  },
]

const ocrSetupSteps = [
  {
    title: 'Download cv-ocr.zip',
    body: 'Grab the 6 MB archive from the official release (v3.20.10007) that contains the trained OCR files.',
  },
  {
    title: 'Open your configuration folder',
    body: 'Use the Settings gear → Debug shortcut to open %appdata%/awakened-poe-trade/apt-data.',
  },
  {
    title: 'Extract the cv-ocr folder beside config.json',
    body: 'You should end up with apt-data/config.json next to apt-data/cv-ocr/eng.traineddata and other WASM assets.',
  },
  {
    title: 'Restart the overlay',
    body: 'Close Awakened PoE Trade completely before launching it again so the new OCR bundle loads.',
  },
]

const ocrWidgetSteps = [
  {
    title: 'Place the OCR widget',
    body: 'Open the widget dock near the Settings gear, then drag it to the bottom of your screen for consistency.',
  },
  {
    title: 'Assign a hotkey',
    body: 'Edit the OCR widget and bind a key combination that does not conflict with PoE or other overlays.',
  },
]

const ocrRules = [
  'Make sure both hovered icons are fully visible before you trigger OCR—the capture fails if they are clipped.',
  'Avoid health bars or other UI elements overlapping the text you need to read, otherwise the recognition will be inaccurate.',
]

const troubleshooting = [
  'Re-read the requirements: Windowed display modes only, supported languages only, and matching Admin privileges.',
  'Open Settings → Debug to copy logs before asking for help; it speeds up every fix.',
  'Update GPU drivers if you run the Vulkan renderer. Test DirectX 11/12 to confirm it is a driver issue.',
  'Delete %appdata%/awakened-poe-trade (back up apt-data first) to reset corrupted configs.',
  'Close every tray application, then reopen them one by one to find software conflicts.',
  'Quit Awakened PoE Trade before restarting it—launching a second instance on top does nothing.',
  'Visit the official Discord only after you have specific error details; otherwise you will be redirected back to this checklist.',
]

const faqItems = [
  {
    question: 'Where do I change settings or leagues?',
    answer:
      'Press Shift + Space to open the overlay, then click the cog icon. This is where you swap leagues, toggle widgets, and reach Debug logs.',
  },
  {
    question: 'Where can I find the logs?',
    answer: 'In the Settings panel under the Debug tab. Copy anything unusual before filing an issue.',
  },
  {
    question: 'Is the app approved by GGG? Will I get banned?',
    answer:
      'No community tool is formally approved, but Awakened PoE Trade follows the ToS by performing one action per key press and avoiding memory injection.',
  },
  {
    question: 'How do I scroll stash tabs without zooming my character?',
    answer:
      'Disable "Mousewheel Zoom" in PoE → Options → UI. The arrow-key zoom buttons still work, but Ctrl + Mouse Wheel is now dedicated to stash tabs.',
  },
  {
    question: 'Will other languages be supported?',
    answer:
      'There are no plans to add more languages. English and Russian are maintained because they make testing easier and have the largest player base.',
  },
  {
    question: 'I downloaded a zip with no .exe—what did I do wrong?',
    answer:
      'You grabbed the source code archive. Use the official release links above for the installer, portable exe, AppImage, or dmg.',
  },
  {
    question: 'Why can’t I price check Divination cards, Heist curios, or Kirac map offers?',
    answer:
      'Those interfaces do not copy text to the clipboard when you press Ctrl + C, so Awakened PoE Trade has nothing to parse. Use external stash pricing tools instead.',
  },
  {
    question: 'What does the orange or red circle next to a listing mean?',
    answer: 'Orange means the seller is AFK; red means offline.',
  },
  {
    question: 'What does the question mark near a price mean?',
    answer:
      'It indicates the seller priced the entire stash tab rather than the individual item. Treat the number as a placeholder, not a firm offer.',
  },
]

const videos = [
  {
    id: 'Vf4unpUU25I',
    title: 'Full install & overlay tour',
    duration: '12:37',
    summary: 'Download Awakened PoE Trade, walk through the installer, and see every widget triggered with Shift + Space.',
  },
  {
    id: '2sGfpPJaQAc',
    title: 'Map mods & stash workflows',
    duration: '09:41',
    summary: 'Use map-mod filters, dump sorting, and rare-item refinements that mirror the official quick-start advice.',
  },
  {
    id: 'dkF23lEy2as',
    title: 'Currency ratios & chat macros',
    duration: '08:55',
    summary: 'Showcases Chaos ↔ Divine conversions, bulk selling, and customizing @last chat commands.',
  },
]

const screenshots = [
  {
    src: '/images/awakened/price-check-item.png',
    alt: 'Path of Exile wand text copied via Ctrl + C',
    caption: 'Ctrl + C copies the raw wand text before Awakened PoE Trade parses it.',
  },
  {
    src: '/images/awakened/price-check-overlay.png',
    alt: 'Awakened PoE Trade price window with filters',
    caption: 'The pricing window shows pseudo stats, sliders, and comparable listings exactly like the official screenshot.',
  },
  {
    src: '/images/awakened/overlay-settings.png',
    alt: 'Overlay gear icon',
    caption: 'Shift + Space reveals the widget strip plus the cog where you change leagues.',
  },
  {
    src: '/images/awakened/overlay-logs.png',
    alt: 'Debug logs tab screenshot',
    caption: 'Logs live under Settings → Debug. Copy them before filing issues.',
  },
  {
    src: '/images/awakened/widget-button.png',
    alt: 'Widget button placement screenshot',
    caption: 'OCR widgets sit next to the Settings button so you can drag them anywhere.',
  },
  {
    src: '/images/awakened/widget-hotkey.png',
    alt: 'Widget hotkey dialog screenshot',
    caption: 'Edit each widget and assign a unique hotkey that avoids PoE conflicts.',
  },
  {
    src: '/images/awakened/ocr-config-folder.png',
    alt: 'apt-data folder with cv-ocr files',
    caption: 'Drop the cv-ocr folder alongside config.json before restarting the app.',
  },
  {
    src: '/images/awakened/ocr-icons.png',
    alt: 'OCR capture targets screenshot',
    caption: 'Ensure both icons are fully visible before triggering OCR, or the capture will fail.',
  },
  {
    src: '/images/awakened/ocr-occlusion.png',
    alt: 'OCR failure example with UI overlap',
    caption: 'If UI elements cover the text (like a life bar), move before pressing the hotkey.',
  },
  {
    src: '/images/awakened/mousewheel-setting.png',
    alt: 'Mousewheel zoom option in PoE',
    caption: 'Disable Mousewheel Zoom so Ctrl + Mouse Wheel scrolls stash tabs smoothly.',
  },
  {
    src: '/images/awakened/mousewheel-keys.png',
    alt: 'Arrow key zoom reminder',
    caption: 'Even with Mousewheel Zoom off, the on-screen arrow buttons still control zoom when needed.',
  },
  {
    src: '/images/awakened/language-support.png',
    alt: 'Language support explanation screenshot',
    caption: 'Only English and Russian are maintained according to the official FAQ.',
  },
]

const buildStructuredData = (version: string) =>
  ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://poe327.net/' },
          { '@type': 'ListItem', position: 2, name: 'Awakened Trade', item: 'https://poe327.net/trade/awakened' },
        ],
      },
      {
        '@type': 'HowTo',
        name: `Set up Awakened PoE Trade v${version}`,
        description: 'Download the official release, prep your PoE client, run the wizard, and match privileges in under 8 minutes.',
        totalTime: 'PT8M',
        supply: [{ '@type': 'HowToSupply', name: 'Path of Exile account' }],
        tool: [{ '@type': 'HowToTool', name: 'Awakened PoE Trade overlay' }],
        step: setupChecklist.map(({ name, text }, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name,
          text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }) as const

export async function generateMetadata(): Promise<Metadata> {
  const release = await getAwakenedRelease()
  const versionTitle = `Awakened PoE Trade v${release.version}`

  return {
    title: `${versionTitle} — Official Download, OCR Guide & Hotkeys`,
    description:
      'Mirror the official Awakened PoE Trade docs: verified downloads, requirements, quick-start hotkeys, chat commands, OCR setup, troubleshooting, and FAQs for PoE 3.27.',
    keywords: ['Awakened PoE Trade 3.27', 'awakened trade download', 'poe trade overlay'],
    alternates: { canonical: 'https://poe327.net/trade/awakened' },
    openGraph: {
      title: `${versionTitle} — Official Setup & Shortcuts`,
      description:
        'Download the signed-off release, follow the mirrored quick-start, master chat commands, configure OCR, and troubleshoot faster.',
      url: 'https://poe327.net/trade/awakened',
      images: [
        { url: '/images/poe327-hero.webp', width: 1200, height: 630, alt: 'Awakened PoE Trade overlay demo' },
      ],
      type: 'article',
    },
  }
}

export default async function Page() {
  const release = await getAwakenedRelease()
  const metrics = buildHeroMetrics(release.version)
  const downloadMatrix = buildDownloadMatrix(release)
  const structuredData = buildStructuredData(release.version)
  const heroDescription = `Use the exact instructions from awakened-poe-trade.github.io: download v${release.version}, run the wizard, learn hotkeys, configure OCR, and keep chat macros compliant.`

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        title="Awakened PoE Trade 3.27 — Official Guide & Download"
        description={heroDescription}
        image="/images/poe327-hero.webp"
        kicker="Trading Tools"
        metrics={metrics}
        actions={
          <div className="flex gap-3">
            <a
              href="https://github.com/SnosMe/awakened-poe-trade/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download
            </a>
            <a href="#install" className="btn btn-ghost">Installation</a>
          </div>
        }
      />
      <div className="container">
        <LastUpdated date="Nov 2025" />
      </div>

      <Section
        id="overview"
        title="Why Awakened PoE Trade 3.27?"
        desc="The official overlay price checks items in place, formats whispers, bulk lists stash tabs, and mirrors the same widgets documented on awakened-poe-trade.github.io."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Instant valuations">
            <p>
              Press Ctrl + D on any hovered item to open the overlay with listing comparisons, Chaos ↔ Divine conversions, and copy-ready whispers.
            </p>
          </Card>
          <Card title="First-run wizard">
            <p>
              The wizard calibrates OCR, display scaling, and hotkeys so your very first capture is pixel perfect—even before you touch advanced widgets.
            </p>
          </Card>
          <Card title="Widgets for every mechanic">
            <p>
              Shift + Space keeps cheat sheets, dump sorting, Delve helpers, and chat macros a single keypress away while you keep mapping.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="download"
        title={`Official Downloads & Version ${release.version}`}
        desc="These links, requirements, and warnings are pulled directly from the Awakened PoE Trade download page so you never grab an unsafe mirror."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="text-white">
                <tr>
                  <th className="px-4 py-3">Download link</th>
                  <th className="px-4 py-3">Auto updates</th>
                  <th className="px-4 py-3">Startup time</th>
                </tr>
              </thead>
              <tbody>
                {downloadMatrix.map(({ label, url, autoUpdate, startup, note }) => (
                  <tr key={label} className="border-t border-white/5">
                    <td className="px-4 py-3 text-white">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline"
                      >
                        {label}
                      </a>
                      <p className="text-xs text-white/60">{note}</p>
                    </td>
                    <td className="px-4 py-3 text-white/70">{autoUpdate}</td>
                    <td className="px-4 py-3 text-white/70">{startup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card title="Trust & safety">
            <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>The latest build number is <span className="font-semibold text-white">{release.version}</span>.</li>
              <li>The app is unsigned, so Windows SmartScreen and macOS Gatekeeper will warn you—choose &quot;Run anyway&quot; after verifying the hash.</li>
              <li>Never download from third-party mirrors; the developer does not vouch for them.</li>
            </ul>
          </Card>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {requirementCards.map(({ title, supported, blocked, detail }) => (
            <Card key={title} title={title}>
              {supported && (
                <p className="text-sm text-green-300">✔ {supported.join(', ')}</p>
              )}
              {blocked && (
                <p className="text-sm text-red-300">✖ {blocked.join(', ')}</p>
              )}
              <p className="mt-2 text-sm text-white/80">{detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="gallery"
        title="Screenshot Walkthrough"
        desc="Every image here is mirrored from the official documentation so you know exactly what to expect."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {screenshots.map(({ src, alt, caption }) => (
            <Card key={src} title={caption}>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="beginner"
        title="Quick-Start Insights"
        desc="Direct pull-quotes from the official Quick Start page keep new traders grounded before they dive into the overlay."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {quickStartInsights.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="install"
        title="Installation Checklist"
        desc="Follow the sequence mirrored from the official download page so Awakened PoE Trade boots cleanly on day one."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="4 essential steps">
            <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
              {setupChecklist.map(({ name, text }) => (
                <li key={name}>
                  <p className="font-semibold text-white">{name}</p>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <a
              className="text-brand underline"
              href="https://github.com/SnosMe/awakened-poe-trade/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases →
            </a>
          </Card>
          <Card title="Quick start recap">
            <ol className="list-decimal space-y-2 pl-5 text-sm text-white/80">
              {quickStartPrinciples.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <Section
        id="hotkeys"
        title="How It Works & Default Hotkeys"
        desc="The official Quick Start page breaks down every factory keybind so you always know which action fires."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="text-white">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Default</th>
                  <th className="px-4 py-3">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {defaultHotkeys.map(({ feature, combo, detail, source }) => (
                  <tr key={feature} className="border-t border-white/5">
                    <td className="px-4 py-3 font-semibold text-white">{feature}</td>
                    <td className="px-4 py-3 text-white/70">{combo}</td>
                    <td className="px-4 py-3">
                      {detail}
                      {source && <span className="block text-xs text-white/50">{source}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card title="Before your first price check">
            <ul className="space-y-3 text-sm text-white/80">
              {settingTips.map((tip) => (
                <li key={tip} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="price-window"
        title="Price Check Window"
        desc="Screenshots from the official guide explain what each checkbox, pseudo stat, and slider represents."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {priceInsights.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="price-check"
        title="Price Check Workflow"
        desc="Use one baseline loop, then refine with filters and currency math pulled straight from the official documentation."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {priceFlow.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="advanced-tools"
        title="Overlay Helpers & Quality-of-Life Extras"
        desc="Shift + Space reveals every widget documented in the official guide—these four tend to save the most time."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {advancedFeatures.map(({ title, detail }) => (
            <Card key={title} title={title}>
              <p>{detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="chat"
        title="Chat Commands & Etiquette"
        desc="Follow the official chat-commands page so your macros stay compliant with the Path of Exile ToS."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {chatAutomations.map(({ title, body }) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {chatFaq.map(({ question, answer }) => (
            <Card key={question} title={question}>
              <p>{answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="ocr"
        title="OCR Setup & Widget Rules"
        desc="The step-by-step sequence below mirrors the dedicated OCR guide so you never miss a capture."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Install the OCR bundle">
            <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
              {ocrSetupSteps.map(({ title, body }) => (
                <li key={title}>
                  <p className="font-semibold text-white">{title}</p>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </Card>
          <Card title="Configure the widget">
            <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
              {ocrWidgetSteps.map(({ title, body }) => (
                <li key={title}>
                  <p className="font-semibold text-white">{title}</p>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {ocrRules.map((rule) => (
                <li key={rule} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                  {rule}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="videos"
        title="Video Lessons"
        desc="Watch curated tutorials that reinforce the official docs—no alt-tabbing required."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting" desc="Clear every common issue before pinging Discord—exactly as the official guide recommends.">
        <div className="grid gap-4 md:grid-cols-3">
          {troubleshooting.map((tip) => (
            <Card key={tip}>
              <p>{tip}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" title="FAQ" desc="Answers lifted verbatim from the official FAQ so you can trust every detail.">
        <div className="grid gap-4 md:grid-cols-3">
          {faqItems.map(({ question, answer }) => (
            <Card key={question} title={question}>
              <p>{answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  )
}

function VideoCard({
  id,
  title,
  summary,
  duration,
}: {
  id: string
  title: string
  summary: string
  duration: string
}) {
  return (
    <Card title={title} footer={`Duration: ${duration}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10" data-video>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <p>{summary}</p>
    </Card>
  )
}
