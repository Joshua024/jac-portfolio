"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string;
  status: string;
  year: string;
  client: string;
  duration: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  details: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "title", label: "Title", type: "text" as const, required: true },
  { name: "slug", label: "Slug", type: "text" as const, required: true },
  { name: "category", label: "Category", type: "text" as const },
  { name: "description", label: "Description", type: "textarea" as const },
  { name: "tags", label: "Tags (JSON array)", type: "textarea" as const, placeholder: '["React", "TypeScript"]' },
  {
    name: "status",
    label: "Status",
    type: "select" as const,
    options: [
      { value: "completed", label: "Completed" },
      { value: "in-progress", label: "In Progress" },
      { value: "planned", label: "Planned" },
    ],
  },
  { name: "year", label: "Year", type: "text" as const },
  { name: "client", label: "Client", type: "text" as const },
  { name: "duration", label: "Duration", type: "text" as const },
  { name: "image", label: "Image URL", type: "text" as const },
  { name: "liveUrl", label: "Live URL", type: "text" as const },
  { name: "githubUrl", label: "GitHub URL", type: "text" as const },
  { name: "details", label: "Details (JSON)", type: "textarea" as const },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "status", label: "Status" },
  {
    key: "published",
    label: "Published",
    render: (item: Project) => (
      <span
        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
          item.published
            ? "bg-green-500/10 text-green-400"
            : "bg-gray-500/10 text-gray-400"
        }`}
      >
        {item.published ? "Yes" : "No"}
      </span>
    ),
  },
];

export default function AdminProjectsPage() {
  const [items, setItems] = useState<Project[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/projects").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<Project>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Projects"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ published: true, order: 0, status: "completed" })}
    />
  );
}
