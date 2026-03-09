"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en", label: "EN", full: "English" },
  { code: "fr", label: "FR", full: "Français" },
  { code: "zh", label: "ZH", full: "中文" },
] as const;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(next: string) {
    // Strip current locale prefix and replace
    const segments = pathname.split("/").filter(Boolean);
    const isLocaleSegment = ["en", "fr", "zh"].includes(segments[0]);
    if (isLocaleSegment) segments.shift();

    const newPath =
      next === "en"
        ? `/${segments.join("/") || ""}`
        : `/${next}/${segments.join("/")}`;

    router.push(newPath);
    setOpen(false);
  }

  const current = locales.find((l) => l.code === locale)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-brand-200 hover:text-white transition-colors"
        aria-label="Switch language"
      >
        <Globe size={16} />
        <span>{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-brand-900 border border-brand-700 rounded shadow-lg py-1 z-50">
          {locales.map(({ code, full }) => (
            <button
              key={code}
              onClick={() => switchLocale(code)}
              className={cn(
                "w-full text-left px-4 py-2 text-sm transition-colors",
                code === locale
                  ? "text-gold-400 font-semibold"
                  : "text-brand-200 hover:text-white hover:bg-brand-800"
              )}
            >
              {full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
