import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import type { SiteImage } from "@/lib/data/images";

/**
 * PageHeader — a photographic page intro used at the top of inner pages.
 * A real interior/flooring photo with a legibility scrim replaces the old flat
 * dark banners, so every page opens with imagery instead of just words.
 */
export interface PageHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  image: SiteImage;
}

export function PageHeader({ eyebrow, title, intro, image }: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal-900">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/65 to-charcoal-900/25"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-section lg:py-section-lg sm:px-6 lg:px-8">
        {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
        <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}

export default PageHeader;
