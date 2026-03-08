import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services/boiler-repair",
        destination: "/services/boiler-furnace-repair",
        permanent: true,
      },
      {
        source: "/services/furnace-repair",
        destination: "/services/boiler-furnace-repair",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
