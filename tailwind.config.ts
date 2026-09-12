import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import defaultTheme from "tailwindcss/defaultTheme";

// Brand Theme tokens (Req 14.1–14.3, 13.3). The premium wood-flooring aesthetic
// is centralized here so colors, typography, spacing rhythm, and the focus ring
// stay consistent across every page.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Brand color palette — deep wood browns, warm oak accents, cream
      // backgrounds, high-contrast charcoal text, and a brass CTA highlight.
      colors: {
        walnut: {
          600: "#6d4526",
          700: "#5a3a24",
          800: "#4a2f1d",
          900: "#3b2417",
          950: "#2a1a10",
        },
        oak: {
          200: "#e4c79c",
          300: "#d0a06a",
          400: "#c08a4e",
          500: "#a9743b",
        },
        cream: {
          50: "#faf6f0",
          100: "#f2e9dd",
          200: "#e8dcc9",
        },
        charcoal: {
          600: "#4a4038",
          700: "#332b23",
          900: "#1f1a15",
        },
        // A muted forest green used sparingly as a sophisticated secondary
        // accent (trust/verification cues) alongside the warm wood palette.
        forest: {
          700: "#2f4a3c",
          800: "#243a2f",
        },
        brass: {
          DEFAULT: "#b8860b",
          400: "#c99a2e",
          600: "#9c7109",
        },
      },
      // Display serif for headings, clean sans-serif for body/UI. Both are wired
      // to the CSS variables provided by next/font in app/layout.tsx.
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
      },
      // Type-scale tokens (line-height paired per step) for a descending
      // heading hierarchy across pages.
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-sm": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.25" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3" }],
        // Small uppercase eyebrow/kicker label used above section headings.
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(31, 26, 21, 0.06), 0 6px 20px rgba(31, 26, 21, 0.06)",
        lift: "0 12px 32px rgba(31, 26, 21, 0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
      // Vertical-rhythm spacing tokens for consistent section padding across
      // the responsive bands.
      spacing: {
        "section-sm": "3rem",
        section: "4.5rem",
        "section-lg": "6rem",
      },
      // Base focus-ring tokens used by the shared focus-visible utility.
      ringColor: {
        focus: "#b8860b",
      },
      ringWidth: {
        focus: "3px",
      },
      ringOffsetWidth: {
        focus: "2px",
      },
    },
  },
  plugins: [
    // Base focus-ring utility for interactive controls (Req 13.3). Apply
    // `focus-ring` to any <a>, <button>, or input for a consistent visible
    // focus indicator.
    function focusRing({ addUtilities }: PluginAPI) {
      addUtilities({
        ".focus-ring": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
          "&:focus-visible": {
            outline: "none",
            "box-shadow":
              "0 0 0 2px #faf6f0, 0 0 0 5px #b8860b",
          },
        },
      });
    },
  ],
};

export default config;
