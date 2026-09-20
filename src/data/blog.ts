import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-odoo-1",
    slug: "quest-ce-que-odoo-pourquoi-adopter-pme",
    title: {
      en: "What is Odoo and Why Should Growing SMEs Adopt It?",
      fr: "Qu'est-ce qu'Odoo et pourquoi l'adopter pour votre PME ?",
    },
    excerpt: {
      en: "Discover how Odoo unifies CRM, invoicing, inventory, and sales into one modular, scalable ERP system tailored for SMEs.",
      fr: "Découvrez comment Odoo unifie CRM, facturation, stocks et ventes au sein d'un ERP modulaire et évolutif conçu pour les PME.",
    },
    content: {
      en: "For many growing businesses, managing operations across disconnected spreadsheets and separate apps leads to errors, delays, and wasted hours. Odoo provides a cohesive answer: an integrated ecosystem where every business app communicates seamlessly with the others. By implementing Odoo, SMEs gain complete operational visibility, automate redundant tasks, and build a sustainable foundation for scalable growth without excessive software licensing costs.",
      fr: "Pour de nombreuses entreprises en croissance, gérer son activité à travers des tableurs disparates et des logiciels isolés engendre erreurs, retards et pertes de temps. Odoo apporte une réponse unifiée : un écosystème intégré où chaque application métier communique instantanément avec les autres. En implémentant Odoo, les PME obtiennent une visibilité opérationnelle totale, automatisent leurs tâches redondantes et posent les bases d'un développement pérenne.",
    },
    publishedAt: "2026-06-15",
    author: "Consultant ERP, INTER-IT",
    imageUrl: "/images/blog/logistics.png",
    readTime: {
      en: "5 min read",
      fr: "5 min de lecture",
    },
    tags: ["Odoo", "ERP", "PME", "Gestion"],
  },
  {
    id: "blog-odoo-2",
    slug: "erp-vs-logiciels-separes-centralisation",
    title: {
      en: "ERP vs. Disconnected Tools: How to Centralize Business Management",
      fr: "ERP vs Logiciels séparés : Comment centraliser la gestion de son entreprise",
    },
    excerpt: {
      en: "Compare the total cost, operational friction, and collaboration gains between fragmented software and a centralized ERP like Odoo.",
      fr: "Comparez les coûts réels, les frictions opérationnelles et les gains de collaboration entre outils dispersés et ERP centralisé comme Odoo.",
    },
    content: {
      en: "Juggling multiple subscriptions for CRM, billing, inventory, and project tracking often costs more in lost productivity than companies realize. A centralized ERP eliminates duplicate data entry, reduces communication silos between sales and accounting teams, and offers executive dashboards updated in real time. We explore the structural advantages of migrating from fragmented software to a centralized Odoo architecture.",
      fr: "Jongler entre plusieurs abonnements pour le CRM, la facturation, la gestion des stocks et le suivi de projets coûte souvent bien plus cher en productivité perdue que les entreprises ne l'imaginent. Un ERP centralisé supprime les doubles saisies, élimine les silos entre départements commercial et comptable, et offre des indicateurs fiables en temps réel. Découvrez pourquoi centraliser votre gestion avec Odoo transforme la productivité de votre équipe.",
    },
    publishedAt: "2026-06-10",
    author: "Consultant Solutions, INTER-IT",
    imageUrl: "/images/blog/nextjs.png",
    readTime: {
      en: "6 min read",
      fr: "6 min de lecture",
    },
    tags: ["Odoo", "Automatisation", "ERP", "Productivité"],
  },
  {
    id: "blog-odoo-3",
    slug: "etapes-cles-reussir-implementation-odoo",
    title: {
      en: "Key Steps to a Successful Odoo Implementation for Your Business",
      fr: "Comment réussir son implémentation Odoo : Les étapes clés",
    },
    excerpt: {
      en: "From initial workflow mapping to team training and post-launch support, discover the proven methodology for a smooth Odoo rollout.",
      fr: "De la cartographie des processus à la formation des équipes et au support post-lancement, découvrez la méthode pour un déploiement Odoo réussi.",
    },
    content: {
      en: "Implementing an ERP is not merely a software installation; it is an operational modernization project. Success relies on clear requirement scoping, phased configuration, thorough data cleansing, and hands-on user training. At INTER-IT Services, our structured 8-step methodology ensures that your Odoo deployment aligns precisely with your operational realities while guaranteeing high user adoption.",
      fr: "L'implémentation d'un ERP n'est pas une simple installation logicielle : c'est un projet de modernisation des flux d'affaires. La clé du succès repose sur un cadrage précis des besoins, un paramétrage progressif, une migration rigoureuse des données et un accompagnement humain constant. Découvrez les 8 étapes incontournables appliquées par INTER-IT Services pour garantir la réussite de votre projet Odoo.",
    },
    publishedAt: "2026-06-05",
    author: "Architecte Projets, INTER-IT",
    imageUrl: "/images/blog/logistics.png",
    readTime: {
      en: "7 min read",
      fr: "7 min de lecture",
    },
    tags: ["Odoo", "Méthodologie", "Déploiement", "Formation"],
  },
  {
    id: "blog-tech-1",
    slug: "why-choose-nextjs-enterprise",
    title: {
      en: "Choosing Next.js for High-Performance Enterprise Web Platforms",
      fr: "Pourquoi Choisir Next.js pour Vos Applications Web d'Entreprise",
    },
    excerpt: {
      en: "An in-depth look at Next.js rendering strategies, performance indicators, and why it is the standard for modern web platforms.",
      fr: "Une analyse approfondie des stratégies de rendu de Next.js, des indicateurs de performance et de sécurité pour les plateformes web.",
    },
    content: {
      en: "Next.js offers a hybrid rendering model, combining Server-Side Rendering (SSR), Static Site Generation (SSG), and Client Components. For enterprises, this means lightning-fast page loading speeds, robust security (due to hidden backend APIs), and stellar out-of-the-box SEO. We review the latest App Router improvements and how we use them at INTER-IT to deliver premium user experiences.",
      fr: "Next.js propose un modèle de rendu hybride, combinant le rendu côté serveur (SSR), la génération de sites statiques (SSG) et les composants client. Pour les entreprises, cela se traduit par des vitesses de chargement de page ultra-rapides, une sécurité robuste (grâce à des API backend protégées) et un référencement (SEO) exceptionnel dès le départ. Nous passons en revue ses atouts pour concevoir des applications web durables.",
    },
    publishedAt: "2026-05-20",
    author: "Lead Web Developer, INTER-IT",
    imageUrl: "/images/blog/nextjs.png",
    readTime: {
      en: "4 min read",
      fr: "4 min de lecture",
    },
    tags: ["Web Dev", "Next.js", "React"],
  },
];
