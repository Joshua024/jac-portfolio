import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m Joshua<br />Adumchimma
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Creative Developer &amp; Digital Storyteller with over 5 years of
              experience crafting beautiful, functional digital experiences.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                UI/UX Designer
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Digital Strategist
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Work With Me
              </Link>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 lg:w-[400px] lg:h-[460px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent flex items-end justify-center">
                <div className="w-64 h-80 lg:w-72 lg:h-96 bg-gray-300 rounded-t-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
