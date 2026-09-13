import { Section } from "./Section";
import { faqs } from "@/lib/data/proof";

/**
 * Faqs — objection-handling accordion placed just before the final CTA, where
 * the visitor is asking "will I regret this?". Uses native <details>/<summary>
 * so it's keyboard accessible with zero JS.
 */
export function Faqs() {
  return (
    <Section eyebrow="Good to know" heading="Questions, answered" centered>
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-cream-200 border-y border-cream-200">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left font-display text-heading-md text-walnut-900">
              {f.q}
              <span
                aria-hidden="true"
                className="shrink-0 text-oak-500 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-body-md text-charcoal-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export default Faqs;
