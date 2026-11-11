"use client";

import React from "react";
import {
  Cpu,
  Globe2,
  CheckCircle2,
  Lock,
  Sparkles,
  FileText,
  Info,
  Clock,
} from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

interface ProprietaryProductSectionProps {
  dict: any;
  locale: string;
}

export default function ProprietaryProductSection({
  dict,
  locale,
}: ProprietaryProductSectionProps) {
  const isFr = locale === "fr";
  const propDict = dict.proprietaryHome || {};

  const features: string[] = propDict.features || [];
  const regions: { name: string; desc: string }[] = propDict.regions || [
    {
      name: "Canada",
      desc: isFr
        ? "Analyse des possibilités selon les critères applicables au Canada."
        : "Analysis of opportunities based on criteria applicable to Canada.",
    },
    {
      name: "Europe",
      desc: isFr
        ? "Analyse des possibilités selon les critères applicables en Europe."
        : "Analysis of opportunities based on criteria applicable to Europe.",
    },
    {
      name: isFr ? "Afrique" : "Africa",
      desc: isFr
        ? "Analyse des possibilités selon les critères applicables en Afrique."
        : "Analysis of opportunities based on criteria applicable to Africa.",
    },
  ];

  return (
    <SectionContainer
      id="proprietary-solutions"
      bgType="light"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,33,64,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,33,64,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-white text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
            <span>
              {propDict.badge ||
                (isFr
                  ? "Produit Propriétaire en Développement"
                  : "Proprietary Product in Development")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D2140] tracking-tight mb-5">
            {propDict.title ||
              (isFr
                ? "Nous développons nos propres solutions."
                : "We develop our own solutions.")}
          </h2>

          <div className="h-1.5 w-24 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {propDict.subtitle}
          </p>
        </div>

        {/* Main Showcase Layout: Left (Capabilities & Positioning) + Right (Distinctive Product Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (7 cols): Detailed Product Positioning & 8 Planned Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Card
              hoverEffect={false}
              className="h-full border-slate-200 bg-white p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#F39200] block mb-1">
                      INTER-IT SERVICES INC.
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140]">
                      {propDict.productName || "App Simulation Profil"}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/10 text-[#F39200] text-xs font-extrabold uppercase tracking-wider">
                    <span>
                      {propDict.statusBadge ||
                        (isFr ? "EN DÉVELOPPEMENT" : "IN DEVELOPMENT")}
                    </span>
                  </span>
                </div>

                {/* Positioning & Main Value Proposition */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {propDict.positioning}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1D2140] text-white font-bold text-sm sm:text-base">
                    <Clock className="h-4 w-4 text-[#F39200]" />
                    <span>
                      {propDict.tagline ||
                        (isFr
                          ? "Évaluez votre profil en 5 minutes."
                          : "Evaluate your profile in 5 minutes.")}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium pt-1">
                    {propDict.description}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {propDict.subDescription}
                  </p>
                </div>

                {/* Planned Features (Strictly the 8 confirmed items) */}
                <div className="pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1D2140] mb-4 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#F39200]" />
                    <span>
                      {propDict.featuresTitle ||
                        (isFr
                          ? "Capacités prévues de la plateforme"
                          : "Planned Platform Capabilities")}
                    </span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feat: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#F39200] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mandatory Editorial Precaution / Disclaimer */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#1D2140] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {propDict.editorialDisclaimer}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column (5 cols): Visual Product Card for App Simulation Profil */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-2xl bg-[#1D2140] text-white p-8 sm:p-9 border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Subtle brand glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#F39200]/15 blur-[90px] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header & Badge EN DÉVELOPPEMENT */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#F39200] border border-white/15">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <span className="font-extrabold text-lg text-white">
                      {propDict.productName || "App Simulation Profil"}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F39200]/50 bg-[#F39200]/15 text-[#F39200]">
                    {propDict.statusBadge ||
                      (isFr ? "EN DÉVELOPPEMENT" : "IN DEVELOPMENT")}
                  </span>
                </div>

                {/* Accroche */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/60 block mb-1">
                    {isFr ? "Proposition de valeur" : "Value Proposition"}
                  </span>
                  <p className="text-xl font-extrabold text-[#F39200]">
                    «{" "}
                    {propDict.tagline ||
                      (isFr
                        ? "Évaluez votre profil en 5 minutes."
                        : "Evaluate your profile in 5 minutes.")}{" "}
                    »
                  </p>
                </div>

                {/* Card Description */}
                <p className="text-sm text-slate-200 leading-relaxed">
                  {propDict.cardDescription}
                </p>

                {/* Visual Representation of the Three Geographic Zones: Canada, Europe, Afrique */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                    <Globe2 className="h-4 w-4 text-[#F39200]" />
                    <span>
                      {propDict.regionsTitle ||
                        (isFr
                          ? "Destinations couvertes"
                          : "Covered Destinations")}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {regions.map((region, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3"
                      >
                        <div className="h-6 w-6 rounded-full bg-[#F39200]/20 border border-[#F39200]/40 text-[#F39200] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                          {rIdx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">
                            {region.name}
                          </div>
                          <div className="text-xs text-slate-300 leading-relaxed">
                            {region.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indication of ongoing development */}
                <div className="p-4 rounded-xl bg-[#F39200]/10 border border-[#F39200]/30 text-xs text-white/90 leading-relaxed">
                  {propDict.devIndication ||
                    (isFr
                      ? "Notre solution est actuellement en cours de développement. Son lancement sera annoncé prochainement."
                      : "Our solution is currently in development. Its official launch will be announced soon.")}
                </div>
              </div>

              {/* Non-clickable Button / Visual Indication: BIENTÔT DISPONIBLE */}
              <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-white/20 bg-white/10 text-white/75 text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-not-allowed select-none"
                >
                  <Lock className="h-4 w-4 text-[#F39200]" />
                  <span>
                    {propDict.comingSoonBadge ||
                      (isFr ? "BIENTÔT DISPONIBLE" : "COMING SOON")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
