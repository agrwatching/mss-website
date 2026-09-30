mss/
├── public/ ...                       # (sama seperti sebelumnya)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # LANDING: rangkaian section versi ringkas
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   │
│   │   ├── paket/page.tsx            # semua paket (landing: 3)
│   │   ├── keunggulan/page.tsx       # semua keunggulan (landing: 3)
│   │   ├── sekolah/page.tsx          # semua kerja sama sekolah (landing: 3)
│   │   ├── dokumentasi/page.tsx      # galeri/dokumentasi lengkap (landing: 3)
│   │   ├── cakupan/page.tsx          # area layanan lengkap
│   │   ├── faq/page.tsx              # semua FAQ (landing: 3)
│   │   ├── tentang/page.tsx
│   │   ├── kontak/page.tsx
│   │   │
│   │   └── berita/
│   │       ├── page.tsx              # daftar banyak artikel + pagination (?page=2)
│   │       └── loading.tsx           # skeleton saat memuat
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   │
│   │   ├── sections/                 # dipakai di landing DAN halaman detail
│   │   │   ├── Hero.tsx
│   │   │   ├── Keunggulan.tsx        # prop: limit?  (landing = 3, halaman = semua)
│   │   │   ├── PaketHarga.tsx        # prop: limit?
│   │   │   ├── KerjaSamaSekolah.tsx  # prop: limit?
│   │   │   ├── Dokumentasi.tsx       # prop: limit?
│   │   │   ├── AreaCakupan.tsx
│   │   │   ├── FAQ.tsx               # prop: limit?
│   │   │   ├── CTA.tsx
│   │   │   └── BeritaTerbaru.tsx     # landing: 6 artikel, di atas footer
│   │   │
│   │   ├── berita/
│   │   │   ├── ArtikelCard.tsx
│   │   │   ├── ArtikelGrid.tsx
│   │   │   ├── ArtikelSkeleton.tsx
│   │   │   └── Pagination.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── LihatSelengkapnya.tsx # tombol link standar ke halaman detail
│   │   │   └── Accordion.tsx
│   │   │
│   │   └── effects/
│   │       ├── Reveal.tsx
│   │       ├── CountUp.tsx
│   │       ├── SignalWaves.tsx
│   │       ├── FiberLines.tsx
│   │       ├── GridBackground.tsx
│   │       └── SpeedMeter.tsx
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── paket.ts
│   │   ├── keunggulan.ts
│   │   ├── sekolah.ts
│   │   ├── dokumentasi.ts
│   │   ├── faq.ts
│   │   └── navigation.ts
│   │
│   ├── services/
│   │   └── blog.ts                   # getArtikel({ limit, page }) ambil dari BLOG_URL
│   │
│   ├── hooks/
│   │   ├── useInView.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── env.ts                    # validasi env (BLOG_URL, WA number)
│   │   └── whatsapp.ts
│   │
│   └── types/
│       ├── index.ts
│       └── berita.ts
├── .env
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json