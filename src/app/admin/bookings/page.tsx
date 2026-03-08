"use client";

import { useEffect, useState, useCallback } from "react";
import { Trash2, Eye, X } from "lucide-react";

interface Booking {
  id: string;
  fullName: string;
  email: string;
  date: string;
  timeSlot: string;
  details: string;
  status: string;
  createdAt: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selected, setSelected] = useState<Booking | null>(null);

  const fetchBookings = useCallback(async () => {
    const data = await fetch("/api/admin/bookings").then((r) => r.json());
    setBookings(data);
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchBookings();
  };

  const deleteBooking = async (id: string) => {
    if (!confirm("Delete this booking?")) return;
    await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
    setSelected(null);
    fetchBookings();
  };

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-400",
    confirmed: "bg-green-500/10 text-green-400",
    cancelled: "bg-red-500/10 text-red-400",
    completed: "bg-blue-500/10 text-blue-400",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Bookings</h1>

      {selected && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              Booking Details
            </h2>
            <button
              onClick={() => setSelected(null)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Name:</span>
              <p className="text-white">{selected.fullName}</p>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>
              <p className="text-white">{selected.email}</p>
            </div>
            <div>
              <span className="text-gray-400">Service:</span>
              <p className="text-white">Consultation</p>
            </div>
            <div>
              <span className="text-gray-400">Date & Time:</span>
              <p className="text-white">
                {selected.date} at {selected.timeSlot}
              </p>
            </div>
            {selected.details && (
              <div className="md:col-span-2">
                <span className="text-gray-400">Details:</span>
                <p className="text-white">{selected.details}</p>
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            {["pending", "confirmed", "completed", "cancelled"].map((s) => (
              <button
                key={s}
                onClick={() => updateStatus(selected.id, s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                  selected.status === s
                    ? "bg-primary text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Name
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Service
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Date
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Status
              </th>
              <th className="text-right text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {bookings.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-gray-400 text-sm"
                >
                  No bookings yet
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-gray-300">{b.fullName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    Consultation
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {b.date} {b.timeSlot}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                        statusColors[b.status] || statusColors.pending
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelected(b)}
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
