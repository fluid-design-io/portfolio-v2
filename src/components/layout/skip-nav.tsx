/**
 * Skip-to-content link, visually hidden until it takes focus.
 *
 * The old version portalled into an empty `#skip-nav` div behind a `mounted`
 * state guard, which meant it did not exist until after hydration. Rendered
 * straight into the shell it is present in the SSR'd HTML, which is the point
 * of a skip link.
 */
export function SkipNav() {
  return (
    <div className="skip-main-wrap">
      <div className="skip-main flex flex-col gap-1">
        <a href="#main">Skip to Content</a>
      </div>
    </div>
  );
}
