"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  BarChart3,
  Database,
  Users2,
  Settings2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface OdooSectionHomeProps {
  dict: any;
  locale: string;
}

export default function OdooSectionHome({ dict, locale }: OdooSectionHomeProps) {
  const isFr = locale === "fr";
  const odooHome = dict.odooHome || {};
  const domainIcons = [Users2, Layers, BarChart3, Database, Settings2, Sparkles];

  const domains = (odooHome.domains || []).map((d: any, idx: number) => ({
    icon: domainIcons[idx] || Layers,
    title: d.title,
    description: d.description,
  }));

  const steps = odooHome.steps || [];

  return (
    <SectionContainer
      id="odoo-overview"
      bgType="transparent"
      className="py-20 sm:py-28 border-t border-b border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F39200]/30 bg-[#F39200]/10 text-[#F39200] text-xs font-extrabold uppercase tracking-wider mb-4">
            <Layers className="h-3.5 w-3.5 text-[#F39200]" />
            <span>{odooHome.badge || (isFr ? "Focus Solution Disponible" : "Featured Available Solution")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D2140] tracking-tight mb-5">
            {odooHome.title ||
              (isFr
                ? "Odoo – Une gestion d'entreprise centralisée."
                : "Odoo – Centralized Business Management.")}
          </h2>

          <div className="h-1.5 w-24 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {odooHome.subtitle}
          </p>
        </div>

        {/* Sub-section 1: Domaines couverts */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D2140] mb-3">
              {odooHome.challengesTitle ||
                (isFr
                  ? "Pourquoi centraliser votre gestion avec Odoo ?"
                  : "Why Centralize Your Operations with Odoo?")}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              {odooHome.challengesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain: any, index: number) => {
              const Icon = domain.icon;
              return (
                <div key={index} className="h-full">
                  <Card
                    glowColor="secondary"
                    className="h-full border-slate-200 bg-slate-50/70 p-7 flex flex-col justify-between hover:bg-white hover:border-[#F39200]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-3.5">
                      <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl inline-block border border-[#F39200]/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1D2140] leading-snug">
                        {domain.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {domain.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-[#F39200]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{odooHome.provenBadge || (isFr ? "Solution disponible" : "Available Solution")}</span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sub-section 2: Accompagnement proposé (7 étapes) */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-3">
              {odooHome.stepsTitle ||
                (isFr
                  ? "Notre méthode d'accompagnement en 7 étapes"
                  : "Our 7-Step Implementation Methodology")}
            </h3>
            <div className="h-1 w-16 bg-[#F39200] mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base">
              {odooHome.stepsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step: any, idx: number) => (
              <Card
                key={step.step}
                hoverEffect={true}
                className={`border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#1D2140]/30 shadow-xs ${
                  idx === 6 ? "sm:col-span-2 lg:col-span-2 border-[#F39200]/40 bg-slate-50/60" : ""
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#F39200] font-mono">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[#1D2140]">
                      {isFr ? `Étape ${idx + 1}` : `Step ${idx + 1}`}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1D2140]">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Callout Action Banner with Both Mandatory Buttons */}
        <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#F39200]/15 blur-[90px] pointer-events-none" />

          <div className="space-y-2.5 text-center lg:text-left relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {odooHome.callout?.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {odooHome.callout?.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto relative z-10">
            <Link href={`/${locale}/solutions/odoo`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-[#F39200]/25"
              >
                <span>{odooHome.ctaDiscover || (isFr ? "Découvrir Odoo" : "Discover Odoo")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="outline-light"
                className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5"
              >
                <span>
                  {odooHome.ctaConsult || (isFr ? "Demander une consultation" : "Request a Consultation")}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
