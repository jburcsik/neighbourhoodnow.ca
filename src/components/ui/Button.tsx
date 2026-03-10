import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gold-500 text-brand-950 hover:bg-gold-400 active:bg-gold-600":
              variant === "primary",
            "bg-brand-700 text-white hover:bg-brand-600 active:bg-brand-800":
              variant === "secondary",
            "border border-white/30 text-white hover:border-gold-400 hover:text-gold-400":
              variant === "outline",
            "text-brand-700 hover:text-brand-500 underline-offset-4 hover:underline":
              variant === "ghost",
          },
          {
            "text-xs px-4 py-2": size === "sm",
            "text-sm px-6 py-3": size === "md",
            "text-sm px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
