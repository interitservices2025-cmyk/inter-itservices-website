import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer",
          // Variants
          {
            // Primary: Brand Blue background with white text and gradient hover
            "bg-slate-900 border border-slate-800 text-slate-100 hover:bg-slate-800/80 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5":
              variant === "primary",
            // Secondary: Brand Orange background with black text
            "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/20":
              variant === "secondary",
            // Outline: Transparent background with white border
            "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 hover:border-slate-500":
              variant === "outline",
            // Ghost: Text only with light hover
            "bg-transparent text-slate-300 hover:bg-slate-800/40 hover:text-slate-100":
              variant === "ghost",
          },
          // Sizes
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-7 py-3.5 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
