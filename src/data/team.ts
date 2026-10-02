// src/data/trainer.ts
export type Trainer = {
  slug: string;
  nama: string;
  role: string;
  foto?: string;
  email?: string;
  whatsapp?: string;
  instagram?: string;
  tiktok?: string;
};

export const trainer: Trainer[] = [
  { slug: "1", nama: "tarma", role: "Marketing", foto: "https://cdn.pixabay.com/photo/2022/09/05/04/57/man-7433287_1280.jpg" },
  { slug: "2", nama: "budi", role: "Koordinator", foto: "https://i.pinimg.com/236x/58/12/9d/58129d6a3114591a9b4a64de29132280.jpg" },
  { slug: "3", nama: "siti", role: "akunting", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkhe6ijlxhIz_pj0HT09liDCtnHKuYmcigdow01jGf6V017fYCNzjEEY&s=10" },
  { slug: "4", nama: "toni", role: "software engineer", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPcA7Xiiac-eE-C4RsgazVpVq1i4xI3v3pvbpgEHtS2RrG9csZ2GmyFeD&s=10" },
]; 