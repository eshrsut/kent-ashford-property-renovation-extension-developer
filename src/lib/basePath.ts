// GitHub Pages serves this site from /<repo-name>/, not the domain root.
// The deploy workflow sets GITHUB_PAGES=true only for that build, so local
// dev and a future Cloudflare/custom-domain deploy stay prefix-free.
export const basePath = process.env.GITHUB_PAGES
  ? "/kent-ashford-property-renovation-extension-developer"
  : "";
