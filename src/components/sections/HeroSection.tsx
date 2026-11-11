"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, Cpu, CheckCircle2, Clock } from "lucide-react";
import Button from "../ui/Button";

interface HeroSectionProps {
  dict: any;
  locale: string;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  const isFr = locale === "fr";
  const highlightIcons = [CheckCircle2, Layers, Clock, Cpu];
  const highlights = (dict.hero?.highlights || [
    { label: isFr ? "Odoo Implementation — Disponible" : "Odoo Implementation — Available" },
    { label: isFr ? "Gestion d'entreprise centralisée" : "Centralized Business Management" },
    { label: isFr ? "App Simulation Profil — En développement" : "App Simulation Profil — In Development" },
    { label: isFr ? "Solutions logicielles propriétaires" : "Proprietary Software Products" },
  ]).map((item: any, idx: number) => ({
    icon: highlightIcons[idx] || Layers,
    label: item.label,
  }));

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#1D2140] text-white">
      {/* Subtle tech background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Gradient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F39200]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs sm:text-sm font-bold tracking-wider uppercase mb-8 shadow-sm">
          <Sparkles className="h-4 w-4 text-[#F39200]" />
          <span>{dict.hero?.badge || "SOLUTIONS LOGICIEL & ERP"}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
          {dict.hero?.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
          {dict.hero?.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Primary CTA: Découvrir nos solutions */}
          <a href="#solutions" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto gap-2.5 px-8 py-3.5 text-base font-bold shadow-xl shadow-[#F39200]/25 hover:scale-[1.02] transition-all"
            >
              <span>{dict.hero?.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>

          {/* Secondary CTA: Nous contacter */}
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
            <Button
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold"
            >
              {dict.hero?.ctaSecondary}
            </Button>
          </Link>
        </div>

        {/* Highlights Preview Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-white/10">
          {highlights.map((item: { icon: any; label: string }, idx: number) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs sm:text-sm font-medium"
              >
                <Icon className="h-4 w-4 text-[#F39200] shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
