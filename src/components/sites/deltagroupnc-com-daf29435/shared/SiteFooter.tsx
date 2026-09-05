import Image from "next/image";
import Link from "next/link";
import { FOOTER, LOGO, FOOTER_BG, type FooterLink } from "./site-data";
import { ChevronRightIcon, FacebookIcon, ShareIcon } from "./icons";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">{children}</h3>
      <span className="mt-2 block h-0.5 w-10 bg-[#ee171f]" />
    </div>
  );
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-1">
      {links.map((link, i) => (
        <li key={`${link.label}-${i}`}>
          <Link
            href={link.href}
            className="group flex items-center gap-2 py-1.5 text-[15px] text-neutral-300 transition-colors hover:text-white"
          >
            <ChevronRightIcon className="h-3 w-3 shrink-0 text-[#ee171f]" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FanpageCard() {
  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-md bg-white text-neutral-800 shadow-sm">
      <div className="flex items-center gap-2 p-3">
        <Image src={LOGO} alt="Delta Construction" width={608} height={152} className="h-6 w-auto" />
        <div className="leading-tight">
          <div className="text-[13px] font-bold text-neutral-900">{FOOTER.fanpage.pageName}</div>
          <div className="text-[11px] text-neutral-500">{FOOTER.fanpage.followers}</div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-100 px-3 py-2">
        <span className="rounded bg-[#1877f2] px-3 py-1 text-[12px] font-semibold text-white">Follow Page</span>
        <span className="flex items-center gap-1 text-[12px] text-neutral-600">
          <ShareIcon className="h-3.5 w-3.5" />
          Share
        </span>
      </div>
      <div className="flex items-center gap-2 border-t border-neutral-100 p-3">
        <Image src={LOGO} alt="" width={608} height={152} className="h-6 w-auto" />
        <div className="flex-1 leading-tight">
          <div className="text-[13px] font-bold text-neutral-900">{FOOTER.fanpage.pageName}</div>
          <div className="text-[11px] text-neutral-500">{FOOTER.fanpage.updated}</div>
        </div>
        <FacebookIcon className="h-5 w-5 text-[#1877f2]" />
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-[#1e1e1e] text-neutral-300">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FOOTER_BG})` }}
        aria-hidden
      />
      <div className="relative">
        <div className="mx-auto grid w-full max-w-[1170px] grid-cols-1 gap-8 px-[15px] py-14 min-[550px]:grid-cols-2 min-[850px]:grid-cols-4">
          <div>
            <ColumnHeading>{FOOTER.about.title}</ColumnHeading>
            <ul className="space-y-4 text-[15px] leading-relaxed text-neutral-300">
              <li>{FOOTER.about.phone}</li>
              <li className="break-words">{FOOTER.about.email}</li>
              <li>{FOOTER.about.address}</li>
              <li>{FOOTER.about.website}</li>
              <li>{FOOTER.about.hours}</li>
            </ul>
          </div>
          <div>
            <ColumnHeading>{FOOTER.projects.title}</ColumnHeading>
            <LinkList links={FOOTER.projects.links} />
          </div>
          <div>
            <ColumnHeading>{FOOTER.menu.title}</ColumnHeading>
            <LinkList links={FOOTER.menu.links} />
          </div>
          <div>
            <ColumnHeading>{FOOTER.fanpage.title}</ColumnHeading>
            <FanpageCard />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center gap-3 px-[15px] py-6 text-center">
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {FOOTER.bottomNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] uppercase tracking-wide text-neutral-300 transition-colors hover:text-[#ee171f]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-[13px] text-neutral-400">{FOOTER.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
