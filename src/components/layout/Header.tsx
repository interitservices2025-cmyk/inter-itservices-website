"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../ui/LanguageSwitcher";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { href: `/${locale}`, label: locale === "fr" ? "Accueil" : "Home" },
    { href: `/${locale}/about`, label: locale === "fr" ? "À Propos" : "About" },
    { href: `/${locale}/services`, label: locale === "fr" ? "Services" : "Services" },
    { href: `/${locale}/ai-solutions`, label: locale === "fr" ? "Solutions IA" : "AI Solutions" },
    { href: `/${locale}/portfolio`, label: locale === "fr" ? "Portfolio" : "Portfolio" },
    { href: `/${locale}/training`, label: locale === "fr" ? "Formations" : "Training" },
    { href: `/${locale}/contact`, label: locale === "fr" ? "Contact" : "Contact" },
  ];

  const ctaText = locale === "fr" ? "Consultation" : "Consultation";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md py-4 border-slate-900/60 shadow-lg shadow-slate-950/20"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Image
              src="/images/logo/Logo 2.svg"
              alt="INTER-IT SERVICES INC"
              width={140}
              height={48}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              // Exact match for home, startsWith for others
              const isActive =
                link.href === `/${locale}`
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-500 cursor-pointer relative py-1",
                    isActive ? "text-amber-500 font-semibold" : "text-slate-300"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
              <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 active:scale-[0.98] cursor-pointer gap-1.5 shadow-md shadow-amber-500/10">
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
              className="text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-slate-800 bg-slate-900/50 cursor-pointer"
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
          "fixed inset-x-0 top-[73px] bottom-0 z-40 bg-slate-950 border-t border-slate-900 px-6 py-8 flex flex-col justify-between transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === `/${locale}`
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 border-b border-slate-900 transition-colors hover:text-amber-500 cursor-pointer",
                  isActive ? "text-amber-500 font-semibold" : "text-slate-300"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="pb-8">
          <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
            <button className="w-full inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-base font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 cursor-pointer gap-2 shadow-lg shadow-amber-500/10">
              <span>{ctaText}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
