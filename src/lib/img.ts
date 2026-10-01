// src/lib/img.ts
export const isRemote = (u: string) => /^https?:\/\//.test(u);

// Mengubah link share Google Drive biasa jadi link gambar langsung
export function imgSrc(u: string) {
  const m = u.match(/drive\.google\.com\/file\/d\/([^/?]+)/) ?? u.match(/drive\.google\.com\/open\?id=([^&]+)/);
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : u;
}