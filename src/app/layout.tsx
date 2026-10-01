// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site } from "@/data/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

const judul = `${site.name} | Internet, Jaringan & Edukasi`;

export const metadata: Metadata = {
  title: {
    default: judul,
    template: `%s | ${site.short}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: judul,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: judul,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a3bd1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}