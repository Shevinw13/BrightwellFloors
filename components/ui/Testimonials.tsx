import { Section } from "./Section";
import { testimonials } from "@/lib/data/proof";

/**
 * Testimonials — social-proof section. Client quotes are the strongest
 * conversion lever for high-consideration home-services purchases, so they get
 * a dedicated, well-designed band rather than a footnote.
 */
export function Testimonials() {
  return (
    <Section
      eyebrow="What our clients say"
      heading="Trusted in thousands of homes"
      centered
      className="bg-cream-100 grain-overlay"
    >
      <ul
        role="list"
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="flex flex-col rounded-2xl bg-cream-50 p-8 shadow-soft ring-1 ring-cream-200"
          >
            <div aria-hidden="true" className="text-body-md text-brass">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <blockquote className="mt-4 flex-1 text-body-md text-charcoal-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 border-t border-cream-200 pt-4">
              <p className="font-sans font-semibold text-walnut-900">
                {t.name}
              </p>
              <p className="text-body-sm text-charcoal-700">{t.location}</p>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Testimonials;
