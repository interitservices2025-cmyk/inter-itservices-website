import { Service } from "@/types";

export const services: Service[] = [
  // PILLAR A - DESIGN & AUGMENTED CREATIVITY
  {
    id: "visual-identity",
    slug: "visual-identity",
    title: {
      en: "Visual Identity",
      fr: "Identité Visuelle",
    },
    shortDescription: {
      en: "AI-assisted brand creation, premium logo design, color palettes, and comprehensive guidelines.",
      fr: "Création de marque assistée par l'IA, conception de logos, palettes stratégiques et chartes complètes.",
    },
    longDescription: {
      en: "Establish a powerful and recognizable visual presence. Combining AI-assisted creative ideation with expert designer execution, we deliver premium logos, logo variations, typography systems, strategic color palettes, and full brand guidelines designed to build trust.",
      fr: "Établissez une présence visuelle forte et mémorable. Combinant l'idéation créative assistée par l'IA avec le savoir-faire de nos designers, nous concevons des logos haut de gamme, des déclinaisons de logo, des choix typographiques, des palettes de couleurs stratégiques et des chartes graphiques complètes.",
    },
    iconName: "Fingerprint",
    technologies: ["Adobe Illustrator", "Midjourney AI", "Figma", "Typography Systems", "Vector Art"],
    features: [
      {
        en: "AI-Assisted Creative Ideation",
        fr: "Idéation créative assistée par l'IA",
      },
      {
        en: "Logo Design & Variations",
        fr: "Conception de logos & déclinaisons",
      },
      {
        en: "Complete Brand Guidelines",
        fr: "Chartes graphiques complètes",
      },
      {
        en: "Strategic Color Palettes & Typography",
        fr: "Palettes stratégiques & typographie",
      },
    ],
    pillar: "design",
  },
  {
    id: "print-design",
    slug: "print-design",
    title: {
      en: "Print Design",
      fr: "Design Graphique & Impression",
    },
    shortDescription: {
      en: "Premium print-ready marketing materials, brochures, corporate packaging, and professional signage.",
      fr: "Supports marketing prêts à imprimer, brochures corporatives, packaging et signalétique.",
    },
    longDescription: {
      en: "Bridge the digital gap with physical marketing assets designed to impress. We conceptualize and deliver print-ready corporate folders, brochures, flyers, catalogues, posters, annual reports, signage, and product packaging.",
      fr: "Traduisez votre marque sur des supports physiques haut de gamme. Nous concevons et imprimons des dossiers de présentation d'entreprise, des brochures, des flyers, des catalogues, des affiches, des rapports annuels, de la signalétique et des emballages produits.",
    },
    iconName: "Printer",
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Print Preflight", "Packaging Design", "Vector Assets"],
    features: [
      {
        en: "Brochures, Catalogues & Flyers",
        fr: "Brochures, catalogues & flyers",
      },
      {
        en: "Posters & Corporate Annual Reports",
        fr: "Affiches & rapports annuels d'entreprise",
      },
      {
        en: "Signage & Point of Sale Materials",
        fr: "Signalétique & matériel de PLV",
      },
      {
        en: "Product Packaging Design",
        fr: "Conception d'emballages de produits",
      },
    ],
    pillar: "design",
  },
  {
    id: "digital-content-creation",
    slug: "digital-content-creation",
    title: {
      en: "Digital Content Creation",
      fr: "Création de Contenu Numérique",
    },
    shortDescription: {
      en: "Vibrant web banners, social media templates, interactive infographics, and custom motion design.",
      fr: "Bannières web, modèles de réseaux sociaux, infographies interactives et motion design.",
    },
    longDescription: {
      en: "Engage your online audience with beautiful visual content. From web banners and tailored social media visuals to interactive infographics and high-impact motion design, we generate AI-enhanced visual assets that drive engagement.",
      fr: "Captez l'attention de votre public en ligne avec des visuels saisissants. Des bannières web et visuels réseaux sociaux aux infographies interactives et motion design, nous concevons des actifs optimisés par l'IA pour maximiser votre portée.",
    },
    iconName: "Sparkles",
    technologies: ["Adobe Photoshop", "After Effects", "Midjourney AI", "Figma", "Social Templates"],
    features: [
      {
        en: "Web Banners & Ads Visuals",
        fr: "Bannières web & visuels publicitaires",
      },
      {
        en: "Social Media Templates",
        fr: "Modèles pour réseaux sociaux",
      },
      {
        en: "Interactive Infographics",
        fr: "Infographies interactives",
      },
      {
        en: "Motion Design & AI Visual Assets",
        fr: "Motion design & créations visuelles IA",
      },
    ],
    pillar: "design",
  },
  {
    id: "multimedia-production",
    slug: "multimedia-production",
    title: {
      en: "Multimedia Production",
      fr: "Production Multimédia",
    },
    shortDescription: {
      en: "Professional corporate videography, testimonial filming, field reports, and AI-assisted post-production.",
      fr: "Vidéos d'entreprise, témoignages clients, photographies pro et post-production IA.",
    },
    longDescription: {
      en: "Bring your brand story to life. We offer professional photography, corporate video shooting, customer testimonial capture, and high-end video editing combined with advanced AI-assisted post-production for optimal visual polish.",
      fr: "Donnez vie à l'histoire de votre marque. Nous offrons des services de photographie professionnelle, de tournage de vidéos d'entreprise et de témoignages clients, de montage et de post-production optimisés par l'IA.",
    },
    iconName: "Video",
    technologies: ["Premiere Pro", "DaVinci Resolve", "Camera Equipment", "AI Post-Production", "Color Grading"],
    features: [
      {
        en: "Professional Photography",
        fr: "Photographie professionnelle",
      },
      {
        en: "Corporate & Testimonial Videos",
        fr: "Vidéos d'entreprise & témoignages clients",
      },
      {
        en: "Video Editing & AI Post-Production",
        fr: "Montage & post-production assistée par l'IA",
      },
      {
        en: "Field Reports & Case Study Videos",
        fr: "Reportages terrain & études de cas vidéo",
      },
    ],
    pillar: "design",
  },

  // PILLAR B - DIGITAL & WEB "AI-NATIVE"
  {
    id: "website-development",
    slug: "website-development",
    title: {
      en: "Website Development",
      fr: "Développement de Sites Web",
    },
    shortDescription: {
      en: "High-performance corporate portals, custom business websites, e-commerce, and conversion landing pages.",
      fr: "Portails d'affaires, boutiques e-commerce, landing pages et refontes de sites web.",
    },
    longDescription: {
      en: "Build a robust web presence on modern frameworks. We specialize in high-performance corporate websites, customized business portals, secure Shopify/Next.js e-commerce storefronts, and conversion-optimized landing pages with full redesign & modernization services.",
      fr: "Bâtissez un site web d'affaires de classe mondiale. Nous développons des portails corporatifs performants, des boutiques e-commerce robustes en Shopify/Next.js, des landing pages optimisées pour l'action et des projets complets de refonte.",
    },
    iconName: "Globe",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    features: [
      {
        en: "Corporate & Business Websites",
        fr: "Sites d'entreprise & portails d'affaires",
      },
      {
        en: "E-Commerce Systems Integration",
        fr: "Boutiques en ligne & systèmes e-commerce",
      },
      {
        en: "Conversion Landing Pages",
        fr: "Landing pages optimisées pour la conversion",
      },
      {
        en: "Website Redesign & Modernization",
        fr: "Refontes, migrations & modernisation",
      },
    ],
    pillar: "digital",
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: {
      en: "Mobile App Development",
      fr: "Développement Mobile",
    },
    shortDescription: {
      en: "Native iOS & Android applications, cross-platform hybrid apps, PWAs, and predictive monitoring.",
      fr: "Applications natives iOS/Android, applications hybrides, PWAs et maintenance prédictive.",
    },
    longDescription: {
      en: "Deploy state-of-the-art mobile experiences. We develop native iOS and Android apps, cross-platform hybrid solutions (React Native/Flutter), Progressive Web Apps (PWAs), secure API integrations, and predictive performance monitoring.",
      fr: "Déployez des applications mobiles innovantes. Nous concevons des applications natives iOS & Android, des solutions hybrides (React Native, Flutter), des PWA, des intégrations d'API sécurisées et des outils de surveillance de performance.",
    },
    iconName: "Smartphone",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "PWAs", "API Integrations"],
    features: [
      {
        en: "Native iOS & Android Applications",
        fr: "Applications natives iOS & Android",
      },
      {
        en: "Cross-Platform Hybrid Applications",
        fr: "Applications hybrides multiplateformes",
      },
      {
        en: "Progressive Web Apps (PWA)",
        fr: "Progressive Web Apps (PWA)",
      },
      {
        en: "API Integration & Predictive Monitoring",
        fr: "Intégration d'APIs & surveillance prédictive",
      },
    ],
    pillar: "digital",
  },
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    title: {
      en: "UX/UI Design",
      fr: "Design UX/UI",
    },
    shortDescription: {
      en: "Interactive wireframes, user experience mapping, high-fidelity prototypes, and WCAG accessibility.",
      fr: "Prototypes interactifs, parcours utilisateurs, design mobile-first et accessibilité WCAG.",
    },
    longDescription: {
      en: "Design interfaces users love. Our process covers wireframing, high-fidelity interactive prototyping, mobile-first layouts, extensive user testing, customer journey mapping, and full WCAG accessibility compliance (AODA in Ontario).",
      fr: "Concevez des interfaces que vos utilisateurs vont adorer. Notre approche englobe la conception de maquettes (wireframes), le prototypage interactif, des mises en page mobile-first, des tests utilisateurs et la conformité stricte aux critères d'accessibilité WCAG.",
    },
    iconName: "Layout",
    technologies: ["Figma", "Prototyping", "User Journeys", "A/B Testing", "WCAG Compliance"],
    features: [
      {
        en: "Wireframing & High-Fidelity Prototyping",
        fr: "Wireframes & prototypes interactifs haute fidélité",
      },
      {
        en: "Mobile-First & Adaptive Layouts",
        fr: "Design mobile-first & adaptatif",
      },
      {
        en: "User Testing & Journey Optimization",
        fr: "Tests utilisateurs & optimisation des parcours",
      },
      {
        en: "WCAG 2.1 AA Accessibility Standards",
        fr: "Normes d'accessibilité WCAG 2.1 AA",
      },
    ],
    pillar: "digital",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: {
      en: "SEO / SEA & Digital Marketing",
      fr: "Marketing Numérique & SEO",
    },
    shortDescription: {
      en: "Data-driven SEO, Google Ads, local & international optimization, and conversion rate optimization (CRO).",
      fr: "Référencement SEO, Google Ads, optimisation locale & internationale et optimisation de conversion.",
    },
    longDescription: {
      en: "Maximize your business reach. We run local and international search engine optimization campaigns, manage high-performing Google Ads, implement data analytics, and conduct conversion rate optimization (CRO) testing to scale your ROI.",
      fr: "Maximisez la portée commerciale de votre entreprise. Nous gérons vos campagnes de référencement (SEO) local et international, optimisons vos budgets Google Ads et menons des tests d'optimisation des conversions (CRO) pour maximiser votre ROI.",
    },
    iconName: "Megaphone",
    technologies: ["Google Analytics 4", "Google Ads", "SEM/SEO tools", "A/B testing tools", "Local SEO"],
    features: [
      {
        en: "Search Engine Optimization (SEO)",
        fr: "Référencement naturel (SEO)",
      },
      {
        en: "Google Ads (SEA) Campaigns",
        fr: "Campagnes payantes Google Ads (SEA)",
      },
      {
        en: "Local SEO Ontario & Canada",
        fr: "Référencement local (Ontario & Canada)",
      },
      {
        en: "Conversion Optimization & Analytics",
        fr: "Optimisation de conversion & analyses de performance",
      },
    ],
    pillar: "digital",
  },
];
