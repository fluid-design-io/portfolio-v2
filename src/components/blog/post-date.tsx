import { cn } from "@/lib/cn";
import {
  formatPostDate,
  type PostDate as PostDateValue,
  toISODate,
} from "@/lib/date";

/** The rule-and-date treatment shared by the blog index and each post. */
export function PostDate({
  className,
  date,
}: {
  className?: string;
  date: PostDateValue;
}) {
  return (
    <time
      className={cn(
        "border-l border-muted-foreground pl-2 text-xs text-muted-foreground",
        className,
      )}
      dateTime={toISODate(date)}
    >
      {formatPostDate(date)}
    </time>
  );
}
