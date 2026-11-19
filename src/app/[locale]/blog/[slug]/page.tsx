import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getDictionary } from "@/lib/get-dictionary";

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
  const isFr = locale === "fr";
  const dict = await getDictionary(locale);

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Back Link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#F39200] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{dict.blogPage.backLink}</span>
          </Link>

          {/* Header Block */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{post.tags[0].toUpperCase()}</Badge>
              <span className="text-slate-400 text-xs">•</span>
              <div className="flex items-center gap-1 text-[11px] text-slate-600">
                <Calendar className="h-3.5 w-3.5 text-[#F39200]" />
                <span>{post.publishedAt}</span>
              </div>
              <span className="text-slate-400 text-xs">•</span>
              <div className="flex items-center gap-1 text-[11px] text-slate-600">
                <Clock className="h-3.5 w-3.5 text-[#F39200]" />
                <span>{post.readTime[locale as "en" | "fr"]}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2140] leading-tight mb-6">
              {post.title[locale as "en" | "fr"]}
            </h1>
            <div className="h-1 w-20 bg-[#F39200] rounded-full" />
          </div>

          {/* Author info & Top Action CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#1D2140] flex items-center justify-center text-[#F39200] font-bold text-sm">
                <User className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block font-semibold">
                  {dict.blogPage.authorLabel}
                </span>
                <span className="text-xs font-bold text-[#1D2140]">{post.author}</span>
              </div>
            </div>

            <Link href={`/${locale}/contact`}>
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 text-xs font-bold uppercase tracking-wider shadow-sm shadow-[#F39200]/20"
              >
                <span>{isFr ? "Passer à l'action" : "Take Action"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Featured Cover Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#1D2140]">
            <Image
              src={post.imageUrl}
              alt={post.title[locale as "en" | "fr"]}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
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

          {/* Article Call-to-Action Block */}
          <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#F39200]/15 blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F39200]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{isFr ? "Passez à l'action" : "Take Action"}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {isFr
                  ? "Vous souhaitez centraliser les opérations de votre entreprise avec Odoo ?"
                  : "Want to centralize your business operations with Odoo?"}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isFr
                  ? "INTER-IT Services vous accompagne dans l'analyse de vos besoins, le paramétrage des modules et la mise en place d'un environnement de gestion adapté à votre organisation."
                  : "INTER-IT Services supports you in analyzing your requirements, configuring modules, and setting up a management environment tailored to your organization."}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 shadow-lg shadow-[#F39200]/25"
                  >
                    <span>
                      {isFr ? "Demander une consultation" : "Request a Consultation"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href={`/${locale}/solutions/odoo`} className="w-full sm:w-auto">
                  <Button
                    variant="outline-light"
                    className="w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3"
                  >
                    <span>{isFr ? "Découvrir Odoo" : "Discover Odoo"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
