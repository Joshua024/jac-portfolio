import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 mt-4 text-lg">
            Have a project in mind? Let&apos;s create something amazing together.
            Subscribe to my newsletter for tips and updates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
              <Send size={16} />
            </button>
          </div>

          <p className="text-white/50 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
