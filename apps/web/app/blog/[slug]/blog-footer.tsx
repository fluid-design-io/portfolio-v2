import { cn } from "@workspace/ui/lib/utils";
import { findNeighbour } from "fumadocs-core/server";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FooterProps = ReturnType<typeof findNeighbour>;

const itemVariants = cn(
  "flex w-full flex-col gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground"
);

const itemLabel = cn(
  "inline-flex items-center gap-0.5 text-fd-muted-foreground"
);

export const Footer = ({ next, previous }: FooterProps) => {
  return (
    <div className='grid grid-cols-2 gap-4 pb-6'>
      {previous ? (
        <Link href={previous.url} className={cn(itemVariants)}>
          <div className={cn(itemLabel)}>
            <ChevronLeft className='-ms-1 size-4 shrink-0 rtl:rotate-180' />
            <p>Previous</p>
          </div>
          <p className='font-medium'>{previous.name}</p>
        </Link>
      ) : null}
      {next ? (
        <Link
          href={next.url}
          className={cn(itemVariants, "col-start-2 text-end")}
        >
          <div className={cn(itemLabel, "flex-row-reverse")}>
            <ChevronRight className='-me-1 size-4 shrink-0 rtl:rotate-180' />
            <p>Next</p>
          </div>
          <p className='font-medium'>{next.name}</p>
        </Link>
      ) : null}
    </div>
  );
};
