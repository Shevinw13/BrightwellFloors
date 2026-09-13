import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { PageHeader } from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryPhotos } from "@/lib/data/images";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.gallery;

/**
 * Gallery_Page (Req 8). Project collection (8.1) with descriptive alt text
 * (8.2) and a Contact CTA (8.3). One <h1>, <h2> sections (12.3).
 */
export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Floors we're proud to stand on"
        intro="A selection of real wood flooring projects installed by our craftsmen. Every space shows the species, style, and finish behind our guaranteed results."
        image={galleryPhotos["white-oak-living-room"]}
      />

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
