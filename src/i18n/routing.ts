import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "fr", "zh"],
  defaultLocale: "en",
  localePrefix: "as-needed", // /en → /, /fr → /fr, /zh → /zh
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
