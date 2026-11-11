import React from "react";
import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OdooSectionHome from "@/components/sections/OdooSectionHome";
import ProprietaryProductSection from "@/components/sections/ProprietaryProductSection";
import IntroSection from "@/components/sections/IntroSection";
import BlogSectionHome from "@/components/sections/BlogSectionHome";
import ContactSection from "@/components/sections/ContactSection";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Section 1 – Hero */}
      <HeroSection dict={dict} locale={locale} />

      {/* Section 2 – À propos d'INTER-IT */}
      <IntroSection dict={dict} locale={locale} />

      {/* Section 3 – Nos solutions (Odoo Implementation [DISPONIBLE] & App Simulation Profil [EN DÉVELOPPEMENT]) */}
      <ServicesSection dict={dict} locale={locale} />

      {/* Section 4 – Focus Odoo */}
      <OdooSectionHome dict={dict} locale={locale} />

      {/* Section 5 – Nos propres solutions (App Simulation Profil) */}
      <ProprietaryProductSection dict={dict} locale={locale} />

      {/* Articles & Ressources Odoo */}
      <BlogSectionHome dict={dict} locale={locale} />

      {/* Section 6 – Contact */}
      <ContactSection dict={dict} locale={locale} />
    </div>
  );
}
