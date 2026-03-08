"use client";

import React, { useEffect, useState, useCallback } from "react";
import { AdminCrud } from "@/components/admin/AdminCrud";

interface FooterLogo {
  id: string;
  name: string;
  icon: string;
  published: boolean;
  order: number;
}

const formFields = [
  { name: "name", label: "Logo Name", type: "text" as const, required: true },
  {
    name: "icon",
    label: "Icon (Lucide name)",
    type: "select" as const,
    options: [
      { value: "Globe", label: "Globe" },
      { value: "CreditCard", label: "Credit Card" },
      { value: "Wallet", label: "Wallet" },
      { value: "BadgeDollarSign", label: "Badge Dollar Sign" },
      { value: "Banknote", label: "Banknote" },
      { value: "ShoppingBag", label: "Shopping Bag" },
      { value: "Store", label: "Store" },
      { value: "Landmark", label: "Landmark" },
      { value: "CircleDollarSign", label: "Circle Dollar Sign" },
      { value: "HandCoins", label: "Hand Coins" },
      { value: "Receipt", label: "Receipt" },
      { value: "Coins", label: "Coins" },
      { value: "PiggyBank", label: "Piggy Bank" },
      { value: "Apple", label: "Apple" },
      { value: "Chrome", label: "Chrome" },
      { value: "Figma", label: "Figma" },
      { value: "Github", label: "GitHub" },
      { value: "Code", label: "Code" },
      { value: "Layers", label: "Layers" },
      { value: "Zap", label: "Zap" },
    ],
  },
  { name: "order", label: "Order", type: "number" as const },
  { name: "published", label: "Published", type: "checkbox" as const },
];

const columns: { key: string; label: string; render?: (item: FooterLogo) => React.ReactNode }[] = [
  { key: "name", label: "Name" },
  { key: "icon", label: "Icon" },
  { key: "order", label: "Order" },
  {
    key: "published",
    label: "Status",
    render: (item: FooterLogo) => (
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

export default function AdminFooterLogos() {
  const [logos, setLogos] = useState<FooterLogo[]>([]);

  const fetchLogos = useCallback(async () => {
    const res = await fetch("/api/admin/footer-logos");
    const data = await res.json();
    setLogos(data);
  }, []);

  useEffect(() => {
    fetchLogos();
  }, [fetchLogos]);

  const handleSave = async (item: Partial<FooterLogo>, id?: string) => {
    if (id) {
      await fetch(`/api/admin/footer-logos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } else {
      await fetch("/api/admin/footer-logos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    fetchLogos();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/footer-logos/${id}`, { method: "DELETE" });
    fetchLogos();
  };

  return (
    <AdminCrud<FooterLogo>
      title="Footer Logos"
      items={logos}
      columns={columns}
      formFields={formFields}
      onSave={handleSave}
      onDelete={handleDelete}
      getFormDefaults={() => ({ icon: "Globe", published: true, order: 0 })}
    />
  );
}
