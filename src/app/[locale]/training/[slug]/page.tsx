import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Compass, Users, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";
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
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title[locale as "en" | "fr"]} | Corporate Training | INTER-IT SERVICES INC`,
    description: course.description[locale as "en" | "fr"],
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { locale, slug } = await params;

  const course = courses.find((c) => c.slug === slug);
  if (!course) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/training`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#F7931E] mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour aux formations" : "Back to training"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-orange-50 text-[#F7931E] border-orange-100">LEARNING WORKSHOPS</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B163F]">
                {course.title[locale as "en" | "fr"]}
              </h1>
              <div className="h-1 w-20 bg-[#F7931E] rounded-full mt-4" />
            </div>

            {/* Overview / Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#0B163F] flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#F7931E]" />
                <span>{locale === "fr" ? "Aperçu du Programme" : "Program Overview"}</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {course.description[locale as "en" | "fr"]}
              </p>
            </div>

            {/* Curriculum / Objectives */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#0B163F] flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#F7931E]" />
                <span>{locale === "fr" ? "Objectifs Pédagogiques & Curriculum" : "Learning Curriculum"}</span>
              </h2>
              <div className="space-y-3">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600">
                    <span className="text-[#F7931E] font-bold shrink-0 mt-0.5">•</span>
                    <span>{topic[locale as "en" | "fr"]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Acquired */}
            {course.skillsAcquired && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0B163F] flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#F7931E]" />
                  <span>{locale === "fr" ? "Compétences Acquises" : "Skills Acquired"}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {course.skillsAcquired.map((skill, index) => (
                    <Card key={index} hoverEffect={true} className="border-slate-200 bg-slate-50 p-4 flex gap-2.5 items-start shadow-sm">
                      <ChevronRight className="h-4 w-4 text-[#F7931E] shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-xs leading-relaxed">
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
            <Card hoverEffect={false} className="border-slate-200 bg-white p-6 space-y-6 shadow-sm">
              {/* Meta information */}
              <div className="space-y-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="h-4.5 w-4.5 text-[#F7931E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">{locale === "fr" ? "DURÉE" : "DURATION"}</span>
                    <span className="font-bold">{course.duration[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Compass className="h-4.5 w-4.5 text-[#F7931E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-semibold">{locale === "fr" ? "NIVEAU" : "LEVEL"}</span>
                    <span className="font-bold">{course.level[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                {course.price && (
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <GraduationCap className="h-4.5 w-4.5 text-[#F7931E] shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block font-semibold">{locale === "fr" ? "TARIF D'INSCRIPTION" : "REGISTRATION FEE"}</span>
                      <span className="font-bold">{course.price}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Target Audience */}
              {course.targetAudience && (
                <div>
                  <h3 className="text-xs font-bold text-[#0B163F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-[#F7931E]" />
                    <span>{locale === "fr" ? "Public Cible" : "Target Audience"}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.targetAudience[locale as "en" | "fr"]}
                  </p>
                </div>
              )}

              {/* Registration CTA Block */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-semibold text-[#0B163F] uppercase tracking-wider">
                  {locale === "fr" ? "S'inscrire à cet Atelier ?" : "Enroll Today"}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {locale === "fr"
                    ? "Réservez une session privée pour vos collaborateurs au Canada (Brampton/Ontario) ou à distance à l'international."
                    : "Book a private session for your team in Canada (Brampton/Ontario) or join our live remote cohorts worldwide."}
                </p>
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button variant="secondary" className="w-full text-xs py-2.5 shadow-md shadow-[#F7931E]/20">
                    {locale === "fr" ? "Demander une inscription" : "Request Registration"}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Calendly Booking Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B163F] mb-3">
                {locale === "fr" ? "Réserver votre créneau d'atelier" : "Schedule your Workshop Session"}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                {locale === "fr"
                  ? "Choisissez un créneau ci-dessous pour planifier votre atelier ou discuter d'un programme sur-mesure pour vos collaborateurs."
                  : "Select a time slot below to schedule your workshop or discuss a tailored program for your team."}
              </p>
              <div className="h-0.5 w-16 bg-[#F7931E] mx-auto mt-4 rounded-full" />
            </div>

            <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white h-[600px]">
              <iframe
                src="https://calendly.com/interitservices-brampton/30min?embed_domain=inter-itservices.ca&embed_type=inline&hide_event_type_details=1&background_color=ffffff&text_color=0f172a&primary_color=f7931e"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Scheduler"
                className="w-full h-full min-h-[550px]"
              ></iframe>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
