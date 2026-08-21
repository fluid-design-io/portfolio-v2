import { useMatchRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

/**
 * Both encodes are keyint=4 on purpose: the reverse scrub is a storm of
 * backward seeks, and each seek decodes from the previous keyframe. A
 * keyframe every 4 frames keeps that to a few ms even on software decoders
 * (a sparse-keyframe export froze Safari and Firefox for seconds). The H.264
 * file is the `<source>` fallback for browsers without HEVC decode.
 */
const VIDEO_SRC_HEVC = "/assets/background.hevc.mp4";
const VIDEO_SRC_H264 = "/assets/background.h264.mp4";

/** Resting frame behind the home page. */
const HOME_TIME = 7.8;
/** Resting frame behind every other page (the video's final frame). */
const AWAY_TIME = 15;
/**
 * Seconds of video consumed per real second when scrubbing backwards. There is
 * no native reverse playback, so the reverse leg seeks frame by frame. 4.8x
 * rewinds the 7.2s transition in ~1.5s; the old stepper's ~0.35x pace made
 * returning home take twenty seconds.
 */
const REVERSE_RATE = 4.8;

/**
 * The site's signature background. Not a video that plays: a 15s timeline
 * whose resting frame is decided by the route.
 *
 * - On load it plays from 0 to the current route's resting frame.
 * - Leaving `/` plays forward to the final frame; returning scrubs backwards.
 * - The animation is one rAF loop driven by elapsed time, not `timeupdate`
 *   (which only fires a few times a second and made the old stop points land
 *   anywhere within ~250ms of the mark).
 *
 * Whenever the timeline is at rest, the frame is copied to a canvas and the
 * `<video>` is hidden. A fixed full-viewport video surface under the page
 * forces the compositor to blend every scrolled frame against a live video
 * layer, which is what made WebKit scrolling crawl and smear paint over the
 * code blocks; scrolling over a static canvas is free.
 */
export function BackgroundVideo() {
  const matchRoute = useMatchRoute();
  const isHome = Boolean(matchRoute({ to: "/" }));
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const target = isHome ? HOME_TIME : AWAY_TIME;
    let raf = 0;
    let cancelled = false;

    const freeze = () => {
      if (cancelled || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA)
        return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
      canvas.style.visibility = "visible";
      video.style.visibility = "hidden";
    };

    const unfreeze = () => {
      video.style.visibility = "visible";
      canvas.style.visibility = "hidden";
    };

    // Land exactly on the target frame, then freeze once the seek has decoded.
    const settle = () => {
      video.pause();
      if (Math.abs(video.currentTime - target) > 1 / 60) {
        video.currentTime = target;
        video.addEventListener("seeked", freeze, { once: true });
      } else {
        freeze();
      }
    };

    const playForward = () => {
      unfreeze();
      const step = () => {
        if (video.currentTime >= target) {
          settle();
          return;
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      // Autoplay refused (e.g. Low Power Mode): cut straight to the frame.
      video.play().catch(() => {
        cancelAnimationFrame(raf);
        if (!cancelled) settle();
      });
    };

    const playBackward = () => {
      unfreeze();
      video.pause();
      let last = performance.now();
      const step = (now: number) => {
        // A seek is still decoding; hold the clock so pace degrades to
        // whatever the decoder manages instead of skipping ahead.
        if (video.seeking) {
          last = now;
        } else {
          const next = video.currentTime - ((now - last) / 1000) * REVERSE_RATE;
          last = now;
          if (next <= target) {
            settle();
            return;
          }
          video.currentTime = next;
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (cancelled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        settle();
      } else if (video.currentTime < target) {
        playForward();
      } else if (video.currentTime > target) {
        playBackward();
      } else {
        settle();
      }
    };

    // Seeking before metadata arrives is undefined behaviour; wait it out.
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start, { once: true });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", start);
      video.removeEventListener("seeked", freeze);
      video.pause();
    };
  }, [isHome]);

  return (
    <div className="fixed inset-0 z-[-1] flex h-dvh w-full items-center justify-center bg-black">
      <div className="relative aspect-[750/512] max-h-[512px] w-full max-w-[750px]">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="size-full object-cover"
        >
          <source src={VIDEO_SRC_HEVC} type='video/mp4; codecs="hvc1"' />
          <source src={VIDEO_SRC_H264} type="video/mp4" />
        </video>
        <canvas
          ref={canvasRef}
          aria-hidden
          style={{ visibility: "hidden" }}
          className="absolute inset-0 size-full"
        />
      </div>
    </div>
  );
}
