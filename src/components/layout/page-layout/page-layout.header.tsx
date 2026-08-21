import type { ReactNode } from "react";

import { SharpPlus } from "@/components/icons";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

/**
 * The tall title block a content route opens with, bracketed by two dashed
 * rules and pinned by plus marks. Compose `PageLayout.Title` (and optionally
 * `PageLayout.Description`) inside it.
 */
export function PageLayoutHeader({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative">
          <div className="mx-auto mt-16 flex h-[max(38vh,350px)] max-w-2xl items-center pb-16 lg:max-w-5xl lg:px-8">
            <header className="relative w-full max-w-full overflow-x-hidden">
              {children}
            </header>
          </div>
          <SharpPlus className="absolute -bottom-3 -left-3 z-[2] size-6 text-muted-foreground" />
          <SharpPlus className="absolute -right-3 -bottom-3 z-[2] size-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

/** The page title with its two dashed rules; they hug the text's cap heights. */
export function PageLayoutTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="dashed-border inset-x-0 -mx-48 translate-y-[12.5px] animate-fade-in motion-reduce:animate-none md:translate-y-[16.5px]" />
      <Heading className="relative z-[1] font-kaisei text-4xl/snug font-bold text-balance text-shadow-md sm:text-5xl/snug [&::first-letter]:capitalize">
        {children}
      </Heading>
      <div className="dashed-border inset-x-0 -mx-48 -translate-y-[9.5px] animate-fade-in motion-reduce:animate-none md:-translate-y-[13px]" />
    </>
  );
}

export function PageLayoutDescription({ children }: { children: ReactNode }) {
  return (
    <Text className="mt-6 w-5/6 max-w-2xl text-pretty text-shadow-md">
      {children}
    </Text>
  );
}
