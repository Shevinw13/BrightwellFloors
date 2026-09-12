/**
 * Gallery data module for the Brightwell Floors website.
 *
 * Provides the typed list of flooring projects rendered by the Gallery page /
 * GalleryGrid. Each entry carries descriptive `alt` text (Req 8.2, Property 8),
 * a human caption, a room/space tag, and a representative wood-tone `tone` used
 * for the tile treatment until real project photography is added. An optional
 * `src` can point to a real photo under /public later.
 *
 * Requirements: 8.1, 8.2
 */

export interface GalleryImage {
  /** Stable id / key. */
  id: string;
  /** Descriptive alt text (used for the accessible name of each tile). */
  alt: string;
  /** Short caption shown on the tile. */
  caption: string;
  /** Room or project type, shown as a small tag. */
  space: string;
  /** Representative wood-tone hex for the tile treatment. */
  tone: string;
  /** Tile aspect: "tall" items span two rows for a dynamic masonry feel. */
  tall?: boolean;
  /** Optional real photo path under /public (overrides the tone treatment). */
  src?: string;
  /** Intrinsic dimensions when a real `src` is provided. */
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "white-oak-living-room",
    alt: "White oak plank flooring in a sunlit open-plan living room",
    caption: "White Oak wide plank",
    space: "Open-plan living room",
    tone: "#c9a77c",
  },
  {
    id: "red-oak-staircase",
    alt: "Refinished red oak treads on a curved hardwood staircase",
    caption: "Red Oak staircase",
    space: "Restoration",
    tone: "#c08457",
    tall: true,
  },
  {
    id: "walnut-dining-room",
    alt: "Rich walnut wide-plank flooring beneath a farmhouse dining table",
    caption: "American Walnut",
    space: "Dining room",
    tone: "#5c4433",
  },
  {
    id: "maple-kitchen",
    alt: "Light maple strip flooring in a bright modern kitchen",
    caption: "Maple strip",
    space: "Kitchen",
    tone: "#e2c79b",
  },
  {
    id: "hickory-hallway",
    alt: "Hickory plank flooring running the length of an entry hallway",
    caption: "Hickory Pecan",
    space: "Entry hallway",
    tone: "#b98a5e",
    tall: true,
  },
  {
    id: "brazilian-cherry-bedroom",
    alt: "Warm Brazilian cherry flooring in a cozy master bedroom",
    caption: "Brazilian Cherry",
    space: "Master bedroom",
    tone: "#7c3b28",
  },
  {
    id: "herringbone-parquet-foyer",
    alt: "White oak herringbone parquet flooring in an elegant foyer",
    caption: "Herringbone parquet",
    space: "Foyer",
    tone: "#cba878",
  },
  {
    id: "engineered-oak-basement",
    alt: "Engineered oak flooring installed in a finished basement family room",
    caption: "Engineered Oak",
    space: "Finished basement",
    tone: "#d0a06a",
  },
  {
    id: "ash-office",
    alt: "Pale ash plank flooring in a minimalist home office",
    caption: "European Ash",
    space: "Home office",
    tone: "#d8c3a1",
  },
];
