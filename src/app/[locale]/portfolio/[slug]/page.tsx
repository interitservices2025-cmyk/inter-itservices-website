import { permanentRedirect } from "next/navigation";

interface PortfolioDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/solutions/odoo`);
}
