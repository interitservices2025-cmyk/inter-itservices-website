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
  if (locale === "fr") {
    return {
      title: "INTER-IT SERVICES INC | Intelligence Artificielle & Développement Logiciel",
      description:
        "Solutions technologiques sur mesure à Brampton, Ontario. Intelligence artificielle, automatisation, développement d'applications mobiles, web et design UI/UX.",
    };
  }
  return {
    title: "INTER-IT SERVICES INC | Artificial Intelligence & Software Development",
    description:
      "Custom technology solutions in Brampton, Ontario. Artificial intelligence, automation, mobile app development, web development, and UI/UX design.",
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

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiasedScroll`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
        <Header locale={locale} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
