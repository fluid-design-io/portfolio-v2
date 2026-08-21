import type { ReactNode } from "react";

/** The grained, blurred content well below the header. */
export function PageLayoutContent({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        {/* `relative` is load-bearing: pages hang absolutely positioned
            column rules off this element. */}
        <div className="relative border-t px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] backdrop-blur backdrop-brightness-[0.4] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl py-16 md:py-32 lg:max-w-5xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
