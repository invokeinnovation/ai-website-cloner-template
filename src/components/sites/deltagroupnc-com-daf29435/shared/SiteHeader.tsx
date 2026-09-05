"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LOGO, NAV_ITEMS } from "./site-data";
import { SearchIcon, CaretDownIcon } from "./icons";

export function SiteHeader({ activeHref = "/" }: { activeHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-[1001] w-full bg-white">
      <div className="mx-auto flex h-20 w-full max-w-[1170px] items-center justify-between px-[15px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Delta Construction Group">
          <Image src={LOGO} alt="Delta Construction Group" width={608} height={152} priority className="h-[56px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center min-[850px]:flex">
          <ul className="flex items-center">
            {NAV_ITEMS.map((item, i) => {
              const active = item.href === activeHref;
              return (
                <li key={item.label} className="group relative flex items-center">
                  {i > 0 && <span className="mx-[18px] h-3.5 w-px bg-neutral-200" aria-hidden />}
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 py-2.5 text-[14.4px] font-semibold uppercase tracking-[0.288px] transition-colors duration-200 hover:text-[#ee171f]",
                      active ? "text-[#ee171f]" : "text-black",
                    )}
                  >
                    {item.label}
                    {item.children && <CaretDownIcon className="h-2.5 w-2.5" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-1 border-t-2 border-[#ee171f] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            className="block px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-[#ee171f]"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            aria-label="Search"
            className="ml-6 flex h-10 w-10 items-center justify-center rounded-[3px] bg-[#ee171f] text-white transition-colors hover:bg-[#c8121a]"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-[5px] p-2 min-[850px]:hidden"
        >
          <span className="block h-0.5 w-6 bg-black" />
          <span className="block h-0.5 w-6 bg-black" />
          <span className="block h-0.5 w-6 bg-black" />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-neutral-100 bg-white min-[850px]:hidden">
          <ul className="flex flex-col px-[15px] py-2">
            {NAV_ITEMS.map((item) => {
              const active = item.href === activeHref;
              return (
                <li key={item.label} className="border-b border-neutral-100 last:border-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-3 text-[14.4px] font-semibold uppercase tracking-[0.288px]",
                      active ? "text-[#ee171f]" : "text-black",
                    )}
                  >
                    {item.label}
                    {item.children && <CaretDownIcon className="h-2.5 w-2.5" />}
                  </Link>
                  {item.children && (
                    <ul className="pb-2 pl-4">
                      {item.children.slice(1).map((c) => (
                        <li key={c.label}>
                          <Link href={c.href} className="block py-2 text-[12.5px] font-semibold uppercase tracking-wide text-neutral-600">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
