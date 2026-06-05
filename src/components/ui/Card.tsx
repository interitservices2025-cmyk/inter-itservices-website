import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: "primary" | "secondary" | "none";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glowColor = "none", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-panel rounded-xl p-6 transition-all duration-300",
          {
            "glass-panel-hover": hoverEffect,
            "hover:shadow-[0_0_30px_rgba(29,33,64,0.3)] hover:border-slate-700/60":
              glowColor === "primary" && hoverEffect,
            "hover:shadow-[0_0_30px_rgba(243,146,0,0.15)] hover:border-amber-500/20":
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
