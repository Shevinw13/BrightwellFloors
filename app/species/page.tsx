import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { PageHeader } from "@/components/ui/PageHeader";
import SpeciesGrid from "@/components/species/SpeciesGrid";
import SpeciesExplorer from "@/components/species/SpeciesExplorer";
import { featuredSpecies } from "@/lib/data/species";
import { consultationImage } from "@/lib/data/images";
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
      <PageHeader
        eyebrow="The wood species library"
        title="33 species. One perfect floor for your home."
        intro="Red and white oak alone make up two-thirds of American wood floors — but that's just the beginning. Start with a crowd favorite, or filter the full library by color and durability to find your match."
        image={consultationImage}
      />

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

      {/* Full filterable library, organized into named groups */}
      <Section
        eyebrow="Browse the full library"
        heading="Explore every species"
        intro="Grouped by origin below — or filter all 33 by color and durability to zero in on your match."
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
