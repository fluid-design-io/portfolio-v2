import type { ReactNode } from "react";

import { SharpPlus } from "@/components/icons";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

/**
 * The page frame every content route sits in: a tall title header bracketed by
 * dashed rules and corner marks, then a grained, ruled body panel.
 *
 * Collapses three files from the old tree — `layout/layout.tsx`,
 * `ui/page-header.tsx` and `ui/container.tsx` — because `PageHeader` and
 * `Container` each had exactly one caller, `Layout` itself. `Container`'s
 * `.Outer` / `.Inner` compound API was never used either, and its outer element
 * was the `<main id="main">` that now lives in `__root.tsx`, so it is a plain
 * `<div>` here.
 *
 * NOTE FOR THE MERGE: ticket 20 built the same component at this same path and
 * with this same signature, in its own worktree. Keep **that** copy and drop
 * this one. This exists only so ticket 14's worktree could build and be
 * verified before the branches were reconciled.
 */
export function PageLayout({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <>
      <div className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative">
            <div className="mx-auto mt-16 flex h-[max(38vh,350px)] max-w-2xl items-center pb-16 lg:max-w-5xl lg:px-8">
              <header className="relative w-full max-w-full overflow-x-hidden">
                <div className="dashed-border inset-x-0 -mx-48 translate-y-[12.5px] md:translate-y-[16.5px]" />
                <Heading
                  className="relative z-1 font-kaisei text-4xl/snug font-bold text-balance text-shadow-md sm:text-5xl/snug [&::first-letter]:capitalize"
                  level={1}
                >
                  {title}
                </Heading>
                <div className="dashed-border inset-x-0 -mx-48 -translate-y-[9.5px] md:-translate-y-[13px]" />
                {description ? (
                  <Text className="mt-6 w-5/6 max-w-2xl text-pretty text-shadow-md">
                    {description}
                  </Text>
                ) : null}
              </header>
            </div>
            <SharpPlus className="absolute -bottom-3 -left-3 z-2 size-6 text-muted-foreground" />
            <SharpPlus className="absolute -right-3 -bottom-3 z-2 size-6 text-muted-foreground" />
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div
            className="relative border-t px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] backdrop-blur backdrop-brightness-[0.4] sm:px-8 lg:px-12"
            style={{ filter: "url(#grain)" }}
          >
            <div className="mx-auto max-w-2xl py-16 md:py-32 lg:max-w-5xl">
              {children}
            </div>
          </div>
        </div>
      </div>
      <GrainFilter />
    </>
  );
}

/** Defines the `#grain` filter the body panel references. Renders nothing. */
function GrainFilter() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="grain">
          <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 0.3 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}
