import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Cpu } from "lucide-react";
import { services } from "@/data/services";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title[locale as "en" | "fr"]} | INTER-IT SERVICES INC`,
    description: service.shortDescription[locale as "en" | "fr"],
  };
}

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/services`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-orange-500 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour aux services" : "Back to services"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {service.title[locale as "en" | "fr"]}
            </h1>
            <div className="h-1 w-20 bg-orange-500 rounded-full" />
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              {service.longDescription[locale as "en" | "fr"]}
            </p>

            {/* Core Features */}
            <div className="space-y-4 pt-6">
              <h2 className="text-lg font-bold text-slate-900">
                {locale === "fr" ? "Fonctionnalités clés" : "Core Features"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-xs">
                      {feature[locale as "en" | "fr"]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverEffect={false} className="border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                {locale === "fr" ? "Technologies Utilisées" : "Technologies Used"}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Consultation Call out */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <div className="flex items-center gap-2 text-orange-500">
                  <Cpu className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    INTER-IT SERVICES INC
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {locale === "fr"
                    ? "Besoin d'aide pour évaluer ce service par rapport à vos objectifs d'affaires ?"
                    : "Need help evaluating how this service matches your digital growth objectives?"}
                </p>
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button variant="secondary" className="w-full text-xs py-2.5">
                    {locale === "fr" ? "Réserver un appel conseil" : "Schedule a Discovery Call"}
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
