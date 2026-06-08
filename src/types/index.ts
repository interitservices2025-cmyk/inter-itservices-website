export interface LocalizedString {
  en: string;
  fr: string;
}

export interface Service {
  id: string;
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  iconName: string; // Lucide icon identifier
  technologies: string[];
  features: LocalizedString[];
  pillar: "design" | "digital";
}

export interface AISolution {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
  useCases: LocalizedString[];
  benefits: LocalizedString[];
  technologies?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "ai" | "web" | "mobile" | "design" | "marketing";
  clientName: string;
  industry: LocalizedString;
  servicesDelivered: LocalizedString[];
  description: LocalizedString;
  challenges: LocalizedString;
  solutions: LocalizedString;
  technologies: string[];
  imageUrl: string;
  completionDate: string;
}

export interface Course {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  duration: LocalizedString;
  level: LocalizedString;
  topics: LocalizedString[];
  price?: string;
  targetAudience?: LocalizedString;
  skillsAcquired?: LocalizedString[];
  trainingCategory: "ai-communication" | "digital-marketing" | "storytelling-creation";
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedString;
  company: string;
  text: LocalizedString;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  publishedAt: string;
  author: string;
  imageUrl: string;
  readTime: LocalizedString;
  tags: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  benefits: LocalizedString[];
  features: LocalizedString[];
  roadmap: LocalizedString[];
  imageUrl: string;
}
