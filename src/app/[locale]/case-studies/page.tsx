import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllCaseStudies } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudiesPage() {
  const t = useTranslations("caseStudies");
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <SectionWrapper variant="teal">
        <div className="text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("headline")}
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            {t("pageSubheadline")}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
            >
              <div className="h-1.5 bg-hero-gradient" />
              <div className="flex flex-col flex-1 p-7">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-500 bg-brand-50 rounded-sm px-2.5 py-1 mb-4 self-start">
                  {cs.sector}
                </span>

                <h2 className="font-display text-lg font-bold text-brand-900 leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                  {cs.title}
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {cs.challenge}
                </p>

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
    </>
  );
}
