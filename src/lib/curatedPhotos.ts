/**
 * Real, freely-licensed construction/renovation photos (Pexels — free to
 * use, no attribution required) used as sample photos until real project
 * photos are uploaded (see src/lib/localPhoto.ts, which takes priority
 * over these whenever a matching file exists). Several photos per topic
 * so the gallery/lightbox has something to page through before real
 * photos are in place.
 */
export const curatedPhotos: Record<string, string[]> = {
  "new-build-homes": [
    "https://images.pexels.com/photos/4832530/pexels-photo-4832530.jpeg",
    "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg",
  ],
  extensions: [
    "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg",
    "https://images.pexels.com/photos/30924413/pexels-photo-30924413.jpeg",
  ],
  "roof-loft-conversions": [
    "https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg",
    "https://images.pexels.com/photos/31763538/pexels-photo-31763538.jpeg",
    "https://images.pexels.com/photos/32050401/pexels-photo-32050401.jpeg",
  ],
  "renovation-refurbishment": [
    "https://images.pexels.com/photos/23358344/pexels-photo-23358344.jpeg",
    "https://images.pexels.com/photos/4756489/pexels-photo-4756489.jpeg",
    "https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg",
  ],
  "painting-decorating": [
    "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg",
    "https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg",
  ],
  flooring: [
    "https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg",
    "https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg",
  ],
  "general-building": [
    "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg",
    "https://images.pexels.com/photos/30081237/pexels-photo-30081237.jpeg",
    "https://images.pexels.com/photos/4515180/pexels-photo-4515180.jpeg",
  ],
  team: [
    "https://images.pexels.com/photos/34670929/pexels-photo-34670929.jpeg",
    "https://images.pexels.com/photos/11293626/pexels-photo-11293626.jpeg",
  ],
};

export function curatedPhotosFor(topic: string): string[] {
  return curatedPhotos[topic] ?? [];
}
