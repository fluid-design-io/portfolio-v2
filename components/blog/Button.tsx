"use client";

import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70",
};

export const Button = forwardRef(
  (
    {
      as = "button",
      className,
      href,
      variant = "primary",
      ...props
    }: {
      [key: string]: any;
      as?: React.ElementType;
      className?: string;
      href?: string;
      variant?: "primary" | "secondary";
    },
    ref: any,
  ) => {
    className = clsx(
      "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
      variantStyles[variant],
      "contrast-more:ring-1 contrast-more:ring-zinc-400 contrast-more:dark:ring-zinc-400/40",
      className,
    );
    const Component = as;

    return href ? (
      <Link className={className} href={href} ref={ref} {...props} />
    ) : (
      <Component className={className} ref={ref} {...props} />
    );
  },
);

Button.displayName = "Button";
