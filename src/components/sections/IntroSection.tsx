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

  const pillars = [
    {
      icon: Zap,
      title: isFr ? "Pragmatisme Opérationnel" : "Pragmatic Delivery",
      desc: isFr
        ? "Déploiement agile par étapes sans interruption de vos activités quotidiennes."
        : "Agile, phased deployment with zero disruption to daily business operations.",
    },
    {
      icon: ShieldCheck,
      title: isFr ? "Sécurité & Robustesse" : "Security & Reliability",
      desc: isFr
        ? "Architectures modernes, données centralisées et conformité stricte."
        : "Modern architectures, centralized data governance, and strict compliance.",
    },
    {
      icon: Cpu,
      title: isFr ? "Transfert de Compétences" : "Knowledge Transfer",
      desc: isFr
        ? "Ateliers et accompagnement direct pour rendre vos équipes 100% autonomes."
        : "Hands-on workshops and direct support to make your teams fully autonomous.",
    },
  ];

  return (
    <SectionContainer bgType="light" className="py-16 sm:py-24 border-b border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle technological background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,33,64,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,33,64,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Crisp, uncluttered value proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-white shadow-2xs text-[#1D2140] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
              <span>{isFr ? "À Propos d'INTER-IT Services" : "About INTER-IT Services"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D2140] tracking-tight leading-tight">
              {isFr
                ? "L'ingénierie technologique au service de la performance de votre entreprise"
                : "Technological engineering driving your business operational excellence"}
            </h2>

            <div className="h-1 w-16 bg-[#F39200] rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isFr
                ? "Nous accompagnons les PME et organisations dans la modernisation de leur gestion. De l'implémentation d'Odoo au développement web sur mesure et à l'automatisation par l'IA, nous concevons des solutions concrètes, évolutives et sans superflu."
                : "We guide SMEs and organizations through operational modernization. From Odoo implementation to custom web development and AI-driven workflow automation, we deliver practical, scalable digital solutions."}
            </p>

            {/* 3 Concise Tech Pillars */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((p, idx) => {
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
                  <span>{isFr ? "Découvrir notre histoire & vision" : "Discover our background & vision"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek Tech Console / Architecture Specs (Strictly Inter-IT Palette) */}
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
                    INTER-IT // SYSTEM_ARCHITECTURE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F39200] bg-[#F39200]/10 px-2.5 py-0.5 rounded border border-[#F39200]/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F39200] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* 4 Core Competence Rows - Styled with Inter-IT Orange & White */}
              <div className="space-y-3.5 relative z-10 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F39200]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#F39200] font-bold">01 // ERP & GESTION</span>
                    <span className="text-[10px] text-slate-400">ODOO IMPLEMENTATION</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans">
                    {isFr
                      ? "Configuration CRM, Ventes, Facturation, Stocks & Comptabilité unifiée."
                      : "Unified CRM, Sales, Billing, Inventory & Financial operations setup."}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F39200]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#F39200] font-bold">02 // CLOUD & WEB DEV</span>
                    <span className="text-[10px] text-slate-400">NEXT.JS & APIS</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans">
                    {isFr
                      ? "Plateformes haute performance, SEO B2B et interfaces réactives sur mesure."
                      : "High-speed modern platforms, B2B SEO and responsive custom portals."}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F39200]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#F39200] font-bold">03 // IA & AUTOMATISATION</span>
                    <span className="text-[10px] text-slate-400">WORKFLOWS & N8N</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans">
                    {isFr
                      ? "Assistants IA sur mesure et automatisation de flux de données sans redondance."
                      : "Custom AI assistants and zero-redundancy automated data workflows."}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F39200]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#F39200] font-bold">04 // ATELIERS DE FORMATION</span>
                    <span className="text-[10px] text-slate-400">PÉDAGOGIE PRATIQUE</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans">
                    {isFr
                      ? "Montée en compétences rapide sur ERP, productivité IA et outils digitaux."
                      : "Rapid upskilling in ERP usage, AI productivity tools, and digital literacy."}
                  </p>
                </div>
              </div>

              {/* Console Telemetry Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F39200]" />
                  <span>{isFr ? "Méthodologie 100% Agile" : "100% Agile Delivery"}</span>
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
