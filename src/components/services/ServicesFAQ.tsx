"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. During our discovery phase, we'll provide a detailed timeline tailored to your specific project requirements.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, credit cards, and other payment methods.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer various maintenance and support packages to ensure your project continues to run smoothly. This includes bug fixes, security updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "We include multiple revision rounds in our project scope. We use collaborative tools to gather your feedback efficiently and ensure every iteration brings us closer to your vision. Additional revisions beyond the agreed scope can be arranged.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Absolutely! We work with clients from all over the world. We use modern collaboration tools and are flexible with time zones to ensure smooth communication and project delivery regardless of location.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-gray-400">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
