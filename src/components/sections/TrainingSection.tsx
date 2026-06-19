"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Calendar, Compass, BookOpen, ArrowRight } from "lucide-react";
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
    <SectionContainer id="training" bgType="light" className="py-24 sm:py-32">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B163F] mb-4">
          {dict.training.title}
        </h2>
        <div className="h-1 w-16 bg-[#F7931E] mx-auto rounded-full mb-6" />
        <p className="text-slate-600 text-base sm:text-lg">
          {dict.training.subtitle}
        </p>
      </div>

      {/* Grid of 4 Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card
              glowColor="primary"
              className="h-full flex flex-col justify-between bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-[#0B163F]/10"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-orange-50 text-[#F7931E] p-3 rounded-xl border border-orange-100 transition-colors duration-300 group-hover:bg-[#F7931E] group-hover:text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  {course.price && (
                    <Badge variant="secondary" className="font-semibold text-xs px-3 py-1 bg-orange-50 text-[#F7931E] border-orange-100">
                      {course.price}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0B163F] mb-3 leading-snug group-hover:text-[#F7931E] transition-colors duration-300">
                  {course.title[locale as "en" | "fr"]}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {course.description[locale as "en" | "fr"]}
                </p>

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 mb-6 text-xs text-slate-500 border-y border-slate-100 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#F7931E]" />
                    <span>{course.duration[locale as "en" | "fr"]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-[#F7931E]" />
                    <span>{course.level[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                {/* Curriculum Bulleted Topics */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-[#0B163F] uppercase tracking-wider flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-[#F7931E]" />
                    <span>{locale === "fr" ? "Programme de la formation" : "Course Curriculum"}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5 pl-1">
                    {course.topics.map((topic, tIndex) => (
                      <div key={tIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-[#F7931E] font-bold mt-0.5">•</span>
                        <span className="leading-snug">{topic[locale as "en" | "fr"]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-100">
                <Link href={`/${locale}/training/${course.slug}`} className="w-full block">
                  <Button
                    variant="outline"
                    className="w-full text-xs py-2.5 font-semibold text-[#0B163F] hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E]"
                  >
                    <span>{dict.training.cta}</span>
                    <ArrowRight className="h-4 w-4 ml-1.5 inline-block" />
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
