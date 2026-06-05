"use client";

import React from "react";
import Link from "next/link";
import { Code2, Globe, Smartphone, Palette, Layers, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface ServicesSectionProps {
  dict: any;
  locale: string;
}

export default function ServicesSection({ dict, locale }: ServicesSectionProps) {
  // Map icon names to Lucide icons
  const iconMap: Record<string, React.ComponentType<any>> = {
    Code2: Code2,
    Globe: Globe,
    Smartphone: Smartphone,
    Palette: Palette,
    Layers: Layers,
    Megaphone: Megaphone,
  };

  return (
    <SectionContainer id="services" bgType="light">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.services.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
          {dict.services.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Code2;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                glowColor="primary"
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/50 p-8"
              >
                <div>
                  {/* Icon */}
                  <div className="bg-slate-800 text-slate-100 p-3 rounded-lg inline-flex mb-6 border border-slate-700/50">
                    <IconComponent className="h-5 w-5 text-amber-500" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title[locale as "en" | "fr"]}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDescription[locale as "en" | "fr"]}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learn More link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-500 transition-colors group cursor-pointer"
                  >
                    <span>{dict.common.cta.learnMore}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
