import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const dict = await getDictionary(locale);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/training`, label: dict.nav.training },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <Image
                src="/images/logo/Logo 2.svg"
                alt="INTER-IT SERVICES INC"
                width={140}
                height={48}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {dict.footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-500 hover:text-slate-950 p-2 rounded-lg transition-all duration-300 text-slate-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-500 hover:text-slate-950 p-2 rounded-lg transition-all duration-300 text-slate-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-500 hover:text-slate-950 p-2 rounded-lg transition-all duration-300 text-slate-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base mb-4">
              {dict.footer.contactInfo}
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <span>
                {dict.footer.address}
                <br />
                Brampton, Ontario, Canada
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-amber-500 shrink-0" />
              <a
                href={`mailto:${dict.common.email}`}
                className="hover:text-amber-500 transition-colors"
              >
                {dict.common.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-amber-500 shrink-0" />
              <a
                href={`tel:${dict.common.phone.replace(/[^0-9+]/g, "")}`}
                className="hover:text-amber-500 transition-colors"
              >
                {dict.common.phone}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              {dict.footer.newsletter}
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {dict.footer.newsletterDesc}
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={dict.footer.newsletterPlaceholder}
                aria-label={dict.footer.newsletterPlaceholder}
                className="bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 w-full transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 font-semibold transition-colors duration-300 rounded-lg px-4 py-2.5 text-sm text-white text-center cursor-pointer"
              >
                {dict.common.cta.getStarted}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs">
          <p>{dict.footer.copyright.replace("{year}", currentYear.toString())}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500 transition-colors">
              {dict.footer.legal.split("|")[0].trim()}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">
              {dict.footer.legal.split("|")[1].trim()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
