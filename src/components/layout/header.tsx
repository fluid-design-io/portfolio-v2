import { Link } from "@tanstack/react-router";

import { Github, Home } from "@/components/icons";
import { NavItem } from "@/components/layout/nav-item";
import { TextEffect } from "@/components/layout/text-effect";

export function Header() {
  return (
    <header className="mx-auto max-w-7xl px-6 sm:px-8">
      <nav className="flex w-full flex-row justify-between border-b px-0 py-4 font-mono sm:px-8">
        <div>
          <Link
            to="/"
            className="relative flex min-w-16 items-center justify-start px-0 py-2 text-xs text-foreground/75 transition sm:min-w-20 sm:px-3 md:text-sm"
          >
            <span className="sr-only sm:not-sr-only">
              <TextEffect>[OP]</TextEffect>
            </span>
            <Home className="size-4 text-muted-foreground sm:hidden" />
          </Link>
        </div>
        <ul className="flex justify-center gap-2.5">
          <NavItem to="/blog">
            <TextEffect>Blog</TextEffect>
          </NavItem>
          <NavItem to="/">
            <TextEffect>Projects</TextEffect>
          </NavItem>
          <NavItem to="/uses">
            <TextEffect>Uses</TextEffect>
          </NavItem>
        </ul>
        <div>
          <a
            href="https://github.com/fluid-design-io"
            rel="noopener noreferrer"
            target="_blank"
            className="relative flex min-w-16 items-center justify-end px-0 py-2 text-xs text-foreground/75 transition hover:text-lime-400 sm:min-w-20 sm:px-3 md:text-sm"
          >
            <span className="sr-only sm:not-sr-only">
              <TextEffect>GitHub</TextEffect>
            </span>
            <Github className="size-4 text-muted-foreground sm:hidden" />
          </a>
        </div>
      </nav>
    </header>
  );
}
