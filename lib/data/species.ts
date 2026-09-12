/**
 * Wood species catalog data module.
 *
 * Exports the full, ordered list of wood species offered by Brightwell Floors
 * (Requirement 7.1). Each species has a unique kebab-case slug `id`, a display
 * `name`, and rich attributes used to turn a flat list into a decision-making
 * guide: a `category` for grouping, a representative `swatch` color (so tiles
 * read as wood, not empty boxes), an `origin`, a Janka `hardness` rating, and a
 * short `character` note. Optional `imageSrc`/`alt` remain supported for when
 * real photography is added.
 *
 * Requirements: 7.1
 */

export type SpeciesCategory = "popular" | "domestic" | "exotic";
export type SpeciesTone = "light" | "medium" | "dark";

export interface WoodSpecies {
  /** Unique kebab-case slug, e.g. "red-oak". */
  id: string;
  /** Display name, e.g. "Red Oak". */
  name: string;
  /** Grouping used by the catalog UI. */
  category: SpeciesCategory;
  /** Visual tone bucket used for color filtering. */
  tone: SpeciesTone;
  /** Representative wood-tone hex used for the tile swatch. */
  swatch: string;
  /** Where the species is typically sourced. */
  origin: string;
  /** Janka hardness rating (lbf) — a proxy for durability. */
  hardness: number;
  /** One-line description of look/character. */
  character: string;
  /** True for the handful of best-selling, lead-with species. */
  featured?: boolean;
  /** Optional image path under /public. */
  imageSrc?: string;
  /** Descriptive alt text; required whenever `imageSrc` is present. */
  alt?: string;
}

/**
 * The full list of all 33 wood species from Requirement 7.1, enriched with
 * category, swatch color, origin, hardness, and character.
 */
export const species: WoodSpecies[] = [
  { id: "white-oak", name: "White Oak", category: "popular", tone: "medium", swatch: "#c9a77c", origin: "North America", hardness: 1360, character: "Warm neutral tones and tight grain — today's most-requested floor.", featured: true },
  { id: "red-oak", name: "Red Oak", category: "popular", tone: "medium", swatch: "#c08457", origin: "North America", hardness: 1290, character: "The American classic — rosy undertones and a forgiving, timeless grain.", featured: true },
  { id: "maple", name: "Maple", category: "popular", tone: "light", swatch: "#e2c79b", origin: "North America", hardness: 1450, character: "Pale, clean, and modern with a subtle, uniform grain.", featured: true },
  { id: "hickory-pecan", name: "Hickory Pecan", category: "popular", tone: "medium", swatch: "#b98a5e", origin: "North America", hardness: 1820, character: "Dramatic color variation and exceptional hardness for busy homes.", featured: true },
  { id: "walnut", name: "Walnut", category: "popular", tone: "dark", swatch: "#5c4433", origin: "North America", hardness: 1010, character: "Rich chocolate tones that bring instant warmth and luxury.", featured: true },
  { id: "brazilian-cherry", name: "Brazilian Cherry", category: "popular", tone: "dark", swatch: "#7c3b28", origin: "South America", hardness: 2350, character: "Deep red hues that darken beautifully with age — and nearly indestructible.", featured: true },

  { id: "ash", name: "Ash", category: "domestic", tone: "light", swatch: "#d8c3a1", origin: "North America", hardness: 1320, character: "Light, airy, and springy with a bold straight grain." },
  { id: "beech", name: "Beech", category: "domestic", tone: "medium", swatch: "#d2a878", origin: "North America / Europe", hardness: 1300, character: "Smooth, pale, and consistent — understated and clean." },
  { id: "birch", name: "Birch", category: "domestic", tone: "light", swatch: "#e0c49a", origin: "North America", hardness: 1260, character: "Fine, wavy grain with a soft golden glow." },
  { id: "cherry", name: "Cherry", category: "domestic", tone: "medium", swatch: "#a15b3c", origin: "North America", hardness: 950, character: "Silky texture that ripens to a lustrous reddish-brown." },
  { id: "cork", name: "Cork", category: "domestic", tone: "medium", swatch: "#c9a06a", origin: "Mediterranean", hardness: 200, character: "Soft, warm, and quiet underfoot — eco-friendly and resilient." },
  { id: "cypress", name: "Cypress", category: "domestic", tone: "light", swatch: "#c7b088", origin: "Southern USA", hardness: 510, character: "Honeyed tones with a rustic, weather-worn charm." },
  { id: "douglas-fir", name: "Douglas Fir", category: "domestic", tone: "medium", swatch: "#d3a06a", origin: "North America", hardness: 660, character: "Warm amber softwood with a strong vertical grain." },
  { id: "mesquite", name: "Mesquite", category: "domestic", tone: "dark", swatch: "#8a5a34", origin: "Southwestern USA", hardness: 2340, character: "Wild grain and rich caramel color — remarkably stable and hard." },
  { id: "pine-antique-heart", name: "Antique Heart Pine", category: "domestic", tone: "medium", swatch: "#b0703c", origin: "Southern USA", hardness: 1225, character: "Reclaimed character with deep amber patina and history in every board." },
  { id: "pine-southern-yellow", name: "Southern Yellow Pine", category: "domestic", tone: "light", swatch: "#d9a860", origin: "Southern USA", hardness: 870, character: "Bright, golden, and budget-friendly with knotty character." },
  { id: "bamboo", name: "Bamboo", category: "domestic", tone: "light", swatch: "#dcc394", origin: "Asia (rapidly renewable)", hardness: 1380, character: "Sustainable, sleek, and surprisingly tough." },

  { id: "brazilian-maple", name: "Brazilian Maple", category: "exotic", tone: "medium", swatch: "#c99a63", origin: "South America", hardness: 3000, character: "Blonde tones with elite hardness for high-traffic spaces." },
  { id: "brazilian-walnut", name: "Brazilian Walnut (Ipe)", category: "exotic", tone: "dark", swatch: "#4c3626", origin: "South America", hardness: 3680, character: "One of the hardest floors on earth — dense, dark, and dramatic." },
  { id: "bubinga", name: "Bubinga", category: "exotic", tone: "dark", swatch: "#8a3f2c", origin: "Africa", hardness: 1980, character: "Vivid red-brown with a luminous, ribboned figure." },
  { id: "cumaru", name: "Cumaru", category: "exotic", tone: "medium", swatch: "#8a5230", origin: "South America", hardness: 3540, character: "Golden-brown warmth with extreme durability." },
  { id: "iroko", name: "Iroko", category: "exotic", tone: "medium", swatch: "#9c7a45", origin: "Africa", hardness: 1260, character: "A teak-like alternative that deepens to a rich golden brown." },
  { id: "jarrah", name: "Jarrah", category: "exotic", tone: "dark", swatch: "#7a3626", origin: "Australia", hardness: 1910, character: "Deep brick-red tones with a bold, distinctive grain." },
  { id: "mahogany", name: "Mahogany", category: "exotic", tone: "dark", swatch: "#7b3f2b", origin: "Central / South America", hardness: 800, character: "The timeless luxury hardwood — reddish, refined, and elegant." },
  { id: "merbau", name: "Merbau", category: "exotic", tone: "dark", swatch: "#6f3f28", origin: "Southeast Asia", hardness: 1925, character: "Warm reddish-brown with golden flecks and great stability." },
  { id: "padauk", name: "Padauk", category: "exotic", tone: "medium", swatch: "#a23a1e", origin: "Africa", hardness: 1725, character: "Striking orange-red that mellows to a deep, rich brown." },
  { id: "purpleheart", name: "Purpleheart", category: "exotic", tone: "dark", swatch: "#5a3a63", origin: "Central / South America", hardness: 2520, character: "A genuine purple hue — a bold statement floor like no other." },
  { id: "sapele", name: "Sapele", category: "exotic", tone: "dark", swatch: "#7a4028", origin: "Africa", hardness: 1410, character: "Mahogany-like richness with a shimmering ribbon stripe." },
  { id: "spotted-gum", name: "Spotted Gum", category: "exotic", tone: "medium", swatch: "#9a6a3f", origin: "Australia", hardness: 2473, character: "Bold, wavy grain in warm chocolate-and-honey tones." },
  { id: "sydney-blue-gum", name: "Sydney Blue Gum", category: "exotic", tone: "medium", swatch: "#94553a", origin: "Australia", hardness: 1720, character: "Soft pink-to-red hues with a clean, contemporary grain." },
  { id: "tasmanian-oak", name: "Tasmanian Oak", category: "exotic", tone: "light", swatch: "#cba878", origin: "Australia", hardness: 1350, character: "Pale, versatile, and easy to stain to any look you want." },
  { id: "teak", name: "Teak", category: "exotic", tone: "medium", swatch: "#9c6b3a", origin: "Southeast Asia", hardness: 1155, character: "The gold standard for warmth and water resistance." },
  { id: "wenge", name: "Wenge", category: "exotic", tone: "dark", swatch: "#3d2b20", origin: "Africa", hardness: 1930, character: "Nearly black with fine golden lines — sleek and ultra-modern." },
];

/** Human-readable labels and blurbs for each catalog category. */
export const speciesCategories: Record<
  SpeciesCategory,
  { label: string; blurb: string }
> = {
  popular: {
    label: "Most Popular",
    blurb:
      "The species our clients choose most — proven looks that suit almost any home.",
  },
  domestic: {
    label: "Domestic Hardwoods & Softwoods",
    blurb:
      "North American classics and everyday favorites, from crisp maple to reclaimed heart pine.",
  },
  exotic: {
    label: "Exotic & Imported",
    blurb:
      "Rare grains and bold colors from around the world for a truly one-of-a-kind floor.",
  },
};

/** Species grouped by category, preserving list order within each group. */
export function speciesByCategory(category: SpeciesCategory): WoodSpecies[] {
  return species.filter((s) => s.category === category);
}

/** The featured, best-selling species used for home-page highlights. */
export const featuredSpecies: WoodSpecies[] = species.filter((s) => s.featured);

export type DurabilityTier = "everyday" | "durable" | "hardest";

/** Buckets a Janka hardness value into a coarse, shopper-friendly tier. */
export function durabilityTier(hardness: number): DurabilityTier {
  if (hardness >= 2000) return "hardest";
  if (hardness >= 1200) return "durable";
  return "everyday";
}

/** Human label for a durability tier. */
export const durabilityLabels: Record<DurabilityTier, string> = {
  everyday: "Everyday",
  durable: "Very durable",
  hardest: "Extremely hard",
};

/** Human label for a tone. */
export const toneLabels: Record<SpeciesTone, string> = {
  light: "Light",
  medium: "Medium",
  dark: "Dark",
};
