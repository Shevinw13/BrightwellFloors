/**
 * NavigationHeader — the shared site header rendered on every page
 * (Requirements 1.1). As a Server Component it renders static markup only;
 * the sole interactive piece (the mobile menu toggle) is delegated to the
 * `MobileNavToggle` client child.
 *
 * Responsibilities:
 * - Brand name/logo linking to Home (Req 1.3).
 * - Navigation links to all eight primary pages, sourced from the single
 *   source of truth `navLinks` (Req 1.2). Uses Next.js `<Link>` for
 *   near-instant client-side transitions (Req 1.5).
 * - A Contact call-to-action (Req 1.4).
 *
 * Responsive behavior (Req 11.1, 1.7):
 * - The desktop navigation (links + CTA) is visible at `md` (≥ 768px) and up
 *   and hidden below 768px.
 * - The `MobileNavToggle` is visible only below 768px (`md:hidden`); it owns
 *   the collapsible `#primary-nav` list and its toggle state.
 *
 * Duplicate-id avoidance: `MobileNavToggle` already renders a list with
 * `id="primary-nav"`. The desktop list here therefore uses a distinct
 * `id="desktop-nav"` so no duplicate ids exist in the document.
 */

import Link from "next/link";
import { navLinks } from "@/lib/data/navigation";
import { business } from "@/lib/data/business";
import CTAButton from "@/components/ui/CTAButton";
import MobileNavToggle from "@/components/layout/MobileNavToggle";

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-walnut-800/60 bg-walnut-900/95 text-cream-50 backdrop-blur supports-[backdrop-filter]:bg-walnut-900/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand name/logo — links to Home (Req 1.3). */}
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 rounded-md no-underline"
        >
          <span aria-hidden="true" className="text-heading-lg text-brass">
            &#9670;
          </span>
          <span className="font-display text-heading-lg font-semibold text-cream-50 hover:text-oak-300">
            Brightwell Floors
          </span>
        </Link>

        {/* Desktop navigation: links + CTA, visible md+ and hidden below 768px
            (Req 11.1). Distinct id from the mobile list to avoid duplicate ids. */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          <ul id="desktop-nav" className="flex items-center gap-7">
            {navLinks
              .filter((link) => link.href !== "/contact")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-md text-body-sm font-medium text-cream-100 no-underline transition-colors hover:text-oak-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
            className="focus-ring rounded-md text-body-sm font-semibold text-cream-50 no-underline hover:text-oak-300"
          >
            {business.phone}
          </a>
          {/* Contact CTA (Req 1.4). */}
          <CTAButton>Get a Quote</CTAButton>
        </nav>

        {/* Mobile navigation toggle — visible only below 768px (Req 1.7).
            Self-contained: renders the toggle button and the collapsible
            `#primary-nav` list. */}
        <MobileNavToggle links={navLinks} className="lg:hidden" />
      </div>
    </header>
  );
}

export default NavigationHeader;
