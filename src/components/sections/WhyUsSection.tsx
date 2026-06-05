"use client";

import React from "react";
import { Award, Users, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

interface WhyUsSectionProps {
  dict: any;
}

export default function WhyUsSection({ dict }: WhyUsSectionProps) {
  const reasons = [
    {
      key: "expertise",
      icon: Award,
      title: dict.whyUs.reasons.expertise.title,
      description: dict.whyUs.reasons.expertise.description,
    },
    {
      key: "clientFirst",
      icon: Users,
      title: dict.whyUs.reasons.clientFirst.title,
      description: dict.whyUs.reasons.clientFirst.description,
    },
    {
      key: "localPresence",
      icon: MapPin,
      title: dict.whyUs.reasons.localPresence.title,
      description: dict.whyUs.reasons.localPresence.description,
    },
    {
      key: "innovation",
      icon: Zap,
      title: dict.whyUs.reasons.innovation.title,
      description: dict.whyUs.reasons.innovation.description,
    },
  ];

  return (
    <SectionContainer id="why-choose-us" bgType="dark">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.whyUs.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
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
                className="h-full border-slate-800/80 bg-slate-900/30 p-6 flex flex-col items-start"
              >
                <div className="bg-amber-500/10 text-amber-500 p-2.5 rounded-lg mb-5 border border-amber-500/10">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
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
