"use client";

import { Quote } from "lucide-react";

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  content: string;
  rating?: number;
}

const defaultTestimonials: TestimonialData[] = [
  {
    id: "1",
    name: "Emily Richardson",
    role: "CEO, TechStart Inc.",
    content:
      "Working with JAC transformed our online presence was an absolute pleasure. They took our vague ideas and turned them into a beautiful, user-friendly website that our customers love. The attention to detail and quality confidence was really outstanding.",
  },
  {
    id: "2",
    name: "Michael Donovan",
    role: "Founder, DesignLab",
    content:
      "As a non-technical owner, I was hesitant to dig into new technology. But working with JAC made the process smooth and enjoyable. The consultation is perfect. I've developed great confidence in the work, and our online presence has never been better.",
  },
  {
    id: "3",
    name: "Sophie Martinez",
    role: "Marketing Director, GrowthCo",
    content:
      "The e-commerce platform JAC built for our business has been a game changer. Our customer experience has improved significantly, and we've seen a noticeable increase in sales. Brilliant work, and the support and consultation was worthy of all our needs.",
  },
];

export default function Testimonials({ testimonials: propTestimonials }: { testimonials?: TestimonialData[] }) {
  const testimonials = propTestimonials && propTestimonials.length > 0 ? propTestimonials : defaultTestimonials;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Client Testimonials
          </h2>
          <p className="text-gray-500 mt-3">
            Hear what my clients have to say about working together on their digital projects.
          </p>
        </div>

        {/* Testimonials Grid - 3 cards side by side */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col"
            >
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
