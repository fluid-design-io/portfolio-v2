// THROWAWAY PROTOTYPE (ticket 07). Delete once ticket 13 mounts the real
// BackgroundVideo in __root.tsx.
//
// This is a layout route so the video mounts *above* the Outlet and survives
// navigation between its two children, which is the same relationship the root
// route has with `/` and `/blog`. Ticket 11 owns __root.tsx, so the prototype
// cannot mount there.
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { BackgroundVideo } from "../components/background-video";

export const HOME_PATH = "/video-proto";

export const Route = createFileRoute("/video-proto")({
  component: VideoProtoLayout,
});

type Sample = {
  t: number;
  paused: boolean;
  rate: number;
  duration: number;
  ready: number;
};

function VideoProtoLayout() {
  return (
    <>
      <BackgroundVideo homePath={HOME_PATH} />
      <main className="relative flex min-h-dvh flex-col items-center justify-center gap-6 text-white">
        <nav className="flex gap-4 font-mono text-sm">
          <Link
            to="/video-proto"
            className="rounded bg-white/10 px-3 py-1.5 backdrop-blur"
          >
            home
          </Link>
          <Link
            to="/video-proto/away"
            className="rounded bg-white/10 px-3 py-1.5 backdrop-blur"
          >
            away
          </Link>
        </nav>
        <Outlet />
        <Hud />
      </main>
    </>
  );
}

function Hud() {
  const [sample, setSample] = useState<Sample | null>(null);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    let frame = 0;
    let lastT = 0;
    let lastNow = 0;

    const tick = () => {
      const video = document.querySelector("video");
      if (video) {
        const now = performance.now();
        const t = video.currentTime;
        if (lastNow && now - lastNow > 200) {
          setRate(((t - lastT) / (now - lastNow)) * 1000);
          lastT = t;
          lastNow = now;
        } else if (!lastNow) {
          lastT = t;
          lastNow = now;
        }
        setSample({
          t,
          paused: video.paused,
          rate: video.playbackRate,
          duration: video.duration,
          ready: video.readyState,
        });
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!sample) return null;

  return (
    <pre className="rounded bg-black/70 px-4 py-3 text-left font-mono text-xs leading-relaxed backdrop-blur">
      {`currentTime  ${sample.t.toFixed(3)}
duration     ${Number.isFinite(sample.duration) ? sample.duration.toFixed(3) : "?"}
paused       ${String(sample.paused)}
readyState   ${sample.ready}
d(t)/dt      ${rate.toFixed(3)} s/s`}
    </pre>
  );
}
