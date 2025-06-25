import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Existing rule
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      // NEW rule
      {
        source: "/brownstone-facade-restoration",
        destination: "/brick-and-cmu-block-layering",
        permanent: true, // 308 status for SEO-safe, cache-friendly redirect
      },
    ];
  },
};

export default nextConfig;
