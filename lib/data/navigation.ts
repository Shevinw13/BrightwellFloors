/**
 * Navigation data module — single source of truth for primary site navigation.
 *
 * Consumed by the NavigationHeader and Footer. Following conversion research
 * for home-services sites, the PRIMARY nav is trimmed to five decision-driving
 * destinations (problem-first labels), with secondary links kept in the footer.
 *
 * - Styles was merged into "Wood Types" (/flooring-types).
 * - Services was merged into Home + About (its process lives on both).
 *
 * Requirements: 1.2, 2.3
 */

export interface NavLink {
  /** Route path, e.g. "/", "/about". */
  href: string;
  /** Human-readable link label, always non-empty. */
  label: string;
}

/** Primary navigation — the five destinations that lead toward a quote. */
export const navLinks: NavLink[] = [
  { href: "/flooring-types", label: "Wood Types" },
  { href: "/species", label: "Species" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Full set of links for the footer, including Home and the consolidated
 * destinations, so everything stays reachable and crawlable.
 */
export const footerLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/flooring-types", label: "Wood Types & Styles" },
  { href: "/species", label: "Wood Species" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Get a Quote" },
];
