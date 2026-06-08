import { Course } from "@/types";

export const courses: Course[] = [
  // CATEGORY 1 – AI & COMMUNICATION
  {
    id: "ai-applied-strategy",
    slug: "ai-applied-strategy",
    title: {
      en: "AI Applied to Business Strategy",
      fr: "L'IA Appliquée à la Stratégie d'Entreprise",
    },
    description: {
      en: "A strategic workshop helping executives identify high-ROI AI use cases, map technological capabilities, and build adoption roadmaps.",
      fr: "Un atelier stratégique pour aider les cadres à identifier les cas d'usage IA à fort ROI, cartographier les capacités et planifier l'adoption.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Executive",
      fr: "Exécutif",
    },
    topics: [
      { en: "AI Market Trends & Business Models", fr: "Tendances du marché de l'IA & modèles d'affaires" },
      { en: "Evaluating ROI of AI Integrations", fr: "Évaluation du ROI des intégrations d'IA" },
      { en: "Sovereign AI vs Third-Party APIs", fr: "IA souveraine vs APIs tierces" },
    ],
    price: "$1,499 CAD",
    targetAudience: {
      en: "CEOs, Directors, Business owners, and IT decision-makers.",
      fr: "PDG, directeurs, propriétaires d'entreprises et décideurs IT.",
    },
    skillsAcquired: [
      { en: "Assess AI project feasibility", fr: "Évaluer la faisabilité d'un projet IA" },
      { en: "Design a strategic AI roadmap", fr: "Concevoir une feuille de route IA stratégique" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "creative-prompt-engineering",
    slug: "creative-prompt-engineering",
    title: {
      en: "Creative Prompt Engineering",
      fr: "Prompt Engineering Créatif",
    },
    description: {
      en: "Learn to communicate effectively with large language and diffusion models to generate highly relevant texts, codes, and digital assets.",
      fr: "Apprenez à communiquer avec les modèles de langage et de diffusion pour générer des textes, codes et visuels précis.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    topics: [
      { en: "Foundations of Prompting (Few-shot, Chain-of-thought)", fr: "Bases du Prompting (Few-shot, Chain-of-thought)" },
      { en: "Advanced Text Generation Techniques", fr: "Techniques avancées de génération de texte" },
      { en: "Image Prompting Architectures", fr: "Architectures de prompt pour les images" },
    ],
    price: "$599 CAD",
    targetAudience: {
      en: "Content creators, marketers, copywriters, and developers.",
      fr: "Créateurs de contenu, marketeurs, rédacteurs et développeurs.",
    },
    skillsAcquired: [
      { en: "Structure complex prompts for LLMs", fr: "Structurer des prompts complexes pour LLMs" },
      { en: "Automate task instructions with AI", fr: "Automatiser des instructions de tâches avec l'IA" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "chatgpt-training",
    slug: "chatgpt-training",
    title: {
      en: "ChatGPT Training for Enterprise Productivity",
      fr: "Formation ChatGPT pour la Productivité",
    },
    description: {
      en: "Maximize team performance by integrating ChatGPT into daily business operations, report drafting, and email automation.",
      fr: "Maximisez la performance de vos équipes en intégrant ChatGPT dans la rédaction de rapports, d'e-mails et l'analyse de données.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner",
      fr: "Débutant",
    },
    topics: [
      { en: "ChatGPT Interface & Custom Instructions", fr: "Interface ChatGPT & instructions personnalisées" },
      { en: "Drafting Emails & Editing Business Reports", fr: "Rédaction d'e-mails & correction de rapports" },
      { en: "Data Analysis and File Upload Workflows", fr: "Analyses de données & flux de chargement de fichiers" },
    ],
    price: "$499 CAD",
    targetAudience: {
      en: "Administrative staff, sales teams, and corporate managers.",
      fr: "Personnel administratif, équipes commerciales et managers.",
    },
    skillsAcquired: [
      { en: "Save hours weekly on drafting tasks", fr: "Gagner des heures chaque semaine sur les tâches de rédaction" },
      { en: "Analyze CSV datasets instantly", fr: "Analyser des jeux de données CSV instantanément" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "midjourney-training",
    slug: "midjourney-training",
    title: {
      en: "Midjourney Training: AI Asset Generation",
      fr: "Formation Midjourney : Actifs Visuels par l'IA",
    },
    description: {
      en: "Master Midjourney and visual AI generators to create premium commercial layouts, marketing imagery, and graphic assets.",
      fr: "Maîtrisez Midjourney et les générateurs d'images pour concevoir des illustrations commerciales, maquettes et ressources graphiques.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "Midjourney Parameters (Aspect ratios, Stylize, Niji)", fr: "Paramètres Midjourney (Aspect ratios, Stylize, Niji)" },
      { en: "Image-to-Image & Character Consistency", fr: "Image-to-Image & cohérence des personnages" },
      { en: "Upscaling and Vectorizing Visual Assets", fr: "Agrandissement & vectorisation d'actifs visuels" },
    ],
    price: "$699 CAD",
    targetAudience: {
      en: "Graphic designers, illustrators, and creative directors.",
      fr: "Designers graphiques, illustrateurs et directeurs artistiques.",
    },
    skillsAcquired: [
      { en: "Generate production-quality visual assets", fr: "Générer des visuels prêts pour la production" },
      { en: "Speed up brand conceptualization workflows", fr: "Accélérer la conceptualisation de marque" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "predictive-analytics",
    slug: "predictive-analytics-training",
    title: {
      en: "Predictive Analytics & Machine Learning Basics",
      fr: "Analyses Prédictives & Initiation au ML",
    },
    description: {
      en: "A code-light bootcamp introducing python, model training, demand forecasting, and data-driven prediction.",
      fr: "Un bootcamp d'initiation au machine learning pour comprendre la prévision de la demande et les prédictions par les données.",
    },
    duration: {
      en: "3 Days (18 Hours)",
      fr: "3 Jours (18 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "Python Basics & Jupyter Notebooks", fr: "Bases de Python & Jupyter Notebooks" },
      { en: "Regression, Classification, and ML Algorithms", fr: "Régression, classification et algorithmes ML" },
      { en: "Evaluating Prediction Accuracy", fr: "Évaluation de la précision des prédictions" },
    ],
    price: "$1,899 CAD",
    targetAudience: {
      en: "Data analysts, software developers, and business strategists.",
      fr: "Analystes de données, développeurs logiciels et stratèges d'affaires.",
    },
    skillsAcquired: [
      { en: "Train simple predictive ML models", fr: "Entraîner des modèles prédictifs ML simples" },
      { en: "Interpret analytics results for business", fr: "Interpréter les résultats d'analyses pour l'entreprise" },
    ],
    trainingCategory: "ai-communication",
  },
  {
    id: "ai-ethics-governance",
    slug: "ai-ethics-governance",
    title: {
      en: "AI Ethics, Bias & Governance",
      fr: "Éthique, Biais & Gouvernance de l'IA",
    },
    description: {
      en: "Address the legal, privacy, and ethical compliance requirements for deploying AI models in Canadian organizations.",
      fr: "Comprenez les exigences légales, éthiques et de confidentialité pour déployer l'IA dans les organisations canadiennes.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner to Advanced",
      fr: "Débutant à Avancé",
    },
    topics: [
      { en: "Data Privacy & Intellectual Property in AI", fr: "Confidentialité des données & propriété intellectuelle en IA" },
      { en: "Detecting & Mitigating Algorithm Bias", fr: "Détecter et atténuer les biais algorithmiques" },
      { en: "Building an Enterprise AI Policy", fr: "Construire une politique d'utilisation de l'IA en entreprise" },
    ],
    price: "$699 CAD",
    targetAudience: {
      en: "Compliance officers, HR managers, legal advisors, and executives.",
      fr: "Responsables conformité, managers RH, conseillers juridiques et dirigeants.",
    },
    skillsAcquired: [
      { en: "Draft an enterprise AI code of conduct", fr: "Rédiger une charte d'utilisation de l'IA en entreprise" },
      { en: "Evaluate risk metrics of third-party tools", fr: "Évaluer les risques des outils tiers" },
    ],
    trainingCategory: "ai-communication",
  },

  // CATEGORY 2 – DIGITAL MARKETING
  {
    id: "social-media-strategy",
    slug: "social-media-strategy",
    title: {
      en: "Social Media Strategy & Local Engagement",
      fr: "Stratégie de Réseaux Sociaux & Engagement Local",
    },
    description: {
      en: "Build a highly engaged local community on Meta, LinkedIn, and Instagram to accelerate small business customer acquisition.",
      fr: "Bâtissez une communauté engagée sur Meta, LinkedIn et Instagram pour accélérer l'acquisition clients locale.",
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
      { en: "Content Calendar & Post Planning", fr: "Calendrier de contenu & planification de publications" },
      { en: "Local Community Management & Organic Growth", fr: "Gestion de communauté locale & croissance organique" },
      { en: "Analyzing Social Metrics", fr: "Analyse des métriques sociales" },
    ],
    price: "$899 CAD",
    targetAudience: {
      en: "Marketing coordinators, small business owners, and startup founders.",
      fr: "Coordinateurs marketing, propriétaires de PME et fondateurs de startups.",
    },
    skillsAcquired: [
      { en: "Create a 3-month content calendar", fr: "Créer un calendrier éditorial de 3 mois" },
      { en: "Execute local engagement campaigns", fr: "Mener des campagnes d'engagement local" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "seo-content-marketing",
    slug: "seo-content-marketing",
    title: {
      en: "SEO & Strategic Content Marketing",
      fr: "SEO & Marketing de Contenu Stratégique",
    },
    description: {
      en: "Master keyword targeting, on-page optimization, and content structuring to rank highly in Canada search engines.",
      fr: "Maîtrisez le ciblage de mots-clés, l'optimisation on-page et le contenu pour être visible dans Google Canada.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "Keyword Research & User Search Intent", fr: "Recherche de mots-clés & intention de recherche" },
      { en: "On-Page SEO Optimization Techniques", fr: "Techniques d'optimisation SEO On-Page" },
      { en: "Content Strategy & Copywriting", fr: "Stratégie de contenu & rédaction web" },
    ],
    price: "$999 CAD",
    targetAudience: {
      en: "Copywriters, digital marketers, and web developers.",
      fr: "Rédacteurs, marketeurs digitaux et développeurs web.",
    },
    skillsAcquired: [
      { en: "Optimize pages for search engine ranking", fr: "Optimiser les pages pour le référencement naturel" },
      { en: "Perform complete SEO technical audits", fr: "Réaliser un audit technique SEO complet" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "google-analytics-4",
    slug: "google-analytics-4",
    title: {
      en: "Google Analytics 4 & Performance Tracking",
      fr: "Google Analytics 4 & Suivi des Performances",
    },
    description: {
      en: "Learn to configure custom tracking, analyze user behavior, and monitor online store conversion rates with GA4.",
      fr: "Apprenez à configurer des suivis personnalisés, analyser le comportement utilisateur et mesurer les conversions avec GA4.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "GA4 Installation & Event Setup", fr: "Installation de GA4 & configuration d'événements" },
      { en: "Funnel Analysis & E-commerce Tracking", fr: "Analyse d'entonnoirs & suivi e-commerce" },
      { en: "Building Custom Reports & Dashboards", fr: "Création de rapports & tableaux de bord personnalisés" },
    ],
    price: "$599 CAD",
    targetAudience: {
      en: "Business analysts, marketing directors, and web developers.",
      fr: "Analystes d'affaires, directeurs marketing et développeurs web.",
    },
    skillsAcquired: [
      { en: "Analyze website conversion drop-off", fr: "Analyser les pertes de conversion sur un site" },
      { en: "Implement complete event tracking systems", fr: "Implémenter un suivi d'événements complet" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "email-marketing-automation",
    slug: "email-marketing-automation",
    title: {
      en: "Email Marketing & Marketing Automation",
      fr: "Email Marketing & Automatisation Marketing",
    },
    description: {
      en: "Design automated customer nurturing campaigns, manage corporate newsletter list growth, and drive repeat sales.",
      fr: "Concevez des campagnes d'automatisation marketing par e-mail, gérez des listes d'abonnés et générez des ventes récurrentes.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    topics: [
      { en: "Lead Magnet Creation & Opt-in Design", fr: "Création de Lead Magnets & formulaires d'inscription" },
      { en: "Nurturing Automations & Cart Abandonment flows", fr: "Automatisation de séquences & relances de paniers" },
      { en: "Deliverability and Email Design Best Practices", fr: "Délivrabilité et bonnes pratiques de design d'emails" },
    ],
    price: "$499 CAD",
    targetAudience: {
      en: "E-commerce managers, marketing staff, and service providers.",
      fr: "Responsables e-commerce, chargés marketing et prestataires de services.",
    },
    skillsAcquired: [
      { en: "Set up automated sales pipelines by email", fr: "Configurer des tunnels de vente par e-mail" },
      { en: "Maintain clean high-deliverability lists", fr: "Maintenir des listes d'e-mails à haute délivrabilité" },
    ],
    trainingCategory: "digital-marketing",
  },
  {
    id: "digital-advertising",
    slug: "digital-advertising",
    title: {
      en: "Digital Advertising (Meta & Google Ads)",
      fr: "Publicité Numérique (Meta & Google Ads)",
    },
    description: {
      en: "A practical bootcamp to master pay-per-click (PPC) campaigns, audience targeting, and budgeting on Facebook, Instagram, and Google.",
      fr: "Un bootcamp pratique pour maîtriser les campagnes PPC, le ciblage d'audience et l'optimisation des budgets Meta & Google Ads.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "Google Search Ads & Keyword Match Types", fr: "Annonces Google Search & types de correspondance" },
      { en: "Meta Ads Manager & Visual Asset Testing", fr: "Meta Ads Manager & tests de visuels publicitaires" },
      { en: "Budget Allocation & ROI Optimization", fr: "Optimisation de l'allocation budgétaire & ROI" },
    ],
    price: "$999 CAD",
    targetAudience: {
      en: "Startup founders, media buyers, and marketing executives.",
      fr: "Fondateurs de startups, acheteurs média et responsables marketing.",
    },
    skillsAcquired: [
      { en: "Build and deploy ad campaigns from scratch", fr: "Créer et lancer des campagnes publicitaires de A à Z" },
      { en: "Analyze and reduce customer acquisition costs (CAC)", fr: "Analyser et réduire le coût d'acquisition client (CAC)" },
    ],
    trainingCategory: "digital-marketing",
  },

  // CATEGORY 3 – STORYTELLING & CREATION
  {
    id: "brand-storytelling",
    slug: "brand-storytelling",
    title: {
      en: "Brand Storytelling & Copywriting",
      fr: "Brand Storytelling & Rédaction Web",
    },
    description: {
      en: "Craft a compelling corporate narrative and write persuasive copy that builds strong brand loyalty.",
      fr: "Façonnez une histoire de marque convaincante et rédigez des textes persuasifs pour fidéliser vos clients.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
    },
    topics: [
      { en: "Developing a Brand Narrative Archetype", fr: "Développer l'archétype narratif de la marque" },
      { en: "Copywriting Formulas (AIDA, PAS)", fr: "Formules de rédaction publicitaire (AIDA, PAS)" },
      { en: "Writing Landing Page Copy that Converts", fr: "Rédiger des textes de page de destination convertissants" },
    ],
    price: "$599 CAD",
    targetAudience: {
      en: "Brand managers, founders, copywriters, and content directors.",
      fr: "Responsables de marque, fondateurs, rédacteurs et directeurs de contenu.",
    },
    skillsAcquired: [
      { en: "Write highly persuasive marketing copies", fr: "Rédiger des textes marketing hautement persuasifs" },
      { en: "Establish a unique corporate voice tone", fr: "Établir une charte éditoriale unique pour son entreprise" },
    ],
    trainingCategory: "storytelling-creation",
  },
  {
    id: "ai-assisted-web-writing",
    slug: "ai-assisted-web-writing",
    title: {
      en: "AI-Assisted Web Writing",
      fr: "Rédaction Web Assistée par l'IA",
    },
    description: {
      en: "Learn to use LLMs to accelerate blog post writing, SEO article research, and newsletter draft editing safely.",
      fr: "Apprenez à utiliser les modèles d'IA pour accélérer la rédaction d'articles SEO, de blogs et de newsletters.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    topics: [
      { en: "Structuring Articles with AI Outlines", fr: "Structurer des articles avec des plans d'IA" },
      { en: "Maintaining Human Voice Tone & SEO Integration", fr: "Conserver le ton humain & intégrer le SEO" },
      { en: "Compliance and Plagiarism Prevention Workflows", fr: "Conformité et méthodes anti-plagiat" },
    ],
    price: "$499 CAD",
    targetAudience: {
      en: "Journalists, bloggers, copywriters, and communications staff.",
      fr: "Journalistes, blogueurs, rédacteurs et chargés de communication.",
    },
    skillsAcquired: [
      { en: "Write articles up to 3x faster using LLMs", fr: "Rédiger des articles jusqu'à 3x plus vite avec l'aide des LLMs" },
      { en: "Structure copy for perfect SEO visibility", fr: "Structurer ses textes pour une visibilité SEO parfaite" },
    ],
    trainingCategory: "storytelling-creation",
  },
  {
    id: "design-thinking",
    slug: "design-thinking",
    title: {
      en: "Design Thinking & UX Methods",
      fr: "Design Thinking & Méthodes UX",
    },
    description: {
      en: "A structured process to discover customer challenges, generate innovative ideas, and prototype client-focused solutions.",
      fr: "Un atelier pratique pour comprendre les défis clients, générer des idées créatives et prototyper des solutions.",
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
      { en: "Empathy Mapping & User Interviews", fr: "Cartes d'empathie & interviews utilisateurs" },
      { en: "Ideation Sessions & Solution Selection", fr: "Ateliers d'idéation & sélection de solutions" },
      { en: "Low-Fidelity Prototyping and Fast Testing", fr: "Prototypage basse fidélité & tests rapides" },
    ],
    price: "$899 CAD",
    targetAudience: {
      en: "Product managers, designers, founders, and team leaders.",
      fr: "Chefs de produit, designers, fondateurs et chefs d'équipe.",
    },
    skillsAcquired: [
      { en: "Lead a design thinking workshop", fr: "Animer un atelier de Design Thinking" },
      { en: "Test and pivot software ideas cost-effectively", fr: "Tester et réorienter des idées logicielles à moindre coût" },
    ],
    trainingCategory: "storytelling-creation",
  },
  {
    id: "mobile-video-creation",
    slug: "mobile-video-creation",
    title: {
      en: "Mobile Video Creation for Socials",
      fr: "Création de Vidéo Mobile pour les Réseaux",
    },
    description: {
      en: "Shoot and edit high-quality professional corporate video assets using only your smartphone and modern mobile apps.",
      fr: "Filmez et montez des vidéos professionnelles percutantes en utilisant uniquement votre smartphone.",
    },
    duration: {
      en: "1 Day (6 Hours)",
      fr: "1 Jour (6 Heures)",
    },
    level: {
      en: "Beginner",
      fr: "Débutant",
    },
    topics: [
      { en: "Mobile Camera Setup, Lighting & Mic Placement", fr: "Réglages caméra mobile, éclairage & microphone" },
      { en: "Filming Techniques & Directing Corporate Testimonials", fr: "Techniques de cadrage & réalisation de témoignages" },
      { en: "Editing on Mobile (CapCut, Premiere Rush)", fr: "Montage vidéo sur mobile (CapCut, Premiere Rush)" },
    ],
    price: "$599 CAD",
    targetAudience: {
      en: "Content creators, communication managers, and social managers.",
      fr: "Créateurs de contenu, chargés de communication et social managers.",
    },
    skillsAcquired: [
      { en: "Shoot and export professional social videos", fr: "Filmer et exporter des vidéos réseaux sociaux de qualité pro" },
      { en: "Edit dynamic clips with graphics and transitions", fr: "Monter des clips dynamiques avec textes et transitions" },
    ],
    trainingCategory: "storytelling-creation",
  },
  {
    id: "website-creation",
    slug: "website-creation-nocode",
    title: {
      en: "No-Code Website Creation for Small Businesses",
      fr: "Création de Site Web No-Code pour PME",
    },
    description: {
      en: "A step-by-step bootcamp to design, build, launch, and manage your small business website without writing code.",
      fr: "Un bootcamp pratique pour concevoir, publier et administrer le site internet de votre PME sans coder.",
    },
    duration: {
      en: "2 Days (12 Hours)",
      fr: "2 Jours (12 Heures)",
    },
    level: {
      en: "Beginner",
      fr: "Débutant",
    },
    topics: [
      { en: "Choosing Platforms & Custom Domain Setup", fr: "Choix de la plateforme & configuration du domaine" },
      { en: "Visual Editing, Page Structures, and Form Integrations", fr: "Édition visuelle, structures de pages & formulaires" },
      { en: "SEO Basics, Analytics Config, and Launch Procedures", fr: "Bases du SEO, statistiques & mise en ligne" },
    ],
    price: "$899 CAD",
    targetAudience: {
      en: "Entrepreneurs, local business owners, and administrative staff.",
      fr: "Entrepreneurs, propriétaires d'entreprises locales et personnel administratif.",
    },
    skillsAcquired: [
      { en: "Launch and edit a responsive corporate website", fr: "Créer et éditer un site vitrine professionnel réactif" },
      { en: "Manage online customer contact integrations", fr: "Gérer l'intégration des contacts clients en ligne" },
    ],
    trainingCategory: "storytelling-creation",
  },
];
