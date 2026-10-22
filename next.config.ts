import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

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
