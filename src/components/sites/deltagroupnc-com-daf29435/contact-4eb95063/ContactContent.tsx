"use client";

import { useState } from "react";
import Image from "next/image";
import { LOGO } from "../shared/site-data";

const IMG = "/sites/deltagroupnc-com-daf29435/contact-4eb95063/images";

function InfoCard({
  icon,
  title,
  text,
  action,
}: {
  icon: string;
  title: string;
  text: string;
  action: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white px-8 py-12 text-center shadow-sm">
      <Image src={icon} alt="" width={80} height={80} className="h-16 w-16 object-contain" />
      <h3 className="mt-6 text-[22px] font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 max-w-[360px] text-[15.6px] text-[#777777]">{text}</p>
      <span className="mt-6 inline-block rounded bg-neutral-900 px-6 py-3 text-[14px] font-bold uppercase tracking-wide text-white">
        {action}
      </span>
    </div>
  );
}

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[420px] w-full">
          <Image src={`${IMG}/contact-hero.jpg`} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-[38px] font-bold text-white sm:text-[44px]">Get in touch</h1>
            <p className="mt-3 max-w-[640px] text-[16px] text-white/90">
              Want to get in touch? We&rsquo;d love to hear from you. Here&rsquo;s how you can reach us&hellip;
            </p>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#f4f6f6]">
        <div className="mx-auto grid w-full max-w-[1170px] grid-cols-1 gap-8 px-[15px] py-16 md:grid-cols-2">
          <InfoCard
            icon={`${IMG}/icon-phone.png`}
            title="Talk to sales"
            text="Interested in our work? Just pick up the phone and call us."
            action="(919) 822-2922"
          />
          <InfoCard
            icon={`${IMG}/icon-chat.png`}
            title="Contact support"
            text="Sometimes you need a little help. Don't worry, We're here for you."
            action="ADMIN@DELTAGROUPNC.COM"
          />
        </div>
      </section>

      {/* Message form */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1170px] px-[15px] py-16">
          <h2 className="text-center text-[38px] font-bold text-neutral-900">Send us a message</h2>
          <div className="mx-auto mt-4 h-0.5 w-[50px] bg-[#ee171f]" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mx-auto mt-10 max-w-[640px] border border-neutral-200 p-8 shadow-sm"
          >
            <div className="mb-8 flex justify-center">
              <Image src={LOGO} alt="Delta Construction" width={608} height={152} className="h-14 w-auto" />
            </div>

            <div className="space-y-5">
              <Field label="Name" required>
                <input type="text" name="name" className="delta-input" />
              </Field>
              <Field label="Email">
                <input type="email" name="email" className="delta-input" />
              </Field>
              <Field label="Phone">
                <input type="tel" name="phone" className="delta-input" />
              </Field>
              <Field label="Address" required>
                <textarea name="address" rows={3} className="delta-input resize-y" />
              </Field>
              <Field label="Attachments">
                <input type="file" name="files" className="block w-full text-[14px] text-neutral-600" />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded bg-[#ee171f] px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#c8121a]"
            >
              Submit
            </button>
            {submitted && (
              <p className="mt-4 text-center text-[14px] text-green-600">
                Thanks! This is a static demo — no message was sent.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[14px] font-bold text-neutral-700">
        {label}
        {required && <span className="text-[#ee171f]">*</span>}
      </span>
      {children}
    </label>
  );
}
