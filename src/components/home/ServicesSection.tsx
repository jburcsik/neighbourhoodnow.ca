import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  Brain,
  Zap,
  RefreshCw,
  Building2,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    key: "aiReadiness",
    href: "/services/ai-readiness",
    Icon: Brain,
  },
  {
    key: "automation",
    href: "/services/automation",
    Icon: Zap,
  },
  {
    key: "agile",
    href: "/services/agile-coaching",
    Icon: RefreshCw,
  },
  {
    key: "civic",
    href: "/services/civic-consulting",
    Icon: Building2,
  },
  {
    key: "leadership",
    href: "/services/leadership-development",
    Icon: Users,
  },
  {
    key: "grant",
    href: "/services/grant-strategy",
    Icon: FileText,
  },
] as const;

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <SectionWrapper variant="light" id="services">
      <div className="text-center mb-14">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-900 max-w-2xl mx-auto leading-tight">
          {t("headline")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ key, href, Icon }) => (
          <Link
            key={key}
            href={`${prefix}${href}`}
            className="group relative bg-white border border-slate-100 rounded-sm p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Gold left border on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top rounded-l-sm" />

            <div className="w-10 h-10 rounded-sm bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
              <Icon size={20} className="text-brand-600" />
            </div>

            <h3 className="font-display text-lg font-bold text-brand-900 mb-3">
              {t(`${key}.title`)}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {t(`${key}.description`)}
            </p>

            <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
              {t("learnMore")}
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
