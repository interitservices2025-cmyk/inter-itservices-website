import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: {
      en: "Web Development",
      fr: "Développement Web",
    },
    shortDescription: {
      en: "High-performance, modern, and SEO-optimized corporate websites to establish a strong online presence.",
      fr: "Création de sites internet professionnels, performants, réactifs et optimisés pour le référencement naturel.",
    },
    longDescription: {
      en: "We design and build modern corporate websites, portfolios, and landing pages using the latest technologies. Our websites are built to load instantly, rank high on search engines, and convert visitors into active leads.",
      fr: "Nous concevons et développons des sites web professionnels, des portfolios et des pages de destination modernes. Nos solutions sont optimisées pour être rapides, visibles sur Google, et structurées pour transformer vos visiteurs en prospects.",
    },
    iconName: "Globe",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "WordPress"],
    features: [
      { en: "Custom website development", fr: "Développement de sites sur mesure" },
      { en: "SEO optimization & performance", fr: "Optimisation SEO & performance" },
      { en: "Responsive, mobile-first layouts", fr: "Conception réactive et mobile-first" },
      { en: "Google Business optimization", fr: "Optimisation de fiche Google Business" },
    ],
    pillar: "digital",
  },
  {
    id: "automation-ai",
    slug: "automation-ai",
    title: {
      en: "Automation & AI Solutions",
      fr: "Automatisation & IA",
    },
    shortDescription: {
      en: "Integrate custom AI models and automated workflows to simplify operations and eliminate repetitive tasks.",
      fr: "Intégration d'outils d'IA générative et d'automatisation de tâches pour simplifier vos opérations quotidiennes.",
    },
    longDescription: {
      en: "Streamline your workflows by automating manual processes. We develop secure AI chatbots, customize CRM integrations, and set up administrative automation to help your team focus on high-value business objectives.",
      fr: "Optimisez vos flux de travail en éliminant les tâches manuelles. Nous concevons des chatbots IA personnalisés, configurons des intégrations de CRM et mettons en place des automatisations administratives pour libérer du temps à vos équipes.",
    },
    iconName: "Cpu",
    technologies: ["Python", "OpenAI API", "n8n", "Zapier", "LangChain", "Qdrant"],
    features: [
      { en: "Custom AI chatbot development", fr: "Développement d'assistants et chatbots IA" },
      { en: "Administrative & CRM automation", fr: "Automatisation administrative et CRM" },
      { en: "Sovereign AI integrations", fr: "Intégration de modèles d'IA sécurisés" },
      { en: "Automated report generation", fr: "Génération de rapports automatiques" },
    ],
    pillar: "digital",
  },
  {
    id: "business-applications",
    slug: "business-applications",
    title: {
      en: "Business Applications",
      fr: "Applications Métiers",
    },
    shortDescription: {
      en: "Bespoke software, secure client portals, and web applications tailored to your specific workflows.",
      fr: "Conception d'applications web, de portails clients et de logiciels sur mesure pour soutenir vos flux spécifiques.",
    },
    longDescription: {
      en: "Empower your team and engage your clients with custom software tools. From secure client portals to complex web interfaces, we build custom solutions designed to scale with your business operations.",
      fr: "Engagez vos clients et facilitez le travail de vos collaborateurs grâce à des outils sur mesure. Des portails clients sécurisés aux applications web interactives, nous concevons des outils dimensionnés pour votre activité.",
    },
    iconName: "Layout",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "Auth0"],
    features: [
      { en: "Secure client portals", fr: "Portails clients & espaces sécurisés" },
      { en: "Interactive dashboard creation", fr: "Tableaux de bord interactifs" },
      { en: "Custom API & system integrations", fr: "Intégration d'APIs et de systèmes tiers" },
      { en: "Database optimization & design", fr: "Création et gestion de bases de données" },
    ],
    pillar: "digital",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: {
      en: "Digital Marketing",
      fr: "Marketing Digital",
    },
    shortDescription: {
      en: "Data-driven organic search (SEO), local optimization, and lead generation campaigns to grow your business.",
      fr: "Stratégies d'acquisition, de référencement local (SEO) et de marketing de contenu adaptées à votre marché.",
    },
    longDescription: {
      en: "Reach your local audience effectively. We execute tailored search engine optimization, content strategy campaigns, and targeted digital acquisition to ensure your business attracts qualified client inquiries.",
      fr: "Ciblez efficacement vos clients locaux. Nous mettons en œuvre des campagnes d'optimisation pour les moteurs de recherche, du marketing de contenu, et de l'acquisition numérique pour attirer des contacts qualifiés.",
    },
    iconName: "Megaphone",
    technologies: ["Google Analytics 4", "Google Ads", "Local SEO", "Meta Ads", "Content Marketing"],
    features: [
      { en: "Search Engine Optimization (SEO)", fr: "Optimisation pour les moteurs de recherche (SEO)" },
      { en: "Local search and map optimization", fr: "Optimisation de fiches locales et cartes" },
      { en: "Content strategy & copywriting", fr: "Stratégie éditoriale et rédaction de contenu" },
      { en: "Targeted digital advertising", fr: "Publicités numériques ciblées" },
    ],
    pillar: "digital",
  },
  {
    id: "training",
    slug: "training",
    title: {
      en: "Professional Training",
      fr: "Formations Professionnelles",
    },
    shortDescription: {
      en: "Hands-on workshops and bootcamps to empower your team with AI tools, cybersecurity, and digital tools.",
      fr: "Ateliers et bootcamps pratiques pour rendre vos collaborateurs autonomes sur les nouveaux outils numériques.",
    },
    longDescription: {
      en: "We bridge the technology gap by training your staff. Our practical bootcamps cover AI adoption, digital marketing fundamentals, cybersecurity awareness, and modern digital productivity workflows.",
      fr: "Nous accompagnons le changement en formant votre personnel. Nos ateliers couvrent la prise en main de l'IA (ChatGPT, Midjourney), le marketing digital, la cybersécurité et la productivité numérique.",
    },
    iconName: "Sparkles",
    technologies: ["AI Productivity", "Cybersecurity Basics", "Prompt Engineering", "Digital Tools"],
    features: [
      { en: "AI productivity workshops", fr: "Ateliers d'initiation et de productivité avec l'IA" },
      { en: "Cybersecurity awareness training", fr: "Sensibilisation à la sécurité informatique" },
      { en: "Digital marketing fundamentals", fr: "Bases et outils du marketing en ligne" },
      { en: "Personalized corporate coaching", fr: "Accompagnement et coaching d'équipe" },
    ],
    pillar: "digital",
  },
];
