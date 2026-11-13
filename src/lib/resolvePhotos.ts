import { localPhotos } from "./localPhoto";
import { curatedPhotosFor } from "./curatedPhotos";

export type GalleryPhoto = { src: string; alt: string };

export type ResolvedGallery = {
  photos: GalleryPhoto[];
  /** True when showing a sample/curated photo rather than a real upload. */
  isSample: boolean;
};

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Resolves the photo(s) to show for one slot. Real uploads in
 * `public/images/<category>/` always win (see localPhoto.ts for the
 * naming convention); otherwise falls back to a curated, topically
 * relevant sample photo, or a random one if no curated match exists.
 *
 * `singleCurated` picks just one photo from the curated pool, chosen
 * deterministically from `seed`, instead of showing the whole pool as a
 * gallery — for pages generated in bulk (e.g. one per town) where
 * every page showing the identical full set would look too templated.
 */
export function resolveGallery(opts: {
  category: string;
  slug: string;
  alt: string;
  topic?: string;
  seed: string;
  singleCurated?: boolean;
}): ResolvedGallery {
  const real = localPhotos(opts.category, opts.slug);
  if (real.length > 0) {
    return {
      photos: real.map((src) => ({ src, alt: opts.alt })),
      isSample: false,
    };
  }

  const curated = opts.topic ? curatedPhotosFor(opts.topic) : [];
  let fallbackSrcs: string[];
  if (curated.length > 0 && opts.singleCurated) {
    fallbackSrcs = [curated[hashString(opts.seed) % curated.length]];
  } else if (curated.length > 0) {
    fallbackSrcs = curated;
  } else {
    fallbackSrcs = [`https://picsum.photos/seed/${encodeURIComponent(opts.seed)}/1200/900`];
  }

  return {
    photos: fallbackSrcs.map((src) => ({ src, alt: opts.alt })),
    isSample: true,
  };
}
