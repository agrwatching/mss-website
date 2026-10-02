// src/lib/galeri.ts
import fs from "node:fs";
import path from "node:path";

const EKSTENSI = /\.(jpe?g|png|webp|avif|gif)$/i;

export function getGaleri(): string[] {
  const dir = path.join(process.cwd(), "public", "galeri");

  try {
    return fs
      .readdirSync(dir)
      .filter((f) => EKSTENSI.test(f))
      .sort((a, b) => a.localeCompare(b, "id", { numeric: true }))
      .map((f) => `/galeri/${encodeURIComponent(f)}`);
  } catch {
    return []; // folder belum ada
  }
}