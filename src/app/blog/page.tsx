import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { JournalContent } from "@/components/delta/pages/JournalContent";

export const metadata: Metadata = {
  title: "Journal",
  description: "News, project logs and notes on architecture from Delta Construction Group in Raleigh, NC.",
};

export default function BlogPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Journal"
        title="Notes from the site."
        lead="Project logs, industry reading and the occasional detour into architecture we admire."
        crumbs={[{ label: "Journal", href: "/blog" }]}
      />
      <JournalContent />
    </Shell>
  );
}
