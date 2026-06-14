import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for tailwind class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Premium Button component
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold" | "black";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-black text-white hover:bg-alfa-gold hover:text-black",
      gold: "bg-alfa-gold text-black hover:bg-black hover:text-alfa-gold",
      outline: "border-2 border-black text-black hover:bg-black hover:text-white",
      ghost: "text-gray-500 hover:text-black hover:bg-gray-100",
      black: "bg-black text-white hover:bg-gray-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-[10px] tracking-[0.15em]",
      md: "px-6 py-3.5 text-xs tracking-[0.1em]",
      lg: "px-8 py-4 text-sm tracking-[0.1em]",
      icon: "p-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

/**
 * Tooltip-style Badge
 */
export const Badge = ({ children, className, variant = "default" }: { children: React.ReactNode, className?: string, variant?: "default" | "gold" | "outline" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    gold: "bg-alfa-gold text-black",
    outline: "border border-gray-200 text-gray-500",
  };

  return (
    <span className={cn(
      "px-2 py-0.5 text-[9px] font-black uppercase tracking-widest",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
