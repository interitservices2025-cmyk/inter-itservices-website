import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Jean-François Caron",
    role: {
      en: "General Manager",
      fr: "Directeur Général",
    },
    company: "QC Entretien Services",
    text: {
      en: "INTER-IT SERVICES INC developed our professional portal and designed our visual identity from scratch. Thanks to their interactive quote form and local SEO, our cleaning requests in Brampton and Ontario doubled in just a few months.",
      fr: "INTER-IT SERVICES INC a développé notre portail professionnel et conçu notre identité visuelle de A à Z. Grâce à leur formulaire de devis interactif et au SEO local, nos demandes de nettoyage à Brampton et dans l'Ontario ont doublé en quelques mois.",
    },
  },
  {
    id: "test-2",
    name: "Marc-André Roy",
    role: {
      en: "Founder & Owner",
      fr: "Fondateur & Propriétaire",
    },
    company: "Triréno",
    text: {
      en: "We needed a high-end online portfolio and professional printed brochures for our clients. The INTER-IT SERVICES team delivered outstanding work combining custom Next.js web development and high-quality printed materials.",
      fr: "Nous avions besoin d'un portfolio en ligne haut de gamme et de brochures imprimées professionnelles pour nos clients. L'équipe d'INTER-IT SERVICES a livré un travail exceptionnel combinant développement web sur mesure Next.js et supports imprimés de grande qualité.",
    },
  },
];

