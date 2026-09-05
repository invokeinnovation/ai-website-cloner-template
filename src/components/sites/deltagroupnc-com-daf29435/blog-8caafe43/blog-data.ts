const SHARED = "/sites/deltagroupnc-com-daf29435/shared/images";

export interface BlogPost {
  title: string;
  href: string;
  date: string;
  image?: string; // 586x400 card image
  excerpt?: string;
}

export const POSTS: BlogPost[] = [
  { title: "Commercial Projects", href: "/commercial-construction.html", date: "10 March, 2023" },
  { title: "Nail Salon Projects", href: "/nail-salon-construction.html", date: "10 March, 2023" },
  { title: "Residential Construction", href: "/residential-construction.html", date: "10 March, 2023" },
  { title: "Restaurant Construction", href: "/restaurant-construction.html", date: "9 March, 2023" },
  {
    title: "Young Architects",
    href: "/young-architects.html",
    date: "19 February, 2022",
    image: `${SHARED}/blog-image-2-586x400.jpg`,
    excerpt: "Every designer takes their own time to find their style or inspiration. This lot has […]",
  },
  {
    title: "Architecture Now",
    href: "/architecture-now.html",
    date: "19 February, 2022",
    image: `${SHARED}/blog-image-4-586x400.jpg`,
    excerpt: "In a city where many aspects of our social lives are shaped by real estate […]",
  },
  {
    title: "Life In Spiral",
    href: "/life-in-spiral.html",
    date: "19 February, 2022",
    image: `${SHARED}/blog-image-1-586x400.jpg`,
    excerpt:
      "SOURCES: The Folly National Register Nomination, the Historic Columbus archives, and Home for All by […]",
  },
];

export const ABOUT_WIDGET = {
  title: "About Us",
  text: "Delta Construction has been a reliable Raleigh Construction Company since 2000. Being a great service provider means having complete and total confidence in the people providing those services, and we’re proud to have the best pros in the business working with us. With a focus on personalized service, competitive rates, and customer satisfaction, we’re always striving to meet and exceed our high standards and our clients’ expectations.",
};

export interface NewsItem {
  title: string;
  href: string;
  day: string;
  mon: string;
}
export const NEWS: NewsItem[] = [
  { title: "Commercial Projects", href: "/commercial-construction.html", day: "10", mon: "Mar" },
  { title: "Nail Salon Projects", href: "/nail-salon-construction.html", day: "10", mon: "Mar" },
  { title: "Residential Construction", href: "/residential-construction.html", day: "10", mon: "Mar" },
  { title: "Restaurant Construction", href: "/restaurant-construction.html", day: "9", mon: "Mar" },
  { title: "Young Architects", href: "/young-architects.html", day: "19", mon: "Feb" },
];
