import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: {
      en: "VP of Operations",
      fr: "Vice-président des opérations",
    },
    company: "Ontario Logistics Group",
    text: {
      en: "INTER-IT SERVICES INC transformed our document retrieval process. The custom AI knowledge base saves our logistics coordinators hours of research every single day. Their proximity in Brampton made collaboration seamless.",
      fr: "INTER-IT SERVICES INC a transformé notre processus de recherche documentaire. La base de connaissances IA sur mesure fait gagner des heures de recherche à nos coordinateurs logistiques chaque jour. Leur proximité à Brampton a rendu la collaboration très fluide.",
    },
  },
  {
    id: "test-2",
    name: "Sarah Tremblay",
    role: {
      en: "Founder & CEO",
      fr: "Fondatrice & Directrice Générale",
    },
    company: "FinTrack Portal Client",
    text: {
      en: "The team delivered an outstanding web portal that exceeded our standards. Speed and accessibility were key, and they achieved perfect scores. Highly recommended for custom web development.",
      fr: "L'équipe a livré un portail web exceptionnel qui a dépassé nos attentes. La vitesse et l'accessibilité étaient essentielles, et ils ont obtenu des scores parfaits. Fortement recommandé pour le développement web sur mesure.",
    },
  },
];
