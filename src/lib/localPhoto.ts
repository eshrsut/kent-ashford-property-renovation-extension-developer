import fs from "node:fs";
import path from "node:path";
import { basePath } from "./basePath";

const extensions = ["jpg", "jpeg", "png", "webp"];

function findFile(category: string, baseName: string): string | undefined {
  for (const ext of extensions) {
    const relative = `images/${category}/${baseName}.${ext}`;
    const absolute = path.join(process.cwd(), "public", relative);
    if (fs.existsSync(absolute)) {
      return `${basePath}/${relative}`;
    }
  }
  return undefined;
}

/**
 * Looks for `public/images/<category>/<slug>.<jpg|jpeg|png|webp>` at build
 * time and returns its site-relative URL if found, otherwise undefined.
 */
export function localPhoto(category: string, slug: string): string | undefined {
  return findFile(category, slug);
}

/**
 * Like `localPhoto`, but supports multiple photos per slug: the first is
 * `<slug>.<ext>`, additional ones are `<slug>-2.<ext>`, `<slug>-3.<ext>`,
 * etc. (gaps stop the search). Returns an empty array if none are found —
 * callers should fall back to a sample photo.
 */
export function localPhotos(category: string, slug: string, max = 12): string[] {
  const found: string[] = [];
  const first = findFile(category, slug);
  if (!first) return found;
  found.push(first);

  for (let i = 2; i <= max; i++) {
    const next = findFile(category, `${slug}-${i}`);
    if (!next) break;
    found.push(next);
  }
  return found;
}

/**
 * Looks for `public/images/<category>/<slug>-before.<ext>` — pairs with
 * the main `<slug>.<ext>` photo as the "after" shot for a before/after
 * slider. Returns undefined unless both a before and an after photo exist.
 */
export function localBeforeAfter(
  category: string,
  slug: string
): { before: string; after: string } | undefined {
  const before = findFile(category, `${slug}-before`);
  const after = findFile(category, slug);
  if (!before || !after) return undefined;
  return { before, after };
}
