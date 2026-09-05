// Site-wide chrome data (header nav, footer) shared across all deltagroupnc.com pages.

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}
export interface FooterLink {
  label: string;
  href: string;
}

const SHARED = "/sites/deltagroupnc-com-daf29435/shared/images";
export const LOGO = `${SHARED}/Delta-Construction-Logo-LONGWAYS.png`;
export const FOOTER_BG = `${SHARED}/footer-image.jpg`;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Residential Construction", href: "/residential-construction.html" },
      { label: "Restaurant Construction", href: "/restaurant-construction.html" },
      { label: "Nail Salon Projects", href: "/nail-salon-construction.html" },
      { label: "Commercial Projects", href: "/commercial-construction.html" },
    ],
  },
  { label: "Design/Build", href: "/design-build" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER = {
  about: {
    title: "About Us",
    phone: "(919) 822-2922",
    email: "admin@deltagroupnc.com",
    address: "3107 Glen Royal Road, Raleigh, NC 27617",
    website: "www.deltagroupnc.com",
    hours: "Monday - Friday : 9:00 am - 5:00 pm",
  },
  projects: {
    title: "Projects",
    links: [
      { label: "Restaurant", href: "/restaurant-construction.html" },
      { label: "Nails Salon", href: "/nail-salon-construction.html" },
      { label: "Hotel", href: "/commercial-construction.html" },
      { label: "Mall Center", href: "/commercial-construction.html" },
      { label: "Spa", href: "/nail-salon-construction.html" },
    ] as FooterLink[],
  },
  menu: {
    title: "Menu",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Design/Build", href: "/design-build" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ] as FooterLink[],
  },
  fanpage: {
    title: "Fanpage Faebook",
    pageName: "Delta Construction",
    followers: "910 followers",
    updated: "about a week ago",
  },
  bottomNav: [
    { label: "HOME", href: "/" },
    { label: "BLOG", href: "/blog" },
    { label: "ABOUT", href: "/about" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "DESIGN/BUILD", href: "/design-build" },
    { label: "CONTACT", href: "/contact" },
  ] as FooterLink[],
  copyright: "Copyright 2026 © Deltagroupnc.com",
};
