import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | poe327.net',
  description:
    'Privacy policy for poe327.net, an unofficial Path of Exile companion site. Learn what data we collect, how we use it, and your rights.',
  alternates: { canonical: 'https://poe327.net/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8 text-white/85">
        <div className="space-y-3">
          <span className="pill bg-brand/15 text-brand text-xs font-semibold uppercase tracking-wide">Legal</span>
          <h1 className="h2 text-white">Privacy Policy</h1>
          <p className="text-sm text-white/60">Last updated: June 29, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Who we are</h2>
          <p>
            poe327.net is an unofficial fan-made companion site for Path of Exile players. We are not affiliated with
            Grinding Gear Games (GGG), the official Path of Exile website, or any endorsed partner. All trademarks and
            game content belong to their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. What data we collect</h2>
          <p>We use the following analytics and measurement tools:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Google Analytics 4</strong> — page views, session duration, device type, and general traffic
              sources. We do not collect personal identifiers.
            </li>
            <li>
              <strong>Microsoft Clarity</strong> — aggregated heatmaps, scroll depth, and click patterns to improve
              usability. No keystroke or form-input recording.
            </li>
            <li>
              <strong>Plausible Analytics (self-hosted)</strong> — privacy-focused, cookie-less pageview and event
              metrics. No cross-site tracking.
            </li>
          </ul>
          <p>We do not collect, store, or process:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Account credentials, emails, or real names</li>
            <li>Payment or billing information</li>
            <li>Path of Exile game account data</li>
            <li>Third-party advertising identifiers</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. How we use data</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Understand which pages and tools are most helpful to players</li>
            <li>Fix broken links, dead clicks, and navigation issues</li>
            <li>Improve page load speed and mobile experience</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Cookies and local storage</h2>
          <p>
            We do not use advertising cookies. Plausible Analytics does not use cookies. Google Analytics 4 may use
            first-party cookies for session measurement. You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Third-party links</h2>
          <p>
            This site links to official and community resources (e.g., pathofexile.com, filterblade.xyz, PoE Wiki). We
            are not responsible for the privacy practices of those external sites. Please review their policies before
            submitting any personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Your rights</h2>
          <p>
            You may request deletion of any analytics data tied to your IP or device by emailing the site operator.
            Because we do not collect personal accounts, typical requests are limited to IP-based analytics removal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">7. Changes to this policy</h2>
          <p>
            We may update this policy as tools or regulations change. Material changes will be noted with a new "Last
            updated" date at the top of this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">8. Disclaimer</h2>
          <p className="text-white/70">
            poe327.net is an independent, unofficial resource. We do not guarantee game accuracy, drop rates, or
            build viability. Use the information at your own discretion. Path of Exile and all related marks are
            trademarks of Grinding Gear Games.
          </p>
        </section>
      </div>
    </main>
  )
}
