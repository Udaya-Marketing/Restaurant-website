import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbsJsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export function Breadcrumbs({ items, theme = "light" }: BreadcrumbsProps) {
  const isDark = theme === "dark";
  const jsonLdItems = [
    { name: "Home", url: siteConfig.url },
    ...items.map((it) => ({
      name: it.label,
      url: it.href ? `${siteConfig.url}${it.href}` : siteConfig.url,
    })),
  ];

  return (
    <nav
      aria-label="Breadcrumbs"
      className="inline-flex items-center gap-2 py-3 text-xs tracking-wider uppercase font-medium"
    >
      <BreadcrumbsJsonLd items={jsonLdItems} />
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors hover:text-accent ${
          isDark ? "text-cream/60" : "text-pine/60"
        }`}
      >
        <Home className="w-3.5 h-3.5 stroke-[1.5]" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight
              className={`w-3 h-3 ${isDark ? "text-cream/30" : "text-pine/30"}`}
            />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`transition-colors hover:text-accent ${
                  isDark ? "text-cream/60" : "text-pine/60"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={`font-semibold ${isDark ? "text-cream" : "text-pine"}`}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
