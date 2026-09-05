import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { AboutContent } from "@/components/delta/pages/AboutContent";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Delta Construction has been a reliable Raleigh construction company since 2000 — personalized service, competitive rates and a focus on customer satisfaction.",
};

const HERO = "/sites/deltagroupnc-com-daf29435/root-8a5edab2/images/20220314_152551328_iOS-scaled.jpg";

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="The studio"
        title="Twenty-five years of building North Carolina."
        lead="A Raleigh construction company with design, permitting and construction under one roof — and a habit of photographing every square foot we finish."
        image={HERO}
        crumbs={[{ label: "Studio", href: "/about" }]}
      />
      <AboutContent />
    </Shell>
  );
}
