import Link from "next/link";
import { ArrowRight, Code, Palette, Smartphone, Globe, Layers, Megaphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that deliver exceptional digital experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with native-like performance and feel.",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description:
      "Improving search visibility and organic traffic with proven SEO strategies and techniques.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description:
      "Crafting unique brand identities that communicate your vision and resonate with audiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that drive growth, engagement, and conversions.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Services &amp; Expertise
          </h2>
          <p className="text-gray-500 mt-3">
            I offer a range of services to help businesses establish and grow their digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
