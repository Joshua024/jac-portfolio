"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const subjects = [
  "General Inquiry",
  "Project Discussion",
  "Collaboration",
  "Technical Support",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const charCount = formData.message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Send Me a Message
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Fill out the form below and I&apos;ll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Full Doe"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSubjects(!showSubjects)}
              className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-xl text-sm text-left focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
            >
              <span className={formData.subject ? "text-gray-900" : "text-gray-400"}>
                {formData.subject || "Select a subject"}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            {showSubjects && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                {subjects.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      updateField("subject", s);
                      setShowSubjects(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            placeholder="Tell me about your project or inquiry..."
            value={formData.message}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                updateField("message", e.target.value);
              }
            }}
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 resize-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
          />
          <p className="text-xs text-gray-400 mt-1">{charCount}/500 characters</p>
        </div>

        {/* Privacy Policy */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#3B82F6] focus:ring-[#3B82F6]"
          />
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <Link href="#" className="text-[#3B82F6] hover:underline">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted regarding my inquiry
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={!agreed}
          className="px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-xl hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
