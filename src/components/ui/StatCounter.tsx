"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  light?: boolean;
  className?: string;
}

// Parses "94%" → { prefix: "", number: 94, suffix: "%" }
// Parses "$47M+" → { prefix: "$", number: 47, suffix: "M+" }
// Parses "200+" → { prefix: "", number: 200, suffix: "+" }
// Parses "12" → { prefix: "", number: 12, suffix: "" }
function parseValue(raw: string) {
  const match = raw.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function StatCounter({ value, label, light, className }: StatCounterProps) {
  const { prefix, number, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1400;
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [triggered, number]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "font-display text-5xl lg:text-6xl font-bold tabular-nums",
          light ? "text-white" : "text-brand-800"
        )}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-medium uppercase tracking-widest",
          light ? "text-brand-300" : "text-brand-500"
        )}
      >
        {label}
      </div>
    </div>
  );
}
