import Link from "next/link";
import { ServiceData } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface Props {
  service: ServiceData;
}

export default function RelatedServices({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
            Explore More
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Related Services
          </h2>
        </div>

        {/* Related Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.relatedServices.map((related, index) => {
            const Icon = related.icon;
            return (
              <Link
                key={index}
                href={`/services/${related.slug}`}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4F46E5]/10 rounded-xl mb-5 group-hover:bg-[#4F46E5] transition-colors">
                  <Icon className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {related.title}
                </h3>
                <div className="flex items-center gap-2 text-[#4F46E5] font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
