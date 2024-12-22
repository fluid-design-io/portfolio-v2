"use client";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({
  as = "li",
  children,
  className,
  href,
  ...props
}: {
  [key: string]: any;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href) && href !== "/";
  const Component = as;
  return (
    <Component>
      <Link
        className={cn(
          "relative block px-0 py-2 text-xs text-foreground/75 transition sm:px-3 md:text-sm",
          "flex min-w-16 items-center justify-center sm:min-w-20",
          isActive ? "text-lime-400" : "hover:text-lime-400",
          className
        )}
        href={href}
        {...props}
      >
        {children}
        {isActive && (
          <motion.span
            className='absolute inset-x-1 bottom-[calc(-1rem-1px)] h-px bg-gradient-to-r from-lime-400/0 via-lime-400/40 to-lime-400/0'
            layoutId='underline'
          />
        )}
      </Link>
    </Component>
  );
}
