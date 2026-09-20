import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Monitor, Sparkles, ArrowRight, CheckCircle2, Laptop } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import TrainingSection from "@/components/sections/TrainingSection";
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
      ? "Ateliers de Formation & Bootcamps | INTER-IT SERVICES INC"
      : "Training Workshops & Bootcamps | INTER-IT SERVICES INC",
    description: isFr
      ? "Ateliers pratiques pour entreprises, écoles et professionnels : Odoo ERP, intégration de l'IA, marketing numérique et cybersécurité."
      : "Practical workshops for companies, schools, and professionals: Odoo ERP, AI integration, digital marketing, and cybersecurity.",
    alternates: {
      canonical: `https://inter-itservices.ca/${locale}/training`,
    },
  };
}

interface TrainingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isFr = locale === "fr";

  const perks = [
    {
      icon: Award,
      title: isFr ? "Certification & Pratique Réelle" : "Practical Certification",
      desc: isFr
        ? "Chaque participant manipule sur des cas réels d'entreprise et reçoit une attestation de réussite validant ses acquis."
        : "Every delegate works on real-world scenarios and receives an official certificate of completion.",
    },
    {
      icon: Users,
      title: isFr ? "Ateliers Intra-Entreprise" : "Corporate On-Site",
      desc: isFr
        ? "Formations personnalisées organisées directement dans vos locaux au Canada ou à distance pour vos filiales."
        : "Custom group training workshops hosted on-premise at your location or delivered remotely worldwide.",
    },
    {
      icon: Monitor,
      title: isFr ? "Classes Virtuelles Interactives" : "Interactive Remote",
      desc: isFr
        ? "Séances immersives animées en direct par des formateurs praticiens, avec support et documentation complète."
        : "Live-streamed interactive classes with active practitioner instructors, resources, and follow-up support.",
    },
  ];

  return (
    <div className="flex-grow bg-white">
      {/* 1. High-Tech Hero Section */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1D2140] text-white overflow-hidden">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F39200]/12 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{isFr ? "Ateliers & Montée en Compétences" : "Workshops & Skill Building"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {isFr
              ? "Ateliers de Formation Pratiques pour Entreprises & Équipes"
              : "Practical Training Workshops for Companies & Teams"}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {isFr
              ? "Rendez vos collaborateurs autonomes et performants sur Odoo ERP, les outils d'IA générative et la productivité numérique avec des formats courts et orientés pratique."
              : "Empower your teams with hands-on skills in Odoo ERP, generative AI tools, and digital productivity through focused, action-oriented workshops."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
              >
                <span>{isFr ? "Demander un atelier sur mesure" : "Request a Custom Workshop"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#training">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white border-white/20 hover:bg-white/10"
              >
                <span>{isFr ? "Voir le catalogue" : "Browse Catalog"}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Embed primary Training catalog section */}
      <TrainingSection dict={dict} locale={locale} />

      {/* 3. Delivery standards */}
      <SectionContainer bgType="transparent" className="border-t border-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-3">
              {isFr ? "Comment se Déroulent Nos Ateliers ?" : "Our Workshop Delivery Standards"}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-7 flex flex-col items-center text-center shadow-sm hover:border-[#F39200]/40 transition-all rounded-2xl"
                >
                  <div className="bg-[#F39200]/10 text-[#F39200] p-3.5 rounded-xl mb-4 border border-[#F39200]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D2140] mb-2">{perk.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{perk.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
