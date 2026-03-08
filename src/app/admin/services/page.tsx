"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  highlights: string;
  deliverables: string;
  process: string;
  tools: string;
  pricing: string;
  faqs: string;
  order: number;
  published: boolean;
}

const formFields = [
  { name: "title", label: "Title", type: "text" as const, required: true },
  { name: "slug", label: "Slug", type: "text" as const, required: true },
  { name: "subtitle", label: "Subtitle", type: "text" as const },
  { name: "icon", label: "Icon", type: "text" as const },
  {
    name: "description",
    label: "Description",
    type: "textarea" as const,
  },
  {
    name: "highlights",
    label: "Highlights (JSON array)",
    type: "textarea" as const,
    placeholder: '["item1", "item2"]',
  },
  {
    name: "deliverables",
    label: "Deliverables (JSON array)",
    type: "textarea" as const,
    placeholder: '["item1", "item2"]',
  },
  {
    name: "process",
    label: "Process (JSON array)",
    type: "textarea" as const,
    placeholder: '[{"title": "Step 1", "description": "..."}]',
  },
  {
    name: "tools",
    label: "Tools (JSON array)",
    type: "textarea" as const,
    placeholder: '["React", "Node.js"]',
  },
  {
    name: "pricing",
    label: "Pricing (JSON object)",
    type: "textarea" as const,
    placeholder: '{"starting": "$500"}',
  },
  {
    name: "faqs",
    label: "FAQs (JSON array)",
    type: "textarea" as const,
    placeholder: '[{"q": "Question?", "a": "Answer."}]',
  },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns = [
  { key: "title", label: "Title" },
  { key: "slug", label: "Slug" },
  {
    key: "published",
    label: "Status",
    render: (item: Service) => (
      <span
        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
          item.published
            ? "bg-green-500/10 text-green-400"
            : "bg-gray-500/10 text-gray-400"
        }`}
      >
        {item.published ? "Published" : "Draft"}
      </span>
    ),
  },
  { key: "order", label: "Order" },
];

export default function AdminServicesPage() {
  const [items, setItems] = useState<Service[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/services").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<Service>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Services"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ published: true, order: 0 })}
    />
  );
}
