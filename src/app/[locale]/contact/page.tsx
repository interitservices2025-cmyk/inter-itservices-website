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
  return {
    title: locale === "fr"
      ? "Contactez-nous | INTER-IT SERVICES INC"
      : "Contact Us | INTER-IT SERVICES INC",
    description: locale === "fr"
      ? "Discutez de votre projet de développement web, design, marketing ou logiciel avec nos experts au Canada et à l'international."
      : "Discuss your website development, design, marketing, or software project with our experts across Canada and internationally.",
  };
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-24 pb-16 flex-grow bg-slate-950">
      <ContactSection dict={dict} locale={locale} />
    </div>
  );
}
