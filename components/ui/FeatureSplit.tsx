import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { CTAButton } from "./CTAButton";
import type { SiteImage } from "@/lib/data/images";

/**
 * FeatureSplit — a two-column image + copy band. Pairs real photography with a
 * focused message, breaking up text-heavy pages and making the brand feel
 * personal and tangible. Image side alternates via `reverse`.
 */
export interface FeatureSplitProps {
  eyebrow?: ReactNode;
  heading: ReactNode;
  children: ReactNode;
  image: SiteImage;
  reverse?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
}

export function FeatureSplit({
  eyebrow,
  heading,
  children,
  image,
  reverse = false,
  ctaHref,
  ctaLabel,
  className,
}: FeatureSplitProps) {
  return (
    <section className={["w-full py-section-sm md:py-section", className].filter(Boolean).join(" ")}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className={reverse ? "lg:order-2" : ""}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="mt-4 font-display text-display-sm text-walnut-900 md:text-display-md">
            {heading}
          </h2>
          <div className="mt-5 space-y-4 text-body-lg text-charcoal-700">
            {children}
          </div>
          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <CTAButton href={ctaHref} variant="secondary">
                {ctaLabel}
              </CTAButton>
            </div>
          ) : null}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-cream-200">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSplit;
