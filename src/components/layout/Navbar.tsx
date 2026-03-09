"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";

const navLinks = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "caseStudies", href: "/case-studies" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link
            href={`${prefix}/`}
            className="flex flex-col leading-tight group"
          >
            <span className="font-display text-xl font-bold text-white tracking-tight">
              Neighbourhood Now
            </span>
            <span className="text-[10px] font-medium text-brand-300 uppercase tracking-[0.2em] group-hover:text-gold-400 transition-colors">
              Strategic Innovation
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={`${prefix}${href}`}
                className="text-sm font-medium text-brand-100 hover:text-gold-400 transition-colors tracking-wide"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher />
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors tracking-wide"
            >
              {t("requestBriefing")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-brand-950 border-t border-brand-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={`${prefix}${href}`}
                className="block text-base font-medium text-brand-100 hover:text-gold-400 transition-colors py-2 border-b border-brand-800"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <LocaleSwitcher />
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {t("requestBriefing")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
