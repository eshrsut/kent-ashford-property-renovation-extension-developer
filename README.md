# Mori Developers — website

A Next.js (App Router, TypeScript, Tailwind CSS v4) marketing site for a
construction, renovation and extension business covering **London, East
Kent and Kent**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## What's in here

- `src/app/` — pages: home, `/services` (+ a page per service via
  `/services/[slug]`), `/areas`, `/projects`, `/about`, `/contact`.
- `src/components/` — shared UI: header/footer, hero, service cards, the
  contact form, the WhatsApp button, etc.
- `src/data/` — all editable content: `site.ts` (business name, phone,
  email, address, social links), `services.ts`, `areas.ts`, `projects.ts`.
  Edit these files to change text content — you shouldn't need to touch the
  page components for everyday content changes.

## SEO setup

- `src/data/towns.ts` lists every town/area the business covers (Ashford and
  its surrounding villages, East Kent, the rest of Kent, and nearby London
  boroughs). Each town automatically gets its own landing page at
  `/areas/<town>` (e.g. `/areas/ashford`, `/areas/bromley`), targeting
  searches like "builders in Ashford". Add or remove towns in that one file.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from every service and town page.
- Structured data (`GeneralContractor` JSON-LD) is injected in
  `src/app/layout.tsx` and lists every town as an `areaServed` value.
- **Ranking well on Google also depends on things outside the code**: a
  verified Google Business Profile, real customer reviews, a few quality
  backlinks, and genuine project photos. On-page SEO (this site) is the
  foundation, not the whole job.

## Before this goes live, update:

- **`src/data/site.ts` → `url`** — set this to your real domain once you
  have one; it drives the sitemap, canonical links and social previews.
- **`src/data/site.ts`** — business address and opening hours are still
  placeholders (phone and email are already set to the real ones you gave).
- **`src/data/site.ts` → `social`** — all social links are currently `"#"`
  dummy placeholders. Replace with your real Facebook/Instagram/YouTube/
  TikTok/X/LinkedIn URLs.
- **Photos** — every image on the site is a labelled sample placeholder.
  See [`IMAGE_PROMPTS.md`](./IMAGE_PROMPTS.md) for an AI-image prompt for
  every slot, and for a quick guide on swapping in real project photos.
- **`src/components/Testimonials.tsx`** — replace the placeholder reviews
  with real customer quotes once you have them.
- **Contact form** — currently opens the visitor's email app with the
  enquiry pre-filled (no backend/API keys needed). If you'd rather have
  submissions sent silently in the background, wire it up to a form
  backend such as Formspree, Resend, or a custom API route.

## Tech notes

- Tailwind v4 is configured via `@import "tailwindcss"` in
  `src/app/globals.css` — there's no `tailwind.config.js`.
- Sample photos are served from `picsum.photos` (a stable public
  placeholder-image service) through `next/image`; the allowed remote host
  is configured in `next.config.ts`.
