import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { Shield, Eye, Flame, MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "À Propos de Nous | INTER-IT SERVICES INC"
      : "About Us | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Découvrez l'équipe, la mission et les valeurs d'INTER-IT SERVICES INC en Ontario."
      : "Discover the team, mission, and core values of INTER-IT SERVICES INC in Ontario.",
  };
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const values = [
    {
      icon: Shield,
      title: locale === "fr" ? "Sécurité & Fiabilité" : "Security & Trust",
      desc: locale === "fr" ? "Nous garantissons que toutes nos solutions d'intelligence artificielle et d'ingénierie logicielle respectent les normes les plus strictes en matière de sécurité." : "We ensure that all our artificial intelligence and software engineering systems maintain the highest security standards.",
    },
    {
      icon: Eye,
      title: locale === "fr" ? "Transparence" : "Transparency",
      desc: locale === "fr" ? "Nous croyons à l'honnêteté et à la clarté dans nos relations commerciales, en fournissant des rapports transparents à chaque étape." : "We believe in honesty and clarity in our client partnerships, delivering milestone-based transparency at every phase.",
    },
    {
      icon: Flame,
      title: locale === "fr" ? "Passion pour l'Innovation" : "Passion for Innovation",
      desc: locale === "fr" ? "Nous poussons sans cesse les limites de la technologie pour concevoir des outils d'automatisation exclusifs." : "We continuously push technical boundaries to build custom, future-proof business automation assets.",
    },
  ];

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      {/* Intro Header */}
      <SectionContainer bgType="transparent" className="pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            {locale === "fr" ? "Un partenaire technologique proche des PME" : "A Technology Partner Close to SMEs"}
          </h1>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-600 text-lg leading-relaxed">
            {locale === "fr"
              ? "INTER-IT Services se spécialise dans les solutions numériques, l'automatisation et l'intelligence artificielle. Notre mission est d'aider les organisations à adopter des technologies pratiques et accessibles alignées sur leurs objectifs. Nous croyons que l'innovation doit être utile, compréhensible et accessible."
              : "INTER-IT Services specializes in digital solutions, automation and artificial intelligence. Our mission is to help organizations adopt practical and accessible technologies aligned with their objectives. We believe innovation should be useful, understandable and accessible."}
          </p>
        </div>
      </SectionContainer>

      {/* Mission & Vision Section */}
      <SectionContainer bgType="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <Card glowColor="secondary" className="border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {locale === "fr" ? "Notre Mission" : "Our Mission"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {locale === "fr"
                ? "Aider les PME et les organisations à intégrer des technologies utiles et adaptées pour simplifier leur quotidien opérationnel et stimuler leur croissance."
                : "To help SMEs and organizations integrate useful, tailored technologies to simplify daily operations and foster business growth."}
            </p>
          </Card>

          {/* Vision Card */}
          <Card glowColor="primary" className="border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {locale === "fr" ? "Notre Vision" : "Our Vision"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {locale === "fr"
                ? "Démystifier l'accès à l'intelligence artificielle et aux solutions logicielles pour en faire des outils simples et rentables pour chaque entrepreneur."
                : "To demystify artificial intelligence and web solutions, rendering them simple and cost-effective tools for every entrepreneur."}
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Corporate Values */}
      <SectionContainer bgType="transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            {locale === "fr" ? "Nos Valeurs Fondamentales" : "Our Core Values"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-200 bg-white p-6 flex flex-col items-center text-center shadow-sm">
                  <div className="bg-orange-50 text-orange-600 p-3 rounded-xl mb-4 border border-orange-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{value.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
