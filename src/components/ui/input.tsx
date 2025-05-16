import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const inputVariants = cva(
  "w-full rounded-[var(--radius-md)] border bg-[var(--color-background)] px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      inputSize: {
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
      },
      variant: {
        default: "border-[var(--color-border)]",
        error: "border-[var(--color-error)] focus:ring-[var(--color-error)]",
        success:
          "border-[var(--color-success)] focus:ring-[var(--color-success)]",
      },
    },
    defaultVariants: {
      inputSize: "md",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, variant, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            inputVariants({ inputSize, variant: error ? "error" : variant }),
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
