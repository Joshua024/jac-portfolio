import Link from "next/link";

export default function ReadyToStart() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Contact us today to discuss your needs and discover how our services can help achieve your
          business goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary px-7 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/30 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
