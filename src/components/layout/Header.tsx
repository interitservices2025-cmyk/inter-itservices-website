"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
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

  const dropdownItems = [
    { href: `/${locale}/services/web-development`, label: locale === "fr" ? "Développement Web" : "Web Development" },
    { href: `/${locale}/services/automation-ai`, label: locale === "fr" ? "Automatisation & IA" : "Automation & AI" },
    { href: `/${locale}/services/business-applications`, label: locale === "fr" ? "Applications Métiers" : "Business Applications" },
    { href: `/${locale}/services/digital-marketing`, label: locale === "fr" ? "Marketing Digital" : "Digital Marketing" },
    { href: `/${locale}/training`, label: locale === "fr" ? "Formations" : "Training" },
  ];

  const mainLinks = [
    { href: `/${locale}`, label: locale === "fr" ? "Accueil" : "Home" },
    { href: "#", label: locale === "fr" ? "Solutions" : "Solutions", isDropdown: true },
    { href: `/${locale}/portfolio`, label: locale === "fr" ? "Projets" : "Projects" },
    { href: `/${locale}/blog`, label: locale === "fr" ? "Blog" : "Blog" },
    { href: `/${locale}/about`, label: locale === "fr" ? "À Propos" : "About" },
    { href: `/${locale}/contact`, label: locale === "fr" ? "Contact" : "Contact" },
  ];

  const ctaText = locale === "fr" ? "Réserver une Consultation" : "Book a Consultation";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#0B163F]/95 backdrop-blur-md py-4 border-white/10 shadow-md shadow-slate-950/20"
          : "bg-[#0B163F] py-6 border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/images/logo/Logo 2.svg"
              alt="INTER-IT SERVICES INC"
              width={140}
              height={48}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainLinks.map((link) => {
              if (link.isDropdown) {
                const isAnySubActive = dropdownItems.some((item) => pathname.startsWith(item.href));

                return (
                  <div
                    key="solutions-dropdown"
                    className="relative py-1"
                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                  >
                    <button
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-[#F7931E] cursor-pointer flex items-center gap-1 py-1 focus:outline-none",
                        isAnySubActive ? "text-[#F7931E] font-semibold" : "text-white/90"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDesktopDropdownOpen ? "rotate-180" : "")} />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {isDesktopDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl border border-white/10 bg-[#0B163F]/95 backdrop-blur-md p-2 shadow-xl shadow-slate-950/30 z-50">
                        {dropdownItems.map((subLink) => {
                          const isSubActive = pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={cn(
                                "block w-full text-left text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors hover:bg-white/5 hover:text-[#F7931E] cursor-pointer",
                                isSubActive ? "text-[#F7931E] bg-white/5" : "text-white/80"
                              )}
                            >
                              {subLink.label}
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
                    "text-sm font-medium transition-colors hover:text-[#F7931E] cursor-pointer relative py-1",
                    isActive ? "text-[#F7931E] font-semibold" : "text-white/90"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7931E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
              <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-[#F7931E] text-white hover:bg-[#F7931E]/90 transition-all duration-300 active:scale-[0.98] cursor-pointer gap-1.5 shadow-md shadow-[#F7931E]/20">
                <span>{ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F7931E] focus:outline-none p-1.5 rounded-lg border border-white/10 bg-white/5 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[73px] bottom-0 z-40 bg-[#0B163F] border-t border-white/10 px-6 py-8 flex flex-col justify-between transition-transform duration-300 md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-3">
          {mainLinks.map((link) => {
            if (link.isDropdown) {
              const isAnySubActive = dropdownItems.some((item) => pathname.startsWith(item.href));

              return (
                <div key="mobile-solutions" className="flex flex-col">
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={cn(
                      "text-lg font-medium py-2 border-b border-white/10 flex items-center justify-between transition-colors hover:text-[#F7931E] cursor-pointer w-full text-left",
                      isAnySubActive ? "text-[#F7931E] font-semibold" : "text-white/90"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isMobileDropdownOpen ? "rotate-180" : "")} />
                  </button>

                  {/* Collapsible Mobile Sub-items */}
                  {isMobileDropdownOpen && (
                    <div className="pl-4 py-2 flex flex-col space-y-2 border-l border-white/10 mt-1 bg-white/5 rounded-lg">
                      {dropdownItems.map((subLink) => {
                        const isSubActive = pathname === subLink.href;
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-sm font-semibold py-1.5 transition-colors hover:text-[#F7931E] cursor-pointer",
                              isSubActive ? "text-[#F7931E] font-bold" : "text-white/70"
                            )}
                          >
                            {subLink.label}
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
                  "text-lg font-medium py-2 border-b border-white/10 transition-colors hover:text-[#F7931E] cursor-pointer",
                  isActive ? "text-[#F7931E] font-semibold" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="pb-8 mt-6">
          <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
            <button className="w-full inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-base font-semibold bg-[#F7931E] text-white hover:bg-[#F7931E]/90 transition-all duration-300 cursor-pointer gap-2 shadow-md shadow-[#F7931E]/20">
              <span>{ctaText}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
