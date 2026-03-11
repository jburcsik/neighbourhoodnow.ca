import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Quote } from "lucide-react";

const testimonialKeys = ["calgary", "ontario", "bcHousing"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <SectionWrapper variant="light">
      <div className="text-center mb-14">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-900 max-w-2xl mx-auto leading-tight">
          {t("headline")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialKeys.map((key) => (
          <div
            key={key}
            className="relative bg-slate-50 border border-slate-100 rounded-sm p-8"
          >
            <Quote
              size={32}
              className="text-brand-100 mb-4"
              fill="currentColor"
              strokeWidth={0}
            />
            <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
              &ldquo;{t(`items.${key}.quote`)}&rdquo;
            </p>
            <div className="border-t border-slate-200 pt-4">
              <div className="font-semibold text-brand-800 text-sm">{t(`items.${key}.author`)}</div>
              <div className="text-xs text-brand-600 mt-0.5">{t(`items.${key}.org`)}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                {t(`items.${key}.sector`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
