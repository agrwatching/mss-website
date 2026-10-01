// src/data/dokumentasi.ts
export type Dokumentasi = { src: string; alt: string; judul?: string };

// TODO: samakan alt dan judul dengan foto asli
export const dokumentasi: Dokumentasi[] = [
  { src: "/images/galeri/kegiatan-1.jpg", alt: "Pelatihan teknologi di sekolah", judul: "Pelatihan di Sekolah" },
  { src: "/images/galeri/kegiatan-2.jpg", alt: "Workshop bersama siswa", judul: "Workshop Siswa" },
  { src: "/images/galeri/kegiatan-3.jpg", alt: "Sesi praktik jaringan", judul: "Sesi Praktik" },
  { src: "/images/galeri/kegiatan-4.jpg", alt: "Kunjungan ke instansi mitra", judul: "Kunjungan Mitra" },
  { src: "/images/galeri/kegiatan-5.jpg", alt: "Pelatihan untuk guru", judul: "Pelatihan Guru" },
  { src: "/images/galeri/kegiatan-6.jpg", alt: "Penyerahan sertifikat pelatihan", judul: "Penyerahan Sertifikat" },
];