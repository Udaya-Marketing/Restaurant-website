"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { popularMenuItems } from "@/content/menu";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function PopularMenu() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#122B1E] text-cream overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Pill Label & Centered Typography */}
        <SectionHeading
          label="Signature Offerings · தனித்துவ சுவைகள்"
          title={
            <>
              Discover the dishes <br className="hidden sm:inline" />
              <span className="italic text-[#C5A059]">our guests keep coming back for.</span>
            </>
          }
          subtitle="Four iconic pillars of our kitchen: hand-ground masalas, fragrant A2 cow ghee, unlimited banana leaf hospitality, and the fiery griddles of Madurai."
          align="center"
          theme="dark"
        />

        {/* Row of 4 Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {popularMenuItems.map((dish) => (
            <Link
              key={dish.id}
              href={`/menu#${dish.id}`}
              className="group relative flex flex-col rounded-3xl bg-[#183626]/90 border border-white/10 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* Image Container with hover dim and circular arrow button */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0D1F15] flex items-center justify-center p-4">
                <Image
                  src={dish.image}
                  alt={`${dish.name} - ${dish.tamilName}`}
                  width={340}
                  height={340}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Dim Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  {/* Circular Arrow Button */}
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>

                {/* Veg / Non-Veg Standard Indian Food Symbol */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                  <span
                    className={`w-5 h-5 rounded-md border flex items-center justify-center bg-white/95 shadow-sm ${
                      dish.isVeg
                        ? "border-emerald-600"
                        : "border-red-600"
                    }`}
                    title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? "bg-emerald-600" : "bg-red-600"
                      }`}
                    />
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-[#C5A059] border border-white/10">
                    {dish.isVeg ? "Pure Veg" : "Non-Veg"}
                  </span>
                </div>

                {/* Region Tag */}
                {dish.region && (
                  <span className="absolute bottom-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-cream/70 border border-white/10">
                    {dish.region}
                  </span>
                )}
              </div>

              {/* Dish Meta */}
              <div className="mt-5 flex flex-col flex-grow">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-cream group-hover:text-accent transition-colors duration-200">
                    {dish.name}
                  </h3>
                  <span className="font-sans text-base font-bold text-[#C5A059] shrink-0">
                    {dish.price}
                  </span>
                </div>

                {dish.tamilName && (
                  <p className="font-tamil text-xs text-[#C5A059]/80 mt-1">
                    {dish.tamilName}
                  </p>
                )}

                <p className="mt-3 text-xs sm:text-sm text-cream/75 line-clamp-2 leading-relaxed">
                  {dish.description}
                </p>

                {/* Bottom detail pill */}
                {dish.serving && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cream/60">
                    <span className="truncate">{dish.serving}</span>
                    <span className="text-accent text-xs">View dish &rarr;</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* "Explore all Menu" Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <Button
            href="/menu"
            variant="accent"
            size="lg"
            withArrow
            className="shadow-xl shadow-accent/25 px-8"
          >
            Explore Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
