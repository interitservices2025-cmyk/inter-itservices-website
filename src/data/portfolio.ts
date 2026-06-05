import { Project } from "@/types";

export const portfolio: Project[] = [
  {
    id: "smartrag-enterprise",
    slug: "smartrag-enterprise",
    title: "SmartRAG Enterprise Knowledge Base",
    category: "ai",
    clientName: "Ontario Logistics Group",
    description: {
      en: "Developed a secure, LLM-powered Retrieval-Augmented Generation (RAG) system allowing employees to query 50,000+ internal supply chain documents instantly.",
      fr: "Développement d'un système RAG (Génération augmentée par récupération) sécurisé basé sur LLM permettant d'interroger instantanément plus de 50 000 documents internes de la chaîne logistique.",
    },
    challenges: {
      en: "The client needed to search across diverse, legacy formats (PDFs, Word docs, spreadsheets) with high accuracy, zero data leakage to external models, and strict role-based access control.",
      fr: "Le client devait effectuer des recherches dans des formats hétérogènes (PDF, Word, feuilles de calcul) avec une grande précision, sans fuite de données vers des modèles externes et avec un contrôle d'accès strict basé sur les rôles.",
    },
    solutions: {
      en: "We built a customized pipeline using LlamaIndex, PostgreSQL pgvector, and a locally hosted LLaMA-3 model. A custom Next.js dashboard serves as the user interface, incorporating role-based access control (RBAC).",
      fr: "Nous avons construit un pipeline personnalisé à l'aide de LlamaIndex, PostgreSQL pgvector et d'un modèle LLaMA-3 hébergé localement. Un tableau de bord Next.js fait office d'interface utilisateur, intégrant un contrôle d'accès basé sur les rôles (RBAC).",
    },
    technologies: ["Next.js", "Python", "LlamaIndex", "PostgreSQL", "Docker", "AWS EC2 G5"],
    imageUrl: "/images/portfolio/smartrag.png",
    completionDate: "2025-11",
  },
  {
    id: "fintrack-portal",
    slug: "fintrack-portal",
    title: "FinTrack Corporate Web Portal",
    category: "web",
    clientName: "Brampton Invest Corp",
    description: {
      en: "A high-performance customer portal allowing users to track real-time investments, download reports, and access advisory documents.",
      fr: "Un portail client performant permettant aux utilisateurs de suivre leurs investissements en temps réel, de télécharger des rapports et d'accéder à des conseils financiers.",
    },
    challenges: {
      en: "The legacy portal was slow, non-responsive, and failed accessibility audits, leading to high support ticket volumes.",
      fr: "L'ancien portail était lent, non adaptatif et échouait aux audits d'accessibilité, ce qui entraînait un volume important de tickets d'assistance.",
    },
    solutions: {
      en: "We re-engineered the portal from scratch using Next.js and Tailwind CSS. The new portal is mobile-first, meets WCAG 2.1 AA accessibility guidelines, and loads in under 1.2 seconds.",
      fr: "Nous avons entièrement repensé le portail avec Next.js et Tailwind CSS. Le nouveau portail est mobile-first, respecte les directives d'accessibilité WCAG 2.1 AA et se charge en moins de 1,2 seconde.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Auth0", "Recharts"],
    imageUrl: "/images/portfolio/fintrack.png",
    completionDate: "2025-08",
  },
  {
    id: "ontariocare-mobile",
    slug: "ontariocare-mobile",
    title: "OntarioCare Health Companion",
    category: "mobile",
    clientName: "OntarioCare Services",
    description: {
      en: "A bilingual React Native mobile application for patients to schedule medical visits, chat with care advisors, and store health vitals.",
      fr: "Une application mobile React Native bilingue permettant aux patients de planifier des rendez-vous médicaux, de discuter avec des conseillers et d'enregistrer leurs constantes.",
    },
    challenges: {
      en: "Delivering a highly secure, HIPAA-compliant patient communication flow that operates smoothly even under poor network conditions in remote northern communities.",
      fr: "Offrir un flux de communication hautement sécurisé conforme aux normes de santé, fonctionnant de manière fluide même dans des conditions de réseau dégradées dans les communautés éloignées.",
    },
    solutions: {
      en: "Built with React Native, utilizing SQLite for secure offline local storage and end-to-end encrypted WebSockets for secure real-time messaging.",
      fr: "Conçu avec React Native, utilisant SQLite pour le stockage local sécurisé hors ligne et des WebSockets chiffrés de bout en bout pour la messagerie sécurisée en temps réel.",
    },
    technologies: ["React Native", "Node.js", "WebSocket", "SQLite", "Firebase Cloud Messaging", "Tailwind CSS"],
    imageUrl: "/images/portfolio/ontariocare.png",
    completionDate: "2025-05",
  },
];
