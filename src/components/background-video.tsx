import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

// Video timing constants
const VIDEO_CONSTANTS = {
  FPS: 24,
  FRAME_DURATION: 1 / 24 / 7.2,
  FOREGROUND_TIME: 7.8, // Time when foreground content appears
  TRANSITION_TIME: 7.8, // Time for route transition animations
  END_TIME: 15, // Final frame of the video
} as const;

const VIDEO_SRC =
  "https://utfs.io/f/WKXGgxQVQnWkA0WCYFsuPTbE04ZksNL3ci6rFQoICadqUXen";

/**
 * The site's signature background. Not a video that plays: a 15s timeline
 * scrubbed by route.
 *
 * - Plays to 7.8s on first load, then pauses. That frame is the foreground.
 * - Leaving `homePath` plays forward from 7.8s to 15s, then pauses.
 * - Returning to `homePath` walks `currentTime` backwards by hand at
 *   FRAME_DURATION per rAF until it reaches 7.8s.
 *
 * `homePath` exists only so the prototype route can drive this without
 * mounting it in `__root.tsx`. Production mounts it with the default.
 */
export function BackgroundVideo(props: { homePath?: string }) {
  // NOT `({ homePath = "/" })`. A default value inside a destructured props
  // parameter makes React Compiler 1.0 bail on the whole component, silently.
  // See the ticket 07 Answer.
  const homePath = props.homePath ?? "/";
  const pathname = useLocation({ select: (location) => location.pathname });
  const videoRef = useRef<HTMLVideoElement>(null);
  const initialPlayDoneRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let reverseAnimationFrame = 0;

    // play() rejects with AbortError whenever a pause() or a seek interrupts
    // it, which the scrub does constantly. Swallow it.
    const play = () => {
      video.play().catch(() => {});
    };

    const playInReverse = () => {
      if (!video.paused) video.pause();
      const nextTime = video.currentTime - VIDEO_CONSTANTS.FRAME_DURATION;

      if (nextTime > VIDEO_CONSTANTS.FOREGROUND_TIME) {
        video.currentTime = nextTime;
        reverseAnimationFrame = requestAnimationFrame(playInReverse);
      } else {
        video.currentTime = VIDEO_CONSTANTS.FOREGROUND_TIME;
        video.pause();
      }
    };

    // Start playing when route changes (if initial animation is done)
    if (initialPlayDoneRef.current) {
      if (
        pathname === homePath &&
        video.currentTime > VIDEO_CONSTANTS.TRANSITION_TIME
      ) {
        playInReverse();
      } else {
        play();
      }
    }

    const handleTimeUpdate = () => {
      if (
        !initialPlayDoneRef.current &&
        video.currentTime >= VIDEO_CONSTANTS.FOREGROUND_TIME
      ) {
        initialPlayDoneRef.current = true;
        video.pause();
      }

      if (initialPlayDoneRef.current) {
        if (pathname === homePath) {
          if (video.currentTime > VIDEO_CONSTANTS.TRANSITION_TIME) {
            cancelAnimationFrame(reverseAnimationFrame);
            playInReverse();
          }
        } else {
          if (video.currentTime < VIDEO_CONSTANTS.TRANSITION_TIME) {
            video.currentTime = VIDEO_CONSTANTS.TRANSITION_TIME;
            play();
          } else if (video.currentTime >= VIDEO_CONSTANTS.END_TIME) {
            video.pause();
          }
        }
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      cancelAnimationFrame(reverseAnimationFrame);
    };
  }, [pathname, homePath]);

  return (
    <div className="fixed inset-0 z-[-1] flex h-dvh w-full items-center justify-center bg-black">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        className="aspect-[750/512] max-h-[512px] w-full max-w-[750px] object-cover"
      />
    </div>
  );
}
