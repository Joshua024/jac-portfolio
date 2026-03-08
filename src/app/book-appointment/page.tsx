import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import { getTimeSlots } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Appointment | JAC",
  description:
    "Schedule a 30-minute consultation to discuss your project needs.",
};

export default async function BookAppointmentPage() {
  const slots = await getTimeSlots();
  const timeSlots = slots.map((s) => s.time);

  return <BookingForm timeSlots={timeSlots} />;
}
