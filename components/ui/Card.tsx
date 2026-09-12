import type { ReactNode } from "react";
import Image from "next/image";

export interface CardProps {
  /** Card title rendered as an <h3>. */
  title: ReactNode;
  /** Optional eyebrow/label above the title. */
  eyebrow?: ReactNode;
  /** Optional image source under /public. */
  imageSrc?: string;
  /** Alt text; required (and should be descriptive) when imageSrc is set (Req 13.1). */
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
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
 * Card — reusable presentational block. Combines an optional image or a
 * decorative swatch band, an optional eyebrow, a heading, body text, and an
 * optional footer. Styled with brand tokens for a consistent premium aesthetic
 * with a subtle hover lift (Req 14.1).
 */
export function Card({
  title,
  eyebrow,
  imageSrc,
  imageAlt = "",
  imageWidth = 640,
  imageHeight = 360,
  swatch,
  children,
  footer,
  className,
}: CardProps) {
  return (
    <article
      className={[
        "group flex w-full flex-col overflow-hidden rounded-2xl bg-cream-50",
        "shadow-soft ring-1 ring-cream-200 transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-lift",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-auto w-full object-cover"
        />
      ) : swatch ? (
        <div
          aria-hidden="true"
          className="h-28 w-full"
          style={{ background: swatch }}
        />
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
        {footer ? <div className="mt-4">{footer}</div> : null}
      </div>
    </article>
  );
}

export default Card;
