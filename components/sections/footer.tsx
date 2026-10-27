import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Instagram } from "@/components/icons/instagram";
import { Facebook, Youtube, GoogleMaps } from "@/components/icons/social";
import { CurrentYear } from "@/components/shared/current-year";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-[#100B07] text-cream pt-20 overflow-hidden">
      {/* Top subtle border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-pine text-cream group-hover:bg-accent transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-[#C5A059] group-hover:text-cream transition-colors duration-300" />
              </span>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl tracking-tight text-cream font-normal">
                    {siteConfig.name}
                  </span>
                  <span className="font-tamil text-sm text-accent font-medium">
                    அன்னம்
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059]">
                  Chennai · Tamil Nadu
                </span>
              </div>
            </Link>

            <p className="text-base text-cream/90 font-serif italic text-accent">
              &ldquo;{siteConfig.footerTagline}&rdquo;
            </p>

            <p className="text-sm text-cream/70 max-w-sm leading-relaxed font-light">
              An honest celebration of Tamil Nadu&apos;s kitchens, served with love on a banana leaf
              and finished with a frothing tumbler of Kumbakonam degree filter kaapi.
            </p>

            <div className="pt-1 text-xs text-[#C5A059] tracking-wide font-medium">
              {siteConfig.starRating}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/80 hover:text-accent hover:border-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/80 hover:text-accent hover:border-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/80 hover:text-accent hover:border-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/80 hover:text-accent hover:border-accent transition-colors"
                aria-label="Google Maps"
              >
                <GoogleMaps className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-2">
              Explore Annam
            </span>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-cream/75 hover:text-accent transition-colors py-1 flex items-center justify-between max-w-[180px]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </Link>
            ))}
            <Link
              href="/privacy"
              className="text-sm text-cream/75 hover:text-accent transition-colors py-1 flex items-center justify-between max-w-[180px]"
            >
              <span>Privacy &amp; Data Ethics</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
            </Link>
          </div>

          {/* Col 3: Address & Contact */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-2">
              Sanctuary &amp; Dining Hours
            </span>
            <div className="text-sm text-cream/80 leading-relaxed space-y-1">
              <p className="font-medium text-cream">{siteConfig.legalName}</p>
              <p>{siteConfig.contact.address.formatted}</p>
              <p>Telephone: <a href={`tel:${siteConfig.contact.telephone}`} className="hover:text-accent text-cream font-medium">{siteConfig.contact.telephone}</a></p>
              <p>Inquiries: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent text-cream">{siteConfig.contact.email}</a></p>
            </div>

            <div className="pt-2 text-xs text-cream/60 leading-normal border-t border-white/10 space-y-0.5">
              <p className="font-semibold text-cream/80 mb-1">Daily Meal Cadence:</p>
              <p>Breakfast &amp; Morning Tiffin: 07:00 – 11:30 AM</p>
              <p>Banana Leaf Sappadu (Lunch): 12:00 – 04:00 PM</p>
              <p>Evening Tiffin &amp; Kaapi: 04:00 – 06:30 PM</p>
              <p>Traditional Dinner: 06:30 – 10:30 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Curved Shape in Warm Cream */}
        <div className="mt-16 sm:mt-20 relative w-full overflow-hidden" aria-hidden="true">
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16 text-[#FAF7F2] fill-current block"
          >
            <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" />
          </svg>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="bg-[#FAF7F2] text-pine px-4 py-4 rounded-b-2xl -mt-1 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-pine/70">
            &copy; <CurrentYear /> {siteConfig.legalName}. All rights reserved. Chennai, Tamil Nadu, India.
          </p>
          <div className="flex items-center gap-4 text-pine/80 font-medium">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact Desk
            </Link>
            <span>·</span>
            <Link href="/reservations" className="hover:text-accent transition-colors">
              Reserve Table
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
