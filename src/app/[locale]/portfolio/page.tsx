import { permanentRedirect } from "next/navigation";

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/solutions/odoo`);
}
