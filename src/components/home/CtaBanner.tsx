import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative bg-hero-gradient py-20 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gold accent lines */}
      <div className="absolute bottom-0 left-0 w-32 h-0.5 bg-gold-gradient" />
      <div className="absolute top-0 right-0 w-32 h-0.5 bg-gold-gradient" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {t("headline")}
        </h2>
        <p className="text-brand-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {t("subheadline")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors tracking-wide"
          >
            {t("primary")}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact#capabilities"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-sm border border-brand-500 text-white hover:border-gold-400 hover:text-gold-400 transition-colors tracking-wide"
          >
            {t("secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
