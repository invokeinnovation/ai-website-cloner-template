"use client";

import { useEffect } from "react";

/**
 * Locks page scrolling while `locked` is true.
 *
 * `body { overflow: hidden }` alone is not enough: iOS Safari frequently
 * ignores it and, worse, can leave the page unscrollable after it is removed.
 * Pinning the body with `position: fixed` and restoring the scroll offset on
 * release is the behaviour that holds up on mobile Safari.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const y = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      // Restoring position removes the offset, so put the reader back.
      window.scrollTo(0, y);
    };
  }, [locked]);
}
