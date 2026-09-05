import type { Metadata } from "next";
import { Shell } from "@/components/delta/layout/Shell";
import { PageHero } from "@/components/delta/layout/PageHero";
import { ContactContent } from "@/components/delta/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call (919) 822-2922 or email admin@deltagroupnc.com to schedule a site walk with Delta Construction Group in Raleigh, NC.",
};

const HERO = "/sites/deltagroupnc-com-daf29435/contact-4eb95063/images/contact-hero.jpg";

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contact"
        title="Come see a job in progress."
        lead="Want to get in touch? We'd love to hear from you — here's how to reach the office."
        image={HERO}
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactContent />
    </Shell>
  );
}
