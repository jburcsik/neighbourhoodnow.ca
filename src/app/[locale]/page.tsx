import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-[0.25em] mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
          {t("headline")}
        </h1>
        <p className="text-brand-200 text-lg leading-relaxed">
          {t("subheadline")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-sm bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors tracking-wide"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-sm border border-brand-500 text-white hover:border-gold-400 hover:text-gold-400 transition-colors tracking-wide"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </div>
  );
}
