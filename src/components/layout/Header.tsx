"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Layers, Cpu, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOLUTIONS_CATALOG } from "@/data/solutions-catalog";
import LanguageSwitcher from "../ui/LanguageSwitcher";

interface HeaderProps {
  locale: string;
  dict?: any;
}

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const isFr = locale === "fr";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
  }, [pathname]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navDict = dict?.nav || {};
  const solutionsDict = navDict.solutionsDropdown || {};

  const odooCatalog = SOLUTIONS_CATALOG.find((s) => s.id === "odoo")!;
  const appCatalog = SOLUTIONS_CATALOG.find((s) => s.id === "app-simulation-profil")!;

  const odooNav = {
    title: solutionsDict.odoo?.title || odooCatalog.name[isFr ? "fr" : "en"],
    status: solutionsDict.odoo?.status || odooCatalog.statusBadge[isFr ? "fr" : "en"],
    description: solutionsDict.odoo?.description || odooCatalog.shortDescription[isFr ? "fr" : "en"],
    ctaDiscover: solutionsDict.odoo?.ctaDiscover || (isFr ? "Découvrir Odoo" : "Discover Odoo"),
    ctaConsult: solutionsDict.odoo?.ctaConsult || (isFr ? "Demander une consultation" : "Request a Consultation"),
    href: odooCatalog.href(locale),
    isAvailable: odooCatalog.isAvailable,
  };

  const appNav = {
    title: solutionsDict.appSimulationProfil?.title || appCatalog.name[isFr ? "fr" : "en"],
    status: solutionsDict.appSimulationProfil?.status || appCatalog.statusBadge[isFr ? "fr" : "en"],
    comingSoon:
      solutionsDict.appSimulationProfil?.comingSoon ||
      appCatalog.secondaryStatusBadge?.[isFr ? "fr" : "en"] ||
      (isFr ? "BIENTÔT DISPONIBLE" : "COMING SOON"),
    category:
      solutionsDict.appSimulationProfil?.category ||
      (isFr ? "Produit logiciel propriétaire INTER-IT" : "INTER-IT Proprietary Software Product"),
    tagline: solutionsDict.appSimulationProfil?.tagline || appCatalog.tagline[isFr ? "fr" : "en"],
    description: solutionsDict.appSimulationProfil?.description || appCatalog.shortDescription[isFr ? "fr" : "en"],
    href: appCatalog.href(locale),
    isAvailable: appCatalog.isAvailable,
  };

  const mainLinks = [
    { href: `/${locale}`, label: navDict.home || (isFr ? "Accueil" : "Home") },
    { href: `/${locale}/solutions/odoo`, label: solutionsDict.title || "Solutions", isDropdown: true },
    { href: `/${locale}/blog`, label: navDict.blog || "Insights & Blog" },
    { href: `/${locale}/about`, label: navDict.about || (isFr ? "À Propos" : "About Us") },
    { href: `/${locale}/contact`, label: navDict.contact || "Contact" },
  ];

  const ctaText =
    navDict.discussProject ||
    dict?.common?.cta?.requestConsultation ||
    (isFr ? "Demander une consultation" : "Request a Consultation");

  const isSolutionsActive = pathname.startsWith(`/${locale}/solutions`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 border-b",
          isScrolled && !isOpen
            ? "bg-[#1D2140]/95 backdrop-blur-md border-white/10 shadow-lg shadow-black/20"
            : "bg-[#1D2140] border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 group cursor-pointer shrink-0">
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
            <nav className="hidden lg:flex items-center space-x-7">
              {mainLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key="solutions-dropdown"
                      ref={dropdownRef}
                      className="relative py-2"
                      onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                      onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsDesktopDropdownOpen((prev) => !prev)}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-[#F39200] cursor-pointer flex items-center gap-1.5 py-1 focus:outline-none",
                          isSolutionsActive ? "text-[#F39200] font-semibold" : "text-white/90"
                        )}
                        aria-expanded={isDesktopDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isDesktopDropdownOpen ? "rotate-180 text-[#F39200]" : ""
                          )}
                        />
                      </button>

                      {/* Solutions Mega Dropdown Menu (Strictly 2 items: A. Odoo Implementation, B. App Simulation Profil) */}
                      {isDesktopDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px] xl:w-[680px] z-50">
                          <div className="rounded-2xl border border-white/15 bg-[#1D2140] p-5 shadow-2xl shadow-black/60 grid grid-cols-2 gap-4 items-stretch">
                            {/* Element A: Odoo Implementation (AVAILABLE) */}
                            <div className="flex flex-col justify-between rounded-xl border-2 border-[#F39200]/60 bg-white/[0.05] p-4 hover:border-[#F39200] transition-colors">
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <div className="p-2 rounded-lg bg-[#F39200]/15 text-[#F39200] border border-[#F39200]/30">
                                    <Layers className="h-5 w-5" />
                                  </div>
                                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-[#F39200] text-white shadow-xs">
                                    <CheckCircle2 className="h-3 w-3" />
                                    <span>{odooNav.status}</span>
                                  </span>
                                </div>

                                <Link
                                  href={odooNav.href}
                                  onClick={() => setIsDesktopDropdownOpen(false)}
                                  className="block group/title"
                                >
                                  <h3 className="text-base font-bold text-white group-hover/title:text-[#F39200] transition-colors mb-1.5">
                                    {odooNav.title}
                                  </h3>
                                </Link>

                                <p className="text-xs text-white/80 leading-relaxed mb-4">
                                  {odooNav.description}
                                </p>
                              </div>

                              <div className="space-y-2 pt-3 border-t border-white/10">
                                <Link
                                  href={odooNav.href}
                                  onClick={() => setIsDesktopDropdownOpen(false)}
                                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F39200] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F39200]/90 transition-all"
                                >
                                  <span>{odooNav.ctaDiscover}</span>
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                  href={`/${locale}/contact`}
                                  onClick={() => setIsDesktopDropdownOpen(false)}
                                  className="w-full inline-flex items-center justify-center px-3.5 py-2 rounded-lg border border-white/25 bg-white/5 text-white text-xs font-semibold hover:bg-white/15 transition-all"
                                >
                                  <span>{odooNav.ctaConsult}</span>
                                </Link>
                              </div>
                            </div>

                            {/* Element B: App Simulation Profil (IN DEVELOPMENT - Non-clickable until official launch) */}
                            {appNav.isAvailable ? (
                              <Link
                                href={appNav.href}
                                onClick={() => setIsDesktopDropdownOpen(false)}
                                className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.03] p-4 hover:border-[#F39200]/50 transition-all"
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-3">
                                    <div className="p-2 rounded-lg bg-white/10 text-[#F39200]">
                                      <Cpu className="h-5 w-5" />
                                    </div>
                                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white">
                                      {appNav.status}
                                    </span>
                                  </div>
                                  <h3 className="text-base font-bold text-white mb-1">{appNav.title}</h3>
                                  <p className="text-xs text-[#F39200] font-semibold mb-2">{appNav.tagline}</p>
                                  <p className="text-xs text-white/75 leading-relaxed">{appNav.description}</p>
                                </div>
                              </Link>
                            ) : (
                              <div
                                aria-disabled="true"
                                role="group"
                                aria-label={`${appNav.title} - ${appNav.status}`}
                                className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.03] p-4 select-none cursor-not-allowed"
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-3">
                                    <div className="p-2 rounded-lg bg-white/10 text-[#F39200] border border-white/15">
                                      <Cpu className="h-5 w-5 text-[#F39200]" />
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-[#F39200]/50 bg-[#F39200]/15 text-[#F39200]">
                                      <span>{appNav.status}</span>
                                    </span>
                                  </div>

                                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1">
                                    {appNav.category}
                                  </div>

                                  <h3 className="text-base font-bold text-white mb-1">
                                    {appNav.title}
                                  </h3>

                                  <p className="text-xs font-bold text-[#F39200] mb-1.5">
                                    « {appNav.tagline} »
                                  </p>

                                  <p className="text-xs text-white/75 leading-relaxed mb-4">
                                    {appNav.description}
                                  </p>
                                </div>

                                <div className="pt-3 border-t border-white/10">
                                  <button
                                    type="button"
                                    disabled
                                    aria-disabled="true"
                                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider cursor-not-allowed"
                                  >
                                    <Lock className="h-3.5 w-3.5 text-[#F39200]" />
                                    <span>{appNav.comingSoon}</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
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
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#F39200] focus:outline-none p-2 rounded-lg border border-white/15 bg-white/5 cursor-pointer transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer (placed outside <header> so backdrop-blur never breaks fixed positioning) */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#1D2140] border-t border-white/10 px-6 py-6 flex flex-col justify-between transition-transform duration-300 lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-2">
          {mainLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key="mobile-solutions" className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={cn(
                      "text-base font-semibold py-2.5 border-b border-white/10 flex items-center justify-between transition-colors hover:text-[#F39200] cursor-pointer w-full text-left",
                      isSolutionsActive ? "text-[#F39200]" : "text-white/95"
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

                  {/* Collapsible Mobile Solutions Sub-items */}
                  {isMobileDropdownOpen && (
                    <div className="py-3 flex flex-col space-y-3 my-1">
                      {/* Mobile Item A: Odoo Implementation */}
                      <div className="rounded-xl border border-[#F39200]/50 bg-white/[0.05] p-4 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-white">{odooNav.title}</span>
                          <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-[#F39200] text-white">
                            {odooNav.status}
                          </span>
                        </div>
                        <p className="text-xs text-white/80 leading-relaxed">
                          {odooNav.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <Link
                            href={odooNav.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#F39200] text-white text-xs font-bold uppercase tracking-wider"
                          >
                            <span>{odooNav.ctaDiscover}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <Link
                            href={`/${locale}/contact`}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center px-3 py-2.5 rounded-lg border border-white/25 bg-white/5 text-white text-xs font-semibold"
                          >
                            <span>{odooNav.ctaConsult}</span>
                          </Link>
                        </div>
                      </div>

                      {/* Mobile Item B: App Simulation Profil (Disabled) */}
                      {appNav.isAvailable ? (
                        <Link
                          href={appNav.href}
                          onClick={() => setIsOpen(false)}
                          className="rounded-xl border border-white/15 bg-white/5 p-4 space-y-2 block"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-white">{appNav.title}</span>
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
                              {appNav.status}
                            </span>
                          </div>
                          <p className="text-xs text-white/75">{appNav.description}</p>
                        </Link>
                      ) : (
                        <div
                          aria-disabled="true"
                          className="rounded-xl border border-white/15 bg-white/[0.03] p-4 space-y-2 select-none"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-white">{appNav.title}</span>
                            <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full border border-[#F39200]/50 bg-[#F39200]/15 text-[#F39200]">
                              {appNav.status}
                            </span>
                          </div>
                          <div className="text-[10px] uppercase font-semibold tracking-wider text-white/60">
                            {appNav.category}
                          </div>
                          <p className="text-xs font-bold text-[#F39200]">
                            « {appNav.tagline} »
                          </p>
                          <p className="text-xs text-white/75 leading-relaxed">
                            {appNav.description}
                          </p>
                          <div className="pt-1">
                            <button
                              type="button"
                              disabled
                              aria-disabled="true"
                              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider cursor-not-allowed"
                            >
                              <Lock className="h-3.5 w-3.5 text-[#F39200]" />
                              <span>{appNav.comingSoon}</span>
                            </button>
                          </div>
                        </div>
                      )}
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
    </>
  );
}
