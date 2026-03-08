import { Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
          Let&apos;s collaborate to create something amazing. Whether you have a
          specific project in mind or just want to explore possibilities,
          I&apos;m here to help.
        </p>
        <a
          href="tel:+14155555876"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#4F46E5] font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Directly
        </a>
      </div>
    </section>
  );
}
