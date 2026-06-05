import { Project } from "@/types";

export const portfolio: Project[] = [
  {
    id: "qc-entretien-services",
    slug: "qc-entretien-services",
    title: "QC Entretien Services Portal",
    category: "web",
    clientName: "QC Entretien Services",
    industry: {
      en: "Commercial & Residential Cleaning Services",
      fr: "Entretien Ménager Commercial & Résidentiel",
    },
    servicesDelivered: [
      { en: "Website Design", fr: "Design de Site Web" },
      { en: "Website Development", fr: "Développement de Site Web" },
      { en: "Branding & Logo Design", fr: "Branding & Conception de Logo" },
    ],
    description: {
      en: "QC Entretien Services is a premier cleaning company providing commercial and residential cleaning solutions. We established their digital presence from scratch to expand their local clientele and simplify bookings.",
      fr: "QC Entretien Services est une entreprise de nettoyage de premier plan offrant des solutions d'entretien commercial et résidentiel. Nous avons créé leur présence numérique de A à Z pour élargir leur clientèle locale et simplifier les réservations.",
    },
    challenges: {
      en: "The client needed a professional online portal to present their commercial and residential cleaning services, allow clients to request custom quotes online, and establish local brand authority.",
      fr: "Le client avait besoin d'un portail professionnel pour présenter ses services de nettoyage commercial et résidentiel, permettre aux clients de demander des devis en ligne et établir l'autorité de sa marque locale.",
    },
    solutions: {
      en: "We developed a bilingual, responsive website using Next.js and Tailwind CSS. The site features an interactive service selector, optimized contact forms, and a cohesive brand identity including a new logo.",
      fr: "Nous avons développé un site Web bilingue et réactif avec Next.js et Tailwind CSS. Le site comprend un sélecteur de services interactif, des formulaires de contact optimisés et une identité de marque cohérente, y compris un nouveau logo.",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Optimization", "Figma"],
    imageUrl: "/images/portfolio/fintrack.png",
    completionDate: "2025-10",
  },
  {
    id: "trireno",
    slug: "trireno",
    title: "Triréno Portfolio & Print System",
    category: "web",
    clientName: "Triréno",
    industry: {
      en: "Residential Renovation & Construction",
      fr: "Rénovation Résidentielle & Construction",
    },
    servicesDelivered: [
      { en: "Custom Web Development", fr: "Développement Web sur Mesure" },
      { en: "Brand Identity Design", fr: "Design de l'Identité Visuelle" },
      { en: "Print Materials & Signage", fr: "Supports d'Impression & Signalétique" },
    ],
    description: {
      en: "Triréno is a residential renovation contractor specializing in high-end home transformations. We designed their corporate website and physical marketing assets.",
      fr: "Triréno est un entrepreneur en rénovation résidentielle spécialisé dans les transformations de maisons haut de gamme. Nous avons conçu leur site Web d'entreprise et leurs supports marketing physiques.",
    },
    challenges: {
      en: "To build trust in the local market, the client required a visual portfolio to display completed renovation projects, combined with high-quality physical print brochures for prospects.",
      fr: "Pour instaurer la confiance sur le marché local, le client avait besoin d'un portfolio visuel pour afficher ses projets de rénovation terminés, ainsi que de brochures imprimées de haute qualité pour ses prospects.",
    },
    solutions: {
      en: "We delivered a responsive Next.js portfolio website with dynamic galleries. Alongside the digital work, we designed and printed cohesive business cards, brand guidelines, and project folders.",
      fr: "Nous avons livré un site de portfolio réactif en Next.js avec des galeries dynamiques. Parallèlement au travail numérique, nous avons conçu et imprimé des cartes de visite, des chartes graphiques et des dossiers de projet cohérents.",
    },
    technologies: ["Next.js", "Tailwind CSS", "Print Design", "Adobe Illustrator", "Vector Branding"],
    imageUrl: "/images/portfolio/smartrag.png",
    completionDate: "2025-08",
  },
  {
    id: "mmega-sports",
    slug: "mmega-sports",
    title: "Mmega Sports E-commerce Store",
    category: "marketing",
    clientName: "Mmega Sports",
    industry: {
      en: "Sports Equipment & Event Promotion",
      fr: "Équipements de Sport & Promotion d'Événements",
    },
    servicesDelivered: [
      { en: "E-commerce Development", fr: "Développement E-commerce" },
      { en: "Digital Marketing campaigns", fr: "Campagnes de Marketing Numérique" },
      { en: "Graphic Design", fr: "Design Graphique" },
    ],
    description: {
      en: "Mmega Sports distributes professional athletic equipment and manages tournament bookings. We created their online sales portal and led their launch marketing campaign.",
      fr: "Mmega Sports distribue des équipements sportifs professionnels et gère les réservations de tournois. Nous avons créé leur portail de vente en ligne et mené leur campagne de marketing de lancement.",
    },
    challenges: {
      en: "The company needed to transition from offline orders to a unified digital storefront that could process both retail transactions and registrations for athletic workshops.",
      fr: "L'entreprise devait passer des commandes hors ligne à une boutique numérique unifiée capable de traiter à la fois les transactions de vente au détail et les inscriptions à des ateliers sportifs.",
    },
    solutions: {
      en: "We launched a secure e-commerce system with online ticketing. Additionally, we set up local SEO campaigns and Meta Ads targeting sports organizations in Ontario, boosting sales.",
      fr: "Nous avons lancé un système e-commerce sécurisé avec billetterie en ligne. De plus, nous avons mis en place des campagnes de SEO local et de publicité Meta ciblant les organisations sportives de l'Ontario, augmentant les ventes.",
    },
    technologies: ["Next.js", "Tailwind CSS", "Shopify API", "Meta Ads Manager", "Google Analytics"],
    imageUrl: "/images/portfolio/ontariocare.png",
    completionDate: "2025-06",
  },
  {
    id: "inter-solutions-services",
    slug: "inter-solutions-services",
    title: "Inter Solutions Corporate Portal",
    category: "design",
    clientName: "Inter Solutions Services",
    industry: {
      en: "Business Consulting & Professional Services",
      fr: "Conseil aux Entreprises & Services Professionnels",
    },
    servicesDelivered: [
      { en: "Corporate Web Portal", fr: "Portail Web d'Entreprise" },
      { en: "Branding & Logo Design", fr: "Branding & Conception de Logo" },
      { en: "Graphic & Print Design", fr: "Design Graphique & Impression" },
    ],
    description: {
      en: "Inter Solutions Services provides professional business audits and strategic advisory. We designed their secure corporate portal and complete brand assets package.",
      fr: "Inter Solutions Services fournit des audits d'affaires professionnels et des conseils stratégiques. Nous avons conçu leur portail d'entreprise sécurisé et leur ensemble complet d'actifs de marque.",
    },
    challenges: {
      en: "The client wanted a clean visual identity to establish authority in corporate consulting, alongside a portal to deliver audit documents securely to client companies.",
      fr: "Le client souhaitait une identité visuelle épurée pour établir son autorité dans le conseil aux entreprises, ainsi qu'un portail pour transmettre les documents d'audit en toute sécurité aux entreprises clientes.",
    },
    solutions: {
      en: "We created a sleek visual brand identity system and corporate portal. Custom graphics, high-quality brochures, and printed folders were delivered alongside a secure document download area.",
      fr: "Nous avons créé une identité de marque visuelle épurée et un portail d'entreprise. Des graphiques personnalisés, des brochures de haute qualité et des dossiers imprimés ont été livrés avec un espace sécurisé de téléchargement de documents.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Adobe InDesign", "Auth0"],
    imageUrl: "/images/portfolio/smartrag.png",
    completionDate: "2025-03",
  },
];
