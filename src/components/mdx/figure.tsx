import { ImageZoom } from "fumadocs-ui/components/image-zoom";

import { cn } from "@/lib/cn";

export type FigureProps = {
  /** Alt text. Describes the image; not shown. */
  alt: string;
  /** Visible caption under the image. Omit for an uncaptioned figure. */
  caption?: string;
  /** Extra classes for the `<figure>`, e.g. a width cap in a grid. */
  className?: string;
  /** Path under `public/`, e.g. `/assets/blog/post-slug/sketch-1.webp`. */
  src: string;
};

/**
 * A captioned, zoomable image.
 *
 * Exists because the galleries it replaces carried both an `alt` and a visible
 * `description`, and a markdown `![alt](src)` can only express one of them —
 * you would lose either the caption or the accessibility text. See ticket 06.
 */
export function Figure({ alt, caption, className, src }: FigureProps) {
  return (
    <figure
      className={cn("my-6 rounded-lg border bg-card/50 p-2", className)}
      data-slot="figure"
    >
      <ImageZoom alt={alt} className="!my-0 rounded object-cover" src={src} />
      {caption ? (
        <figcaption className="mt-2 mb-1 px-1 text-sm/5 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
