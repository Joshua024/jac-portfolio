"use client";

import { useEffect, useState, useCallback } from "react";
import { Save } from "lucide-react";

interface Settings {
  id: string;
  siteName: string;
  siteTagline: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  linkedIn: string;
  github: string;
  twitter: string;
  instagram: string;
}

const fields = [
  { name: "siteName", label: "Site Name" },
  { name: "siteTagline", label: "Site Tagline" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone" },
  { name: "address", label: "Address" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "country", label: "Country" },
  { name: "zipCode", label: "Zip Code" },
  { name: "linkedIn", label: "LinkedIn URL" },
  { name: "github", label: "GitHub URL" },
  { name: "twitter", label: "Twitter URL" },
  { name: "instagram", label: "Instagram URL" },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchSettings = useCallback(async () => {
    const data = await fetch("/api/admin/settings").then((r) => r.json());
    setSettings(data);
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const handleSave = async () => {
    if (!settings) return;
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!settings) {
    return (
      <div className="text-gray-400 text-center py-12">Loading settings...</div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          <Save size={16} />
          {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                {field.label}
              </label>
              <input
                type="text"
                value={
                  (settings[field.name as keyof Settings] as string) || ""
                }
                onChange={(e) =>
                  setSettings({ ...settings, [field.name]: e.target.value })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
