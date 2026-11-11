import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import ContactSection from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const url = `https://inter-itservices.ca/${locale}/contact`;

  return {
    title: isFr
      ? "Nous contacter | Consultation Odoo & Solutions | INTER-IT SERVICES INC"
      : "Contact Us | Odoo Consultation & Solutions | INTER-IT SERVICES INC",
    description: isFr
      ? "Vous souhaitez centraliser la gestion de votre entreprise avec Odoo ou obtenir des informations sur nos futurs produits ? Échangeons sur votre besoin."
      : "Looking to centralize your business management with Odoo or learn more about our upcoming products? Let's discuss your needs.",
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": "https://inter-itservices.ca/fr/contact",
        "en-CA": "https://inter-itservices.ca/en/contact",
      },
    },
    openGraph: {
      title: isFr
        ? "Nous contacter | INTER-IT SERVICES INC"
        : "Contact Us | INTER-IT SERVICES INC",
      description: isFr
        ? "Vous souhaitez centraliser la gestion de votre entreprise avec Odoo ou obtenir des informations sur nos futurs produits ? Échangeons sur votre besoin."
        : "Looking to centralize your business management with Odoo or learn more about our upcoming products? Let's discuss your needs.",
      url,
      siteName: "INTER-IT SERVICES INC",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
    },
  };
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-24 pb-16 flex-grow bg-white">
      <ContactSection dict={dict} locale={locale} />
    </div>
  );
}
