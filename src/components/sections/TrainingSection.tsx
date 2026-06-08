"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Calendar, Compass, BookOpen, ArrowRight, UserCheck, BarChart3, Edit3 } from "lucide-react";
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
  const catAI = courses.filter((c) => c.trainingCategory === "ai-communication");
  const catMarketing = courses.filter((c) => c.trainingCategory === "digital-marketing");
  const catStorytelling = courses.filter((c) => c.trainingCategory === "storytelling-creation");

  const renderCategory = (items: typeof courses, title: string, subtitle: string, icon: React.ComponentType<any>) => {
    const CategoryIcon = icon;

    return (
      <div className="space-y-8 mt-16 first:mt-0">
        <div className="flex items-center gap-3 border-l-4 border-amber-500 pl-4">
          <CategoryIcon className="h-6 w-6 text-amber-500" />
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                glowColor="primary"
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-6"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="bg-amber-500/10 text-amber-500 p-2 rounded-lg border border-amber-500/15">
                      <GraduationCap className="h-4.5 w-4.5" />
                    </div>
                    {course.price && (
                      <Badge variant="secondary" className="font-semibold text-[10px] px-2 py-0.5">
                        {course.price}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {course.title[locale as "en" | "fr"]}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-5 line-clamp-3">
                    {course.description[locale as "en" | "fr"]}
                  </p>

                  {/* Info (Duration, Level) */}
                  <div className="flex flex-wrap gap-3 mb-5 text-[10px] text-slate-400 border-y border-slate-900/80 py-2.5">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-amber-500/80" />
                      <span>{course.duration[locale as "en" | "fr"]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Compass className="h-3.5 w-3.5 text-amber-500/80" />
                      <span>{course.level[locale as "en" | "fr"]}</span>
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div className="space-y-1.5 mb-6">
                    <h5 className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 mb-2">
                      <BookOpen className="h-3 w-3 text-amber-500/80" />
                      <span>{locale === "fr" ? "Curriculum" : "Curriculum"}</span>
                    </h5>
                    {course.topics.slice(0, 3).map((topic, tIndex) => (
                      <div key={tIndex} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <span className="text-amber-500">•</span>
                        <span className="line-clamp-1">{topic[locale as "en" | "fr"]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-3 border-t border-slate-900/80">
                  <Link href={`/${locale}/training/${course.slug}`} className="w-full block">
                    <Button variant="outline" className="w-full text-[11px] py-1.5">
                      {dict.training.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

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

      <div className="space-y-16 max-w-6xl mx-auto">
        {renderCategory(
          catAI,
          locale === "fr" ? "Catégorie 1 — IA & Communication" : "Category 1 — AI & Communication",
          locale === "fr"
            ? "Ateliers axés sur la maîtrise des invites, ChatGPT, Midjourney, l'analyse prédictive et la gouvernance de l'IA."
            : "Workshops focused on prompt engineering, ChatGPT, Midjourney, predictive analytics, and AI governance.",
          UserCheck
        )}

        {renderCategory(
          catMarketing,
          locale === "fr" ? "Catégorie 2 — Marketing Numérique" : "Category 2 — Marketing Numérique",
          locale === "fr"
            ? "Développez vos performances grâce à l'acquisition, la configuration de GA4, le SEO et les campagnes Meta/Google."
            : "Scale your reach using digital acquisition, custom GA4 reporting, advanced SEO, and Meta/Google Ads.",
          BarChart3
        )}

        {renderCategory(
          catStorytelling,
          locale === "fr" ? "Catégorie 3 — Storytelling & Création" : "Category 3 — Storytelling & Creation",
          locale === "fr"
            ? "Maîtrisez le brand storytelling, le no-code, la rédaction assistée par l'IA et la création de vidéos sur mobile."
            : "Master visual brand narrative, no-code web builders, AI copywriting, and smartphone video post-production.",
          Edit3
        )}
      </div>
    </SectionContainer>
  );
}
