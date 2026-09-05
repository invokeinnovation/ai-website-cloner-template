"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "./icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-6 z-[999] flex h-10 w-10 items-center justify-center rounded-full border border-neutral-400 bg-white/80 text-neutral-600 backdrop-blur transition-all duration-300 hover:border-[#ee171f] hover:text-[#ee171f] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </button>
  );
}

// Shared page shell: header + main + footer + back-to-top.
export { };
