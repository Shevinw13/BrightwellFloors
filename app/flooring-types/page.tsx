import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { PageHeader } from "@/components/ui/PageHeader";
import { flooringTypeImages, aboutImage } from "@/lib/data/images";
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
    image: flooringTypeImages.solid,
    best: "Best for: any room on or above ground",
    lead: "One piece of genuine wood, top to bottom.",
    body: "Because it's solid all the way through, it can be sanded, refinished, and even color-changed many times for years to come — making it a true \u201clifetime floor\u201d that can outlast the house itself.",
  },
  {
    name: "Engineered Wood",
    image: flooringTypeImages.engineered,
    best: "Best for: basements and changing humidity",
    lead: "Genuine wood in multiple layers.",
    body: "The top layer is a higher-quality wood over stable core layers. Because it expands and contracts less than solid wood, it's ideal for basement installations. It can be refinished too — usually no more than 4\u20135 times.",
  },
  {
    name: "Composite Engineered",
    image: flooringTypeImages.composite,
    best: "Best for: smart value without losing the look",
    lead: "Real wood on the wearable surface only.",
    body: "The surface you walk on is genuine wood, while the backing and core may be made of composite materials rather than real wood — a budget-friendly way to get the look.",
  },
];

const styles = [
  {
    name: "Strip",
    swatch:
      "repeating-linear-gradient(90deg, #c9a77c 0 10px, #b98a5e 10px 20px)",
    body: "Boards 3\u2033 wide or less. The narrow lines run the length of a room and often make the space appear a little smaller.",
  },
  {
    name: "Plank",
    swatch:
      "repeating-linear-gradient(90deg, #c9a77c 0 28px, #b98a5e 28px 56px)",
    body: "Boards greater than 3\u2033 wide. Wider boards and fewer seams create a larger, more casual, modern look — today's most popular choice.",
  },
  {
    name: "Parquet",
    swatch:
      "repeating-conic-gradient(#c9a77c 0deg 90deg, #b98a5e 90deg 180deg)",
    body: "Boards that vary in size, arranged in a geometric, non-linear pattern. A distinctive look that has fallen out of favor over the past few decades.",
  },
];

export default function WoodTypesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Know your options"
        title="Wood types & styles"
        intro="All real wood — the difference is how it's built and how it's laid. Here's how to choose the right construction and board style for your room and budget."
        image={aboutImage}
      />

      {/* Construction types (Req 5.1–5.3) */}
      <Section
        eyebrow="How it's built"
        heading="Three ways to get a real wood floor"
        intro="Every wood floor falls into one of three constructions. They look similar underfoot — the real difference is how they're layered, where they can go, and how many times they can be refinished."
      >
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {construction.map((t) => (
            <Card
              key={t.name}
              title={t.name}
              imageSrc={t.image.src}
              imageAlt={t.image.alt}
              eyebrow={t.best}
            >
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
        intro="Wood floors are milled in almost any width, and the board size you choose changes the whole feel of a room. These are the three classic layouts."
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

      {/* Species education + oak stat (Req 6.4, 6.5) */}
      <Section
        eyebrow="Choosing a species"
        heading="So many options — and it comes down to taste"
        intro="Wood flooring is made from hardwoods, softwoods, domestic lumber, and a variety of imported species. Each one has its own visual character and maintenance needs, so the right choice is really a matter of your taste and preference."
      >
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-body-md text-charcoal-700">
            <p>
              Species, color-stain, and board width are all chosen to suit your
              style — and you don&rsquo;t have to decide alone. Our expert design
              consultants make recommendations at no charge, and can even show
              you what your room will look like with multiple choices to compare
              side by side.
            </p>
            <p>
              Not sure where to start? Two-thirds of homeowners land on oak for
              good reason — it&rsquo;s timeless and hard to get wrong.
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
