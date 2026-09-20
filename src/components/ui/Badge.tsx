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
          "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200":
            variant === "primary",
          "bg-orange-50 text-[#F39200] border-orange-100 hover:bg-orange-100/80":
            variant === "secondary",
          "bg-emerald-50 text-emerald-700 border-emerald-100":
            variant === "success",
          "bg-sky-50 text-sky-700 border-sky-100":
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
