import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Linkedin, Mail, Phone } from "lucide-react";

const serviceLinks = [
  { key: "aiReadiness", href: "/services/ai-readiness" },
  { key: "automation", href: "/services/automation" },
  { key: "agileCoaching", href: "/services/agile-coaching" },
  { key: "civicConsulting", href: "/services/civic-consulting" },
  { key: "leadershipDevelopment", href: "/services/leadership-development" },
  { key: "grantStrategy", href: "/services/grant-strategy" },
] as const;

const companyLinks = [
  { key: "about", href: "/about" },
  { key: "caseStudies", href: "/case-studies" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

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
                CivSafe
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
                href="mailto:hello@civsafe.ca"
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
              {serviceLinks.map(({ key, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-brand-400 hover:text-brand-200 transition-colors"
                  >
                    {t(`serviceLinks.${key}`)}
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
              {companyLinks.map(({ key, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-brand-400 hover:text-brand-200 transition-colors"
                  >
                    {t(`companyLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-400">
                <Mail size={14} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href="mailto:hello@civsafe.ca"
                  className="hover:text-brand-200 transition-colors"
                >
                  hello@civsafe.ca
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
              href="/privacy"
              className="text-xs text-brand-500 hover:text-brand-300 transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
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
