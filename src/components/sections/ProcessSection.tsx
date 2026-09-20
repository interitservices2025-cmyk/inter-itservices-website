"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cog, CheckCircle2 } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

interface ProcessSectionProps {
  dict: any;
  locale: string;
}

export default function ProcessSection({ dict, locale }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: dict.processSection?.steps[0]?.title || (locale === "fr" ? "Écoute & Cadrage" : "Discovery & Scoping"),
      desc: dict.processSection?.steps[0]?.desc || (locale === "fr" ? "Analyse de vos besoins et diagnostic de vos flux de travail actuels." : "In-depth needs assessment and diagnostic of your current workflows."),
    },
    {
      num: "02",
      icon: Compass,
      title: dict.processSection?.steps[1]?.title || (locale === "fr" ? "Conception & Stratégie" : "Architecture & Strategy"),
      desc: dict.processSection?.steps[1]?.desc || (locale === "fr" ? "Élaboration d'une feuille de route claire avec jalons opérationnels." : "Designing a transparent implementation roadmap with measurable milestones."),
    },
    {
      num: "03",
      icon: Cog,
      title: dict.processSection?.steps[2]?.title || (locale === "fr" ? "Réalisation & Paramétrage" : "Configuration & Testing"),
      desc: dict.processSection?.steps[2]?.desc || (locale === "fr" ? "Déploiement, configuration agile et points de validation réguliers." : "Agile deployment, system configuration, and regular validation sprints."),
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: dict.processSection?.steps[3]?.title || (locale === "fr" ? "Déploiement & Formation" : "Go-Live & Training"),
      desc: dict.processSection?.steps[3]?.desc || (locale === "fr" ? "Mise en service opérationnelle et formation continue des équipes." : "Operational go-live, comprehensive staff training, and long-term support."),
    },
  ];

  return (
    <SectionContainer id="process" bgType="light" className="py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{dict.processSection?.badge || "Méthodologie"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D2140] mb-4">
            {dict.processSection?.title || "Comment Nous Accompagnons Nos Clients"}
          </h2>

          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {dict.processSection?.subtitle || "Une démarche rigoureuse pour garantir l'efficacité et la pérennité de chaque projet."}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card
                  hoverEffect={true}
                  className="h-full border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#1D2140]/20 hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-slate-200">
                        {step.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#1D2140]">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#F39200] uppercase tracking-wider">
                    <span>{locale === "fr" ? `Étape ${step.num}` : `Step ${step.num}`}</span>
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
