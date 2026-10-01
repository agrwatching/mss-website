// src/data/sosial.ts
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export type Sosial = { nama: string; href: string; icon: IconType };

// TODO: ganti dengan akun asli, hapus yang tidak dipakai
export const sosial: Sosial[] = [
  { nama: "Instagram", href: "https://instagram.com/akunmss", icon: FaInstagram },
  { nama: "TikTok", href: "https://tiktok.com/@akunmss", icon: FaTiktok },
  { nama: "X (Twitter)", href: "https://x.com/akunmss", icon: FaXTwitter },
  { nama: "Facebook", href: "https://facebook.com/akunmss", icon: FaFacebookF },
  { nama: "YouTube", href: "https://youtube.com/@akunmss", icon: FaYoutube },
];