import { ServiceData } from "@/data/services";
import { Check } from "lucide-react";

interface Props {
  service: ServiceData;
}

export default function PricingSection({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Pricing & Packages
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Flexible packages designed to meet your specific needs and budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {service.pricing.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                tier.highlighted
                  ? "bg-[#4F46E5] text-white shadow-2xl shadow-[#4F46E5]/30 scale-105 z-10"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`text-lg font-semibold mb-2 ${
                  tier.highlighted ? "text-white/90" : "text-gray-500"
                }`}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold">{tier.price}</span>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-8 ${
                  tier.highlighted ? "text-white/70" : "text-gray-500"
                }`}
              >
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-white" : "text-[#4F46E5]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#consultation"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-white text-[#4F46E5] hover:bg-gray-100"
                    : "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
