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
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      {/* Intro Header */}
      <SectionContainer bgType="transparent" className="pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {locale === "fr" ? "À Propos d'INTER-IT" : "About INTER-IT SERVICES INC"}
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed">
            {locale === "fr"
              ? "Fondée en Ontario, INTER-IT SERVICES INC s'efforce d'accélérer l'adoption des technologies de l'information et de l'intelligence artificielle pour les PME canadiennes et internationales."
              : "Founded in Ontario, INTER-IT SERVICES INC works to accelerate IT and artificial intelligence adoption for Canadian SMEs and international clients alike."}
          </p>
        </div>
      </SectionContainer>

      {/* Mission & Vision Section */}
      <SectionContainer bgType="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <Card glowColor="secondary" className="border-slate-800 bg-slate-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              {locale === "fr" ? "Notre Mission" : "Our Mission"}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {locale === "fr"
                ? "Démocratiser l'accès à l'intelligence artificielle et concevoir des infrastructures logicielles haut de gamme qui libèrent le potentiel de croissance de nos clients."
                : "To democratize artificial intelligence and build premium custom software architectures that unlock our clients' business scaling potentials."}
            </p>
          </Card>

          {/* Vision Card */}
          <Card glowColor="primary" className="border-slate-800 bg-slate-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              {locale === "fr" ? "Notre Vision" : "Our Vision"}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {locale === "fr"
                ? "Devenir le partenaire technologique de référence en Ontario pour l'intégration de solutions logicielles d'IA intelligentes et éthiques."
                : "To become Ontario's preferred technology partner for integrating intelligent, secure, and ethical corporate AI software solutions."}
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Corporate Values */}
      <SectionContainer bgType="transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            {locale === "fr" ? "Nos Valeurs Fondamentales" : "Our Core Values"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center">
                  <div className="bg-amber-500/10 text-amber-500 p-3 rounded-xl mb-4 border border-amber-500/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{value.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
