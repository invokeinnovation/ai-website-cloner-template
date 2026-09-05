import type {
  HeroSlide,
  ServiceItem,
  PortfolioItem,
  NavItem,
  FooterLink,
} from "./types";

const IMG = "/sites/deltagroupnc-com-daf29435/root-8a5edab2/images";
export const LOGO = `${IMG}/Delta-Construction-Logo-LONGWAYS.png`;
export const STOREFRONT_ICON = `${IMG}/street-shop-_64.png`;
export const FOOTER_BG = `${IMG}/footer-image.jpg`;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
  { label: "Portfolio", href: "#", hasDropdown: true },
  { label: "Design/Build", href: "#" },
  { label: "Contact", href: "#" },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "West End Clubhouse",
    href: "#",
    image: `${IMG}/20220314_152551328_iOS-scaled.jpg`,
    subtitle: "Experience and Integrity is our main focus",
  },
  {
    title: "New York Nails  Jacksonville Mall",
    href: "#",
    image: `${IMG}/1.png`,
    subtitle: "Experience and Integrity is our main focus",
  },
  {
    title: "Raleigh Crab House  Capital Blvd, Raleigh",
    href: "#",
    image: `${IMG}/r3.png`,
    subtitle: "Experience and Integrity is our main focus",
  },
  {
    title: "Magic Nails  Independence Mall",
    href: "#",
    image: `${IMG}/20210302_134153000_iOS.jpg`,
    subtitle: "Experience and Integrity is our main focus",
  },
];

export const SERVICES: ServiceItem[] = [
  { title: "Residential Construction", iconKind: "residential" },
  { title: "Restaurant Construction", iconKind: "storefront" },
  { title: "Nail Salon Construction", iconKind: "storefront" },
  { title: "Commercial Construction", iconKind: "commercial" },
];

export const PORTFOLIO: PortfolioItem[] = [
  { image: `${IMG}/20211209_142046046_iOS-scaled.jpg`, caption: "Noire The Nail Bar Of Southpoint Mall – Durham" },
  { image: `${IMG}/p2.webp`, caption: "New York Nails – Jacksonville Mall" },
  { image: `${IMG}/m8.webp`, caption: "Milk Lab Tea Shop – Durham" },
  { image: `${IMG}/89.jpeg`, caption: "Gaston Lake – Eatons Crossing" },
  { image: `${IMG}/A2.png`, caption: "Triangle Park Apts Clubhouse – Durham" },
  { image: `${IMG}/14-1.jpeg`, caption: "Thirsty Skull – Brewery Of Siler City" },
  { image: `${IMG}/32.jpeg`, caption: "Noire The Nail Bar Of Southpoint Mall – Durham" },
  { image: `${IMG}/43-1.jpg`, caption: "Nails Rustique Of Cary" },
];

export const WE_ARE_DELTA = {
  heading: "We Are Delta Group",
  paragraphs: [
    "We associate with many partners throughout the country, effectively taking advantage of a network of highly specialized suppliers and subcontractors to achieve our work goals in the most effective way.",
    "DELTA wishes to build strategic cooperative relationships to go further and stronger together. Hurry up and join us !",
  ],
};

export const COMMITMENT = {
  heading: "Our Commitment To You",
  subtitle: "Experience and Integrity is our main focus",
};

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
      { label: "Restaurant", href: "#" },
      { label: "Nails Salon", href: "#" },
      { label: "Hotel", href: "#" },
      { label: "Mall Center", href: "#" },
      { label: "Spa", href: "#" },
    ] as FooterLink[],
  },
  menu: {
    title: "Menu",
    links: [
      { label: "Portfolio", href: "#" },
      { label: "About", href: "#" },
      { label: "Design/Build", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
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
    { label: "BLOG", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "DESIGN/BUILD", href: "#" },
    { label: "CONTACT", href: "#" },
  ] as FooterLink[],
  copyright: "Copyright 2026 © Deltagroupnc.com",
};
