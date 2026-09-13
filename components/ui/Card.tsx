import type { ReactNode } from "react";
import Image from "next/image";

export interface CardProps {
  /** Card title rendered as an <h3>. */
  title: ReactNode;
  /** Optional eyebrow/label above the title. */
  eyebrow?: ReactNode;
  /** Optional image source under /public or a remote-configured domain. */
  imageSrc?: string;
  /** Alt text; required (and should be descriptive) when imageSrc is set (Req 13.1). */
  imageAlt?: string;
  /**
   * Optional decorative swatch band shown at the top when there is no image.
   * Pass a CSS color or gradient; rendered aria-hidden.
   */
  swatch?: string;
  /** Card body content. */
  children?: ReactNode;
  /** Optional footer (e.g. a link). */
  footer?: ReactNode;
  /** Additional classes merged onto the outer card element. */
  className?: string;
}

/**
 * Card — reusable presentational block. Media (photo or swatch) always renders
 * in a FIXED aspect ratio at the top, and the content order is always
 * eyebrow → title → body → footer. This keeps cards in a row perfectly aligned
 * regardless of differing source-image dimensions (fixes ragged-row issue).
 */
export function Card({
  title,
  eyebrow,
  imageSrc,
  imageAlt = "",
  swatch,
  children,
  footer,
  className,
}: CardProps) {
  const hasMedia = Boolean(imageSrc) || Boolean(swatch);

  return (
    <article
      className={[
        "group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-cream-50",
        "shadow-soft ring-1 ring-cream-200 transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-lift",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasMedia ? (
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-cream-100">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: swatch }}
            />
          )}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-7">
        {eyebrow ? (
          <p className="font-sans text-eyebrow font-semibold uppercase text-oak-500">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-heading-lg text-walnut-900">
          {title}
        </h3>
        {children ? (
          <div className="text-body-md text-charcoal-700">{children}</div>
        ) : null}
        {footer ? <div className="mt-auto pt-4">{footer}</div> : null}
      </div>
    </article>
  );
}

export default Card;
