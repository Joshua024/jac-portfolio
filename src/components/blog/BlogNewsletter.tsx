"use client";

import { useState } from "react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <section className="py-20 bg-gradient-to-br from-[#3B82F6] to-[#6366F1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to My Newsletter
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Get the latest articles, tutorials, and insights delivered straight to
          your inbox. No spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-white text-lg font-semibold">
              Thanks for subscribing! 🎉
            </p>
            <p className="text-blue-200 mt-2">
              You&apos;ll receive the next issue in your inbox.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-white/40 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-[#3B82F6] font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
