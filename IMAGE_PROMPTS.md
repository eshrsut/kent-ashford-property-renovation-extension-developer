# Photo plan for the website

The live site currently shows **sample placeholder photos** (via picsum.photos,
labelled "Sample photo — replace" in the corner) so you can see the layout
with real photographic content instead of empty boxes. Swap every one of
these out before the site goes live — real project photos build far more
trust (and rank better in local search) than stock or AI images ever will.

If you don't have enough real project photos yet, use the prompts below with
an AI image generator (Midjourney, DALL·E 3 / ChatGPT, Adobe Firefly, or
Stable Diffusion) as a temporary stand-in. Treat AI images as a placeholder
upgrade, not a permanent solution — plan to photograph your next few jobs
(before/during/after, on your phone is fine) and replace them as you go.

## How to use these prompts

- Add `, photorealistic, natural daylight, 35mm photography, no text, no watermark`
  to any prompt if your generator adds artefacts.
- Generate at a landscape ratio (4:3 or 3:2) to match the site's image slots.
- Keep people out of close-up/face shots if you're using AI images — use
  wide or back-of-frame shots of tradespeople to avoid uncanny faces.
- Where a prompt mentions "UK", add a specific regional detail if you want
  (e.g. "Kent ragstone", "weatherboard cottage", "London brick terrace") to
  better match your actual house styles.

## Where to swap each image in the code

Every sample photo is rendered by `src/components/PlaceholderImage.tsx` and
given a `seed` (used to pick a consistent sample photo) and a `label`
(the description below, shown in the corner tag). To replace one with a real
photo:

1. Add your photo to `public/images/` (e.g. `public/images/extensions-1.jpg`).
2. Swap the `PlaceholderImage` component for a plain `next/image` pointing at
   `/images/extensions-1.jpg`, or extend `PlaceholderImage` to accept a
   `src` override — either is a small change.

## Hero / homepage

- **Hero banner** — `"A newly completed modern detached house in the Kent countryside, red brick and render finish, landscaped front garden, clear blue sky, late afternoon light, professional architectural photography"`
- **"Project in progress" banner** — `"Two builders in hi-vis and hard hats working on a UK house extension site, scaffolding and building materials visible, daytime, documentary-style construction photography"`

## Services

1. **New Build Homes** — `"A newly completed modern detached house in the Kent countryside, red brick and render finish, landscaped front garden, clear blue sky, late afternoon light, professional architectural photography"`
2. **House Extensions** — `"A rear single storey house extension with large bi-fold glass doors opening onto a landscaped garden, builders finishing brickwork, daytime natural light, UK residential architecture"`
3. **Roof & Loft Conversions** — `"A roofer and carpenter working on a dormer loft conversion on a UK terraced house roof, scaffolding visible, clear daytime sky, wide angle construction photography"`
4. **Renovation & Refurbishment** — `"Interior of a house mid-renovation, exposed brick wall being replastered, builder working with trowel, natural light through a window, UK home renovation site"`
5. **Painting & Decorating** — `"A professional decorator in branded workwear painting an interior wall with a roller, drop sheets on the floor, bright freshly decorated room, UK home interior"`
6. **Flooring** — `"Close-up of a tradesperson installing engineered wood flooring planks in a bright renovated living room, tools and offcuts nearby, natural daylight"`
7. **General Building Works** — `"A builder laying bricks on a garden wall with a trowel and spirit level, mortar and bricks stacked nearby, outdoor UK residential setting, daylight"`

## Projects / portfolio

1. **Rear Kitchen Extension, Ashford** — `"Finished open-plan kitchen extension with bi-fold doors onto garden, light wood flooring, modern UK kitchen, daylight"`
2. **Dormer Loft Conversion, Canterbury** — `"New dormer loft conversion bedroom with ensuite, roof windows, neutral decor, UK terraced house interior"`
3. **New Build Family Home, Folkestone** — `"Completed new build four bedroom detached house, brick and render exterior, driveway and landscaped front garden, UK suburb"`
4. **Full Period Property Renovation, Maidstone** — `"Renovated Victorian terraced house living room with restored period features, exposed beams, fresh plaster, UK home interior"`
5. **Exterior Repaint & Render, Whitstable** — `"Freshly painted coastal UK house exterior, pale blue render, clear sky, seaside town street"`
6. **Engineered Wood Flooring Install, Bromley** — `"Bright open-plan London home with newly installed engineered oak flooring, modern furniture, daylight"`

## About page

- **Team / site photo** — `"A small team of UK builders in branded hi-vis and hard hats standing together on a tidy house extension site, friendly and approachable, daytime, documentary-style photography"`

## Better than AI: a quick real-photo checklist

For every job going forward, grab these on your phone — it takes two minutes
and is worth more than any AI image:

- A "before" wide shot of the room/area, taken from the doorway.
- 2–3 "during" shots showing the trade actually happening (brickwork,
  plastering, a roofer on the roof, etc.) — these build the most trust.
- A clean "after" shot, same angle as the "before" photo if possible,
  taken in good daylight with clutter cleared.
- One photo of your van, tools, or team on site for the About/Projects pages.
