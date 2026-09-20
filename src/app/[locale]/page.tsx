import React from "react";
import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OdooSectionHome from "@/components/sections/OdooSectionHome";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TrainingSection from "@/components/sections/TrainingSection";
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
      {/* 1. Hero Section - Odoo Priority */}
      <HeroSection dict={dict} locale={locale} />

      {/* 2. Short Presentation: Who is INTER-IT Services? */}
      <IntroSection dict={dict} locale={locale} />

      {/* 3. Core 6 Solutions (Odoo, Web, AI, Apps, Marketing, Training) */}
      <ServicesSection dict={dict} locale={locale} />

      {/* 4. Odoo Featured Section (Centralize & Simplify) */}
      <OdooSectionHome dict={dict} locale={locale} />

      {/* 5. Why Choose INTER-IT Services? (Verified arguments) */}
      <WhyUsSection dict={dict} />

      {/* 6. Proven 4-step Delivery Methodology */}
      <ProcessSection dict={dict} locale={locale} />

      {/* 7. Hands-on Training & Upskilling */}
      <TrainingSection dict={dict} locale={locale} />

      {/* 8. Insights & Blog (Odoo & SME Digitalization) */}
      <BlogSectionHome dict={dict} locale={locale} />

      {/* 9. Real Functional Contact Form */}
      <ContactSection dict={dict} locale={locale} />
    </div>
  );
}
