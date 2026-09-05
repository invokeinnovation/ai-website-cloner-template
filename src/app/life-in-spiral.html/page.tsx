import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ArticleContent } from "@/components/delta/pages/ArticleContent";
import { ARTICLES } from "@/components/sites/deltagroupnc-com-daf29435/blog-8caafe43/articles";

const SLUG = "life-in-spiral" as const;

export const metadata: Metadata = {
  title: "Life In Spiral",
  description: "The story of America's only double-octagon house and the octagon-house craze of the 1850s.",
};

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow={`Journal · ${ARTICLES[SLUG].date}`}
        title="Life In Spiral"
        crumbs={[{ label: "Journal", href: "/blog" }]}
      />
      <ArticleContent slug={SLUG} />
    </Shell>
  );
}
