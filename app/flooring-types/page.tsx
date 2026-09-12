import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.flooringTypes;

/**
 * Wood Types page (Req 5 + merged Req 6).
 *
 * Consolidated per conversion research (fewer, decision-driving pages): this
 * single page covers BOTH construction types — solid, engineered, composite
 * (Req 5.1–5.3) — and board styles — strip, plank, parquet (Req 6.1–6.3),
 * plus width/species/color guidance (6.4) and the oak two-thirds stat (6.5).
 * One <h1>, <h2>/<h3> subsections (12.3), Contact CTAs (5.4, 15.1).
 */

const construction = [
  {
    name: "Solid Wood",
    swatch: "linear-gradient(135deg, #c9a77c, #a9743b)",
    best: "Best for: on- and above-grade rooms you'll keep for life",
    lead: "One piece of genuine wood, top to bottom.",
    body: "Sand and refinish it many times over its life. Because it renews again and again, it's a true lifetime floor — often outlasting the house itself.",
  },
  {
    name: "Engineered Wood",
    swatch: "linear-gradient(135deg, #d0a06a, #5a3a24)",
    best: "Best for: basements and changing humidity",
    lead: "Genuine wood in multiple stable layers.",
    body: "A higher-quality wood tops layers that expand and contract less than solid wood — ideal for basements. Typically refinishable four to five times.",
  },
  {
    name: "Composite Engineered",
    swatch: "linear-gradient(135deg, #b98a5e, #3b2417)",
    best: "Best for: smart value without losing the look",
    lead: "Real wood where it counts — the surface you walk on.",
    body: "Real wood on the wearable surface, with a durable composite backing and core rather than solid wood underneath.",
  },
];

const styles = [
  {
    name: "Strip",
    swatch:
      "repeating-linear-gradient(90deg, #c9a77c 0 10px, #b98a5e 10px 20px)",
    body: "Boards three inches or less wide. Narrow lines make a room feel more intimate — and appear a touch smaller.",
  },
  {
    name: "Plank",
    swatch:
      "repeating-linear-gradient(90deg, #c9a77c 0 28px, #b98a5e 28px 56px)",
    body: "Boards greater than three inches wide. Fewer seams create a larger, casual, modern look that's in high demand today.",
  },
  {
    name: "Parquet",
    swatch:
      "repeating-conic-gradient(#c9a77c 0deg 90deg, #b98a5e 90deg 180deg)",
    body: "Boards that vary in size in a geometric, non-linear pattern. A classic look that has fallen out of favor in recent decades.",
  },
];

export default function WoodTypesPage() {
  return (
    <>
      <section className="wood-grain w-full">
        <div className="mx-auto max-w-6xl px-4 py-section-lg sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            Know your options
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
            Wood types &amp; styles
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">
            All real wood — the difference is how it&rsquo;s built and how it&rsquo;s
            laid. Here&rsquo;s how to choose the right construction and board
            style for your room and budget.
          </p>
        </div>
      </section>

      {/* Construction types (Req 5.1–5.3) */}
      <Section eyebrow="How it's built" heading="Three ways to get a real wood floor">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {construction.map((t) => (
            <Card key={t.name} title={t.name} swatch={t.swatch} eyebrow={t.best}>
              <p className="font-semibold text-walnut-900">{t.lead}</p>
              <p className="mt-2">{t.body}</p>
            </Card>
          ))}
        </div>
        <ul role="list" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            "Ground floor or up, keeping it forever? Go solid.",
            "Basement or humidity swings? Go engineered.",
            "Want the look for less? Composite engineered.",
          ].map((tip) => (
            <li
              key={tip}
              className="rounded-2xl bg-cream-100 p-6 text-body-md text-charcoal-700 ring-1 ring-cream-200"
            >
              {tip}
            </li>
          ))}
        </ul>
      </Section>

      {/* Board styles (Req 6.1–6.3) */}
      <Section
        eyebrow="How it's laid"
        heading="Strip, plank, or parquet"
        className="bg-cream-100 grain-overlay"
      >
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {styles.map((s) => (
            <Card key={s.name} title={`${s.name} Flooring`} swatch={s.swatch}>
              {s.body}
            </Card>
          ))}
        </div>
      </Section>

      {/* Guidance + oak stat (Req 6.4, 6.5) */}
      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-display-sm text-walnut-900">
              Any width. Any color. Your call.
            </h2>
            <p className="mt-4 text-body-md text-charcoal-700">
              Wood floors come in almost any width. Species, color-stain, and
              width are all chosen by taste, so you can tailor the look to your
              room and your style — and we&rsquo;ll help you compare options in
              person.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-walnut-900 p-10 text-center shadow-lift">
            <p className="font-display text-display-lg text-brass-400">2/3</p>
            <p className="mt-2 text-body-lg text-cream-100">
              of all wood floors in the USA are Red Oak or White Oak &mdash; the
              timeless, can&rsquo;t-go-wrong choices.
            </p>
          </div>
        </div>
      </Section>

      <CTABand
        heading="Not sure which is right for you?"
        intro="Our design consultants will assess your space and recommend the perfect floor — free of charge."
        ctaLabel="Ask an Expert — Free"
      />
    </>
  );
}
