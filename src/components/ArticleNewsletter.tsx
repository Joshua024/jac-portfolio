"use client";

import { useState } from "react";

interface ArticleNewsletterProps {
  heading: string;
  description: string;
}

export default function ArticleNewsletter({ heading, description }: ArticleNewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="md:max-w-sm shrink-0">
        <h3 className="text-xl font-bold text-gray-900">{heading}</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{description}</p>
      </div>
      {submitted ? (
        <div className="p-4 bg-primary/10 rounded-lg">
          <p className="text-primary font-medium text-sm">Thanks for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
