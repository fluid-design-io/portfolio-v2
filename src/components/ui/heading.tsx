import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & ComponentPropsWithoutRef<"h1">;

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  const Element = `h${level}` as const;

  return (
    <Element
      {...props}
      className={cn(
        "text-2xl/8 font-semibold text-foreground/95 sm:text-xl/8",
        className,
      )}
    />
  );
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  const Element = `h${level}` as const;

  return (
    <Element
      {...props}
      className={cn(
        "text-base/7 font-semibold text-foreground sm:text-sm/6",
        className,
      )}
    />
  );
}
