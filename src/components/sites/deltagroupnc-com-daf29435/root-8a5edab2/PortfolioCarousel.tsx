"use client";

import { useRef } from "react";
import Image from "next/image";
import { PORTFOLIO, COMMITMENT } from "./content";
import type { PortfolioItem } from "./types";
import { ChevronLeftIcon, SliderChevronRightIcon } from "../shared/icons";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="group relative w-[85vw] shrink-0 snap-start overflow-hidden min-[550px]:w-[calc((100%-1.5rem)/2)] min-[850px]:w-[calc((100%-3rem)/3)]">
      <div className="relative aspect-[16/11] w-full">
        <Image
          src={item.image}
          alt={item.caption}
          fill
          sizes="(max-width: 850px) 85vw, 33vw"
          className="object-cover"
        />
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-[15px] font-semibold leading-snug text-white">{item.caption}</span>
          <span className="h-px w-8 bg-[#ee171f]" />
        </figcaption>
      </div>
    </figure>
  );
}

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByTile = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const tile = track.querySelector("figure");
    const amount = tile ? tile.clientWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#1c1c1c] py-16">
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        <h2 className="text-center text-[26px] font-bold uppercase leading-tight tracking-[1.564px] text-white sm:text-[31.28px] sm:leading-[37.5px]">
          {COMMITMENT.heading}
        </h2>
        <p className="mt-4 text-center text-[15.6px] text-neutral-300">{COMMITMENT.subtitle}</p>
        <div className="mx-auto my-4 h-px w-[50px] bg-[#ee171f]" />

        <div className="relative mt-8">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PORTFOLIO.map((item, i) => (
              <PortfolioCard key={`${item.caption}-${i}`} item={item} />
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByTile(-1)}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/90 transition-colors hover:bg-black/70 sm:-left-4"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByTile(1)}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/90 transition-colors hover:bg-black/70 sm:-right-4"
          >
            <SliderChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
