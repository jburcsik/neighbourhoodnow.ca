import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllInsights } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight, Clock } from "lucide-react";

export default function InsightsPage() {
  const t = useTranslations("insightsPage");
  const insights = getAllInsights();

  return (
    <>
      <SectionWrapper variant="teal">
        <div className="text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("headline")}
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            {t("subheadline")}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => {
            const preview =
              insight.content.replace(/^#+\s.+$/gm, "").replace(/\n+/g, " ").trim().slice(0, 150) + "…";

            return (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="h-1.5 bg-hero-gradient" />
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold uppercase tracking-widest text-brand-500 bg-brand-50 rounded-sm px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-lg font-bold text-brand-900 leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                    {insight.title}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {preview}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{insight.author}</span>
                      <span>·</span>
                      <Clock size={12} />
                      <span>{insight.readingTime}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                      {t("readMore")}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
