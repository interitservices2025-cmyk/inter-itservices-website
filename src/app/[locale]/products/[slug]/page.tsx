import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight, Compass, Cpu, HelpCircle, Milestone, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProductDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | SaaS Product | INTER-IT SERVICES INC`,
    description: product.tagline[locale as "en" | "fr"],
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { locale, slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Back Link */}
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-orange-500 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{locale === "fr" ? "Retour aux produits" : "Back to products"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Info (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">SAAS ECOSYSTEM</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {product.name}
              </h1>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mt-2">
                {product.tagline[locale as "en" | "fr"]}
              </p>
              <div className="h-1 w-20 bg-orange-500 rounded-full mt-4" />
            </div>

            {/* Overview / Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Description du Produit" : "Product Overview"}</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {product.description[locale as "en" | "fr"]}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Avantages Majeurs" : "Key Benefits"}</span>
              </h2>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{benefit[locale as "en" | "fr"]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span>{locale === "fr" ? "Fonctionnalités Techniques" : "Product Features"}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <Card key={index} hoverEffect={true} className="border-slate-200 bg-slate-50 p-5 flex gap-3 items-start shadow-sm">
                    <ChevronRight className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feature[locale as "en" | "fr"]}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Card hoverEffect={false} className="border-slate-200 bg-white p-6 space-y-6 shadow-sm">
              {/* Product Roadmap */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5 border-b border-slate-100 pb-3">
                  <Milestone className="h-4 w-4 text-orange-500" />
                  <span>{locale === "fr" ? "Feuille de Route" : "Product Roadmap"}</span>
                </h3>
                <div className="space-y-4">
                  {product.roadmap.map((step, index) => (
                    <div key={index} className="space-y-1">
                      <span className="text-[10px] text-orange-500 font-bold block">
                        {step[locale as "en" | "fr"].split(":")[0]}
                      </span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {step[locale as "en" | "fr"].split(":")[1] || step[locale as "en" | "fr"]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product CTA Block */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1">
                  <Compass className="h-4 w-4 text-orange-500" />
                  <span>{locale === "fr" ? "Planifier un essai ?" : "Request Access"}</span>
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {locale === "fr"
                    ? "Prenez contact avec notre équipe au Canada ou à l'international pour obtenir un accès d'essai exclusif à la plateforme."
                    : "Get in touch with our team in Canada or internationally to secure exclusive sandbox access to the platform."}
                </p>
                <Link href={`/${locale}/contact`} className="block w-full">
                  <Button variant="secondary" className="w-full text-xs py-2.5 shadow-md shadow-orange-500/10">
                    {locale === "fr" ? "Demander une démo" : "Request Product Demo"}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Demo Request Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-sm text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D2140]">
                {locale === "fr" ? "Planifier une démonstration guidée" : "Schedule a Guided Demo"}
              </h2>
              <div className="h-0.5 w-16 bg-[#F39200] mx-auto rounded-full" />
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {locale === "fr"
                  ? "Contactez nos ingénieurs pour assister à une démonstration en direct et évaluer l'intégration du logiciel avec vos processus d'affaires."
                  : "Contact our engineering team to schedule a live product walk-through and evaluate integration with your business workflows."}
              </p>
              <div className="pt-4">
                <Link href={`/${locale}/contact`}>
                  <Button variant="secondary" className="px-8 py-3 text-xs font-bold uppercase tracking-wider shadow-md shadow-[#F39200]/20">
                    {locale === "fr" ? "Demander une démonstration" : "Request Product Demo"}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
