"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Search, X, Tag, Clock, Sparkles } from "lucide-react";
import { BlogPost } from "@/types";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface BlogSearchListProps {
  posts: BlogPost[];
  locale: string;
  dict: any;
}

export default function BlogSearchList({ posts, locale, dict }: BlogSearchListProps) {
  const isFr = locale === "fr";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const actionCtaLabel =
    dict?.blogHome?.actionCta ||
    (isFr ? "Passer à l'action" : "Take Action");

  const consultCtaLabel =
    dict?.common?.cta?.requestConsultation ||
    (isFr ? "Demander une consultation" : "Request a Consultation");

  // Get all unique tags across all posts
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, [posts]);

  // Filter posts based on search input and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title[locale as "en" | "fr"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt[locale as "en" | "fr"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag, locale]);

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Search and Filter Panel */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
        {/* Text Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder={
              dict?.blogPage?.searchPlaceholder ||
              (isFr ? "Rechercher un article..." : "Search articles...")
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#F39200] focus:outline-none rounded-lg pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 p-0.5 rounded-full cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Tags quick filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
          <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mr-1.5 hidden sm:inline-flex items-center gap-1">
            <Tag className="h-3 w-3" />
            <span>{dict?.blogPage?.tagsLabel || (isFr ? "Tags :" : "Tags:")}</span>
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
              !selectedTag
                ? "bg-[#F39200] text-white font-bold"
                : "bg-white text-slate-600 hover:text-[#1D2140] border border-slate-200 shadow-sm"
            }`}
          >
            {dict?.blogPage?.allTags || (isFr ? "Tous" : "All")}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                tag === selectedTag
                  ? "bg-[#F39200] text-white font-bold"
                  : "bg-white text-slate-600 hover:text-[#1D2140] border border-slate-200 shadow-sm"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of posts with Cover Images and Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="h-full">
              <Card
                glowColor="secondary"
                className="h-full flex flex-col justify-between border-slate-200 bg-white p-0 overflow-hidden shadow-sm hover:border-[#F39200]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Cover Image */}
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="relative block h-56 w-full overflow-hidden bg-[#1D2140]"
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.title[locale as "en" | "fr"]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2140]/85 via-[#1D2140]/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <Badge
                        variant="secondary"
                        className="text-[11px] font-extrabold uppercase bg-[#F39200] text-white border-[#F39200] shadow-sm"
                      >
                        {post.tags[0].toUpperCase()}
                      </Badge>
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[#1D2140]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15">
                        <Clock className="h-3 w-3 text-[#F39200]" />
                        <span>{post.readTime[locale as "en" | "fr"]}</span>
                      </div>
                    </div>

                    {/* Date & Author Overlay */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/90 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#F39200]" />
                        <span>{post.publishedAt}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-[#F39200]" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-6 pb-4">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1D2140] mb-3 leading-snug group-hover:text-[#F39200] transition-colors">
                      <Link href={`/${locale}/blog/${post.slug}`} className="cursor-pointer">
                        {post.title[locale as "en" | "fr"]}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt[locale as "en" | "fr"]}
                    </p>
                  </div>
                </div>

                {/* Footer with Action Buttons */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link href={`/${locale}/contact`} className="w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm shadow-[#F39200]/20"
                    >
                      <span>{actionCtaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>

                  <Link href={`/${locale}/blog/${post.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wider"
                    >
                      <span>
                        {dict?.blogHome?.readMore || (isFr ? "Lire l'article" : "Read Article")}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-500 space-y-2">
            <p className="text-sm font-semibold">
              {dict?.blogPage?.emptyTitle ||
                (isFr
                  ? "Aucun article de blog ne correspond à votre recherche."
                  : "No blog posts matched your search.")}
            </p>
            <p className="text-xs">
              {dict?.blogPage?.emptySubtitle ||
                (isFr
                  ? "Essayez d'autres termes ou sélectionnez une autre étiquette."
                  : "Try using different keywords or selecting another tag.")}
            </p>
          </div>
        )}
      </div>

      {/* Call-to-Action Banner at the bottom of the Blog Page */}
      <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#F39200]/15 blur-[80px] pointer-events-none" />

        <div className="space-y-2 text-center lg:text-left max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F39200]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {isFr ? "Besoin d'un accompagnement concret ?" : "Need practical support?"}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isFr
              ? "Passez à l'action et centralisez vos opérations avec Odoo."
              : "Take action and centralize your operations with Odoo."}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {isFr
              ? "INTER-IT Services vous accompagne dans l'analyse de vos besoins, le paramétrage des modules et la mise en place d'Odoo."
              : "INTER-IT Services supports you in analyzing your requirements, configuring modules, and deploying Odoo."}
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

          <Link href={`/${locale}/solutions/odoo`} className="w-full sm:w-auto">
            <Button
              variant="outline-light"
              className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5"
            >
              <span>{isFr ? "Découvrir Odoo" : "Discover Odoo"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
