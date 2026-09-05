import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";
import { POSTS } from "@/components/sites/deltagroupnc-com-daf29435/blog-8caafe43/blog-data";
import { CAPABILITIES } from "../data/site";
import { PROJECTS } from "../data/projects";

const ARTICLES = POSTS.filter((p) => p.image);

export function JournalContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div aria-hidden className="d-grid absolute inset-0 opacity-50" />
        <Container className="relative">
          <div className="grid gap-8 md:grid-cols-3">
            {ARTICLES.map((post, i) => (
              <Reveal key={post.href} variant="depth" delay={i * 100}>
                <TiltCard className="group h-full" max={6}>
                  <article className="d-3d flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-ink-2">
                    <Link href={post.href} className="relative block aspect-[3/2] overflow-hidden">
                      <Image
                        src={post.image as string}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 92vw, 31vw"
                        className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.06]"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    </Link>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="font-technical text-[10px] uppercase tracking-[0.18em] text-signal">
                        {post.date}
                      </span>
                      <h2 className="d-display mt-4 text-[22px] text-bone">
                        <Link href={post.href} className="transition-colors hover:text-white">
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-3.5 flex-1 text-[15px] leading-[1.8] text-ash">{post.excerpt}</p>
                      ) : null}
                      <Link
                        href={post.href}
                        className="mt-7 inline-flex items-center gap-2 font-technical text-[10px] uppercase tracking-[0.18em] text-bone"
                      >
                        <span className="d-link-wipe">Read</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative bg-ink-2 py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Project logs"
            title="Browse by sector."
            lead={`Every one of our ${PROJECTS.length} builds is photographed and filed by sector.`}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <Link href={c.href} className="group flex h-full flex-col justify-between bg-ink p-8 transition-colors hover:bg-ink-3">
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-signal">
                    {c.index}
                  </span>
                  <span className="mt-10 flex items-end justify-between gap-4">
                    <span className="d-display text-[20px] leading-tight text-bone">{c.title}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ash transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
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
