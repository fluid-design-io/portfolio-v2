import { useEffect, useRef, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/components/projects/projects.data";
import { useMediaQuery } from "@/hooks/use-media-query";

/** A quarter of the grid lights up at a time. */
const OVERLAY_SHARE = 0.25;
/** A new batch every 7s, each one visible for 5.5s. */
const CYCLE_MS = 7000;
const VISIBLE_MS = 5500;

/** Shared empty batch, so "nothing showing" is referentially stable. */
const NONE: readonly number[] = [];

/**
 * Pick `count` distinct indices in `[0, total)`, avoiding `exclude` so the same
 * cards never light up twice running. Falls back to the full set when the
 * exclusion leaves too few to choose from.
 *
 * Module scope is deliberate: it closes over nothing, which is what lets the
 * effect below declare a genuinely complete dependency array. See the note on
 * the effect for why that matters more than it looks.
 */
function pickRandomIndices(
  total: number,
  count: number,
  exclude: readonly number[],
): number[] {
  let eligible = Array.from({ length: total }, (_, i) => i).filter(
    (i) => !exclude.includes(i),
  );

  if (eligible.length < count) {
    eligible = Array.from({ length: total }, (_, i) => i);
  }

  const picked: number[] = [];
  while (picked.length < count && eligible.length > 0) {
    const randomIndex = Math.floor(Math.random() * eligible.length);
    picked.push(eligible[randomIndex] as number);
    eligible.splice(randomIndex, 1);
  }

  return picked;
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [activeOverlays, setActiveOverlays] = useState<readonly number[]>(NONE);
  // The previous batch is only ever read inside the interval, never during
  // render, so it is a ref rather than state — remembering it must not paint.
  const lastShownRef = useRef<readonly number[]>(NONE);
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const total = projects.length;
  // Desktop only, and hovering freezes it: a screenshot should not swap out
  // from under someone who is reading the card.
  const isCycling = isDesktop && !isHovered;
  // The original cleared the batch with a `setActiveOverlays([])` inside the
  // effect. oxlint's `react/set-state-in-effect` rightly objects to that, and
  // deriving it here is what the rule asks for: while the cycle is stopped —
  // hovered, or below the breakpoint — nothing is lit regardless of what the
  // last batch was.
  const shownOverlays = isCycling ? activeOverlays : NONE;

  /**
   * The whole cycle. Note there is no `eslint-disable` here, unlike the file
   * this was ported from — and that is load-bearing rather than tidy. The
   * React Compiler refuses to optimize any component in a file that suppresses
   * a React ESLint rule, and it does so silently: the Babel plugin emits no
   * diagnostic and the build succeeds. Hoisting `pickRandomIndices` out of the
   * component is what makes the dependency array below honest, which is what
   * lets the suppression go, which is what keeps this component compiled.
   */
  useEffect(() => {
    if (!isCycling) return;

    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const runOverlayCycle = () => {
      const picked = pickRandomIndices(
        total,
        Math.ceil(total * OVERLAY_SHARE),
        lastShownRef.current,
      );

      lastShownRef.current = picked;
      setActiveOverlays(picked);

      hideTimeout = setTimeout(() => setActiveOverlays(NONE), VISIBLE_MS);
    };

    runOverlayCycle();
    const interval = setInterval(runOverlayCycle, CYCLE_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, [isCycling, total]);

  // Clearing the batch here as well as deriving it above is not redundant: it
  // means the un-hover does not flash the stale batch for the one frame before
  // the effect restarts and picks a new one.
  const handleMouseEnter = () => {
    setIsHovered(true);
    setActiveOverlays(NONE);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // The listeners sit on a wrapper rather than the <ul>: hover-pause is
    // decorative, and a list is not an interactive element.
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            isActive={shownOverlays.includes(index)}
          />
        ))}
        {/* Filler cell, so the 1- and 2-column grids do not end ragged. At lg
            the nine cards fill three rows exactly, so it is hidden there. */}
        <li aria-hidden="true" className="relative bg-white/[0.03] lg:hidden">
          <div
            className="absolute inset-0 z-0 h-full w-full bg-repeat opacity-50"
            style={{
              backgroundImage: "url(/assets/images/scanline-dark.png)",
            }}
          />
        </li>
      </ul>
    </div>
  );
}
