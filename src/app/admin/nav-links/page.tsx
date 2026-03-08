"use client";

import React, { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface NavLink {
  id: string;
  label: string;
  href: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "label", label: "Link Label", type: "text" as const, required: true },
  { name: "href", label: "Link URL", type: "text" as const, required: true, placeholder: "/about" },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns: { key: string; label: string; render?: (item: NavLink) => React.ReactNode }[] = [
  { key: "label", label: "Label" },
  { key: "href", label: "URL" },
  { key: "order", label: "Order" },
  {
    key: "published",
    label: "Status",
    render: (item: NavLink) => (
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          item.published
            ? "bg-green-500/20 text-green-400"
            : "bg-gray-500/20 text-gray-400"
        }`}
      >
        {item.published ? "Published" : "Draft"}
      </span>
    ),
  },
];

export default function AdminNavLinks() {
  const [links, setLinks] = useState<NavLink[]>([]);

  const fetchLinks = useCallback(async () => {
    const res = await fetch("/api/admin/nav-links");
    const data = await res.json();
    setLinks(data);
  }, []);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  const handleSave = async (item: Partial<NavLink>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/nav-links/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/nav-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchLinks();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/nav-links/${id}`, { method: "DELETE" });
    fetchLinks();
  };

  return (
    <AdminCrud
      title="Navigation Links"
      columns={columns}
      items={links}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ label: "", href: "/", order: 0, published: true })}
    />
  );
}
