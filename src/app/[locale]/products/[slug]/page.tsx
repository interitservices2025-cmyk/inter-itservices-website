import { permanentRedirect } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
