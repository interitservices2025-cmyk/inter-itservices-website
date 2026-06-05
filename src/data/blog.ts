import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "ai-automation-logistics-supply-chain",
    title: {
      en: "The Future of AI Automation in Supply Chain Logistics",
      fr: "L'Avenir de l'Automatisation par l'IA dans la Logistique Logique",
    },
    excerpt: {
      en: "How intelligent software agents and LLMs are transforming document routing, inventory tracking, and warehouse workflows.",
      fr: "Comment les agents logiciels intelligents et les LLM transforment le routage des documents, le suivi des stocks et les flux de travail en entrepôt.",
    },
    content: {
      en: "AI and machine learning are no longer future concepts in logistics — they are actively reshaping how supply chains operate. By automating key data extraction from bills of lading using secure LLM pipelines, companies reduce processing time from hours to seconds. In this article, we explore the integration steps, cost reductions, and data sovereignty compliance guidelines for Canadian logistics leaders.",
      fr: "L'IA et le machine learning ne sont plus des concepts futuristes dans la logistique — ils redéfinissent activement le fonctionnement des chaînes d'approvisionnement. En automatisant l'extraction de données clés à l'aide de pipelines LLM sécurisés, les entreprises réduisent le temps de traitement de quelques heures à quelques secondes. Dans cet article, nous explorons les étapes d'intégration, les réductions de coûts et les directives de conformité pour les leaders de la logistique au Canada.",
    },
    publishedAt: "2026-05-15",
    author: "Lead AI Architect, INTER-IT",
    imageUrl: "/images/blog/logistics.jpg",
    readTime: {
      en: "5 min read",
      fr: "5 min de lecture",
    },
    tags: ["AI", "Automation", "Logistics"],
  },
  {
    id: "blog-2",
    slug: "why-choose-nextjs-enterprise",
    title: {
      en: "Choosing Next.js for Enterprise Web Applications",
      fr: "Pourquoi Choisir Next.js pour Vos Applications Web d'Entreprise",
    },
    excerpt: {
      en: "An in-depth look at Next.js rendering strategies, performance indicators, and why it is the standard for modern web platforms.",
      fr: "Une analyse approfondie des stratégies de rendu de Next.js, des indicateurs de performance et des raisons pour lesquelles il s'agit de la norme pour les plateformes web modernes.",
    },
    content: {
      en: "Next.js offers a hybrid rendering model, combining Server-Side Rendering (SSR), Static Site Generation (SSG), and Client Components. For enterprises, this means lightning-fast page loading speeds, robust security (due to hidden backend APIs), and stellar out-of-the-box SEO. We review the latest App Router improvements and how we use them at INTER-IT to deliver premium user experiences.",
      fr: "Next.js propose un modèle de rendu hybride, combinant le rendu côté serveur (SSR), la génération de sites statiques (SSG) et les composants client. Pour les entreprises, cela se traduit par des vitesses de chargement de page ultra-rapides, une sécurité robuste (grâce à des API backend cachées) et un référencement (SEO) exceptionnel dès le départ. Nous passons en revue les dernières améliorations de l'App Router et comment nous les utilisons chez INTER-IT pour offrir des expériences de qualité premium.",
    },
    publishedAt: "2026-05-01",
    author: "Lead Web Developer, INTER-IT",
    imageUrl: "/images/blog/nextjs.jpg",
    readTime: {
      en: "4 min read",
      fr: "4 min de lecture",
    },
    tags: ["Web Dev", "Next.js", "React"],
  },
];
