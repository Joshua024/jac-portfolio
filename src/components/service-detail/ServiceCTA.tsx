import { ServiceData } from "@/data/services";

interface Props {
  service: ServiceData;
}

export default function ServiceCTA({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {service.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {service.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Book a Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
