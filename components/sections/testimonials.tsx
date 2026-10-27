"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonialsRow1, testimonialsRow2 } from "@/content/testimonials";
import { PillLabel } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/lib/types";

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <div className="w-[320px] sm:w-[420px] shrink-0 rounded-2xl bg-[#18110B] border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:border-accent/40 mx-3 select-none">
      <div>
        {/* Stars & Favorite Dish */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          {review.favoriteDish && (
            <span className="text-[10px] font-medium text-[#C5A059] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 truncate max-w-[180px]">
              {review.favoriteDish}
            </span>
          )}
        </div>

        {/* Quote */}
        <p className="text-sm text-cream/90 font-light italic leading-relaxed">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Reviewer Meta */}
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/20 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col text-left overflow-hidden">
          <span className="text-sm font-semibold text-cream truncate">
            {review.name}
          </span>
          <span className="text-xs text-[#C5A059] truncate font-medium">
            {review.role} · {review.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate arrays to allow seamless continuous loop marquee
  const row1Duplicated = [...testimonialsRow1, ...testimonialsRow1];
  const row2Duplicated = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Near-Black Container */}
        <div className="relative rounded-[2.5rem] bg-[#100B07] py-16 sm:py-24 px-4 sm:px-8 border border-white/10 overflow-hidden shadow-2xl">
          {/* Subtle amber lamp light */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/15 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
            <div className="flex justify-center mb-4">
              <PillLabel variant="light">Guest Voices · விருந்தினர் கருத்துக்கள்</PillLabel>
            </div>
            <h2 className="headline-section font-serif text-cream">
              Voices of Joy Around Our Banana Leaf
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream/75 font-light">
              From Sunday family sappadu feasts to early morning filter kaapi rituals, hear what our patrons cherish about Annam.
            </p>
          </div>

          {/* CSS Marquee Rows with Hover Pause & Reduced Motion */}
          <div className="marquee-container space-y-6 relative overflow-hidden py-2">
            {/* Fade Out Edge Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#100B07] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#100B07] to-transparent z-10 pointer-events-none" />

            {/* Row 1: Left */}
            <div className="overflow-hidden">
              <div className="animate-marquee-left">
                {row1Duplicated.map((review, idx) => (
                  <ReviewCard key={`r1-${idx}`} review={review} />
                ))}
              </div>
            </div>

            {/* Row 2: Right */}
            <div className="overflow-hidden">
              <div className="animate-marquee-right">
                {row2Duplicated.map((review, idx) => (
                  <ReviewCard key={`r2-${idx}`} review={review} />
                ))}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 text-center relative z-10">
            <Button
              href="/reservations"
              variant="dark"
              size="md"
              withArrow
              className="px-6 py-3"
            >
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
