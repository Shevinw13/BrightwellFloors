import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders exactly one top-level h1 (Req 12.3)", () => {
    render(<Hero />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
  });

  it("keeps the brand slogan on the page as a supporting line (Req 3.1)", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Never beaten on price\. Never compromised on quality\./i)
    ).toBeInTheDocument();
  });

  it("preserves the guarantee messaging (Req 3.2)", () => {
    render(<Hero />);
    expect(
      screen.getByText(/best result 100% guaranteed/i)
    ).toBeInTheDocument();
  });

  it("renders a primary quote CTA to /contact (Req 3.5, 3.6)", () => {
    render(<Hero />);
    const quote = screen.getByRole("link", { name: /get your free quote/i });
    expect(quote).toHaveAttribute("href", "/contact");
  });

  it("renders a secondary CTA to the gallery", () => {
    render(<Hero />);
    const work = screen.getByRole("link", { name: /see our work/i });
    expect(work).toHaveAttribute("href", "/gallery");
  });

  it("surfaces trust stats above the fold", () => {
    render(<Hero />);
    expect(screen.getByText(/Floors installed/i)).toBeInTheDocument();
  });
});
