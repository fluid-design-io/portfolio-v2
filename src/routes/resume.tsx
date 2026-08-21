import { createFileRoute } from "@tanstack/react-router";

// PLACEHOLDER — ticket 20 replaces this. It exists so the header and footer
// links resolve against the route tree, which TanStack types strictly.
export const Route = createFileRoute("/resume")({
  component: Resume,
  head: () => ({ meta: [{ title: "Resume | Oliver Pan" }] }),
});

function Resume() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8">
      <p className="font-mono text-sm text-muted-foreground">
        /resume — ticket 20.
      </p>
    </div>
  );
}
