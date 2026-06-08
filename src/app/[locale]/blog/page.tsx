import React from "react";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import SectionContainer from "@/components/ui/SectionContainer";
import BlogSearchList from "@/components/blog/BlogSearchList";

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

        {/* Filterable Blog List */}
        <BlogSearchList posts={blogPosts} locale={locale} dict={{}} />
      </SectionContainer>
    </div>
  );
}

