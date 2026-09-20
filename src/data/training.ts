import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "formation-odoo",
    slug: "formation-odoo",
    title: {
      en: "Odoo ERP: Practical Mastery for Business Teams",
      fr: "Odoo ERP : Prise en Main & Maîtrise Opérationnelle",
    },
    description: {
      en: "Hands-on training to master Odoo modules: CRM, sales, invoicing, inventory, and project tracking to boost day-to-day productivity.",
      fr: "Formation pratique pour maîtriser les modules clés d'Odoo : CRM, ventes, facturation, stocks et gestion de projet au quotidien.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    format: {
      en: "In-person, Remote, or Hybrid",
      fr: "Présentiel, Distanciel ou Hybride",
    },
    topics: [
      { en: "Odoo architecture and interface navigation", fr: "Architecture générale et prise en main de l'interface Odoo" },
      { en: "CRM & Sales pipeline: from lead to validated quote", fr: "CRM & Ventes : du prospect au devis signé et facturé" },
      { en: "Inventory management and stock movements", fr: "Gestion des stocks, articles et mouvements d'inventaire" },
      { en: "Invoicing workflows and customer payment follow-up", fr: "Facturation, relances clients et suivi des règlements" },
      { en: "Custom dashboards and operational reporting", fr: "Création de tableaux de bord et rapports d'activité" },
    ],
    targetAudience: {
      en: "SMEs, professionals, administrative teams, francophone associations, and organizations looking to strengthen their operational digital skills.",
      fr: "PME, professionnels, équipes administratives, associations francophones, centres d'emploi et organisations souhaitant renforcer les compétences numériques de leurs équipes.",
    },
    skillsAcquired: [
      { en: "Navigate and use Odoo comfortably", fr: "Naviguer et exploiter Odoo en toute autonomie" },
      { en: "Manage sales cycles and invoicing end-to-end", fr: "Gérer le cycle complet vente-facturation" },
      { en: "Monitor stock and operational performance", fr: "Suivre les stocks et indicateurs d'activité" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "formation-ia",
    slug: "formation-ia",
    title: {
      en: "AI & Automation for Business Productivity",
      fr: "IA & Automatisation pour la Productivité",
    },
    description: {
      en: "Learn to integrate generative AI tools and build automated workflows to save hours on repetitive daily operations.",
      fr: "Apprenez à intégrer l'IA générative et à concevoir des flux automatisés pour éliminer les tâches répétitives au quotidien.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    format: {
      en: "In-person, Remote, or Hybrid",
      fr: "Présentiel, Distanciel ou Hybride",
    },
    topics: [
      { en: "Prompt engineering foundations for business tasks", fr: "Fondamentaux de l'ingénierie des invites (prompts) professionnels" },
      { en: "Automating document drafting and summarization", fr: "Rédaction assistée, synthèses et traitement documentaire" },
      { en: "Workflow automation with no-code tools (Zapier, Make)", fr: "Automatisation de flux avec les outils no-code (Zapier, Make)" },
      { en: "Data privacy and security guidelines for AI use", fr: "Bonnes pratiques de sécurité et de confidentialité des données" },
    ],
    targetAudience: {
      en: "Professionals, schools, employment centers, francophone organizations, and corporate teams eager to boost efficiency.",
      fr: "Professionnels, écoles, centres d'emploi, associations francophones et organisations souhaitant optimiser leur productivité quotidienne.",
    },
    skillsAcquired: [
      { en: "Automate routine administrative workflows", fr: "Automatiser les tâches administratives courantes" },
      { en: "Write precise, structured business prompts", fr: "Structurer des invites IA pour des résultats fiables" },
      { en: "Deploy simple no-code business connections", fr: "Connecter des applications d'entreprise sans coder" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "formation-marketing",
    slug: "formation-marketing",
    title: {
      en: "Digital Marketing & Online Client Acquisition",
      fr: "Marketing Numérique & Acquisition de Clientèle",
    },
    description: {
      en: "Learn to attract qualified inquiries, optimize search engine visibility (SEO), and run high-performing digital campaigns.",
      fr: "Attirez des prospects qualifiés, optimisez votre référencement naturel (SEO) et déployez des campagnes numériques ciblées.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    format: {
      en: "In-person, Remote, or Hybrid",
      fr: "Présentiel, Distanciel ou Hybride",
    },
    topics: [
      { en: "Search Engine Optimization (SEO) fundamentals", fr: "Principes fondamentaux du référencement naturel (SEO)" },
      { en: "Content strategy and editorial calendar planning", fr: "Stratégie éditoriale et planification de contenus" },
      { en: "Targeted digital advertising & lead generation", fr: "Campagnes d'acquisition en ligne et génération de leads" },
      { en: "Analytics setup and ROI performance tracking", fr: "Mesure de performance et analyse du retour sur investissement" },
    ],
    targetAudience: {
      en: "Entrepreneurs, marketing managers, community organizations, and job training centers seeking digital acquisition skills.",
      fr: "Entrepreneurs, responsables marketing, organismes communautaires, centres d'emploi et professionnels en transition.",
    },
    skillsAcquired: [
      { en: "Build targeted customer acquisition funnels", fr: "Construire un tunnel d'acquisition de prospects" },
      { en: "Improve organic visibility on Google", fr: "Améliorer le positionnement sur les moteurs de recherche" },
      { en: "Measure return on marketing initiatives", fr: "Mesurer et optimiser les retombées de ses actions" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "formation-cybersecurite",
    slug: "formation-cybersecurite",
    title: {
      en: "Cybersecurity & Data Protection for Organizations",
      fr: "Cybersécurité & Protection des Données pour PME",
    },
    description: {
      en: "Protect your organization against cyber threats, secure internal networks, and implement practical data privacy policies.",
      fr: "Protégez votre organisation contre les cybermenaces, sécurisez vos postes de travail et appliquez les bonnes pratiques de conformité.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Advanced",
      fr: "Débutant à Avancé",
    },
    format: {
      en: "In-person, Remote, or Hybrid",
      fr: "Présentiel, Distanciel ou Hybride",
    },
    topics: [
      { en: "Anatomy of modern cyber threats (Phishing, Ransomware)", fr: "Comprendre les menaces actuelles (Hameçonnage, Rançongiciels)" },
      { en: "Securing devices, passwords, and cloud accounts", fr: "Sécurisation des terminaux, mots de passe et accès cloud" },
      { en: "Incident response protocols and backup hygiene", fr: "Politiques de sauvegarde et réflexes en cas d'incident" },
      { en: "Privacy laws and confidential data management", fr: "Réglementations sur la vie privée et données sensibles" },
    ],
    targetAudience: {
      en: "Operations leads, administrative staff, IT coordinators, schools, and francophone community organizations.",
      fr: "Gestionnaires d'opérations, équipes administratives, coordinateurs informatiques, écoles et associations.",
    },
    skillsAcquired: [
      { en: "Identify and prevent common cyber attack vectors", fr: "Détecter et déjouer les tentatives d'intrusion" },
      { en: "Apply robust workstation and cloud security standards", fr: "Appliquer des règles d'accès et d'authentification solides" },
      { en: "Establish an actionable internal security checklist", fr: "Mettre en place une procédure de sécurité interne" },
    ],
    trainingCategory: "ai-communication",
  },
];
