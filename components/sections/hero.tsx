"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TornEdge } from "@/components/ui/torn-edge";

const heroDishes = [
  {
    title: "Traditional Banana Leaf Sappadu",
    subtitle: "Steaming Ponni rice, sambar, rasam, kootu, poriyal & payasam",
    tag: "Signature Feast",
    image: "/images/hero-dish.svg",
  },
  {
    title: "Ghee Podi Button Idlis",
    subtitle: "Steamed rice cakes drenched in gunpowder podi & A2 cow ghee",
    tag: "Morning & Tiffin Icon",
    image: "/images/dish-ghee-podi-idli.svg",
  },
  {
    title: "Chettinad Pepper Chicken",
    subtitle: "Country chicken slow-roasted with crushed Tellicherry peppercorns",
    tag: "Chettinad Clay Pot",
    image: "/images/dish-chettinad-pepper-chicken.svg",
  },
  {
    title: "Madurai Special Kari Dosai",
    subtitle: "Crisp dosa topped with fluffy egg and spiced mutton chukka",
    tag: "Madurai Street Legend",
    image: "/images/dish-madurai-kari-dosai.svg",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentDish = heroDishes[activeSlide];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 bg-[#FAF7F2] overflow-hidden">
      {/* Background radial warmth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Micro Label */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pine/5 border border-pine/15 text-pine text-xs font-semibold uppercase tracking-[0.20em]"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>அன்னம் · Tamil Nadu on a Banana Leaf · Anna Nagar, Chennai</span>
          </motion.div>
        </div>

        {/* 1. Very Large Headline with Different Words in Different Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="headline-hero font-serif font-normal">
            <span className="text-[#18110B]">Taste</span>{" "}
            <span className="text-[#1E4A32] italic font-normal">Tamil Nadu,</span>{" "}
            <span className="text-[#D46213]">One Leaf</span>{" "}
            <span className="text-[#18110B]">At a Time.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#3D332A] max-w-3xl mx-auto font-normal leading-relaxed">
            An honest celebration of Tamil Nadu&apos;s kitchens, from Chettinad spice boxes and
            Madurai street fire to temple-town sweets, served on banana leaf with filter kaapi to
            finish.
          </p>

          {/* CTA & Reservation Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/reservations"
              variant="accent"
              size="lg"
              withArrow
              className="w-full sm:w-auto shadow-xl shadow-accent/25"
            >
              Reserve A Banana Leaf
            </Button>
            <Button
              href="/menu"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Full Menu
            </Button>
          </div>
        </motion.div>

        {/* 2. Centered Hero Dish Image with Floating Ingredient Cutouts & Soft Parallax */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto flex items-center justify-center">
          {/* Ambient dish glow behind plate */}
          <div
            className="absolute inset-0 max-w-[500px] max-h-[500px] m-auto rounded-full bg-[#D46213]/15 blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Hero Plated Dish (LCP Image) */}
          <motion.div
            key={currentDish.image}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-72 sm:w-[460px] lg:w-[540px] aspect-square drop-shadow-2xl"
          >
            <Image
              src={currentDish.image}
              alt={`${currentDish.title} - ${currentDish.subtitle}`}
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 460px, 540px"
              className="object-contain"
            />
          </motion.div>

          {/* Floating Ingredient 1: Fresh Curry Leaves (Top Left) */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, -4, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 left-2 sm:left-12 lg:left-8 z-20 w-20 sm:w-28 lg:w-36 aspect-square pointer-events-none"
          >
            <Image
              src="/images/ingredient-rosemary.svg"
              alt="Fresh organic curry leaf sprig"
              fill
              sizes="144px"
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating Ingredient 2: Star Anise (Top Right - Blurred for Depth) */}
          <motion.div
            animate={{
              y: [0, 16, 0],
              rotate: [0, 6, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-8 right-4 sm:right-16 lg:right-12 z-0 w-16 sm:w-24 lg:w-32 aspect-square pointer-events-none blur-[1.5px]"
          >
            <Image
              src="/images/ingredient-chanterelle.svg"
              alt="Hand-selected Chettinad star anise"
              fill
              priority
              sizes="128px"
              className="object-contain drop-shadow-md opacity-85"
            />
          </motion.div>

          {/* Floating Ingredient 3: Sun-dried Red Chilli (Bottom Left) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 sm:bottom-20 -left-2 sm:left-4 lg:left-0 z-20 w-20 sm:w-28 lg:w-36 aspect-square pointer-events-none"
          >
            <Image
              src="/images/ingredient-fig.svg"
              alt="Sun-dried Guntur red chilli"
              fill
              sizes="144px"
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating Ingredient 4: Fresh Green Cardamom (Bottom Right) */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -8, 0],
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-12 sm:bottom-16 -right-2 sm:right-6 lg:right-2 z-20 w-18 sm:w-28 lg:w-36 aspect-square pointer-events-none blur-[0.75px]"
          >
            <Image
              src="/images/ingredient-citrus.svg"
              alt="Aromatic green cardamom pod"
              fill
              sizes="144px"
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Stat Pill 1: Left - Avatar Stack with "25,000+ Happy Guests" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-2 sm:left-4 lg:left-2 bottom-4 sm:bottom-8 z-30 flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5DCCD] shadow-lg shadow-coffee/10 text-pine"
          >
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative bg-[#1E3A2B]">
                <Image src="/images/avatar-1.svg" alt="Guest Meenakshi" fill className="object-cover" />
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative bg-[#2B1E16]">
                <Image src="/images/avatar-2.svg" alt="Guest Karthik" fill className="object-cover" />
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative bg-[#183626]">
                <Image src="/images/avatar-3.svg" alt="Guest Lakshmi" fill className="object-cover" />
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative bg-[#244C38]">
                <Image src="/images/avatar-4.svg" alt="Guest Senthil" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-pine leading-none">25,000+</span>
              <span className="text-[10px] text-pine/70 font-medium tracking-tight">Happy Guests</span>
            </div>
          </motion.div>

          {/* Stat Pill 2: Right - Rating Pill (★ 4.9 · 3,800+ Reviews) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-2 sm:right-4 lg:right-2 bottom-4 sm:bottom-8 z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5DCCD] shadow-lg shadow-coffee/10 text-pine"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-600">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-pine leading-none">4.9 / 5.0</span>
                <span className="text-[10px] text-amber-600 font-semibold">★★★★★</span>
              </div>
              <span className="text-[10px] text-pine/70 font-medium tracking-tight">
                3,800+ Verified Reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dish Slider Bar & Info */}
        <div className="flex flex-col items-center justify-center gap-2 mt-8 sm:mt-10 mb-14 text-center">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider">
            {currentDish.tag}
          </div>
          <div className="font-serif text-lg text-pine">
            {currentDish.title}
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-2">
            {heroDishes.map((dish, idx) => (
              <button
                key={dish.title}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent ${
                  activeSlide === idx ? "w-8 bg-accent" : "w-2 bg-pine/20 hover:bg-pine/40"
                }`}
                aria-label={`View ${dish.title}`}
                aria-current={activeSlide === idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Torn/Deckled Edge transitioning into the deep banana-leaf section */}
      <TornEdge fill="#122B1E" className="relative z-30 -mb-1" />
    </section>
  );
}
