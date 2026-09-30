// Template dimuat ulang di setiap perpindahan halaman, jadi animasi ini jadi transisi antar halaman.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page">{children}</div>;
}
