import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ProjectGallery } from "@/components/delta/gallery/ProjectGallery";
import type { GalleryManifest } from "@/components/sites/deltagroupnc-com-daf29435/shared/gallery-types";
import manifest from "@/components/sites/deltagroupnc-com-daf29435/nail-salon-construction-html-1c54b6a2/gallery.json";

export const metadata: Metadata = {
  title: "Salon & Spa Projects",
  description: "Nail salon and spa construction by Delta Construction Group — twenty completed salon buildouts across North Carolina.",
};

const IMG_BASE = "/sites/deltagroupnc-com-daf29435/nail-salon-construction-html-1c54b6a2/images";
const M = manifest as GalleryManifest;
const PHOTOS = M.groups.reduce((n, g) => n + g.images.length, 0);

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Sector 02"
        title="Salon & Spa Projects"
        lead="The specialty that built our reputation: pedicure plumbing, dedicated ventilation, custom cabinetry and finishes that photograph as well as they wear."
        crumbs={[
          { label: "Work", href: "/portfolio" },
          { label: "Salon & Spa Projects", href: "/nail-salon-construction.html" },
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
