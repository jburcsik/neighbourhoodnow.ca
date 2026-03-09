import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const year = new Date().getFullYear();

  const services = [
    { label: "AI Readiness & Strategy", href: "/services/ai-readiness" },
    { label: "Process Automation", href: "/services/automation" },
    { label: "Agile Transformation", href: "/services/agile-coaching" },
    { label: "Civic Technology", href: "/services/civic-consulting" },
    { label: "Leadership Development", href: "/services/leadership-development" },
    { label: "Grant Strategy", href: "/services/grant-strategy" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-950 text-brand-200">
      {/* Gold accent line */}
      <div className="h-1 bg-gold-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="font-display text-xl font-bold text-white">
                Neighbourhood Now
              </div>
              <div className="text-[10px] font-medium text-brand-400 uppercase tracking-[0.2em] mt-0.5">
                Strategic Innovation
              </div>
            </div>
            <p className="text-sm text-brand-400 leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-brand-800 hover:bg-brand-700 text-brand-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hello@neighbourhoodnow.com"
                className="p-2 rounded bg-brand-800 hover:bg-brand-700 text-brand-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              {t("services")}
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={`${prefix}${href}`}
                    className="text-sm text-brand-400 hover:text-brand-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              {t("company")}
            </h3>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={`${prefix}${href}`}
                    className="text-sm text-brand-400 hover:text-brand-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-400">
                <Mail size={14} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href="mailto:hello@neighbourhoodnow.com"
                  className="hover:text-brand-200 transition-colors"
                >
                  hello@neighbourhoodnow.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-400">
                <Phone size={14} className="mt-0.5 shrink-0 text-brand-500" />
                <span>+1 (604) 555-0190</span>
              </li>
              <li className="text-sm text-brand-500 mt-4 leading-relaxed">
                {t("jurisdictions")}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-brand-500">
            {t("copyright", { year })}
          </p>
          <div className="flex gap-6">
            <Link
              href={`${prefix}/privacy`}
              className="text-xs text-brand-500 hover:text-brand-300 transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`${prefix}/terms`}
              className="text-xs text-brand-500 hover:text-brand-300 transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
