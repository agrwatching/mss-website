// src/lib/partner.ts
import fs from "node:fs";
import path from "node:path";

const EKSTENSI = /\.(jpe?g|png|webp|avif|svg)$/i;

export type LogoPartner = { src: string; nama: string };

export function getLogoPartner(): LogoPartner[] {
  const dir = path.join(process.cwd(), "public", "parthnership");

  try {
    return fs
      .readdirSync(dir)
      .filter((f) => EKSTENSI.test(f))
      .sort((a, b) => a.localeCompare(b, "id", { numeric: true }))
      .map((file) => ({
        src: `/parthnership/${encodeURIComponent(file)}`,
        nama: file.replace(EKSTENSI, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim(),
      }));
  } catch {
    return []; // folder belum ada
  }
}