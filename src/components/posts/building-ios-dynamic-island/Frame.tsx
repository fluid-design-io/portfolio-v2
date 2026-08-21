import { motion, type Variants } from "motion/react";
import { type ReactNode, useState } from "react";

import { Antennas, Buttons, Camera, Speaker, Wallpaper } from "./Components";

/**
 * A live iPhone 14 Pro, drawn entirely in CSS, with a zoom toggle.
 *
 * This file is the subject of `building-ios-dynamic-island.mdx`: the post
 * imports it with Vite's `?raw` and renders it through `DynamicCodeBlock`, so
 * what a reader sees is always this file as it stands.
 */
export function Frame({ children }: { children?: ReactNode }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="h-full w-full">
        <motion.div
          animate={{ scale: isZoomed ? 2.5 : 1, y: isZoomed ? 320 : 0 }}
          className="flex flex-col items-center py-4"
          transition={{ type: "spring", bounce: 0.08 }}
        >
          <div className="relative mx-auto w-full max-w-sm rounded-t-[4rem] rounded-b border-[1.5px] border-b-0 border-zinc-300 bg-gradient-to-t from-[#09070B] to-[#28232F] p-1 pb-0">
            <div className="relative mx-auto grid h-full min-h-[24rem] w-full overflow-hidden rounded-t-[3.75rem] rounded-b border-[0.625rem] border-b-0 border-zinc-900 bg-gradient-to-t from-[#21026f] via-[#e481ef] to-purple-100 p-2">
              <StatusBar />
              <Wallpaper />
              {children}
            </div>
            <Antennas />
            <Buttons />
            <Speaker />
          </div>
        </motion.div>
      </div>
      <button
        className="relative z-20 inline-flex items-center justify-center gap-2 rounded-md bg-zinc-700 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-600 active:bg-zinc-700 active:text-zinc-100/70 active:transition-none contrast-more:ring-1 contrast-more:ring-zinc-400/40"
        onClick={() => setIsZoomed(!isZoomed)}
        type="button"
      >
        {isZoomed ? "Zoom Out" : "Zoom In"}
      </button>
    </>
  );
}

/* Simplified Status Bar */
const islandDimensions = {
  height: 32,
  width: 102,
  borderRadius: 16,
};

const islandBounceEffect = 0.25;

const islandBgVariants: Variants = {
  tap: {
    scale: 0.94,
    transition: {
      type: "spring",
      bounce: 0.95,
      duration: 0.15,
    },
  },
};

function StatusBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-0 px-2.5 py-2">
      <div className="relative flex h-full w-full flex-1 flex-col items-center justify-end">
        {/* Top island with camera */}
        <motion.div
          style={{
            position: "absolute",
            height: islandDimensions.height - 2,
            width: islandDimensions.width - 4,
            borderRadius: 18,
            backgroundColor: "#020202",
            zIndex: 50,
            top: 1,
            pointerEvents: "none",
            clip: "rect(0px, 166px, 64px, -64px)",
          }}
          transition={{
            type: "spring",
            bounce: 0,
            restDelta: 0.008,
          }}
        >
          <Camera />
        </motion.div>
        <motion.div
          animate={{
            height: islandDimensions.height,
            width: islandDimensions.width,
            borderRadius: islandDimensions.borderRadius,
          }}
          className="absolute inset-x-0 top-0 z-30 mx-auto touch-manipulation overflow-hidden ring-1 ring-black/0 select-none"
          initial={false}
          transition={{
            default: {
              type: "spring",
              bounce: islandBounceEffect,
              restDelta: 0.008,
            },
          }}
          whileTap="tap"
        >
          {/* island background for hover/tap */}
          <motion.div
            animate={{ borderRadius: islandDimensions.borderRadius }}
            className="pointer-events-none absolute inset-0 z-30"
            initial={false}
            transition={{
              type: "spring",
              bounce: 0.3,
              restDelta: 0.008,
            }}
            variants={islandBgVariants}
          />
        </motion.div>
        <div className="flex-1" />
      </div>
    </div>
  );
}
