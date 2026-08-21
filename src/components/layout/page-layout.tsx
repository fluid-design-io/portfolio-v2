import type { ReactNode } from "react";

import { SharpPlus } from "@/components/icons";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type PageLayoutProps = {
  children: ReactNode;
  // Optional because a post's frontmatter `description` is optional in
  // fumadocs' pageSchema, and blog.$slug passes it straight through.
  description?: string;
  title: string;
};

/**
 * The page-level scaffolding a content route sits in: a tall title block
 * bracketed by two dashed rules and pinned by plus marks, then the grained,
 * blurred content well.
 *
 * Ticket 11 deliberately left this out of the shell — it is page scaffolding
 * rather than chrome — so it lands here with the first two pages that need it.
 * It merges what were three files on `main`: `layout/layout.tsx`,
 * `ui/page-header.tsx` and `ui/container.tsx`. `Container.Outer` and
 * `Container.Inner` had no caller outside `layout.tsx`, and the whole module
 * was typed `any` purely to hang those two statics off the export, so both are
 * gone along with the `forwardRef` wrappers React 19 no longer needs.
 *
 * `<main id="main">` lives in `__root.tsx` now, so the outer element here is a
 * plain div — `ui/container.tsx` rendered its own `<main>`, and two of them
 * would be a landmark violation.
 */
export function PageLayout({ children, description, title }: PageLayoutProps) {
  return (
    <>
      <div className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative">
            <div className="mx-auto mt-16 flex h-[max(38vh,350px)] max-w-2xl items-center pb-16 lg:max-w-5xl lg:px-8">
              <header className="relative w-full max-w-full overflow-x-hidden">
                <div className="dashed-border inset-x-0 -mx-48 translate-y-[12.5px] animate-fade-in motion-reduce:animate-none md:translate-y-[16.5px]" />
                <Heading className="relative z-[1] font-kaisei text-4xl/snug font-bold text-balance text-shadow-md sm:text-5xl/snug [&::first-letter]:capitalize">
                  {title}
                </Heading>
                <div className="dashed-border inset-x-0 -mx-48 -translate-y-[9.5px] animate-fade-in motion-reduce:animate-none md:-translate-y-[13px]" />
                {description ? (
                  <Text className="mt-6 w-5/6 max-w-2xl text-pretty text-shadow-md">
                    {description}
                  </Text>
                ) : null}
              </header>
            </div>
            <SharpPlus className="absolute -bottom-3 -left-3 z-[2] size-6 text-muted-foreground" />
            <SharpPlus className="absolute -right-3 -bottom-3 z-[2] size-6 text-muted-foreground" />
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          {/* `relative` is load-bearing: pages hang absolutely positioned
              column rules off this element. */}
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

/** Defines the `#grain` filter the content well references. Renders nothing. */
function GrainFilter() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      version="1.1"
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
