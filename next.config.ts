import type { NextConfig } from "next";

// Served from the custom domain https://aj.foundation (GitHub Pages), so no base path is needed.
const nextConfig: NextConfig = {
  output: "export",
  // Emit /about/index.html so GitHub Pages serves both /about and /about/ (it redirects the former).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
