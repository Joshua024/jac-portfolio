import { Clock, Globe, MessageCircle, MapPin } from "lucide-react";

export default function OfficeHours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Office Hours & Location
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-32">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-32">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-32">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Zone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Time Zone</h3>
                <p className="text-sm text-gray-600">Pacific Standard Time (PST)</p>
                <p className="text-sm text-gray-500">Please schedule meetings accordingly</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
                <p className="text-sm text-gray-600">
                  I typically respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4F46E5] text-sm font-semibold hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Right — Map Placeholder */}
          <div className="flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-64 md:h-80 flex items-center justify-center flex-1">
              <span className="text-gray-400">Map View</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="font-semibold text-gray-900 text-sm">123 Innovation Avenue</p>
                <p className="text-sm text-gray-500">San Francisco, CA 94103</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#4F46E5] text-[#4F46E5] text-sm font-medium rounded-lg hover:bg-[#4F46E5] hover:text-white transition-colors"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
