/**
 * Real, freely-licensed construction/renovation photos (Pexels — free to
 * use, no attribution required) used as sample photos until real project
 * photos are uploaded (see src/lib/localPhoto.ts, which takes priority
 * over these whenever a matching file exists).
 */
export const curatedPhotos: Record<string, string> = {
  "new-build-homes":
    "https://images.pexels.com/photos/4832530/pexels-photo-4832530.jpeg",
  extensions: "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg",
  "roof-loft-conversions":
    "https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg",
  "renovation-refurbishment":
    "https://images.pexels.com/photos/23358344/pexels-photo-23358344.jpeg",
  "painting-decorating":
    "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg",
  flooring: "https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg",
  "general-building":
    "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg",
  team: "https://images.pexels.com/photos/34670929/pexels-photo-34670929.jpeg",
};

export function curatedPhoto(topic: string): string | undefined {
  return curatedPhotos[topic];
}
