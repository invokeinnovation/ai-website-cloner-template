// Canonical business data for the redesigned Delta Construction Group site.
// Content is the client's own — pulled from the live deltagroupnc.com.

export const COMPANY = {
  name: "Delta Construction Group",
  shortName: "Delta",
  tagline: "Experience and integrity is our main focus",
  since: 2000,
  phone: "(919) 822-2922",
  phoneHref: "tel:+19198222922",
  officePhone: "(919) 263-4910",
  officePhoneHref: "tel:+19192634910",
  email: "admin@deltagroupnc.com",
  address: "3107 Glen Royal Road, Raleigh, NC 27617",
  city: "Raleigh, North Carolina",
  hours: "Monday – Friday · 9:00am – 5:00pm",
  website: "deltagroupnc.com",
};

export const LOGO = "/sites/deltagroupnc-com-daf29435/shared/images/Delta-Construction-Logo-LONGWAYS.png";

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
}

export const NAV: { label: string; href: string; children?: NavLink[] }[] = [
  { label: "Studio", href: "/about" },
  {
    label: "Work",
    href: "/portfolio",
    children: [
      { label: "All Projects", href: "/portfolio", desc: "58 completed builds across NC" },
      { label: "Restaurant", href: "/restaurant-construction.html", desc: "Kitchens, bars, dining rooms" },
      { label: "Salon & Spa", href: "/nail-salon-construction.html", desc: "Nail bars, spas, studios" },
      { label: "Commercial", href: "/commercial-construction.html", desc: "Retail, office, worship, medical" },
      { label: "Residential", href: "/residential-construction.html", desc: "Homes and clubhouses" },
    ],
  },
  { label: "Design/Build", href: "/design-build" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 58, suffix: "+", label: "Projects delivered", note: "Restaurant, retail, salon, residential" },
  { value: 25, suffix: " yrs", label: "Building in the Triangle", note: `Established ${COMPANY.since}` },
  { value: 1324, suffix: "", label: "Documented site photos", note: "Every build, start to finish" },
  { value: 100, suffix: "%", label: "Self-performed oversight", note: "One team, start to handover" },
];

export const CAPABILITIES = [
  {
    id: "restaurant",
    index: "01",
    title: "Restaurant Construction",
    href: "/restaurant-construction.html",
    blurb:
      "Full kitchens, hoods, grease traps, bars and dining rooms — built to pass health and fire inspection the first time.",
    points: ["Commercial kitchen fit-out", "Hood & MEP coordination", "Bar and millwork", "Health dept. sign-off"],
  },
  {
    id: "salon",
    index: "02",
    title: "Salon & Spa Buildouts",
    href: "/nail-salon-construction.html",
    blurb:
      "The specialty that built our reputation: pedicure plumbing, ventilation and finishes that photograph as well as they wear.",
    points: ["Pedi-spa plumbing", "Dedicated ventilation", "Custom cabinetry", "Mall landlord coordination"],
  },
  {
    id: "commercial",
    index: "03",
    title: "Commercial & Retail",
    href: "/commercial-construction.html",
    blurb:
      "Dark-shell to turnkey for offices, studios, clinics, churches and mall tenants across North Carolina.",
    points: ["Dark shell to turnkey", "ADA & code compliance", "Tenant improvement", "Multi-site rollouts"],
  },
  {
    id: "residential",
    index: "04",
    title: "Residential & Clubhouse",
    href: "/residential-construction.html",
    blurb:
      "Custom homes, lake properties and amenity clubhouses built with the same schedule discipline as our commercial work.",
    points: ["Custom homes", "Amenity clubhouses", "Renovation & additions", "Owner's-rep support"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Site walk",
    body: "We walk your space with you, talk through what the business actually needs, and tell you plainly what the shell will and won't allow.",
  },
  {
    step: "02",
    title: "Design & drawings",
    body: "In-house architectural drawings and engineering services take the guesswork out of permitting — one team responsible for the whole set.",
  },
  {
    step: "03",
    title: "Permits & pricing",
    body: "A single, itemized number backed by our own subcontractor network. No surprise allowances buried in the back of the proposal.",
  },
  {
    step: "04",
    title: "Build",
    body: "Self-performed oversight, weekly photo updates, and one superintendent who answers the phone from demo through punch list.",
  },
  {
    step: "05",
    title: "Open the doors",
    body: "Inspections cleared, staff walkthrough done, warranty in writing. We hand over a space that is ready to earn money on day one.",
  },
];
