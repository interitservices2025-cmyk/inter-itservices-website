import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Layout,
  Megaphone,
  GraduationCap,
  Sparkles,
  Zap,
  ShieldCheck,
  Laptop,
  Settings2,
  FolderSync,
  BarChart3,
  Users2,
  Code2,
} from "lucide-react";
import { services } from "@/data/services";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const isFr = locale === "fr";

  if (slug === "odoo-implementation" || slug === "odoo") {
    return {
      title: isFr
        ? "Implémentation Odoo pour PME | INTER-IT SERVICES INC"
        : "Odoo Implementation for SMEs | INTER-IT SERVICES INC",
      description: isFr
        ? "Déploiement et paramétrage modulaire d'Odoo ERP."
        : "End-to-end Odoo ERP deployment and configuration.",
    };
  }

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title[locale as "en" | "fr"]} | INTER-IT SERVICES INC`,
    description: service.shortDescription[locale as "en" | "fr"],
    alternates: {
      canonical: `https://inter-itservices.ca/${locale}/services/${slug}`,
    },
  };
}

// Icon mapping helper
const iconMap: Record<string, any> = {
  Globe,
  Cpu,
  Layers,
  Layout,
  Megaphone,
  GraduationCap,
  Zap,
  ShieldCheck,
  Laptop,
  Settings2,
  FolderSync,
  BarChart3,
  Users2,
  Code2,
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  const isFr = locale === "fr";

  // Redirect Odoo and Training to their dedicated canonical routes
  if (slug === "odoo" || slug === "odoo-implementation") {
    redirect(`/${locale}/solutions/odoo`);
  }
  if (slug === "training") {
    redirect(`/${locale}/training`);
  }

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="flex-grow bg-white">
      {/* 1. High-Tech Hero Section (Strictly Inter-IT Charter) */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1D2140] text-white overflow-hidden">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        
        {/* Ambient radial glow in Inter-IT Orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F39200]/12 blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Back link */}
          <div className="mb-8 text-left">
            <Link
              href={`/${locale}/#solutions`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#F39200] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{isFr ? "Retour aux solutions" : "Back to solutions"}</span>
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>{service.badge ? service.badge[isFr ? "fr" : "en"] : service.title[isFr ? "fr" : "en"]}</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            {service.title[isFr ? "fr" : "en"]}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {service.longDescription[isFr ? "fr" : "en"]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
              >
                <span>{isFr ? "Discuter de votre projet" : "Discuss Your Project"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#capabilities" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white border-white/20 hover:bg-white/10 hover:border-white transition-colors"
              >
                <span>{isFr ? "Explorer les fonctionnalités" : "Explore Capabilities"}</span>
              </Button>
            </a>
          </div>

          {/* High-Tech Specs / KPI Bar */}
          {service.kpis && service.kpis.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-4xl mx-auto text-left">
              {service.kpis.map((kpi, idx) => (
                <div key={idx} className="px-3 py-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {kpi.label[isFr ? "fr" : "en"]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. Capabilities / Modules Grid (Strictly Inter-IT Palette) */}
      {service.modules && service.modules.length > 0 && (
        <SectionContainer id="capabilities" bgType="transparent" className="py-20 sm:py-28 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
                <span>{isFr ? "Architecture & Capacités" : "Architecture & Capabilities"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D2140] mb-4">
                {isFr ? "Des Fonctionnalités Conçues pour Performer" : "Engineered for Operational Performance"}
              </h2>
              <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {isFr
                  ? "Une suite de modules et fonctionnalités techniques pensés pour répondre précisément à vos exigences opérationnelles."
                  : "A complete set of technical modules and capabilities crafted to match your exact business requirements."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.modules.map((m, idx) => {
                const IconComponent = (m.iconName && iconMap[m.iconName]) || Globe;
                return (
                  <Card
                    key={idx}
                    hoverEffect={true}
                    className="border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#F39200]/50 shadow-sm rounded-2xl relative overflow-hidden group"
                  >
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl border border-[#F39200]/20 bg-[#F39200]/10 text-[#F39200] inline-block transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1D2140] group-hover:text-[#F39200] transition-colors">
                        {m.name[isFr ? "fr" : "en"]}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {m.desc[isFr ? "fr" : "en"]}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#1D2140]">
                      <CheckCircle2 className="h-4 w-4 text-[#F39200]" />
                      <span>{isFr ? "Fonctionnalité disponible" : "Available capability"}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 3. Methodology / 6-Step Implementation (Strictly Inter-IT Palette) */}
      {service.process && service.process.length > 0 && (
        <SectionContainer bgType="light" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
                <span>{isFr ? "Méthodologie" : "Methodology"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D2140] mb-4">
                {isFr ? "Notre Processus de Déploiement" : "Our Engineering Process"}
              </h2>
              <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
              <p className="text-slate-600 text-base sm:text-lg">
                {isFr
                  ? "Une démarche rigoureuse en 6 étapes pour garantir la robustesse, la rapidité et la conformité de vos outils."
                  : "A structured 6-step engineering methodology ensuring robustness, speed, and continuous compliance."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((p, idx) => (
                <Card
                  key={p.step}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#1D2140]/20 shadow-sm rounded-2xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-slate-200 font-mono">
                        {p.step}
                      </span>
                      <div className="p-2 rounded-lg border border-[#F39200]/20 bg-[#F39200]/10 text-[#F39200]">
                        <Settings2 className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {p.title[isFr ? "fr" : "en"]}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc[isFr ? "fr" : "en"]}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {isFr ? `Étape ${idx + 1}` : `Phase ${idx + 1}`}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 4. Target Profiles ("Pour Quelles Entreprises ?") */}
      {service.targetProfiles && service.targetProfiles.length > 0 && (
        <SectionContainer bgType="transparent" className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D2140] mb-4">
                {isFr ? "Pour Quelles Entreprises ?" : "Who is This Solution For?"}
              </h2>
              <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
              <p className="text-slate-600 text-base sm:text-lg">
                {isFr
                  ? "Nos prestations sont calibrées pour répondre aux défis spécifiques de ces profils d'organisations :"
                  : "Our services are tailored to address the distinct operational challenges of:"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {service.targetProfiles.map((tp, idx) => (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-7 hover:border-[#F39200]/40 shadow-sm flex flex-col justify-between rounded-2xl"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#F39200] shrink-0" />
                      <h3 className="text-lg font-bold text-[#1D2140]">
                        {tp.title[isFr ? "fr" : "en"]}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-7">
                      {tp.desc[isFr ? "fr" : "en"]}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-16 text-center">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                {isFr ? "Technologies & Outils Maîtrisés" : "Technologies & Frameworks"}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Dark Conversion Box (Strictly Inter-IT Navy #1D2140 and Orange #F39200) */}
            <div className="rounded-3xl bg-[#1D2140] text-white p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F39200]/15 blur-[90px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-bold uppercase tracking-wider text-white">
                  <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
                  <span>INTER-IT SERVICES INC</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  {isFr
                    ? "Prêt à démarrer votre projet ?"
                    : "Ready to Discuss Your Project?"}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {isFr
                    ? "Échangeons lors d'un premier entretien de cadrage sans engagement. Nous évaluons vos besoins et vous proposons une solution adaptée à votre organisation."
                    : "Connect with us for an initial scoping session with zero commitment. We assess your requirements and propose a practical solution tailored to your growth."}
                </p>

                <div>
                  <Link href={`/${locale}/contact`}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
                    >
                      <span>{isFr ? "Parler d'un projet" : "Discuss a Project"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      )}
    </div>
  );
}
