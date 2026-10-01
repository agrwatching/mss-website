export type Artikel = {
  judul: string;
  slug: string;
  ringkasan: string;
  gambar: string | null;
  tanggal: string;
  url: string;
  sumber: string;
};

export type ArtikelDetail = Artikel & {
  konten: string;
  menit: number;
};