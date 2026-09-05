import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ProjectGallery } from "@/components/delta/gallery/ProjectGallery";
import type { GalleryManifest } from "@/components/sites/deltagroupnc-com-daf29435/shared/gallery-types";
import manifest from "@/components/sites/deltagroupnc-com-daf29435/restaurant-construction-html-bd1f89cf/gallery.json";

export const metadata: Metadata = {
  title: "Restaurant Construction",
  description: "Restaurant construction and kitchen fit-out by Delta Construction Group — 20 completed restaurants, cafés and tea shops across North Carolina.",
};

const IMG_BASE = "/sites/deltagroupnc-com-daf29435/restaurant-construction-html-bd1f89cf/images";
const M = manifest as GalleryManifest;
const PHOTOS = M.groups.reduce((n, g) => n + g.images.length, 0);

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Sector 01"
        title="Restaurant Construction"
        lead="Kitchens, hoods, bars and dining rooms built to open on schedule and pass inspection the first time. Twenty restaurants, cafés and tea shops across the Triangle and beyond."
        crumbs={[
          { label: "Work", href: "/portfolio" },
          { label: "Restaurant Construction", href: "/restaurant-construction.html" },
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
