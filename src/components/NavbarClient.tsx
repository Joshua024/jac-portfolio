"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Accessibility, Type, Eye, Zap, Link2 } from "lucide-react";

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

interface A11ySettings {
  fontSize: number; // 0 = default, 1 = large, 2 = xl
  highContrast: boolean;
  reduceMotion: boolean;
  highlightLinks: boolean;
}

const fontLabels = ["Default", "Large", "Extra Large"];

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
  const [a11yOpen, setA11yOpen] = useState(false);
  const [a11y, setA11y] = useState<A11ySettings>({
    fontSize: 0,
    highContrast: false,
    reduceMotion: false,
    highlightLinks: false,
  });
  const a11yRef = useRef<HTMLDivElement>(null);

  // Load saved preferences
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const savedA11y = localStorage.getItem("a11y");
    if (savedA11y) {
      const parsed: A11ySettings = JSON.parse(savedA11y);
      setA11y(parsed);
      applyA11y(parsed);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (a11yRef.current && !a11yRef.current.contains(e.target as Node)) {
        setA11yOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const applyA11y = (settings: A11ySettings) => {
    const html = document.documentElement;
    html.classList.remove("a11y-font-lg", "a11y-font-xl");
    if (settings.fontSize === 1) html.classList.add("a11y-font-lg");
    if (settings.fontSize === 2) html.classList.add("a11y-font-xl");

    html.classList.toggle("a11y-high-contrast", settings.highContrast);
    html.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
    html.classList.toggle("a11y-highlight-links", settings.highlightLinks);
  };

  const updateA11y = (patch: Partial<A11ySettings>) => {
    const next = { ...a11y, ...patch };
    setA11y(next);
    applyA11y(next);
    localStorage.setItem("a11y", JSON.stringify(next));
  };

  const resetA11y = () => {
    const defaults: A11ySettings = { fontSize: 0, highContrast: false, reduceMotion: false, highlightLinks: false };
    setA11y(defaults);
    applyA11y(defaults);
    localStorage.removeItem("a11y");
  };

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

  const a11yPanel = (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-72 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Accessibility</h3>
        <button
          onClick={resetA11y}
          className="text-xs text-primary hover:text-primary-dark font-medium"
        >
          Reset All
        </button>
      </div>

      {/* Font Size */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Type size={14} className="text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            Font Size: {fontLabels[a11y.fontSize]}
          </span>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((level) => (
            <button
              key={level}
              onClick={() => updateA11y({ fontSize: level })}
              className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                a11y.fontSize === level
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {["A", "A+", "A++"][level]}
            </button>
          ))}
        </div>
      </div>

      {/* High Contrast */}
      <button
        onClick={() => updateA11y({ highContrast: !a11y.highContrast })}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <Eye size={14} className="text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">High Contrast</span>
        </div>
        <span
          className={`w-9 h-5 rounded-full relative transition-colors ${
            a11y.highContrast ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              a11y.highContrast ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
      </button>

      {/* Reduce Motion */}
      <button
        onClick={() => updateA11y({ reduceMotion: !a11y.reduceMotion })}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Reduce Motion</span>
        </div>
        <span
          className={`w-9 h-5 rounded-full relative transition-colors ${
            a11y.reduceMotion ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              a11y.reduceMotion ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
      </button>

      {/* Highlight Links */}
      <button
        onClick={() => updateA11y({ highlightLinks: !a11y.highlightLinks })}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <Link2 size={14} className="text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Highlight Links</span>
        </div>
        <span
          className={`w-9 h-5 rounded-full relative transition-colors ${
            a11y.highlightLinks ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              a11y.highlightLinks ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
      </button>
    </div>
  );

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
            <div className="relative" ref={a11yRef}>
              <button
                onClick={() => setA11yOpen(!a11yOpen)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  a11yOpen || a11y.fontSize > 0 || a11y.highContrast || a11y.reduceMotion || a11y.highlightLinks
                    ? "text-primary bg-primary/10"
                    : "text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-label="Accessibility settings"
                aria-expanded={a11yOpen}
              >
                <Accessibility size={20} />
              </button>
              {a11yOpen && (
                <div className="absolute right-0 top-12 z-50">
                  {a11yPanel}
                </div>
              )}
            </div>
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

              {/* Mobile Accessibility Panel */}
              <div className="mt-2 border-t border-gray-100 dark:border-gray-800 pt-4">
                {a11yPanel}
              </div>

              <div className="flex items-center gap-3 mt-2">
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
