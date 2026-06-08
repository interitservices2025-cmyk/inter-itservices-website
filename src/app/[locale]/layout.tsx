import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = locale === "fr" ? "https://inter-itservices.ca/fr" : "https://inter-itservices.ca/en";
  const alternates = {
    canonical,
    languages: {
      "en-CA": "https://inter-itservices.ca/en",
      "fr-CA": "https://inter-itservices.ca/fr",
    },
  };

  if (locale === "fr") {
    return {
      title: "INTER-IT SERVICES INC | Intelligence Artificielle & Solutions Web",
      description:
        "Solutions technologiques sur mesure au Canada et à l'international (siège à Brampton, Ontario). Web development, design graphique & print, formations professionnelles et logiciels SaaS.",
      alternates,
    };
  }
  return {
    title: "INTER-IT SERVICES INC | Artificial Intelligence & Web Solutions",
    description:
      "Tailored technology solutions in Canada and internationally (headquartered in Brampton, Ontario). Web development, graphic design & print, training workshops, and SaaS products.",
    alternates,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "INTER-IT SERVICES INC",
    "image": "https://inter-itservices.ca/images/logo/Logo%202.svg",
    "@id": "https://inter-itservices.ca/#organization",
    "url": "https://inter-itservices.ca",
    "telephone": "(647) 638-4583",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brampton",
      "addressRegion": "ON",
      "addressCountry": "CA"
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiasedScroll`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
        <Header locale={locale} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
