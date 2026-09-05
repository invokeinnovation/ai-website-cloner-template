import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ArticleContent } from "@/components/delta/pages/ArticleContent";
import { ARTICLES } from "@/components/sites/deltagroupnc-com-daf29435/blog-8caafe43/articles";

const SLUG = "architecture-now" as const;

export const metadata: Metadata = {
  title: "Architecture Now",
  description: "New York, New Publics — twelve projects reimagining public-facing space across New York City.",
};

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow={`Journal · ${ARTICLES[SLUG].date}`}
        title="Architecture Now"
        crumbs={[{ label: "Journal", href: "/blog" }]}
      />
      <ArticleContent slug={SLUG} />
    </Shell>
  );
}
