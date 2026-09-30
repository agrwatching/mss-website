# Kebutuhan Pengerjaan Website MSS (Trainer Expert untuk Sekolah)

Stack: Next.js 16 (App Router), React 19, Tailwind 4, TypeScript.
Legenda: `[x]` sudah ada, `[ ]` belum. P0 wajib, P1 inti, P2 pelengkap.

---

## 1. Layout global
- [x] Navbar (transparan, blur saat scroll, progres scroll, menu mobile)
- [ ] Navbar: logo baru tanpa tulisan ISP (P0)
- [ ] Navbar: menu sesuai halaman yang sudah jadi (P0)
- [x] Footer (gelombang, kolom menu, kontak)
- [ ] Footer: isi alamat, sosial media, nomor asli (P0)
- [x] WhatsAppFloat
- [x] BackToTop
- [x] Transisi antar halaman (`template.tsx`)
- [x] `layout.tsx` (font, metadata)
- [x] `globals.css` (token warna, keyframes)
- [ ] `PageHeader` untuk judul halaman detail (P1)

## 2. Section landing (urutan tampil)
- [x] Hero
- [ ] Hero: GIF disimpan lokal, label FloatingChips sesuai topik asli (P0)
- [x] Keunggulan (3 + lihat selengkapnya)
- [ ] Program pelatihan (3 + lihat semua) (P1)
- [ ] Trainer expert (3 + lihat semua) (P1)
- [ ] Alur kerja sama, 4 langkah (P1)
- [x] Dokumentasi (isi disesuaikan tema edukasi) (P1)
- [ ] FAQ (3 + lihat semua) (P1)
- [ ] CTA penutup (P1)
- [ ] Berita terbaru, 6 artikel, tepat di atas footer (P1)
- [ ] Statistik dengan CountUp, hanya jika ada data nyata (P2)
- [ ] Testimoni sekolah, hanya jika ada kutipan asli (P2)
- [ ] Logo sekolah mitra (P2)

## 3. Halaman
- [x] `/` beranda
- [ ] `/program` (P1)
- [ ] `/trainer` (P1)
- [ ] `/kontak` (P1)
- [ ] `/berita` + pagination (P1)
- [ ] `/sekolah` (P1)
- [ ] `/dokumentasi` (P2)
- [ ] `/faq` (P2)
- [ ] `/keunggulan` (P2)
- [ ] `/tentang` (P2)
- [ ] `/trainer/[slug]` (P2)
- [ ] `/berita/[slug]`, jika artikel dibuka di web sendiri (P2)
- [ ] `not-found.tsx` (P1)
- [ ] `loading.tsx` untuk `/berita` (P1)

## 4. Berita dari Blogger
- [ ] `.env`: `BLOG_URL=https://smkalhuriyah1.blogspot.com,https://smktecnologiterbaik.blogspot.com`
- [ ] `lib/env.ts`: pecah per koma, rapikan spasi dan slash akhir
- [ ] `types/berita.ts`: judul, slug, ringkasan, gambar, tanggal, url, sumber
- [ ] `services/blog.ts`: fetch `{blog}/feeds/posts/default?alt=json&max-results=50`
- [ ] Gabungkan artikel semua blog, urutkan terbaru, buang duplikat
- [ ] Ambil thumbnail dan ringkasan dari konten HTML
- [ ] Cache `revalidate: 300`
- [ ] `getArtikel({ limit, page })`: landing 6, halaman berita per 9
- [ ] Satu blog gagal, blog lain tetap tampil
- [ ] Semua blog gagal atau env kosong, section disembunyikan tanpa error
- [ ] `ArtikelCard` (badge nama sumber blog)
- [ ] `ArtikelGrid`
- [ ] `ArtikelSkeleton`
- [ ] `Pagination`
- [ ] Keputusan: klik artikel buka di blog asli atau di `/berita/[slug]`

## 5. Komponen UI
- [x] Button (kilau, panah)
- [x] SectionHeading
- [x] LihatSelengkapnya
- [ ] Accordion (untuk FAQ) (P1)
- [ ] Badge (P1)
- [ ] Card dasar (P2)

## 6. Efek animasi
- [x] Reveal (up, left, right, zoom)
- [x] SignalWaves
- [x] GridBackground
- [x] Particles
- [x] Marquee
- [x] FloatingChips
- [x] CountUp
- [x] FiberStreaks (dipakai di footer)

## 7. Data (`src/data/`)
- [x] `site.ts`
- [x] `navigation.ts`
- [x] `keunggulan.ts`
- [x] `dokumentasi.ts`
- [ ] `program.ts` (P1)
- [ ] `trainer.ts` (P1)
- [ ] `faq.ts` (P1)
- [ ] `alur.ts` (P1)
- [ ] `sekolah.ts` versi edukasi (P2)
- [ ] `testimoni.ts` (P2)

## 8. Konfigurasi
- [x] Alias `@/*` ke `./src/*`
- [x] `next.config.ts` (allowedDevOrigins, remotePatterns)
- [ ] Tambah host gambar Blogger di produksi (`blogger.googleusercontent.com`, `**.bp.blogspot.com`)
- [ ] `.env` dan `.env.example`
- [ ] Hapus file sisa ISP: `PaketHarga.tsx`, `data/paket.ts`, `KerjaSamaSekolah.tsx`, `data/sekolah.ts` lama

## 9. SEO dan aksesibilitas
- [ ] `metadata` unik tiap halaman
- [ ] `sitemap.ts` dan `robots.ts`
- [ ] Gambar Open Graph
- [ ] JSON-LD `Organization`
- [ ] Alt text semua gambar, satu `h1` per halaman
- [ ] Fokus keyboard terlihat, kontras cukup

## 10. QA dan rilis
- [ ] Responsif 375px, 768px, 1280px
- [ ] Lighthouse mobile ≥ 90
- [ ] Uji `prefers-reduced-motion`
- [ ] `npm run lint` dan `npm run build` bersih
- [ ] Semua link dan tombol WhatsApp valid
- [ ] Hosting, domain, HTTPS
- [ ] `BLOG_URL` di environment produksi
- [ ] Google Search Console + sitemap

## 11. Konten yang dibutuhkan dari kamu
- [ ] Nomor WhatsApp dan alamat kantor
- [ ] Logo baru (PNG atau SVG transparan)
- [ ] Daftar topik program pelatihan
- [ ] Data trainer: nama, foto, keahlian
- [ ] Foto dokumentasi kegiatan
- [ ] Daftar pertanyaan FAQ
- [ ] Data statistik dan testimoni asli (jika ada)
- [ ] Keputusan artikel: blog asli atau web sendiri

---

## Struktur Projek

Keterangan: `✅` sudah ada, `⬜` belum dibuat, `🗑` hapus.

```
mss/
├── public/
│   ├── logo/                          ⬜ logo baru
│   └── images/
│       ├── hero/                      ⬜ GIF/ilustrasi hero
│       ├── trainer/                   ⬜ foto trainer
│       └── galeri/                    ⬜ foto dokumentasi
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ✅
│   │   ├── template.tsx               ✅
│   │   ├── page.tsx                   ✅ (perlu diperbarui urutan section)
│   │   ├── globals.css                ✅
│   │   ├── not-found.tsx              ⬜
│   │   ├── sitemap.ts                 ⬜
│   │   ├── robots.ts                  ⬜
│   │   ├── program/page.tsx           ⬜
│   │   ├── trainer/
│   │   │   ├── page.tsx               ⬜
│   │   │   └── [slug]/page.tsx        ⬜ (P2)
│   │   ├── sekolah/page.tsx           ⬜
│   │   ├── dokumentasi/page.tsx       ⬜
│   │   ├── faq/page.tsx               ⬜
│   │   ├── keunggulan/page.tsx        ⬜
│   │   ├── tentang/page.tsx           ⬜
│   │   ├── kontak/page.tsx            ⬜
│   │   └── berita/
│   │       ├── page.tsx               ⬜
│   │       ├── loading.tsx            ⬜
│   │       └── [slug]/page.tsx        ⬜ (jika artikel di web sendiri)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             ✅
│   │   │   ├── Footer.tsx             ✅
│   │   │   ├── WhatsAppFloat.tsx      ✅
│   │   │   ├── BackToTop.tsx          ✅
│   │   │   └── PageHeader.tsx         ⬜
│   │   ├── sections/
│   │   │   ├── Hero.tsx               ✅
│   │   │   ├── Keunggulan.tsx         ✅
│   │   │   ├── Program.tsx            ⬜
│   │   │   ├── Trainer.tsx            ⬜
│   │   │   ├── AlurKerjaSama.tsx      ⬜
│   │   │   ├── Dokumentasi.tsx        ✅
│   │   │   ├── FAQ.tsx                ⬜
│   │   │   ├── CTA.tsx                ⬜
│   │   │   ├── BeritaTerbaru.tsx      ⬜
│   │   │   ├── Statistik.tsx          ⬜ (P2)
│   │   │   ├── Testimoni.tsx          ⬜ (P2)
│   │   │   ├── PaketHarga.tsx         🗑
│   │   │   └── KerjaSamaSekolah.tsx   🗑
│   │   ├── berita/
│   │   │   ├── ArtikelCard.tsx        ⬜
│   │   │   ├── ArtikelGrid.tsx        ⬜
│   │   │   ├── ArtikelSkeleton.tsx    ⬜
│   │   │   └── Pagination.tsx         ⬜
│   │   ├── ui/
│   │   │   ├── Button.tsx             ✅
│   │   │   ├── LihatSelengkapnya.tsx  ✅
│   │   │   ├── SectionHeading.tsx     ✅
│   │   │   ├── Accordion.tsx          ⬜
│   │   │   └── Badge.tsx              ⬜
│   │   └── effects/
│   │       ├── Reveal.tsx             ✅
│   │       ├── SignalWaves.tsx        ✅
│   │       ├── GridBackground.tsx     ✅
│   │       ├── Particles.tsx          ✅
│   │       ├── Marquee.tsx            ✅
│   │       ├── FloatingChips.tsx      ✅
│   │       ├── CountUp.tsx            ✅
│   │       └── FiberStreaks.tsx       ✅
│   │
│   ├── data/
│   │   ├── site.ts                    ✅
│   │   ├── navigation.ts              ✅
│   │   ├── keunggulan.ts              ✅
│   │   ├── dokumentasi.ts             ✅
│   │   ├── program.ts                 ⬜
│   │   ├── trainer.ts                 ⬜
│   │   ├── faq.ts                     ⬜
│   │   ├── alur.ts                    ⬜
│   │   ├── paket.ts                   🗑
│   │   └── sekolah.ts                 🗑 (buat ulang versi edukasi jika perlu)
│   │
│   ├── services/
│   │   └── blog.ts                    ⬜
│   ├── hooks/
│   │   └── useInView.ts               ✅
│   ├── lib/
│   │   ├── cn.ts                      ✅
│   │   ├── whatsapp.ts                ✅
│   │   └── env.ts                     ⬜
│   └── types/
│       ├── index.ts                   ⬜
│       └── berita.ts                  ⬜
│
├── .env                               ⬜ BLOG_URL
├── .env.example                       ⬜
├── next.config.ts                     ✅
├── postcss.config.mjs                 ✅
├── tsconfig.json                      ✅
└── package.json                       ✅
```