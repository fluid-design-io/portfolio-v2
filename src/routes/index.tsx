import { createFileRoute } from "@tanstack/react-router";

// PLACEHOLDER — ticket 12 replaces this with the projects grid.
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8">
      <p className="font-mono text-sm text-muted-foreground">
        Projects grid — ticket 12.
      </p>
    </div>
  );
}
