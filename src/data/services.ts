import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: {
      en: "Website Development",
      fr: "Développement de Sites Web",
    },
    shortDescription: {
      en: "High-performance, secure, and SEO-optimized corporate websites and web portals built on modern frameworks.",
      fr: "Des sites web d'entreprise et des portails web performants, sécurisés et optimisés pour le SEO à l'aide de frameworks modernes.",
    },
    longDescription: {
      en: "We design, build, and deploy premium, responsive corporate websites and web portals that grow your business. Utilizing modern frameworks like Next.js, we optimize for search engines, fast loading speeds, and accessibility compliance.",
      fr: "Nous concevons, construisons et déployons des sites web d'entreprise et des portails web réactifs, rapides à charger et de qualité premium. En utilisant des outils modernes comme Next.js, nous construisons des plateformes optimisées pour l'expérience utilisateur, l'accessibilité et la visibilité sur les moteurs de recherche.",
    },
    iconName: "Globe",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    features: [
      {
        en: "Responsive Mobile-First Layouts",
        fr: "Mises en page réactives orientées mobile-first",
      },
      {
        en: "Search Engine Optimization (SEO)",
        fr: "Optimisation pour les moteurs de recherche (SEO)",
      },
      {
        en: "Headless CMS Integration",
        fr: "Intégration de CMS Headless",
      },
      {
        en: "Interactive Client Portals",
        fr: "Portails clients interactifs",
      },
    ],
  },
  {
    id: "graphic-design-print",
    slug: "graphic-design-print",
    title: {
      en: "Graphic Design & Print",
      fr: "Design Graphique & Impression",
    },
    shortDescription: {
      en: "Creating impactful brand identities, logos, and high-quality print-ready marketing materials.",
      fr: "Création d'identités de marque percutantes, logos et supports marketing de haute qualité prêts pour l'impression.",
    },
    longDescription: {
      en: "Establish a professional visual identity across digital and physical mediums. From logo design and style guides to print-ready collateral such as brochures, business cards, and signage, we build cohesive brand trust.",
      fr: "Établissez une identité de marque forte et reconnaissable sur tous les supports numériques et physiques. De la conception du logo et des chartes graphiques aux supports commerciaux (brochures, cartes de visite, signalétique), nous traduisons vos valeurs en style visuel cohérent.",
    },
    iconName: "Printer",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Print Preflight", "Vector Art"],
    features: [
      {
        en: "Logo Design & Brand Identity",
        fr: "Conception de logo et identité de marque",
      },
      {
        en: "Brand Guidelines & Visual Assets",
        fr: "Guides de style et chartes graphiques",
      },
      {
        en: "Print-Ready Marketing Materials",
        fr: "Supports marketing prêts pour impression",
      },
      {
        en: "Vector Graphic Package",
        fr: "Packs de ressources vectorielles",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: {
      en: "Digital Marketing",
      fr: "Marketing Numérique",
    },
    shortDescription: {
      en: "Data-driven SEO, content marketing, and advertising campaigns designed to grow your online visibility.",
      fr: "Campagnes de référencement (SEO), marketing de contenu et stratégies publicitaires axées sur les données pour accroître votre présence en ligne.",
    },
    longDescription: {
      en: "Grow your online presence and attract high-intent leads. We execute multi-channel campaigns covering search engines (SEO/SEM), content strategy, and social media advertising, focused entirely on return on investment (ROI).",
      fr: "Développez votre présence en ligne et attirez des prospects qualifiés. Nous menons des campagnes multicanales couvrant les moteurs de recherche (SEO/SEM), la stratégie de contenu et la publicité sur les réseaux sociaux, entièrement axées sur le retour sur investissement (ROI).",
    },
    iconName: "Megaphone",
    technologies: ["Google Analytics", "Google Ads", "SEO Tools", "Meta Business", "Content Strategy"],
    features: [
      {
        en: "Keyword Research & Local SEO",
        fr: "Recherche de mots-clés et SEO local",
      },
      {
        en: "Pay-Per-Click (PPC) Management",
        fr: "Gestion du Pay-Per-Click (PPC)",
      },
      {
        en: "Conversion Rate Optimization (CRO)",
        fr: "Optimisation du taux de conversion (CRO)",
      },
      {
        en: "Monthly Performance Reports",
        fr: "Analyses mensuelles et rapports de performance",
      },
    ],
  },
  {
    id: "learning-workshops",
    slug: "learning-workshops",
    title: {
      en: "Learning Workshops",
      fr: "Ateliers de Formation",
    },
    shortDescription: {
      en: "Hands-on technical bootcamps and workshops led by senior industry experts to upskill your teams.",
      fr: "Montez en compétences grâce à nos ateliers pratiques et bootcamps technologiques animés par des experts seniors.",
    },
    longDescription: {
      en: "Elevate your team's technical skills with our practical corporate workshops. Led by senior industry experts, we provide interactive programs covering AI integration, Next.js development, and modern cloud architectures.",
      fr: "Montez en compétences grâce à nos ateliers pratiques animés par des professionnels du secteur. Nous proposons des programmes d'apprentissage interactifs pour intégrer l'IA, maîtriser le développement web moderne et concevoir des infrastructures cloud évolutives.",
    },
    iconName: "BookOpen",
    technologies: ["Interactive Bootcamps", "Hands-on Labs", "Tailored Curriculum", "Expert Instructors"],
    features: [
      {
        en: "Custom Corporate Workshops",
        fr: "Ateliers d'entreprise sur mesure",
      },
      {
        en: "AI Integration for Decision Makers",
        fr: "Intégration de l'IA pour décideurs",
      },
      {
        en: "Next.js & React Advanced Labs",
        fr: "Bootcamps Next.js et React avancés",
      },
      {
        en: "Lifetime Lab Access & Certificates",
        fr: "Accès aux TPs à vie et certifications",
      },
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: {
      en: "AI Solutions",
      fr: "Solutions d'Intelligence Artificielle",
    },
    shortDescription: {
      en: "Custom LLM integration, secure chatbot development, and AI-driven automation workflows.",
      fr: "Intégrez des modèles de langage souverains (LLM), des chatbots personnalisés et des flux d'automatisation IA sécurisés.",
    },
    longDescription: {
      en: "Automate processes and leverage artificial intelligence safely. We build proprietary Retrieval-Augmented Generation (RAG) pipelines, custom AI agents, and predictive machine learning models while ensuring absolute data sovereignty.",
      fr: "Automatisez vos tâches critiques et exploitez le potentiel de l'intelligence artificielle en toute sécurité. Nous concevons des pipelines RAG propriétaires, des agents conversationnels intelligents et des modèles prédictifs tout en garantissant la souveraineté complète de vos données.",
    },
    iconName: "BrainCircuit",
    technologies: ["Python", "LlamaIndex", "LangChain", "Vector Databases", "Local LLMs", "AWS/Docker"],
    features: [
      {
        en: "Custom LLM & Chatbot Deployments",
        fr: "Déploiement de LLM et Chatbots sur mesure",
      },
      {
        en: "Secure RAG Enterprise Pipelines",
        fr: "Pipelines RAG d'entreprise sécurisés",
      },
      {
        en: "Intelligent Workflow Automation",
        fr: "Automatisation intelligente des processus",
      },
      {
        en: "Predictive Analytics & ML Models",
        fr: "Analyses prédictives et modèles ML",
      },
    ],
  },
];
