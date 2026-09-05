"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, CATEGORIES } from "../data/projects";
import { Container } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";

type Filter = "All" | (typeof CATEGORIES)[number];

const FILTERS: Filter[] = ["All", ...CATEGORIES];

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div aria-hidden className="d-grid absolute inset-0 opacity-50" />
      <Container className="relative">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-8">
          {FILTERS.map((f) => {
            const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "group flex items-center gap-2 rounded-full border px-5 py-2.5 font-technical text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
                  filter === f
                    ? "border-signal bg-signal text-white"
                    : "border-white/12 text-ash hover:border-white/35 hover:text-bone",
                )}
              >
                {f}
                <span className={cn("text-[10px]", filter === f ? "text-white/70" : "text-white/35")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} variant="depth" delay={Math.min(i, 8) * 60}>
              <TiltCard className="group h-full" max={6}>
                <Link
                  href={p.href}
                  className="block overflow-hidden rounded-[22px] border border-white/10 bg-ink-2"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={`${p.name} — ${p.category.toLowerCase()} construction by Delta`}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      loading={i < 6 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 font-technical text-[9px] uppercase tracking-[0.16em] text-bone">
                      {p.category}
                    </span>
                  </span>
                  <span className="flex items-start justify-between gap-4 p-6">
                    <span className="block">
                      <span className="d-display block text-[19px] text-bone">{p.name}</span>
                      <span className="mt-1.5 block text-[13px] text-ash">{p.location}</span>
                    </span>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-bone transition-colors duration-300 group-hover:border-signal group-hover:bg-signal">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
