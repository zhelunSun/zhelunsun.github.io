import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages.
 *
 * The site is built at build time into ./out and served as static files.
 * This means no server runtime — image optimization, ISR, and server
 * actions are all unavailable.
 *
 * Repository is intended to be renamed to `zhelunsun.github.io` so that
 * it serves at the root domain (https://zhelunsun.github.io). If the repo
 * keeps its current name `zhelun-website`, set:
 *   basePath: "/zhelun-website",
 *   assetPrefix: "/zhelun-website/",
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // next/image optimizer requires a server; disable for static hosting
    unoptimized: true,
  },
  // Ensure /blog/ resolves correctly on static hosts (directory with index.html)
  trailingSlash: true,
};

export default nextConfig;
