import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `standalone` bundles a self-contained server for Docker/self-hosting. Vercel
  // runs its own output tracing and the two collide there — the build fails
  // looking for .next/next-server.js.nft.json — so only opt in off-Vercel.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
};

export default nextConfig;
