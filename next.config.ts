import type { NextConfig } from "next";

// GitHub Pages serves a project site from https://<user>.github.io/<repo>/,
// not from the domain root, so every internal link and asset needs that
// repo-name prefix. The deploy workflow sets GITHUB_PAGES=true only when
// building for GitHub Pages — local dev and a future Cloudflare/custom
// domain deploy stay prefix-free.
const basePath = process.env.GITHUB_PAGES
  ? "/kent-ashford-property-renovation-extension-developer"
  : "";

const nextConfig: NextConfig = {
  /* config options here */
  // Static export: builds to plain HTML/CSS/JS in `out/`, deployable to
  // GitHub Pages, Cloudflare Pages, or any static host with no server.
  output: "export",
  basePath,
  images: {
    // Next's server-side image optimizer needs a server, which a static
    // export doesn't have. Sample photos already come pre-sized from
    // picsum.photos, so this is a safe tradeoff.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
