import { Link, type LinkProps } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function NavItem({
  children,
  className,
  to,
}: {
  children: ReactNode;
  className?: string;
  to: LinkProps["to"];
}) {
  return (
    <li>
      <Link
        to={to}
        // Prefix matching everywhere except "/", which would otherwise match
        // every route. This is what the old startsWith() check did.
        activeOptions={{ exact: to === "/" }}
        className={cn(
          "relative block px-0 py-2 text-xs text-foreground/75 transition sm:px-3 md:text-sm",
          "flex min-w-16 items-center justify-center sm:min-w-20",
          className,
        )}
        activeProps={{ className: "text-lime-400" }}
        inactiveProps={{ className: "hover:text-lime-400" }}
      >
        {({ isActive }) => (
          <>
            {children}
            {isActive && (
              <motion.span
                className="absolute inset-x-1 bottom-[calc(-1rem-1px)] h-px bg-gradient-to-r from-lime-400/0 via-lime-400/40 to-lime-400/0"
                layoutId="underline"
              />
            )}
          </>
        )}
      </Link>
    </li>
  );
}
