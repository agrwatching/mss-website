// src/data/layanan.ts
export type Layanan = { slug: string; judul: string; ringkasan: string; ikon: string };

// TODO: sesuaikan dengan layanan, paket, dan cakupan wilayah yang sebenarnya
export const layanan: Layanan[] = [
  {
    slug: "internet",
    judul: "Layanan Internet (ISP)",
    ringkasan: "Koneksi internet untuk rumah, sekolah, dan instansi.",
    ikon: "📡",
  },
  {
    slug: "instansi",
    judul: "Solusi untuk Instansi",
    ringkasan: "Perencanaan dan dukungan jaringan untuk kantor, sekolah, dan organisasi.",
    ikon: "🏢",
  },
  {
    slug: "edukasi",
    judul: "Edukasi & Pelatihan",
    ringkasan: "Pelatihan teknologi untuk guru dan siswa, dibawakan langsung oleh trainer expert.",
    ikon: "🎓",
  },
];