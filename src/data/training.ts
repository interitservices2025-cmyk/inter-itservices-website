import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "ai-integration",
    slug: "ai-integration-for-managers",
    title: {
      en: "AI Integration & Automation for Decision Makers",
      fr: "Intégration de l'IA & Automatisation pour Décideurs",
    },
    description: {
      en: "A comprehensive workshop on identifying automation opportunities, evaluating ROI, and integrating LLMs securely into workflows.",
      fr: "Un atelier complet pour identifier les opportunités d'automatisation, évaluer le ROI et intégrer des LLM de manière sécurisée dans vos processus.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    topics: [
      {
        en: "Overview of Modern AI: LLMs, RAG, and Agents",
        fr: "Aperçu de l'IA moderne : LLM, RAG et Agents",
      },
      {
        en: "Identifying Bottlenecks & High-ROI Workflows",
        fr: "Identifier les goulets d'étranglement et les processus à fort ROI",
      },
      {
        en: "Data Security, Privacy, and Compliance in Canada",
        fr: "Sécurité des données, vie privée et conformité au Canada",
      },
      {
        en: "Roadmapping a Custom AI Project",
        fr: "Élaborer la feuille de route d'un projet IA sur mesure",
      },
    ],
    price: "$1,299 CAD",
    targetAudience: {
      en: "Business owners, executives, IT managers, and project coordinators looking to securely implement automation and AI.",
      fr: "Propriétaires d'entreprises, cadres de direction, responsables IT et coordinateurs de projet cherchant à intégrer sereinement l'IA.",
    },
    skillsAcquired: [
      { en: "Evaluate AI project ROI", fr: "Évaluer le ROI d'un projet IA" },
      { en: "Draft AI compliance guidelines", fr: "Rédiger des chartes de conformité IA" },
      { en: "Identify automatable processes", fr: "Identifier les processus automatisables" },
    ],
  },
  {
    id: "nextjs-typescript",
    slug: "nextjs-typescript-bootcamp",
    title: {
      en: "Next.js & TypeScript Advanced Development Bootcamp",
      fr: "Bootcamp Développement Avancé Next.js & TypeScript",
    },
    description: {
      en: "A hands-on, code-first training on Next.js App Router, Server Components, advanced TypeScript types, and high-performance rendering.",
      fr: "Une formation pratique axée sur le code couvrant l'App Router Next.js, les Server Components, les types TypeScript avancés et les performances de rendu.",
    },
    duration: {
      en: "5 Days (30 Hours)",
      fr: "5 Jours (30 Heures)",
    },
    level: {
      en: "Advanced",
      fr: "Avancé",
    },
    topics: [
      {
        en: "Next.js App Router Architecture & Hydration",
        fr: "Architecture Next.js App Router & Hydratation",
      },
      {
        en: "React Server Components vs. Client Components",
        fr: "React Server Components vs. Client Components",
      },
      {
        en: "Advanced TypeScript: Generics, Utility Types, and Type Guards",
        fr: "TypeScript avancé : Génériques, Utility Types et Type Guards",
      },
      {
        en: "State Management and Performance Optimization",
        fr: "Gestion d'état et optimisation des performances",
      },
    ],
    price: "$2,499 CAD",
    targetAudience: {
      en: "Mid-level web developers, software engineers, and technical leads aiming to master modern React architectures.",
      fr: "Développeurs web intermédiaires, ingénieurs logiciels et leaders techniques souhaitant maîtriser les architectures React modernes.",
    },
    skillsAcquired: [
      { en: "Build App Router applications", fr: "Créer des applications App Router Next.js" },
      { en: "Master React Server Components", fr: "Maîtriser les Server Components React" },
      { en: "Implement strict type checking", fr: "Implémenter un typage strict et robuste" },
    ],
  },
];
