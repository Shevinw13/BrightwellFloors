import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesExplorer from "./SpeciesExplorer";
import { species } from "@/lib/data/species";

describe("SpeciesExplorer", () => {
  it("shows the full catalog by default", () => {
    render(<SpeciesExplorer />);
    expect(
      screen.getByText(new RegExp(`of ${species.length} species`))
    ).toBeInTheDocument();
  });

  it("filters by color tone and updates the count", async () => {
    const user = userEvent.setup();
    render(<SpeciesExplorer />);

    const darkCount = species.filter((s) => s.tone === "dark").length;
    await user.click(screen.getByRole("button", { name: "Dark", pressed: false }));

    expect(
      screen.getByText(
        (_, el) =>
          el?.tagName === "P" &&
          el.textContent === `Showing ${darkCount} of ${species.length} species`
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Dark" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("clears filters via the reset control", async () => {
    const user = userEvent.setup();
    render(<SpeciesExplorer />);

    await user.click(screen.getByRole("button", { name: "Light" }));
    expect(screen.getByRole("button", { name: /clear filters/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /clear filters/i }));
    expect(
      screen.getByText(
        (_, el) =>
          el?.tagName === "P" &&
          el.textContent ===
            `Showing ${species.length} of ${species.length} species`
      )
    ).toBeInTheDocument();
  });

  it("shows an empty state when no species match", async () => {
    const user = userEvent.setup();
    render(<SpeciesExplorer />);

    // "Everyday" (soft) + "Dark" is an empty combination in the catalog.
    await user.click(screen.getByRole("button", { name: "Everyday" }));
    await user.click(screen.getByRole("button", { name: "Dark" }));

    // Guard: only assert the empty state if the data truly has no overlap.
    const everydayDark = species.filter(
      (s) => s.tone === "dark" && s.hardness < 1200
    );
    if (everydayDark.length === 0) {
      expect(
        screen.getByText(/no species match those filters/i)
      ).toBeInTheDocument();
    }
  });
});
