# Drop real project photos here

Save a photo with the **exact project slug** as the filename (`.jpg`,
`.jpeg`, `.png` or `.webp` all work) and the site will automatically use it
instead of the sample photo — no code changes needed.

**Multiple photos for one project?** Add `-2`, `-3`, etc. after the slug:
`ashford-rear-extension.jpg`, `ashford-rear-extension-2.jpg`,
`ashford-rear-extension-3.jpg`. They'll show as a gallery with thumbnails,
and visitors can click any photo to view it full-screen.

| Project | Filename to use |
|---|---|
| Rear Kitchen Extension, Ashford | `ashford-rear-extension.jpg` |
| Dormer Loft Conversion, Canterbury | `canterbury-loft-conversion.jpg` |
| New Build Family Home, Folkestone | `folkestone-new-build.jpg` |
| Full Period Property Renovation, Maidstone | `maidstone-full-renovation.jpg` |
| Exterior Repaint & Render, Whitstable | `whitstable-exterior-repaint.jpg` |
| Engineered Wood Flooring Install, Bromley | `bromley-flooring-install.jpg` |

Tips:
- Landscape orientation, roughly 1200×900px or larger, works best.
- After adding files, run `npm run build` to check locally, then commit and
  push — the GitHub Pages workflow redeploys automatically.
- Adding a new project entirely? Add it to `src/data/projects.ts` first,
  then drop a photo here named after its `slug`.
