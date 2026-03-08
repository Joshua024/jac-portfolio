"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  FolderKanban,
  PenSquare,
  Calendar,
  Mail,
  Users,
} from "lucide-react";

interface Stats {
  services: number;
  projects: number;
  articles: number;
  bookings: number;
  contacts: number;
  newsletter: number;
}

const statCards = [
  { key: "services" as const, label: "Services", icon: Briefcase, color: "bg-blue-500" },
  { key: "projects" as const, label: "Projects", icon: FolderKanban, color: "bg-green-500" },
  { key: "articles" as const, label: "Articles", icon: PenSquare, color: "bg-purple-500" },
  { key: "bookings" as const, label: "Bookings", icon: Calendar, color: "bg-orange-500" },
  { key: "contacts" as const, label: "Messages", icon: Mail, color: "bg-red-500" },
  { key: "newsletter" as const, label: "Subscribers", icon: Users, color: "bg-blue-500" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const [services, projects, articles, bookings, contacts, newsletter] =
        await Promise.all([
          fetch("/api/admin/services").then((r) => r.json()),
          fetch("/api/admin/projects").then((r) => r.json()),
          fetch("/api/admin/articles").then((r) => r.json()),
          fetch("/api/admin/bookings").then((r) => r.json()),
          fetch("/api/admin/contacts").then((r) => r.json()),
          fetch("/api/admin/newsletter").then((r) => r.json()),
        ]);

      setStats({
        services: services.length,
        projects: projects.length,
        articles: articles.length,
        bookings: bookings.length,
        contacts: contacts.length,
        newsletter: newsletter.length,
      });
    }

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.key}
              className="bg-gray-800 border border-gray-700 rounded-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{card.label}</p>
                  <p className="text-2xl font-bold text-white">
                    {stats ? stats[card.key] : "—"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "Add Service", href: "/admin/services" },
            { label: "Add Project", href: "/admin/projects" },
            { label: "Write Article", href: "/admin/articles" },
            { label: "Edit Settings", href: "/admin/settings" },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors text-center"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
