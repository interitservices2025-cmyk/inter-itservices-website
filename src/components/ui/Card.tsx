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
            "hover:shadow-[0_0_30px_rgba(11,22,63,0.1)] hover:border-[#0B163F]/20":
              glowColor === "primary" && hoverEffect,
            "hover:shadow-[0_0_30px_rgba(247,147,30,0.1)] hover:border-[#F7931E]/20":
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
