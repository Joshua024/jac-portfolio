"use client";

import { useState } from "react";
import { CalendarDays, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingForm({ timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"] }: { timeSlots?: string[] }) {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedSlot) return;
    try {
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          date,
          time: selectedSlot,
          service: "Consultation",
          message: details,
        }),
      });
    } catch {}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-10 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-2">
            Your consultation has been scheduled for{" "}
            <span className="font-semibold">{date}</span> at{" "}
            <span className="font-semibold">{selectedSlot}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            You&apos;ll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-xl hover:bg-[#2563EB] transition-colors"
          >
            Back to Contact
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 pb-0">
          <h1 className="text-2xl font-bold text-gray-900">
            Schedule a consultation
          </h1>
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <hr className="border-gray-200 mx-6 md:mx-8 mt-4" />

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          {/* Select Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Select Date
            </label>
            <div className="relative">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all appearance-none"
              />
              <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Available Time Slots */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Available Time Slots
            </label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-xl text-sm font-medium border transition-colors ${
                    selectedSlot === slot
                      ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Name + Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Project Details
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 resize-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-dark transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
