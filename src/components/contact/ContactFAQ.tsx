"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is your typical project process?",
    answer:
      "My typical project process starts with a discovery call to understand your needs, followed by a detailed proposal and timeline. Once approved, I move through design, development, testing, and launch phases. Throughout the project, you'll have regular check-ins and opportunities for feedback to ensure the final product meets your expectations.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "I typically require a 50% deposit upfront to begin work, with the remaining 50% due upon project completion. For larger projects, I offer milestone-based payments split across key deliverables. I accept bank transfers, credit cards, and PayPal. All payment terms are outlined clearly in the project contract.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex web applications can take 6-12 weeks. Mobile app development usually ranges from 8-16 weeks. I'll provide a detailed timeline estimate during our initial consultation based on your specific requirements.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes! I offer ongoing maintenance and support packages to keep your digital products running smoothly. This includes regular updates, security patches, performance optimization, content updates, and technical support. Maintenance plans are flexible and can be tailored to your specific needs.",
  },
  {
    question: "Can you work with clients internationally?",
    answer:
      "Absolutely! I work with clients from around the world. Remote collaboration tools make it easy to communicate effectively regardless of location. I'm flexible with scheduling meetings across different time zones and have experience working with international teams and diverse cultural contexts.",
  },
];

export default function ContactFAQ({ faqs: propFaqs }: { faqs?: FAQItem[] }) {
  const faqs = propFaqs && propFaqs.length > 0 ? propFaqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see your question here?
          </p>
          <button className="px-6 py-3 bg-[#4F46E5] text-white text-sm font-semibold rounded-xl hover:bg-[#4338CA] transition-colors">
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  );
}
