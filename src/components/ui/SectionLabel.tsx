import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.25em] mb-3",
        light ? "text-gold-400" : "text-brand-500",
        className
      )}
    >
      {children}
    </p>
  );
}
