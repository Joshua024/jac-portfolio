"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Accessibility } from "lucide-react";

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarClientProps {
  siteName: string;
  navCtaText: string;
  navCtaLink: string;
  logoType: string;
  logoImage: string;
  navLinks: NavLinkItem[];
}

export default function NavbarClient({
  siteName,
  navCtaText,
  navCtaLink,
  logoType,
  logoImage,
  navLinks,
}: NavbarClientProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logoType === "image" && logoImage ? (
              <Image
                src={logoImage}
                alt={siteName}
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            ) : (
              <span
                className="text-2xl font-bold text-primary"
                style={{ fontFamily: "var(--font-dancing-script), cursive" }}
              >
                {siteName}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side: Icons + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Accessibility"
            >
              <Accessibility size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href={navCtaLink}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors ml-2"
            >
              {navCtaText}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100 dark:border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`transition-colors text-sm font-medium ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Accessibility"
                >
                  <Accessibility size={20} />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              <Link
                href={navCtaLink}
                className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                {navCtaText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
