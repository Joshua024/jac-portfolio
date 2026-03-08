import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700" />
      <div className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-white/80 text-sm hover:text-white transition-colors mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch
        </h1>
      </div>
    </section>
  );
}
