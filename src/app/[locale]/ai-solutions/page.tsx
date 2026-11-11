import { permanentRedirect } from "next/navigation";

interface AISolutionsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AISolutionsPage({ params }: AISolutionsPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
