"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract active locale from pathname (first segment after slash)
  const segments = pathname.split("/");
  const currentLocale = segments[1] === "fr" ? "fr" : "en";

  const handleLanguageChange = (newLocale: "en" | "fr") => {
    if (newLocale === currentLocale) return;

    const newSegments = [...segments];
    newSegments[1] = newLocale;
    const newPath = newSegments.join("/") || "/";

    router.push(newPath);
  };

  return (
    <div className={cn("flex items-center space-x-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800", className)}>
      <button
        onClick={() => handleLanguageChange("en")}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 cursor-pointer",
          currentLocale === "en"
            ? "bg-amber-500 text-slate-950 shadow-sm"
            : "text-slate-400 hover:text-slate-200"
        )}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("fr")}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 cursor-pointer",
          currentLocale === "fr"
            ? "bg-amber-500 text-slate-950 shadow-sm"
            : "text-slate-400 hover:text-slate-200"
        )}
      >
        FR
      </button>
    </div>
  );
}
