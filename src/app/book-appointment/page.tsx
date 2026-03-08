import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book Appointment | JAC",
  description:
    "Schedule a 30-minute consultation to discuss your project needs.",
};

export default function BookAppointmentPage() {
  return <BookingForm />;
}
