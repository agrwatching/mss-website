export type KategoriMitra = "Sekolah" | "Instansi" | "Perusahaan";

export type Mitra = {
  slug: string;
  nama: string;
  kategori: KategoriMitra;
  kota?: string;
  logo?: string;
};

// TODO: ganti dengan mitra asli dari klien
export const mitra: Mitra[] = [
  { slug: "1", nama: "SMK 1 KARAWANG ", kategori: "Sekolah", kota: "Karawang", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW5bz8C2O6joO4w_gDXvo3OLOA5T0_Nltac3a9ZC6zA&s=10",},
  { slug: "2", nama: "SMK 2 KARAWANG", kategori: "Sekolah", kota: "Karawang", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2b_ML5oEtb7ePxgbIVQA_44pLZJWzwvNezX47sZz02mkTvYFQmZQO8DUXiosh7ijNkoW7Y6T8b-q6fcnMduprW3mvAWBGVqQ7pwuTJJ09mbgEha99ZCPDQKH0hZ_9JK75NsEz9Ik5Y2yl/s1600/logo+smkn2krw.png",},
  { slug: "3", nama: "Dinas Pendidikan", kategori: "Instansi", kota: "Karawang", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjG00DRpf9QFwyQpF9xyf0LdD9DzJgb2t1ekE9_MDwtxHBLuFgLcfSIes&s=10",},
  { slug: "4", nama: "Dinas Kesehatan", kategori: "Instansi", kota: "Karawang", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUqfl1-7_i5U_v7q1Clo-jbk6fNgb-z-UI1KFPUOes40x62n6wG03h0-d&s=10",},
  { slug: "5", nama: "PT Teknomedia Edukasi Nusantara", kategori: "Perusahaan", kota: "Karawang", logo: "https://www.teknomedia.info/_next/image?url=%2Fteknomedia.png&w=96&q=75",},
  { slug: "6", nama: "SMK 3 KARAWANG", kategori: "Sekolah", kota: "Karawang", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoRVfiLFVEuCSH29NCB0XYZ5x9rcJi3-20lsEbXpL0ujTUlwQree3JFLQ&s=10",},
];