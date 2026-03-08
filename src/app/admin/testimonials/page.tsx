"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  page: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "name", label: "Name", type: "text" as const, required: true },
  { name: "role", label: "Role", type: "text" as const },
  { name: "company", label: "Company", type: "text" as const },
  { name: "content", label: "Content", type: "textarea" as const, required: true },
  { name: "rating", label: "Rating (1-5)", type: "number" as const },
  { name: "image", label: "Image", type: "image" as const },
  {
    name: "page",
    label: "Page",
    type: "select" as const,
    options: [
      { value: "home", label: "Home" },
      { value: "services", label: "Services" },
    ],
  },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "company", label: "Company" },
  { key: "page", label: "Page" },
  { key: "rating", label: "Rating" },
  {
    key: "published",
    label: "Status",
    render: (item: Testimonial) => (
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

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/testimonials").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<Testimonial>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/testimonials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Testimonials"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ published: true, order: 0, rating: 5, page: "home" })}
    />
  );
}
