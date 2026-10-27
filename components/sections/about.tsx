"use client";

import React from "react";
import Image from "next/image";
import { PillLabel, StickerBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#FAF7F2] text-pine overflow-hidden">
      {/* Decorative background flourishes */}
      <div
        className="absolute top-12 right-0 w-96 h-96 bg-accent/8 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pill Label */}
        <div className="flex justify-center sm:justify-start mb-6">
          <PillLabel variant="dark">Our Heritage &amp; Roots · பாரம்பரியம்</PillLabel>
        </div>

        {/* Section Heading */}
        <h2 className="headline-section font-serif text-left max-w-3xl">
          Crafting memory through <span className="text-accent italic font-normal">ancestral spices</span> and the living kitchens of Tamil Nadu.
        </h2>

        {/* Large Statement Paragraph with Muted Words and Small Circular Inline Food Images */}
        <div className="mt-10 sm:mt-14 text-2xl sm:text-3xl lg:text-4xl font-serif font-light leading-[1.48] sm:leading-[1.42] text-[#1E2B25]">
          <p>
            At Annam, food is a sacred homecoming. Every dawn begins with the rhythmic thrum of
            {" "}
            <span className="inline-flex items-center align-middle mx-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-accent/40 relative shadow-sm shrink-0">
              <Image
                src="/images/inline-stone-grinder.svg"
                alt="Traditional stone grinder"
                fill
                className="object-cover"
              />
            </span>
            {" "}
            <span className="text-pine font-normal">stone grinders (aattukal)</span> turning naturally fermented
            indigenous rice batters, coaxing depth from whole spices
            {" "}
            <span className="inline-flex items-center align-middle mx-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-emerald-600/40 relative shadow-sm shrink-0">
              <Image
                src="/images/inline-forage.svg"
                alt="Fresh banana leaf harvest"
                fill
                className="object-cover"
              />
            </span>
            {" "}
            <span className="text-[#7A8780]">hand-pounded in iron mortars</span>, simmered with cold-pressed
            sesame and coconut oils across the legendary kitchens of Chettinad, Kongunadu, Madurai, and Thanjavur,
            {" "}
            <span className="inline-flex items-center align-middle mx-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-600/40 relative shadow-sm shrink-0">
              <Image
                src="/images/inline-filter-kaapi.svg"
                alt="Brass filter kaapi tumbler"
                fill
                className="object-cover"
              />
            </span>
            {" "}
            and finished with <span className="text-accent italic">frothing Kumbakonam degree filter kaapi</span>.
            We do not take shortcuts; <span className="text-pine font-medium">we honor our grandmothers&apos; timeless recipes.</span>
          </p>
        </div>

        {/* 3 Slightly Rotated Sticker Badges */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-start gap-4 sm:gap-6 pt-4">
          <StickerBadge
            label="Authentic Chettinad Spices"
            icon="flame"
            rotation="-rotate-2"
          />
          <StickerBadge
            label="Served on Banana Leaf"
            icon="leaf"
            rotation="rotate-2"
          />
          <StickerBadge
            label="Family Recipes Since 1978"
            icon="award"
            rotation="-rotate-1"
          />
        </div>

        {/* "Learn more" Button */}
        <div className="mt-12 sm:mt-14 pt-4 border-t border-[#E5DCCD] flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-[#4E443B] max-w-md">
            Discover the culinary story of Chef Muthuvel, our Pollachi coconut growers, Thanjavur delta farmers, and the sacred spirit of Tamil hospitality.
          </p>
          <Button
            href="/about"
            variant="secondary"
            size="md"
            withArrow
            className="shadow-sm"
          >
            Our Story &amp; Heritage
          </Button>
        </div>
      </div>
    </section>
  );
}
