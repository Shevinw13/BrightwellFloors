/**
 * Central image registry.
 *
 * Every photographic image on the site is referenced here so real Brightwell
 * project photos can be swapped in later by editing one file. These are
 * royalty-free Unsplash stock photos (wood flooring & warm interiors) used as
 * placeholders. Attribution/licensing: Unsplash License (free for commercial
 * use, no attribution required); replace before launch with owned photography.
 *
 * URLs use Unsplash's stable CDN with sizing params for performance.
 */

function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export interface SiteImage {
  src: string;
  /** Descriptive, meaningful alt text (Req 13.1). */
  alt: string;
}

/** Hero / large feature imagery. */
export const heroImage: SiteImage = {
  src: unsplash("1615529182904-14819c35db37", 2000),
  alt: "Sunlit room with warm wide-plank hardwood flooring",
};

export const aboutImage: SiteImage = {
  src: unsplash("1600585154340-be6161a56a0c", 1600),
  alt: "Bright, modern living space with natural wood floors",
};

export const consultationImage: SiteImage = {
  src: unsplash("1503387762-592deb58ef4e", 1600),
  alt: "Wood flooring samples in a range of stains laid side by side",
};

/** Flooring-type feature photos (solid / engineered / composite). */
export const flooringTypeImages: Record<string, SiteImage> = {
  solid: {
    src: unsplash("1600566753086-00f18fb6b3ea", 1000),
    alt: "Close-up of solid oak plank flooring with natural grain",
  },
  engineered: {
    src: unsplash("1618221195710-dd6b41faaea6", 1000),
    alt: "Engineered wood flooring in a contemporary open-plan room",
  },
  composite: {
    src: unsplash("1595428774223-ef52624120d2", 1000),
    alt: "Wood-surfaced flooring detail with a warm matte finish",
  },
};

/**
 * Gallery project photos, keyed by the gallery item id in lib/data/gallery.ts.
 * Any id present here renders as a photo; anything missing falls back to the
 * tasteful wood-tone tile treatment.
 */
export const galleryPhotos: Record<string, SiteImage> = {
  "white-oak-living-room": {
    src: unsplash("1615529182904-14819c35db37", 1200),
    alt: "White oak wide-plank flooring in a sunlit open-plan living room",
  },
  "red-oak-staircase": {
    src: unsplash("1600607687939-ce8a6c25118c", 900),
    alt: "Warm hardwood staircase with refinished treads",
  },
  "walnut-dining-room": {
    src: unsplash("1600210492493-0946911123ea", 1200),
    alt: "Rich walnut-toned wood flooring beneath a dining table",
  },
  "maple-kitchen": {
    src: unsplash("1600489000022-c2086d79f9d4", 1200),
    alt: "Light wood flooring in a bright modern kitchen",
  },
  "hickory-hallway": {
    src: unsplash("1600566752355-35792bedcfea", 900),
    alt: "Hardwood flooring running the length of a bright hallway",
  },
  "brazilian-cherry-bedroom": {
    src: unsplash("1616486338812-3dadae4b4ace", 1200),
    alt: "Warm-toned wood flooring in a cozy bedroom",
  },
  "herringbone-parquet-foyer": {
    src: unsplash("1600585154526-990dced4db0d", 1200),
    alt: "Elegant entryway with patterned wood flooring",
  },
  "engineered-oak-basement": {
    src: unsplash("1600607688969-a5bfcd646154", 1200),
    alt: "Engineered oak flooring in a finished lower-level family room",
  },
  "ash-office": {
    src: unsplash("1524758631624-e2822e304c36", 1200),
    alt: "Pale wood flooring in a minimalist home office",
  },
};
