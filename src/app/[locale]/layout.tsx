import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const canonical = isFr ? "https://inter-itservices.ca/fr" : "https://inter-itservices.ca/en";
  const alternates = {
    canonical,
    languages: {
      "en-CA": "https://inter-itservices.ca/en",
      "fr-CA": "https://inter-itservices.ca/fr",
    },
  };

  if (isFr) {
    return {
      title: "INTER-IT SERVICES INC | Implémentation Odoo & Solutions Logicielles",
      description:
        "INTER-IT Services accompagne les entreprises dans l'implémentation d'Odoo pour centraliser leurs opérations et développe App Simulation Profil, sa plateforme propriétaire d'évaluation de profils par IA.",
      alternates,
      openGraph: {
        title: "INTER-IT SERVICES INC | Implémentation Odoo & Solutions Logicielles",
        description:
          "Accompagnement à l'implémentation Odoo pour les entreprises et développement de solutions logicielles propriétaires (App Simulation Profil).",
        url: canonical,
        siteName: "INTER-IT SERVICES INC",
        locale: "fr_CA",
        type: "website",
      },
    };
  }
  return {
    title: "INTER-IT SERVICES INC | Odoo Implementation & Software Solutions",
    description:
      "INTER-IT Services supports businesses in deploying Odoo to centralize operations and develops App Simulation Profil, its proprietary AI-powered profile evaluation platform.",
    alternates,
    openGraph: {
      title: "INTER-IT SERVICES INC | Odoo Implementation & Software Solutions",
      description:
        "Odoo implementation support for businesses and development of proprietary software solutions (App Simulation Profil).",
      url: canonical,
      siteName: "INTER-IT SERVICES INC",
      locale: "en_CA",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isFr = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "INTER-IT SERVICES INC",
    "image": "https://inter-itservices.ca/images/logo/Logo%202.svg",
    "@id": "https://inter-itservices.ca/#organization",
    "url": "https://inter-itservices.ca",
    "description": isFr
      ? "INTER-IT Services déploie la solution Odoo pour centraliser la gestion des entreprises et développe ses propres solutions logicielles propriétaires (App Simulation Profil)."
      : "INTER-IT Services deploys Odoo to centralize business management and develops its own proprietary software solutions (App Simulation Profil).",
    "sameAs": [
      "https://www.facebook.com/interitservicesca",
      "https://www.instagram.com/inter.itservices",
      "https://www.linkedin.com/company/inter-it-services-inc"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isFr ? "Solutions INTER-IT Services" : "INTER-IT Services Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation",
            "description": isFr
              ? "Analyse des besoins, paramétrage des modules et accompagnement à la mise en service d'Odoo pour centraliser les opérations de l'entreprise."
              : "Needs analysis, module configuration, and go-live support for Odoo to centralize business operations."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <html
      lang={locale}
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F39200] selection:text-white">
        <Header locale={locale} dict={dict} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
