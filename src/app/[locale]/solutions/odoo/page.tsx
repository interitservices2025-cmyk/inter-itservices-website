import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users2,
  Database,
  BarChart3,
  ShieldCheck,
  FolderSync,
  Laptop,
  Headphones,
  Settings2,
} from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface OdooPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Implémentation Odoo pour PME & Entreprises | INTER-IT SERVICES INC"
      : "Odoo Implementation & Deployment for SMEs | INTER-IT SERVICES INC",
    description: isFr
      ? "Accompagnement dans l'implémentation et le déploiement d'Odoo pour centraliser vos opérations : CRM, ventes, facturation, inventaire et comptabilité."
      : "End-to-end Odoo implementation and deployment services to centralize your business operations: CRM, sales, invoicing, inventory, and accounting.",
    alternates: {
      canonical: `https://inter-itservices.ca/${locale}/solutions/odoo`,
    },
  };
}

export default async function OdooPage({ params }: OdooPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const modulesList = [
    {
      name: locale === "fr" ? "CRM & Ventes" : "CRM & Sales",
      desc:
        locale === "fr"
          ? "Gestion de vos prospects, pipelines commerciaux, devis en ligne et signatures électroniques."
          : "Pipeline tracking, lead management, automated online quotes, and legal e-signatures.",
      icon: Users2,
    },
    {
      name: locale === "fr" ? "Facturation & Comptabilité" : "Invoicing & Accounting",
      desc:
        locale === "fr"
          ? "Génération automatique des factures, rapprochement bancaire, gestion des paiements et rapports financiers."
          : "Automated billing cycles, bank synchronization, payment tracking, and dynamic financial statements.",
      icon: BarChart3,
    },
    {
      name: locale === "fr" ? "Inventaire & Achats" : "Inventory & Purchasing",
      desc:
        locale === "fr"
          ? "Traçabilité des stocks en temps réel, commandes fournisseurs et réapprovisionnements automatiques."
          : "Real-time stock valuation, multi-warehouse traceability, and automated vendor purchase orders.",
      icon: Database,
    },
    {
      name: locale === "fr" ? "Gestion de Projets" : "Project Management",
      desc:
        locale === "fr"
          ? "Planification des jalons, feuilles de temps (timesheets), affectation des ressources et rentabilité."
          : "Task scheduling, employee timesheets, milestone planning, and project profitability metrics.",
      icon: Layers,
    },
    {
      name: locale === "fr" ? "Ressources Humaines" : "Human Resources",
      desc:
        locale === "fr"
          ? "Dossiers employés, gestion des congés, notes de frais et suivi des recrutements."
          : "Employee directories, leave tracking, expense reporting, and streamlined hiring workflows.",
      icon: Settings2,
    },
    {
      name: locale === "fr" ? "Marketing & Automatisation" : "Marketing Automation",
      desc:
        locale === "fr"
          ? "Campagnes par courriel ciblées, formulaires de capture web et segmentation de contacts."
          : "Targeted email campaigns, integrated web lead capture, and behavioral marketing automation.",
      icon: Sparkles,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: locale === "fr" ? "Analyse des besoins" : "Needs Assessment",
      desc:
        locale === "fr"
          ? "Diagnostic approfondi de votre organisation, de vos défis opérationnels et de vos objectifs de gestion."
          : "Comprehensive assessment of your organizational requirements, workflow bottlenecks, and strategic priorities.",
      icon: FolderSync,
    },
    {
      step: "02",
      title: locale === "fr" ? "Étude des processus" : "Workflow Mapping",
      desc:
        locale === "fr"
          ? "Cartographie détaillée de vos flux de travail pour configurer Odoo en adéquation avec votre métier."
          : "Mapping existing business processes to ensure Odoo modules match your day-to-day operations.",
      icon: Settings2,
    },
    {
      step: "03",
      title: locale === "fr" ? "Configuration" : "Configuration",
      desc:
        locale === "fr"
          ? "Paramétrage des modules, des taxes, des devises, des modèles de documents et des droits d'accès."
          : "Configuring modules, localized tax structures, multi-currency settings, and role-based permissions.",
      icon: Laptop,
    },
    {
      step: "04",
      title: locale === "fr" ? "Personnalisation lorsque nécessaire" : "Tailored Customization",
      desc:
        locale === "fr"
          ? "Ajustement des vues, des champs spécifiques et des règles métier propres à votre secteur d'activité."
          : "Customizing views, specific fields, and custom business rules to match your unique operational model.",
      icon: Sparkles,
    },
    {
      step: "05",
      title: locale === "fr" ? "Migration & Import des données" : "Data Migration",
      desc:
        locale === "fr"
          ? "Nettoyage, reformatage et importation sécurisée de vos données clients, articles et historiques."
          : "Cleansing, restructuring, and securely migrating your customer databases, product catalogs, and history.",
      icon: Database,
    },
    {
      step: "06",
      title: locale === "fr" ? "Formation des équipes" : "Team Training",
      desc:
        locale === "fr"
          ? "Sessions de formation pratiques pour les utilisateurs et administrateurs afin d'assurer l'autonomie."
          : "Role-specific hands-on training for staff and administrators to guarantee rapid system adoption.",
      icon: Users2,
    },
    {
      step: "07",
      title: locale === "fr" ? "Déploiement" : "Deployment & Go-Live",
      desc:
        locale === "fr"
          ? "Mise en service opérationnelle assistée avec validation des premiers flux en environnement réel."
          : "Controlled system cutover with active real-time support during initial production operations.",
      icon: ShieldCheck,
    },
    {
      step: "08",
      title: locale === "fr" ? "Accompagnement post-déploiement" : "Post-Go-Live Support",
      desc:
        locale === "fr"
          ? "Support continu, ajustements post-lancement et conseils pour faire évoluer votre solution dans le temps."
          : "Ongoing operational support, post-launch refinements, and evolutionary advice as your business scales.",
      icon: Headphones,
    },
  ];

  const targetProfiles = [
    {
      title: locale === "fr" ? "PME en Croissance" : "Growing SMEs",
      desc:
        locale === "fr"
          ? "Entreprises dont l'activité s'accélère et qui nécessitent une structure de gestion plus rigoureuse que de simples tableurs."
          : "Businesses scaling rapidly that need a more reliable and structured foundation than manual spreadsheets.",
    },
    {
      title: locale === "fr" ? "Organisations Multi-Outils" : "Multi-Tool Companies",
      desc:
        locale === "fr"
          ? "Sociétés fatiguées de multiplier les abonnements logiciels incompatibles et souhaitant une plateforme unifiée."
          : "Organizations struggling with disjointed software subscriptions that seek a single cohesive system.",
    },
    {
      title: locale === "fr" ? "Entreprises Souhaitant Centraliser" : "Centralized Control",
      desc:
        locale === "fr"
          ? "Dirigeants et gestionnaires ayant besoin d'une visibilité consolidée en temps réel sur leurs ventes, stocks et finances."
          : "Business leaders requiring consolidated real-time visibility across sales, stock, and financial health.",
    },
    {
      title: locale === "fr" ? "Sociétés de Services & Négoce" : "Services & Trade",
      desc:
        locale === "fr"
          ? "Structures ayant besoin d'un lien direct entre la vente, la gestion de projet, l'inventaire et la facturation."
          : "Firms requiring direct linkage between customer orders, project execution, inventory, and automated billing.",
    },
  ];

  return (
    <div className="flex-grow bg-white">
      {/* 1. Hero Section Odoo */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#1D2140] text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F39200]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F39200]/40 bg-[#F39200]/15 text-[#F39200] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Odoo Implementation Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {locale === "fr"
              ? "Implémentation Odoo : Centralisez et Pilotez Votre Entreprise"
              : "Odoo Implementation: Centralize & Scale Your Business Operations"}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            {locale === "fr"
              ? "INTER-IT Services vous accompagne dans l'implémentation, la configuration et l'adoption d'Odoo pour unifier vos opérations sans complexité inutile."
              : "INTER-IT Services guides you through Odoo deployment, configuration, and team onboarding to unify your business operations without unnecessary complexity."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25"
              >
                <span>{locale === "fr" ? "Discuter de votre projet Odoo" : "Discuss Your Odoo Project"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Odoo, c'est quoi ? */}
      <SectionContainer bgType="transparent" className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {locale === "fr" ? "Odoo, c'est quoi ?" : "What is Odoo?"}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {locale === "fr"
                ? "Odoo est une suite d'applications professionnelles intégrées conçue pour répondre à l'ensemble des besoins de gestion d'une entreprise. Modulaire et flexible, Odoo permet de centraliser vos activités au sein d'une même base de données, évitant les doubles saisies et facilitant la collaboration entre vos équipes."
                : "Odoo is an integrated suite of business applications designed to address all operational requirements. Modular and flexible, Odoo centralizes business activities within a single shared database, preventing duplicate data entries and fostering seamless collaboration across departments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulesList.map((m, idx) => {
              const Icon = m.icon;
              return (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#1D2140]/20 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#F39200]/10 text-[#F39200] border border-[#F39200]/20 inline-block">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {m.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-[#F39200] font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{locale === "fr" ? "Module disponible" : "Available module"}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Notre Accompagnement en 8 Étapes */}
      <SectionContainer bgType="light" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {locale === "fr" ? "Notre Accompagnement" : "Our Implementation Process"}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg">
              {locale === "fr"
                ? "Un déploiement structuré en 8 étapes pour assurer la réussite et l'adoption de votre ERP."
                : "A structured 8-step rollout designed to ensure successful system adoption and minimal business disruption."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card
                  key={p.step}
                  hoverEffect={true}
                  className="border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#1D2140]/20 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-slate-200">
                        {p.step}
                      </span>
                      <div className="p-2 rounded-lg bg-[#F39200]/10 text-[#F39200]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#1D2140]">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {locale === "fr" ? `Étape ${idx + 1}` : `Phase ${idx + 1}`}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Pour Quelles Entreprises ? */}
      <SectionContainer bgType="transparent" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2140] mb-4">
              {locale === "fr" ? "Pour Quelles Entreprises ?" : "Who is Odoo For?"}
            </h2>
            <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base sm:text-lg">
              {locale === "fr"
                ? "Nos services d'implémentation Odoo sont calibrés pour répondre aux réalités des structures suivantes :"
                : "Our Odoo implementation services are calibrated to meet the exact operational realities of:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {targetProfiles.map((tp, idx) => (
              <Card
                key={idx}
                hoverEffect={true}
                className="border-slate-200 bg-white p-7 hover:border-[#1D2140]/20 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#F39200] shrink-0" />
                    <h3 className="text-lg font-bold text-[#1D2140]">
                      {tp.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-7">
                    {tp.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="rounded-2xl bg-[#1D2140] text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {locale === "fr"
                  ? "Prêt à échanger sur votre projet Odoo ?"
                  : "Ready to Discuss Your Odoo Implementation?"}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {locale === "fr"
                  ? "Contactez INTER-IT Services pour une première session de cadrage. Nous analysons vos besoins et vous proposons une approche adaptée à votre organisation."
                  : "Contact INTER-IT Services for an initial scoping conversation. We analyze your requirements and propose a practical roadmap tailored to your organization."}
              </p>
              <div>
                <Link href={`/${locale}/contact`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F39200]/25 hover:scale-105 transition-transform"
                  >
                    <span>{locale === "fr" ? "Discuter de votre projet Odoo" : "Discuss Your Odoo Project"}</span>
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
