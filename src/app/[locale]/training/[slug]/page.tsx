import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Compass,
  Users,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { courses } from "@/data/training";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface CourseDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const isFr = locale === "fr";
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title[locale as "en" | "fr"]} | ${isFr ? "Ateliers de formation" : "Workshops"} | INTER-IT SERVICES INC`,
    description: course.description[locale as "en" | "fr"],
    alternates: {
      canonical: `https://inter-itservices.ca/${locale}/training/${slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { locale, slug } = await params;
  const isFr = locale === "fr";

  const course = courses.find((c) => c.slug === slug);
  if (!course) {
    notFound();
  }

  return (
    <div className="flex-grow bg-white">
      {/* 1. High-Tech Hero Section */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1D2140] text-white overflow-hidden">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F39200]/12 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Back Link */}
          <div className="mb-8 text-left">
            <Link
              href={`/${locale}/training`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#F39200] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{isFr ? "Retour aux ateliers de formation" : "Back to workshops"}</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isFr ? "ATELIER DE FORMATION" : "TRAINING WORKSHOP"}</span>
            </span>
            {course.format && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/15">
                {course.format[locale as "en" | "fr"]}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            {course.title[locale as "en" | "fr"]}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {course.description[locale as "en" | "fr"]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
              >
                <span>{isFr ? "Demander cet atelier" : "Request This Workshop"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#curriculum" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white border-white/20 hover:bg-white/10"
              >
                <span>{isFr ? "Voir le programme" : "View Curriculum"}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar */}
      <SectionContainer id="curriculum" bgType="transparent" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (8 Columns) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Target Audience */}
            {course.targetAudience && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1D2140] uppercase tracking-wider">
                  <Users className="h-4 w-4 text-[#F39200]" />
                  <span>{isFr ? "Public Cible & Prérequis" : "Target Audience & Prerequisites"}</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {course.targetAudience[locale as "en" | "fr"]}
                </p>
              </div>
            )}

            {/* Curriculum / Topics */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D2140]">
                  {isFr ? "Programme & Modules de l'Atelier" : "Workshop Curriculum & Modules"}
                </h2>
              </div>
              <div className="space-y-3 pl-2">
                {course.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#F39200]/40 transition-all flex items-start gap-3.5 shadow-2xs"
                  >
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#F39200]/15 text-[#F39200] font-mono text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">
                      {topic[locale as "en" | "fr"]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Acquired */}
            {course.skillsAcquired && (
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1D2140]">
                    {isFr ? "Compétences Concrètes Développées" : "Practical Skills Acquired"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-2">
                  {course.skillsAcquired.map((skill, index) => (
                    <Card
                      key={index}
                      hoverEffect={true}
                      className="border-slate-200 bg-white p-4 flex gap-3 items-start shadow-sm rounded-xl hover:border-[#F39200]/30"
                    >
                      <ChevronRight className="h-4 w-4 text-[#F39200] shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                        {skill[locale as "en" | "fr"]}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Card hoverEffect={false} className="border-slate-200 bg-white p-7 space-y-6 shadow-md rounded-2xl sticky top-28">
              {/* Meta details */}
              <div className="space-y-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="h-5 w-5 text-[#F39200] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{isFr ? "DURÉE" : "DURATION"}</span>
                    <span className="font-bold text-sm text-[#1D2140]">{course.duration[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Compass className="h-5 w-5 text-[#F39200] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{isFr ? "NIVEAU" : "LEVEL"}</span>
                    <span className="font-bold text-sm text-[#1D2140]">{course.level[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                {course.format && (
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <Sparkles className="h-5 w-5 text-[#F39200] shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">{isFr ? "MODALITÉ" : "FORMAT"}</span>
                      <span className="font-bold text-sm text-[#1D2140]">{course.format[locale as "en" | "fr"]}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Block */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#1D2140] uppercase tracking-wider">
                  {isFr ? "Planifier cet atelier" : "Schedule This Workshop"}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isFr
                    ? "Organisez une cohorte privée dans vos locaux au Canada ou en virtuel. Recevez les détails pédagogiques et les dates disponibles."
                    : "Schedule a private cohort on-premise or online. Receive curriculum specifics and available workshop dates."}
                </p>
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button
                    variant="secondary"
                    className="w-full text-xs py-3 font-bold uppercase tracking-wider shadow-md shadow-[#F39200]/20 hover:scale-102 transition-transform"
                  >
                    {isFr ? "Demander un atelier" : "Request Workshop"}
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
