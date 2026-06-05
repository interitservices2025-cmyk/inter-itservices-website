"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface PortfolioSectionProps {
  dict: any;
  locale: string;
}

export default function PortfolioSection({ dict, locale }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { key: "all", label: dict.portfolio.categories.all },
    { key: "ai", label: dict.portfolio.categories.ai },
    { key: "web", label: dict.portfolio.categories.web },
    { key: "mobile", label: dict.portfolio.categories.mobile },
    { key: "design", label: dict.portfolio.categories.design },
  ];

  const filteredProjects = portfolio.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <SectionContainer id="portfolio" bgType="gradient-dark">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.portfolio.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
          {dict.portfolio.subtitle}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filterOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setActiveFilter(option.key)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer border ${
              activeFilter === option.key
                ? "bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md shadow-amber-500/10"
                : "bg-slate-900/50 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                glowColor="primary"
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-6"
              >
                <div>
                  {/* Category Badge & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.category === "ai" ? "secondary" : "primary"}>
                      {project.category.toUpperCase()}
                    </Badge>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {project.completionDate}
                    </span>
                  </div>

                  {/* Title & Client */}
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-semibold mb-4">
                    {project.clientName}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description[locale as "en" | "fr"]}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Folder className="h-3.5 w-3.5 text-amber-500/80" />
                    <span>Case Study</span>
                  </div>
                  <Link
                    href={`/${locale}/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors group cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      <div className="text-center">
        <Link href={`/${locale}/portfolio`}>
          <Button variant="outline">
            {dict.common.cta.viewAll}
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
