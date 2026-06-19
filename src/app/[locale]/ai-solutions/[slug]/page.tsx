import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, CheckCircle2, ChevronRight, HelpCircle, Terminal } from "lucide-react";
import { aiSolutions } from "@/data/ai-solutions";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface AISolutionDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: AISolutionDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title[locale as "en" | "fr"]} | AI Solutions Brampton | INTER-IT SERVICES INC`,
    description: solution.description[locale as "en" | "fr"],
  };
}

export default async function AISolutionDetailPage({ params }: AISolutionDetailPageProps) {
  const { locale, slug } = await params;

  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/ai-solutions`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-orange-500 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour aux solutions IA" : "Back to AI solutions"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">AI & AUTOMATION</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {solution.title[locale as "en" | "fr"]}
              </h1>
              <div className="h-1 w-20 bg-orange-500 rounded-full mt-4" />
            </div>

            {/* Overview / Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Présentation de la Solution" : "Solution Overview"}</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {solution.description[locale as "en" | "fr"]}
              </p>
            </div>

            {/* Business Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Bénéfices pour votre Entreprise" : "Business Benefits"}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, index) => (
                  <Card key={index} hoverEffect={true} className="border-slate-200 bg-slate-50 p-5 flex gap-3 items-start shadow-sm">
                    <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {benefit[locale as "en" | "fr"]}
                    </span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Cas d'Usage Courants" : "Typical Use Cases"}</span>
              </h2>
              <ul className="space-y-3">
                {solution.useCases.map((useCase, index) => (
                  <li key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600">
                    <ChevronRight className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{useCase[locale as "en" | "fr"]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Card hoverEffect={false} className="border-slate-200 bg-white p-6 space-y-6 shadow-sm">
              {/* Technologies */}
              {solution.technologies && (
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-orange-500" />
                    <span>{locale === "fr" ? "Technologies Clés" : "Key Technologies"}</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technologies.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation / CTA Block */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  {locale === "fr" ? "Intégrer cette Solution ?" : "Ready to Deploy?"}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {locale === "fr"
                    ? "Nos architectes IA à Brampton vous accompagnent dans l'étude de faisabilité et le déploiement sécurisé."
                    : "Our AI architects in Brampton will guide you from feasibility assessment to secure local deployment."}
                </p>
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button variant="secondary" className="w-full text-xs py-2.5 shadow-md shadow-orange-500/10">
                    {locale === "fr" ? "Réserver un diagnostic" : "Book a Discovery Call"}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
