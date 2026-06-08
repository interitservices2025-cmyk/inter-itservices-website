import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesSection from "@/components/sections/ServicesSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { Hammer, Landmark, Lightbulb } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Nos Services Informatiques | INTER-IT SERVICES INC"
      : "Our IT Services | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Développement logiciel sur mesure, création de sites web et applications mobiles, design UI/UX et marketing digital."
      : "Custom software development, corporate web portals, native mobile apps, UI/UX design, and digital marketing.",
  };
}

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const extras = [
    {
      icon: Hammer,
      title: locale === "fr" ? "Méthode Agile" : "Agile Engineering",
      desc: locale === "fr" ? "Nous livrons par cycles courts (Sprints) vous permettant de tester et d'ajuster l'application en continu." : "We deliver in short iteration cycles (Sprints) so you can review, test, and adjust the codebase dynamically.",
    },
    {
      icon: Landmark,
      title: locale === "fr" ? "Présence Locale & Globale" : "Canada & Global Reach",
      desc: locale === "fr" ? "Disponibles à Brampton (Ontario) pour des ateliers sur site, et à distance pour nos clients internationaux." : "Available for on-site sessions in Ontario and seamless remote collaboration for global accounts.",
    },
    {
      icon: Lightbulb,
      title: locale === "fr" ? "Conseil Technologique" : "Architecture Consulting",
      desc: locale === "fr" ? "Nous auditons vos infrastructures actuelles pour concevoir la meilleure stratégie de migration cloud et d'IA." : "We audit legacy infrastructures to layout robust, long-term cloud migration and AI adoption roadmaps.",
    },
  ];

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      {/* 1. Reuse core Services grid */}
      <ServicesSection dict={dict} locale={locale} />

      {/* 2. Engineering Methodology */}
      <SectionContainer bgType="transparent" className="border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            {locale === "fr" ? "Notre Engagement Qualité" : "Our Engineering Commitment"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extras.map((extra, idx) => {
              const Icon = extra.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-800 bg-slate-900/30 p-6 flex flex-col items-start">
                  <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg mb-4 border border-amber-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{extra.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{extra.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
