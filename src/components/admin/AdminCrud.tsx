"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X, Save, Search } from "lucide-react";
import { ImagePicker } from "@/components/admin/ImagePicker";

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface AdminCrudProps<T extends { id: string }> {
  title: string;
  columns: Column<T>[];
  items: T[];
  onSave: (item: Partial<T>, id?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  formFields: FormField[];
  getFormDefaults?: () => Record<string, unknown>;
}

interface FormField {
  name: string;
  label: string;
  type: "text" | "number" | "textarea" | "select" | "checkbox" | "image";
  options?: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
}

export function AdminCrud<T extends { id: string }>({
  title,
  columns,
  items,
  onSave,
  onDelete,
  formFields,
  getFormDefaults,
}: AdminCrudProps<T>) {
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const handleCreate = () => {
    setCreating(true);
    setEditing(null);
    setFormData(getFormDefaults?.() ?? {});
  };

  const handleEdit = (item: T) => {
    setEditing(item.id);
    setCreating(false);
    setFormData(item as unknown as Record<string, unknown>);
  };

  const handleCancel = () => {
    setEditing(null);
    setCreating(false);
    setFormData({});
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(formData as Partial<T>, editing || undefined);
      handleCancel();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    await onDelete(id);
  };

  const filteredItems = items.filter((item) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return Object.values(item as Record<string, unknown>).some(
      (val) =>
        typeof val === "string" && val.toLowerCase().includes(searchLower)
    );
  });

  const showForm = creating || editing;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Add New
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              {creating ? "Create New" : "Edit"}
            </h2>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields.map((field) => (
              <div
                key={field.name}
                className={field.type === "textarea" ? "md:col-span-2" : ""}
              >
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  {field.label}
                  {field.required && (
                    <span className="text-red-400 ml-1">*</span>
                  )}
                </label>
                {field.type === "image" ? (
                  <ImagePicker
                    value={(formData[field.name] as string) || ""}
                    onChange={(url) =>
                      setFormData({ ...formData, [field.name]: url })
                    }
                  />
                ) : field.type === "textarea" ? (
                  <textarea
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm min-h-[100px]"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  >
                    <option value="">Select...</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    checked={(formData[field.name] as boolean) || false}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.checked,
                      })
                    }
                    className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary"
                  />
                ) : field.type === "number" ? (
                  <input
                    type="number"
                    value={(formData[field.name] as number) ?? ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]:
                          e.target.value === ""
                            ? ""
                            : parseInt(e.target.value),
                      })
                    }
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                ) : (
                  <input
                    type="text"
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              <Save size={16} />
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-4 py-8 text-center text-gray-400 text-sm"
                  >
                    No items found
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-4 py-3 text-sm text-gray-300"
                      >
                        {col.render
                          ? col.render(item)
                          : String(
                              (item as unknown as Record<string, unknown>)[
                                col.key
                              ] ?? ""
                            )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                          title="Edit"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
