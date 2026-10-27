import React from "react";
import { Sparkles, Leaf, Award, ShieldCheck } from "lucide-react";

interface PillLabelProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent";
  className?: string;
}

export function PillLabel({ children, variant = "dark", className = "" }: PillLabelProps) {
  const styles = {
    dark: "bg-pine/5 border border-pine/15 text-pine",
    light: "bg-white/10 border border-white/15 text-cream/90 backdrop-blur-md",
    accent: "bg-accent/10 border border-accent/25 text-accent",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] ${styles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span>{children}</span>
    </div>
  );
}

interface StickerBadgeProps {
  label: string;
  icon?: "sparkles" | "leaf" | "award" | "shield" | "flame";
  rotation?: string; // e.g. "-rotate-2", "rotate-3"
  className?: string;
}

export function StickerBadge({
  label,
  icon = "sparkles",
  rotation = "rotate-0",
  className = "",
}: StickerBadgeProps) {
  const iconElement = {
    sparkles: <Sparkles className="w-4 h-4 text-accent" />,
    leaf: <Leaf className="w-4 h-4 text-emerald-600" />,
    award: <Award className="w-4 h-4 text-amber-600" />,
    shield: <ShieldCheck className="w-4 h-4 text-accent" />,
    flame: <Sparkles className="w-4 h-4 text-accent" />,
  }[icon];

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[#E8DECE] shadow-md shadow-pine/5 text-pine text-xs sm:text-sm font-medium tracking-tight transform transition-transform hover:scale-105 select-none ${rotation} ${className}`}
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-cream-surface border border-[#E8DECE]">
        {iconElement}
      </div>
      <span className="font-semibold text-pine">{label}</span>
    </div>
  );
}
