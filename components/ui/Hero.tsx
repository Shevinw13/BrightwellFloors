import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { Eyebrow } from "./Eyebrow";
import { trustStats, trustBadges } from "@/lib/data/proof";
import { business } from "@/lib/data/business";
import { heroImage } from "@/lib/data/images";

/**
 * Hero — the Home page hero (Req 3.1, 3.2, 3.5, 12.3).
 *
 * Now photography-led: a real wood-flooring interior fills the frame with a
 * left-weighted gradient scrim so the copy stays legible while the image
 * carries the warmth and trust (people buy floors with their eyes). The
 * required brand slogan is a supporting eyebrow and the guarantee a reassurance
 * line; a confident craftsmanship headline leads. Mobile click-to-call and a
 * trust-badge strip sit above the fold. Owns the page's single <h1> (Req 12.3).
 */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal-900">
      {/* Photographic backdrop */}
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility scrim — darker at the left where the copy sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/30"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-4 py-section-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <Eyebrow tone="light">
            Never beaten on price. Never compromised on quality.
          </Eyebrow>

          <h1 className="mt-6 font-display text-display-lg text-cream-50 md:text-display-xl">
            Real wood floors,
            <br />
            built to outlast the home.
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-cream-100">
            A family-owned crew of craftsmen with 25+ years installing solid and
            engineered hardwood &mdash; from timeless oak to rare imports.
            Beautiful floors, honest prices,{" "}
            <span className="font-semibold text-cream-50">
              best result 100% guaranteed.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Your Free Quote
            </CTAButton>
            <a
              href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-50/50 px-8 py-4 text-body-lg font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-cream-50 hover:bg-cream-50 hover:text-walnut-900 sm:hidden"
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

          <ul
            role="list"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-cream-100"
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

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-cream-50/20 pt-8 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-body-sm text-cream-100/90">
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
