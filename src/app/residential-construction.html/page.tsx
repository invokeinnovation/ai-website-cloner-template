import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ProjectGallery } from "@/components/delta/gallery/ProjectGallery";
import type { GalleryManifest } from "@/components/sites/deltagroupnc-com-daf29435/shared/gallery-types";
import manifest from "@/components/sites/deltagroupnc-com-daf29435/residential-construction-html-491a1682/gallery.json";

export const metadata: Metadata = {
  title: "Residential Construction",
  description: "Residential construction by Delta Construction Group — custom homes and clubhouses in North Carolina.",
};

const IMG_BASE = "/sites/deltagroupnc-com-daf29435/residential-construction-html-491a1682/images";
const M = manifest as GalleryManifest;
const PHOTOS = M.groups.reduce((n, g) => n + g.images.length, 0);

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Sector 04"
        title="Residential Construction"
        lead="Custom homes, lake properties and amenity clubhouses built with the same schedule discipline we bring to commercial work."
        crumbs={[
          { label: "Work", href: "/portfolio" },
          { label: "Residential Construction", href: "/residential-construction.html" },
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
