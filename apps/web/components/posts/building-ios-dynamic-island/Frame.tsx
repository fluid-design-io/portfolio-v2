"use client";

import { Antannas, Buttons, Speaker, Camera, Wallpaper } from "./Components";
import { Button } from "../Button";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@workspace/ui/lib/utils";

export const Frame = ({ children }: { children: React.ReactNode }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <>
      <div className='w-full h-full'>
        <motion.div
          className='flex flex-col items-center py-4'
          animate={{ scale: isZoomed ? 2.5 : 1, y: isZoomed ? 320 : 0 }}
          transition={{ type: "spring", bounce: 0.08 }}
        >
          <div className='w-full rounded-t-[4rem] p-1 border-[1.5px] relative border-zinc-300 pb-0 border-b-0 rounded-b bg-gradient-to-t from-[#09070B] to-[#28232F] max-w-sm mx-auto'>
            <div className='grid rounded-t-[3.75rem] rounded-b p-2 min-h-[24rem] w-full mx-auto h-full bg-gradient-to-t from-[#21026f] via-[#e481ef] to-purple-100 relative overflow-hidden border-[0.625rem] border-zinc-900 border-b-0'>
              <StatusBar />
              <Wallpaper />
              {children}
            </div>
            <Antannas />
            <Buttons />
            <Speaker />
          </div>
        </motion.div>
      </div>
      <Button onClick={() => setIsZoomed(!isZoomed)} className='z-20 relative'>
        {isZoomed ? "Zoom Out" : "Zoom In"}
      </Button>
    </>
  );
};

/* Simplified Status Bar */
export const StatusBar = () => {
  const islandDimensions = {
    height: 32,
    width: 102,
    borderRadius: 16,
  };
  const islandBouceEffect = 0.25;

  const islandBgVariants = {
    tap: {
      scale: 0.94,
      transition: {
        type: "spring",
        bounce: 0.95,
        duration: 0.15,
      },
    },
  };
  return (
    <div className='absolute top-0 inset-x-0 px-2.5 py-2 gap-0 flex justify-between items-center z-10'>
      <div className='flex flex-col justify-end items-center w-full h-full flex-1 relative'>
        {/* Top island with camera */}
        <motion.div
          style={{
            position: "absolute",
            height: 32 - 2,
            width: 102 - 4,
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
          id='island'
          className={cn(
            "z-30 absolute ring-1 island select-none touch-manipulation mx-auto inset-x-0 top-0 overflow-hidden",
            "ring-black/0"
          )}
          initial={false}
          animate={{
            height: islandDimensions.height,
            width: islandDimensions.width,
            borderRadius: islandDimensions.borderRadius,
          }}
          whileHover='hover'
          whileTap='tap'
          transition={{
            default: {
              type: "spring",
              bounce: islandBouceEffect,
              restDelta: 0.008,
            },
          }}
        >
          {/* island background for hover/tap */}
          <motion.div
            className='island-background absolute pointer-events-none z-30 inset-0'
            initial={false}
            animate={{
              borderRadius: islandDimensions.borderRadius,
            }}
            variants={islandBgVariants}
            transition={{
              type: "spring",
              bounce: 0.3,
              restDelta: 0.008,
            }}
          />
        </motion.div>
        <div className='flex-1' />
      </div>
    </div>
  );
};
