import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & ComponentPropsWithoutRef<"h1">;

// No destructuring defaults anywhere in this file, parameter or body.
// babel-plugin-react-compiler@1.0.0 silently bails on an AssignmentPattern
// in a destructure and compiles nothing; `?? ` in the body is the form that
// survives. See scripts/check-react-compiler.mjs.
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
