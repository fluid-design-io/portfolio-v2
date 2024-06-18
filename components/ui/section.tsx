import { useId } from "react";

import { Heading } from "./heading";

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
};

export function Section({ children, title = "" }: SectionProps) {
  let id = useId();

  return (
    <section aria-labelledby={id}>
      <div className="grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-3">
        <Heading
          className="text-shadow-lg sticky top-6 text-balance px-6 md:text-2xl"
          id={id}
          level={2}
        >
          {title}
        </Heading>
        <div className="md:col-span-2">{children}</div>
      </div>
    </section>
  );
}
