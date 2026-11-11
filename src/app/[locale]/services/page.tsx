import { permanentRedirect } from "next/navigation";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
