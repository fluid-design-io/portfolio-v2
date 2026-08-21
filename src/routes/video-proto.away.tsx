// THROWAWAY PROTOTYPE (ticket 07). Stands in for `/blog`.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/video-proto/away")({
  component: () => (
    <p className="font-mono text-sm text-white">stand-in for /blog</p>
  ),
});
