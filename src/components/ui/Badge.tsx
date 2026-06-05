import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "info";
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border transition-all duration-300",
        {
          "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700":
            variant === "primary",
          "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20":
            variant === "secondary",
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20":
            variant === "success",
          "bg-sky-500/10 text-sky-400 border-sky-500/20":
            variant === "info",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
