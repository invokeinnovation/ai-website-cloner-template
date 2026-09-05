import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { ARTICLES } from "@/components/sites/deltagroupnc-com-daf29435/blog-8caafe43/articles";

export function ArticleContent({ slug }: { slug: keyof typeof ARTICLES }) {
  const article = ARTICLES[slug];
  const others = Object.entries(ARTICLES).filter(([s]) => s !== slug);

  return (
    <>
      <article className="relative bg-ink pb-24">
        <Container size="wide" className="relative -mt-20">
          <Reveal variant="depth">
            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src={article.image}
                alt={article.title}
                width={1172}
                height={800}
                priority
                sizes="(max-width: 1024px) 96vw, 1400px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>

        <Container size="narrow" className="relative mt-16">
          <div className="space-y-6">
            {article.paras.map((p, i) => (
              <Reveal key={i} delay={Math.min(i, 6) * 50}>
                <p
                  className={
                    i === 0
                      ? "text-[19px] leading-[1.75] text-bone"
                      : "text-[16.5px] leading-[1.9] text-ash"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </article>

      <section className="border-t border-white/8 bg-ink-2 py-20">
        <Container>
          <h2 className="d-eyebrow text-ash">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map(([s, a]) => (
              <Reveal key={s}>
                <Link
                  href={`/${s}.html`}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-ink p-7 transition-colors hover:border-white/25"
                >
                  <span>
                    <span className="font-technical text-[10px] uppercase tracking-[0.18em] text-signal">
                      {a.date}
                    </span>
                    <span className="d-display mt-3 block text-[22px] text-bone">{a.title}</span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 text-bone transition-colors group-hover:border-signal group-hover:bg-signal">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
