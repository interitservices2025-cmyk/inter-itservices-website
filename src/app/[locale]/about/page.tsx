import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Shield, Eye, Flame, Layers, Cpu, Sparkles, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const url = `https://inter-itservices.ca/${locale}/about`;

  return {
    title: isFr
      ? "À Propos d'INTER-IT Services Inc. | Solutions Odoo & Produits Propriétaires"
      : "About INTER-IT Services Inc. | Odoo Implementation & Proprietary Products",
    description: isFr
      ? "INTER-IT Services Inc. accompagne les entreprises dans l'implémentation d'Odoo et développe ses propres solutions logicielles propriétaires comme App Simulation Profil."
      : "INTER-IT Services Inc. supports businesses with Odoo implementation and develops its own proprietary software solutions such as App Simulation Profil.",
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": "https://inter-itservices.ca/fr/about",
        "en-CA": "https://inter-itservices.ca/en/about",
      },
    },
    openGraph: {
      title: isFr
        ? "À Propos d'INTER-IT Services Inc."
        : "About INTER-IT Services Inc.",
      description: isFr
        ? "Une entreprise technologique centrée sur des produits concrets, maîtrisés et durables : Odoo Implementation et App Simulation Profil."
        : "A technology company focused on concrete, mastered, and sustainable products: Odoo Implementation and App Simulation Profil.",
      url,
      siteName: "INTER-IT SERVICES INC",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
    },
  };
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const dict = await getDictionary(locale);

  const valueIcons = [Shield, Eye, Flame];
  const values = (dict.aboutPage?.values || []).map(
    (val: { title: string; desc: string }, idx: number) => ({
      icon: valueIcons[idx] || Shield,
      title: val.title,
      desc: val.desc,
    })
  );

  const focusItems = dict.aboutPage?.focusItems || [];

  return (
    <div className="flex-grow bg-white">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#1D2140] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F39200]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{dict.aboutPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {dict.aboutPage.title}
          </h1>
          <div className="h-1 w-24 bg-[#F39200] mx-auto rounded-full mb-8" />
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {dict.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* Positioning & Ambition Section */}
      <SectionContainer bgType="light" className="py-16 sm:py-24 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card glowColor="secondary" className="border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1D2140] mb-4">
              {dict.aboutPage.missionTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.aboutPage.missionDesc}
            </p>
          </Card>

          <Card glowColor="primary" className="border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1D2140] mb-4">
              {dict.aboutPage.visionTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.aboutPage.visionDesc}
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Two Strategic Pillars: Odoo Implementation (Available) & App Simulation Profil (In Development) */}
      <SectionContainer bgType="transparent" className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {dict.aboutPage.focusTitle}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusItems.map((item: any, idx: number) => {
              const isOdoo = idx === 0;
              return (
                <Card
                  key={idx}
                  variant={isOdoo ? "highlight" : "dark"}
                  hoverEffect={false}
                  className="p-8 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div
                        className={
                          isOdoo
                            ? "p-3 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20"
                            : "p-3 rounded-xl bg-white/10 text-[#F39200] border border-white/15"
                        }
                      >
                        {isOdoo ? <Layers className="h-6 w-6" /> : <Cpu className="h-6 w-6" />}
                      </div>

                      <span
                        className={
                          isOdoo
                            ? "inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F39200] text-white"
                            : "inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200]"
                        }
                      >
                        {isOdoo && <CheckCircle2 className="h-3.5 w-3.5" />}
                        <span>{item.badge}</span>
                      </span>
                    </div>

                    <h3
                      className={
                        isOdoo
                          ? "text-xl font-extrabold text-[#1D2140] mb-3"
                          : "text-xl font-extrabold text-white mb-3"
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className={
                        isOdoo
                          ? "text-slate-600 text-sm leading-relaxed mb-6"
                          : "text-slate-200 text-sm leading-relaxed mb-6"
                      }
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className={isOdoo ? "pt-4 border-t border-slate-100" : "pt-4 border-t border-white/10"}>
                    {isOdoo ? (
                      <Link href={`/${locale}/solutions/odoo`} className="block w-full">
                        <Button
                          variant="secondary"
                          className="w-full justify-center gap-2 text-xs font-bold uppercase tracking-wider"
                        >
                          <span>{isFr ? "Découvrir Odoo" : "Discover Odoo"}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-white/20 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider cursor-not-allowed select-none"
                      >
                        <Lock className="h-3.5 w-3.5 text-[#F39200]" />
                        <span>{isFr ? "BIENTÔT DISPONIBLE" : "COMING SOON"}</span>
                      </button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Corporate Commitments */}
      <SectionContainer bgType="transparent" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] text-center mb-12">
            {dict.aboutPage.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(
              (
                value: {
                  icon: React.ComponentType<{ className?: string }>;
                  title: string;
                  desc: string;
                },
                idx: number
              ) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={idx}
                    hoverEffect={true}
                    className="border-slate-200 bg-white p-7 flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="bg-[#F39200]/10 text-[#F39200] p-3.5 rounded-xl mb-4 border border-[#F39200]/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140] mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                  </Card>
                );
              }
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
