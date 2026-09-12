import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTAButton } from "./CTAButton";

describe("CTAButton", () => {
  it("defaults href to /contact (Req 15.2)", () => {
    render(<CTAButton>Get a Quote</CTAButton>);
    const link = screen.getByRole("link", { name: "Get a Quote" });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("uses the provided href when given", () => {
    render(<CTAButton href="/services">Learn More</CTAButton>);
    const link = screen.getByRole("link", { name: "Learn More" });
    expect(link).toHaveAttribute("href", "/services");
  });

  it("applies the visible focus ring utility (Req 13.3)", () => {
    render(<CTAButton>CTA</CTAButton>);
    expect(screen.getByRole("link", { name: "CTA" })).toHaveClass("focus-ring");
  });

  it("applies primary variant styling by default (Req 14.2)", () => {
    render(<CTAButton>Primary</CTAButton>);
    expect(screen.getByRole("link", { name: "Primary" })).toHaveClass("bg-brass");
  });

  it("applies secondary variant styling when requested", () => {
    render(<CTAButton variant="secondary">Secondary</CTAButton>);
    const link = screen.getByRole("link", { name: "Secondary" });
    expect(link).toHaveClass("border-walnut-800");
    expect(link).not.toHaveClass("bg-brass");
  });

  it("appends custom className while keeping base styling", () => {
    render(<CTAButton className="mt-8">CTA</CTAButton>);
    const link = screen.getByRole("link", { name: "CTA" });
    expect(link).toHaveClass("mt-8");
    expect(link).toHaveClass("focus-ring");
  });
});
