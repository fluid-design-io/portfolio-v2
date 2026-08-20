import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <p className="text-sm text-muted-foreground">
        TanStack Start is running.
      </p>
    </main>
  );
}
