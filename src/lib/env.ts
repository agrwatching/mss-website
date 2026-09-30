// src/lib/env.ts
export const blogUrls: string[] = (process.env.BLOG_URL ?? "")
  .split(",")
  .map((s) => s.trim().replace(/\/+$/, ""))
  .filter(Boolean);