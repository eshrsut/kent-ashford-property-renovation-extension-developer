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
    "https://images.pexels.com/photos/32050401/pexels-photo-32050401.jpeg",
  ],
  "building-structural": [
    "https://images.pexels.com/photos/9969055/pexels-photo-9969055.jpeg",
    "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg",
    "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg",
    "https://images.pexels.com/photos/30081237/pexels-photo-30081237.jpeg",
  ],
  "kitchens-bathrooms": [
    "https://images.pexels.com/photos/15861553/pexels-photo-15861553.jpeg",
    "https://images.pexels.com/photos/7031617/pexels-photo-7031617.jpeg",
  ],
  "interior-finishing": [
    "https://images.pexels.com/photos/23358344/pexels-photo-23358344.jpeg",
    "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg",
    "https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg",
    "https://images.pexels.com/photos/13657362/pexels-photo-13657362.jpeg",
  ],
  "plumbing-electrical-heating": [
    "https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg",
    "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
    "https://images.pexels.com/photos/35290675/pexels-photo-35290675.jpeg",
  ],
  "property-maintenance": [
    "https://images.pexels.com/photos/5768284/pexels-photo-5768284.jpeg",
    "https://images.pexels.com/photos/38524262/pexels-photo-38524262.jpeg",
    "https://images.pexels.com/photos/5767799/pexels-photo-5767799.jpeg",
  ],
  // Kept for the homepage hero/team/progress slots, which aren't tied to a division.
  team: [
    "https://images.pexels.com/photos/34670929/pexels-photo-34670929.jpeg",
    "https://images.pexels.com/photos/11293626/pexels-photo-11293626.jpeg",
  ],
};

export function curatedPhotosFor(topic: string): string[] {
  return curatedPhotos[topic] ?? [];
}
