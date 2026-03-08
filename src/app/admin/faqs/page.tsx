"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  page: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "question", label: "Question", type: "text" as const, required: true },
  { name: "answer", label: "Answer", type: "textarea" as const, required: true },
  {
    name: "page",
    label: "Page",
    type: "select" as const,
    options: [
      { value: "services", label: "Services" },
      { value: "contact", label: "Contact" },
    ],
  },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns = [
  {
    key: "question",
    label: "Question",
    render: (item: FAQ) => (
      <span className="max-w-xs truncate block">{item.question}</span>
    ),
  },
  { key: "page", label: "Page" },
  { key: "order", label: "Order" },
  {
    key: "published",
    label: "Status",
    render: (item: FAQ) => (
      <span
        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
          item.published
            ? "bg-green-500/10 text-green-400"
            : "bg-gray-500/10 text-gray-400"
        }`}
      >
        {item.published ? "Active" : "Hidden"}
      </span>
    ),
  },
];

export default function AdminFAQsPage() {
  const [items, setItems] = useState<FAQ[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/faqs").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<FAQ>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/faqs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/faqs/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="FAQs"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ published: true, order: 0, page: "services" })}
    />
  );
}
