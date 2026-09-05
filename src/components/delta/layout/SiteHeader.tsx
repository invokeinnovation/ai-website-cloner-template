"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY, NAV } from "../data/site";
import { Wordmark } from "../ui/Wordmark";
import { MagneticButton } from "../ui/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [route, setRoute] = useState(pathname);

  // Navigating away closes both menus — adjusted during render rather than in an
  // effect so the overlay never paints on the new page.
  if (route !== pathname) {
    setRoute(pathname);
    setOpen(false);
    setMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/8 bg-ink/85 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
        onMouseLeave={() => setMenu(null)}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[1560px] items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-12",
            scrolled ? "h-[68px]" : "h-[92px]",
          )}
        >
          <Link href="/" aria-label="Delta Construction Group — home" className="shrink-0">
            <Wordmark compact={scrolled} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div key={item.label} onMouseEnter={() => setMenu(item.children ? item.label : null)}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-4 py-2.5 font-body text-[13px] font-medium tracking-[0.02em] transition-colors",
                    isActive(item.href) ? "text-bone" : "text-ash hover:text-bone",
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <span
                      aria-hidden
                      className={cn(
                        "mt-px block h-1 w-1 rounded-full transition-colors",
                        menu === item.label ? "bg-signal" : "bg-white/30",
                      )}
                    />
                  ) : null}
                  {isActive(item.href) ? (
                    <span aria-hidden className="absolute inset-x-4 -bottom-0.5 h-px bg-signal" />
                  ) : null}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 font-technical text-[12px] tracking-[0.1em] text-ash transition-colors hover:text-bone xl:flex"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
              {COMPANY.phone}
            </a>
            <MagneticButton href="/contact" className="hidden px-6 py-3 text-[11px] sm:inline-flex">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-white/40 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {NAV.filter((n) => n.children).map((item) => (
          <div
            key={item.label}
            className={cn(
              "absolute inset-x-0 top-full hidden origin-top border-y border-white/8 bg-ink/95 backdrop-blur-xl transition-all duration-300 lg:block",
              menu === item.label
                ? "pointer-events-auto visible opacity-100"
                : "pointer-events-none invisible -translate-y-2 opacity-0",
            )}
          >
            <div className="mx-auto grid w-full max-w-[1560px] gap-1 px-6 py-8 sm:px-8 lg:grid-cols-5 lg:px-12">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group rounded-2xl border border-transparent p-5 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="flex items-center justify-between font-display text-[17px] font-semibold text-bone">
                    {child.label}
                    <ArrowUpRight className="h-4 w-4 text-signal opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="mt-2 block text-[13px] leading-relaxed text-ash">{child.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="d-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative flex h-[92px] shrink-0 items-center justify-between px-6 sm:px-8">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="relative flex-1 overflow-y-auto px-6 pb-10 sm:px-8">
          {NAV.map((item, i) => (
            <div key={item.label} className="border-b border-white/8">
              <Link
                href={item.href}
                className="flex items-center justify-between py-6 font-display text-[34px] font-bold tracking-[-0.03em] text-bone"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(18px)",
                  transition: "opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1)",
                }}
              >
                {item.label}
                <ArrowUpRight className="h-6 w-6 text-signal" strokeWidth={1.4} />
              </Link>
              {item.children ? (
                <div className="flex flex-wrap gap-x-5 gap-y-2 pb-6">
                  {item.children.slice(1).map((c) => (
                    <Link key={c.href} href={c.href} className="font-technical text-[11px] tracking-[0.16em] text-ash uppercase">
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mt-10 space-y-3">
            <MagneticButton href="/contact" className="w-full">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3.5 font-technical text-[12px] tracking-[0.14em] text-bone"
            >
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              {COMPANY.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
