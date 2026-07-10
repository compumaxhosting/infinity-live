import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // Existing rule
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      // NEW rule
      {
        source: "/brick-and-cmu-block-layering",
        destination: "/brownstone-facade-restoration",
        permanent: true, // 308 status for SEO-safe, cache-friendly redirect
      },
      {
        source: "/brownstone-renovation-brooklyn",
        destination: "/brownstone-renovation-brooklyn-ny-brownstone-repair-contractors",
        permanent: true, // 308 status for SEO-safe, cache-friendly redirect
      },
    ];
  },
};

export default nextConfig;
