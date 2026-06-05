"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Calendar, Compass, BookOpen } from "lucide-react";
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
    <SectionContainer id="training" bgType="gradient-dark">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.training.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
          {dict.training.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card
              glowColor="primary"
              className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-8"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg border border-amber-500/10">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  {course.price && (
                    <Badge variant="secondary" className="font-semibold">
                      {course.price}
                    </Badge>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {course.title[locale as "en" | "fr"]}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {course.description[locale as "en" | "fr"]}
                </p>

                {/* Details (Duration, Level) */}
                <div className="flex flex-wrap gap-4 mb-6 text-[11px] text-slate-400 border-y border-slate-900 py-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-amber-500/80" />
                    <span>{course.duration[locale as "en" | "fr"]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-amber-500/80" />
                    <span>{course.level[locale as "en" | "fr"]}</span>
                  </div>
                </div>

                {/* Key Topics */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5 mb-3">
                    <BookOpen className="h-3.5 w-3.5 text-amber-500/80" />
                    <span>{locale === "fr" ? "Programme de cours" : "Course Curriculum"}</span>
                  </h4>
                  {course.topics.slice(0, 3).map((topic, tIndex) => (
                    <div key={tIndex} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-500">•</span>
                      <span>{topic[locale as "en" | "fr"]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link href={`/${locale}/training/${course.slug}`} className="w-full">
                  <Button variant="outline" className="w-full text-xs py-2">
                    {dict.training.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Explore More link */}
      <div className="text-center">
        <Link href={`/${locale}/training`}>
          <Button variant="secondary">
            {locale === "fr" ? "Voir tous nos programmes" : "View All Programs"}
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
