// THROWAWAY PROTOTYPE (ticket 07). Stands in for `/`.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/video-proto/")({
  component: () => (
    <p className="font-mono text-sm text-white">stand-in for /</p>
  ),
});
