import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const technical = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deltagroupnc.com"),
  title: {
    default: "Delta Construction Group — Design/Build Contractor in Raleigh, NC",
    template: "%s — Delta Construction Group",
  },
  description:
    "Delta Construction Group designs, permits and builds restaurants, salons, retail and residential projects across North Carolina. 58 completed builds since 2000. Experience and integrity is our main focus.",
  openGraph: {
    title: "Delta Construction Group — Design/Build Contractor in Raleigh, NC",
    description:
      "Restaurants, salons, storefronts and clubhouses — designed, permitted and built by one accountable team since 2000.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${technical.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-body text-bone">{children}</body>
    </html>
  );
}
