"use client";

import React from "react";
import Link from "next/link";
import { Fingerprint, Printer, Sparkles, Video, Globe, Smartphone, Layout, Megaphone, ArrowRight, Code } from "lucide-react";
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
    Fingerprint: Fingerprint,
    Printer: Printer,
    Sparkles: Sparkles,
    Video: Video,
    Globe: Globe,
    Smartphone: Smartphone,
    Layout: Layout,
    Megaphone: Megaphone,
  };

  const pillarA = services.filter((s) => s.pillar === "design");
  const pillarB = services.filter((s) => s.pillar === "digital");

  const renderGrid = (items: typeof services, title: string, subtitle: string) => (
    <div className="space-y-8 mt-16 first:mt-0">
      <div className="border-l-4 border-amber-500 pl-4">
        <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Code;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                glowColor="primary"
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/50 p-6"
              >
                <div>
                  {/* Icon */}
                  <div className="bg-slate-800/80 text-slate-100 p-2.5 rounded-lg inline-flex mb-5 border border-slate-700/40">
                    <IconComponent className="h-4.5 w-4.5 text-amber-500" />
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-base font-bold text-white mb-2 leading-tight">
                    {service.title[locale as "en" | "fr"]}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-5 line-clamp-3">
                    {service.shortDescription[locale as "en" | "fr"]}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="primary" className="text-[9px] px-1.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learn More link */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-amber-500 transition-colors group cursor-pointer"
                  >
                    <span>{dict.common.cta.learnMore}</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

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

      <div className="space-y-16 max-w-7xl mx-auto">
        {renderGrid(
          pillarA,
          locale === "fr" ? "Pilier A — Design & Créativité Augmentée" : "Pillar A — Design & Augmented Creativity",
          locale === "fr"
            ? "L'intégration de l'IA dans le processus créatif repousse les limites artistiques tout en optimisant les délais de livraison."
            : "Integrating AI into the creative pipeline pushes artistic limits while drastically speeding up delivery timelines."
        )}

        {renderGrid(
          pillarB,
          locale === "fr" ? "Pilier B — Digital & Web \"AI-Native\"" : "Pillar B — Digital & Web \"AI-Native\"",
          locale === "fr"
            ? "Le développement web et les stratégies digitales incorporent l'IA pour offrir des performances web et de conversion inégalées."
            : "Web development and digital tactics harness AI to deliver unrivaled runtime performance and conversion metrics."
        )}
      </div>
    </SectionContainer>
  );
}
