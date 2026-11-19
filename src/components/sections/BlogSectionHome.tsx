"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

interface BlogSectionHomeProps {
  dict: any;
  locale: string;
}

export default function BlogSectionHome({ dict, locale }: BlogSectionHomeProps) {
  const isFr = locale === "fr";
  // Take top 3 articles (prioritizing Odoo articles)
  const featuredPosts = blogPosts.slice(0, 3);

  const actionCtaLabel =
    dict.blogHome?.actionCta ||
    (isFr ? "Passer à l'action" : "Take Action");

  const consultCtaLabel =
    dict.common?.cta?.requestConsultation ||
    (isFr ? "Demander une consultation" : "Request a Consultation");

  return (
    <SectionContainer id="blog-insights" bgType="transparent" className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="h-3.5 w-3.5 text-[#F39200]" />
            <span>{dict.blogHome?.badge || "Insights & Blog"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D2140] tracking-tight mb-4">
            {dict.blogHome?.title}
          </h2>

          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {dict.blogHome?.subtitle}
          </p>
        </div>

        {/* 3 Articles Grid with Cover Images & Call-to-Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {featuredPosts.map((post) => (
            <div key={post.id} className="h-full">
              <Card
                glowColor="secondary"
                className="h-full flex flex-col justify-between border-slate-200 bg-white p-0 overflow-hidden hover:border-[#F39200]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Blog Cover Image */}
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="relative block h-52 w-full overflow-hidden bg-[#1D2140]"
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.title[locale as "en" | "fr"]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2140]/80 via-[#1D2140]/20 to-transparent" />

                    {/* Category Badge & Read Time Overlay */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <Badge
                        variant="secondary"
                        className="text-[11px] font-extrabold uppercase bg-[#F39200] text-white border-[#F39200] shadow-sm"
                      >
                        {post.tags[0] || "Odoo"}
                      </Badge>
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[#1D2140]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15">
                        <Clock className="h-3 w-3 text-[#F39200]" />
                        <span>{post.readTime[locale as "en" | "fr"]}</span>
                      </div>
                    </div>

                    {/* Date Overlay at bottom-left of image */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-[#F39200]" />
                      <span>{post.publishedAt}</span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-[#1D2140] mb-3 leading-snug line-clamp-2 group-hover:text-[#F39200] transition-colors">
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {post.title[locale as "en" | "fr"]}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt[locale as "en" | "fr"]}
                    </p>
                  </div>
                </div>

                {/* Footer with Action Buttons */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <Link href={`/${locale}/contact`} className="w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm shadow-[#F39200]/20"
                    >
                      <span>{actionCtaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>

                  <Link href={`/${locale}/blog/${post.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider"
                    >
                      <span>{dict.blogHome?.readMore || (isFr ? "Lire l'article" : "Read Article")}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Call-to-Action Banner + View All Articles */}
        <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#F39200]/15 blur-[80px] pointer-events-none" />

          <div className="space-y-2 text-center lg:text-left max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F39200]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {isFr
                  ? "Passez de la réflexion à l'action"
                  : "Move from Insight to Action"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {isFr
                ? "Prêt à structurer et centraliser la gestion de votre entreprise avec Odoo ?"
                : "Ready to structure and centralize your business management with Odoo?"}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isFr
                ? "Échangez avec notre équipe pour analyser vos besoins opérationnels et définir un plan d'implémentation adapté."
                : "Speak with our team to analyze your operational needs and define a tailored implementation plan."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto relative z-10">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-[#F39200]/25"
              >
                <span>{consultCtaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href={`/${locale}/blog`} className="w-full sm:w-auto">
              <Button
                variant="outline-light"
                className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5"
              >
                <span>{dict.blogHome?.cta || (isFr ? "Voir tous les articles" : "View All Articles")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
