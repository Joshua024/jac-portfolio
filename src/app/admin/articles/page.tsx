"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  content: string;
  tags: string;
  published: boolean;
}

const formFields = [
  { name: "title", label: "Title", type: "text" as const, required: true },
  { name: "slug", label: "Slug", type: "text" as const, required: true },
  { name: "excerpt", label: "Excerpt", type: "textarea" as const },
  { name: "category", label: "Category", type: "text" as const },
  { name: "date", label: "Date", type: "text" as const, placeholder: "Jan 15, 2025" },
  { name: "readTime", label: "Read Time (min)", type: "number" as const },
  { name: "image", label: "Image", type: "image" as const },
  { name: "tags", label: "Tags (JSON array)", type: "textarea" as const, placeholder: '["React", "Next.js"]' },
  { name: "content", label: "Content (JSON)", type: "textarea" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "date", label: "Date" },
  {
    key: "published",
    label: "Status",
    render: (item: Article) => (
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
];

export default function AdminArticlesPage() {
  const [items, setItems] = useState<Article[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/articles").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<Article>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Articles"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ published: true, readTime: 5 })}
    />
  );
}
