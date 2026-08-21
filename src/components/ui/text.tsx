import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export function Text({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={cn("text-base/6 text-foreground/70 sm:text-sm/6", className)}
    />
  );
}

export function Strong({
  className,
  ...props
}: ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={cn("font-medium text-foreground", className)}
    />
  );
}

export function Code({
  className,
  ...props
}: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={cn(
        "rounded border border-foreground/10 bg-foreground/[2.5%] px-0.5 text-sm font-medium text-foreground sm:text-[0.8125rem]",
        className,
      )}
    />
  );
}
