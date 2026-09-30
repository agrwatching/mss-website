// src/types/berita.ts
export type Artikel = {
  judul: string;
  slug: string;
  ringkasan: string;
  gambar: string | null;
  tanggal: string; // ISO
  url: string;
  sumber: string;
};