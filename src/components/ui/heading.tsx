import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & ComponentPropsWithoutRef<"h1">;

/*
 * Note the `level ?? n` rather than a `level = n` default in the parameter
 * pattern. `babel-plugin-react-compiler@1.0.0` bails on any component that
 * destructures a prop with a default — "Expected object property value to be
 * an LVal, got: AssignmentPattern" — and it bails silently, with oxlint clean.
 * Both of these were being skipped. Verified with scripts/check-react-compiler.mjs.
 */
export function Heading({ className, level, ...props }: HeadingProps) {
  const Element = `h${level ?? 1}` as const;

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

export function Subheading({ className, level, ...props }: HeadingProps) {
  const Element = `h${level ?? 2}` as const;

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
