/**
 * GalleryGrid
 *
 * Renders flooring projects (Req 8.1) as a responsive masonry-style grid. When
 * a project has a real photo `src`, it's shown via next/image; otherwise an
 * elegant wood-tone tile with a caption stands in — so the gallery looks
 * finished today and is photo-ready later. Each tile carries descriptive alt
 * text as its accessible name (Req 8.2, 13.1).
 *
 * Responsive: 1 column on mobile up to 3 on large screens; select tiles span
 * two rows for a dynamic layout. No horizontal scroll at 320px+ (Req 11.4).
 *
 * Requirements: 8.1, 8.2, 13.1, 11.4
 */
import Image from "next/image";
import {
  galleryImages as defaultImages,
  type GalleryImage,
} from "@/lib/data/gallery";
import { galleryPhotos } from "@/lib/data/images";

export interface GalleryGridProps {
  images?: GalleryImage[];
}

export default function GalleryGrid({
  images = defaultImages,
}: GalleryGridProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {images.map((image) => {
        const photo = galleryPhotos[image.id];
        return (
        <li key={image.id}>
          <figure
            className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl shadow-soft ring-1 ring-cream-200 transition-all duration-300 hover:shadow-lift"
            aria-label={photo?.alt ?? image.alt}
          >
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <>
                {/* Wood-tone base */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: image.tone }}
                />
                {/* Grain streaks */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(0,0,0,0.16) 8px, rgba(255,255,255,0.08) 16px)",
                  }}
                />
              </>
            )}

            {/* Bottom scrim for caption legibility (over photo or tile) */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal-900/85 to-transparent"
            />

            <figcaption className="relative z-10 p-5">
              <span className="inline-block rounded-full bg-cream-50/90 px-3 py-1 text-body-sm font-medium text-walnut-900">
                {image.space}
              </span>
              <p className="mt-2 font-display text-heading-md text-cream-50 drop-shadow">
                {image.caption}
              </p>
            </figcaption>
          </figure>
        </li>
        );
      })}
    </ul>
  );
}
