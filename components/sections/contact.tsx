"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PillLabel } from "@/components/ui/badge";

export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F3EEE4] text-pine overflow-hidden">
      {/* Floating Decorative Ingredient 1: Top Left - Curry Leaf */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 left-4 sm:left-12 w-24 sm:w-36 aspect-square pointer-events-none z-10 opacity-70"
        aria-hidden="true"
      >
        <Image
          src="/images/ingredient-rosemary.svg"
          alt="Fresh curry leaves"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Decorative Ingredient 2: Bottom Right - Star Anise */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 right-4 sm:right-16 w-28 sm:w-40 aspect-square pointer-events-none z-10 opacity-75"
        aria-hidden="true"
      >
        <Image
          src="/images/ingredient-chanterelle.svg"
          alt="Chettinad star anise"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Decorative Ingredient 3: Mid Left - Red Chilli */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute top-1/2 -left-6 w-24 aspect-square pointer-events-none z-0 blur-[1px] opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/images/ingredient-fig.svg"
          alt="Sun-dried red chilli"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <PillLabel variant="accent">Location &amp; Inquiries · அமைவிடம்</PillLabel>
          </div>
          <h2 className="headline-section font-serif text-pine">
            Find Us in Anna Nagar, Chennai
          </h2>
          <p className="mt-2 text-sm sm:text-base text-pine/70 max-w-xl mx-auto">
            Situated centrally on 4th Avenue, 2nd Block, with dedicated complimentary valet parking and spacious dining halls.
          </p>
        </div>

        {/* White Card on soft background */}
        <div className="rounded-3xl bg-white border border-[#E5DCCD] shadow-2xl p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#E5DCCD]">
            {/* Column 1: Address */}
            <div className="flex flex-col space-y-4 pt-6 md:pt-0 md:pr-8">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="font-serif text-2xl text-pine">Restaurant Address</h3>
              <p className="text-sm text-pine/80 leading-relaxed">
                <strong className="text-pine block font-medium">{siteConfig.legalName}</strong>
                {siteConfig.contact.address.streetAddress}
                <br />
                {siteConfig.contact.address.addressLocality} – {siteConfig.contact.address.postalCode}
                <br />
                Tamil Nadu, India
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  <span>Google Maps &amp; Valet Info</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Telephone & Email */}
            <div className="flex flex-col space-y-4 pt-8 md:pt-0 md:px-8">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Phone className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="font-serif text-2xl text-pine">Guest Reception</h3>
              <div className="text-sm text-pine/80 space-y-3 leading-relaxed">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-pine/50 font-semibold">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.telephone}`}
                    className="font-medium text-pine hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.telephone}
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-pine/50 font-semibold">
                    Mobile &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.mobile}`}
                    className="font-medium text-pine hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.mobile}
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-pine/50 font-semibold">
                    General Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-pine hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Service Hours */}
            <div className="flex flex-col space-y-4 pt-8 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Clock className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="font-serif text-2xl text-pine">Dining Hours</h3>
              <div className="text-sm text-pine/80 space-y-2.5">
                <div>
                  <span className="font-semibold text-pine block">Morning Tiffin:</span>
                  <span className="text-xs text-pine/70">07:00 AM – 11:30 AM (Daily)</span>
                </div>
                <div>
                  <span className="font-semibold text-pine block">Banana Leaf Sappadu (Lunch):</span>
                  <span className="text-xs text-pine/70">12:00 PM – 04:00 PM (Daily)</span>
                </div>
                <div>
                  <span className="font-semibold text-pine block">Evening Tiffin &amp; Filter Kaapi:</span>
                  <span className="text-xs text-pine/70">04:00 PM – 06:30 PM (Daily)</span>
                </div>
                <div>
                  <span className="font-semibold text-pine block">Traditional Dinner:</span>
                  <span className="text-xs text-pine/70">06:30 PM – 10:30 PM (Daily)</span>
                </div>
                <div className="pt-1">
                  <span className="text-xs text-emerald-700 font-semibold block">
                    Open All 7 Days a Week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
