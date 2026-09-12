import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTABand } from "@/components/ui/CTABand";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Testimonials } from "@/components/ui/Testimonials";
import { featuredSpecies } from "@/lib/data/species";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.home;

const benefits = [
  {
    title: "Unbeatable pricing",
    body: "We source hardwoods directly and beat any comparable quote — in writing.",
  },
  {
    title: "Master craftsmanship",
    body: "Our own installers, never subcontractors, treat every board like it's going in their own home.",
  },
  {
    title: "Free design help",
    body: "Expert consultants guide your choices and show options side by side in your own room.",
  },
  {
    title: "100% guarantee",
    body: "Not thrilled with the result? We make it right. That's the Brightwell promise.",
  },
];

const flooringTypes = [
  {
    title: "Solid Wood",
    swatch: "linear-gradient(135deg, #c9a77c, #a9743b)",
    body: "One piece of genuine wood, top to bottom. Sand and refinish it for generations — a true lifetime floor.",
  },
  {
    title: "Engineered Wood",
    swatch: "linear-gradient(135deg, #d0a06a, #5a3a24)",
    body: "Real wood in stable layers that resist moisture and movement — ideal for basements and changing conditions.",
  },
  {
    title: "Composite Engineered",
    swatch: "linear-gradient(135deg, #b98a5e, #3b2417)",
    body: "A genuine wood wear surface over a durable composite core — smart value without sacrificing the look.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why Brightwell — scannable benefits (the trust layer). */}
      <Section
        eyebrow="Why Brightwell"
        heading="Get it right, and never overpay to do it"
        centered
      >
        <ul role="list" className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <li key={b.title} className="flex flex-col border-t-2 border-brass pt-5">
              <h3 className="font-display text-heading-md text-walnut-900">
                {b.title}
              </h3>
              <p className="mt-2 text-body-md text-charcoal-700">{b.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Flooring types with wood-tone swatches — the whole section links onward. */}
      <Section
        eyebrow="Find your fit"
        heading="Three ways to get a real wood floor"
        intro="Solid, engineered, or composite — we'll help you choose the construction that fits your space and budget."
        className="bg-cream-100 grain-overlay"
      >
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {flooringTypes.map((t) => (
            <Card key={t.title} title={t.title} swatch={t.swatch}>
              {t.body}
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured species preview — turns the catalog into a teaser. */}
      <Section
        eyebrow="The wood"
        heading="Our most-loved species"
        intro="From the warm neutrals of white oak to the deep chocolate of walnut — explore the species our clients choose most."
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

      <CTABand />
    </>
  );
}
