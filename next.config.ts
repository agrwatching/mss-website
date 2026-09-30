import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  // Hanya berlaku saat `next dev`. Wildcard mencakup semua IP jaringan lokal.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],

  images: {
    remotePatterns: isDev
      ? [{ protocol: "https", hostname: "**" }] // dev: semua host boleh
      : [
          // produksi: hanya host yang dipercaya
          { protocol: "https", hostname: "blogger.googleusercontent.com" },
          { protocol: "https", hostname: "**.bp.blogspot.com" },
          { protocol: "https", hostname: "cdn-icons-gif.flaticon.com" },
          { protocol: "https", hostname: "peeringdb-media-prod.s3.amazonaws.com" },
          { protocol: "https", hostname: "blogger.googleusercontent.com" },
          { protocol: "https", hostname: "**.bp.blogspot.com" },
        ],
  },
};

export default nextConfig;