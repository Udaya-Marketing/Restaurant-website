"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DCCD]/80 shadow-sm shadow-coffee/5 py-3"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-pine text-cream group-hover:bg-accent transition-colors duration-300 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C5A059] group-hover:text-cream transition-colors duration-300" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl tracking-tight text-pine font-normal leading-none">
                  {siteConfig.name}
                </span>
                <span className="font-tamil text-xs text-accent font-medium leading-none">
                  அன்னம்
                </span>
              </div>
              <span className="text-[9px] tracking-[0.24em] uppercase text-pine/60 font-semibold mt-0.5">
                Chennai · Tamil Nadu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#E5DCCD]/80 shadow-sm"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-tight rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-pine text-cream shadow-sm"
                      : "text-pine/80 hover:text-pine hover:bg-black/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Reserve Table with arrow in rounded square */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/reservations"
              variant="accent"
              size="md"
              withArrow
              className="shadow-md shadow-accent/25"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/reservations"
              className="px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-semibold tracking-wide flex items-center gap-1 shadow-sm"
            >
              <span>Reserve</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="p-2.5 rounded-full bg-white/85 border border-[#E5DCCD] text-pine focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#122B1E]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Explore Annam
              </span>
              <span className="font-tamil text-xs text-[#C5A059]">அன்னம் சென்னை</span>
            </div>
            {siteConfig.navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-serif text-3xl sm:text-4xl transition-colors duration-200 flex items-center justify-between border-b border-white/10 pb-4 ${
                    isActive ? "text-accent" : "text-cream hover:text-accent"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-60" />
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <Button
              href="/reservations"
              variant="accent"
              size="lg"
              withArrow
              className="w-full text-center justify-center py-4"
              onClick={() => setMobileOpen(false)}
            >
              Reserve A Table
            </Button>
            <div className="text-center text-xs text-cream/60 space-y-1 pt-2">
              <p>{siteConfig.contact.address.formatted}</p>
              <p>{siteConfig.contact.telephone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
