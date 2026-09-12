/**
 * SpeciesGrid
 *
 * Renders wood species as rich, scannable tiles rather than a flat name list
 * (Req 7.1, 7.2). Each tile shows a representative wood-tone swatch, the name,
 * origin, a Janka hardness indicator, and a one-line character note — turning
 * the catalog into a decision-making guide. WHERE a species has an `imageSrc`,
 * a photo is used in place of the swatch (Req 7.3, 13.1).
 *
 * Responsive: 1 column on mobile up to 3 on large screens; no horizontal
 * scroll at 320px+ (Req 7.2, 11.4). Brand Theme tokens throughout (Req 14.x).
 *
 * Requirements: 7.1, 7.2, 7.3, 13.1
 */
import Image from "next/image";
import { species as defaultSpecies, type WoodSpecies } from "@/lib/data/species";

export interface SpeciesGridProps {
  /** Species to render. Defaults to the full catalog. */
  species?: WoodSpecies[];
}

/** Maps a Janka hardness value to a simple, human-friendly durability label. */
function hardnessLabel(hardness: number): string {
  if (hardness >= 2000) return "Extremely hard";
  if (hardness >= 1300) return "Very durable";
  if (hardness >= 900) return "Durable";
  return "Softer / character";
}

export default function SpeciesGrid({
  species = defaultSpecies,
}: SpeciesGridProps) {
  return (
    <ul
      role="list"
      className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {species.map((item) => {
        const hasImage = Boolean(item.imageSrc);

        return (
          <li
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-soft ring-1 ring-cream-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
          >
            {hasImage ? (
              <div className="relative aspect-[5/3] w-full bg-cream-100">
                <Image
                  src={item.imageSrc as string}
                  alt={item.alt ?? `${item.name} wood flooring`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="relative aspect-[5/3] w-full"
                style={{ backgroundColor: item.swatch }}
              >
                {/* Subtle grain streaks over the flat swatch. */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(91deg, rgba(255,255,255,0.14) 0px, rgba(0,0,0,0.14) 6px, rgba(255,255,255,0.10) 12px)",
                  }}
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-heading-md text-walnut-900">
                  {item.name}
                </h3>
                <span className="shrink-0 text-body-sm text-charcoal-600">
                  {item.origin}
                </span>
              </div>

              <p className="mt-2 flex-1 text-body-md text-charcoal-700">
                {item.character}
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-cream-200 pt-4">
                <span className="inline-flex items-center rounded-full bg-cream-100 px-3 py-1 text-body-sm font-medium text-walnut-800">
                  {hardnessLabel(item.hardness)}
                </span>
                <span className="text-body-sm text-charcoal-600">
                  Janka {item.hardness.toLocaleString()}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
