import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: "/Users/m/Documents/Github/software-house",
  },
};

export default nextConfig;
