import { Link } from "@tanstack/react-router";

/**
 * Plain footer: a link to /resume and a static copyright line.
 *
 * Ticket 05 removed both modals. The resume became its own route and the
 * colophon ("Thanks to...") was dropped outright, so nothing here opens a
 * dialog any more.
 */
export function Footer() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <footer className="flex w-full items-center justify-between border-t px-6 py-5 sm:px-8">
        <Link
          to="/resume"
          className="font-mono text-xs text-foreground/75 transition hover:text-lime-400 md:text-sm"
        >
          Resume
        </Link>
        <p className="font-mono text-xs text-muted-foreground md:text-sm">
          © {new Date().getFullYear()} Oliver Pan
        </p>
      </footer>
    </div>
  );
}
