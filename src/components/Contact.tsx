import { MapPin, Clock, Mail, Phone, Twitter, Linkedin, Github, Dribbble } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-500 mt-3">
            Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Contact Information Card */}
          <div className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Location</div>
                    <div className="text-sm font-medium">San Francisco, CA</div>
                    <div className="text-sm text-white/60">United States</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Working Hours</div>
                    <div className="text-sm font-medium">Monday - Friday: 9am - 6pm</div>
                    <div className="text-sm text-white/60">Timezone: Pacific Time (PT)</div>
                    <div className="text-sm text-white/60 mt-1">Available for remote work worldwide</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email</div>
                    <div className="text-sm font-medium">hello@example.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Phone</div>
                    <div className="text-sm font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-white/60 mb-4">Connect with me</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Twitter size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Dribbble size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Send Me a Message Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  id="contact-terms"
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="contact-terms" className="text-xs text-gray-500">
                  I agree to the <span className="text-primary underline">Privacy Policy</span> and <span className="text-primary underline">Terms of Service</span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
