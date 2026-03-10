import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  variant?: "light" | "dark" | "teal" | "muted";
}

export default function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  variant = "light",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        {
          "bg-white": variant === "light",
          "bg-brand-950": variant === "dark",
          "bg-hero-gradient": variant === "teal",
          "bg-slate-50": variant === "muted",
        },
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
