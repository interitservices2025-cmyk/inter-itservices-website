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
        "py-16 md:py-24 relative overflow-hidden",
        {
          "bg-slate-950 text-slate-100": bgType === "dark",
          "bg-slate-900 text-slate-100": bgType === "light", // A slightly lighter dark for contrast
          "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100":
            bgType === "gradient-dark",
          "bg-transparent": bgType === "transparent",
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
