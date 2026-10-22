import fs from "node:fs";
import path from "node:path";
import { basePath } from "./basePath";

const extensions = ["jpg", "jpeg", "png", "webp"];

/**
 * Looks for `public/images/<category>/<slug>.<jpg|jpeg|png|webp>` at build
 * time and returns its site-relative URL if found, otherwise undefined
 * (callers should fall back to the sample placeholder photo).
 */
export function localPhoto(category: string, slug: string): string | undefined {
  for (const ext of extensions) {
    const relative = `images/${category}/${slug}.${ext}`;
    const absolute = path.join(process.cwd(), "public", relative);
    if (fs.existsSync(absolute)) {
      return `${basePath}/${relative}`;
    }
  }
  return undefined;
}
