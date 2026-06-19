import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  bgType?: "dark" | "light" | "gradient-dark" | "transparent";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className,
  id,
  bgType = "transparent",
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28 md:py-32 relative overflow-hidden",
        {
          "bg-white text-slate-900": bgType === "dark",
          "bg-slate-50 text-slate-900": bgType === "light",
          "bg-gradient-to-b from-white via-slate-50 to-white text-slate-900":
            bgType === "gradient-dark",
          "bg-transparent text-slate-900": bgType === "transparent",
        },
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
