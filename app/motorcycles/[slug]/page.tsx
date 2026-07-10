import { notFound } from "next/navigation";
import { motorcycles } from "@/lib/motorcycles-data";
import MotorcycleDetailClient from "@/components/sections/MotorcycleDetailClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MotorcycleDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const motorcycle = motorcycles.find((item) => item.slug === slug);

  if (!motorcycle) {
    notFound();
  }

  return <MotorcycleDetailClient motorcycle={motorcycle} />;
}
