import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { DesignBuildContent } from "@/components/delta/pages/DesignBuildContent";
import { Process } from "@/components/delta/home/Process";

export const metadata: Metadata = {
  title: "Design/Build",
  description:
    "Architectural drawings, engineering and construction under one contract. Delta Construction Group takes the guesswork out of building in North Carolina.",
};

const HERO = "/sites/deltagroupnc-com-daf29435/design-build-9fd280b0/images/Under-Construction.webp";

export default function DesignBuildPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Service"
        title="Design/Build under one contract."
        lead="Drawings, engineering, permitting and construction from a single accountable team — so nothing falls through the gap between the designer and the builder."
        image={HERO}
        crumbs={[{ label: "Design/Build", href: "/design-build" }]}
      />
      <DesignBuildContent />
      <Process />
    </Shell>
  );
}
