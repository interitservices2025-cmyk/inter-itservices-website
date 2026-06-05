import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import TrainingSection from "@/components/sections/TrainingSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { Award, Users, Monitor } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Formations Professionnelles | INTER-IT SERVICES INC"
      : "Professional Training | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Montez en compétences avec nos formations pratiques sur l'intégration de l'IA et le développement Next.js/TypeScript."
      : "Upskill your internal teams with our hands-on AI integration and Next.js/TypeScript advanced bootcamps.",
  };
}

interface TrainingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const perks = [
    {
      icon: Award,
      title: locale === "fr" ? "Certification INTER-IT" : "INTER-IT Certification",
      desc: locale === "fr" ? "Chaque participant reçoit un certificat attestant de sa réussite à l'issue de l'évaluation finale." : "Every delegate receives an official certificate of completion upon finishing course evaluations.",
    },
    {
      icon: Users,
      title: locale === "fr" ? "Ateliers en Entreprise" : "Corporate On-Site",
      desc: locale === "fr" ? "Formations privées sur mesure dispensées directement dans vos locaux à Brampton ou partout au Canada." : "Custom group training workshops hosted on-premise at your office location in Ontario or across Canada.",
    },
    {
      icon: Monitor,
      title: locale === "fr" ? "Classes Virtuelles Intégrées" : "Interactive Remote",
      desc: locale === "fr" ? "Séances à distance interactives animées en direct, avec accès à vie à notre serveur de TP." : "Live-streamed remote classes with full virtual lab access and support from active developer instructors.",
    },
  ];

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      {/* 1. Embed primary section */}
      <TrainingSection dict={dict} locale={locale} />

      {/* 2. Perks grid */}
      <SectionContainer bgType="transparent" className="border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            {locale === "fr" ? "Comment se Déroulent Nos Formations ?" : "Our Training Delivery Standards"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-800 bg-slate-900/30 p-6 flex flex-col items-center text-center">
                  <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg mb-4 border border-amber-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{perk.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
