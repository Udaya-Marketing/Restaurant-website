import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "accent" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "accent",
  size = "md",
  withArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none group select-none text-center cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider rounded-full",
    md: "px-6 py-3 text-sm rounded-full",
    lg: "px-8 py-4 text-base rounded-full",
  }[size];

  const variantStyles = {
    accent:
      "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 active:scale-[0.98]",
    secondary:
      "bg-pine text-cream hover:bg-pine-light active:scale-[0.98]",
    outline:
      "border border-pine/20 hover:border-pine bg-transparent text-pine hover:bg-pine/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-pine hover:bg-pine/10",
    dark:
      "bg-white/10 hover:bg-white/20 text-cream border border-white/15 backdrop-blur-md active:scale-[0.98]",
  }[variant];

  const arrowElement = withArrow ? (
    <span className="inline-flex items-center justify-center w-5 h-5 ml-2.5 rounded-sm bg-white/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
    </span>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
        <span>{children}</span>
        {arrowElement}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      <span>{children}</span>
      {arrowElement}
    </button>
  );
}
