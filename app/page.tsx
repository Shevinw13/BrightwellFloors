import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureSplit } from "@/components/ui/FeatureSplit";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Testimonials } from "@/components/ui/Testimonials";
import { Faqs } from "@/components/ui/Faqs";
import { featuredSpecies } from "@/lib/data/species";
import { consultationImage, flooringTypeImages } from "@/lib/data/images";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.home;

/**
 * Home page — rebuilt to sell, following the section order proven across
 * top flooring sites and homepage-conversion research:
 *   Hero (value + 1 CTA + trust) → Services/category tiles → Feature (why us,
 *   with a face) → Featured species teaser → Process → Testimonials → FAQ
 *   (objection handling) → final CTA.
 * Each message appears in exactly ONE section (de-duplicated against About).
 */

const flooringTypes = [
  {
    name: "Solid Wood",
    image: flooringTypeImages.solid,
    body: "One piece of genuine wood you can refinish for generations. A true lifetime floor.",
  },
  {
    name: "Engineered Wood",
    image: flooringTypeImages.engineered,
    body: "Real wood in stable layers that shrug off moisture — perfect for basements.",
  },
  {
    name: "Composite Engineered",
    image: flooringTypeImages.composite,
    body: "A genuine wood surface over a durable core — the look you want for less.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services / category tiles — the primary decision paths (3 clean cards). */}
      <Section
        eyebrow="What we do"
        heading="Beautiful floors, expertly installed"
        intro="Whatever your room, subfloor, or budget, there's a real wood floor that's right for it — and we install every one with our own craftsmen."
        centered
      >
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {flooringTypes.map((t) => (
            <Card
              key={t.name}
              title={t.name}
              imageSrc={t.image.src}
              imageAlt={t.image.alt}
              footer={
                <Link
                  href="/flooring-types"
                  className="focus-ring rounded-sm font-sans text-body-sm font-semibold text-oak-500 underline-offset-4 hover:underline"
                >
                  Learn more &rarr;
                </Link>
              }
            >
              {t.body}
            </Card>
          ))}
        </div>
      </Section>

      {/* Why us, with a face — the consultation experience (owned here). */}
      <FeatureSplit
        eyebrow="The Brightwell difference"
        heading="See your floor before you commit"
        image={consultationImage}
        reverse
      >
        <p>
          We bring the showroom to you. Compare species, widths, and stains side
          by side in your own room and your own light — so the choice feels
          obvious, not overwhelming.
        </p>
        <p>
          Expert guidance at no charge, with zero pressure to say yes.
        </p>
      </FeatureSplit>

      {/* Featured species teaser. */}
      <Section
        eyebrow="The wood"
        heading="Our most-loved species"
        intro="From the warm neutrals of white oak to the deep chocolate of walnut — a taste of the 33 species we offer."
        className="bg-cream-100 grain-overlay"
      >
        <ul role="list" className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featuredSpecies.map((s) => (
            <li key={s.id}>
              <Link
                href="/species"
                className="focus-ring group block overflow-hidden rounded-xl ring-1 ring-cream-200 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="block h-20 w-full"
                  style={{ backgroundColor: s.swatch }}
                />
                <span className="block bg-cream-50 px-3 py-3 text-center font-sans text-body-sm font-semibold text-walnut-900">
                  {s.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/species" variant="secondary">
            Explore All 33 Species
          </CTAButton>
        </div>
      </Section>

      <ProcessSteps />

      <Testimonials />

      <Faqs />

      <CTABand />
    </>
  );
}
