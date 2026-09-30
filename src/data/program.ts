// src/data/program.ts
export type Program = { slug: string; judul: string; ringkasan: string; ikon: string };

export const program: Program[] = [
  { slug: "topik-1", judul: "TODO Topik Pelatihan 1", ringkasan: "TODO ringkasan singkat.", ikon: "🎓" },
  { slug: "topik-2", judul: "TODO Topik Pelatihan 2", ringkasan: "TODO ringkasan singkat.", ikon: "💻" },
  { slug: "topik-3", judul: "TODO Topik Pelatihan 3", ringkasan: "TODO ringkasan singkat.", ikon: "🛠️" },
  { slug: "topik-4", judul: "TODO Topik Pelatihan 4", ringkasan: "TODO ringkasan singkat.", ikon: "📡" },
];