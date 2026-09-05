export interface GalleryGroup {
  title: string;
  images: string[]; // basenames
}

export interface GalleryManifest {
  route: string;
  hero: string | null;
  title: string | null;
  intro?: string | null;
  label?: string | null;
  postDate?: string | null;
  author?: string | null;
  groups: GalleryGroup[];
}

/** Parse "…-533x400.jpg" → {w,h} for aspect ratio, else a sensible default. */
export function dimsFromName(name: string): { w: number; h: number } {
  const m = name.match(/-(\d{2,4})x(\d{2,4})\.(?:jpg|jpeg|png|webp)$/i);
  if (m) return { w: Number(m[1]), h: Number(m[2]) };
  return { w: 4, h: 3 };
}
