"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Search, X, Tag } from "lucide-react";
import { BlogPost } from "@/types";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { motion, AnimatePresence } from "framer-motion";

interface BlogSearchListProps {
  posts: BlogPost[];
  locale: string;
  dict: any;
}

export default function BlogSearchList({ posts, locale, dict }: BlogSearchListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Search and Filter Panel */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/40 p-4 rounded-xl border border-slate-900">
        {/* Text Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder={locale === "fr" ? "Rechercher un article..." : "Search articles..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-lg pl-10 pr-10 py-2 text-xs text-white placeholder-slate-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-0.5 rounded-full cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Tags quick filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
          <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mr-1.5 hidden sm:inline flex items-center gap-1">
            <Tag className="h-3 w-3" />
            <span>Tags:</span>
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
              !selectedTag
                ? "bg-amber-500 text-slate-950 font-bold"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            {locale === "fr" ? "Tous" : "All"}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                tag === selectedTag
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of posts */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  glowColor="primary"
                  className="h-full flex flex-col justify-between border-slate-800 bg-slate-900/40 p-6"
                >
                  <div>
                    {/* Meta details */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.publishedAt}</span>
                      </div>
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5">
                        {post.tags[0].toUpperCase()}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-2 hover:text-amber-500 transition-colors">
                      <Link href={`/${locale}/blog/${post.slug}`} className="cursor-pointer">
                        {post.title[locale as "en" | "fr"]}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt[locale as "en" | "fr"]}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <User className="h-3.5 w-3.5 text-amber-500/80" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors group cursor-pointer"
                    >
                      <span>{locale === "fr" ? "Lire l'article" : "Read Post"}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-12 text-center text-slate-500 space-y-2"
            >
              <p className="text-sm font-semibold">
                {locale === "fr" ? "Aucun article de blog ne correspond à votre recherche." : "No blog posts matched your search."}
              </p>
              <p className="text-xs">
                {locale === "fr" ? "Essayez d'autres termes ou sélectionnez une autre étiquette." : "Try using different keywords or selecting another tag."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
