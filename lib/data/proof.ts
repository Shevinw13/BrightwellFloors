/**
 * Social-proof and trust data for Brightwell Floors.
 *
 * These are the credibility signals (stats, testimonials, guarantees) that
 * drive conversion for high-consideration home-services purchases. Values are
 * placeholders that read as realistic and can be replaced with real figures.
 */

export interface TrustStat {
  /** The headline figure, e.g. "25+". */
  value: string;
  /** What the figure describes, e.g. "Years of craftsmanship". */
  label: string;
}

export const trustStats: TrustStat[] = [
  { value: "25+", label: "Years of craftsmanship" },
  { value: "4,000+", label: "Floors installed" },
  { value: "4.9\u2605", label: "Average client rating" },
  { value: "100%", label: "Satisfaction guaranteed" },
];

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We got three quotes. Brightwell beat every price and their installation was flawless. Our white oak floors are the first thing everyone notices.",
    name: "Sarah & Mike D.",
    location: "Whole-home install",
  },
  {
    quote:
      "The free design consultation sold us. They laid out four species side by side in our living room so we could actually see the difference before deciding.",
    name: "Jennifer R.",
    location: "Living & dining room",
  },
  {
    quote:
      "Craftsmen, not salesmen. They refinished our 80-year-old heart pine and it looks better than the day it was laid. Worth every penny.",
    name: "Thomas W.",
    location: "Restoration project",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "A design consultant visits, listens, and brings samples that suit your space.",
  },
  {
    step: "02",
    title: "See it in your room",
    description:
      "Compare species, widths, and stains side by side in your own light before you commit.",
  },
  {
    step: "03",
    title: "Transparent quote",
    description:
      "A clear, itemized price with no surprises — and no pressure to say yes.",
  },
  {
    step: "04",
    title: "Flawless installation",
    description:
      "Our own craftsmen install with precision and clean up like we were never there.",
  },
];

export interface TrustBadge {
  label: string;
}

/**
 * Credibility badges shown as a strip near the hero. Research: certifications
 * and "years-in-business" signals substitute well when review counts are low,
 * and trust signals near the hero outperform the same signals lower on a page.
 */
export const trustBadges: TrustBadge[] = [
  { label: "★ 4.9 Google rating" },
  { label: "Licensed & insured" },
  { label: "25+ years in business" },
  { label: "Free in-home consultation" },
];

export interface Faq {
  q: string;
  a: string;
}

/**
 * Objection-handling FAQ. Research: an FAQ section that answers the top
 * hesitations ("will I regret this?") right before the final CTA lifts
 * conversion by removing doubt at the decision point.
 */
export const faqs: Faq[] = [
  {
    q: "Can you match a lower quote I've received?",
    a: "Yes — bring us a comparable written quote and we'll beat it. Sourcing our hardwoods directly is what makes that possible.",
  },
  {
    q: "Will installation make a mess of my home?",
    a: "We protect adjacent rooms, contain dust, and clean up daily. Most rooms are finished in a few days, and we leave the space better than we found it.",
  },
  {
    q: "Can you refinish or repair my existing wood floors?",
    a: "Often, yes. Solid and many engineered floors can be sanded and refinished. We'll tell you honestly whether refinishing or replacement is the smarter spend.",
  },
  {
    q: "What areas do you serve?",
    a: "We install throughout greater Atlanta and the surrounding communities. Not sure if you're in range? Just ask — we'll let you know right away.",
  },
];
