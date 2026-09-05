"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Eyebrow } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";
import { COMPANY, CAPABILITIES } from "../data/site";

const CHANNELS = [
  {
    icon: Phone,
    label: "Talk to the office",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    note: "Interested in our work? Just pick up the phone and call us.",
  },
  {
    icon: Phone,
    label: "Schedule a site walk",
    value: COMPANY.officePhone,
    href: COMPANY.officePhoneHref,
    note: "Come see a job in progress before you commit to anything.",
  },
  {
    icon: Mail,
    label: "Email us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    note: "Send drawings, a scope, or just a description of the space.",
  },
];

const FIELD =
  "w-full rounded-xl border border-white/12 bg-ink-2/70 px-4 py-3.5 text-[15px] text-bone placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-signal";

export function ContactContent() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div aria-hidden className="d-grid absolute inset-0 opacity-50" />

        <Container className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Form */}
          <div>
            <Reveal>
              <Eyebrow>Start a project</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="d-display mt-6 text-[clamp(1.9rem,4vw,3rem)] text-bone">
                Tell us about the space.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.8] text-ash">
                Square footage, the shell you&rsquo;re starting from, and when you want to open. We&rsquo;ll
                come walk it with you.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <form
                className="mt-10 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const body = [
                    `Name: ${data.get("name")}`,
                    `Phone: ${data.get("phone")}`,
                    `Project type: ${data.get("type")}`,
                    `Location: ${data.get("location")}`,
                    "",
                    String(data.get("message") ?? ""),
                  ].join("\n");
                  // No backend on this site — hand the message to the visitor's mail client.
                  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
                    `New project enquiry — ${data.get("name")}`,
                  )}&body=${encodeURIComponent(body)}`;
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={FIELD} />
                  <input name="phone" required placeholder="Phone" className={FIELD} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <select name="type" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Project type
                    </option>
                    {CAPABILITIES.map((c) => (
                      <option key={c.id} value={c.title} className="bg-ink">
                        {c.title}
                      </option>
                    ))}
                    <option value="Other" className="bg-ink">
                      Something else
                    </option>
                  </select>
                  <input name="location" placeholder="City / mall / address" className={FIELD} />
                </div>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you building, and when do you want to open?"
                  className={FIELD}
                />
                <button
                  type="submit"
                  className="d-sheen group inline-flex items-center gap-2.5 rounded-full bg-signal px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_50px_-16px_rgba(232,25,31,0.85)] transition-colors duration-300 hover:bg-signal-hot"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    Send enquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
                <p aria-live="polite" className="text-[13px] text-ash">
                  {sent
                    ? `Your mail app should have opened with the message ready to send to ${COMPANY.email}. If it didn't, call ${COMPANY.phone}.`
                    : `Prefer to talk? Call ${COMPANY.phone} — ${COMPANY.hours}.`}
                </p>
              </form>
            </Reveal>
          </div>

          {/* Channels */}
          <div className="space-y-5">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label + c.value} variant="depth" delay={i * 90}>
                <TiltCard className="group" max={5}>
                  <a
                    href={c.href}
                    className="d-3d flex items-start gap-5 rounded-[22px] border border-white/10 bg-ink-2/80 p-7 transition-colors duration-500 hover:border-white/25"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 text-signal">
                      <c.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="font-technical text-[10px] uppercase tracking-[0.18em] text-ash">
                        {c.label}
                      </span>
                      <span className="d-display mt-2.5 block truncate text-[20px] text-bone">{c.value}</span>
                      <span className="mt-2 block text-[14px] leading-relaxed text-ash">{c.note}</span>
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            ))}

            <Reveal variant="depth" delay={270}>
              <div className="rounded-[22px] border border-white/10 bg-ink-2/80 p-7">
                <span className="font-technical text-[10px] uppercase tracking-[0.18em] text-ash">
                  Office
                </span>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3.5 text-[15px] leading-relaxed text-bone/85">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.6} />
                    <a
                      className="d-link-wipe"
                      href="https://maps.google.com/?q=3107+Glen+Royal+Road+Raleigh+NC+27617"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {COMPANY.address}
                    </a>
                  </li>
                  <li className="flex gap-3.5 text-[15px] leading-relaxed text-bone/85">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.6} />
                    {COMPANY.hours}
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
