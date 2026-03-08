import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function ReadyToWork() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Work Together?
            </h2>
            <p className="text-white/70 max-w-md">
              I&apos;m currently available for freelance projects, full-time positions, and
              consulting engagements. Let&apos;s create something amazing together!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <p className="text-white/80 text-sm mb-1">Email me directly</p>
            <p className="text-white font-medium">hello@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
