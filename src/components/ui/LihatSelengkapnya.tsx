import { Button } from "./Button";

export function LihatSelengkapnya({ href, label = "Lihat selengkapnya" }: { href: string; label?: string }) {
  return (
    <Button href={href} variant="outlineBlue" arrow>
      {label}
    </Button>
  );
}
