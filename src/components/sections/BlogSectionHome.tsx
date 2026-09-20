"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
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
  // Take top 3 articles (prioritizing Odoo articles)
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <SectionContainer id="blog-insights" bgType="light" className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="h-3.5 w-3.5 text-[#F39200]" />
            <span>{dict.blogHome.badge || "Insights & Veille"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D2140] tracking-tight mb-4">
            {dict.blogHome.title}
          </h2>

          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {dict.blogHome.subtitle}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                glowColor="secondary"
                className="h-full flex flex-col justify-between border-slate-200 bg-white p-6 hover:border-[#1D2140]/20 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Category / Tags & Read time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="secondary" className="text-[11px] font-bold uppercase bg-orange-50 text-[#F39200] border-orange-100">
                      {post.tags[0] || "Odoo"}
                    </Badge>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="h-3 w-3 text-[#F39200]" />
                      <span>{post.readTime[locale as "en" | "fr"]}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1D2140] mb-3 leading-snug line-clamp-2 hover:text-[#F39200] transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      {post.title[locale as "en" | "fr"]}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt[locale as "en" | "fr"]}
                  </p>
                </div>

                {/* Footer: Date & Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F39200] hover:text-[#1D2140] transition-colors group"
                  >
                    <span>{dict.blogHome.readMore || "Lire l'article"}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global CTA: Voir tous les articles */}
        <div className="text-center">
          <Link href={`/${locale}/blog`}>
            <Button
              variant="outline"
              className="gap-2 text-xs font-bold uppercase tracking-wider px-6 py-2.5 border-slate-300 text-[#1D2140] hover:bg-[#1D2140] hover:text-white hover:border-[#1D2140] transition-all"
            >
              <span>{dict.blogHome.cta || "Voir tous les articles"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
