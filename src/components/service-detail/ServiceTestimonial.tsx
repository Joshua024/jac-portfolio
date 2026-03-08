import { ServiceData } from "@/data/services";
import { Star, Quote } from "lucide-react";

interface Props {
  service: ServiceData;
}

export default function ServiceTestimonial({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            <Quote className="w-10 h-10 text-[#4F46E5]/20 absolute top-8 left-8 md:top-12 md:left-12" />

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8 italic">
              &ldquo;{service.testimonial.content}&rdquo;
            </p>

            {/* Author */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4F46E5] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                {service.testimonial.name.charAt(0)}
              </div>
              <p className="font-bold text-gray-900">
                {service.testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">
                {service.testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
