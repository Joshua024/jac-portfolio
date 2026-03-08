"use client";

import { useEffect, useState, useCallback } from "react";
import { Save, ChevronDown, ChevronRight } from "lucide-react";

interface PageContent {
  id: string;
  page: string;
  section: string;
  key: string;
  value: string;
  order: number;
}

const PAGES = [
  "home",
  "about",
  "services",
  "projects",
  "blog",
  "contact",
  "booking",
];

export default function AdminPagesPage() {
  const [contents, setContents] = useState<PageContent[]>([]);
  const [activePage, setActivePage] = useState("home");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [edited, setEdited] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchContents = useCallback(async () => {
    const data = await fetch(
      `/api/admin/pages?page=${activePage}`
    ).then((r) => r.json());
    setContents(data);
    setEdited({});
  }, [activePage]);

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const groupedBySection = contents.reduce(
    (acc, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    },
    {} as Record<string, PageContent[]>
  );

  const toggleSection = (section: string) => {
    const next = new Set(expandedSections);
    if (next.has(section)) next.delete(section);
    else next.add(section);
    setExpandedSections(next);
  };

  const handleChange = (id: string, value: string) => {
    setEdited({ ...edited, [id]: value });
  };

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);

    const updates = Object.entries(edited).map(([id, value]) => {
      const item = contents.find((c) => c.id === id)!;
      return { page: item.page, section: item.section, key: item.key, value };
    });

    if (updates.length > 0) {
      await fetch("/api/admin/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: updates }),
      });
    }

    setSaving(false);
    setSaved(true);
    setEdited({});
    fetchContents();
    setTimeout(() => setSaved(false), 3000);
  };

  const hasChanges = Object.keys(edited).length > 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Page Content</h1>
        {hasChanges && (
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            <Save size={16} />
            {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
          </button>
        )}
      </div>

      {/* Page tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PAGES.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              activePage === page
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {Object.entries(groupedBySection).map(([section, items]) => {
          const isExpanded = expandedSections.has(section);
          return (
            <div
              key={section}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
              >
                <span className="text-sm font-semibold text-white capitalize">
                  {section.replace(/-/g, " ")}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {items.length} field{items.length !== 1 ? "s" : ""}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 space-y-4 border-t border-gray-700 pt-4">
                  {items
                    .sort((a, b) => a.order - b.order)
                    .map((item) => {
                      const currentValue =
                        edited[item.id] !== undefined
                          ? edited[item.id]
                          : item.value;
                      const isLong = currentValue.length > 100;

                      return (
                        <div key={item.id}>
                          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                            {item.key.replace(/-/g, " ")}
                          </label>
                          {isLong ? (
                            <textarea
                              value={currentValue}
                              onChange={(e) =>
                                handleChange(item.id, e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                            />
                          ) : (
                            <input
                              type="text"
                              value={currentValue}
                              onChange={(e) =>
                                handleChange(item.id, e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}

        {Object.keys(groupedBySection).length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No content found for this page. Content will appear here once added
            to the database.
          </div>
        )}
      </div>
    </div>
  );
}
