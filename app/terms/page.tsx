import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | poe327.net',
  description:
    'Terms of Use for poe327.net, an unofficial Path of Exile companion site. Read the rules, disclaimers, and limitations of liability before using the site.',
  alternates: { canonical: 'https://poe327.net/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8 text-white/85">
        <div className="space-y-3">
          <span className="pill bg-brand/15 text-brand text-xs font-semibold uppercase tracking-wide">Legal</span>
          <h1 className="h2 text-white">Terms of Use</h1>
          <p className="text-sm text-white/60">Last updated: June 29, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Acceptance of terms</h2>
          <p>
            By accessing or using poe327.net, you agree to these Terms of Use. If you do not agree, please stop using
            the site immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Unofficial fan site</h2>
          <p>
            poe327.net is an independent, unofficial fan-made companion for Path of Exile. We are not affiliated with,
            endorsed by, or sponsored by Grinding Gear Games (GGG) or any official Path of Exile partner. All game
            content, trademarks, and assets belong to their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Content accuracy</h2>
          <p>
            We aim to keep league timers, patch notes, build summaries, and tool links accurate, but game data changes
            frequently. We do not guarantee that any build, filter, trade macro, or timeline is current, optimal, or
            bug-free. Always verify critical information against official GGG sources before making in-game decisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. External links and tools</h2>
          <p>
            This site links to third-party tools and resources (e.g., FilterBlade, Awakened PoE Trade, PoE Wiki,
            pathofexile.com). We do not control those services and are not responsible for their availability, security,
            or terms. Use them at your own risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Prohibited use</h2>
          <p>You may not use this site to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Scrape, spider, or automate excessive requests that degrade service</li>
            <li>Distribute malware, spam, or abusive content</li>
            <li>Impersonate the site or its operators</li>
            <li>Violate any applicable law or regulation</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Intellectual property</h2>
          <p>
            Original site text, code, and layouts are provided under standard open-source terms where applicable. Path of
            Exile game assets, names, and trademarks remain the property of Grinding Gear Games. We claim no ownership
            over GGG intellectual property.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, poe327.net and its operators are not liable for any direct,
            indirect, incidental, or consequential damages arising from your use of the site or reliance on its content.
            This includes, but is not limited to, in-game losses, account issues, or financial decisions based on build
            or economy advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">8. Changes to terms</h2>
          <p>
            We may update these Terms of Use at any time. Continued use of the site after changes constitutes acceptance
            of the revised terms. Check this page periodically for updates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">9. Contact</h2>
          <p>
            For questions about these terms or the site, reach out through the official channels listed on the homepage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">10. Disclaimer</h2>
          <p className="text-white/70">
            ALL CONTENT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. USE AT YOUR OWN RISK.
          </p>
        </section>
      </div>
    </main>
  )
}
