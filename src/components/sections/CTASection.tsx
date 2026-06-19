"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Button from "../ui/Button";

interface CTASectionProps {
  dict: any;
  locale: string;
}

export default function CTASection({ dict, locale }: CTASectionProps) {
  return (
    <SectionContainer id="cta" bgType="transparent">
      {/* Background card with clean white/gray mode layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-8 md:p-16 text-center max-w-5xl mx-auto shadow-sm hover:border-[#0B163F]/10 transition-all duration-300 hover:scale-[1.01]"
      >
        {/* Glow ambient background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#F7931E]/5 to-[#0B163F]/5 blur-[100px] pointer-events-none" />

        {/* Tech Grid Line Overlay in Light Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Tag Icon */}
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-orange-50 border border-orange-100 text-[#F7931E] mb-6">
            <HelpCircle className="h-6 w-6" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B163F] mb-6 leading-tight">
            {dict.ctaSection.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {dict.ctaSection.subtitle}
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-[#F7931E]/15">
                <span>{dict.ctaSection.button}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={`/${locale}/about`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {locale === "fr" ? "En savoir plus" : "Learn More"}
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
