// src/data/mitra.ts
export type KategoriMitra = "Sekolah" | "Instansi" | "Perusahaan";

export type Mitra = {
  slug: string;
  nama: string;
  kategori: KategoriMitra;
  kota?: string;
  logo?: string;
  website?: string;
};

// TODO: ganti dengan mitra asli dari klien
export const mitra: Mitra[] = [
  { slug: "1", nama: "PT Teknomedia Edukasi Nusantara", kategori: "Perusahaan", kota: "Karawang", logo: "https://www.teknomedia.info/_next/image?url=%2Fteknomedia.png&w=96&q=75", website: "https://www.teknomedia.info" },
  { slug: "2", nama: "PT Alpamedia Solusi Indo", kategori: "Perusahaan", kota: "Jakarta Pusat", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9D2C7q1g-DQVvuj0v_6Vo9mJRjlwvxXSwI_XNL0VkQ&s=10", website: "https://alphamedianusasolusindo.com" },
  { slug: "3", nama: "PT VAIOTECH LINTAS NUSANTARA", kategori: "Perusahaan", kota: "Karawang", logo: "https://vtnet.id/assets/images/logo-29032024.png", website: "https://vtnet.id/" },
];