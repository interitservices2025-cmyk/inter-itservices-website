import { AISolution } from "@/types";

export const aiSolutions: AISolution[] = [
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: {
      en: "AI Automation & Workflows",
      fr: "Automatisation & Workflows IA",
    },
    description: {
      en: "Automate repetitive, high-volume tasks with intelligent software agents to cut costs and increase productivity.",
      fr: "Automatisez les tâches répétitives et volumineuses grâce à des agents logiciels intelligents pour réduire vos coûts et booster la productivité.",
    },
    iconName: "Cpu",
    useCases: [
      {
        en: "Automated customer request categorization and routing",
        fr: "Classification et routage automatisés des demandes clients",
      },
      {
        en: "Data extraction from invoices and documents with AI-OCR",
        fr: "Extraction de données de factures et documents avec IA-OCR",
      },
      {
        en: "Self-healing data synchronization between disparate enterprise systems",
        fr: "Synchronisation automatique des données entre systèmes d'entreprise hétérogènes",
      },
    ],
    benefits: [
      {
        en: "Reduce processing costs by up to 70%",
        fr: "Réduction des coûts de traitement jusqu'à 70%",
      },
      {
        en: "Eliminate human data entry errors completely",
        fr: "Élimination complète des erreurs de saisie manuelle",
      },
      {
        en: "Ensure 24/7/365 availability of core background workflows",
        fr: "Disponibilité 24h/24, 7j/7, 365j/an des flux de fond critiques",
      },
    ],
    technologies: ["Python", "LangChain", "n8n", "OpenAI API", "Docker"],
  },
  {
    id: "custom-llms",
    slug: "custom-llms-chatbots",
    title: {
      en: "Custom LLMs & Secure Chatbots",
      fr: "LLMs & Chatbots Personnalisés",
    },
    description: {
      en: "Build proprietary, secure conversational agents trained on your business data to support your teams and customers.",
      fr: "Développez des agents conversationnels sécurisés et propriétaires, entraînés sur vos données d'entreprise pour accompagner vos équipes et clients.",
    },
    iconName: "MessageSquareCode",
    useCases: [
      {
        en: "Secure internal knowledge base query systems (RAG)",
        fr: "Systèmes de recherche sécurisés sur base de connaissances interne (RAG)",
      },
      {
        en: "Customer support agents handling complex product queries",
        fr: "Agents de support client répondant à des requêtes produits complexes",
      },
      {
        en: "AI-assisted drafting of proposals, reports, and technical guides",
        fr: "Rédaction assistée par l'IA d'offres commerciales, rapports et guides",
      },
    ],
    benefits: [
      {
        en: "No public data leakage — complete data security compliance",
        fr: "Aucune fuite de données publiques — conformité totale de la sécurité",
      },
      {
        en: "Drastic drop in first-response times for clients",
        fr: "Baisse drastique des temps de première réponse pour les clients",
      },
      {
        en: "Empower employees with instant answers to technical questions",
        fr: "Montée en compétences des employés avec des réponses techniques immédiates",
      },
    ],
    technologies: ["Llama 3", "Qdrant Vector DB", "RAG Pipelines", "Hugging Face", "PyTorch"],
  },
  {
    id: "predictive-analytics",
    slug: "predictive-analytics",
    title: {
      en: "Predictive Analytics & ML",
      fr: "Analyses Prédictives & ML",
    },
    description: {
      en: "Utilize machine learning algorithms to analyze historical patterns, forecast trends, and make data-driven decisions.",
      fr: "Utilisez des algorithmes de machine learning pour analyser les tendances passées, anticiper les évolutions et prendre des décisions fondées.",
    },
    iconName: "TrendingUp",
    useCases: [
      {
        en: "Demand forecasting for inventory and resource allocation",
        fr: "Prévision de la demande pour l'allocation des stocks et ressources",
      },
      {
        en: "Customer churn prediction and retention campaigns",
        fr: "Prédiction de la résiliation client (churn) et campagnes de fidélisation",
      },
      {
        en: "Anomaly detection for server uptime and transaction security",
        fr: "Détection d'anomalies pour la sécurité réseau et les transactions",
      },
    ],
    benefits: [
      {
        en: "Transition from reactive to proactive business decisions",
        fr: "Transition d'une prise de décision réactive à proactive",
      },
      {
        en: "Optimize inventory costs by aligning supply with forecasts",
        fr: "Optimisation des coûts de stock en alignant l'offre sur les prévisions",
      },
      {
        en: "Detect fraud and operational anomalies in near real-time",
        fr: "Détection des fraudes et anomalies en temps quasi réel",
      },
    ],
    technologies: ["Scikit-Learn", "TensorFlow", "Pandas", "FastAPI", "PostgreSQL"],
  },
];
