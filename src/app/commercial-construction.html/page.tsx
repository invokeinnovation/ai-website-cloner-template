import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ProjectGallery } from "@/components/delta/gallery/ProjectGallery";
import type { GalleryManifest } from "@/components/sites/deltagroupnc-com-daf29435/shared/gallery-types";
import manifest from "@/components/sites/deltagroupnc-com-daf29435/commercial-construction-html-1a4582f0/gallery.json";

export const metadata: Metadata = {
  title: "Commercial Projects",
  description: "Commercial construction and tenant improvement by Delta Construction Group across North Carolina.",
};

const IMG_BASE = "/sites/deltagroupnc-com-daf29435/commercial-construction-html-1a4582f0/images";
const M = manifest as GalleryManifest;
const PHOTOS = M.groups.reduce((n, g) => n + g.images.length, 0);

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Sector 03"
        title="Commercial Projects"
        lead="Dark shell to turnkey for studios, clinics, churches, offices and mall tenants — coordinated with landlords, inspectors and your opening date."
        crumbs={[
          { label: "Work", href: "/portfolio" },
          { label: "Commercial Projects", href: "/commercial-construction.html" },
        ]}
        meta={[
          { label: "Projects", value: String(M.groups.length) },
          { label: "Photographs", value: PHOTOS.toLocaleString() },
        ]}
      />
      <ProjectGallery manifest={M} imgBase={IMG_BASE} />
    </Shell>
  );
}
