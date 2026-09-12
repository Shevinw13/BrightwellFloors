import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export interface SectionProps {
  /** Optional small uppercase kicker shown above the heading. */
  eyebrow?: ReactNode;
  /** Optional section heading rendered as an <h2>. */
  heading?: ReactNode;
  /** Optional supporting paragraph shown under the heading. */
  intro?: ReactNode;
  /** Center the heading block (eyebrow/heading/intro). */
  centered?: boolean;
  /** Tone controls heading/intro colors for dark vs light backgrounds. */
  tone?: "dark" | "light";
  /** Optional id applied to the <section> for in-page anchors. */
  id?: string;
  /** Additional classes merged onto the outer <section>. */
  className?: string;
  /** Constrain inner width. Defaults to the standard content column. */
  width?: "default" | "wide";
  /** Section content. */
  children?: ReactNode;
}

/**
 * Section
 *
 * A full-width container that centers a max-width column, applies consistent
 * horizontal padding and vertical rhythm, and renders an optional
 * eyebrow/heading/intro block. Uses `w-full` + `max-w-*` + horizontal padding
 * so no child forces horizontal scroll at 320px+ (Req 11.4, 14.1).
 */
export function Section({
  eyebrow,
  heading,
  intro,
  centered = false,
  tone = "dark",
  id,
  className,
  width = "default",
  children,
}: SectionProps) {
  const headingColor = tone === "light" ? "text-cream-50" : "text-walnut-900";
  const introColor = tone === "light" ? "text-cream-100" : "text-charcoal-700";
  const hasHeaderBlock = eyebrow || heading || intro;

  return (
    <section
      id={id}
      className={[
        "w-full py-section-sm md:py-section lg:py-section-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          width === "wide" ? "max-w-7xl" : "max-w-6xl",
        ].join(" ")}
      >
        {hasHeaderBlock ? (
          <div
            className={[
              "flex flex-col gap-4",
              centered ? "items-center text-center" : "",
              "max-w-3xl",
              centered ? "mx-auto" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
            {heading ? (
              <h2
                className={`font-display text-display-sm md:text-display-md ${headingColor}`}
              >
                {heading}
              </h2>
            ) : null}
            {intro ? (
              <p className={`text-body-lg ${introColor}`}>{intro}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default Section;
