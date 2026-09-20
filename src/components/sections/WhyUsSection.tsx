"use client";

import React from "react";
import { Users, Award, Zap, GraduationCap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

interface WhyUsSectionProps {
  dict: any;
}

export default function WhyUsSection({ dict }: WhyUsSectionProps) {
  const reasons = [
    {
      key: "personalizedSupport",
      icon: Users,
      title: dict.whyUs.reasons.personalizedSupport.title,
      description: dict.whyUs.reasons.personalizedSupport.description,
    },
    {
      key: "modernExpertise",
      icon: Award,
      title: dict.whyUs.reasons.modernExpertise.title,
      description: dict.whyUs.reasons.modernExpertise.description,
    },
    {
      key: "resultsOriented",
      icon: Zap,
      title: dict.whyUs.reasons.resultsOriented.title,
      description: dict.whyUs.reasons.resultsOriented.description,
    },
    {
      key: "knowledgeTransfer",
      icon: GraduationCap,
      title: dict.whyUs.reasons.knowledgeTransfer.title,
      description: dict.whyUs.reasons.knowledgeTransfer.description,
    },
  ];

  return (
    <SectionContainer id="why-choose-us" bgType="dark" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D2140] mb-4">
            {dict.whyUs.title}
          </h2>
          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            {dict.whyUs.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;

            return (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  hoverEffect={true}
                  className="h-full border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#1D2140]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl inline-block border border-[#F39200]/20">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <CheckCircle className="h-3.5 w-3.5 text-[#F39200]" />
                    <span>Engagement & Qualité</span>
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
