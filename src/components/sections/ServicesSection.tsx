"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  Info,
} from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface ServicesSectionProps {
  dict: any;
  locale: string;
}

export default function ServicesSection({ dict, locale }: ServicesSectionProps) {
  const isFr = locale === "fr";
  const overview = dict.solutionsOverview || {};
  const odooCard = overview.odooCard || {};
  const appCard = overview.appCard || {};

  return (
    <SectionContainer id="solutions" bgType="light" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle brand glow (Strictly Inter-IT Orange #F39200 & Navy #1D2140) */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#F39200]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#1D2140]/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-white shadow-2xs text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
          <span>{overview.badge || (isFr ? "Nos Solutions" : "Our Solutions")}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D2140] mb-5 leading-tight">
          {overview.title || (isFr ? "Des solutions pensées pour des besoins réels." : "Solutions designed for real needs.")}
        </h2>

        <div className="h-1.5 w-24 bg-[#F39200] mx-auto rounded-full mb-6" />

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {overview.subtitle ||
            (isFr
              ? "Nous privilégions des solutions concrètes, conçues pour simplifier les opérations, améliorer la gestion et apporter une réelle valeur à leurs utilisateurs."
              : "We focus on practical solutions built to simplify operations, improve management, and deliver tangible value to their users.")}
        </p>
      </div>

      {/* Grid of Strictly 2 Solutions: Odoo Implementation (AVAILABLE) & App Simulation Profil (IN DEVELOPMENT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10 items-stretch">
        {/* Card 1: Odoo Implementation – DISPONIBLE (Visually highlighted as primary available commercial solution) */}
        <div className="h-full">
          <Card
            variant="highlight"
            glowColor="secondary"
            className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl shadow-xl shadow-[#1D2140]/5 relative overflow-hidden"
          >
            {/* Brand top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#F39200]" />

            <div>
              {/* Top Row: Icon & Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-xl border border-[#F39200]/30 bg-[#F39200]/10 text-[#F39200] shrink-0">
                    <Layers className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {odooCard.category || (isFr ? "Offre Commerciale Principale" : "Primary Commercial Offering")}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider px-3.5 py-1.5 rounded-full bg-[#F39200] text-white shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{odooCard.status || (isFr ? "DISPONIBLE" : "AVAILABLE")}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-2 leading-snug">
                {odooCard.title || "Odoo Implementation"}
              </h3>

              <p className="text-sm sm:text-base font-bold text-[#F39200] mb-4">
                {odooCard.subtitle ||
                  (isFr
                    ? "Odoo – Une gestion d'entreprise centralisée."
                    : "Odoo – Centralized Business Management.")}
              </p>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {odooCard.description}
              </p>

              {/* Domains covered */}
              <div className="mb-8 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1D2140] mb-3.5">
                  {odooCard.domainsTitle || (isFr ? "Domaines couverts :" : "Areas Covered:")}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(odooCard.domains || []).map((domain: string, dIdx: number) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#F39200]" />
                      <span>{domain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions: Découvrir Odoo + Demander une consultation */}
            <div className="pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href={`/${locale}/solutions/odoo`} className="w-full block">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full justify-center gap-2 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-[#F39200]/20"
                >
                  <span>{odooCard.ctaDiscover || (isFr ? "Découvrir Odoo" : "Discover Odoo")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`/${locale}/contact`} className="w-full block">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center py-3 text-xs sm:text-sm font-bold uppercase tracking-wider"
                >
                  <span>
                    {odooCard.ctaConsult || (isFr ? "Demander une consultation" : "Request a Consultation")}
                  </span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Card 2: App Simulation Profil – EN DÉVELOPPEMENT */}
        <div className="h-full">
          <Card
            variant="dark"
            hoverEffect={false}
            className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-white/20" />
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#F39200]/10 blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              {/* Top Row: Icon & EN DÉVELOPPEMENT Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-xl border border-white/15 bg-white/10 text-[#F39200] shrink-0">
                    <Cpu className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/75">
                    {appCard.category ||
                      (isFr
                        ? "Produit Logiciel Propriétaire INTER-IT"
                        : "INTER-IT Proprietary Software Product")}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider px-3.5 py-1.5 rounded-full border border-[#F39200]/50 bg-[#F39200]/15 text-[#F39200]">
                  <span>{appCard.status || (isFr ? "EN DÉVELOPPEMENT" : "IN DEVELOPMENT")}</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-snug">
                {appCard.title || "App Simulation Profil"}
              </h3>

              <p className="text-sm sm:text-base font-bold text-[#F39200] mb-4">
                « {appCard.tagline || (isFr ? "Évaluez votre profil en 5 minutes." : "Evaluate your profile in 5 minutes.")} »
              </p>

              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {appCard.description}
              </p>

              {/* 3 Geographic Zones Visual Display: Canada, Europe, Afrique */}
              <div className="mb-5 p-5 rounded-xl bg-white/5 border border-white/15">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-white/90 mb-3 flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[#F39200]" />
                  <span>
                    {appCard.regionsLabel ||
                      (isFr ? "Zones géographiques couvertes :" : "Geographic Regions Covered:")}
                  </span>
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {(appCard.regions || ["Canada", "Europe", isFr ? "Afrique" : "Africa"]).map(
                    (region: string, rIdx: number) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 border border-white/15 text-white font-bold text-xs sm:text-sm text-center"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#F39200]" />
                        <span>{region}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Development Notice & Editorial Disclaimer */}
              <div className="space-y-2 mb-8 text-xs text-slate-300 leading-relaxed bg-white/[0.04] p-4 rounded-xl border border-white/10">
                <p className="font-semibold text-white/95">
                  {appCard.devNotice ||
                    (isFr
                      ? "Notre solution est actuellement en cours de développement. Son lancement sera annoncé prochainement."
                      : "Our solution is currently in development. Its official launch will be announced soon.")}
                </p>
                <p className="text-[11px] text-slate-300 flex items-start gap-1.5 pt-1">
                  <Info className="h-3.5 w-3.5 text-[#F39200] shrink-0 mt-0.5" />
                  <span>{appCard.disclaimer}</span>
                </p>
              </div>
            </div>

            {/* Footer Disabled Visual Button: BIENTÔT DISPONIBLE / COMING SOON */}
            <div className="pt-5 border-t border-white/15 relative z-10">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg border border-white/25 bg-white/10 text-white/80 text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-not-allowed select-none"
              >
                <Lock className="h-4 w-4 text-[#F39200]" />
                <span>{appCard.ctaDisabled || (isFr ? "BIENTÔT DISPONIBLE" : "COMING SOON")}</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
