import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.gallery;

/**
 * Gallery_Page (Req 8). Project collection (8.1) with descriptive alt text
 * (8.2) and a Contact CTA (8.3). One <h1>, <h2> sections (12.3).
 */
export default function GalleryPage() {
  return (
    <>
      <section className="wood-grain w-full">
        <div className="mx-auto max-w-6xl px-4 py-section-lg sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            Our work
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
            Floors we&rsquo;re proud to stand on
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">
            A selection of real wood flooring projects installed by our
            craftsmen. Every space shows the species, style, and finish behind
            our guaranteed results.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Recent projects"
        heading="Completed installations"
        intro="From wide-plank white oak to reclaimed heart pine — see the range of what's possible."
      >
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </Section>

      <CTABand
        heading="Picture it in your home"
        intro="Let's bring the same craftsmanship to your space. Request a free quote and design consultation today."
        ctaLabel="Get Your Free Quote"
      />
    </>
  );
}
