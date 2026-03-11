import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { services } from "@/data/services";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations("services");
  const tPage = useTranslations("servicesPage");

  return (
    <>
      <SectionWrapper variant="teal">
        <div className="text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            {tPage("headline")}
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            {tPage("subheadline")}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, slug, Icon }) => (
            <Link
              key={key}
              href={`/services/${slug}`}
              className="group relative bg-white border border-slate-100 rounded-sm p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top rounded-l-sm" />

              <div className="w-10 h-10 rounded-sm bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                <Icon size={20} className="text-brand-600" />
              </div>

              <h2 className="font-display text-lg font-bold text-brand-900 mb-3">
                {t(`${key}.title`)}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(`${key}.description`)}
              </p>

              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                {t("learnMore")}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
