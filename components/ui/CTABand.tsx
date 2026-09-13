import { CTAButton } from "./CTAButton";
import { business } from "@/lib/data/business";

/**
 * CTABand — a warm closing call-to-action used at the foot of pages. Uses a
 * light cream treatment with a brass accent (airy, premium) rather than a heavy
 * dark band, so the palette stays light. Gives every page one clear, consistent
 * conversion moment (Req 15.1), plus a click-to-call for mobile visitors.
 */
export interface CTABandProps {
  heading?: string;
  intro?: string;
  ctaLabel?: string;
}

export function CTABand({
  heading = "Ready for floors you'll love for life?",
  intro = "Book your free design consultation — expert guidance and an unbeatable quote, with zero pressure.",
  ctaLabel = "Get Your Free Quote",
}: CTABandProps) {
  return (
    <section className="w-full bg-cream-100 grain-overlay">
      <div className="mx-auto max-w-4xl px-4 py-section-lg text-center sm:px-6 lg:px-8">
        <span
          aria-hidden="true"
          className="mx-auto block h-1 w-16 rounded-full bg-brass"
        />
        <h2 className="mt-6 font-display text-display-sm text-walnut-900 md:text-display-md">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-charcoal-700">
          {intro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="/contact" variant="primary" size="lg">
            {ctaLabel}
          </CTAButton>
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
            className="focus-ring text-body-lg font-semibold text-walnut-900 underline-offset-4 hover:text-brass-600 hover:underline"
          >
            or call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTABand;
