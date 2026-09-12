"use client";

/**
 * MobileNavToggle — client component that renders the mobile navigation toggle
 * button and the collapsible primary navigation list it controls.
 *
 * Behavior (Requirements 1.7, 1.8, 1.9):
 * - The navigation links are collapsed by default (`isOpen === false`),
 *   satisfying the "collapsed by default" mobile requirement (1.7).
 * - Activating the toggle while links are hidden makes them visible (1.8).
 * - Activating the toggle while links are visible hides them (1.9).
 *
 * Accessibility (Requirements 13.2, 13.3):
 * - The toggle is a native `<button>` (keyboard reachable/activatable).
 * - It exposes `aria-expanded` reflecting `isOpen` and `aria-controls`
 *   pointing at the `#primary-nav` element it toggles.
 * - It carries an accessible label ("Toggle navigation menu").
 * - The `focus-ring` utility provides a visible focus indicator.
 *
 * This component is self-contained: it owns the toggle state, renders the
 * button, and renders the controlled `#primary-nav` list. NavigationHeader
 * (task 8.2) passes the shared `navLinks` in and renders this once inside the
 * mobile region of the header — it does not need to manage any state itself.
 */

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/lib/data/navigation";

export interface MobileNavToggleProps {
  /** Primary navigation links, from `lib/data/navigation.ts`. */
  links: NavLink[];
  /** Optional extra classes for the wrapping container. */
  className?: string;
}

export function MobileNavToggle({ links, className }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
        className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-cream-50"
      >
        {/* Hamburger when closed, close (X) icon when open. Decorative — the
            accessible name comes from aria-label, so the icon is hidden from
            assistive technology. */}
        {isOpen ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Collapsible primary nav list controlled by the button above. It is
          rendered but hidden while collapsed so `aria-controls` always
          references a present element. */}
      <ul
        id="primary-nav"
        hidden={!isOpen}
        className="mt-2 flex flex-col gap-1"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring block rounded-md px-3 py-2 text-cream-50 hover:text-oak-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavToggle;
