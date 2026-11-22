/* =========================================================
   CEO
   ========================================================= */
export type CeoNilai = {
  judul: string;
  ikon: "globe" | "bulb" | "users" | "chart";
};

export type Ceo = {
  nama: string; // kosongkan kalau nama tidak ingin ditampilkan
  jabatan: string;
  foto?: string;
  sambutan: string;
  kutipan: string;
  nilai: CeoNilai[];
};

export const ceo: Ceo = {
  nama: "",
  jabatan: "CEO PT. Media Solusi Sukses",
  foto: "/team/ceo.png",
  sambutan:
    "CEO PT. Media Solusi Sukses (MSS) berkomitmen untuk menghadirkan solusi teknologi informasi dan jaringan internet yang inovatif, andal, dan berkelanjutan. Melalui kepemimpinan yang visioner serta kolaborasi strategis dengan dunia industri dan pendidikan, MSS terus mendorong transformasi digital, meningkatkan kualitas layanan, dan mengembangkan sumber daya manusia yang kompeten serta siap menghadapi tantangan era digital.",
  kutipan:
    "Membangun konektivitas, menciptakan inovasi, dan menghadirkan solusi untuk masa depan digital Indonesia.",
  nilai: [
    { judul: "Konektivitas Terbaik", ikon: "globe" },
    { judul: "Inovasi Teknologi", ikon: "bulb" },
    { judul: "Pengembangan SDM", ikon: "users" },
    { judul: "Masa Depan Digital", ikon: "chart" },
  ],
};

/* =========================================================
   Tim inti (kartu besar)
   ========================================================= */
export type Inti = {
  slug: string;
  nama: string;
  jabatan: string;
  deskripsi?: string;
  foto?: string;
};

export const inti: Inti[] = [
  {
    slug: "dendi",
    nama: "Dendi, S.Kom",
    jabatan: "Branch Manager",
    deskripsi:
      "Mengembangkan strategi pemasaran layanan internet, membangun kemitraan bisnis, serta memperluas jaringan kerja sama dengan sekolah, perusahaan, dan instansi pemerintah.",
    foto: "/team/dendi.jpeg",
  },
  {
    slug: "pahrudin",
    nama: "Pahrudin, S.T",
    jabatan: "Account Manager All Segment",
    deskripsi:
      "Mengelola hubungan dan kebutuhan pelanggan dari berbagai segmen, menawarkan solusi internet dan teknologi informasi.",
    foto: "/team/pahrudin.jpeg",
  },
  {
    slug: "dewi",
    nama: "Dewi Mulyawati, S.I.Kom",
    jabatan: "Account Manager",
    deskripsi:
      "Mengelola hubungan dan kebutuhan pelanggan bidang pemerintahan dan industri, menyusun proposal penawaran.",
    foto: "/team/dewi.jpeg",
  },
    {
    slug: "tarma",
    nama: "Tarma, S.Kom.",
    jabatan: "Expert Education Sales",
    deskripsi:
      "Mengembangkan dan melaksanakan proyek layanan internet serta program pendampingan industri di SMK, khususnya jurusan Networking dan Teknologi Informasi.",
    foto: "/team/tarma.jpeg",
  },
];

/* =========================================================
   Bagan trainer (rekursif: tambah `anak` untuk level baru)
   ========================================================= */
export type Bagan = {
  slug: string; // harus unik, dipakai sebagai key
  nama: string;
  role?: string;
  foto?: string;
  anak?: Bagan[];
};

export const bagan: Bagan = {
  slug: "tarma-trainer",
  nama: "Tarma",
  role: "Teaching Factory & Mikrotik, Project Industri",
  foto: "/team/trainer/tarma.jpeg",
  anak: [
    { slug: "agra", nama: "Agra", role: "UI/UX & Website", foto: "/team/trainer/agra.jpeg" },
    {
      slug: "yusuf",
      nama: "Yusuf Faisal",
      role: "Virtualisasi Server & IoT",
      foto: "/team/trainer/yusup.jpeg",
      anak: [
        { slug: "jerry", nama: "Jerry Zhonathan", role: "Cloud & Cyber Security", foto: "/team/trainer/jerry.jpeg" },
        { slug: "ahmad", nama: "Ahmad", role: "Motion Graphic & Desain Identitas Visual", foto: "/team/trainer/ahmad.jpeg" },
        { slug: "romi", nama: "Romi Heryana", role: "Konten Media Sosial & Video Promosi", foto: "/team/trainer/romi.jpeg" },
        { slug: "wisnu", nama: "Muhamad Wisnu", role: "AI Coding", foto: "/team/trainer/wisnu.jpeg" },
      ],
    },
    {
      slug: "sumariyantoro",
      nama: "Sumariyantoro",
      role: "Teknologi Jaringan Fiber Optik",
      foto: "/team/trainer/sumariyantoro.jpeg",
    },
  ],
};