import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const officeKeys = ["ottawa", "shanghai", "montreal", "toronto"] as const;

export default function ContactPage() {
  const t = useTranslations("contactPage");

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Offices */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">
              {t("offices")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {officeKeys.map((key) => (
                <div
                  key={key}
                  className="bg-slate-50 rounded-sm p-6 border border-slate-100"
                >
                  <h3 className="font-display text-lg font-bold text-brand-900 mb-1">
                    {t(`${key}.city`)}
                  </h3>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-3">
                    {t(`${key}.country`)}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-slate-500">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-brand-400" />
                      <span>{t(`${key}.address`)}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-500">
                      <Phone size={14} className="mt-0.5 shrink-0 text-brand-400" />
                      <span>{t(`${key}.phone`)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">
              {t("formHeadline")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
