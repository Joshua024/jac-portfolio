"use client";

import { useState } from "react";

interface FooterNewsletterProps {
  heading: string;
  description: string;
}

export default function FooterNewsletter({ heading, description }: FooterNewsletterProps) {
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
    <div>
      <h4 className="font-semibold mb-4">{heading}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {submitted ? (
        <div className="p-3 bg-primary/20 rounded-lg">
          <p className="text-primary-light text-sm font-medium">Thanks for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-r-lg transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            By subscribing, you agree to our{" "}
            <a href="#" className="text-gray-400 hover:text-white underline">Privacy Policy</a>
            {" "}and consent to receive updates.
          </p>
        </form>
      )}
    </div>
  );
}
