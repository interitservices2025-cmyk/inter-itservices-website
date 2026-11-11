"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Button from "../ui/Button";

interface IntroSectionProps {
  dict: any;
  locale: string;
}

export default function IntroSection({ dict, locale }: IntroSectionProps) {
  const isFr = locale === "fr";

  const pillarIcons = [Zap, Cpu, ShieldCheck];
  const pillars = (dict.intro?.pillars || []).map((p: any, idx: number) => ({
    icon: pillarIcons[idx] || Zap,
    title: p.title,
    desc: p.desc,
  }));

  const techRows = dict.intro?.techConsole?.rows || [];

  return (
    <SectionContainer id="about-inter-it" bgType="transparent" className="py-16 sm:py-24 border-b border-slate-200 bg-white relative overflow-hidden">
      {/* Subtle technological background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,33,64,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,33,64,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Crisp, uncluttered value proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-slate-50 shadow-2xs text-[#1D2140] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
              <span>{dict.intro?.badge || (isFr ? "À propos d'INTER-IT" : "About INTER-IT")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D2140] tracking-tight leading-tight">
              {dict.intro?.title}
            </h2>

            <div className="h-1 w-16 bg-[#F39200] rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.intro?.description}
            </p>

            {/* 3 Concise Product-Focused Pillars */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((p: any, idx: number) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#F39200]/10 text-[#F39200] shrink-0 mt-0.5 border border-[#F39200]/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1D2140]">{p.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <Link href={`/${locale}/about`}>
                <Button
                  variant="outline"
                  className="gap-2 text-xs font-bold uppercase tracking-wider text-[#1D2140] border-slate-300 hover:border-[#1D2140] hover:bg-[#1D2140] hover:text-white transition-all duration-200"
                >
                  <span>{dict.intro?.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Product Focus Console (Strictly Inter-IT Palette) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#1D2140] border border-white/10 p-6 sm:p-8 shadow-xl relative overflow-hidden text-white">
              {/* Radial glow strictly in Inter-IT Orange */}
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-[#F39200]/15 blur-[90px] pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F39200]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold">
                    {dict.intro?.techConsole?.header || "INTER-IT // ORIENTATION_PRODUITS"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F39200] bg-[#F39200]/10 px-2.5 py-0.5 rounded border border-[#F39200]/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F39200] animate-pulse" />
                  <span>{dict.intro?.techConsole?.status || "ACTIF"}</span>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-3.5 relative z-10 font-mono text-xs">
                {techRows.map((row: any, rIdx: number) => (
                  <div key={rIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F39200]/50 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#F39200] font-bold">{row.tag}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">{row.subtag}</span>
                    </div>
                    <p className="text-slate-300 text-xs font-sans leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Console Telemetry Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F39200]" />
                  <span>{isFr ? "Qualité, Maîtrise & Utilité Opérationnelle" : "Quality, Mastery & Operational Utility"}</span>
                </div>
                <div>
                  <span>Ontario, Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
