import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export function DescriptionList({
  className,
  ...props
}: ComponentPropsWithoutRef<"dl">) {
  return (
    <dl
      {...props}
      className={cn(
        "grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6",
        className,
      )}
    />
  );
}

export function DescriptionTerm({
  className,
  ...props
}: ComponentPropsWithoutRef<"dt">) {
  return (
    <dt
      {...props}
      className={cn(
        "col-start-1 border-t border-foreground/5 pt-3 text-zinc-400 first:border-none sm:border-t sm:border-foreground/5 sm:py-3",
        className,
      )}
    />
  );
}

export function DescriptionDetails({
  className,
  ...props
}: ComponentPropsWithoutRef<"dd">) {
  return (
    <dd
      {...props}
      className={cn(
        "pt-1 pb-3 text-foreground sm:border-t sm:border-foreground/5 sm:py-3 sm:[&:nth-child(2)]:border-none",
        className,
      )}
    />
  );
}
