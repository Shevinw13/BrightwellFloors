/**
 * Logo — the Brightwell Floors brand mark: a monogram "B" formed from stacked
 * wood-plank strokes inside a rounded badge, paired with the wordmark. Pure
 * inline SVG (crisp at any size, no asset needed). `tone` adapts it for dark
 * headers vs light surfaces.
 */
export interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  const wordmark = tone === "light" ? "text-cream-50" : "text-walnut-900";

  return (
    <span className={["flex items-center gap-3", className].filter(Boolean).join(" ")}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Badge */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="9"
          fill="#3b2417"
          stroke="#b8860b"
          strokeWidth="1.5"
        />
        {/* Monogram B built from plank strokes */}
        <path
          d="M13 11h9.2c3.1 0 5.3 1.7 5.3 4.4 0 1.9-1.1 3.3-2.8 3.9 2.1.5 3.5 2 3.5 4.2 0 3-2.4 4.9-5.9 4.9H13V11z"
          fill="none"
          stroke="#e4c79c"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Grain accent line */}
        <line
          x1="13"
          y1="20"
          x2="24"
          y2="20"
          stroke="#b8860b"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-heading-md font-semibold tracking-tight ${wordmark}`}
        >
          Brightwell
        </span>
        <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-brass-400">
          Floors
        </span>
      </span>
    </span>
  );
}

export default Logo;
