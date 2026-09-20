"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Calendar, Compass, BookOpen, ArrowRight, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "@/data/training";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

interface TrainingSectionProps {
  dict: any;
  locale: string;
}

export default function TrainingSection({ dict, locale }: TrainingSectionProps) {
  return (
    <SectionContainer id="training" bgType="light" className="py-20 border-t border-slate-200">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
          <GraduationCap className="h-4 w-4 text-[#F39200]" />
          <span>{locale === "fr" ? "Montée en Compétences" : "Skills Development"}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D2140] mb-4">
          {locale === "fr" ? "Ateliers de Formation & Montée en Compétences" : "Training Workshops & Upskilling"}
        </h2>
        <div className="h-1 w-16 bg-[#F39200] mx-auto rounded-full mb-6" />
        <p className="text-slate-600 text-base sm:text-lg">
          {locale === "fr"
            ? "Des formations pratiques animées par des professionnels pour rendre vos collaborateurs et équipes pleinement opérationnels."
            : "Practical, practitioner-led workshops designed to empower your teams on modern business and digital tools."}
        </p>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
          >
            <Card
              glowColor="primary"
              className="h-full flex flex-col justify-between bg-white border border-slate-200 p-7 shadow-sm transition-all duration-300 hover:border-[#1D2140]/20 hover:shadow-lg"
            >
              <div>
                {/* Card Top Row: Badge & Format */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  {course.format && (
                    <Badge variant="secondary" className="font-semibold text-xs px-3 py-1 bg-orange-50 text-[#F39200] border-orange-100">
                      {course.format[locale as "en" | "fr"]}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2140] mb-3 leading-snug group-hover:text-[#F39200] transition-colors">
                  {course.title[locale as "en" | "fr"]}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {course.description[locale as "en" | "fr"]}
                </p>

                {/* Public cible (Mandatory) */}
                {course.targetAudience && (
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D2140] uppercase tracking-wider mb-1.5">
                      <Users className="h-3.5 w-3.5 text-[#F39200]" />
                      <span>{locale === "fr" ? "Public Cible" : "Target Audience"}</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {course.targetAudience[locale as "en" | "fr"]}
                    </p>
                  </div>
                )}

                {/* Meta details: Duration & Level */}
                <div className="flex flex-wrap gap-4 mb-5 text-xs text-slate-500 border-y border-slate-100 py-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#F39200]" />
                    <span>{course.duration[locale as "en" | "fr"]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-[#F39200]" />
                    <span>{course.level[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                {/* Skills Acquired */}
                {course.skillsAcquired && (
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-[#1D2140] uppercase tracking-wider">
                      {locale === "fr" ? "Objectifs & Compétences" : "Key Objectives & Skills"}
                    </h4>
                    <div className="space-y-1.5">
                      {course.skillsAcquired.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#F39200] shrink-0 mt-0.5" />
                          <span>{skill[locale as "en" | "fr"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button: Demander une formation */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                <Link href={`/${locale}/contact`} className="w-full sm:w-1/2 block">
                  <Button
                    variant="secondary"
                    className="w-full text-xs py-2.5 font-bold uppercase tracking-wider"
                  >
                    <span>{locale === "fr" ? "Demander une formation" : "Request Training"}</span>
                  </Button>
                </Link>

                <Link href={`/${locale}/training/${course.slug}`} className="w-full sm:w-1/2 block">
                  <Button
                    variant="outline"
                    className="w-full text-xs py-2.5 font-semibold text-[#1D2140] border-slate-300 hover:border-[#1D2140]"
                  >
                    <span>{locale === "fr" ? "Voir le programme" : "View Curriculum"}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1 inline-block" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
