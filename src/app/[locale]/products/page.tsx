import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Compass, Cpu, Layers } from "lucide-react";
import { products } from "@/data/products";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Produits SaaS & Logiciels IA | INTER-IT SERVICES INC"
      : "Proprietary SaaS & AI Products | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Découvrez nos solutions logicielles propriétaires conçues pour résoudre vos défis d'affaires à l'aide de l'IA."
      : "Discover our proprietary software solutions powered by AI, designed to solve complex business problems.",
  };
}

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <SectionContainer bgType="transparent">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            {locale === "fr" ? "PRODUITS PROPRIÉTAIRES SAAS" : "PROPRIETARY SAAS PRODUCTS"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            {locale === "fr" ? "Notre Écosystème Logiciel" : "Our Software Ecosystem"}
          </h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {locale === "fr"
              ? "INTER-IT SERVICES INC. développe des solutions logicielles propriétaires alimentées par l'IA pour résoudre les défis récurrents de nos clients tout en créant des leviers de croissance continue."
              : "INTER-IT SERVICES INC. develops proprietary AI-powered software solutions designed to solve recurring client challenges while generating structured recurring revenue streams."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {products.map((product, idx) => (
            <Card
              key={product.id}
              glowColor="primary"
              className="border-slate-200 bg-white p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="bg-orange-50 text-orange-600 p-3 rounded-lg inline-flex mb-6 border border-orange-100">
                  {idx === 0 ? <Bot className="h-6 w-6 text-orange-500" /> : <Layers className="h-6 w-6 text-orange-500" />}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h2>
                
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4">
                  {product.tagline[locale as "en" | "fr"]}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.description[locale as "en" | "fr"]}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Compass className="h-4 w-4 text-orange-500" />
                  <span>SaaS Product</span>
                </div>
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors group cursor-pointer"
                >
                  <span>{locale === "fr" ? "Découvrir le produit" : "Explore Product"}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Strategic Roadmap callout */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-sm">
          <Cpu className="h-10 w-10 text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">
            {locale === "fr" ? "Besoin d'une intégration sur mesure ?" : "Looking for Custom Integration?"}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {locale === "fr"
              ? "Notre écosystème de produits est conçu pour s'adapter à vos infrastructures locales et à vos règles de gouvernance d'entreprise. Contactez nos ingénieurs au Canada ou à l'international pour planifier une démonstration."
              : "Our product ecosystem is engineered to dock directly with your local enterprise infrastructure and corporate databases. Reach out to our engineering team in Canada or internationally for custom demos."}
          </p>
          <Link href={`/${locale}/contact`} className="inline-block">
            <Button variant="secondary" className="px-6 py-2.5">
              {locale === "fr" ? "Discuter avec un ingénieur" : "Talk to an Engineer"}
            </Button>
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
}
