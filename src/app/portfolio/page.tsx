import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { WorkIndex } from "@/components/delta/work/WorkIndex";
import { PROJECTS } from "@/components/delta/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Every Delta Construction Group project across North Carolina — restaurants, salons, commercial fit-outs and residential builds, documented photo by photo.",
};

const HERO = "/sites/deltagroupnc-com-daf29435/portfolio-a872f251/images/technical-drawing-gd0af38b3f_1920.jpg";
const PHOTOS = PROJECTS.reduce((n, p) => n + p.photos, 0);

export default function PortfolioPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Portfolio"
        title="Every build, on the record."
        lead="We photograph our jobs from demo through punch list. Browse the whole catalogue below — no renders, no stock photography, just finished work you can go stand inside."
        image={HERO}
        crumbs={[{ label: "Work", href: "/portfolio" }]}
        meta={[
          { label: "Projects", value: `${PROJECTS.length}` },
          { label: "Photographs", value: PHOTOS.toLocaleString() },
          { label: "Sectors", value: "4" },
          { label: "Since", value: "2000" },
        ]}
      />
      <WorkIndex />
    </Shell>
  );
}
