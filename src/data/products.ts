import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "smartrag-portal",
    slug: "smartrag-portal",
    name: "SmartRAG Portal",
    tagline: {
      en: "Secure AI-Powered Knowledge Base & Document Retrieval for SMEs",
      fr: "Recherche Documentaire Sécurisée & Base de Connaissances IA pour PME",
    },
    description: {
      en: "SmartRAG Portal is a secure, private SaaS solution that allows your teams to query internal PDFs, SharePoint documents, and corporate wikis. Trained entirely on local or cloud-secure servers, it guarantees zero data leaks while reducing employee documentation search times by 80%.",
      fr: "SmartRAG Portal est une solution SaaS sécurisée et privée qui permet à vos équipes d'interroger vos fichiers PDF, documents SharePoint et bases de connaissances internes. Entièrement hébergé sur des infrastructures cloud sécurisées, il garantit l'absence de fuites de données et réduit le temps de recherche d'informations de 80%.",
    },
    benefits: [
      {
        en: "Absolute Data Sovereignty: No public LLM leakage, fully compliant with Canadian privacy guidelines.",
        fr: "Souveraineté absolue des données : Aucune fuite sur des serveurs publics, conformité légale totale.",
      },
      {
        en: "Instant Onboarding: Sync your existing Google Drive, local network folders, or OneDrive in 5 minutes.",
        fr: "Intégration instantanée : Synchronisez vos dossiers réseau, Google Drive ou SharePoint en 5 minutes.",
      },
      {
        en: "Reduced Staff Friction: Support, operations, and sales teams get immediate answers to complex procedural questions.",
        fr: "Réduction des frictions d'équipes : Réponses immédiates aux questions techniques et opérationnelles complexes.",
      },
    ],
    features: [
      {
        en: "Semantic Vector Search: Searches concepts and context, not just plain words.",
        fr: "Recherche vectorielle sémantique : Analyse le contexte et le sens global, pas uniquement les mots-clés.",
      },
      {
        en: "Multi-Source Integrations: Live connectors for SharePoint, Slack, and local file storage systems.",
        fr: "Connecteurs multi-sources : Synchronisation en direct avec Slack, OneDrive et bases SQL.",
      },
      {
        en: "Granular User Permissions: Access control ensuring users only view documents they have access rights to.",
        fr: "Droits d'accès granulaires : Contrôle d'accès garantissant que chacun ne voit que ses documents autorisés.",
      },
      {
        en: "Custom Model Fine-Tuning: Adapt responses to match your company's tone of voice and internal glossary.",
        fr: "Ajustement du ton : Modèles de réponse calibrés selon le jargon et glossaire de votre entreprise.",
      },
    ],
    roadmap: [
      {
        en: "Q3 2026: Automatic citation cross-referencing and source document highlighting.",
        fr: "T3 2026 : Références automatiques des citations et surbrillance du document source.",
      },
      {
        en: "Q4 2026: Voice-to-text querying and telephone support AI call center sync.",
        fr: "T4 2026 : Requêtes vocales et synchronisation avec les standards de support téléphonique par IA.",
      },
      {
        en: "Q1 2027: Predictive document categorization and automated workflow triggers.",
        fr: "T1 2027 : Classification prédictive des documents entrants et déclenchements d'automatisation.",
      },
    ],
    imageUrl: "/images/portfolio/smartrag.png",
  },
  {
    id: "logiroute-ai",
    slug: "logiroute-ai",
    name: "LogiRoute AI",
    tagline: {
      en: "Smart Route Optimization and Predictive Logistics Dispatch Tool",
      fr: "Optimisation de Tournées & Répartition Logistique Prédictive par l'IA",
    },
    description: {
      en: "LogiRoute AI is an intelligent operations dashboard built for Canadian fleet operations and logistics teams. By combining real-time traffic data, order volume forecasts, and vehicle load limits, it plans optimal routes to reduce fuel use and dispatch wait times.",
      fr: "LogiRoute AI est un tableau de bord logistique intelligent conçu pour les répartiteurs et gestionnaires de flottes au Canada. En combinant les conditions de trafic, les prévisions de commandes et les capacités de chargement, il planifie les trajets pour réduire le carburant et les délais.",
    },
    benefits: [
      {
        en: "Fuel & Time Savings: Reduce fleet operating costs and driving miles by up to 25% on average.",
        fr: "Économie de carburant : Réduction moyenne de 25% des kilomètres parcourus par votre flotte.",
      },
      {
        en: "Predictive Dispatch: Forecast orders and pre-assign routes based on seasonal weather patterns.",
        fr: "Répartition prédictive : Anticipez la demande et pré-attribuez les tournées selon la météo.",
      },
      {
        en: "Driver Efficiency: Seamless mobile companion app giving drivers live-updated turn-by-turn route maps.",
        fr: "Efficacité des chauffeurs : Application mobile fluide avec instructions de guidage recalculées en temps réel.",
      },
    ],
    features: [
      {
        en: "Dynamic Re-Routing: Real-time traffic, delivery delays, or cancellations trigger instant route updates.",
        fr: "Recalcul dynamique : Mise à jour immédiate des trajets en cas d'imprévus ou d'embouteillages.",
      },
      {
        en: "E-Signature & Proof of Delivery: Mobile photo capture, client signature, and automated document generation.",
        fr: "Preuve de livraison numérique : Signature électronique, photos de livraison et rapports automatisés.",
      },
      {
        en: "Customer Status Alerts: Automatic SMS or email delivery time predictions for recipients.",
        fr: "Alertes destinataires : Prédiction automatique et envoi de l'heure d'arrivée par SMS ou email.",
      },
      {
        en: "Fleet Analytics Dashboard: Monitor CO2 emissions, active driver hours, and overall fleet optimization metrics.",
        fr: "Suivi environnemental et analytique : Suivez les émissions de CO2 et l'usure de la flotte.",
      },
    ],
    roadmap: [
      {
        en: "Q3 2026: Canadian customs paper clearing automation and border crossing wait predictions.",
        fr: "T3 2026 : Automatisation des déclarations douanières canadiennes et prédiction d'attente aux frontières.",
      },
      {
        en: "Q4 2026: Integration with major telematics tracking hardware systems (Geotab, Samsara).",
        fr: "T4 2026 : Connexion native avec les boîtiers télématiques leaders du marché (Geotab, Samsara).",
      },
      {
        en: "Q2 2027: Fully autonomous multi-depot inventory load sharing optimizations.",
        fr: "T2 2027 : Algorithme autonome d'équilibrage de charges multi-entrepôts.",
      },
    ],
    imageUrl: "/images/portfolio/fintrack.png",
  },
];
