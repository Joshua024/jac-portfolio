"use client";

import { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
  order: number;
}

const formFields = [
  { name: "name", label: "Name", type: "text" as const, required: true },
  {
    name: "category",
    label: "Category",
    type: "select" as const,
    options: [
      { value: "frontend", label: "Frontend" },
      { value: "backend", label: "Backend" },
      { value: "design", label: "Design" },
      { value: "tools", label: "Tools" },
    ],
  },
  { name: "level", label: "Level (0-100)", type: "number" as const },
  { name: "icon", label: "Icon", type: "text" as const },
  { name: "order", label: "Order", type: "number" as const },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "category", label: "Category" },
  {
    key: "level",
    label: "Level",
    render: (item: Skill) => (
      <div className="flex items-center gap-2">
        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${item.level}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">{item.level}%</span>
      </div>
    ),
  },
  { key: "order", label: "Order" },
];

export default function AdminSkillsPage() {
  const [items, setItems] = useState<Skill[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await fetch("/api/admin/skills").then((r) => r.json());
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSave = async (item: Partial<Skill>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/skills/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/skills/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <AdminCrud
      title="Skills"
      columns={columns}
      items={items}
      onSave={handleSave}
      onDelete={handleDelete}
      formFields={formFields}
      getFormDefaults={() => ({ level: 80, order: 0, category: "frontend" })}
    />
  );
}
