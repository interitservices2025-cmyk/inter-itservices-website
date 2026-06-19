"use client";

import React from "react";
import { Users, Award, Zap, GraduationCap } from "lucide-react";
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
    <SectionContainer id="why-choose-us" bgType="dark">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B163F] mb-4">
          {dict.whyUs.title}
        </h2>
        <div className="h-1 w-20 bg-[#F7931E] mx-auto rounded-full mb-6" />
        <p className="text-slate-600 text-base sm:text-lg">
          {dict.whyUs.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;

          return (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                hoverEffect={true}
                className="h-full border-slate-200 bg-white p-6 flex flex-col items-start hover:border-[#0B163F]/10 transition-all duration-300"
              >
                <div className="bg-[#F7931E]/10 text-[#F7931E] p-2.5 rounded-lg mb-5 border border-[#F7931E]/20">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B163F] mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
