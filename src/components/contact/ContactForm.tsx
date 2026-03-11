"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Turnstile } from "@marsidev/react-turnstile";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contactPage");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const turnstileRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"; // Turnstile test key

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if filled, silently "succeed"
    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          message: formData.get("message"),
          turnstileToken: turnstileRef.current,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
        <CheckCircle2 size={32} className="text-green-500 mx-auto mb-3" />
        <h3 className="font-display text-lg font-bold text-green-900 mb-2">
          {t("successHeadline")}
        </h3>
        <p className="text-sm text-green-700">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-900 mb-1.5"
        >
          {t("name")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t("namePlaceholder")}
          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-900 mb-1.5"
        >
          {t("email")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={t("emailPlaceholder")}
          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-brand-900 mb-1.5"
        >
          {t("organization")}
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder={t("organizationPlaceholder")}
          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-900 mb-1.5"
        >
          {t("message")} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow resize-y"
        />
      </div>

      <Turnstile
        siteKey={siteKey}
        onSuccess={(token) => {
          turnstileRef.current = token;
        }}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          <AlertCircle size={16} />
          {t("errorText")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brand-900 text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-brand-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
