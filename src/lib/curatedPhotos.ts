/**
 * Real, freely-licensed construction/renovation photos (Pexels — free to
 * use, no attribution required) used as sample photos until real project
 * or service photos are uploaded (see src/lib/localPhoto.ts, which takes
 * priority over these whenever a matching file exists). Keyed by division
 * slug (src/data/divisions.ts) since curating one set per individual
 * service would mean dozens of lookups for little real benefit.
 */
export const curatedPhotos: Record<string, string[]> = {
  "roofing-exterior": [
    "https://images.pexels.com/photos/6628274/pexels-photo-6628274.jpeg",
    "https://images.pexels.com/photos/31763538/pexels-photo-31763538.jpeg",
    // Cotswold stone cottage re-roofing, England.
    "https://images.pexels.com/photos/37627331/pexels-photo-37627331.jpeg",
    // Terraced houses with clay pantile roofs, UK.
    "https://images.pexels.com/photos/39060800/pexels-photo-39060800.jpeg",
  ],
  "building-structural": [
    "https://images.pexels.com/photos/9969055/pexels-photo-9969055.jpeg",
    "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg",
    "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg",
    // High-rise site in Wakefield, England.
    "https://images.pexels.com/photos/9746797/pexels-photo-9746797.jpeg",
    // New-build red-brick housing development, Farnham, England.
    "https://images.pexels.com/photos/14078227/pexels-photo-14078227.jpeg",
  ],
  "kitchens-bathrooms": [
    "https://images.pexels.com/photos/15861553/pexels-photo-15861553.jpeg",
    "https://images.pexels.com/photos/7031617/pexels-photo-7031617.jpeg",
    // Modern fitted kitchen, London.
    "https://images.pexels.com/photos/19673895/pexels-photo-19673895.jpeg",
  ],
  "interior-finishing": [
    "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg",
    "https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg",
    "https://images.pexels.com/photos/13657362/pexels-photo-13657362.jpeg",
    "https://images.pexels.com/photos/38561968/pexels-photo-38561968.jpeg",
  ],
  "plumbing-electrical-heating": [
    "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
    "https://images.pexels.com/photos/35290675/pexels-photo-35290675.jpeg",
    "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg",
  ],
  "property-maintenance": [
    "https://images.pexels.com/photos/5768284/pexels-photo-5768284.jpeg",
    "https://images.pexels.com/photos/5767799/pexels-photo-5767799.jpeg",
    // Painting a pub exterior in Marlborough, England.
    "https://images.pexels.com/photos/37796934/pexels-photo-37796934.jpeg",
  ],
  // Kept for the homepage hero/team/progress slots, which aren't tied to a division.
  team: [
    // Construction workers gathered on a London street.
    "https://images.pexels.com/photos/35253961/pexels-photo-35253961.jpeg",
    "https://images.pexels.com/photos/18111292/pexels-photo-18111292.jpeg",
  ],
  // Confirmed UK house/street exteriors for the /areas/[slug] town pages —
  // varied per town (see resolvePhotos.ts) so nearby town pages don't all
  // show the same single image.
  areas: [
    // Contemporary new-build house, Poole.
    "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg",
    // Tudor-style home, Oxford.
    "https://images.pexels.com/photos/37978204/pexels-photo-37978204.jpeg",
    // Victorian terraced houses, Oxford.
    "https://images.pexels.com/photos/35402056/pexels-photo-35402056.jpeg",
    // Cotswold stone cottage, rural England.
    "https://images.pexels.com/photos/33137596/pexels-photo-33137596.jpeg",
    // Loft/dormer extension at dusk, London.
    "https://images.pexels.com/photos/13491115/pexels-photo-13491115.jpeg",
    // Cotswold stone buildings, England.
    "https://images.pexels.com/photos/28111458/pexels-photo-28111458.jpeg",
    // Tudor-style red brick terrace, England.
    "https://images.pexels.com/photos/27094334/pexels-photo-27094334.jpeg",
  ],
};

export function curatedPhotosFor(topic: string): string[] {
  return curatedPhotos[topic] ?? [];
}
