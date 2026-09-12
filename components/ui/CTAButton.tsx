import Link from "next/link";
import type { ReactNode } from "react";

/**
 * CTAButton — a single, consistently styled call-to-action link used across
 * every page (Req 14.2, 15.1). It defaults to navigating to the Contact page
 * (Req 15.2, 3.6) and exposes a visible focus ring via the `focus-ring`
 * utility for keyboard users (Req 13.3).
 *
 * Variants:
 * - `primary`   — filled brass, the main conversion action.
 * - `secondary` — outlined, for lower-emphasis actions (e.g. "See our work").
 * - `ghost`     — light text link on dark backgrounds (used inside the hero).
 */
export interface CTAButtonProps {
  /** Destination route. Defaults to the Contact page. */
  href?: string;
  /** Visual variant. */
  variant?: "primary" | "secondary" | "ghost";
  /** Size. `lg` is used for hero/primary conversion moments. */
  size?: "md" | "lg";
  /** Link contents (label). */
  children: ReactNode;
  /** Optional extra classes appended to the base CTA styling. */
  className?: string;
}

// Shared base keeps every CTA visually consistent (Req 14.2): same shape,
// typography, transition, focus ring, and a subtle lift on hover.
const baseClasses =
  "focus-ring group inline-flex items-center justify-center gap-2 rounded-full " +
  "font-sans font-semibold no-underline transition-all duration-200 " +
  "hover:-translate-y-0.5 active:translate-y-0";

const sizeClasses: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-body-md",
  lg: "px-8 py-4 text-body-lg",
};

// Brand Theme token pairings (Req 14.1). Contrast pairings meet the 4.5:1
// target for normal text (Req 13.4).
const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-brass text-charcoal-900 shadow-soft hover:bg-brass-400 hover:shadow-lift",
  secondary:
    "border-2 border-walnut-800 text-walnut-900 bg-transparent " +
    "hover:bg-walnut-900 hover:text-cream-50",
  ghost:
    "border-2 border-cream-50/40 text-cream-50 bg-transparent " +
    "hover:bg-cream-50 hover:text-walnut-900 hover:border-cream-50",
};

export function CTAButton({
  href = "/contact",
  variant = "primary",
  size = "md",
  children,
  className,
}: CTAButtonProps) {
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}

export default CTAButton;
