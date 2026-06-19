import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "formation-ia",
    slug: "formation-ia",
    title: {
      en: "AI & Automation for Business Productivity",
      fr: "IA & Automatisation pour la Productivité",
    },
    description: {
      en: "Learn to integrate generative AI tools like ChatGPT and Midjourney, and build automated workflows to save hours on repetitive operations.",
      fr: "Apprenez à intégrer l'IA générative comme ChatGPT et Midjourney, et à concevoir des automatisations pour libérer du temps au quotidien.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    price: "$799 CAD",
    topics: [
      { en: "Prompt engineering foundations (ChatGPT, Claude)", fr: "Bases de l'ingénierie des requêtes (ChatGPT, Claude)" },
      { en: "Generative images & commercial visual assets (Midjourney)", fr: "Création de visuels et supports publicitaires (Midjourney)" },
      { en: "Task automation & workflow integration (Zapier, Make)", fr: "Automatisation de tâches et connexion d'outils (Zapier, Make)" },
      { en: "Establishing an enterprise AI adoption roadmap", fr: "Mise en place d'une feuille de route d'adoption de l'IA" },
    ],
    targetAudience: {
      en: "SME owners, managers, administrators, and professionals.",
      fr: "Dirigeants de PME, gestionnaires, adjoints administratifs et professionnels.",
    },
    skillsAcquired: [
      { en: "Automate administrative tasks", fr: "Automatiser des flux administratifs" },
      { en: "Design advanced custom prompts", fr: "Concevoir des invites complexes et structurées" },
      { en: "Configure low-code system integrations", fr: "Mettre en place des intégrations sans code" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "formation-marketing",
    slug: "formation-marketing",
    title: {
      en: "Digital Marketing & Local Client Acquisition",
      fr: "Marketing Numérique & Acquisition de Clientèle",
    },
    description: {
      en: "Learn to attract local clients, optimize your search engine visibility (SEO), and run high-performing advertising campaigns.",
      fr: "Attirez de nouveaux clients, optimisez votre visibilité locale (Google Business & SEO) et lancez des campagnes publicitaires rentables.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    price: "$699 CAD",
    topics: [
      { en: "Search Engine Optimization (SEO) & Google Business", fr: "Référencement naturel (SEO) et visibilité locale Google" },
      { en: "Social media strategies (Facebook, Instagram, LinkedIn)", fr: "Animation de réseaux sociaux et calendriers éditoriaux" },
      { en: "Digital advertising campaign setup (Meta & Google Ads)", fr: "Lancement de campagnes publicitaires (Meta et Google Ads)" },
      { en: "Performance tracking and newsletter automation", fr: "Mesure d'audience (GA4) et marketing par courriel" },
    ],
    targetAudience: {
      en: "Entrepreneurs, business owners, and marketing managers.",
      fr: "Entrepreneurs, propriétaires de PME et responsables marketing.",
    },
    skillsAcquired: [
      { en: "Build target customer acquisition pipelines", fr: "Bâtir des tunnels d'acquisition client ciblés" },
      { en: "Optimize ranking in Google Search maps", fr: "Optimiser le classement local sur Google Maps" },
      { en: "Measure return on advertising spend", fr: "Analyser et mesurer le retour sur investissement publicitaire" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "formation-cybersecurite",
    slug: "formation-cybersecurite",
    title: {
      en: "Cybersecurity & Data Protection for SMEs",
      fr: "Cybersécurité & Protection des Données",
    },
    description: {
      en: "Protect your organization against cyber threats, secure internal networks and client databases, and implement security policies.",
      fr: "Protégez votre entreprise contre les cybermenaces, sécurisez vos réseaux et terminaux, et appliquez les politiques de conformité.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Advanced",
      fr: "Débutant à Avancé",
    },
    price: "$899 CAD",
    topics: [
      { en: "Anatomy of modern threats (Phishing, Ransomware)", fr: "Anatomie des menaces modernes (Hameçonnage, Ransomware)" },
      { en: "Securing corporate networks, devices, and cloud databases", fr: "Sécurisation des accès cloud, réseaux et appareils mobiles" },
      { en: "Drafting an incident response and business continuity plan", fr: "Plan de continuité d'activité et gestion de crise" },
      { en: "Regulatory compliance and client data privacy standards", fr: "Conformité réglementaire et lois sur la vie privée (LPRPDE)" },
    ],
    targetAudience: {
      en: "IT staff, business managers, and operations leads.",
      fr: "Responsables techniques, chefs d'entreprise et managers.",
    },
    skillsAcquired: [
      { en: "Conduct basic internal security audits", fr: "Réaliser un diagnostic de sécurité interne" },
      { en: "Establish incident reporting protocols", fr: "Mettre en place des protocoles de sécurité préventifs" },
      { en: "Secure employee workstation environments", fr: "Sécuriser l'environnement de travail des collaborateurs" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "formation-productivite",
    slug: "formation-productivite",
    title: {
      en: "Digital Productivity & Collaborative Workspace",
      fr: "Productivité Numérique & Outils Collaboratifs",
    },
    description: {
      en: "Optimize internal collaboration, structure project tracking tools, and streamline daily customer follow-up databases.",
      fr: "Optimisez la collaboration interne de vos équipes, organisez la gestion de projet et centralisez le suivi client.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner",
      fr: "Débutant",
    },
    price: "$599 CAD",
    topics: [
      { en: "Collaborative suites (Google Workspace, Microsoft 365)", fr: "Maîtrise des suites collaboratives (Google Workspace / M365)" },
      { en: "Project tracking and task boards (Notion, Trello, Asana)", fr: "Suivi de projet et gestion de tâches (Notion, Trello, Asana)" },
      { en: "Introduction to CRM software for client interactions", fr: "Découverte des CRM pour le suivi de relation client" },
      { en: "Time management techniques and digital organization", fr: "Gestion du temps et organisation de fichiers partagés" },
    ],
    targetAudience: {
      en: "Administrative assistants, office managers, and team delegates.",
      fr: "Adjoints administratifs, coordonnateurs de projet et équipes de bureau.",
    },
    skillsAcquired: [
      { en: "Streamline team task allocation workflows", fr: "Fluidifier l'attribution et le suivi des tâches" },
      { en: "Structure centralized shared file databases", fr: "Organiser les espaces documentaires cloud" },
      { en: "Improve customer relationship logging efficiency", fr: "Optimiser la saisie des interactions clients" },
    ],
    trainingCategory: "storytelling-creation",
  },
];
