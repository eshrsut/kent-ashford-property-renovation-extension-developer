import { localPhotos } from "./localPhoto";
import { curatedPhotosFor } from "./curatedPhotos";

export type GalleryPhoto = { src: string; alt: string };

export type ResolvedGallery = {
  photos: GalleryPhoto[];
  /** True when showing a sample/curated photo rather than a real upload. */
  isSample: boolean;
};

/**
 * Resolves the photo(s) to show for one slot. Real uploads in
 * `public/images/<category>/` always win (see localPhoto.ts for the
 * naming convention); otherwise falls back to a curated, topically
 * relevant sample photo, or a random one if no curated match exists.
 */
export function resolveGallery(opts: {
  category: string;
  slug: string;
  alt: string;
  topic?: string;
  seed: string;
}): ResolvedGallery {
  const real = localPhotos(opts.category, opts.slug);
  if (real.length > 0) {
    return {
      photos: real.map((src) => ({ src, alt: opts.alt })),
      isSample: false,
    };
  }

  const curated = opts.topic ? curatedPhotosFor(opts.topic) : [];
  const fallbackSrcs =
    curated.length > 0
      ? curated
      : [`https://picsum.photos/seed/${encodeURIComponent(opts.seed)}/1200/900`];

  return {
    photos: fallbackSrcs.map((src) => ({ src, alt: opts.alt })),
    isSample: true,
  };
}
