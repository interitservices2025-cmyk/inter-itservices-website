import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "odoo-implementation",
    slug: "odoo-implementation",
    title: {
      en: "Odoo Implementation & Deployment",
      fr: "Implémentation & Déploiement Odoo",
    },
    shortDescription: {
      en: "Comprehensive Odoo ERP implementation, configuration, and data migration to unify and streamline your business operations.",
      fr: "Implémentation, paramétrage et intégration d'Odoo ERP pour centraliser et fluidifier la gestion de votre entreprise.",
    },
    longDescription: {
      en: "We assist growing businesses and organizations in deploying and adopting Odoo ERP. From business process analysis and module configuration (CRM, Sales, Invoicing, Inventory, Accounting) to data migration and team training, we build an integrated management system tailored to your exact workflows.",
      fr: "Nous accompagnons les PME et organisations dans le déploiement et l'adoption d'Odoo ERP. De l'analyse de vos processus d'affaires et la configuration des modules (CRM, Ventes, Facturation, Stocks, Comptabilité) jusqu'à la migration de données et la formation de vos équipes, nous bâtissons un système de gestion intégré et évolutif.",
    },
    iconName: "Layers",
    technologies: ["Odoo ERP", "PostgreSQL", "Python", "XML", "REST API", "Docker"],
    features: [
      { en: "Needs assessment & workflow mapping", fr: "Analyse des besoins et cartographie des flux" },
      { en: "Odoo module setup (CRM, Sales, Accounting, Inventory)", fr: "Configuration des modules (CRM, Ventes, Comptabilité, Stocks)" },
      { en: "Secure data migration & import", fr: "Migration et importation sécurisée des données" },
      { en: "Custom views & tailored workflows", fr: "Personnalisation des vues et flux métier" },
      { en: "Hands-on user & administrator training", fr: "Formation pratique des utilisateurs et gestionnaires" },
      { en: "Post-deployment support & optimization", fr: "Support post-mise en production et évolutions" },
    ],
    pillar: "digital",
    badge: {
      fr: "IMPLÉMENTATION ERP ODOO",
      en: "ODOO ERP IMPLEMENTATION",
    },
    accentColor: "orange",
  },
  {
    id: "web-development",
    slug: "web-development",
    title: {
      en: "Web Development & Cloud Portals",
      fr: "Développement Web & Portails Cloud",
    },
    shortDescription: {
      en: "High-performance, modern, and SEO-optimized corporate websites and web platforms to establish a strong online presence.",
      fr: "Création de sites internet professionnels, performants, réactifs et optimisés pour le référencement naturel.",
    },
    longDescription: {
      en: "We design and build modern corporate websites, portals, and web platforms using cutting-edge technologies. Our solutions load instantly, rank prominently on search engines, and convert qualified visitors into business opportunities.",
      fr: "Nous concevons et développons des sites web professionnels, des portails d'entreprise et des plateformes web modernes. Nos solutions sont optimisées pour charger instantanément, se positionner sur les moteurs de recherche et transformer vos visiteurs en opportunités d'affaires.",
    },
    iconName: "Globe",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel", "Node.js", "PostgreSQL"],
    features: [
      { en: "Custom corporate website & portal development", fr: "Développement de sites et portails d'entreprise sur mesure" },
      { en: "SEO optimization & Core Web Vitals performance", fr: "Optimisation SEO & performance Core Web Vitals (98+)" },
      { en: "Responsive, mobile-first architectures", fr: "Conception réactive et mobile-first fluide" },
      { en: "API and third-party software integrations", fr: "Intégration d'APIs, CRM et systèmes tiers" },
      { en: "Secure authentication & client dashboards", fr: "Authentification sécurisée et espaces clients" },
      { en: "Continuous deployment & automated backups", fr: "Déploiement continu et sauvegardes automatiques" },
    ],
    pillar: "digital",
    badge: {
      fr: "INGÉNIERIE WEB & CLOUD",
      en: "WEB & CLOUD ENGINEERING",
    },
    accentColor: "sky",
    kpis: [
      { label: { fr: "Score Core Web Vitals", en: "Core Web Vitals Score" }, value: "98+" },
      { label: { fr: "Architecture Moderne", en: "Modern Stack" }, value: "Next.js 15" },
      { label: { fr: "Temps de chargement", en: "Load Speed" }, value: "< 0.8s" },
      { label: { fr: "Sécurité & Chiffrement", en: "Security Protocol" }, value: "100% HTTPS" },
    ],
    modules: [
      {
        name: { fr: "Portails & Sites d'Entreprise", en: "Corporate Sites & Portals" },
        desc: {
          fr: "Architecture sur mesure valorisant vos services, vos réalisations et votre positionnement B2B.",
          en: "Custom architectures highlighting services, case studies, and corporate brand positioning.",
        },
        iconName: "Globe",
      },
      {
        name: { fr: "Optimisation SEO & Performance", en: "SEO & Performance Tuning" },
        desc: {
          fr: "Balisage sémantique rigoureux, temps de réponse ultra-rapides et conformité Google Core Web Vitals.",
          en: "Rigorous semantic markup, ultra-low latencies, and full Google Core Web Vitals compliance.",
        },
        iconName: "Zap",
      },
      {
        name: { fr: "Intégration d'APIs & Systèmes Tiers", en: "API & System Integrations" },
        desc: {
          fr: "Connexion directe avec vos CRM, ERP, passerelles de paiement sécurisées et bases de données.",
          en: "Seamless connectors with your CRM, ERP, payment gateways, and backend databases.",
        },
        iconName: "Cpu",
      },
      {
        name: { fr: "Espaces Clients Sécurisés", en: "Secure Client Portals" },
        desc: {
          fr: "Zones authentifiées permettant à vos clients d'accéder à leurs documents, factures et suivis.",
          en: "Role-based authenticated portals allowing clients to manage documents, invoices, and projects.",
        },
        iconName: "ShieldCheck",
      },
      {
        name: { fr: "Conception Mobile-First", en: "Mobile-First Design" },
        desc: {
          fr: "Interfaces fluides, ergonomiques et testées sur tous les écrans (smartphones, tablettes, desktop).",
          en: "Intuitive touch experiences designed and tested across phones, tablets, and high-res screens.",
        },
        iconName: "Laptop",
      },
      {
        name: { fr: "Maintenance & Évolutions Cloud", en: "Cloud Ops & Support" },
        desc: {
          fr: "Hébergement serverless haute disponibilité, monitoring proactif et sauvegardes journalières.",
          en: "High-availability serverless deployment, proactive monitoring, and daily encrypted backups.",
        },
        iconName: "Settings2",
      },
    ],
    process: [
      {
        step: "01",
        title: { fr: "Cadrage & Spécifications", en: "Discovery & Scoping" },
        desc: {
          fr: "Analyse détaillée de vos objectifs commerciaux, de vos cibles B2B et de votre charte visuelle.",
          en: "In-depth analysis of your business targets, user expectations, and brand identity guidelines.",
        },
      },
      {
        step: "02",
        title: { fr: "Architecture UX/UI", en: "UX/UI Architecture" },
        desc: {
          fr: "Conception des parcours utilisateurs, arborescence sémantique et prototypes interactifs.",
          en: "User journey mapping, semantic site structure, and high-fidelity interactive wireframes.",
        },
      },
      {
        step: "03",
        title: { fr: "Développement Next.js", en: "Next.js Engineering" },
        desc: {
          fr: "Développement en TypeScript avec Tailwind CSS pour un rendu rapide, propre et modulaire.",
          en: "Fullstack TypeScript coding with Tailwind CSS ensuring clean, modular, and maintainable code.",
        },
      },
      {
        step: "04",
        title: { fr: "Tests & Optimisations SEO", en: "Testing & SEO Tuning" },
        desc: {
          fr: "Audit complet de performance, compatibilité multi-navigateurs et optimisation des balises SEO.",
          en: "Rigorous performance benchmarking, cross-browser compatibility tests, and on-page SEO checks.",
        },
      },
      {
        step: "05",
        title: { fr: "Déploiement Cloud", en: "Cloud Deployment" },
        desc: {
          fr: "Mise en ligne sur infrastructure Vercel/Cloudflare avec configuration DNS et certificats SSL.",
          en: "Production rollout on high-speed Vercel/Cloudflare infrastructure with SSL and DNS tuning.",
        },
      },
      {
        step: "06",
        title: { fr: "Suivi & Évolution", en: "Ongoing Evolution" },
        desc: {
          fr: "Formation à l'administration de vos contenus, support réactif et ajustements continus.",
          en: "Content administration handoff, responsive support, and ongoing feature updates.",
        },
      },
    ],
    targetProfiles: [
      {
        title: { fr: "PME en Croissance", en: "Growing SMEs" },
        desc: {
          fr: "Entreprises souhaitant remplacer un site vieillissant par une plateforme rapide et crédible.",
          en: "Businesses looking to replace legacy websites with modern, credible high-performance platforms.",
        },
      },
      {
        title: { fr: "Cabinets & Sociétés de Services", en: "Professional Service Firms" },
        desc: {
          fr: "Structures nécessitant une vitrine d'autorité et des fonctionnalités de prise de contact fluide.",
          en: "Firms requiring authority positioning, clear service catalogs, and frictionless inquiry capture.",
        },
      },
      {
        title: { fr: "Organisations Multi-Sites", en: "Multi-Location Companies" },
        desc: {
          fr: "Entités gérant plusieurs divisions ou filiales avec un besoin d'uniformité et d'évolutivité.",
          en: "Organizations managing multiple subsidiaries needing unified brand presentation.",
        },
      },
      {
        title: { fr: "Startups & Nouveaux Projets", en: "Startups & New Initiatives" },
        desc: {
          fr: "Équipes lançant une offre innovante avec un impératif de vitesse de chargement et d'impact visuel.",
          en: "Teams launching new digital ventures requiring fast execution and stunning aesthetic impact.",
        },
      },
    ],
  },
  {
    id: "automation-ai",
    slug: "automation-ai",
    title: {
      en: "Automation & Applied AI Solutions",
      fr: "Automatisation & IA Appliquée",
    },
    shortDescription: {
      en: "Integrate pragmatic AI models and automated workflows to simplify operations and eliminate repetitive manual tasks.",
      fr: "Intégration d'outils d'IA générative et d'automatisation de flux pour simplifier vos opérations quotidiennes.",
    },
    longDescription: {
      en: "Streamline your business operations by automating repetitive manual processes. We develop secure AI assistants, customize CRM integrations, and set up administrative automation to help your teams focus on high-value objectives.",
      fr: "Optimisez vos flux de travail en éliminant les tâches manuelles récurrentes. Nous concevons des assistants IA personnalisés, configurons des flux d'automatisation administrative et connectons vos outils pour libérer du temps à vos équipes.",
    },
    iconName: "Cpu",
    technologies: ["Python", "OpenAI API", "n8n", "Zapier", "LangChain", "REST APIs", "Docker"],
    features: [
      { en: "Custom AI assistant and chatbot development", fr: "Développement d'assistants et chatbots IA spécialisés" },
      { en: "Administrative & CRM workflow automation", fr: "Automatisation administrative et synchronisation CRM" },
      { en: "Secure business data processing pipelines", fr: "Pipelines de traitement sécurisé de données" },
      { en: "Automated business report generation", fr: "Génération automatique de rapports et documents" },
      { en: "Document extraction & intelligent parsing", fr: "Extraction intelligente et classification de documents" },
      { en: "Zero data leakage & private AI environments", fr: "Environnements IA privés avec protection des données" },
    ],
    pillar: "digital",
    badge: {
      fr: "IA APPLIQUÉE & AUTOMATISATION",
      en: "APPLIED AI & WORKFLOWS",
    },
    accentColor: "violet",
    kpis: [
      { label: { fr: "Gain de temps opérationnel", en: "Time Saved on Tasks" }, value: "60%+" },
      { label: { fr: "Latence IA Moyenne", en: "Average AI Latency" }, value: "< 1.2s" },
      { label: { fr: "Disponibilité des flux", en: "Workflow Uptime" }, value: "24/7" },
      { label: { fr: "Chiffrement & Sécurité", en: "Data Governance" }, value: "100% Chiffré" },
    ],
    modules: [
      {
        name: { fr: "Assistants & Chatbots IA Métiers", en: "Custom Business AI Assistants" },
        desc: {
          fr: "Agents conversationnels entraînés sur vos bases de connaissances pour répondre instantanément à vos clients et équipes.",
          en: "Conversational agents trained on your corporate knowledge base to answer client and staff queries instantly.",
        },
        iconName: "Cpu",
      },
      {
        name: { fr: "Automatisation des Flux de Travail", en: "End-to-End Workflow Automation" },
        desc: {
          fr: "Connexion de vos applications (courriels, formulaires, bases de données) avec n8n et Python sans friction.",
          en: "Seamless synchronization between email, web forms, spreadsheets, and databases using n8n and Python.",
        },
        iconName: "Zap",
      },
      {
        name: { fr: "Extraction Intelligente de Documents", en: "Intelligent Document Parsing" },
        desc: {
          fr: "Traitement automatique des factures, contrats et formulaires par OCR et modèles de langage avancés.",
          en: "Automated extraction and classification of invoices, receipts, and contracts using advanced OCR and LLMs.",
        },
        iconName: "Layers",
      },
      {
        name: { fr: "Synchronisation CRM & ERP", en: "CRM & ERP Connectors" },
        desc: {
          fr: "Mise à jour en temps réel des leads, commandes et inventaires entre vos différents logiciels métiers.",
          en: "Real-time bi-directional data flow connecting marketing leads, sales orders, and inventory systems.",
        },
        iconName: "Laptop",
      },
      {
        name: { fr: "Rapports & Tableaux Automatisés", en: "Automated Reporting" },
        desc: {
          fr: "Génération périodique de bilans d'activité, synthèses chiffrées et alertes prédictives personnalisées.",
          en: "Scheduled synthesis reports, automated metric summaries, and smart exception notifications.",
        },
        iconName: "Settings2",
      },
      {
        name: { fr: "Sécurité & IA Privée", en: "Enterprise Security & Privacy" },
        desc: {
          fr: "Isolement strict de vos données d'entreprise sans réutilisation pour l'entraînement public.",
          en: "Isolated enterprise AI environments ensuring sensitive operational data is never shared publicly.",
        },
        iconName: "ShieldCheck",
      },
    ],
    process: [
      {
        step: "01",
        title: { fr: "Audit des Processus Manuels", en: "Workflow Audit" },
        desc: {
          fr: "Identification des tâches redondantes, des goulots d'étranglement et des opportunités d'automatisation.",
          en: "Pinpointing repetitive manual bottlenecks and high-ROI automation opportunities across teams.",
        },
      },
      {
        step: "02",
        title: { fr: "Cartographie & Modèles IA", en: "Model & Architecture Design" },
        desc: {
          fr: "Sélection des meilleurs modèles (OpenAI, Claude, open-source) et conception des pipelines de données.",
          en: "Selecting optimal LLMs and mapping data pipeline architectures with strict privacy controls.",
        },
      },
      {
        step: "03",
        title: { fr: "Configuration des Connecteurs", en: "Pipeline Engineering" },
        desc: {
          fr: "Développement des scripts Python et des flux n8n avec gestion rigoureuse des erreurs.",
          en: "Coding robust Python scripts and n8n orchestration pipelines with error-handling safeguards.",
        },
      },
      {
        step: "04",
        title: { fr: "Intégration aux Systèmes", en: "System Integration" },
        desc: {
          fr: "Liaison sécurisée avec vos outils existants (Odoo, courriels, bases de données, CRM).",
          en: "Secure connection with existing operational tools (Odoo, email servers, CRM, and cloud drives).",
        },
      },
      {
        step: "05",
        title: { fr: "Phase Pilote & Validation", en: "Pilot Testing & Validation" },
        desc: {
          fr: "Mise à l'épreuve en conditions réelles auprès d'utilisateurs clés et ajustement des prompts.",
          en: "Real-world testing with key team members, prompt tuning, and accuracy verification.",
        },
      },
      {
        step: "06",
        title: { fr: "Déploiement & Monitoring", en: "Deployment & Monitoring" },
        desc: {
          fr: "Mise en production, tableaux de surveillance et support pour garantir la pérennité des flux.",
          en: "Production release, operational health monitoring, and continuous pipeline maintenance.",
        },
      },
    ],
    targetProfiles: [
      {
        title: { fr: "Équipes Administratives", en: "Administrative Teams" },
        desc: {
          fr: "Collaborateurs passant trop d'heures sur la saisie manuelle et les transferts de fichiers récurrents.",
          en: "Staff bogged down by repetitive manual data entry, copy-pasting, and routine paperwork.",
        },
      },
      {
        title: { fr: "Services Ventes & Support", en: "Sales & Support Teams" },
        desc: {
          fr: "Équipes souhaitant répondre plus vite aux prospects et qualifier automatiquement les demandes.",
          en: "Units needing instant lead qualification, automated quotation, and rapid ticket routing.",
        },
      },
      {
        title: { fr: "PME Multi-Outils", en: "Multi-Tool Companies" },
        desc: {
          fr: "Entreprises utilisant plusieurs logiciels disjoints qui ne communiquent pas entre eux.",
          en: "Organizations juggling disconnected apps that require manual reconciliation between tools.",
        },
      },
      {
        title: { fr: "Directions Opérationnelles", en: "Operations Leadership" },
        desc: {
          fr: "Décideurs cherchant à réduire les coûts d'exploitation et fiabiliser la qualité des données.",
          en: "Leaders seeking reduced operating costs, fewer human errors, and dependable data reporting.",
        },
      },
    ],
  },
  {
    id: "business-applications",
    slug: "business-applications",
    title: {
      en: "Custom Business Applications",
      fr: "Applications Métiers & Logiciels Sur Mesure",
    },
    shortDescription: {
      en: "Bespoke software, secure client portals, and web applications tailored to your specific operational workflows.",
      fr: "Conception d'applications web, de portails clients et d'outils sur mesure pour soutenir vos flux opérationnels spécifiques.",
    },
    longDescription: {
      en: "Empower your team and engage your clients with tailored software tools. From secure client portals to specialized operational dashboards, we build scalable web applications designed to support your day-to-day business operations.",
      fr: "Facilitez le travail de vos équipes et améliorez l'expérience de vos clients grâce à des outils logiciels adaptés. Des portails clients sécurisés aux tableaux de bord opérationnels, nous concevons des applications web robustes et évolutives.",
    },
    iconName: "Layout",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "TypeScript", "Docker"],
    features: [
      { en: "Secure client & partner portals", fr: "Portails clients et partenaires sécurisés" },
      { en: "Interactive operational dashboards", fr: "Tableaux de bord opérationnels et KPI en temps réel" },
      { en: "Custom API & enterprise system integrations", fr: "Intégration d'APIs et de systèmes d'entreprise" },
      { en: "Robust database architecture & management", fr: "Conception et gestion de bases de données fiables" },
      { en: "Role-based access control (RBAC)", fr: "Gestion fine des rôles et droits d'accès utilisateurs" },
      { en: "Scalable cloud infrastructure", fr: "Architecture cloud haute disponibilité et sauvegardes" },
    ],
    pillar: "digital",
    badge: {
      fr: "LOGICIELS MÉTIERS SUR MESURE",
      en: "CUSTOM BUSINESS SOFTWARE",
    },
    accentColor: "emerald",
    kpis: [
      { label: { fr: "Disponibilité Système", en: "System Uptime" }, value: "99.9%" },
      { label: { fr: "Base de Données", en: "Database Stack" }, value: "PostgreSQL" },
      { label: { fr: "Sécurité & Contrôle", en: "Access Security" }, value: "RBAC & JWT" },
      { label: { fr: "Adaptation Métier", en: "Workflow Match" }, value: "100% Sur Mesure" },
    ],
    modules: [
      {
        name: { fr: "Tableaux de Bord Opérationnels", en: "Real-Time Operational Dashboards" },
        desc: {
          fr: "Visualisation consolidée de vos métriques clés, suivi des commandes et indicateurs de performance.",
          en: "Consolidated views of business metrics, order progress, and executive operational KPIs.",
        },
        iconName: "Layout",
      },
      {
        name: { fr: "Portails Clients & Partenaires", en: "Client & Partner Portals" },
        desc: {
          fr: "Plateformes sécurisées pour échanger des documents, suivre des états d'avancement et valider des livrables.",
          en: "Dedicated authenticated workspaces for document sharing, progress tracking, and sign-offs.",
        },
        iconName: "Globe",
      },
      {
        name: { fr: "Gestion de Processus Internes", en: "Internal Process Workflows" },
        desc: {
          fr: "Circuits d'approbation personnalisés, gestion de stocks spécifiques et suivi des équipes de terrain.",
          en: "Tailored approval chains, unique inventory tracking models, and field team management.",
        },
        iconName: "Cpu",
      },
      {
        name: { fr: "Architectures d'APIs Sécurisées", en: "Secure API Architectures" },
        desc: {
          fr: "Création d'APIs REST documentées pour relier vos applications métiers à vos partenaires.",
          en: "Documented REST APIs enabling secure bidirectional sync between internal and external apps.",
        },
        iconName: "Settings2",
      },
      {
        name: { fr: "Bases de Données Relationnelles", en: "Relational Database Design" },
        desc: {
          fr: "Modélisation PostgreSQL optimisée, intégrité référentielle et requêtes indexées pour la rapidité.",
          en: "Optimized PostgreSQL schemas with strict referential integrity and high-speed indexing.",
        },
        iconName: "Layers",
      },
      {
        name: { fr: "Haute Sécurité & Conformité", en: "Enterprise Security & Compliance" },
        desc: {
          fr: "Authentification multi-facteurs, chiffrement au repos et en transit, et journalisation d'audit.",
          en: "Multi-factor authentication, at-rest and in-transit encryption, and granular audit logs.",
        },
        iconName: "ShieldCheck",
      },
    ],
    process: [
      {
        step: "01",
        title: { fr: "Analyse des Besoins Métiers", en: "Requirements Analysis" },
        desc: {
          fr: "Immersion dans vos règles de gestion, cas d'usage quotidiens et contraintes techniques.",
          en: "Deep-dive into unique operational logic, team workflows, and technical constraints.",
        },
      },
      {
        step: "02",
        title: { fr: "Modélisation des Données", en: "Data Modeling & Architecture" },
        desc: {
          fr: "Conception du schéma de base de données, des rôles d'accès et des flux applicatifs.",
          en: "Structuring relational database schemas, access matrices, and application logic.",
        },
      },
      {
        step: "03",
        title: { fr: "Développement Agile Fullstack", en: "Agile Fullstack Coding" },
        desc: {
          fr: "Développement itératif avec Next.js et TypeScript pour valider régulièrement les fonctionnalités.",
          en: "Iterative sprints with Next.js and TypeScript allowing regular milestone testing.",
        },
      },
      {
        step: "04",
        title: { fr: "Tests & Sécurité Rigoureuse", en: "QA & Security Testing" },
        desc: {
          fr: "Tests unitaires, tests de charge et audit des permissions pour garantir une étanchéité totale.",
          en: "Unit testing, load benchmarking, and penetration tests to ensure bulletproof data isolation.",
        },
      },
      {
        step: "05",
        title: { fr: "Mise en Service Assistée", en: "Deployment & Cutover" },
        desc: {
          fr: "Importation des données existantes, formation des utilisateurs et basculement en production.",
          en: "Data migration, administrator onboarding, and smooth cutover to production servers.",
        },
      },
      {
        step: "06",
        title: { fr: "Support & Évolution Continue", en: "Evolution & Maintenance" },
        desc: {
          fr: "Suivi des performances, corrections rapides et ajouts de nouveaux modules à la demande.",
          en: "Proactive uptime monitoring, rapid maintenance, and ongoing modular enhancements.",
        },
      },
    ],
    targetProfiles: [
      {
        title: { fr: "Entreprises aux Flux Spécifiques", en: "Custom Workflow Businesses" },
        desc: {
          fr: "Organisations dont le modèle opérationnel ne peut pas être satisfait par un logiciel générique.",
          en: "Organizations whose core workflows cannot fit within off-the-shelf software packages.",
        },
      },
      {
        title: { fr: "Sociétés Dépassées par Excel", en: "Spreadsheet-Heavy Companies" },
        desc: {
          fr: "Structures dépendantes de classeurs complexes générant des erreurs de saisie et des pertes de temps.",
          en: "Firms reliant on fragile multi-tab spreadsheets vulnerable to human error and data loss.",
        },
      },
      {
        title: { fr: "Réseaux & Équipes Décentralisées", en: "Decentralized Teams" },
        desc: {
          fr: "Entités nécessitant un outil centralisé accessible sur le terrain et au siège en toute sécurité.",
          en: "Organizations needing a single cloud workspace accessible by field and office teams alike.",
        },
      },
      {
        title: { fr: "Organisations en Modernisation", en: "Modernizing Organizations" },
        desc: {
          fr: "PME remplaçant de vieux logiciels locaux par des applications cloud modernes et réactives.",
          en: "SMEs migrating legacy desktop tools to responsive, accessible cloud applications.",
        },
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: {
      en: "Digital Marketing & Organic Acquisition",
      fr: "Marketing Digital & Acquisition B2B",
    },
    shortDescription: {
      en: "Data-driven organic search (SEO), content strategy, and digital acquisition campaigns to grow your business.",
      fr: "Stratégies d'acquisition, de référencement naturel (SEO) et de marketing de contenu pour développer votre clientèle.",
    },
    longDescription: {
      en: "Reach your target audience effectively. We execute tailored search engine optimization, content strategy campaigns, and targeted digital acquisition to ensure your business attracts qualified client inquiries.",
      fr: "Ciblez efficacement vos clients qualifiés. Nous mettons en œuvre des stratégies de référencement naturel (SEO), du marketing de contenu pertinent et des campagnes d'acquisition pour générer des opportunités commerciales durables.",
    },
    iconName: "Megaphone",
    technologies: ["Google Analytics 4", "SEO Tools", "Google Search Console", "Content Strategy", "Tag Manager"],
    features: [
      { en: "Search Engine Optimization (SEO) strategy", fr: "Stratégie de référencement naturel (SEO) B2B" },
      { en: "Content strategy & editorial copywriting", fr: "Stratégie éditoriale et rédaction de contenu expert" },
      { en: "Audience analytics & conversion tracking", fr: "Analyse d'audience et mesure rigoureuse des conversions" },
      { en: "Digital visibility & targeted outreach", fr: "Visibilité numérique et acquisition de leads qualifiés" },
      { en: "Technical site audits & Core Web Vitals", fr: "Audits techniques de site et vitesse d'affichage" },
      { en: "Conversion rate optimization (CRO)", fr: "Optimisation du taux de transformation des pages" },
    ],
    pillar: "digital",
    badge: {
      fr: "ACQUISITION & VISIBILITÉ B2B",
      en: "B2B GROWTH & VISIBILITY",
    },
    accentColor: "rose",
    kpis: [
      { label: { fr: "Trafic Organique Qualifié", en: "Qualified Organic Reach" }, value: "+120%" },
      { label: { fr: "Outils de Mesure", en: "Analytics Stack" }, value: "GA4 & GSC" },
      { label: { fr: "Orientation Résultats", en: "Strategic Focus" }, value: "Leads B2B" },
      { label: { fr: "Stratégie de Contenu", en: "Content Standard" }, value: "Haute Valeur" },
    ],
    modules: [
      {
        name: { fr: "Référencement Naturel (SEO)", en: "Technical & On-Page SEO" },
        desc: {
          fr: "Optimisation de l'arborescence, des balises et du contenu pour truster les premières positions Google.",
          en: "Architecture, metadata, and keyword alignment engineered for top search engine rankings.",
        },
        iconName: "Globe",
      },
      {
        name: { fr: "Marketing de Contenu B2B", en: "B2B Content Marketing" },
        desc: {
          fr: "Rédaction d'articles experts, d'études de cas et de livres blancs pour asseoir votre leadership.",
          en: "Authoritative editorial production, case studies, and insights that convert visitors into leads.",
        },
        iconName: "Layout",
      },
      {
        name: { fr: "Audit de Visibilité & Concurrence", en: "Competitive & Visibility Audits" },
        desc: {
          fr: "Analyse des forces et faiblesses de votre secteur pour identifier les niches de croissance inexploitées.",
          en: "Deep-dive competitive gap analysis to capture high-intent search queries ahead of rivals.",
        },
        iconName: "Zap",
      },
      {
        name: { fr: "Tableaux de Bord Analytics (GA4)", en: "GA4 & Conversion Tracking" },
        desc: {
          fr: "Configuration précise des événements et des tunnels de conversion pour mesurer le vrai ROI de vos actions.",
          en: "Precise conversion funnel tracking and GA4 dashboards proving clear business return on investment.",
        },
        iconName: "Settings2",
      },
      {
        name: { fr: "Optimisation des Conversions (CRO)", en: "Conversion Rate Optimization" },
        desc: {
          fr: "Amélioration des formulaires, des appels à l'action et de la clarté des messages pour maximiser les prises de contact.",
          en: "Refining call-to-actions, page layout clarity, and forms to maximize qualified contact submissions.",
        },
        iconName: "Megaphone",
      },
      {
        name: { fr: "Présence Locale & Référencement", en: "Local Search Optimization" },
        desc: {
          fr: "Positionnement optimisé sur Google Business et dans les annuaires professionnels au Canada et à l'international.",
          en: "Google Business and professional directory presence optimized for regional and target market search.",
        },
        iconName: "ShieldCheck",
      },
    ],
    process: [
      {
        step: "01",
        title: { fr: "Audit Initial & Mots-Clés", en: "Initial SEO & Keyword Audit" },
        desc: {
          fr: "Analyse technique de votre site actuel et recherche des expressions à fort potentiel commercial.",
          en: "Technical crawl of your current web assets and discovery of high-intent search queries.",
        },
      },
      {
        step: "02",
        title: { fr: "Feuille de Route Stratégique", en: "Strategic Growth Roadmap" },
        desc: {
          fr: "Définition des priorités d'action, calendrier éditorial et objectifs de conversion mesurables.",
          en: "Actionable quarterly roadmap, editorial publication schedule, and KPI benchmarks.",
        },
      },
      {
        step: "03",
        title: { fr: "Optimisation Technique", en: "Technical Optimization" },
        desc: {
          fr: "Correction des erreurs de crawl, accélération du temps de chargement et balisage Schema.org.",
          en: "Fixing crawl errors, boosting load speeds, and implementing rich Schema.org metadata.",
        },
      },
      {
        step: "04",
        title: { fr: "Production de Contenus", en: "Content Production" },
        desc: {
          fr: "Rédaction et publication de pages services et d'articles approfondis orientés conversion.",
          en: "Writing and publishing high-value service pages and thought leadership articles.",
        },
      },
      {
        step: "05",
        title: { fr: "Mesure des Résultats (GA4)", en: "Analytics & Monitoring" },
        desc: {
          fr: "Suivi mensuel des positions Google, du trafic qualifié et des prises de contact générées.",
          en: "Monthly ranking reviews, traffic quality analysis, and real-world inquiry metrics.",
        },
      },
      {
        step: "06",
        title: { fr: "Itérations & Croissance", en: "Continuous Refinement" },
        desc: {
          fr: "Ajustements continus basés sur les données réelles pour consolider vos parts de marché.",
          en: "Iterative content updates based on real performance data to cement search dominance.",
        },
      },
    ],
    targetProfiles: [
      {
        title: { fr: "PME en Recherche de Leads", en: "Lead-Seeking SMEs" },
        desc: {
          fr: "Entreprises voulant générer des demandes entrantes qualifiées sans dépendre uniquement du bouche-à-oreille.",
          en: "Businesses needing steady qualified inbound inquiries rather than relying solely on referrals.",
        },
      },
      {
        title: { fr: "Sociétés de Services B2B", en: "B2B Service Companies" },
        desc: {
          fr: "Prestataires voulant démontrer leur expertise technique et rassurer des décideurs exigeants.",
          en: "Firms needing to establish domain authority and reassure executive decision-makers.",
        },
      },
      {
        title: { fr: "Entreprises Refaisant Leur Site", en: "Website Redesign Teams" },
        desc: {
          fr: "Structures voulant préserver et décupler leur référencement lors d'une refonte graphique.",
          en: "Companies safeguarding existing search rankings while multiplying reach during redesigns.",
        },
      },
      {
        title: { fr: "Organisations en Phase d'Expansion", en: "Expanding Organizations" },
        desc: {
          fr: "Sociétés abordant de nouveaux marchés géographiques nécessitant une visibilité immédiate.",
          en: "Enterprises entering new geographic markets requiring immediate search presence.",
        },
      },
    ],
  },
  {
    id: "training",
    slug: "training",
    title: {
      en: "Training Workshops",
      fr: "Ateliers de formation",
    },
    shortDescription: {
      en: "Hands-on workshops and bootcamps to empower teams with modern digital tools, ERP adoption, and cybersecurity.",
      fr: "Ateliers et formations pratiques pour rendre vos équipes autonomes sur les outils numériques, les ERP et la cybersécurité.",
    },
    longDescription: {
      en: "We empower organizations by training their teams. Our practical workshops cover Odoo and business software adoption, AI productivity, cybersecurity fundamentals, and modern digital workflows.",
      fr: "Nous accompagnons la montée en compétences de vos équipes. Nos ateliers pratiques couvrent la prise en main d'Odoo et des logiciels de gestion, la productivité avec l'IA, la cybersécurité et les outils collaboratifs modernes.",
    },
    iconName: "GraduationCap",
    technologies: ["Odoo Training", "AI Productivity", "Cybersecurity Basics", "Collaborative Tools"],
    features: [
      { en: "Odoo ERP user & manager workshops", fr: "Ateliers utilisateurs et gestionnaires Odoo" },
      { en: "AI productivity & prompt engineering", fr: "Productivité avec les outils d'IA générative" },
      { en: "Cybersecurity awareness & data protection", fr: "Sensibilisation à la cybersécurité et protection des données" },
      { en: "Tailored on-site and remote corporate cohorts", fr: "Sessions sur mesure en présentiel et à distance" },
    ],
    pillar: "digital",
    badge: {
      fr: "MONTÉE EN COMPÉTENCES & ATELIERS",
      en: "SKILLS & WORKSHOPS",
    },
    accentColor: "amber",
  },
];
