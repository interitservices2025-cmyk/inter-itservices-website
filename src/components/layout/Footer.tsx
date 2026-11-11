import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Facebook, Instagram, ArrowRight, Lock } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { BRAND } from "@/constants/brand";
import { SOLUTIONS_CATALOG } from "@/data/solutions-catalog";

interface FooterProps {
  locale: string;
  dict?: any;
}

export default async function Footer({ locale, dict: propDict }: FooterProps) {
  const dict = propDict || (await getDictionary(locale));
  const currentYear = new Date().getFullYear();
  const isFr = locale === "fr";

  const odooCatalog = SOLUTIONS_CATALOG.find((s) => s.id === "odoo")!;
  const appCatalog = SOLUTIONS_CATALOG.find((s) => s.id === "app-simulation-profil")!;

  const companyLinks = [
    { href: `/${locale}`, label: dict.nav?.home || (isFr ? "Accueil" : "Home") },
    { href: `/${locale}/about`, label: dict.nav?.about || (isFr ? "À Propos" : "About Us") },
    { href: `/${locale}/blog`, label: dict.nav?.blog || "Insights & Blog" },
    { href: `/${locale}/contact`, label: dict.nav?.contact || "Contact" },
  ];

  return (
    <footer className="bg-[#1D2140] border-t border-white/10 pt-16 pb-10 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href={`/${locale}`} className="inline-block group">
              <Image
                src="/images/logo/Logo 2.svg"
                alt="INTER-IT SERVICES INC"
                width={145}
                height={48}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              {dict.footer.tagline}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#F39200]">
                <span>{dict.footer.b2bBadge}</span>
              </span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#F39200] hover:text-white p-2.5 rounded-lg transition-all duration-300 text-white/80 border border-white/10 shadow-sm"
                aria-label="Facebook INTER-IT Services"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#F39200] hover:text-white p-2.5 rounded-lg transition-all duration-300 text-white/80 border border-white/10 shadow-sm"
                aria-label="Instagram INTER-IT Services"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#F39200] hover:text-white p-2.5 rounded-lg transition-all duration-300 text-white/80 border border-white/10 shadow-sm"
                aria-label="LinkedIn INTER-IT Services"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Col (3 cols) - Strictly Odoo Implementation (Available) & App Simulation Profil (In Development) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#F39200] pl-2.5">
              {dict.footer.solutionsTitle || "Solutions"}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <Link
                  href={odooCatalog.href(locale)}
                  className="text-white/85 hover:text-[#F39200] transition-colors duration-200 flex items-center justify-between gap-2 group"
                >
                  <span className="flex items-center gap-1.5 font-semibold">
                    <ArrowRight className="h-3.5 w-3.5 text-[#F39200]" />
                    <span>{odooCatalog.name[isFr ? "fr" : "en"]}</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F39200] text-white">
                    {odooCatalog.statusBadge[isFr ? "fr" : "en"]}
                  </span>
                </Link>
              </li>

              <li>
                {appCatalog.isAvailable ? (
                  <Link
                    href={appCatalog.href(locale)}
                    className="text-white/80 hover:text-[#F39200] transition-colors duration-200 flex items-center justify-between gap-2"
                  >
                    <span>{appCatalog.name[isFr ? "fr" : "en"]}</span>
                  </Link>
                ) : (
                  <div
                    aria-disabled="true"
                    className="text-white/55 flex items-center justify-between gap-2 select-none cursor-not-allowed"
                  >
                    <span className="flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-white/40 shrink-0" />
                      <span>{appCatalog.name[isFr ? "fr" : "en"]}</span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] shrink-0">
                      {appCatalog.statusBadge[isFr ? "fr" : "en"]}
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Company Col (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#F39200] pl-2.5">
              {dict.footer.companyTitle || (isFr ? "Entreprise" : "Company")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#F39200] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#F39200] pl-2.5">
              {dict.footer.contactTitle || "Contact"}
            </h3>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-white/75">
              <MapPin className="h-4 w-4 text-[#F39200] shrink-0 mt-0.5" />
              <span>{dict.footer.address || "Ontario, Canada"}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <Mail className="h-4 w-4 text-[#F39200] shrink-0" />
              <a
                href={`mailto:${dict.common.email}`}
                className="text-white/75 hover:text-[#F39200] transition-colors"
              >
                {dict.common.email}
              </a>
            </div>
            <div className="pt-2">
              <Link href={`/${locale}/contact`} className="inline-block">
                <span className="text-xs font-bold text-[#F39200] hover:underline flex items-center gap-1">
                  <span>
                    {dict.footer.consultationCta ||
                      (isFr ? "Demander une consultation" : "Request a Consultation")}
                  </span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-white/50">
          <p>{dict.footer.copyright.replace("{year}", currentYear.toString())}</p>
          <p className="text-white/50">{dict.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
