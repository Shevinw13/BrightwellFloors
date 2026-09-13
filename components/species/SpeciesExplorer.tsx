"use client";

/**
 * SpeciesExplorer — filterable catalog wrapping SpeciesGrid.
 *
 * When no filter is active, the library is organized into its three named
 * groups (Most Popular · Domestic · Exotic & Imported), each with a labeled
 * sub-header, a one-line blurb, and a count — so the page reads as an
 * organized guide, not one long wall of tiles. When filters are active it
 * collapses to a single flat results grid with a live count.
 *
 * Filtering by the two attributes that drive a flooring decision (color tone
 * and durability) is instant, keyboard accessible (aria-pressed toggles), and
 * announced via aria-live. A graceful empty state offers a one-tap reset.
 *
 * Requirements: 7.1, 7.2, 13.2, 13.3.
 */
import { useMemo, useState } from "react";
import SpeciesGrid from "./SpeciesGrid";
import {
  species as allSpecies,
  speciesByCategory,
  speciesCategories,
  durabilityTier,
  durabilityLabels,
  toneLabels,
  type SpeciesCategory,
  type SpeciesTone,
  type DurabilityTier,
} from "@/lib/data/species";

const TONES: SpeciesTone[] = ["light", "medium", "dark"];
const TIERS: DurabilityTier[] = ["everyday", "durable", "hardest"];
// Unfiltered view groups (Popular is featured separately above the explorer).
const GROUP_ORDER: SpeciesCategory[] = ["domestic", "exotic"];

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

/** A labeled group header used to separate categories in the unfiltered view. */
function GroupHeader({
  label,
  blurb,
  count,
}: {
  label: string;
  blurb: string;
  count: number;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2 border-t-2 border-oak-300 pt-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="font-display text-heading-lg text-walnut-900">
          {label}
        </h3>
        <p className="mt-1 max-w-2xl text-body-md text-charcoal-700">{blurb}</p>
      </div>
      <span className="shrink-0 rounded-full bg-cream-200 px-3 py-1 text-body-sm font-medium text-walnut-800">
        {count} species
      </span>
    </div>
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

  const hasFilters = tones.size > 0 || tiers.size > 0;

  const filtered = useMemo(() => {
    return allSpecies.filter((s) => {
      const toneOk = tones.size === 0 || tones.has(s.tone);
      const tierOk = tiers.size === 0 || tiers.has(durabilityTier(s.hardness));
      return toneOk && tierOk;
    });
  }, [tones, tiers]);

  function reset() {
    setTones(new Set());
    setTiers(new Set());
  }

  return (
    <div>
      {/* Filter controls */}
      <div className="flex flex-col gap-5 rounded-2xl bg-cream-50 p-6 shadow-soft ring-1 ring-cream-200">
        <p className="text-eyebrow font-semibold uppercase tracking-wider text-oak-500">
          Filter the library
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="w-28 shrink-0 font-sans text-body-sm font-semibold text-walnut-900">
            By color
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
          <span className="w-28 shrink-0 font-sans text-body-sm font-semibold text-walnut-900">
            By durability
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

      {/* Result count + reset (only meaningful while filtering) */}
      {hasFilters ? (
        <div className="mt-6 flex items-center justify-between">
          <p aria-live="polite" className="text-body-md text-charcoal-700">
            Showing{" "}
            <span className="font-semibold text-walnut-900">
              {filtered.length}
            </span>{" "}
            of {allSpecies.length} species
          </p>
          <button
            type="button"
            onClick={reset}
            className="focus-ring rounded-sm text-body-sm font-semibold text-oak-500 underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : null}

      {/* Results */}
      <div className="mt-8">
        {hasFilters ? (
          // Filtered: a single flat results grid.
          filtered.length > 0 ? (
            <SpeciesGrid species={filtered} />
          ) : (
            <div className="rounded-2xl bg-cream-50 p-12 text-center shadow-soft ring-1 ring-cream-200">
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
          )
        ) : (
          // Unfiltered: organized into named groups with separators.
          <div className="space-y-16">
            {GROUP_ORDER.map((cat) => {
              const items = speciesByCategory(cat);
              const meta = speciesCategories[cat];
              return (
                <div key={cat}>
                  <GroupHeader
                    label={meta.label}
                    blurb={meta.blurb}
                    count={items.length}
                  />
                  <SpeciesGrid species={items} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
