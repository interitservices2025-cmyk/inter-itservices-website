import { permanentRedirect } from "next/navigation";

interface CourseDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/#solutions`);
}
