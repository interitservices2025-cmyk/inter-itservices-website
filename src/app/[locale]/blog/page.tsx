import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Blog Tech | INTER-IT SERVICES INC"
      : "Technology Blog | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Découvrez nos analyses techniques, guides et actualités sur l'intelligence artificielle et le développement web."
      : "Read our technical reviews, guides, and updates about artificial intelligence and web development.",
  };
}

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      <SectionContainer bgType="transparent">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {locale === "fr" ? "Notre Blog Tech" : "Our Technology Blog"}
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-base sm:text-lg">
            {locale === "fr"
              ? "Découvrez nos dernières analyses, actualités et guides techniques sur l'IA, le développement d'applications et les tendances de l'automatisation."
              : "Discover our latest insights, news, and technical guides regarding AI, app development, and automation trends."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} glowColor="primary" className="border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <Badge variant="secondary">{post.tags[0].toUpperCase()}</Badge>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white mb-3 hover:text-amber-500 transition-colors">
                  <Link href={`/${locale}/blog/${post.slug}`} className="cursor-pointer">
                    {post.title[locale as "en" | "fr"]}
                  </Link>
                </h2>

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
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
