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
      {/* Background card with glassmorphism and gradients */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 p-8 md:p-16 text-center max-w-5xl mx-auto"
      >
        {/* Glow ambient background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 to-indigo-500/5 blur-[100px] pointer-events-none" />

        {/* Tech Grid Line Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Tag Icon */}
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6">
            <HelpCircle className="h-6 w-6" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            {dict.ctaSection.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            {dict.ctaSection.subtitle}
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-amber-500/15">
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
