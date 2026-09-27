import { BookingForm } from "@/components/sections/BookingForm";
export const metadata = { title: "Book a ride" };
export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ bike?: string }>;
}) {
  const { bike } = await searchParams;
  return <BookingForm key={bike ?? "default"} initialBike={bike} />;
}
