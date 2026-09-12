import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NavigationHeader } from "@/components/layout/NavigationHeader";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Body / UI sans-serif (Req 14.1). Exposed as the `--font-sans` CSS variable
// and mapped to Tailwind's `font-sans` token in tailwind.config.ts.
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Display / heading serif conveying premium craftsmanship (Req 14.1, 14.3).
// Exposed as `--font-display` and mapped to Tailwind's `font-display` token.
const display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Brightwell Floors",
    template: "%s | Brightwell Floors",
  },
  description:
    "Brightwell Floors — premium real wood flooring. We will never lose on price and we always win on quality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      {/* Semantic document structure shared by every page (Req 12.3): the
          NavigationHeader and Footer appear on all routes (Req 1.1, 2.1), with
          page content in a single <main> landmark. The flex column + flex-1
          main keeps the footer at the bottom on short pages. Brand base styling
          (cream bg, charcoal text, font-sans) is applied in globals.css
          (Req 14.1). */}
      <body className="flex min-h-screen flex-col bg-cream-50 font-sans text-charcoal-900 antialiased">
        <NavigationHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
