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
    { href: `/${locale}/portfolio`, label: dict.nav.projects },
    { href: `/${locale}/training`, label: dict.nav.training },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-[#0B163F] border-t border-white/10 pt-16 pb-8 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <Image
                src="/images/logo/Logo 2.svg"
                alt="INTER-IT SERVICES INC"
                width={140}
                height={48}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              {dict.footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-white/5 hover:bg-[#F7931E] hover:text-white p-2 rounded-lg transition-all duration-300 text-white/70 border border-white/10 shadow-sm hover:shadow-[#F7931E]/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-[#F7931E] hover:text-white p-2 rounded-lg transition-all duration-300 text-white/70 border border-white/10 shadow-sm hover:shadow-[#F7931E]/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-[#F7931E] hover:text-white p-2 rounded-lg transition-all duration-300 text-white/70 border border-white/10 shadow-sm hover:shadow-[#F7931E]/20"
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
                    className="text-white/80 hover:text-[#F7931E] transition-colors duration-200"
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
              <MapPin className="h-5 w-5 text-[#F7931E] shrink-0 mt-0.5" />
              <span className="text-white/80">
                {dict.footer.address}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-[#F7931E] shrink-0" />
              <a
                href={`mailto:${dict.common.email}`}
                className="text-white/80 hover:text-[#F7931E] transition-colors"
              >
                {dict.common.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-[#F7931E] shrink-0" />
              <a
                href={`tel:${dict.common.phone.replace(/[^0-9+]/g, "")}`}
                className="text-white/80 hover:text-[#F7931E] transition-colors"
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
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              {dict.footer.newsletterDesc}
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={dict.footer.newsletterPlaceholder}
                aria-label={dict.footer.newsletterPlaceholder}
                className="bg-white/5 border border-white/10 focus:border-[#F7931E] focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 w-full transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#F7931E] hover:bg-[#F7931E]/90 text-white font-semibold transition-colors duration-300 rounded-lg px-4 py-2.5 text-sm text-center cursor-pointer shadow-md shadow-[#F7931E]/20"
              >
                {dict.common.cta.getStarted}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-white/60">
          <p>{dict.footer.copyright.replace("{year}", currentYear.toString())}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#F7931E] transition-colors">
              {dict.footer.legal.split("|")[0].trim()}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#F7931E] transition-colors">
              {dict.footer.legal.split("|")[1].trim()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
