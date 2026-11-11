import { permanentRedirect } from "next/navigation";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  if (slug === "odoo" || slug === "odoo-implementation") {
    permanentRedirect(`/${locale}/solutions/odoo`);
  }
  permanentRedirect(`/${locale}/#solutions`);
}
