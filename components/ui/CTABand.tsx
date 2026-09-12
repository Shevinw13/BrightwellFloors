import { CTAButton } from "./CTAButton";

/**
 * CTABand — a high-contrast closing call-to-action used at the foot of pages.
 * Gives every page a strong, consistent conversion moment (Req 15.1).
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
    <section className="wood-grain relative w-full">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-section-lg text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-display-sm text-cream-50 md:text-display-md">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-body-lg text-cream-100">{intro}</p>
        <div className="mt-8">
          <CTAButton href="/contact" variant="primary" size="lg">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default CTABand;
