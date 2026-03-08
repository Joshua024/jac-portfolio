import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import OfficeHours from "@/components/contact/OfficeHours";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | JAC",
  description:
    "Get in touch to discuss your project, request a quote, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />

      {/* Form + Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 -mt-24 relative z-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <OfficeHours />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
