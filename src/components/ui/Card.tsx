import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: "primary" | "secondary" | "none";
  variant?: "light" | "dark" | "highlight";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverEffect = true, glowColor = "none", variant, children, ...props }, ref) => {
    const hasCustomBg = /\bbg-/.test(className);
    const hasCustomBorder = /\bborder(-[24]|-\[|-(slate|white|orange|transparent))/.test(className);
    const hasCustomPadding = /\bp-\d|\bpx-\d|\bpy-\d/.test(className);
    const hasCustomRadius = /\brounded-/.test(className);

    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-300 shadow-sm",
          !hasCustomRadius && "rounded-xl",
          !hasCustomPadding && "p-6",
          variant === "dark" && "bg-[#1D2140] text-white border border-white/10",
          variant === "highlight" && "bg-white text-slate-900 border-2 border-[#F39200]",
          !variant && !hasCustomBg && "bg-white",
          !variant && !hasCustomBorder && "border border-slate-200",
          {
            "hover:-translate-y-0.5 hover:shadow-md": hoverEffect,
            // Primary Glow (Dark Blue)
            "hover:shadow-[0_0_30px_rgba(29,33,64,0.12)] hover:border-[#1D2140]/20":
              glowColor === "primary" && hoverEffect,
            // Secondary Glow (Brand Orange)
            "hover:shadow-[0_0_30px_rgba(243,146,0,0.15)] hover:border-[#F39200]/30":
              glowColor === "secondary" && hoverEffect,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
