"use client";

import { NavItem } from "./nav-item";

export const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-6 sm:px-8">
      <nav className="flex w-full flex-row justify-between border-b px-0 py-4 font-mono sm:px-8">
        <div>
          <NavItem as="div" className="justify-start" href="/">
            <span className="sr-only sm:not-sr-only">Home</span>
            <svg
              className="size-4 text-muted-foreground sm:hidden"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
            </svg>
          </NavItem>
        </div>
        <ul className="flex justify-center gap-2.5">
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/uses">Uses</NavItem>
        </ul>
        <div>
          <NavItem
            as="div"
            className="justify-end"
            href="https://github.com/fluid-design-io"
            rel="noopener"
            target="_blank"
          >
            <span className="sr-only sm:not-sr-only">GitHub</span>
            <svg
              className="size-4 text-muted-foreground sm:hidden"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97Z"
                fillRule="evenodd"
              />
            </svg>
          </NavItem>
        </div>
      </nav>
    </header>
  );
};
