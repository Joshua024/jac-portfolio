"use client";

import { useEffect, useState, useCallback } from "react";
import { Trash2 } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  createdAt: string;
}

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  const fetchSubscribers = useCallback(async () => {
    const data = await fetch("/api/admin/newsletter").then((r) => r.json());
    setSubscribers(data);
  }, []);

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  const deleteSubscriber = async (id: string) => {
    if (!confirm("Remove this subscriber?")) return;
    await fetch(`/api/admin/newsletter/${id}`, { method: "DELETE" });
    fetchSubscribers();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">
          Newsletter Subscribers
        </h1>
        <span className="text-sm text-gray-400">
          {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Email
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Subscribed
              </th>
              <th className="text-right text-xs font-medium text-gray-400 uppercase px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {subscribers.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-8 text-center text-gray-400 text-sm"
                >
                  No subscribers yet
                </td>
              </tr>
            ) : (
              subscribers.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {s.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => deleteSubscriber(s.id)}
                      className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
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
