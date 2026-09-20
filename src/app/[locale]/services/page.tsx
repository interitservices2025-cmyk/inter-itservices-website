import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, Landmark, Lightbulb, Sparkles, ArrowRight, ShieldCheck, Cpu, Zap } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesSection from "@/components/sections/ServicesSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "Solutions & Services Technologiques | INTER-IT SERVICES INC"
      : "Technological Solutions & Services | INTER-IT SERVICES INC",
    description: isFr
      ? "Implémentation Odoo, développement web Next.js, automatisation par l'IA, applications métiers et ateliers de formation pour PME."
      : "Odoo implementation, Next.js web development, AI workflow automation, custom business applications, and hands-on workshops.",
    alternates: {
      canonical: `https://inter-itservices.ca/${locale}/services`,
    },
  };
}

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isFr = locale === "fr";

  const extras = [
    {
      icon: Hammer,
      title: isFr ? "Méthode Agile & Itérative" : "Agile Engineering",
      desc: isFr
        ? "Livraisons par cycles courts (Sprints) permettant de tester et valider chaque fonctionnalité sans délai."
        : "Short iterative cycles (Sprints) allowing you to review, test, and validate features continuously.",
    },
    {
      icon: Landmark,
      title: isFr ? "Standards d'Entreprise" : "Enterprise Standards",
      desc: isFr
        ? "Code TypeScript rigoureux, conformité aux règles de sécurité et architectures pérennes."
        : "Strict TypeScript coding conventions, robust security standards, and scalable architectures.",
    },
    {
      icon: Lightbulb,
      title: isFr ? "Cadrage & Conseil Stratégique" : "Architecture Consulting",
      desc: isFr
        ? "Audit de vos flux actuels pour recommander les modules et technologies les plus rentables."
        : "In-depth audit of current workflows to recommend the most cost-effective technologies.",
    },
  ];

  return (
    <div className="flex-grow bg-white">
      {/* 1. High-Tech Hero Banner */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1D2140] text-white overflow-hidden">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F39200]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{isFr ? "Solutions & Ingénierie Technologique" : "Technological Solutions & Engineering"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {isFr
              ? "Des Solutions Technologiques Conçues pour Votre Croissance"
              : "Technological Solutions Engineered for Scalable Business Growth"}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {isFr
              ? "De l'implémentation d'Odoo ERP au développement web moderne et à l'automatisation par l'IA, nous concevons des systèmes fiables qui optimisent vos opérations."
              : "From Odoo ERP deployment to modern web platforms and AI-driven workflow automation, we build reliable systems designed to streamline your business."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
              >
                <span>{isFr ? "Discuter d'un projet" : "Discuss a Project"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#solutions">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white border-white/20 hover:bg-white/10"
              >
                <span>{isFr ? "Explorer les solutions" : "Explore Solutions"}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Core 6 Solutions Grid with colorful identities */}
      <ServicesSection dict={dict} locale={locale} />

      {/* 3. Engineering Quality Commitment */}
      <SectionContainer bgType="transparent" className="border-t border-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-3">
              {isFr ? "Notre Engagement Qualité & Méthodologie" : "Our Engineering Commitment"}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extras.map((extra, idx) => {
              const Icon = extra.icon;
              return (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-7 flex flex-col items-start shadow-sm hover:border-[#1D2140]/20 transition-all rounded-2xl"
                >
                  <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl mb-4 border border-[#F39200]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D2140] mb-2">{extra.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{extra.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
