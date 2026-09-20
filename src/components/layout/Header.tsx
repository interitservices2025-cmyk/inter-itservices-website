"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../ui/LanguageSwitcher";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer and dropdowns on route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  const solutionsItems = [
    {
      href: `/${locale}/solutions/odoo`,
      label: "Odoo Implementation",
      isHighlight: true,
    },
    {
      href: `/${locale}/services/web-development`,
      label: locale === "fr" ? "Développement Web" : "Web Development",
    },
    {
      href: `/${locale}/services/automation-ai`,
      label: locale === "fr" ? "Automatisation & IA" : "Automation & AI",
    },
    {
      href: `/${locale}/services/business-applications`,
      label: locale === "fr" ? "Applications Métiers" : "Business Applications",
    },
    {
      href: `/${locale}/services/digital-marketing`,
      label: locale === "fr" ? "Marketing Digital" : "Digital Marketing",
    },
    {
      href: `/${locale}/training`,
      label: locale === "fr" ? "Ateliers de formation" : "Training Workshops",
    },
  ];

  const mainLinks = [
    { href: `/${locale}`, label: locale === "fr" ? "Accueil" : "Home" },
    { href: "#", label: "Solutions", isDropdown: true },
    { href: `/${locale}/blog`, label: locale === "fr" ? "Insights & Blog" : "Insights & Blog" },
    { href: `/${locale}/about`, label: locale === "fr" ? "À Propos" : "About" },
    { href: `/${locale}/contact`, label: "Contact" },
  ];

  const ctaText = locale === "fr" ? "Parler d'un projet" : "Discuss a Project";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#1D2140]/95 backdrop-blur-md py-3.5 border-white/10 shadow-lg shadow-black/20"
          : "bg-[#1D2140] py-5 border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/images/logo/Logo 2.svg"
              alt="INTER-IT SERVICES INC"
              width={145}
              height={48}
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => {
              if (link.isDropdown) {
                const isAnySubActive = solutionsItems.some((item) => pathname.startsWith(item.href));

                return (
                  <div
                    key="solutions-dropdown"
                    className="relative py-1"
                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                  >
                    <button
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-[#F39200] cursor-pointer flex items-center gap-1.5 py-1 focus:outline-none",
                        isAnySubActive ? "text-[#F39200] font-semibold" : "text-white/90"
                      )}
                      aria-expanded={isDesktopDropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isDesktopDropdownOpen ? "rotate-180 text-[#F39200]" : ""
                        )}
                      />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {isDesktopDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl border border-white/10 bg-[#1D2140] p-2.5 shadow-2xl shadow-black/40 z-50">
                        {solutionsItems.map((subLink) => {
                          const isSubActive = pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={cn(
                                "flex items-center justify-between w-full text-left text-xs font-semibold px-3.5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer",
                                subLink.isHighlight
                                  ? "bg-[#F39200]/15 text-[#F39200] border border-[#F39200]/30 hover:bg-[#F39200]/25 mb-1"
                                  : isSubActive
                                  ? "text-[#F39200] bg-white/5"
                                  : "text-white/80 hover:bg-white/5 hover:text-[#F39200]"
                              )}
                            >
                              <span className="flex items-center gap-2">
                                {subLink.isHighlight && <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />}
                                <span>{subLink.label}</span>
                              </span>
                              {subLink.tag && (
                                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F39200] text-white">
                                  {subLink.tag}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                link.href === `/${locale}` ? pathname === link.href : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#F39200] cursor-pointer relative py-1",
                    isActive ? "text-[#F39200] font-semibold" : "text-white/90"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F39200] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
              <button className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#F39200] text-white hover:bg-[#F39200]/90 transition-all duration-300 active:scale-[0.98] cursor-pointer gap-1.5 shadow-md shadow-[#F39200]/25">
                <span>{ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F39200] focus:outline-none p-2 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[69px] bottom-0 z-40 bg-[#1D2140] border-t border-white/10 px-6 py-6 flex flex-col justify-between transition-transform duration-300 lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-2">
          {mainLinks.map((link) => {
            if (link.isDropdown) {
              const isAnySubActive = solutionsItems.some((item) => pathname.startsWith(item.href));

              return (
                <div key="mobile-solutions" className="flex flex-col">
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={cn(
                      "text-base font-semibold py-2.5 border-b border-white/10 flex items-center justify-between transition-colors hover:text-[#F39200] cursor-pointer w-full text-left",
                      isAnySubActive ? "text-[#F39200]" : "text-white/95"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isMobileDropdownOpen ? "rotate-180 text-[#F39200]" : ""
                      )}
                    />
                  </button>

                  {/* Collapsible Mobile Sub-items */}
                  {isMobileDropdownOpen && (
                    <div className="pl-3 py-2 flex flex-col space-y-2 border-l-2 border-[#F39200]/40 my-2 bg-white/5 rounded-r-lg">
                      {solutionsItems.map((subLink) => {
                        const isSubActive = pathname === subLink.href;
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-xs font-semibold py-2 px-2 rounded transition-colors flex items-center justify-between cursor-pointer",
                              subLink.isHighlight
                                ? "text-[#F39200] font-bold"
                                : isSubActive
                                ? "text-[#F39200]"
                                : "text-white/80 hover:text-[#F39200]"
                            )}
                          >
                            <span>{subLink.label}</span>
                            {subLink.tag && (
                              <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#F39200] text-white">
                                {subLink.tag}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              link.href === `/${locale}` ? pathname === link.href : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-semibold py-2.5 border-b border-white/10 transition-colors hover:text-[#F39200] cursor-pointer",
                  isActive ? "text-[#F39200]" : "text-white/95"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 pb-4">
          <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
            <button className="w-full inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-sm font-bold uppercase tracking-wider bg-[#F39200] text-white hover:bg-[#F39200]/90 transition-all duration-300 cursor-pointer gap-2 shadow-lg shadow-[#F39200]/25">
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
