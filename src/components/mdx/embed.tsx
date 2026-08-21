/* oxlint-disable react/iframe-missing-sandbox --
   The rule objects to `allow-scripts` next to `allow-same-origin`. That pairing
   is unsafe only when the framed document is same-origin with us; for a
   third-party embed `allow-same-origin` restores the *embed's* own origin, not
   ours, and YouTube, Figma and CodeSandbox all need it. A disable-next-line
   cannot be used: the rule reports on an attribute inside a JSX opening tag,
   where a `//` comment is not placeable. */
import { cn } from "@/lib/cn";

export type EmbedProps = {
  /** Extra classes for the `<iframe>`, e.g. a different height. */
  className?: string;
  /** Frame URL. YouTube needs the `/embed/` form, not `/watch?v=`. */
  src: string;
  /** Accessible name for the frame. Required — screen readers announce it. */
  title: string;
};

/**
 * A responsive third-party embed: YouTube, Figma prototypes, CodeSandbox.
 *
 * Replaces the old `IframeEmbed`, whose `width`/`height` string props were
 * always left at their defaults. The sizing here matches the `article iframe`
 * rule in `app.css`, repeated as classes so an `<Embed>` outside an `<article>`
 * still looks right. See ticket 06.
 *
 * The `sandbox` set is the one the raw `<iframe>` in
 * `beautiful-dark-mode-toggle.mdx` already carries, and it is what YouTube,
 * Figma and CodeSandbox all need: scripts to run at all, same-origin so the
 * embed keeps access to its own storage, popups and presentation for the
 * fullscreen and "open in" affordances.
 */
export function Embed({ className, src, title }: EmbedProps) {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={cn(
        "my-6 h-96 w-full overflow-hidden rounded-md border-0 md:h-[32rem]",
        className,
      )}
      loading="lazy"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      src={src}
      title={title}
    />
  );
}
