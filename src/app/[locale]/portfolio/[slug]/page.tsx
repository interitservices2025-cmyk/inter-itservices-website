import { redirect } from "next/navigation";

interface PortfolioDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { locale } = await params;
  redirect(`/${locale}/solutions/odoo`);
}
