import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Globe,
  CreditCard,
  Wallet,
  BadgeDollarSign,
  Banknote,
  ShoppingBag,
  Store,
  Landmark,
  CircleDollarSign,
  HandCoins,
  Receipt,
  Coins,
  PiggyBank,
  Apple,
  Chrome,
  Figma,
  Code,
  Layers,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { getSiteSettings, getServices, getFooterLogos } from "@/lib/data";
import FooterNewsletter from "./FooterNewsletter";

const logoIconMap: Record<string, LucideIcon> = {
  Globe,
  CreditCard,
  Wallet,
  BadgeDollarSign,
  Banknote,
  ShoppingBag,
  Store,
  Landmark,
  CircleDollarSign,
  HandCoins,
  Receipt,
  Coins,
  PiggyBank,
  Apple,
  Chrome,
  Figma,
  Github,
  Code,
  Layers,
  Zap,
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  linkedIn: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
  github: Github,
};

export default async function Footer() {
  const [settings, dbServices, dbLogos] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getFooterLogos(),
  ]);

  const siteName = settings?.siteName || "Joshua Adumchimma";
  const footerDescription = settings?.footerDescription || "Creating beautiful, functional digital experiences that help businesses grow and thrive in the digital landscape.";
  const copyrightText = settings?.copyrightText || "Portfolio & Blog CMS. All rights reserved.";
  const newsletterHeading = settings?.newsletterHeading || "Newsletter";
  const newsletterText = settings?.newsletterText || "Subscribe to receive the latest articles and updates.";

  const socials = [
    { key: "linkedIn", href: settings?.linkedIn, label: "LinkedIn" },
    { key: "twitter", href: settings?.twitter, label: "Twitter" },
    { key: "dribbble", href: settings?.dribbble, label: "Dribbble" },
    { key: "github", href: settings?.github, label: "GitHub" },
  ];

  const services = dbServices.map((s) => ({
    slug: s.slug,
    title: s.title,
  }));

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-dancing-script), cursive" }}>
              {siteName}
            </Link>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              {footerDescription}
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const Icon = socialIcons[social.key];
                if (!Icon) return null;
                return (
                  <a
                    key={social.key}
                    href={social.href || "#"}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.length > 0
                ? services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))
                : ["UI/UX Design", "Web Development", "Mobile App Development", "Brand Identity Design", "E-Commerce Development", "Digital Marketing"].map((name) => (
                    <li key={name}>
                      <span className="text-gray-400 text-sm">{name}</span>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Newsletter */}
          <FooterNewsletter heading={newsletterHeading} description={newsletterText} />
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {copyrightText}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Payment/Platform Logos */}
        {dbLogos.length > 0 && (
          <div className="mt-8 flex items-center justify-center gap-6">
            {dbLogos.map((logo) => {
              const Icon = logoIconMap[logo.icon] || Globe;
              return (
                <div
                  key={logo.id}
                  className="text-gray-600 hover:text-gray-400 transition-colors"
                  title={logo.name}
                >
                  <Icon size={22} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
}
