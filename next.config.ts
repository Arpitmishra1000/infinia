import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.16.224.103",
  ],

  serverExternalPackages: [
    "firebase-admin",
  ],

  outputFileTracingIncludes: {
    "/*": ["./public/data/**/*.json"],
  },

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
