/**
 * Post dates. The frontmatter schema is `z.iso.date().or(z.date())`, so a date
 * arrives either as `"2024-05-16"` or as a `Date` that YAML already parsed at
 * UTC midnight.
 *
 * Both formatters pin the timezone to UTC. The old `date-fns` calls did not,
 * which rendered a post dated `2024-05-16` as "May 15, 2024" for anyone west
 * of Greenwich. Same output everywhere now, and the same on server and client,
 * which also keeps SSR and hydration in agreement.
 */
export type PostDate = Date | string;

const LONG_DATE = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
  year: "numeric",
});

function toDate(value: PostDate): Date {
  return value instanceof Date ? value : new Date(value);
}

/** `"May 16, 2024"` — the visible form, matching `date-fns`' `LLLL d, yyyy`. */
export function formatPostDate(value: PostDate): string {
  return LONG_DATE.format(toDate(value));
}

/** `"2024-05-16"` — the machine-readable form for `<time dateTime>`. */
export function toISODate(value: PostDate): string {
  return toDate(value).toISOString().slice(0, 10);
}
