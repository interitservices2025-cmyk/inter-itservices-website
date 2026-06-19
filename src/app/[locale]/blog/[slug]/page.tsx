import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title[locale as "en" | "fr"]} | Blog | INTER-IT SERVICES INC`,
    description: post.excerpt[locale as "en" | "fr"],
  };
}

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-orange-500 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour au blog" : "Back to blog"}</span>
        </Link>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header Block */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{post.tags[0].toUpperCase()}</Badge>
              <span className="text-slate-400 text-xs">•</span>
              <div className="flex items-center gap-1 text-[11px] text-slate-600">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.publishedAt}</span>
              </div>
              <span className="text-slate-400 text-xs">•</span>
              <div className="flex items-center gap-1 text-[11px] text-slate-600">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime[locale as "en" | "fr"]}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {post.title[locale as "en" | "fr"]}
            </h1>
            <div className="h-1 w-20 bg-orange-500 rounded-full" />
          </div>

          {/* Author info */}
          <div className="flex items-center gap-3 py-4 border-y border-slate-100">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
              <User className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block font-semibold">AUTHOR</span>
              <span className="text-xs font-bold text-slate-800">{post.author}</span>
            </div>
          </div>

          {/* Post Content */}
          <Card hoverEffect={false} className="border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <article className="prose max-w-none">
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line font-medium">
                {post.excerpt[locale as "en" | "fr"]}
              </p>
              <div className="h-px bg-slate-100 my-6" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {post.content[locale as "en" | "fr"]}
              </p>
            </article>

            {/* Tags footer */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="primary">
                  #{tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
