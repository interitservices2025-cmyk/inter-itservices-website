"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Zap,
  BarChart3,
  Network,
  Users2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface OdooSectionHomeProps {
  dict: any;
  locale: string;
}

export default function OdooSectionHome({ dict, locale }: OdooSectionHomeProps) {
  const benefits = [
    {
      key: "centralization",
      icon: Layers,
      title: dict.odooHome.benefits.centralization.title,
      description: dict.odooHome.benefits.centralization.description,
    },
    {
      key: "automation",
      icon: Zap,
      title: dict.odooHome.benefits.automation.title,
      description: dict.odooHome.benefits.automation.description,
    },
    {
      key: "visibility",
      icon: BarChart3,
      title: dict.odooHome.benefits.visibility.title,
      description: dict.odooHome.benefits.visibility.description,
    },
    {
      key: "consolidation",
      icon: Network,
      title: dict.odooHome.benefits.consolidation.title,
      description: dict.odooHome.benefits.consolidation.description,
    },
    {
      key: "collaboration",
      icon: Users2,
      title: dict.odooHome.benefits.collaboration.title,
      description: dict.odooHome.benefits.collaboration.description,
    },
    {
      key: "support",
      icon: ShieldCheck,
      title: dict.odooHome.benefits.support.title,
      description: dict.odooHome.benefits.support.description,
    },
  ];

  return (
    <SectionContainer id="odoo-overview" bgType="light" className="border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="h-3.5 w-3.5 text-[#F39200]" />
            <span>{dict.odooHome.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D2140] tracking-tight mb-4">
            {dict.odooHome.title}
          </h2>

          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {dict.odooHome.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card
                  glowColor="secondary"
                  className="h-full border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#1D2140]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl inline-block border border-[#F39200]/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D2140] leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#F39200]">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{locale === "fr" ? "Opérationnel & Éprouvé" : "Proven & Practical"}</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Action Banner */}
        <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              {locale === "fr"
                ? "Vous envisagez Odoo pour votre entreprise ?"
                : "Considering Odoo for your organization?"}
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              {locale === "fr"
                ? "Bénéficiez d'un diagnostic initial de vos flux de travail et découvrez comment Odoo peut unifier votre gestion."
                : "Get an initial assessment of your business workflows and learn how Odoo can unify your operations."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href={`/${locale}/solutions/odoo`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto gap-2 text-sm font-bold uppercase tracking-wider px-6 py-3 shadow-lg shadow-[#F39200]/20"
              >
                <span>{dict.odooHome.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
