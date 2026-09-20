"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Globe,
  Cpu,
  Layout,
  Megaphone,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface ServicesSectionProps {
  dict: any;
  locale: string;
}

export default function ServicesSection({ dict, locale }: ServicesSectionProps) {
  const isFr = locale === "fr";

  const solutions = [
    {
      id: "odoo",
      title: "Odoo Implementation",
      category: isFr ? "ERP & Opérations" : "ERP & Operations",
      description: isFr
        ? "Déploiement, paramétrage modulaire et migration de données pour centraliser l'ensemble de votre gestion d'entreprise (CRM, ventes, facturation, stocks)."
        : "End-to-end ERP deployment, modular configuration, and secure data migration to centralize business operations (CRM, sales, billing, inventory).",
      icon: Layers,
      features: isFr
        ? ["Centralisation ERP complète", "Paramétrage CRM, ventes & compta", "Migration de données sécurisée"]
        : ["Complete ERP centralization", "CRM, sales & billing setup", "Secure data migration"],
      link: `/${locale}/solutions/odoo`,
    },
    {
      id: "web-development",
      title: isFr ? "Développement Web" : "Web Development",
      category: isFr ? "Cloud & Portails" : "Cloud & Portals",
      description: isFr
        ? "Conception de sites internet et portails d'entreprise performants, responsives et optimisés pour le référencement naturel (SEO)."
        : "Building high-performance, responsive corporate websites and portals optimized for search engine visibility (SEO).",
      icon: Globe,
      features: isFr
        ? ["Architecture Next.js moderne", "Performance & Core Web Vitals", "SEO et conversion B2B"]
        : ["Modern Next.js architecture", "Performance & Core Web Vitals", "SEO & B2B lead generation"],
      link: `/${locale}/services/web-development`,
    },
    {
      id: "automation-ai",
      title: isFr ? "Automatisation & IA" : "Automation & AI",
      category: isFr ? "Workflows Intelligents" : "Intelligent Workflows",
      description: isFr
        ? "Intégration d'assistants IA et automatisation de flux de travail pour éliminer les tâches manuelles redondantes."
        : "Integrating practical AI assistants and workflow automation to eliminate redundant manual data processing.",
      icon: Cpu,
      features: isFr
        ? ["Chatbots & assistants IA", "Automatisation administrative", "Synchronisation d'outils tiers"]
        : ["AI chatbots & assistants", "Administrative automation", "Third-party tool sync"],
      link: `/${locale}/services/automation-ai`,
    },
    {
      id: "business-applications",
      title: isFr ? "Applications Métiers" : "Business Applications",
      category: isFr ? "Logiciels Sur Mesure" : "Tailored Software",
      description: isFr
        ? "Développement d'outils logiciels sur mesure, portails clients sécurisés et tableaux de bord opérationnels adaptés à vos besoins."
        : "Tailored software development, secure client portals, and operational dashboards built to match specific workflows.",
      icon: Layout,
      features: isFr
        ? ["Portails clients sécurisés", "Tableaux de bord sur mesure", "Bases de données & APIs"]
        : ["Secure client portals", "Custom KPI dashboards", "Databases & APIs"],
      link: `/${locale}/services/business-applications`,
    },
    {
      id: "digital-marketing",
      title: isFr ? "Marketing Digital" : "Digital Marketing",
      category: isFr ? "Acquisition & Visibilité" : "Acquisition & Reach",
      description: isFr
        ? "Stratégies d'acquisition, référencement naturel (SEO) et production de contenus à haute valeur ajoutée pour attirer des clients qualifiés."
        : "Organic acquisition strategies, SEO optimization, and high-value content marketing to attract qualified business clients.",
      icon: Megaphone,
      features: isFr
        ? ["Référencement naturel (SEO)", "Stratégie de contenu", "Acquisition et visibilité ciblée"]
        : ["Search Engine Optimization", "Content strategy", "Targeted visibility & reach"],
      link: `/${locale}/services/digital-marketing`,
    },
    {
      id: "training",
      title: isFr ? "Ateliers de formation" : "Training Workshops",
      category: isFr ? "Montée en Compétences" : "Skill Building",
      description: isFr
        ? "Ateliers pratiques et bootcamps pour rendre vos équipes autonomes sur Odoo, l'IA générative et les outils numériques."
        : "Practical hands-on bootcamps and workshops to upskill teams on Odoo, generative AI, and digital productivity.",
      icon: GraduationCap,
      features: isFr
        ? ["Ateliers Odoo utilisateurs & admins", "Productivité avec l'IA", "Sensibilisation cybersécurité"]
        : ["Odoo user & admin workshops", "AI productivity tools", "Cybersecurity awareness"],
      link: `/${locale}/training`,
    },
  ];

  return (
    <SectionContainer id="solutions" bgType="light" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle brand glow (Strictly Inter-IT Orange & Navy) */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#F39200]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#1D2140]/5 blur-[120px] pointer-events-none" />

      {/* Section Header (Charter: #1D2140 and #F39200) */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-white shadow-2xs text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
          <span>{dict.solutionsOverview?.badge || (isFr ? "Nos Domaines d'Expertise" : "Our Areas of Expertise")}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D2140] mb-5 leading-tight">
          <span>{isFr ? "Des Solutions Technologiques Conçues pour " : "Technological Solutions Tailored for "}</span>
          <span className="text-[#F39200]">
            {isFr ? "Vos Enjeux Métiers" : "Your Business Challenges"}
          </span>
        </h2>

        <div className="h-1.5 w-24 bg-[#F39200] mx-auto rounded-full mb-6" />

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {dict.solutionsOverview?.subtitle || (isFr ? "Un éventail complet de services technologiques pour soutenir la croissance de votre entreprise." : "A complete range of technological services to support your business growth.")}
        </p>
      </div>

      {/* Grid of 6 Solutions - Strict Brand Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <Card
                className="h-full flex flex-col justify-between p-7 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 relative overflow-hidden group hover:border-[#F39200]/60 hover:shadow-xl hover:shadow-black/5"
              >
                {/* Brand top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1D2140] group-hover:bg-[#F39200] transition-colors duration-300" />

                <div>
                  {/* Top: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl border border-[#F39200]/20 bg-[#F39200]/10 text-[#F39200] shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[#1D2140]">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1D2140] mb-3 leading-snug group-hover:text-[#F39200] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key points with Inter-IT Orange checkmarks */}
                  <ul className="space-y-2.5 mb-8">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#F39200]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Button - Brand Styling */}
                <div className="pt-4 border-t border-slate-100">
                  <Link href={item.link} className="w-full block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-between group/btn py-2.5 text-xs font-bold uppercase tracking-wider text-[#1D2140] border-slate-200 hover:bg-[#1D2140] hover:text-white hover:border-[#1D2140] transition-all duration-300"
                    >
                      <span>{isFr ? "En savoir plus" : "Learn More"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
