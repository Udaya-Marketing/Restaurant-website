"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Rounded Panel */}
        <div className="relative rounded-[2.5rem] bg-[#122B1E] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Diagonal Accent Color Shapes */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute top-0 right-1/4 w-32 h-[200%] bg-accent transform -skew-x-12 -translate-y-24" />
            <div className="absolute top-0 right-1/3 w-16 h-[200%] bg-[#C5A059] transform -skew-x-12 -translate-y-24" />
          </div>

          {/* Plated Dish 1: Left - Ghee Podi Dosa */}
          <div
            className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-square pointer-events-none z-10 drop-shadow-2xl opacity-90"
            aria-hidden="true"
          >
            <Image
              src="/images/cta-dish-left.svg"
              alt="Crisp Ghee Podi Dosa on fresh banana leaf"
              fill
              sizes="288px"
              className="object-contain"
            />
          </div>

          {/* Plated Dish 2: Right - Filter Kaapi */}
          <div
            className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-square pointer-events-none z-10 drop-shadow-2xl opacity-90"
            aria-hidden="true"
          >
            <Image
              src="/images/cta-dish-right.svg"
              alt="Kumbakonam degree filter kaapi in brass davarah"
              fill
              sizes="288px"
              className="object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>வாழை இலை விருந்து · Anna Nagar, Chennai</span>
            </div>

            <h2 className="headline-section font-serif text-cream">
              Reserve your seat at Annam&apos;s table.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-cream/75 leading-relaxed font-light max-w-lg">
              Whether for an unhurried Sunday banana leaf sappadu with family or an evening of crisp
              kari dosas, flaky parottas, and steaming filter kaapi—we look forward to welcoming you with
              warmth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/reservations"
                variant="accent"
                size="lg"
                withArrow
                className="w-full sm:w-auto shadow-xl shadow-accent/30 px-8 py-4"
              >
                Reserve A Table
              </Button>
              <Button
                href="/menu"
                variant="dark"
                size="lg"
                className="w-full sm:w-auto px-8"
              >
                Explore Offerings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
