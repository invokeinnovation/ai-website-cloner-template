// Content structure types for the deltagroupnc.com home clone.

export interface HeroSlide {
  title: string;
  href: string;
  image: string; // public path
  subtitle: string;
}

export interface ServiceItem {
  title: string;
  /** "svg" = use the named inline icon component; "img" = use image src */
  iconKind: "residential" | "commercial" | "storefront";
}

export interface PortfolioItem {
  image: string; // public path
  caption: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}
