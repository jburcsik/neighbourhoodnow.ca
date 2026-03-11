import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { services, getServiceBySlug } from "@/data/services";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail serviceKey={service.key} slug={service.slug} />;
}

function ServiceDetail({
  serviceKey,
  slug,
}: {
  serviceKey: string;
  slug: string;
}) {
  const t = useTranslations("services");
  const tPage = useTranslations("servicesPage");

  const title = t(`${serviceKey}.title`);
  const description = t(`${serviceKey}.description`);
  const detail = tPage(`${serviceKey}.detail`);
  const capabilities = tPage.raw(`${serviceKey}.capabilities`) as string[];
  const whyItMattersText = tPage(`${serviceKey}.whyItMatters`);

  // Find the Icon for this service
  const service = getServiceBySlug(slug)!;
  const { Icon } = service;

  return (
    <>
      <SectionWrapper variant="teal">
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            {tPage("backToServices")}
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-brand-800 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-gold-400" />
            </div>
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
                {title}
              </h1>
              <p className="text-lg text-brand-200 max-w-2xl">{description}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed mb-14">
            {detail}
          </p>

          <div className="border-t border-slate-100 pt-12 mb-14">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">
              {tPage("keyCapabilities")}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 bg-slate-50 rounded-sm p-4 border border-slate-100">
                  <CheckCircle2
                    size={18}
                    className="text-gold-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-700 leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-12 mb-14">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-6">
              {tPage("whyItMatters")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed border-l-2 border-gold-500 pl-6">
              {whyItMattersText}
            </p>
          </div>

          <div className="bg-brand-50 rounded-sm p-10 border border-brand-100">
            <h3 className="font-display text-xl font-bold text-brand-900 mb-3">
              {tPage("getStarted")}
            </h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              {tPage("getStartedText")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-900 text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-brand-800 transition-colors"
            >
              {tPage("requestBriefing")}
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
