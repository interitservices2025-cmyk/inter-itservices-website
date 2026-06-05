import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Landmark, Award, Calendar, Folder } from "lucide-react";
import { portfolio } from "@/data/portfolio";
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
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study | INTER-IT SERVICES INC`,
    description: project.description[locale as "en" | "fr"],
  };
}

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;

  const project = portfolio.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/portfolio`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-500 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour au portfolio" : "Back to portfolio"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (7 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{project.category.toUpperCase()}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                {project.title}
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded-full mt-4" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                {locale === "fr" ? "Description du projet" : "Project Description"}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description[locale as "en" | "fr"]}
              </p>
            </div>

            {/* Challenges */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                {locale === "fr" ? "Le Défi" : "The Challenge"}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.challenges[locale as "en" | "fr"]}
              </p>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                {locale === "fr" ? "Notre Solution" : "Our Solution"}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solutions[locale as "en" | "fr"]}
              </p>
            </div>
          </div>

          {/* Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Card hoverEffect={false} className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
              {/* Meta details */}
              <div className="space-y-4 pb-6 border-b border-slate-900">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Landmark className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">CLIENT</span>
                    <span className="font-bold">{project.clientName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Folder className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">{locale === "fr" ? "SECTEUR D'ACTIVITÉ" : "INDUSTRY"}</span>
                    <span className="font-bold">{project.industry[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Calendar className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">DATE</span>
                    <span className="font-bold">{project.completionDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Award className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">STATUS</span>
                    <span className="font-bold">{locale === "fr" ? "Complété" : "Completed"}</span>
                  </div>
                </div>
              </div>

              {/* Services Fournis / Services Delivered */}
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  {locale === "fr" ? "Services Fournis" : "Services Delivered"}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.servicesDelivered.map((service, index) => (
                    <Badge key={index} variant="secondary">
                      {service[locale as "en" | "fr"]}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  {locale === "fr" ? "Technologies" : "Technologies"}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-slate-900 space-y-4">
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button variant="secondary" className="w-full text-xs py-2.5">
                    {locale === "fr" ? "Discuter d'un projet similaire" : "Discuss a Similar Project"}
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
