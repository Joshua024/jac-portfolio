"use client";

import { useEffect, useState, useCallback } from "react";
import { Trash2, Eye, X, Mail, MailOpen } from "lucide-react";

interface Contact {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);

  const fetchContacts = useCallback(async () => {
    const data = await fetch("/api/admin/contacts").then((r) => r.json());
    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const toggleRead = async (contact: Contact) => {
    const newStatus = contact.status === "unread" ? "read" : "unread";
    await fetch(`/api/admin/contacts/${contact.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchContacts();
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    setSelected(null);
    fetchContacts();
  };

  const viewContact = async (contact: Contact) => {
    setSelected(contact);
    if (contact.status === "unread") {
      await fetch(`/api/admin/contacts/${contact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "read" }),
      });
      fetchContacts();
    }
  };

  const unreadCount = contacts.filter((c) => c.status === "unread").length;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
        {unreadCount > 0 && (
          <span className="px-2.5 py-0.5 bg-primary rounded-full text-xs font-medium text-white">
            {unreadCount} unread
          </span>
        )}
      </div>

      {selected && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              {selected.subject || "No Subject"}
            </h2>
            <button
              onClick={() => setSelected(null)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4">
              <div>
                <span className="text-gray-400">From:</span>
                <p className="text-white">{selected.fullName}</p>
              </div>
              <div>
                <span className="text-gray-400">Email:</span>
                <p className="text-white">{selected.email}</p>
              </div>
              <div>
                <span className="text-gray-400">Date:</span>
                <p className="text-white">
                  {new Date(selected.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <span className="text-gray-400">Message:</span>
              <p className="text-white mt-1 whitespace-pre-wrap">
                {selected.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3 w-8"></th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Name
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Subject
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Date
              </th>
              <th className="text-right text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-gray-400 text-sm"
                >
                  No messages yet
                </td>
              </tr>
            ) : (
              contacts.map((c) => (
                <tr
                  key={c.id}
                  className={`hover:bg-gray-700/30 transition-colors ${
                    c.status === "unread" ? "bg-gray-700/10" : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleRead(c)}
                      className="text-gray-400 hover:text-primary"
                      title={c.status === "read" ? "Mark unread" : "Mark read"}
                    >
                      {c.status === "read" ? <MailOpen size={14} /> : <Mail size={14} />}
                    </button>
                  </td>
                  <td
                    className={`px-4 py-3 text-sm ${
                      c.status === "unread"
                        ? "text-white font-medium"
                        : "text-gray-300"
                    }`}
                  >
                    {c.fullName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {c.subject || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => viewContact(c)}
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => deleteContact(c.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
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
  );
}
