import { CTAButton } from "./CTAButton";
import { trustStats, trustBadges } from "@/lib/data/proof";
import { business } from "@/lib/data/business";

/**
 * Hero — the Home page hero (Req 3.1, 3.2, 3.5, 12.3).
 *
 * Design rationale: a full-bleed wood-grain backdrop with a dark scrim leads
 * with craftsmanship (premium home-services convert on outcome + trust, not on
 * price). The required brand slogans are preserved but demoted from a shouting
 * all-caps <h1> to a supporting eyebrow and a reassurance line, while a calm,
 * confident headline does the selling. A dual CTA gives a primary conversion
 * path plus a low-friction "see the work" path, and an inline trust bar
 * surfaces social proof above the fold.
 *
 * This component owns the page's single <h1> (Req 12.3).
 */
export function Hero() {
  return (
    <section className="wood-grain relative w-full overflow-hidden">
      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-4 py-section-lg sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          {/* Required brand slogan, demoted to a supporting eyebrow (Req 3.1). */}
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            Never beaten on price. Never compromised on quality.
          </p>

          {/* Craftsmanship-led headline (the single <h1>). */}
          <h1 className="mt-6 font-display text-display-lg text-cream-50 md:text-display-xl">
            Real wood floors,
            <br />
            built to outlast the home.
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-cream-100">
            From timeless oak to rare imported hardwoods, Brightwell Floors
            designs, supplies, and installs solid and engineered wood floors
            you&rsquo;ll love for a lifetime &mdash; backed by a promise:{" "}
            <span className="font-semibold text-cream-50">
              best result, 100% guaranteed.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Your Free Quote
            </CTAButton>
            {/* Mobile-first click-to-call — most home-services discovery is
                mobile, so the number must be tappable above the fold without
                opening the menu. Shown as a call button on small screens and
                as "See Our Work" from sm up. */}
            <a
              href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-50/40 px-8 py-4 text-body-lg font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-cream-50 hover:bg-cream-50 hover:text-walnut-900 sm:hidden"
            >
              Call {business.phone}
            </a>
            <CTAButton
              href="/gallery"
              variant="ghost"
              size="lg"
              className="hidden sm:inline-flex"
            >
              See Our Work
            </CTAButton>
          </div>

          {/* Trust badge strip — social proof above the fold. */}
          <ul
            role="list"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-cream-100/90"
          >
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-brass-400">
                  &#10003;
                </span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Inline trust bar — social proof above the fold. */}
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-cream-50/15 pt-8 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-body-sm text-cream-100/80">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-heading-lg text-cream-50 md:text-display-sm">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
