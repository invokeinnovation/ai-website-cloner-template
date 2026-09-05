"use client";

import { useEffect, type RefObject } from "react";

/**
 * Fires `onEnter` the first time `ref` reaches the viewport.
 *
 * IntersectionObserver callbacks are throttled to nothing while a document is
 * hidden (background tab, offscreen embed), which would leave reveal-animated
 * content permanently at opacity 0. The scroll/visibility fallback below covers
 * that case with a cheap geometry check.
 */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  onEnter: () => void,
  { threshold = 0.18, margin = "0px 0px -8% 0px" }: { threshold?: number; margin?: string } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      cleanup();
      onEnter();
    };

    const geometryCheck = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) fire();
    };

    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) fire();
        },
        { threshold, rootMargin: margin },
      );
      io.observe(el);
    } else {
      geometryCheck();
    }

    const onScroll = () => {
      if (document.hidden) geometryCheck();
    };
    document.addEventListener("visibilitychange", geometryCheck);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (document.hidden) geometryCheck();

    function cleanup() {
      io?.disconnect();
      document.removeEventListener("visibilitychange", geometryCheck);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, [ref, onEnter, threshold, margin]);
}
