/**
 * TrustBar — a compact band of proof points placed directly beneath the hero.
 *
 * Marketing research is consistent that trust signals have the most impact when
 * they sit near the top of the page, close to where the first decision is made.
 * This band turns abstract claims into scannable, quantified proof (Req 14.1,
 * 14.3). Purely presentational; values are placeholders the owner can adjust.
 */
export interface TrustStat {
  /** The headline figure, e.g. "25+". */
  value: string;
  /** What the figure represents, e.g. "Years of craftsmanship". */
  label: string;
}

export interface TrustBarProps {
  stats?: TrustStat[];
  className?: string;
}

const DEFAULT_STATS: TrustStat[] = [
  { value: "25+", label: "Years of craftsmanship" },
  { value: "2,000+", label: "Floors installed" },
  { value: "30+", label: "Wood species offered" },
  { value: "100%", label: "Satisfaction guaranteed" },
];

export function TrustBar({ stats = DEFAULT_STATS, className }: TrustBarProps) {
  return (
    <section
      aria-label="Why homeowners choose Brightwell Floors"
      className={["w-full border-y border-cream-100 bg-cream-50", className]
        .filter(Boolean)
        .join(" ")}
    >
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="font-display text-display-sm text-walnut-900">
              {stat.value}
            </dt>
            <dd className="mt-1 text-body-sm font-medium uppercase tracking-wide text-charcoal-700">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default TrustBar;
