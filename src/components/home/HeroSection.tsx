import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");
  const locale = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient">
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent bar — top right */}
      <div className="absolute top-0 right-0 w-1 h-40 bg-gold-gradient opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <p className="text-xs font-semibold text-gold-400 uppercase tracking-[0.25em]">
              {t("eyebrow")}
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            {t("headlineLine1")}
            <br />
            {t("headlineLine2")}
            <br />
            <span className="text-brand-300">{t("headlineLine3")}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-brand-200 leading-relaxed max-w-2xl mb-10">
            {t("subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors tracking-wide"
            >
              {t("ctaPrimary")}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={`${prefix}/case-studies`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-sm border border-brand-500 text-white hover:border-gold-400 hover:text-gold-400 transition-colors tracking-wide"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-brand-700 grid grid-cols-2 md:grid-cols-4 gap-8">
          {(["funding", "engagements", "jurisdictions", "retention"] as const).map((key) => (
            <div key={key}>
              <div className="font-display text-3xl font-bold text-white">{tStats(key)}</div>
              <div className="text-xs text-brand-400 uppercase tracking-wider mt-1">{tStats(`${key}Label`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-500 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
