import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { allMenuItems, sappaduFeast } from "@/content/menu";
import { siteConfig } from "@/lib/site";
import { MenuExplorer } from "./menu-explorer";
import { Sparkles, Utensils, Coffee, Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Menu | Authentic South Indian & Chettinad Food Chennai",
  description:
    "Explore authentic Tamil Nadu food at Annam in Chennai: Ghee Podi Idli, Madurai Kari Dosai, Chettinad Pepper Chicken, Banana Leaf Sappadu, and Kumbakonam Filter Kaapi.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu · ANNAM Chennai | Tamil Nadu on a Banana Leaf",
    description:
      "Explore authentic Tamil Nadu food at Annam: Ghee Podi Idli, Kari Dosai, Chettinad Pepper Chicken, Banana Leaf Sappadu, and Filter Kaapi.",
    url: `${siteConfig.url}/menu`,
  },
};

export default function MenuPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF7F2] text-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Traditional Menu" }]} />

        {/* Page Hero Header */}
        <div className="mt-6 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/5 border border-pine/15 text-xs font-semibold uppercase tracking-[0.20em] text-pine mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>வாழை இலை விருந்து · Pure Tamil Heritage</span>
          </div>

          <h1 className="headline-hero font-serif font-normal text-pine">
            Culinary Offerings <br />
            <span className="italic text-accent">from Tamil Nadu&apos;s Kitchens</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-pine/75 leading-relaxed font-light">
            From the fiery spice mortars of Chettinad and iron tawas of Madurai to the Cauvery
            delta of Thanjavur. Stone-ground batters, pure A2 cow ghee, and cold-pressed oils.
          </p>

          {/* Quick Filter Badges */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap text-xs text-pine/70 font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Dedicated Pure Veg Kitchen Line
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-800 border border-red-500/20">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Country Chicken &amp; Prime Mutton
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Jain Friendly (No Onion / Garlic on request)
            </span>
          </div>
        </div>

        {/* Sappadu Feast Feature Banner Card */}
        <div className="mb-16 rounded-3xl bg-[#122B1E] text-cream p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  The Signature Lunch Experience (12:00 PM – 4:00 PM)
                </span>
              </div>
              <h2 className="headline-section font-serif text-cream">
                {sappaduFeast.title}
              </h2>
              <p className="font-tamil text-sm text-[#C5A059]">
                {sappaduFeast.tamilTitle}
              </p>
              <p className="text-sm sm:text-base text-cream/80 font-light leading-relaxed max-w-xl">
                {sappaduFeast.subtitle}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Button
                  href="/reservations"
                  variant="accent"
                  size="md"
                  withArrow
                >
                  Reserve Banana Leaf Feast
                </Button>
                <span className="text-xs text-cream/60">
                  Served daily with unlimited rice, sambar, rasam &amp; kootu
                </span>
              </div>
            </div>

            {/* Courses / Delicacies List */}
            <div className="lg:col-span-5 bg-black/40 rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold pb-2 border-b border-white/10 flex justify-between items-center">
                <span>The Course Sequence</span>
                <span className="font-mono text-cream font-bold">{sappaduFeast.price}</span>
              </div>
              <div className="space-y-3 pt-1 text-xs sm:text-sm">
                {sappaduFeast.courses.map((c) => (
                  <div key={c.course} className="space-y-0.5">
                    <span className="font-semibold text-accent block">
                      {c.title}
                    </span>
                    <span className="text-cream/65 block font-light leading-snug">
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Menu Explorer with Category Tabs, Veg Filter & Food Cards */}
        <MenuExplorer items={allMenuItems} />
      </div>
    </div>
  );
}
