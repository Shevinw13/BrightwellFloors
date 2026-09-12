import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import SpeciesGrid from "@/components/species/SpeciesGrid";
import SpeciesExplorer from "@/components/species/SpeciesExplorer";
import { featuredSpecies } from "@/lib/data/species";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.species;

/**
 * Species_Catalog (Req 7).
 *
 * A guided catalog: a headline intro, a "most popular" fast on-ramp, then a
 * single filterable explorer for the full 33-species library (filter by color
 * and durability) — so visitors self-select instead of scrolling everything.
 * One <h1>; section labels are <h2>, species names <h3> (Req 12.3).
 */
export default function SpeciesPage() {
  return (
    <>
      {/* Intro */}
      <section className="wood-grain w-full">
        <div className="mx-auto max-w-6xl px-4 py-section-lg sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            The wood species library
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
            33 species. One perfect floor for your home.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">
            Red and white oak alone make up two-thirds of American wood floors —
            but that&rsquo;s just the beginning. Start with a crowd favorite, or
            filter the full library by color and durability to find your match.
          </p>
        </div>
      </section>

      {/* Featured tier — the fast on-ramp */}
      <Section
        eyebrow="Start here"
        heading="Most popular species"
        intro="The proven, crowd-pleasing choices our clients pick most often."
      >
        <div className="mt-12">
          <SpeciesGrid species={featuredSpecies} />
        </div>
      </Section>

      {/* Full filterable library */}
      <Section
        eyebrow="Browse the full library"
        heading="Find yours by color & durability"
        className="bg-cream-100 grain-overlay"
      >
        <div className="mt-10">
          <SpeciesExplorer />
        </div>
      </Section>

      <CTABand
        heading="Overwhelmed by choices? That's what we're for."
        intro="Our consultants help you compare species, widths, and stains in your own home — free of charge."
        ctaLabel="Book a Free Consultation"
      />
    </>
  );
}
