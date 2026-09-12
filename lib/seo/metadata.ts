import type { Metadata } from "next";

/**
 * Per-page SEO metadata helper (Requirements 12.1, 12.2).
 *
 * The root layout (`app/layout.tsx`) defines a title template
 * `"%s | Brightwell Floors"` and a default description. This module builds the
 * per-page `Metadata` objects that plug into that template:
 *
 * - For inner pages, `title` is a plain string (e.g. "About Us"); Next.js runs
 *   it through the layout template, producing "About Us | Brightwell Floors".
 * - For the Home page, applying the template would produce a redundant
 *   "Home | Brightwell Floors", so `buildMetadata` accepts an `absoluteTitle`
 *   flag that emits `title: { absolute: ... }` to bypass the template.
 *
 * Every page gets a unique title and a unique meta description.
 */

/** Identifier for each of the eight primary pages. */
export type PageKey =
  | "home"
  | "about"
  | "flooringTypes"
  | "styles"
  | "species"
  | "gallery"
  | "services"
  | "contact";

export interface BuildMetadataOptions {
  /**
   * The page title. For inner pages this is combined with the layout title
   * template. For the Home page pass `absoluteTitle: true` to bypass it.
   */
  title: string;
  /** The unique meta description for the page. */
  description: string;
  /**
   * When true, the title is emitted as an absolute title and the layout's
   * `%s | Brightwell Floors` template is NOT applied. Use for the Home page.
   */
  absoluteTitle?: boolean;
}

/**
 * Produce a Next.js `Metadata` object with a unique title and description.
 *
 * Designed to work with the root layout title template
 * (`"%s | Brightwell Floors"`):
 *
 * @example
 * // Inner page -> "About Us | Brightwell Floors"
 * export const metadata = buildMetadata({
 *   title: "About Us",
 *   description: "...",
 * });
 *
 * @example
 * // Home page -> exact title, template bypassed
 * export const metadata = buildMetadata({
 *   title: "Brightwell Floors | Premium Real Wood Flooring",
 *   description: "...",
 *   absoluteTitle: true,
 * });
 */
export function buildMetadata({
  title,
  description,
  absoluteTitle = false,
}: BuildMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
  };
}

/**
 * Source-of-truth copy for each page's title and description. Titles and
 * descriptions are unique and relevant to Brightwell Floors. The `home` entry
 * uses `absoluteTitle` so it is not double-branded by the layout template.
 */
export const pageMetadataContent: Record<PageKey, BuildMetadataOptions> = {
  home: {
    title: "Brightwell Floors | Premium Real Wood Flooring",
    description:
      "Brightwell Floors installs premium real wood flooring. We will never lose on price and we always win on quality — best result 100% guaranteed. Book a free design consultation.",
    absoluteTitle: true,
  },
  about: {
    title: "About Us",
    description:
      "Learn the Brightwell Floors story: our unbeatable-price and quality guarantee and the free, no-charge design consultations from our expert wood flooring consultants.",
  },
  flooringTypes: {
    title: "Wood Types & Styles",
    description:
      "Compare solid, engineered, and composite wood flooring plus strip, plank, and parquet styles from Brightwell Floors — and find the right real wood floor for your space and budget.",
  },
  styles: {
    title: "Flooring Styles & Options",
    description:
      "Explore wood flooring styles from Brightwell Floors — strip, plank, and parquet — plus guidance on choosing width, species, and color-stain to suit your room.",
  },
  species: {
    title: "Wood Species Catalog",
    description:
      "Browse the Brightwell Floors wood species catalog, from Red Oak and White Oak to Brazilian Cherry, Teak, Walnut, Wenge, and more premium hardwoods.",
  },
  gallery: {
    title: "Project Gallery",
    description:
      "View completed real wood flooring projects installed by Brightwell Floors and see the craftsmanship and quality behind our guaranteed results.",
  },
  services: {
    title: "Free Design Consultation",
    description:
      "Discover the free design consultation from Brightwell Floors. Our expert consultants recommend options at no charge and show your room in multiple choices to compare.",
  },
  contact: {
    title: "Contact & Request a Quote",
    description:
      "Contact Brightwell Floors or request a free quote and design consultation. Share your project details and our team will help you choose the perfect wood floor.",
  },
};

/**
 * Ready-to-use `Metadata` objects for all eight pages, keyed by `PageKey`.
 * Each `page.tsx` can simply re-export the appropriate entry:
 *
 * @example
 * export const metadata = pageMetadata.about;
 */
export const pageMetadata: Record<PageKey, Metadata> = {
  home: buildMetadata(pageMetadataContent.home),
  about: buildMetadata(pageMetadataContent.about),
  flooringTypes: buildMetadata(pageMetadataContent.flooringTypes),
  styles: buildMetadata(pageMetadataContent.styles),
  species: buildMetadata(pageMetadataContent.species),
  gallery: buildMetadata(pageMetadataContent.gallery),
  services: buildMetadata(pageMetadataContent.services),
  contact: buildMetadata(pageMetadataContent.contact),
};
