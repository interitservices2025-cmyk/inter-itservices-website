"use client";

import React from "react";
import Link from "next/link";
import { Eye, Cpu, Hammer, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface ServicesSectionProps {
  dict: any;
  locale: string;
}

export default function ServicesSection({ dict, locale }: ServicesSectionProps) {
  // 4 Business outcome categories
  const categories = [
    {
      key: "cat1",
      icon: Eye,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-500/10",
      borderLight: "border-amber-500/20",
      title: dict.servicesCategories.cat1.title,
      description: dict.servicesCategories.cat1.description,
      items: dict.servicesCategories.cat1.items,
      link: `/${locale}/services/web-development`,
    },
    {
      key: "cat2",
      icon: Cpu,
      color: "from-indigo-500 to-purple-600",
      bgLight: "bg-indigo-500/10",
      borderLight: "border-indigo-500/20",
      title: dict.servicesCategories.cat2.title,
      description: dict.servicesCategories.cat2.description,
      items: dict.servicesCategories.cat2.items,
      link: `/${locale}/services/automation-ai`,
    },
    {
      key: "cat3",
      icon: Hammer,
      color: "from-blue-500 to-cyan-600",
      bgLight: "bg-blue-500/10",
      borderLight: "border-blue-500/20",
      title: dict.servicesCategories.cat3.title,
      description: dict.servicesCategories.cat3.description,
      items: dict.servicesCategories.cat3.items,
      link: `/${locale}/services/business-applications`,
    },
    {
      key: "cat4",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-500/10",
      borderLight: "border-emerald-500/20",
      title: dict.servicesCategories.cat4.title,
      description: dict.servicesCategories.cat4.description,
      items: dict.servicesCategories.cat4.items,
      link: `/${locale}/training`,
    },
  ];

  return (
    <SectionContainer id="services" bgType="light">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          {dict.servicesCategories.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {dict.servicesCategories.subtitle}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, index) => {
          const IconComponent = cat.icon;

          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                glowColor={index % 2 === 0 ? "primary" : "secondary"}
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${cat.bgLight} text-amber-500 p-3 rounded-xl border ${cat.borderLight} shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-3 mb-8">
                    {cat.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-xs sm:text-sm font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer link button */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <Link href={cat.link} className="w-full">
                    <Button variant="outline" size="sm" className="w-full justify-between group py-2">
                      <span className="text-slate-300 group-hover:text-amber-500 transition-colors">
                        {locale === "fr" ? "En savoir plus" : "Learn More"}
                      </span>
                      <ArrowRight className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
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
