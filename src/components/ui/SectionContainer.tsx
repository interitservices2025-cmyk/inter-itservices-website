import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  bgType?: "dark" | "light" | "gradient-dark" | "transparent";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className = "",
  id,
  bgType = "transparent",
  children,
  ...props
}) => {
  const hasCustomPy = /\bpy-\d/.test(className);
  const hasCustomBg = /\bbg-/.test(className);
  const hasCustomText = /\btext-(white|slate|\[)/.test(className);

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        !hasCustomPy && "py-20 sm:py-28",
        !hasCustomBg && {
          "bg-white": bgType === "dark" || bgType === "transparent",
          "bg-slate-50": bgType === "light",
          "bg-gradient-to-b from-white via-slate-50 to-white": bgType === "gradient-dark",
        },
        !hasCustomText && "text-slate-900",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
