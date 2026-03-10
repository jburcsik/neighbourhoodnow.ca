import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import type { CaseStudy } from "@/lib/content";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const t = useTranslations("caseStudies");
  const locale = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <SectionWrapper variant="muted" id="case-studies">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <SectionLabel>{t("sectionLabel")}</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-900 max-w-xl leading-tight">
            {t("headline")}
          </h2>
        </div>
        <Link
          href={`${prefix}/case-studies`}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-gold-600 transition-colors uppercase tracking-wider"
        >
          {t("viewAll")}
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`${prefix}/case-studies/${cs.slug}`}
            className="group flex flex-col bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            {/* Teal header band */}
            <div className="h-1.5 bg-hero-gradient" />

            <div className="flex flex-col flex-1 p-7">
              {/* Sector tag */}
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-500 bg-brand-50 rounded-sm px-2.5 py-1 mb-4 self-start">
                {cs.sector}
              </span>

              <h3 className="font-display text-lg font-bold text-brand-900 leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                {cs.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                {cs.challenge}
              </p>

              {/* Impact metric */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                    {cs.impactMetric}
                  </div>
                  <div className="font-display text-2xl font-bold text-brand-700">
                    {cs.impactValue}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-sm bg-brand-50 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <TrendingUp
                    size={16}
                    className="text-brand-500 group-hover:text-brand-950 transition-colors"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
