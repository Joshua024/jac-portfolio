"use client";

import React, { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Company {
  id: string;
  name: string;
  icon: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "name", label: "Company Name", type: "text" as const, required: true },
  {
    name: "icon",
    label: "Icon (Lucide name)",
    type: "select" as const,
    options: [
      { value: "Globe", label: "Globe" },
      { value: "ShoppingBag", label: "Shopping Bag" },
      { value: "Film", label: "Film" },
      { value: "Music", label: "Music" },
      { value: "Cpu", label: "CPU" },
      { value: "Cloud", label: "Cloud" },
      { value: "Smartphone", label: "Smartphone" },
      { value: "Zap", label: "Zap" },
      { value: "Layers", label: "Layers" },
      { value: "Code", label: "Code" },
    ],
  },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns: { key: string; label: string; render?: (item: Company) => React.ReactNode }[] = [
  { key: "name", label: "Company" },
  { key: "icon", label: "Icon" },
  { key: "order", label: "Order" },
  {
    key: "published",
    label: "Status",
    render: (item: Company) => (
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

export default function AdminCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);

  const fetchCompanies = useCallback(async () => {
    const res = await fetch("/api/admin/companies");
    const data = await res.json();
    setCompanies(data);
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const handleSave = async (item: Partial<Company>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/companies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchCompanies();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/companies/${id}`, { method: "DELETE" });
    fetchCompanies();
  };

  return (
    <AdminCrud<Company>
      title="Trusted Companies"
      items={companies}
      columns={columns}
      formFields={formFields}
      onSave={handleSave}
      onDelete={handleDelete}
      getFormDefaults={() => ({ icon: "Globe", published: true, order: 0 })}
    />
  );
}
