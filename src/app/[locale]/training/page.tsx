import { permanentRedirect } from "next/navigation";

interface TrainingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
