import { permanentRedirect } from "next/navigation";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
