import React from "react";
import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AISectionHome from "@/components/sections/AISectionHome";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection dict={dict} locale={locale} />

      {/* 2. Trusted By Branding Bar */}
      <TrustedBy dict={dict} />

      {/* 3. Core Services Section */}
      <ServicesSection dict={dict} locale={locale} />

      {/* 5. Why Choose Us Section */}
      <WhyUsSection dict={dict} />

      {/* 5.5 Premium AI & Automation Section */}
      <AISectionHome dict={dict} locale={locale} />

      {/* 6. Featured Portfolio Case Studies */}
      <PortfolioSection dict={dict} locale={locale} />

      {/* 7. Client Testimonials */}
      <TestimonialsSection dict={dict} locale={locale} />

      {/* 9. Interactive Call-To-Action Banner */}
      <CTASection dict={dict} locale={locale} />

      {/* 10. Contact Information & Message Form */}
      <ContactSection dict={dict} locale={locale} />
    </div>
  );
}
