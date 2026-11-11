import { LocalizedString } from "@/types";

export interface CatalogSolution {
  id: "odoo" | "app-simulation-profil";
  slug: string;
  name: LocalizedString;
  status: "available" | "in_development";
  statusBadge: LocalizedString;
  secondaryStatusBadge?: LocalizedString;
  isAvailable: boolean;
  href: (locale: string) => string;
  tagline: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  features: LocalizedString[];
  regions?: LocalizedString[];
  disclaimer?: LocalizedString;
}

export const SOLUTIONS_CATALOG: CatalogSolution[] = [
  {
    id: "odoo",
    slug: "odoo",
    name: {
      fr: "Odoo Implementation",
      en: "Odoo Implementation",
    },
    status: "available",
    statusBadge: {
      fr: "DISPONIBLE",
      en: "AVAILABLE",
    },
    isAvailable: true,
    href: (locale: string) => `/${locale}/solutions/odoo`,
    tagline: {
      fr: "Odoo – Une gestion d'entreprise centralisée.",
      en: "Odoo – Centralized Business Management.",
    },
    shortDescription: {
      fr: "Accompagnement complet dans l'analyse de vos besoins, le paramétrage des modules et le déploiement d'Odoo pour votre organisation.",
      en: "Comprehensive guidance in needs analysis, module configuration, and Odoo deployment tailored to your organization.",
    },
    fullDescription: {
      fr: "Centralisez les opérations de votre entreprise avec Odoo. INTER-IT Services vous accompagne dans l'analyse de vos besoins, le paramétrage des modules et la mise en place d'un environnement de gestion adapté à votre organisation.",
      en: "Centralize your business operations with Odoo. INTER-IT Services supports you in analyzing your requirements, configuring modules, and setting up a management environment tailored to your organization.",
    },
    features: [
      { fr: "CRM et gestion commerciale", en: "CRM and sales management" },
      { fr: "Ventes et achats", en: "Sales and purchasing" },
      { fr: "Facturation et comptabilité", en: "Invoicing and accounting" },
      { fr: "Gestion des stocks", en: "Inventory management" },
      { fr: "Gestion de projets", en: "Project management" },
      { fr: "Centralisation des opérations", en: "Centralized operations" },
    ],
  },
  {
    id: "app-simulation-profil",
    slug: "app-simulation-profil",
    name: {
      fr: "App Simulation Profil",
      en: "App Simulation Profil",
    },
    status: "in_development",
    statusBadge: {
      fr: "EN DÉVELOPPEMENT",
      en: "IN DEVELOPMENT",
    },
    secondaryStatusBadge: {
      fr: "BIENTÔT DISPONIBLE",
      en: "COMING SOON",
    },
    isAvailable: false, // Set to true when officially launched to automatically unlock links
    href: (locale: string) => `/${locale}/solutions/app-simulation-profil`,
    tagline: {
      fr: "Évaluez votre profil en 5 minutes.",
      en: "Evaluate your profile in 5 minutes.",
    },
    shortDescription: {
      fr: "Produit logiciel propriétaire d'INTER-IT utilisant un moteur d'analyse basé sur l'IA pour obtenir un rapport d'éligibilité personnalisé (Canada, Europe, Afrique).",
      en: "Proprietary INTER-IT software product using an AI-powered analysis engine to generate a personalized eligibility report (Canada, Europe, Africa).",
    },
    fullDescription: {
      fr: "Grâce à notre moteur d'analyse basé sur l'intelligence artificielle, évaluez votre profil et obtenez un rapport d'éligibilité personnalisé pour le Canada, l'Europe et l'Afrique.",
      en: "Powered by our artificial intelligence analysis engine, evaluate your profile and receive a personalized eligibility report for Canada, Europe, and Africa.",
    },
    features: [
      {
        fr: "Analyse intelligente du profil de l'utilisateur",
        en: "Intelligent analysis of the user's profile",
      },
      {
        fr: "Évaluation selon des critères d'éligibilité pertinents",
        en: "Assessment based on relevant eligibility criteria",
      },
      {
        fr: "Analyse des possibilités pour le Canada",
        en: "Opportunity analysis for Canada",
      },
      {
        fr: "Analyse des possibilités pour l'Europe",
        en: "Opportunity analysis for Europe",
      },
      {
        fr: "Analyse des possibilités pour l'Afrique",
        en: "Opportunity analysis for Africa",
      },
      {
        fr: "Génération d'un rapport personnalisé d'évaluation",
        en: "Generation of a personalized assessment report",
      },
      {
        fr: "Présentation des points forts du profil",
        en: "Identification of profile strengths",
      },
      {
        fr: "Identification des éléments pouvant être améliorés",
        en: "Identification of areas for improvement",
      },
    ],
    regions: [
      { fr: "Canada", en: "Canada" },
      { fr: "Europe", en: "Europe" },
      { fr: "Afrique", en: "Africa" },
    ],
    disclaimer: {
      fr: "Le futur rapport généré par App Simulation Profil constituera une évaluation indicative d'orientation et non une décision officielle d'une autorité d'immigration ou d'un organisme compétent.",
      en: "The future report generated by App Simulation Profil will serve as an indicative orientation assessment and does not constitute an official decision by an immigration authority or competent regulatory body.",
    },
  },
];
