import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //*Enabled the domain for image rendering
  images: {
    domains: ["cdn.myanimelist.net"],
  },
};

export default nextConfig;
