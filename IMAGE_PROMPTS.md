# Photo plan for the website

The live site shows **sample photos** (real, freely-licensed construction
photos from Pexels, labelled "Sample photo — replace" in the corner) so you
can see the layout with real photographic content instead of empty boxes.
Swap them out as you get real project photos — real photos build far more
trust (and rank better in local search) than any stock or AI image.

If you don't have a real photo for a specific service yet, use the prompts
below with an AI image generator (Midjourney, DALL·E / ChatGPT, Adobe
Firefly, Stable Diffusion) as a temporary stand-in.

## How to swap in a real photo — just drop the file in, no code changes

Every photo slot auto-detects a matching file in `public/images/` at build
time (see `src/lib/localPhoto.ts` and `src/lib/resolvePhotos.ts`). Add a
photo named correctly and it replaces the sample automatically:

| Slot | Folder | Filename |
|---|---|---|
| Homepage hero banner | `public/images/hero/` | `banner.jpg` |
| "Project in progress" banner | `public/images/hero/` | `progress.jpg` |
| About page team photo | `public/images/about/` | `team.jpg` |
| A town page (e.g. `/areas/ashford`) | `public/images/areas/` | `<town-slug>.jpg` |
| A service page (e.g. `/services/electrical`) | `public/images/services/` | `<service-slug>.jpg` |
| A project card | `public/images/projects/` | `<project-slug>.jpg` (see that folder's `README.md`) |

- `.jpg`, `.jpeg`, `.png` and `.webp` all work.
- **Multiple photos on one project?** Add `-2`, `-3`, etc.: `<slug>-2.jpg`,
  `<slug>-3.jpg` — they become a clickable gallery with a full-screen
  lightbox automatically.
- After adding files, run `npm run build` to check locally, then commit and
  push — the GitHub Pages workflow redeploys automatically.

## AI prompt tips

- Add `, photorealistic, natural daylight, 35mm photography, no text, no watermark`
  if your generator adds artefacts.
- Generate at a landscape ratio (4:3 or 3:2) to match the site's image slots.
- Keep people out of close-up/face shots — use wide or back-of-frame shots
  of tradespeople to avoid uncanny faces.
- All prompts below already specify "UK" — add a regional detail if you
  want (e.g. "Kent ragstone", "London brick terrace") to match your area.

## Hero / homepage

- **Hero banner** — `"A newly completed modern detached house exterior in the UK, daylight, landscaped front garden"`
- **"Project in progress" banner** — `"A rear single storey house extension under construction with brickwork and bifold door frame, UK"`

## Services, by division

### Roofing & Exterior Works
1. **Roofing** — "A roofer working on a UK pitched roof, replacing tiles, scaffolding visible, clear daytime sky"
2. **Windows & Doors** — "A tradesperson fitting a new uPVC window into a UK house exterior wall, daylight"
3. **Conservatories** — "A modern glass garden room conservatory attached to a UK house, daylight, landscaped garden"
4. **Fencing** — "A builder installing a timber garden fence panel in a UK back garden, daylight"
5. **Driveways & Paving** — "A newly block-paved driveway outside a UK house, clean lines, daylight"
6. **Fascias, Soffits & Guttering** — "A tradesperson on a ladder replacing guttering on a UK house roofline, daylight"
7. **Chimney & Fireplace** — "A brick chimney stack being repointed on a UK rooftop, scaffolding, daylight"
8. **Gardening & Landscaping** — "A landscaped UK garden with new turf and planting borders, daylight"

### Building & Structural Works
9. **New Build** — "A newly completed modern detached house exterior in the UK, daylight, landscaped front garden"
10. **Extensions** — "A rear single storey house extension under construction with brickwork and bifold door frame, UK"
11. **Loft Conversion** — "A dormer loft conversion being built on a UK terraced house roof, scaffolding, daylight"
12. **Conversions** — "A converted garage turned into a home office in a UK house, finished interior, daylight"
13. **Bricklaying & Repointing** — "A bricklayer laying bricks with a trowel and spirit level on a UK building site, daylight"
14. **Groundwork & Foundations** — "Groundworks and foundation trenches being dug on a UK construction site, daylight"
15. **Demolition & Clearance** — "Workers carrying out an internal strip-out demolition inside a UK house renovation, daylight"
16. **Stonemasonry** — "A stonemason repairing stone detailing on a period UK building facade, daylight"
17. **Architectural Services** — "Architectural house plans and drawings laid out on a desk with a pencil and ruler"

### Kitchen & Bathroom Renovations
18. **Kitchen Fitting** — "A tradesperson fitting kitchen cabinets and worktops in a UK home renovation, daylight"
19. **Bathroom Fitting** — "A newly fitted modern UK bathroom with tiling and walk-in shower, daylight"

### Interior Finishing & Renovation
20. **Painting & Decorating** — "A decorator painting an interior wall with a roller in a freshly renovated UK room, daylight"
21. **Carpentry & Joinery** — "A carpenter building fitted wardrobe storage in a UK home renovation, daylight"
22. **Carpets, Lino & Flooring** — "A tradesperson installing engineered wood flooring in a bright renovated UK living room, daylight"
23. **Tiling** — "A tiler laying floor tiles in a UK bathroom renovation, tools and tiles visible, daylight"
24. **Plastering & Rendering** — "A plasterer applying fresh plaster to an interior wall in a UK home renovation, trowel in hand, daylight"
25. **Insulation** — "A tradesperson installing loft insulation in a UK roof space, daylight through roof window"
26. **Restoration & Refurbishment** — "Interior of a UK Victorian terraced house mid-renovation, exposed brick wall, natural light"

### Plumbing, Electrical & Heating
27. **Plumbing** — "A plumber working on pipework under a sink in a UK home, tools visible, daylight"
28. **Electrical** — "An electrician testing a consumer unit/fuse box in a UK home, daylight"
29. **Central Heating** — "A heating engineer servicing a boiler in a UK home utility room, tools and gauges visible"

### Property Maintenance & Repairs
30. **Handyman & General Maintenance** — "A handyman fixing a fitting in a UK home with a cordless drill, tool belt, daylight"

## Projects / portfolio

See `public/images/projects/README.md` for the exact filename to use per
project — it's kept in sync with `src/data/projects.ts`.

## About page

- **Team / site photo** — "A small team of UK builders in branded hi-vis and hard hats standing together on a tidy site, friendly and approachable, daytime"

## Better than AI: a quick real-photo checklist

For every job going forward, grab these on your phone — it takes two minutes
and is worth more than any AI image:

- A "before" wide shot of the room/area, taken from the doorway.
- 2–3 "during" shots showing the trade actually happening — these build the
  most trust.
- A clean "after" shot, same angle as the "before" photo if possible, in
  good daylight with clutter cleared.
- One photo of your van, tools, or team on site for the About/Projects pages.
