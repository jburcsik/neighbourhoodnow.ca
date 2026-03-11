"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en" as const, label: "EN", full: "English" },
  { code: "fr" as const, label: "FR", full: "Français" },
  { code: "zh" as const, label: "ZH", full: "中文" },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
            <Link
              key={code}
              href={pathname}
              locale={code}
              onClick={() => setOpen(false)}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm transition-colors",
                code === locale
                  ? "text-gold-400 font-semibold"
                  : "text-brand-200 hover:text-white hover:bg-brand-800"
              )}
            >
              {full}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
