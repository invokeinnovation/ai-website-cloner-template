"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HERO_SLIDES } from "./content";
import { ChevronLeftIcon, SliderChevronRightIcon } from "../shared/icons";

const AUTOPLAY_MS = 4000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = HERO_SLIDES.length;

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
  }, [count]);

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [start]);

  const go = (next: number) => {
    setIndex((next + count) % count);
    start();
  };

  return (
    <section className="relative h-[440px] w-full overflow-hidden bg-black sm:h-[591px]">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[18px] px-6 text-center">
            <h2 className="max-w-4xl text-[24px] font-bold uppercase leading-tight tracking-[1.564px] text-white sm:text-[31.28px] sm:leading-[37.5px]">
              {slide.title}
            </h2>
            <a
              href={slide.href}
              className="inline-flex min-h-[38.8px] items-center rounded-[99px] border-2 border-[#f1f1f1] px-[18.6px] text-[15.52px] font-bold uppercase tracking-[0.466px] text-[#f1f1f1] transition-colors duration-300 hover:bg-white hover:text-neutral-900"
            >
              Click Here
            </a>
            <p className="text-[15.6px] text-white">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:left-8"
      >
        <ChevronLeftIcon className="h-9 w-9 sm:h-12 sm:w-12" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:right-8"
      >
        <SliderChevronRightIcon className="h-9 w-9 sm:h-12 sm:w-12" />
      </button>
    </section>
  );
}
