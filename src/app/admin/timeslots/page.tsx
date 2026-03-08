"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  order: number;
}

const formFields = [
  { name: "time", label: "Time", type: "text" as const, required: true, placeholder: "9:00 AM" },
  { name: "available", label: "Available", type: "checkbox" as const },
  { name: "order", label: "Order", type: "number" as const },
];

const columns = [
  { key: "time", label: "Time" },
  {
    key: "available",
    label: "Available",
    render: (item: TimeSlot) => (
      <span
        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
          item.available
            ? "bg-green-500/10 text-green-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {item.available ? "Available" : "Unavailable"}
      </span>
    ),
  },
  { key: "order", label: "Order" },
];

export default function AdminTimeSlotsPage() {
  const [items, setItems] = useState<TimeSlot[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/timeslots").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<TimeSlot>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/timeslots/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/timeslots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/timeslots/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Time Slots"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ available: true, order: 0 })}
    />
  );
}
