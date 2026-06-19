"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MessageSquare, Zap, Mail, FileText, ArrowRight, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface AISectionHomeProps {
  dict: any;
  locale: string;
}

export default function AISectionHome({ dict, locale }: AISectionHomeProps) {
  // Mapping the 5 concrete benefits of AI adoption
  const benefits = [
    {
      key: "tasks",
      icon: RefreshCw,
      title: dict.aiSolutions.benefits.tasks.title,
      description: dict.aiSolutions.benefits.tasks.description,
    },
    {
      key: "support",
      icon: MessageSquare,
      title: dict.aiSolutions.benefits.support.title,
      description: dict.aiSolutions.benefits.support.description,
    },
    {
      key: "communications",
      icon: Mail,
      title: dict.aiSolutions.benefits.communications.title,
      description: dict.aiSolutions.benefits.communications.description,
    },
    {
      key: "documents",
      icon: FileText,
      title: dict.aiSolutions.benefits.documents.title,
      description: dict.aiSolutions.benefits.documents.description,
    },
    {
      key: "productivity",
      icon: Zap,
      title: dict.aiSolutions.benefits.productivity.title,
      description: dict.aiSolutions.benefits.productivity.description,
    },
  ];

  return (
    <SectionContainer id="automation-ai-home" bgType="gradient-dark" className="border-t border-b border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Side: Context / CTA (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-amber-500 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{locale === "fr" ? "IA Pratique & Concrète" : "Practical AI Integration"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {dict.aiSolutions.title}
          </h2>
          
          <div className="h-1 w-20 bg-amber-500 rounded-full" />

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {dict.aiSolutions.subtitle}
          </p>

          <div className="pt-4">
            <Link href={`/${locale}/services/automation-ai`}>
              <Button variant="secondary" className="gap-2 group">
                <span>{dict.aiSolutions.cta}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side: Benefits Grid (7 Columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            // Adjust span to make the layout dynamic
            const isFullWidth = index === benefits.length - 1;

            return (
              <motion.div
                key={benefit.key}
                className={isFullWidth ? "sm:col-span-2" : ""}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  glowColor="secondary"
                  className="h-full border-slate-900 bg-slate-950/40 p-6 hover:border-slate-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg border border-amber-500/20 shrink-0">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
