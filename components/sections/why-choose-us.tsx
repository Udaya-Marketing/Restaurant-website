"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Flame, Sparkles, HeartHandshake } from "lucide-react";
import { whyChooseUsCards } from "@/content/why-choose-us";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  Leaf: Leaf,
  Flame: Flame,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
};

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#100B07] text-cream overflow-hidden">
      {/* Full-bleed Dark Photo Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark-ambiance.svg"
          alt="Annam Traditional Brass Ambiance & Heritage Decor"
          fill
          className="object-cover object-center opacity-85"
          sizes="100vw"
        />
        {/* Soft vignette and contrast gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#100B07]/90 via-[#100B07]/50 to-[#100B07]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          label="The Annam Standard · நமது சிறப்பு"
          title={
            <>
              Why Families &amp; Connoisseurs <br className="hidden sm:inline" />
              <span className="italic text-[#C5A059]">Gather at Our Banana Leaf</span>
            </>
          }
          subtitle="A devotion to culinary purity, stone-ground authenticity, and the timeless 'saapteengala?' spirit of Tamil welcoming."
          align="center"
          theme="dark"
        />

        {/* Four Glassmorphism Cards in Staggered Layout */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUsCards.map((card, idx) => {
            const Icon = iconMap[card.iconName as keyof typeof iconMap] || Sparkles;
            // Stagger cards 2 and 4 down slightly on desktop for an organic layout rhythm
            const staggerClass = idx % 2 === 1 ? "lg:translate-y-8" : "";

            return (
              <div
                key={card.number}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/80 group glass-panel ${staggerClass}`}
              >
                {/* Ambient Card Glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-accent/15 rounded-full blur-2xl group-hover:bg-accent/25 transition-all duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C5A059] tracking-tight">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6">
                    <h3 className="font-serif text-2xl text-cream group-hover:text-accent transition-colors duration-200">
                      {card.title}
                    </h3>
                    {card.tamilTitle && (
                      <p className="font-tamil text-xs text-[#C5A059] mt-0.5 font-medium">
                        {card.tamilTitle}
                      </p>
                    )}
                    <p className="text-xs uppercase tracking-wider text-[#C5A059]/90 mt-2 font-semibold">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-cream/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#C5A059] font-medium tracking-wide">
                  {card.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
