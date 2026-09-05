import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Section";
import { Reveal } from "../fx/Reveal";

/** Interior-page hero: dimmed photograph, blueprint floor, oversized title. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
  meta,
  size = "default",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  crumbs?: { label: string; href: string }[];
  meta?: { label: string; value: string }[];
  size?: "default" | "tall";
}) {
  return (
    <section
      className={cn(
        "d-grain relative flex items-end overflow-hidden bg-ink pt-[92px]",
        size === "tall" ? "min-h-[78vh]" : "min-h-[62vh]",
      )}
    >
      {image ? (
        <div aria-hidden className="absolute inset-0">
          <Image src={image} alt="" fill priority sizes="100vw" className="scale-105 object-cover" />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_20%_0%,transparent,rgba(8,8,10,0.96)_75%)]" />
        </div>
      ) : (
        <div aria-hidden className="d-grid absolute inset-0 opacity-70" />
      )}
      <div aria-hidden className="d-stage pointer-events-none absolute inset-x-0 bottom-0 h-[34vh]">
        <div className="d-floor absolute inset-0" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-signal/15 blur-[140px]"
      />

      <Container className="relative pb-16 pt-14 lg:pb-20">
        {crumbs.length ? (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-[12px] text-ash">
              <Link href="/" className="hover:text-bone">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-white/25" strokeWidth={1.5} />
                  <Link href={c.href} className="hover:text-bone">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        ) : null}

        {eyebrow ? (
          <Reveal delay={60}>
            <span className="d-eyebrow flex items-center gap-3 text-signal">
              <span aria-hidden className="h-px w-8 bg-signal/70" />
              {eyebrow}
            </span>
          </Reveal>
        ) : null}

        <Reveal delay={120}>
          <h1 className="d-display mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] text-bone">{title}</h1>
        </Reveal>

        {lead ? (
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-[17px] leading-[1.8] text-ash">{lead}</p>
          </Reveal>
        ) : null}

        {meta?.length ? (
          <Reveal delay={280}>
            <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-white/10 pt-8">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-technical text-[10px] uppercase tracking-[0.18em] text-ash">{m.label}</dt>
                  <dd className="d-display mt-2 text-[24px] text-bone">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
