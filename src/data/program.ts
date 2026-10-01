// src/data/program.ts  (khusus program pelatihan/edukasi)
export type Program = { slug: string; judul: string; ringkasan: string; ikon: string };

// TODO: ganti dengan daftar topik pelatihan asli dari klien
export const program: Program[] = [
  { slug: "jaringan-komputer", judul: "Dasar Jaringan Komputer", ringkasan: "Konsep jaringan, perangkat, dan praktik konfigurasi dasar untuk guru dan siswa.", ikon: "🌐" },
  { slug: "literasi-digital", judul: "Literasi Digital", ringkasan: "Pemanfaatan teknologi secara aman dan produktif dalam pembelajaran.", ikon: "💻" },
  { slug: "keamanan-siber", judul: "Keamanan Siber Dasar", ringkasan: "Mengenal ancaman umum dan cara melindungi data serta perangkat.", ikon: "🛡️" },
  { slug: "praktik-teknisi", judul: "Praktik Teknisi Jaringan", ringkasan: "Pelatihan praktik pemasangan dan perawatan perangkat jaringan.", ikon: "🛠️" },
];