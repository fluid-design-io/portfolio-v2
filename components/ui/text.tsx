import { cn } from "@/lib/utils";
import Link from "next/link";

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={cn("text-base/6 text-foreground/70 sm:text-sm/6", className)}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "text-foreground/95 underline decoration-foreground/50 data-[hover]:decoration-foreground",
        className,
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
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
}: React.ComponentPropsWithoutRef<"code">) {
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
