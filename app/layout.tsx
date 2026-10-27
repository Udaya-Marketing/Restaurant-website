import type { Metadata } from "next";
import { Instrument_Serif, Figtree, Noto_Serif_Tamil } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { RestaurantJsonLd } from "@/components/shared/json-ld";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Authentic South Indian & Chettinad Restaurant in Chennai`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "South Indian restaurant in Chennai",
    "authentic Tamil Nadu food",
    "Chettinad restaurant Chennai",
    "banana leaf meals",
    "best dosa and idli Chennai",
    "kothu parotta Anna Nagar",
    "filter coffee Chennai",
    "traditional Tamil meals",
    "Madurai kari dosai",
    "seeraga samba biryani",
  ],
  authors: [{ name: "Chef Muthuvel V." }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  openGraph: {
    title: `${siteConfig.name} · Tamil Nadu on a Banana Leaf`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · Tamil Nadu on a Banana Leaf`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${figtree.variable} ${notoSerifTamil.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body bg-[#FAF7F2] text-[#18110B] min-h-screen flex flex-col selection:bg-accent selection:text-white">
        {/* Restaurant Structured Data (JSON-LD) */}
        <RestaurantJsonLd />

        {/* 1. Sticky Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* 10. Footer */}
        <Footer />
      </body>
    </html>
  );
}
