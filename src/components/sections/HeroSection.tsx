"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, CheckCircle, Database, BarChart3, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface HeroSectionProps {
  dict: any;
  locale: string;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  const highlights = [
    { icon: Layers, label: locale === "fr" ? "CRM & Ventes" : "CRM & Sales" },
    { icon: Database, label: locale === "fr" ? "Stocks & Achats" : "Inventory" },
    { icon: BarChart3, label: locale === "fr" ? "Facturation & Compta" : "Invoicing" },
    { icon: Users2, label: locale === "fr" ? "Gestion de Projets" : "Projects" },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#1D2140]">
      {/* Subtle tech background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Gradient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F39200]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge ODOO IMPLEMENTATION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F39200]/30 bg-[#F39200]/10 text-[#F39200] text-xs sm:text-sm font-bold tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#F39200]" />
          <span>{dict.hero.badge || "ODOO IMPLEMENTATION"}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          {dict.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          {/* Primary CTA: Brand Orange */}
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto gap-2.5 px-8 py-3.5 text-base font-bold shadow-xl shadow-[#F39200]/25 hover:scale-[1.02] transition-all"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          {/* Secondary CTA: Odoo dedicated page */}
          <Link href={`/${locale}/solutions/odoo`} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white"
            >
              {dict.hero.ctaSecondary}
            </Button>
          </Link>
        </motion.div>

        {/* ERP Features Preview Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-white/10"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-[#F39200] shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
