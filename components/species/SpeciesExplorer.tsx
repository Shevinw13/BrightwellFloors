"use client";

/**
 * SpeciesExplorer — a client-side filterable catalog wrapping SpeciesGrid.
 *
 * Turns a long 33-item list into a self-service tool: visitors filter by the
 * two attributes that actually drive a flooring decision — color tone and
 * durability — and see a live result count. Filtering is instant (no network),
 * keyboard accessible (real <button> toggles with aria-pressed), and announced
 * via an aria-live region. A graceful empty state offers a one-tap reset.
 *
 * Requirements: 7.1, 7.2 (still renders the full catalog by default), 13.2, 13.3.
 */
import { useMemo, useState } from "react";
import SpeciesGrid from "./SpeciesGrid";
import {
  species as allSpecies,
  durabilityTier,
  durabilityLabels,
  toneLabels,
  type SpeciesTone,
  type DurabilityTier,
} from "@/lib/data/species";

const TONES: SpeciesTone[] = ["light", "medium", "dark"];
const TIERS: DurabilityTier[] = ["everyday", "durable", "hardest"];

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "focus-ring rounded-full border px-4 py-2 text-body-sm font-medium transition-colors",
        active
          ? "border-walnut-900 bg-walnut-900 text-cream-50"
          : "border-cream-200 bg-cream-50 text-walnut-900 hover:border-walnut-600",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function SpeciesExplorer() {
  const [tones, setTones] = useState<Set<SpeciesTone>>(new Set());
  const [tiers, setTiers] = useState<Set<DurabilityTier>>(new Set());

  function toggle<T>(set: Set<T>, value: T): Set<T> {
    const next = new Set(set);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    return next;
  }

  const filtered = useMemo(() => {
    return allSpecies.filter((s) => {
      const toneOk = tones.size === 0 || tones.has(s.tone);
      const tierOk = tiers.size === 0 || tiers.has(durabilityTier(s.hardness));
      return toneOk && tierOk;
    });
  }, [tones, tiers]);

  const hasFilters = tones.size > 0 || tiers.size > 0;

  function reset() {
    setTones(new Set());
    setTiers(new Set());
  }

  return (
    <div>
      {/* Filter controls */}
      <div className="flex flex-col gap-5 rounded-2xl bg-cream-100 p-6 ring-1 ring-cream-200">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="w-24 shrink-0 text-eyebrow font-semibold uppercase tracking-wider text-oak-500">
            Color
          </span>
          <div className="flex flex-wrap gap-2">
            {TONES.map((t) => (
              <FilterChip
                key={t}
                active={tones.has(t)}
                onClick={() => setTones((prev) => toggle(prev, t))}
              >
                {toneLabels[t]}
              </FilterChip>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="w-24 shrink-0 text-eyebrow font-semibold uppercase tracking-wider text-oak-500">
            Durability
          </span>
          <div className="flex flex-wrap gap-2">
            {TIERS.map((t) => (
              <FilterChip
                key={t}
                active={tiers.has(t)}
                onClick={() => setTiers((prev) => toggle(prev, t))}
              >
                {durabilityLabels[t]}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {/* Result count + reset */}
      <div className="mt-6 flex items-center justify-between">
        <p aria-live="polite" className="text-body-md text-charcoal-700">
          Showing{" "}
          <span className="font-semibold text-walnut-900">
            {filtered.length}
          </span>{" "}
          of {allSpecies.length} species
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={reset}
            className="focus-ring rounded-sm text-body-sm font-semibold text-oak-500 underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Results */}
      <div className="mt-8">
        {filtered.length > 0 ? (
          <SpeciesGrid species={filtered} />
        ) : (
          <div className="rounded-2xl bg-cream-100 p-12 text-center ring-1 ring-cream-200">
            <p className="font-display text-heading-lg text-walnut-900">
              No species match those filters
            </p>
            <p className="mt-2 text-body-md text-charcoal-700">
              Try loosening a filter — or let our consultants find your match.
            </p>
            <button
              type="button"
              onClick={reset}
              className="focus-ring mt-6 rounded-full bg-walnut-900 px-6 py-3 text-body-md font-semibold text-cream-50 transition-colors hover:bg-walnut-800"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
