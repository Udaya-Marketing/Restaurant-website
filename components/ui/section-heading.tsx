import React from "react";
import { PillLabel } from "@/components/ui/badge";

interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "center" | "left";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {label && (
        <div className="mb-4">
          <PillLabel variant={isDark ? "light" : "dark"}>{label}</PillLabel>
        </div>
      )}
      <h2
        className={`headline-section font-serif font-normal ${
          isDark ? "text-cream" : "text-pine"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-cream/70" : "text-pine/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
