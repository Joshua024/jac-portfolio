import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-2xl p-8 md:p-10 text-white h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
      <p className="text-blue-200 text-sm mb-8">
        Feel free to reach out through any of these channels. I&apos;m always
        open to discussing new projects, creative ideas, or opportunities to be
        part of your vision.
      </p>

      <div className="space-y-6 flex-1">
        {/* Location */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-sm text-blue-200">123 Innovation Avenue</p>
            <p className="text-sm text-blue-200">San Francisco, CA 94103</p>
            <p className="text-sm text-blue-200">United States</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a href="mailto:hello@creativedeveloper.com" className="text-sm text-blue-200 hover:text-white transition-colors block">
              hello@creativedeveloper.com
            </a>
            <p className="text-xs text-blue-300 mt-0.5">For general inquiries and project discussions</p>
            <a href="mailto:support@creativedeveloper.com" className="text-sm text-blue-200 hover:text-white transition-colors block mt-1">
              support@creativedeveloper.com
            </a>
            <p className="text-xs text-blue-300 mt-0.5">For existing clients and technical support</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <a href="tel:+14155555876" className="text-sm text-blue-200 hover:text-white transition-colors">
              +1 (415) 555-5876
            </a>
            <p className="text-xs text-blue-300 mt-0.5">Monday to Friday, 9AM to 6PM PST</p>
          </div>
        </div>

        {/* Schedule a Call */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Schedule a Call</h3>
            <p className="text-sm text-blue-200 mb-3">
              Book a 30-minute consultation to discuss your project needs.
            </p>
            <Link
              href="/book-appointment"
              className="inline-block px-5 py-2.5 bg-accent rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Connect With Me */}
      <div className="mt-8 pt-6 border-t border-white/20">
        <h3 className="font-semibold mb-4">Connect With Me</h3>
        <div className="flex gap-3">
          {[
            { label: "LinkedIn", icon: "in" },
            { label: "GitHub", icon: "GH" },
            { label: "X", icon: "X" },
            { label: "Instagram", icon: "IG" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-white/20 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
