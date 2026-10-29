import type { NextConfig } from "next";

// Served from the custom domain https://aj.foundation (GitHub Pages), so no base path is needed.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
