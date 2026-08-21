import { cn } from "@/lib/cn";

/**
 * The parts of the iPhone 14 Pro shell, all drawn in CSS.
 *
 * This file is the subject of `building-ios-dynamic-island.mdx`: the post
 * imports it with Vite's `?raw` and renders it through `DynamicCodeBlock`, so
 * what a reader sees is always this file as it stands.
 */

export function Wallpaper() {
  return (
    <>
      <div
        className="absolute inset-x-[-50%] top-[-45%] mix-blend-hard-light"
        style={{
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at center, rgba(210,21,217,0.8) 0%, rgba(243,146,247,0.3) 50%)",
        }}
      />
      <div
        className="absolute inset-x-[-100%] bottom-[-130%] mix-blend-hard-light"
        style={{
          width: "300%",
          height: "200%",
          background:
            "radial-gradient(circle at center, rgba(9,2,46,0.2) 0%, rgba(197,104,212,0.25) 30%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          WebkitMask:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 70%)",
        }}
      >
        <div
          className="absolute -inset-x-1/2 bottom-[-100%] mix-blend-multiply"
          style={{
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle at center, rgba(31,2,72,0.9) 0%, rgba(210,21,217,0) 50%)",
          }}
        />
      </div>
      <div
        className="mix-blend-color-screen absolute -inset-x-0 bottom-0"
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(0deg, rgba(9,2,46,.5) 0%, rgba(167,74,192,0.25) 100%)",
        }}
      />
    </>
  );
}

const antennaBand = "absolute z-20 bg-[#68566E]";

export function Antennas() {
  return (
    <>
      {/* Left */}
      <div className={cn(antennaBand, "top-[4.5rem] -left-0.5 h-2 w-0.5")} />
      {/* Top */}
      <div className={cn(antennaBand, "-top-0.5 right-[4.5rem] h-0.5 w-2")} />
      {/* Right */}
      <div className={cn(antennaBand, "top-[4.5rem] -right-0.5 h-2 w-0.5")} />
    </>
  );
}

const sideButton = "absolute w-0.5";
const sideButtonGradient =
  "linear-gradient(0deg, rgba(205,201,205,1) 0%, rgba(42,35,53,1) 8%, rgba(84,77,95,1) 16%, rgba(121,112,132,1) 50%, rgba(84,77,95,1) 88%, rgba(42,35,53,1) 92%, rgba(205,201,205,1) 100%)";

export function Buttons() {
  return (
    <>
      <div
        className={cn(sideButton, "top-[8.25rem] -left-1 h-6")}
        style={{ background: sideButtonGradient }}
      />
      <div
        className={cn(sideButton, "top-[12rem] -left-1 h-14")}
        style={{ background: sideButtonGradient }}
      />
      <div
        className={cn(sideButton, "top-[16.5rem] -left-1 h-14")}
        style={{ background: sideButtonGradient }}
      />
      <div
        className={cn(sideButton, "top-[14.125rem] -right-1 h-24")}
        style={{ background: sideButtonGradient }}
      />
    </>
  );
}

export function Speaker() {
  return (
    <div className="absolute inset-x-0 top-1 mx-auto h-0.5 w-16 rounded-b-full border-[0.5px] border-t-0 border-white/5 bg-zinc-200/5">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,rgba(0, 0, 0, 0.3) 0.5px,rgba(0, 0, 0, 0) 0)",
          backgroundSize: "2px 2px",
        }}
      />
    </div>
  );
}

export function Camera() {
  return (
    <div className="absolute top-[1px] right-0 flex h-7 w-7 items-center justify-center rounded-full">
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="absolute inset-0.5 rounded-full bg-zinc-900" />
        <div className="absolute inset-1 rounded-full bg-stone-800" />
        <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-neutral-800 to-zinc-900" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-700 via-black to-blue-900" />
        <div className="absolute top-[9px] left-[9.5px] h-0.5 w-0.5 rounded-full bg-white blur-[1px]" />
        <div className="absolute bottom-[8.5px] left-[11.5px] h-0.5 w-0.5 rounded-full bg-blue-200/50 blur-[1px]" />
      </div>
    </div>
  );
}
