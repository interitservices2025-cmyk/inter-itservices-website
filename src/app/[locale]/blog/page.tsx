import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { blogPosts } from "@/data/blog";
import SectionContainer from "@/components/ui/SectionContainer";
import BlogSearchList from "@/components/blog/BlogSearchList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const url = `https://inter-itservices.ca/${locale}/blog`;

  return {
    title: isFr
      ? "Blog & Ressources Odoo | INTER-IT SERVICES INC"
      : "Odoo Blog & Insights | INTER-IT SERVICES INC",
    description: isFr
      ? "Découvrez nos guides pratiques et analyses sur l'implémentation Odoo, la gestion d'entreprise centralisée et nos réflexions technologiques."
      : "Explore our practical guides and analyses on Odoo implementation, centralized business management, and technology insights.",
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": "https://inter-itservices.ca/fr/blog",
        "en-CA": "https://inter-itservices.ca/en/blog",
      },
    },
    openGraph: {
      title: isFr
        ? "Blog & Ressources Odoo | INTER-IT SERVICES INC"
        : "Odoo Blog & Insights | INTER-IT SERVICES INC",
      description: isFr
        ? "Guides pratiques et analyses sur l'implémentation Odoo et la gestion d'entreprise centralisée."
        : "Practical guides and analyses on Odoo implementation and centralized business management.",
      url,
      siteName: "INTER-IT SERVICES INC",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
    },
  };
}

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1D2140] mb-6">
            {dict.blogPage.title}
          </h1>
          <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            {dict.blogPage.subtitle}
          </p>
        </div>

        {/* Filterable Blog List */}
        <BlogSearchList posts={blogPosts} locale={locale} dict={dict} />
      </SectionContainer>
    </div>
  );
}

