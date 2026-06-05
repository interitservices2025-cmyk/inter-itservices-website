import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import PortfolioSection from "@/components/sections/PortfolioSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr"
      ? "Notre Portfolio | INTER-IT SERVICES INC"
      : "Our Featured Portfolio | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Découvrez les solutions d'automatisation IA et de développement d'applications mobiles/web livrées par nos ingénieurs."
      : "Explore custom AI automation and mobile/web application solutions built by our engineers.",
  };
}

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      <PortfolioSection dict={dict} locale={locale} />
    </div>
  );
}
