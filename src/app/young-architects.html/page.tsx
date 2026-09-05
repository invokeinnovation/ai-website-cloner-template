import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ArticleContent } from "@/components/delta/pages/ArticleContent";
import { ARTICLES } from "@/components/sites/deltagroupnc-com-daf29435/blog-8caafe43/articles";

const SLUG = "young-architects" as const;

export const metadata: Metadata = {
  title: "Young Architects",
  description: "Ten architects making an impact on architecture and lives at a young age.",
};

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow={`Journal · ${ARTICLES[SLUG].date}`}
        title="Young Architects"
        crumbs={[{ label: "Journal", href: "/blog" }]}
      />
      <ArticleContent slug={SLUG} />
    </Shell>
  );
}
