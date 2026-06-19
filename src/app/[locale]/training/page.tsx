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
      ? "Montez en compétences avec nos formations pratiques sur l'intégration de l'IA, le marketing numérique, la cybersécurité et la productivité."
      : "Upskill your internal teams with our hands-on training workshops in AI, digital marketing, cybersecurity, and digital productivity.",
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
      desc: locale === "fr" ? "Formations privées sur mesure dispensées directement dans vos locaux au Canada (Brampton/Ontario) ou à distance à l'international." : "Custom group training workshops hosted on-premise at your location in Canada (Ontario/Brampton) or delivered remotely worldwide.",
    },
    {
      icon: Monitor,
      title: locale === "fr" ? "Classes Virtuelles Intégrées" : "Interactive Remote",
      desc: locale === "fr" ? "Séances à distance interactives animées en direct, avec accès à vie à nos ressources." : "Live-streamed remote classes with full virtual lab access and support from active developer instructors.",
    },
  ];

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      {/* 1. Embed primary section */}
      <TrainingSection dict={dict} locale={locale} />

      {/* 2. Perks grid */}
      <SectionContainer bgType="transparent" className="border-t border-slate-100 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B163F] text-center mb-12">
            {locale === "fr" ? "Comment se Déroulent Nos Formations ?" : "Our Training Delivery Standards"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-100 bg-white p-8 flex flex-col items-center text-center shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                  <div className="bg-orange-50 text-[#F7931E] p-3 rounded-xl mb-5 border border-orange-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B163F] mb-3">{perk.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{perk.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
