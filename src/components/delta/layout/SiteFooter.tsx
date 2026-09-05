import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, NAV } from "../data/site";
import { CATEGORIES } from "../data/projects";
import { Container } from "../ui/Section";
import { MagneticButton } from "../ui/Button";
import { Reveal } from "../fx/Reveal";
import { DeltaMark } from "../ui/Wordmark";

/** Lucide v1 dropped brand marks, so the Facebook glyph is inlined. */
function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.92 3.77-3.92 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

const CONTACT = [
  { icon: Phone, label: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: COMPANY.address, href: "https://maps.google.com/?q=3107+Glen+Royal+Road+Raleigh+NC+27617" },
  { icon: Clock, label: COMPANY.hours },
];

export function SiteFooter() {
  return (
    <footer className="d-grain relative overflow-hidden bg-ink text-bone">
      {/* Perspective floor */}
      <div aria-hidden className="d-stage pointer-events-none absolute inset-x-0 bottom-0 h-[520px]">
        <div className="d-floor absolute inset-0" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/18 blur-[130px]"
      />

      {/* Closing CTA */}
      <Container className="relative pb-20 pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <span className="d-eyebrow flex items-center gap-3 text-signal">
                <span aria-hidden className="h-px w-8 bg-signal/70" />
                Next build
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="d-display mt-6 text-[clamp(2.6rem,7vw,5.6rem)]">
                Let&rsquo;s walk
                <br />
                your space.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180} className="lg:pb-4">
            <p className="max-w-md text-[17px] leading-[1.75] text-ash">
              Come see a job in progress before you sign anything. Call the office at{" "}
              <a href={COMPANY.officePhoneHref} className="d-link-wipe text-bone">
                {COMPANY.officePhone}
              </a>{" "}
              and we&rsquo;ll schedule your site walk this week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="ghost">
                See the work
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Link grid */}
      <Container className="relative border-t border-white/8 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-9 text-ink">
                <DeltaMark />
              </span>
              <span className="font-display text-[22px] font-extrabold tracking-[-0.03em]">DELTA</span>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.75] text-ash">
              A Raleigh construction company since {COMPANY.since}. Design, permitting and construction under
              one roof for restaurant, salon, commercial and residential clients across North Carolina.
            </p>
            <a
              href="https://www.facebook.com/deltaconstructionnc"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/12 px-4 py-2.5 text-[13px] text-bone/85 transition-colors hover:border-white/30 hover:text-bone"
            >
              <FacebookGlyph className="h-4 w-4 text-signal" />
              Delta Construction on Facebook
            </a>
          </div>

          <div>
            <h3 className="d-eyebrow text-ash">Navigate</h3>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="d-link-wipe text-[15px] text-bone/85 hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="d-eyebrow text-ash">Sectors</h3>
            <ul className="mt-6 space-y-3">
              {NAV[1].children?.slice(1).map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="d-link-wipe text-[15px] text-bone/85 hover:text-bone">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="d-eyebrow text-ash">Office</h3>
            <ul className="mt-6 space-y-4">
              {CONTACT.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex gap-3 text-[14px] leading-relaxed text-bone/85">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.6} />
                  {href ? (
                    <a href={href} className="d-link-wipe">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark */}
      <div aria-hidden className="relative select-none overflow-hidden">
        <div className="d-display d-stroke-text whitespace-nowrap px-6 text-center text-[clamp(5rem,22vw,19rem)] leading-[0.85] tracking-[-0.05em]">
          DELTA
        </div>
      </div>

      <Container className="relative flex flex-col gap-4 border-t border-white/8 py-7 text-[12px] text-ash sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Delta Construction Group. All rights reserved.</p>
        <p className="font-technical tracking-[0.16em] uppercase">
          {CATEGORIES.join(" · ")}
        </p>
      </Container>
    </footer>
  );
}
