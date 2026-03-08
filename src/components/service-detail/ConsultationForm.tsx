"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Consultation form submitted:", formData);
  };

  return (
    <section id="consultation" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Book a Free Consultation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Let&apos;s discuss your project and explore how we can help you
              achieve your goals. Our consultation is completely free and
              comes with no obligation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4F46E5] font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Tell us about your project
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Share your goals, challenges, and vision
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4F46E5] font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Get a tailored proposal
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Receive a customized plan and timeline
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4F46E5] font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Start your project
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Begin the journey to an exceptional product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="consult-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="consult-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="consult-email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="consult-company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="consult-company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="consult-budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-gray-900"
                  >
                    <option value="">Select budget</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="consult-message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="consult-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all resize-none text-gray-900"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-semibold rounded-xl hover:bg-[#4338CA] transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
