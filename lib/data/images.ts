/**
 * Central image registry.
 *
 * Every photographic image on the site is referenced here so real Brightwell
 * project photos can be swapped in later by editing ONE file. To use your own
 * photos: drop files into /public/images/ and change the `src` values below to
 * e.g. "/images/hero.jpg".
 *
 * Current images are royalty-free Unsplash stock (warm wood-floor interiors),
 * curated for a cohesive premium look. Unsplash License: free for commercial
 * use, no attribution required. Replace before launch with owned photography.
 */

function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export interface SiteImage {
  src: string;
  /** Descriptive, meaningful alt text (Req 13.1). */
  alt: string;
}

/** Homepage hero — a warm, sunlit room with prominent wood flooring. */
export const heroImage: SiteImage = {
  src: unsplash("1600585154340-be6161a56a0c", 2000),
  alt: "Sunlit open living space with warm hardwood flooring",
};

/** About / Wood Types page header. */
export const aboutImage: SiteImage = {
  src: unsplash("1618221195710-dd6b41faaea6", 1600),
  alt: "Contemporary interior with rich wide-plank wood floors",
};

/** Design-consultation feel — samples / warm styled interior. */
export const consultationImage: SiteImage = {
  src: unsplash("1584622650111-993a426fbf0a", 1600),
  alt: "Warm, styled living room showcasing natural wood flooring",
};

/** Flooring-type feature photos (solid / engineered / composite). */
export const flooringTypeImages: Record<string, SiteImage> = {
  solid: {
    src: unsplash("1600607687920-4e2a09cf159d", 1000),
    alt: "Solid hardwood plank flooring with rich natural grain",
  },
  engineered: {
    src: unsplash("1600566753190-17f0baa2a6c3", 1000),
    alt: "Engineered wood flooring in a bright, modern room",
  },
  composite: {
    src: unsplash("1560448204-e02f11c3d0e2", 1000),
    alt: "Wood-finish flooring detail in a styled living space",
  },
};

/**
 * Gallery project photos, keyed by the gallery item id in lib/data/gallery.ts.
 * Any id present here renders as a photo; anything missing falls back to the
 * wood-tone tile treatment.
 */
export const galleryPhotos: Record<string, SiteImage> = {
  "white-oak-living-room": {
    src: unsplash("1600585154340-be6161a56a0c", 1200),
    alt: "White oak wide-plank flooring in a sunlit open living room",
  },
  "red-oak-staircase": {
    src: unsplash("1600566753190-17f0baa2a6c3", 900),
    alt: "Warm hardwood flooring flowing toward a staircase",
  },
  "walnut-dining-room": {
    src: unsplash("1616486338812-3dadae4b4ace", 1200),
    alt: "Rich walnut-toned wood flooring in a dining area",
  },
  "maple-kitchen": {
    src: unsplash("1556909212-d5b604d0c90d", 1200),
    alt: "Light wood flooring in a bright modern kitchen",
  },
  "hickory-hallway": {
    src: unsplash("1493809842364-78817add7ffb", 900),
    alt: "Hardwood flooring running the length of a bright hallway",
  },
  "brazilian-cherry-bedroom": {
    src: unsplash("1616594039964-ae9021a400a0", 1200),
    alt: "Warm-toned wood flooring in a cozy bedroom",
  },
  "herringbone-parquet-foyer": {
    src: unsplash("1600210492486-724fe5c67fb0", 1200),
    alt: "Elegant entry with patterned wood flooring",
  },
  "engineered-oak-basement": {
    src: unsplash("1567016432779-094069958ea5", 1200),
    alt: "Engineered oak flooring in a finished lower-level room",
  },
  "ash-office": {
    src: unsplash("1524758631624-e2822e304c36", 1200),
    alt: "Pale wood flooring in a minimalist home office",
  },
};
