import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // The brand book used to live at /brand. Anything already sent round keeps
  // working instead of 404ing. Permanent, so it is cached and the old URL stops
  // costing a round trip.
  async redirects() {
    return [{ source: "/brand", destination: "/brandbook", permanent: true }];
  },
};

export default nextConfig;
