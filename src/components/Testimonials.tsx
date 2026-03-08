"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Joshua delivered an exceptional website that exceeded our expectations. His attention to detail and understanding of our brand was remarkable. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DesignLab",
    content:
      "Working with JAC was a fantastic experience. He transformed our vision into a stunning reality. The project was delivered on time and the quality was outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director, GrowthCo",
    content:
      "The mobile app Joshua built for us has significantly improved our customer engagement. His technical expertise and creative approach made all the difference.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            What Clients Say
          </h2>
          <p className="text-gray-500 mt-3">
            Don&apos;t just take my word for it — hear from some of my satisfied clients.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm relative">
            <Quote
              size={48}
              className="text-primary/10 absolute top-8 right-8"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                )
              )}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
