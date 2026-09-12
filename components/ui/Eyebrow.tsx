import type { ReactNode } from "react";

/**
 * Eyebrow — a small uppercase kicker label shown above section headings.
 * Adds editorial polish and improves scannability by signposting each section.
 */
export interface EyebrowProps {
  children: ReactNode;
  /** Tone: `dark` for light backgrounds (default), `light` for dark ones. */
  tone?: "dark" | "light";
  className?: string;
}

export function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  const color = tone === "light" ? "text-oak-300" : "text-oak-500";
  return (
    <p
      className={[
        "flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase",
        color,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

export default Eyebrow;
