import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import AISolutionsSection from "@/components/sections/AISolutionsSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { Network, Database, Fingerprint } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Solutions IA | INTER-IT SERVICES INC"
      : "AI Solutions | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Intégrez des modèles d'IA souverains, des chatbots personnalisés et des systèmes RAG sécurisés."
      : "Integrate custom sovereign AI models, personalized chatbots, and secure RAG pipelines.",
  };
}

interface AISolutionsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AISolutionsPage({ params }: AISolutionsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const keyDifferentiators = [
    {
      icon: Network,
      title: locale === "fr" ? "IA Souveraine & Sécurisée" : "Secure Sovereign AI",
      desc: locale === "fr" ? "Nous hébergeons vos modèles d'IA sur des serveurs sécurisés en Ontario ou sur vos serveurs internes, garantissant la souveraineté complète des données." : "We deploy models on local secure servers or internal infrastructures, ensuring full data sovereignty compliance.",
    },
    {
      icon: Database,
      title: locale === "fr" ? "RAG & Connecteurs de Données" : "Advanced RAG Integrations",
      desc: locale === "fr" ? "Connectez vos bases de connaissances d'entreprise existantes (SharePoint, Google Drive, SQL) directement aux modèles de langage de manière sécurisée." : "Securely connect your internal enterprise systems (SharePoint, Google Drive, SQL) directly to language models.",
    },
    {
      icon: Fingerprint,
      title: locale === "fr" ? "Propriété Intellectuelle" : "Full IP Ownership",
      desc: locale === "fr" ? "Vous êtes propriétaire exclusif du code, de l'application et des modèles affinés que nous développons pour votre entreprise." : "You retain absolute intellectual property rights over the custom models, pipelines, and apps we build for your teams.",
    },
  ];

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      {/* 1. solutions section */}
      <AISolutionsSection dict={dict} locale={locale} />

      {/* 2. Differentiators */}
      <SectionContainer bgType="transparent" className="border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            {locale === "fr" ? "Pourquoi Notre Approche IA Est Unique ?" : "Why Choose Our AI Implementation Approach?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyDifferentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <Card key={idx} hoverEffect={true} className="border-slate-800 bg-slate-900/30 p-6 flex flex-col items-start">
                  <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg mb-4 border border-amber-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{diff.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{diff.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
