import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: {
      en: "Custom Software Development",
      fr: "Développement Logiciel Sur Mesure",
    },
    shortDescription: {
      en: "Tailor-made software applications engineered from scratch to solve your specific operational challenges.",
      fr: "Des applications logicielles personnalisées, conçues de A à Z pour résoudre vos défis opérationnels spécifiques.",
    },
    longDescription: {
      en: "We design, build, and deploy secure, scalable, and high-performance custom software systems that integrate seamlessly with your existing infrastructure. Our team handles the entire lifecycle, from design and prototyping to development, cloud deployment, and maintenance.",
      fr: "Nous concevons, construisons et déployons des systèmes logiciels personnalisés sécurisés, évolutifs et performants qui s'intègrent parfaitement à votre infrastructure existante. Notre équipe gère l'ensemble du cycle de vie, de la conception et du prototypage au développement, au déploiement cloud et à la maintenance.",
    },
    iconName: "Code2",
    technologies: ["Node.js", "TypeScript", "Python", "Go", "Docker", "AWS", "PostgreSQL"],
    features: [
      {
        en: "Enterprise API Integrations",
        fr: "Intégrations d'API d'entreprise",
      },
      {
        en: "Cloud-Native Microservices",
        fr: "Microservices natifs du cloud",
      },
      {
        en: "Legacy System Migration",
        fr: "Migration de systèmes existants",
      },
      {
        en: "Database Optimization & Scaling",
        fr: "Optimisation et mise à l'échelle de bases de données",
      },
    ],
  },
  {
    id: "web-dev",
    slug: "web-development",
    title: {
      en: "Web Development",
      fr: "Développement Web",
    },
    shortDescription: {
      en: "High-performance, secure, and SEO-optimized corporate websites and web portals built on modern frameworks.",
      fr: "Des sites web d'entreprise et des portails web performants, sécurisés et optimisés pour le SEO à l'aide de frameworks modernes.",
    },
    longDescription: {
      en: "We create responsive, fast-loading, and visually stunning corporate websites and web applications. Utilizing modern tools like Next.js, we build platforms optimized for user experience, accessibility, and search engine visibility.",
      fr: "Nous créons des sites web d'entreprise et des applications web réactifs, rapides à charger et visuellement superbes. En utilisant des outils modernes comme Next.js, nous construisons des plateformes optimisées pour l'expérience utilisateur, l'accessibilité et la visibilité sur les moteurs de recherche.",
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
    id: "mobile-dev",
    slug: "mobile-app-development",
    title: {
      en: "Mobile App Development",
      fr: "Développement Mobile",
    },
    shortDescription: {
      en: "Intuitive, high-performance native and cross-platform mobile apps for iOS and Android devices.",
      fr: "Des applications mobiles natives et multiplateformes intuitives et performantes pour terminaux iOS et Android.",
    },
    longDescription: {
      en: "Extend your business reach with top-tier mobile applications. We build native iOS and Android apps, as well as cross-platform React Native solutions, ensuring rapid development cycles without compromising on performance or design.",
      fr: "Élargissez la portée de votre entreprise avec des applications mobiles haut de gamme. Nous construisons des applications iOS et Android natives, ainsi que des solutions multiplateformes React Native, garantissant des cycles de développement rapides sans compromis sur la performance ou le design.",
    },
    iconName: "Smartphone",
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "App Store / Play Store"],
    features: [
      {
        en: "Cross-Platform Optimization",
        fr: "Optimisation multiplateforme",
      },
      {
        en: "Push Notification Systems",
        fr: "Systèmes de notification push",
      },
      {
        en: "Offline Data Synchronization",
        fr: "Synchronisation des données hors ligne",
      },
      {
        en: "Secure Biometric Authentication",
        fr: "Authentification biométrique sécurisée",
      },
    ],
  },
  {
    id: "uiux-design",
    slug: "ui-ux-design",
    title: {
      en: "UI/UX Design",
      fr: "Design UI/UX",
    },
    shortDescription: {
      en: "User-centric research and beautiful interface design that maximizes engagement and user satisfaction.",
      fr: "Une recherche centrée sur l'utilisateur et des interfaces épurées pour maximiser l'engagement et la satisfaction de vos usagers.",
    },
    longDescription: {
      en: "We bridge the gap between complex functionality and beautiful, simple design. Through extensive user research, wireframing, and interactive prototyping, we map out digital products that feel natural to use.",
      fr: "Nous comblons le fossé entre des fonctionnalités complexes et un design beau et simple. Grâce à une recherche utilisateur approfondie, des fil de fer (wireframes) et des prototypes interactifs, nous concevons des produits numériques naturels à utiliser.",
    },
    iconName: "Palette",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    features: [
      {
        en: "User Journey Mapping",
        fr: "Cartographie du parcours utilisateur",
      },
      {
        en: "Interactive Wireframes & Prototypes",
        fr: "Fils de fer et prototypes interactifs",
      },
      {
        en: "Accessibility (WCAG) Compliance",
        fr: "Conformité à l'accessibilité (WCAG)",
      },
      {
        en: "Visual Design Systems",
        fr: "Systèmes de conception visuelle (Design Systems)",
      },
    ],
  },
  {
    id: "branding",
    slug: "graphic-design-branding",
    title: {
      en: "Graphic Design & Branding",
      fr: "Design Graphique & Image de Marque",
    },
    shortDescription: {
      en: "Creating impactful brand identities, logos, and visual assets that resonate with your target audience.",
      fr: "Création d'identités de marque percutantes, logos et chartes graphiques en harmonie avec votre public cible.",
    },
    longDescription: {
      en: "Establish a strong, recognizable brand identity. From emblem logo design and color palettes to typography rules and sales collateral, we translate your values into a cohesive visual style that builds trust.",
      fr: "Établissez une identité de marque forte et reconnaissable. De la conception du logo et des palettes de couleurs aux règles de typographie et aux supports commerciaux, nous traduisons vos valeurs en un style visuel cohérent qui renforce la confiance.",
    },
    iconName: "Layers",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Vector Art", "Brand Guidelines"],
    features: [
      {
        en: "Logo Design & Brand Identity",
        fr: "Conception de logo et identité de marque",
      },
      {
        en: "Style Guides & Typography Assets",
        fr: "Guides de style et actifs typographiques",
      },
      {
        en: "Marketing Collateral & Print Design",
        fr: "Supports marketing et conception pour impression",
      },
      {
        en: "Digital Asset Packages",
        fr: "Packs de ressources numériques",
      },
    ],
  },
  {
    id: "marketing",
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
        en: "Keyword Research & Content Mapping",
        fr: "Recherche de mots-clés et cartographie de contenu",
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
        en: "Monthly Analytics & Lead Reporting",
        fr: "Analyses mensuelles et rapports sur les prospects",
      },
    ],
  },
];
