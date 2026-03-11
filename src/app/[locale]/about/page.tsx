import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const valueKeys = ["evidence", "capability", "community", "integrity"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

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
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-4">
              {t("missionHeadline")}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t("missionText")}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-4">
              {t("approachHeadline")}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t("approachText")}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">
              {t("valuesHeadline")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueKeys.map((key) => (
                <div
                  key={key}
                  className="bg-slate-50 rounded-sm p-6 border border-slate-100"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2
                      size={18}
                      className="text-gold-500 mt-0.5 shrink-0"
                    />
                    <h3 className="font-display text-lg font-bold text-brand-900">
                      {t(`values.${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed ml-7">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
