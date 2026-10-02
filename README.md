# Website PT. Media Solusi Sukses

Website resmi **PT. Media Solusi Sukses (MSS)**, perusahaan yang menyediakan layanan internet (ISP), solusi jaringan untuk instansi dan perusahaan, serta pelatihan teknologi untuk sekolah, guru, dan siswa.

Website ini berfungsi sebagai pusat informasi perusahaan: pengunjung dapat mengenal layanan dan program, melihat dokumentasi serta mitra, membaca berita, dan menghubungi tim MSS.

## Fitur website

- **Beranda** — ringkasan layanan, keunggulan, program, alur kerja sama, dokumentasi, FAQ, dan ajakan untuk menghubungi MSS.
- **Keunggulan** — informasi nilai dan keunggulan perusahaan.
- **Program** — daftar program pelatihan teknologi.
- **Tim** — profil anggota tim.
- **Mitra** — informasi mitra perusahaan.
- **Dokumentasi** — galeri kegiatan.
- **Berita** — daftar artikel dan halaman detail berita dari Blogger.
- **Kontak** — informasi kontak, lokasi, dan formulir pesan.
- **Tautan WhatsApp** — akses cepat untuk menghubungi perusahaan.
- **Tampilan responsif** — dirancang untuk digunakan pada desktop maupun perangkat seluler.

## Teknologi

- [Next.js](https://nextjs.org/) 16 dengan App Router
- [React](https://react.dev/) 19 dan TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- Google Fonts melalui `next/font`

## Persiapan

Pastikan Node.js dan npm sudah terpasang. Gunakan versi Node.js yang didukung oleh versi Next.js di `package.json`.

1. Clone repository dan masuk ke folder proyek.
2. Pasang dependencies:

   ```bash
   npm install
   ```

3. (Opsional) Siapkan sumber berita Blogger. Buat file `.env.local` di root proyek:

   ```env
   BLOG_URL=https://contoh-blog.blogspot.com
   ```

   Jika menggunakan lebih dari satu blog, pisahkan URL dengan koma:

   ```env
   BLOG_URL=https://blog-satu.blogspot.com,https://blog-dua.blogspot.com
   ```

   Tanpa `BLOG_URL`, website tetap dapat dijalankan, tetapi daftar berita tidak mengambil artikel dari Blogger.

4. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000).

## Perintah yang tersedia

```bash
npm run dev    # menjalankan server pengembangan
npm run lint   # memeriksa kualitas kode dengan ESLint
npm run build  # membuat build produksi
npm run start  # menjalankan build produksi
```

Untuk mencoba mode produksi, jalankan `npm run build`, lalu `npm run start`.

## Mengelola konten

Sebagian besar konten website dikelola melalui berkas data TypeScript di `src/data/`:

| Berkas | Konten |
|---|---|
| `site.ts` | Nama perusahaan, deskripsi, kontak, alamat, dan informasi umum |
| `layanan.ts` | Daftar layanan |
| `program.ts` | Daftar program pelatihan |
| `keunggulan.ts` | Keunggulan perusahaan |
| `team.ts` | Profil tim |
| `mitra.ts` | Daftar mitra |
| `faq.ts` | Pertanyaan dan jawaban umum |
| `navigation.ts` | Menu navigasi utama |
| `sosial.ts` | Tautan media sosial |

Foto dokumentasi dan aset statis lainnya disimpan di `public/`. Sebelum menerbitkan perubahan, pastikan informasi bisnis, tautan, foto, serta wilayah layanan sudah benar dan mendapat persetujuan pihak perusahaan.

### Mengelola berita

Berita diambil dari Blogger melalui URL yang ditentukan pada `BLOG_URL`. Pisahkan beberapa sumber menggunakan koma tanpa perlu menambahkan tanda kutip. Perubahan pada file `.env.local` memerlukan restart server pengembangan. Jangan memasukkan file `.env.local` atau kredensial ke repository.

## Struktur direktori

```text
src/
├── app/          # Halaman dan layout Next.js
├── components/   # Komponen halaman, bagian konten, dan UI
├── data/         # Data perusahaan dan konten situs
├── lib/          # Helper dan konfigurasi
├── services/     # Integrasi pengambilan berita
└── types/        # Definisi tipe TypeScript
public/           # Logo, gambar, galeri, dan aset statis
```

## Catatan untuk pengelola

- Simpan perubahan konten di repository dan tinjau hasilnya di perangkat desktop serta seluler sebelum rilis.
- Uji build produksi dengan `npm run build` sebelum deployment.
- Atur `BLOG_URL` di environment variables platform hosting jika berita Blogger ingin ditampilkan pada deployment.
- Informasi kontak dan akun media sosial yang tampil di website berasal dari data proyek; perbarui jika ada perubahan resmi.
