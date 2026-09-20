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
    <div className={cn("flex items-center space-x-1 bg-white/10 p-1 rounded-lg border border-white/10 backdrop-blur-sm", className)}>
      <button
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch language to English"
        aria-current={currentLocale === "en" ? "page" : undefined}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 cursor-pointer",
          currentLocale === "en"
            ? "bg-[#F39200] text-white shadow-sm hover:bg-[#d98200]"
            : "text-white/80 hover:text-white hover:bg-white/10"
        )}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("fr")}
        aria-label="Changer la langue en français"
        aria-current={currentLocale === "fr" ? "page" : undefined}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 cursor-pointer",
          currentLocale === "fr"
            ? "bg-[#F39200] text-white shadow-sm hover:bg-[#d98200]"
            : "text-white/80 hover:text-white hover:bg-white/10"
        )}
      >
        FR
      </button>
    </div>
  );
}
