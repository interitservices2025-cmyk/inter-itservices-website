import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users2,
  Database,
  BarChart3,
  ShieldCheck,
  FolderSync,
  Laptop,
  Headphones,
  Settings2,
} from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface OdooPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const url = `https://inter-itservices.ca/${locale}/solutions/odoo`;

  return {
    title: isFr
      ? "Odoo – Une gestion d'entreprise centralisée | INTER-IT SERVICES INC"
      : "Odoo – Centralized Business Management | INTER-IT SERVICES INC",
    description: isFr
      ? "Centralisez les opérations de votre entreprise avec Odoo. INTER-IT Services vous accompagne dans l'analyse de vos besoins, le paramétrage des modules et la mise en place d'un environnement de gestion adapté à votre organisation."
      : "Centralize your business operations with Odoo. INTER-IT Services supports you in analyzing your requirements, configuring modules, and setting up a management environment tailored to your organization.",
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": "https://inter-itservices.ca/fr/solutions/odoo",
        "en-CA": "https://inter-itservices.ca/en/solutions/odoo",
      },
    },
    openGraph: {
      title: isFr
        ? "Odoo – Une gestion d'entreprise centralisée | INTER-IT SERVICES INC"
        : "Odoo – Centralized Business Management | INTER-IT SERVICES INC",
      description: isFr
        ? "Accompagnement dans l'analyse des besoins, le paramétrage des modules et la mise en place d'un environnement Odoo adapté à votre organisation."
        : "Support in needs analysis, module configuration, and setting up a tailored Odoo management environment for your organization.",
      url,
      siteName: "INTER-IT SERVICES INC",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
    },
  };
}

export default async function OdooPage({ params }: OdooPageProps) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const dict = await getDictionary(locale);

  const moduleIcons: Record<string, any> = {
    Users2,
    BarChart3,
    Database,
    Layers,
    Settings2,
    Sparkles,
  };

  const processIcons: Record<string, any> = {
    FolderSync,
    Settings2,
    Laptop,
    Sparkles,
    Database,
    Users2,
    ShieldCheck,
    Headphones,
    Layers,
  };

  const modulesList = (dict.odooPage?.modules?.items || []).map((m: any) => ({
    name: m.name,
    desc: m.desc,
    icon: (m.icon && moduleIcons[m.icon]) || Sparkles,
  }));

  const processSteps = (dict.odooPage?.process?.steps || []).map((p: any) => ({
    step: p.step,
    title: p.title,
    desc: p.desc,
    icon: (p.icon && processIcons[p.icon]) || FolderSync,
  }));

  const targetProfiles = dict.odooPage?.targetAudience?.items || [];

  return (
    <div className="flex-grow bg-white">
      {/* 1. Hero Section Odoo */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#1D2140] text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F39200]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-extrabold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>
              {dict.odooPage?.badge ||
                (isFr
                  ? "SOLUTION DISPONIBLE — ODOO IMPLEMENTATION"
                  : "AVAILABLE SOLUTION — ODOO IMPLEMENTATION")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {dict.odooPage?.title ||
              (isFr
                ? "Odoo – Une gestion d'entreprise centralisée."
                : "Odoo – Centralized Business Management.")}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {dict.odooPage?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25"
              >
                <span>
                  {dict.odooPage?.ctaConsult ||
                    (isFr ? "Demander une consultation" : "Request a Consultation")}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <a href="#domaines-odoo" className="w-full sm:w-auto">
              <Button
                variant="outline-light"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider"
              >
                <span>
                  {dict.odooPage?.ctaDiscover ||
                    (isFr ? "Découvrir Odoo" : "Discover Odoo")}
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Domaines couverts */}
      <SectionContainer
        id="domaines-odoo"
        bgType="transparent"
        className="py-16 sm:py-24 border-b border-slate-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {dict.odooPage?.modules?.title ||
                (isFr ? "Domaines couverts" : "Areas Covered")}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {dict.odooPage?.whatIs?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulesList.map((m: any, idx: number) => {
              const Icon = m.icon;
              return (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#F39200]/50 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20 inline-block">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {m.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#F39200] font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>
                      {dict.odooPage?.whatIs?.availableModule ||
                        (isFr ? "Domaine couvert" : "Covered area")}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Accompagnement proposé (7 étapes) */}
      <SectionContainer
        id="accompagnement-odoo"
        bgType="light"
        className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {dict.odooPage?.process?.title ||
                (isFr ? "Accompagnement proposé" : "Our Implementation Support")}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg">
              {dict.odooPage?.process?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p: any, idx: number) => {
              const Icon = p.icon;
              return (
                <Card
                  key={p.step}
                  hoverEffect={true}
                  className={`border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#1D2140]/20 shadow-sm ${
                    idx === 6 ? "md:col-span-2 lg:col-span-2 border-[#F39200]/40" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-[#F39200] font-mono">
                        {p.step}
                      </span>
                      <div className="p-2 rounded-lg bg-[#F39200]/10 text-[#F39200]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {`${dict.odooPage?.process?.stepPrefix || (isFr ? "Étape" : "Step")} ${idx + 1}`}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 4. À qui s'adresse notre accompagnement ? */}
      <SectionContainer bgType="transparent" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {dict.odooPage?.targetAudience?.title}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg">
              {dict.odooPage?.targetAudience?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {targetProfiles.map((tp: any, idx: number) => (
              <Card
                key={idx}
                hoverEffect={true}
                className="border-slate-200 bg-white p-7 hover:border-[#1D2140]/20 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#F39200] shrink-0" />
                    <h3 className="text-lg font-bold text-[#1D2140]">
                      {tp.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-7">
                    {tp.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {dict.odooPage?.bottomCallout?.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {dict.odooPage?.bottomCallout?.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
                  >
                    <span>
                      {dict.odooPage?.bottomCallout?.cta ||
                        (isFr ? "Demander une consultation" : "Request a Consultation")}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
