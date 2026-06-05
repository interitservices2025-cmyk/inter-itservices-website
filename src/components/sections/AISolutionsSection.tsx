"use client";

import React from "react";
import Link from "next/link";
import { Cpu, MessageSquareCode, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { aiSolutions } from "@/data/ai-solutions";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface AISolutionsSectionProps {
  dict: any;
  locale: string;
}

export default function AISolutionsSection({ dict, locale }: AISolutionsSectionProps) {
  // Map string icon names to Lucide components
  const iconMap: Record<string, React.ComponentType<any>> = {
    Cpu: Cpu,
    MessageSquareCode: MessageSquareCode,
    TrendingUp: TrendingUp,
  };

  return (
    <SectionContainer id="ai-solutions" bgType="gradient-dark">
      {/* Title block */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.aiSolutions.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
          {dict.aiSolutions.subtitle}
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {aiSolutions.map((solution, index) => {
          const IconComponent = iconMap[solution.iconName] || Cpu;

          return (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                glowColor="secondary"
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-8"
              >
                <div>
                  {/* Icon Header */}
                  <div className="bg-amber-500/10 text-amber-500 p-3.5 rounded-xl inline-flex mb-6 border border-amber-500/20">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {solution.title[locale as "en" | "fr"]}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {solution.description[locale as "en" | "fr"]}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    {solution.benefits.slice(0, 3).map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-xs leading-normal">
                          {benefit[locale as "en" | "fr"]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More link */}
                <div className="pt-4 border-t border-slate-900">
                  <Link
                    href={`/${locale}/ai-solutions/${solution.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors group cursor-pointer"
                  >
                    <span>{dict.common.cta.learnMore}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
