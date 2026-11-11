import { permanentRedirect } from "next/navigation";

interface AISolutionDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function AISolutionDetailPage({ params }: AISolutionDetailPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
